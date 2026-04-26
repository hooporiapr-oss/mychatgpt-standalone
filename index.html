import React, { useEffect, useRef, useState } from "react";

const h = React.createElement;
const STORAGE_KEY = "grh_live_chat_v4";

const LINKS = {
  level2: "https://buy.stripe.com/6oUdRacOH6VUdYQcyS8Zq06",
  level3: "https://buy.stripe.com/00weVedSL5RQ08042m8Zq07",
  bundle: "https://buy.stripe.com/8x2cN6aGz2FE7As1Ue8Zq08"
};

const css = `
* { box-sizing: border-box; }
body { margin: 0; }
.grh-page {
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #7c2d12 0%, #09090b 34%, #000 100%);
  color: white;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif;
}
.grh-header {
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(255,255,255,.10);
  background: rgba(0,0,0,.82);
  backdrop-filter: blur(12px);
}
.grh-header-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.grh-kicker {
  margin: 0;
  color: #fb923c;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: .24em;
  text-transform: uppercase;
}
.grh-title {
  margin: 4px 0 0;
  font-size: 30px;
  line-height: 1.05;
  font-weight: 950;
}
.grh-reset {
  border: 1px solid rgba(255,255,255,.24);
  background: transparent;
  color: white;
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 900;
  cursor: pointer;
}
.grh-main {
  max-width: 1180px;
  margin: 0 auto;
  padding: 16px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 16px;
}
.grh-chat {
  height: calc(100vh - 116px);
  min-height: 620px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.10);
  border-radius: 28px;
  background: #09090b;
  box-shadow: 0 24px 80px rgba(0,0,0,.50);
}
.grh-chat-top {
  border-bottom: 1px solid rgba(255,255,255,.10);
  padding: 16px 20px;
}
.grh-coach {
  margin: 0;
  font-size: 15px;
  font-weight: 900;
}
.grh-saved {
  margin: 4px 0 0;
  font-size: 12px;
  color: #71717a;
}
.grh-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.grh-row { display: flex; }
.grh-row-user { justify-content: flex-end; }
.grh-row-bot { justify-content: flex-start; }
.grh-bubble {
  max-width: 88%;
  white-space: pre-line;
  border-radius: 24px;
  padding: 14px 18px;
  font-size: 15px;
  line-height: 1.55;
}
.grh-bot {
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.055);
  color: #f4f4f5;
}
.grh-user {
  background: #f97316;
  color: #111;
  font-weight: 850;
}
.grh-options {
  border-top: 1px solid rgba(255,255,255,.10);
  padding: 12px 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.grh-option {
  border: 1px solid rgba(251,146,60,.45);
  background: rgba(249,115,22,.12);
  color: #fed7aa;
  border-radius: 999px;
  padding: 9px 13px;
  font-size: 13px;
  font-weight: 900;
  cursor: pointer;
}
.grh-form {
  border-top: 1px solid rgba(255,255,255,.10);
  padding: 16px;
  display: flex;
  gap: 10px;
}
.grh-input {
  flex: 1;
  min-width: 0;
  border: 1px solid rgba(255,255,255,.10);
  background: #000;
  color: white;
  border-radius: 18px;
  padding: 13px 14px;
  outline: none;
  font-size: 15px;
}
.grh-send {
  border: 0;
  background: #f97316;
  color: #111;
  border-radius: 18px;
  padding: 0 18px;
  font-weight: 950;
  cursor: pointer;
}
.grh-side { display: flex; flex-direction: column; gap: 16px; }
.grh-panel {
  border: 1px solid rgba(255,255,255,.10);
  border-radius: 28px;
  background: #09090b;
  padding: 20px;
  box-shadow: 0 24px 80px rgba(0,0,0,.32);
}
.grh-panel h2 { margin: 0; font-size: 22px; font-weight: 950; }
.grh-muted { margin: 6px 0 0; color: #a1a1aa; font-size: 14px; line-height: 1.5; }
.grh-link {
  display: block;
  text-decoration: none;
  color: white;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.055);
  border-radius: 18px;
  padding: 14px;
  margin-top: 10px;
}
.grh-link-best { background: #f97316; color: #111; border-color: #f97316; }
.grh-link p { margin: 0; }
.grh-link .main { font-weight: 950; }
.grh-link .sub { margin-top: 4px; opacity: .78; font-size: 14px; }
.grh-note {
  border: 1px solid rgba(249,115,22,.26);
  border-radius: 28px;
  background: rgba(249,115,22,.12);
  padding: 20px;
}
.grh-small-title {
  margin: 0;
  color: #fdba74;
  font-size: 12px;
  letter-spacing: .2em;
  text-transform: uppercase;
  font-weight: 950;
}
.grh-big { margin: 10px 0 0; font-size: 24px; line-height: 1.1; font-weight: 950; }
@media (max-width: 900px) {
  .grh-main { grid-template-columns: 1fr; }
  .grh-chat { height: 72vh; min-height: 560px; }
  .grh-title { font-size: 24px; }
}
`;

function makeBot(text, options) {
  return { role: "bot", text: text, options: Array.isArray(options) ? options : [] };
}

function makeUser(text) {
  return { role: "user", text: text, options: [] };
}

const welcome = makeBot(
  "Welcome to Basketball Money.\nBienvenido.\n\nThis is not motivation. Esto es accountability.\n\nIf you say you want it, prove it.\n\nWhy would someone choose you?",
  ["Skill", "Work ethic", "Trust", "I don't know"]
);

function loadSaved() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function saveData(data) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
}

function nextReply(input, stage) {
  const text = String(input || "").toLowerCase();

  if (stage === "value") {
    if (text.includes("skill")) return { stage: "valueProof", message: makeBot("Everybody says skill.\n\nWhat specific skill makes a coach say: I need this player on the floor?") };
    if (text.includes("work")) return { stage: "valueProof", message: makeBot("Work ethic sounds good.\n\nWhat did you actually do this week that proves it?") };
    if (text.includes("trust")) return { stage: "valueProof", message: makeBot("Trust is serious.\n\nCan a coach trust you when things go bad, or only when you are comfortable?") };
    return { stage: "valueProof", message: makeBot("That is honest.\n\nNot knowing your value means someone else gets to define it for you.\n\nWhat do you bring that helps a team win?") };
  }

  if (stage === "valueProof") {
    return { stage: "behavior", message: makeBot("Good. Now we test it.\n\nThat is what you say. Let us see what you do.\n\nWhen nobody is watching, do your habits match what you say you want?", ["Consistent", "Inconsistent", "Feel-based", "I don't know"]) };
  }

  if (stage === "behavior") {
    if (text.includes("consistent") && !text.includes("inconsistent")) return { stage: "behaviorProof", message: makeBot("Consistent with what?\n\nWhat do you do daily?") };
    if (text.includes("inconsistent")) return { stage: "behaviorProof", message: makeBot("Good. At least you are not lying.\n\nWhat breaks first: focus, effort, or discipline?") };
    if (text.includes("feel")) return { stage: "behaviorProof", message: makeBot("So your future depends on your mood?\n\nThat is not enough. What habit are you fixing first?") };
    return { stage: "behaviorProof", message: makeBot("If you do not track habits, you are guessing.\n\nWhat pattern do you notice?") };
  }

  if (stage === "behaviorProof") {
    return { stage: "influence", message: makeBot("You are not building yourself alone.\n\nWho is influencing you?", ["Positive people", "Negative people", "I am not aware", "I ignore it"]) };
  }

  if (stage === "influence") {
    if (text.includes("positive")) return { stage: "influenceProof", message: makeBot("Positive is not enough.\n\nDo they challenge you, or just support you?") };
    if (text.includes("negative")) return { stage: "influenceProof", message: makeBot("You know they are negative.\n\nSo why are they still close enough to influence you?") };
    if (text.includes("aware")) return { stage: "influenceProof", message: makeBot("That means you are being shaped without paying attention.\n\nWho gets your attention most?") };
    return { stage: "influenceProof", message: makeBot("Ignoring influence makes you easy to control.\n\nWhat influence are you allowing?") };
  }

  if (stage === "influenceProof") {
    const msg = "Most players stop here.\n\nIf you are serious, we go deeper.\n\nLevel 2: Separation - $29\n" + LINKS.level2 + "\n\nBest Value: Levels 2 + 3 Bundle - $49\n" + LINKS.bundle + "\n\nOne level shows interest.\nThe full path shows commitment.\n\nChoose.";
    return { stage: "paywall", message: makeBot(msg, ["I paid for Level 2", "I bought the bundle", "What is Level 2?"]) };
  }

  if (stage === "paywall") {
    if (text.includes("paid") || text.includes("bundle") || text.includes("unlocked")) return { stage: "l2a", message: makeBot("Level 2: Separation starts now.\n\nWhen pressure hits, does your confidence stay or disappear?", ["It stays", "It disappears", "It depends", "I fake it"]) };
    if (text.includes("what")) return { stage: "paywall", message: makeBot("Level 2 is Separation: confidence, coach perception, opportunity, discipline, identity, consistency, and productivity.\n\nUnlock Level 2 here:\n" + LINKS.level2, ["I paid for Level 2", "I bought the bundle"]) };
    return { stage: "paywall", message: makeBot("We are not moving forward yet.\n\nUnlock Level 2 or the bundle, then come back and say what you chose.") };
  }

  if (stage === "l2a") return { stage: "l2b", message: makeBot("What does your coach really see when they watch you?", ["Reliable player", "Talented but inconsistent", "Good attitude, low impact", "I don't know"]) };
  if (stage === "l2b") return { stage: "l2c", message: makeBot("If opportunity came this week, would you be ready?", ["Yes", "No", "Almost", "I don't know"]) };
  if (stage === "l2c") return { stage: "l2d", message: makeBot("What do you do even when you do not feel like it?", ["Train", "Study the game", "Take care of my body", "Nothing consistent"]) };
  if (stage === "l2d") return { stage: "l2e", message: makeBot("Are you building a player, or just playing the role?", ["Building", "Acting", "Both", "I don't know"]) };
  if (stage === "l2e") return { stage: "l2f", message: makeBot("What version of you shows up every day?", ["Locked in", "Up and down", "Lazy sometimes", "Depends on mood"]) };
  if (stage === "l2f") return { stage: "l2g", message: makeBot("Are your days producing results, or just keeping you busy?\n\nName one measurable result from the last 7 days.") };

  if (stage === "l2g") {
    const msg = "You made it through Separation.\n\nNow comes Level 3: Mastery.\n\nMoney. Brand. Visibility. Decisions. Readiness.\n\nUnlock Level 3 here:\n" + LINKS.level3 + "\n\nDo not stop right before the part that exposes you.";
    return { stage: "level3Paywall", message: makeBot(msg, ["I paid for Level 3", "I bought the bundle"]) };
  }

  if (stage === "level3Paywall") {
    if (text.includes("paid") || text.includes("bundle") || text.includes("level 3")) return { stage: "l3a", message: makeBot("Level 3: Mastery starts now.\n\nMoney follows value.\n\nWhat value do you bring that someone would pay for, recruit, sponsor, or invest in?") };
    return { stage: "level3Paywall", message: makeBot("We are not moving forward yet.\n\nUnlock Level 3 here:\n" + LINKS.level3) };
  }

  if (stage === "l3a") return { stage: "l3b", message: makeBot("Your brand is what people believe before you explain yourself.\n\nWhat do people think when they hear your name?", ["Serious player", "Talented but inconsistent", "Unknown", "Not sure"]) };
  if (stage === "l3b") return { stage: "l3c", message: makeBot("Visibility exposes you.\n\nIf more people watched you today, would it help you or expose you?", ["Help me", "Expose me", "Both", "Not ready"]) };
  if (stage === "l3c") return { stage: "l3d", message: makeBot("Decisions define future.\n\nWhat decision are you avoiding right now?\n\nDo not say nothing.") };
  if (stage === "l3d") return { stage: "l3e", message: makeBot("Wanting it and being ready are not the same.\n\nIf opportunity came tomorrow, what would you need to fix today?") };
  if (stage === "l3e") return { stage: "daily", message: makeBot("Now you understand.\n\nBasketball money is not luck. It is not hype. It is not just talent.\n\nMoney follows value. Visibility exposes habits. Decisions define the future.\n\nWhat are you going to do?") };

  return { stage: "daily", message: makeBot("You said you wanted more.\n\nWhat did you actually do today that proves you are serious?\n\nBe specific.") };
}

function Bubble(props) {
  const isUser = props.message.role === "user";
  const rowClass = isUser ? "grh-row grh-row-user" : "grh-row grh-row-bot";
  const bubbleClass = isUser ? "grh-bubble grh-user" : "grh-bubble grh-bot";
  return h("div", { className: rowClass }, h("div", { className: bubbleClass }, props.message.text));
}

function Options(props) {
  if (!props.options || props.options.length === 0) return null;
  return h(
    "div",
    { className: "grh-options" },
    props.options.map(function(option) {
      return h(
        "button",
        { key: option, type: "button", className: "grh-option", onClick: function() { props.onChoose(option); } },
        option
      );
    })
  );
}

function PayLink(props) {
  const className = props.best ? "grh-link grh-link-best" : "grh-link";
  return h(
    "a",
    { href: props.href, target: "_blank", rel: "noopener noreferrer", className: className },
    h("p", { className: "main" }, props.title),
    h("p", { className: "sub" }, props.sub)
  );
}

function SidePanel() {
  return h(
    "aside",
    { className: "grh-side" },
    h(
      "div",
      { className: "grh-panel" },
      h("h2", null, "Unlock Access"),
      h("p", { className: "grh-muted" }, "Stripe checkout is connected."),
      h(PayLink, { href: LINKS.level2, title: "Level 2", sub: "Separation - $29" }),
      h(PayLink, { href: LINKS.level3, title: "Level 3", sub: "Mastery - $39" }),
      h(PayLink, { href: LINKS.bundle, title: "Best Value", sub: "Levels 2 + 3 - $49", best: true })
    ),
    h(
      "div",
      { className: "grh-note" },
      h("p", { className: "grh-small-title" }, "Live note"),
      h("p", { className: "grh-muted" }, "This is ready as a front-end launch page. For automatic paid unlocking, connect Stripe webhooks to a backend.")
    ),
    h(
      "div",
      { className: "grh-panel" },
      h("p", { className: "grh-small-title" }, "Bori says"),
      h("p", { className: "grh-big" }, "You said you wanted it. Now choose."),
      h("p", { className: "grh-muted" }, "Full-screen standalone page. No ChatGPT margin. Progress saved.")
    )
  );
}

export default function App() {
  const saved = typeof window !== "undefined" ? loadSaved() : null;
  const initialMessages = saved && Array.isArray(saved.messages) ? saved.messages : [welcome];
  const initialStage = saved && saved.stage ? saved.stage : "value";

  const [messages, setMessages] = useState(initialMessages);
  const [stage, setStage] = useState(initialStage);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(function() {
    document.title = "Get Ready Hoops | Basketball Money";
  }, []);

  useEffect(function() {
    saveData({ messages: messages, stage: stage });
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, stage]);

  const last = messages[messages.length - 1];
  const options = last && last.role === "bot" ? last.options : [];

  function send(value) {
    const clean = String(value || "").trim();
    if (!clean) return;
    const result = nextReply(clean, stage);
    setMessages(function(prev) {
      return prev.concat([makeUser(clean), result.message]);
    });
    setStage(result.stage);
    setInput("");
  }

  function reset() {
    setMessages([welcome]);
    setStage("value");
    setInput("");
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  }

  const bubbles = messages.map(function(message, index) {
    return h(Bubble, { key: index, message: message });
  });
  bubbles.push(h("div", { key: "bottom", ref: bottomRef }));

  return h(
    "div",
    { className: "grh-page" },
    h("style", null, css),
    h(
      "header",
      { className: "grh-header" },
      h(
        "div",
        { className: "grh-header-inner" },
        h(
          "div",
          null,
          h("p", { className: "grh-kicker" }, "Basketball Money"),
          h("h1", { className: "grh-title" }, "Get Ready Hoops")
        ),
        h("button", { type: "button", className: "grh-reset", onClick: reset }, "Reset")
      )
    ),
    h(
      "main",
      { className: "grh-main" },
      h(
        "section",
        { className: "grh-chat" },
        h(
          "div",
          { className: "grh-chat-top" },
          h("p", { className: "grh-coach" }, "Bori - Live Accountability Coach"),
          h("p", { className: "grh-saved" }, "Progress is saved on this device.")
        ),
        h("div", { className: "grh-messages" }, bubbles),
        h(Options, { options: options, onChoose: send }),
        h(
          "form",
          {
            className: "grh-form",
            onSubmit: function(event) {
              event.preventDefault();
              send(input);
            }
          },
          h("input", {
            value: input,
            onChange: function(event) { setInput(event.target.value); },
            placeholder: "Type your answer...",
            className: "grh-input"
          }),
          h("button", { type: "submit", className: "grh-send" }, "Send")
        )
      ),
      h(SidePanel, null)
    )
  );
}
