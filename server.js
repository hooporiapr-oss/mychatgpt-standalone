// server.js
// Get Ready Hoops — Stripe Checkout + Webhook Backend

import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/*
  SETUP:
  1. npm init -y
  2. npm install express stripe dotenv
  3. Add "type": "module" to package.json
  4. Create .env with:

     STRIPE_SECRET_KEY=sk_test_or_live_xxx
     STRIPE_WEBHOOK_SECRET=whsec_xxx
     BASE_URL=http://localhost:4242
     PORT=4242

  5. Put your index.html inside a folder named public:

     public/index.html

  6. Run:

     node server.js
*/

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 4242;
const baseUrl = process.env.BASE_URL || `http://localhost:${port}`;

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY in .env");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PRICE_IDS = {
  level2: "price_1TQ3BcIC7qSWxSMT3WY8iRaH",
  level3: "price_1TQ3DQIC7qSWxSMTOdat5OrZ",
  bundle: "price_1TQ3EtIC7qSWxSMTyYle2eVY"
};

const ACCESS_BY_PRODUCT = {
  level2: ["level2"],
  level3: ["level3"],
  bundle: ["level2", "level3"]
};

const DATA_DIR = path.join(__dirname, "data");
const DB_FILE = path.join(DATA_DIR, "payments.json");

function ensureDatabase() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ payments: {} }, null, 2));
  }
}

function readDatabase() {
  ensureDatabase();
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, "utf8"));
  } catch (error) {
    return { payments: {} };
  }
}

function writeDatabase(data) {
  ensureDatabase();
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

function savePaidAccess({ sessionId, email, product, access }) {
  const db = readDatabase();
  db.payments[sessionId] = {
    sessionId,
    email: email || null,
    product,
    access,
    paid: true,
    updatedAt: new Date().toISOString()
  };
  writeDatabase(db);
}

function getPaidAccess(sessionId) {
  const db = readDatabase();
  return db.payments[sessionId] || null;
}

// Stripe webhook must use raw body BEFORE express.json().
app.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  const signature = req.headers["stripe-signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return res.status(500).send("Missing STRIPE_WEBHOOK_SECRET");
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, signature, webhookSecret);
  } catch (error) {
    console.error("Webhook signature verification failed:", error.message);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const product = session.metadata?.product;
    const access = ACCESS_BY_PRODUCT[product] || [];

    if (session.payment_status === "paid" && access.length > 0) {
      savePaidAccess({
        sessionId: session.id,
        email: session.customer_details?.email,
        product,
        access
      });
    }
  }

  res.json({ received: true });
});

// JSON routes after webhook.
app.use(express.json());

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const product = req.body?.product;
    const price = PRICE_IDS[product];

    if (!price) {
      return res.status(400).json({ error: "Invalid product" });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price,
          quantity: 1
        }
      ],
      metadata: {
        product
      },
      success_url: `${baseUrl}/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/?canceled=true`
    });

    return res.json({ url: session.url });
  } catch (error) {
    console.error("Create checkout error:", error);
    return res.status(500).json({ error: "Could not create checkout session" });
  }
});

app.get("/api/verify-session", async (req, res) => {
  try {
    const sessionId = String(req.query.session_id || "");

    if (!sessionId.startsWith("cs_")) {
      return res.status(400).json({ paid: false, error: "Invalid session ID" });
    }

    const existing = getPaidAccess(sessionId);
    if (existing?.paid) {
      return res.json({
        paid: true,
        product: existing.product,
        access: existing.access,
        email: existing.email
      });
    }

    // Fallback verification. Webhook is still the source of fulfillment,
    // but this helps if the success page loads before webhook writes the file.
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const product = session.metadata?.product;
    const access = ACCESS_BY_PRODUCT[product] || [];

    if (session.payment_status === "paid" && access.length > 0) {
      savePaidAccess({
        sessionId: session.id,
        email: session.customer_details?.email,
        product,
        access
      });

      return res.json({
        paid: true,
        product,
        access,
        email: session.customer_details?.email || null
      });
    }

    return res.json({ paid: false, access: [] });
  } catch (error) {
    console.error("Verify session error:", error);
    return res.status(500).json({ paid: false, error: "Could not verify session" });
  }
});

// Serve your one-file website from /public.
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  ensureDatabase();
  console.log(`Get Ready Hoops running at ${baseUrl}`);
});
