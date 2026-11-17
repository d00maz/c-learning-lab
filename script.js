:root {
  --bg: #07141f;
  --bg-strong: #091c2a;
  --panel: #0f2333;
  --panel-strong: #102a3b;
  --ink: #eaf7ff;
  --muted: #aac2d8;
  --accent: #56d4ff;
  --mint: #7ef0c2;
  --warning: #ffc857;
  --danger: #ff7d7d;
  --line: rgba(152, 201, 240, 0.18);
  --shadow: 0 20px 50px rgba(0, 0, 0, 0.22);
  --radius: 20px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 82px; }
body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #040d15 0%, #081922 30%, #0b1d2a 100%);
  color: var(--ink);
  line-height: 1.6;
}
a { color: inherit; text-decoration: none; }
button, input, textarea { font: inherit; }
img { max-width: 100%; }
pre, code { font-family: "JetBrains Mono", monospace; }
.container { width: min(1160px, calc(100% - 36px)); margin: 0 auto; }

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(15px);
  background: rgba(8, 22, 31, 0.8);
  border-bottom: 1px solid var(--line);
}
.nav-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 72px;
  gap: 1rem;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 800;
}
.brand-mark {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background: linear-gradient(135deg, var(--accent), var(--mint));
  color: #07141f;
  font-weight: 900;
}
.nav {
  display: flex;
  align-items: center;
  gap: 1.15rem;
  flex-wrap: wrap;
}
.nav a { color: var(--muted); font-size: 0.92rem; }
.nav a:hover, .manual-card a:hover { color: var(--ink); }

.hero { padding: 72px 0 40px; }
.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: center;
}
.eyebrow {
  margin: 0 0 0.7rem;
  font-size: 0.8rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--mint);
  font-weight: 800;
}
.hero-copy h1 {
  max-width: 720px;
  margin: 0;
  font-size: clamp(2.8rem, 6vw, 4.8rem);
  line-height: 1.02;
  letter-spacing: -0.06em;
}
.lead {
  max-width: 62ch;
  color: var(--muted);
  font-size: 1.08rem;
  margin: 1.2rem 0 0;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.7rem;
}
.button {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 0.82rem 1.15rem;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.18s ease, border-color 0.18s ease;
}
.button:hover { transform: translateY(-1px); }
.button.primary {
  color: #061823;
  background: linear-gradient(135deg, var(--accent), var(--mint));
  box-shadow: 0 12px 30px rgba(86, 212, 255, 0.34);
}
.button.secondary {
  background: rgba(255,255,255,0.02);
  border-color: var(--line);
  color: var(--ink);
}
.button.small {
  padding: 0.52rem 0.8rem;
  font-size: 0.8rem;
}
.pill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
}
.pill-list li {
  background: rgba(126, 240, 194, 0.06);
  border: 1px solid rgba(126, 240, 194, 0.2);
  border-radius: 999px;
  padding: 0.38rem 0.7rem;
  font-size: 0.84rem;
  color: var(--muted);
}

.hero-panel,
.path-card,
.library-card,
.challenge-card,
.quiz-card,
.manual-card,
.concept-card,
.memory-panel,
.memory-explanation,
.mini-card,
.lab-card {
  background: rgba(11, 26, 34, 0.86);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.hero-panel { padding: 1rem; }
.panel-window {
  border-radius: 16px;
  background: #071b26;
  border: 1px solid var(--line);
  overflow: hidden;
}
.window-bar {
  display: flex;
  gap: 0.5rem;
  padding: 0.9rem 1rem;
  background: rgba(255,255,255,0.02);
  border-bottom: 1px solid var(--line);
}
.window-bar span {
  display: inline-block;
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.window-bar span:nth-child(1) { background: #ff5f57; }
.window-bar span:nth-child(2) { background: #febc2e; }
.window-bar span:nth-child(3) { background: #28c840; }
.panel-window pre { margin: 0; padding: 1.2rem; overflow: auto; }
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.7rem;
  margin-top: 1rem;
}
.stats-grid > div {
  border: 1px solid var(--line);
  border-radius: 13px;
  background: rgba(255,255,255,0.02);
  padding: 0.8rem 0.6rem;
  text-align: center;
}
.stats-grid strong {
  display: block;
  color: var(--mint);
  font-size: 1.4rem;
}
.stats-grid span { font-size: 0.78rem; color: var(--muted); }

.section { padding: 88px 0; }
.accent, .accent-2 {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(7, 22, 31, 0.6);
}
.section-heading { margin-bottom: 1.8rem; }
.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.045em;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}
.mini-card { padding: 1.2rem; }
.mini-card h3, .path-card h3, .lab-card h3, .challenge-card h3, .manual-card h3, .memory-panel h3, .memory-explanation h3, .concept-card h3 { margin: 0 0 0.5rem; }
.mini-card p, .path-card p, .lab-card p, .manual-card p, .memory-explanation p, .concept-card p, .challenge-card p { margin: 0; color: var(--muted); }

.path-grid, .resource-grid, .challenge-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.path-card, .library-card, .challenge-card { padding: 1.2rem; }
.path-step {
  width: 46px;
  height: 46px;
  display: inline-grid;
  place-items: center;
  border-radius: 13px;
  background: rgba(86,212,255,0.12);
  border: 1px solid rgba(86,212,255,0.24);
  color: var(--accent);
  font-weight: 800;
  margin-bottom: 0.8rem;
}

.explorer-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 1rem;
}
.explorer-tabs {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.topic-btn {
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
  color: var(--ink);
  padding: 0.9rem 1rem;
  text-align: left;
  cursor: pointer;
}
.topic-btn.is-active {
  border-color: rgba(86,212,255,0.5);
  background: rgba(86,212,255,0.08);
}
.concept-card { padding: 1.4rem; }
.concept-card h3 { font-size: 1.5rem; margin-top: 0; }
.example {
  margin: 1rem 0;
  background: #071b26;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
}
.example pre { margin: 0; padding: 1rem; overflow: auto; }
.takeaway {
  padding: 0.85rem 1rem;
  border-radius: 12px;
  background: rgba(126,240,194,0.06);
  border: 1px solid rgba(126,240,194,0.18);
  color: var(--muted);
}

.lab-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 1.2rem;
}
.lab-card { padding: 1.2rem; }
.lab-card.bad { border-color: rgba(255,125,125,0.35); }
.lab-card.good { border-color: rgba(126,240,194,0.3); }
.lab-card.warning { border-color: rgba(255,200,87,0.3); }
.lab-card pre {
  margin: 0.8rem 0;
  padding: 0.8rem;
  border-radius: 10px;
  background: rgba(7, 26, 37, 0.8);
  border: 1px solid var(--line);
  overflow: auto;
}
.panel-box {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 1rem;
  padding: 1.2rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(11, 26, 34, 0.86);
  box-shadow: var(--shadow);
}
.check-list {
  margin: 0.75rem 0 0;
  padding-left: 1.1rem;
  color: var(--muted);
}

.memory-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 1rem;
}
.memory-panel, .memory-explanation {
  padding: 1.2rem;
}
.diagram-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
}
.diagram-header h3 { margin: 0; }
.diagram-actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.memory-diagram { min-height: 250px; display: grid; gap: 0.7rem; align-content: center; }
.memory-row {
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 0.7rem;
  align-items: center;
}
.memory-label { color: var(--muted); font-size: 0.86rem; }
.memory-box {
  position: relative;
  min-height: 52px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  border: 1px solid rgba(86,212,255,0.3);
  background: rgba(86,212,255,0.08);
  padding: 0.7rem;
  text-align: center;
  font-size: 0.85rem;
}
.memory-box.heap {
  border-color: rgba(126,240,194,0.3);
  background: rgba(126,240,194,0.08);
}
.code-box {
  margin-top: 1rem;
  background: #071b26;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: auto;
}
.code-box pre { margin: 0; padding: 1rem; }
.memory-explanation ul {
  margin: 1rem 0 0;
  padding-left: 1.15rem;
  color: var(--muted);
}

.challenge-card { padding: 1.2rem; }
.challenge-tag {
  display: inline-block;
  padding: 0.28rem 0.55rem;
  border: 1px solid rgba(255,200,87,0.25);
  border-radius: 999px;
  background: rgba(255,200,87,0.08);
  color: var(--warning);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.challenge-card .button { margin-top: 1rem; }

.resource-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.library-card h3 { margin-top: 0; }
.library-card h3 code { color: var(--accent); }

.manuals {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1rem;
  margin-top: 1.2rem;
}
.manual-card { padding: 1.2rem; }
.manual-card ul {
  margin: 0;
  padding-left: 1.25rem;
  color: var(--muted);
}
.manual-card li + li { margin-top: 0.55rem; }
.manual-card a { color: var(--accent); }
.todo-stack { display: grid; gap: 0.75rem; }
.todo {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.8rem;
}
.todo.good { background: rgba(126,240,194,0.06); border-color: rgba(126,240,194,0.2); }
.todo.bad { background: rgba(255,125,125,0.05); border-color: rgba(255,125,125,0.18); }
.todo strong { display: block; margin-bottom: 0.2rem; }

.quiz-wrap { max-width: 900px; }
.quiz-card { padding: 1.4rem; }
.quiz-progress {
  margin-bottom: 0.7rem;
  font-size: 0.82rem;
  color: var(--mint);
  font-weight: 800;
}
.quiz-question {
  font-size: clamp(1.25rem, 2vw, 1.85rem);
  margin-bottom: 1rem;
  font-weight: 700;
}
.quiz-options { display: grid; gap: 0.7rem; }
.quiz-option {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
  color: var(--ink);
  padding: 0.85rem 1rem;
  text-align: left;
  cursor: pointer;
}
.quiz-option:hover:not(:disabled) {
  border-color: rgba(86,212,255,0.6);
  background: rgba(86,212,255,0.05);
}
.quiz-option.correct { border-color: rgba(126,240,194,0.6); background: rgba(126,240,194,0.08); }
.quiz-option.incorrect { border-color: rgba(255,125,125,0.5); background: rgba(255,125,125,0.06); }
.quiz-feedback {
  min-height: 1.7em;
  margin-top: 0.9rem;
  font-weight: 650;
  color: var(--muted);
}
.quiz-feedback.success { color: var(--mint); }
.quiz-feedback.error { color: var(--danger); }
#quiz-next { margin-top: 0.5rem; }

.footer {
  border-top: 1px solid var(--line);
  background: rgba(6, 18, 25, 0.8);
}
.footer-wrap { padding: 1.2rem 0; color: var(--muted); }
.footer p { margin: 0; }

button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

@media (max-width: 980px) {
  .hero-grid,
  .memory-layout,
  .manuals,
  .panel-box {
    grid-template-columns: 1fr;
  }
  .info-grid,
  .path-grid,
  .resource-grid,
  .challenge-grid,
  .lab-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .nav { display: none; }
  .info-grid,
  .path-grid,
  .resource-grid,
  .challenge-grid,
  .lab-grid,
  .explorer-layout {
    grid-template-columns: 1fr;
  }
  .explorer-tabs { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .memory-row { grid-template-columns: 110px 1fr; }
  .stats-grid { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { transition: none !important; }
}
