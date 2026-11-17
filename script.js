:root {
  --bg: #07141f;
  --bg-soft: #0b1d2a;
  --panel: rgba(12, 24, 32, 0.92);
  --panel-strong: #0e2433;
  --ink: #edf9ff;
  --muted: #a9c5d6;
  --accent: #56d4ff;
  --accent-strong: #40b4ef;
  --mint: #7ef0c2;
  --warning: #ffc857;
  --danger: #ff7d7d;
  --line: rgba(160, 201, 232, 0.18);
  --shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
  --radius: 20px;
}

* { box-sizing: border-box; }
html {
  scroll-behavior: smooth;
  scroll-padding-top: 82px;
}
body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #040d15 0%, #081a24 32%, #0a1f2b 100%);
  color: var(--ink);
  line-height: 1.6;
}
a { color: inherit; text-decoration: none; }
button, input, textarea { font: inherit; }
pre, code { font-family: "JetBrains Mono", monospace; }
.container { width: min(1200px, calc(100% - 32px)); margin-inline: auto; }

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(15px);
  background: rgba(8, 22, 31, 0.84);
  border-bottom: 1px solid var(--line);
}
.nav-wrap {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  gap: 1.1rem;
  flex-wrap: wrap;
}
.nav a {
  color: var(--muted);
  font-size: 0.9rem;
}
.nav a:hover { color: var(--ink); }

.page-shell {
  width: min(1400px, calc(100% - 28px));
  margin: 24px auto 0;
  display: grid;
  grid-template-columns: 290px 1fr;
  gap: 1rem;
  align-items: start;
}
.sidebar {
  position: sticky;
  top: 88px;
  background: rgba(8, 18, 25, 0.8);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow);
  padding: 1rem;
}
.sidebar-header h2 {
  margin: 0;
  font-size: 1.7rem;
}
.eyebrow {
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.76rem;
  color: var(--mint);
  font-weight: 800;
}
.eyebrow.small { font-size: 0.7rem; }
.module-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1rem;
}
.module-button {
  width: 100%;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  color: var(--ink);
  border-radius: 12px;
  padding: 0.85rem 0.9rem;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
}
.module-button:hover {
  transform: translateX(2px);
  border-color: rgba(86, 212, 255, 0.45);
}
.module-button.is-active {
  background: rgba(86, 212, 255, 0.08);
  border-color: rgba(86, 212, 255, 0.5);
}
.module-button strong {
  display: block;
  font-size: 0.98rem;
}
.module-button span {
  color: var(--muted);
  font-size: 0.76rem;
}

.main-panel {
  display: grid;
  gap: 1rem;
}
.hero-card, .content-panel, .section-card, .quiz-card {
  background: rgba(12, 24, 32, 0.92);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.hero-card {
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
  background: linear-gradient(135deg, rgba(11, 29, 38, 0.96), rgba(8, 19, 27, 0.96));
}
.hero-card h1 {
  margin: 0;
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  line-height: 1.06;
  letter-spacing: -0.06em;
  max-width: 700px;
}
.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: flex-end;
}
.hero-meta span {
  display: inline-block;
  font-size: 0.8rem;
  color: var(--muted);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.45rem 0.7rem;
}

.content-panel, .section-card, .quiz-card {
  padding: 1.5rem;
}
.lesson-shell {
  display: grid;
  gap: 1rem;
}
.lesson-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  border-bottom: 1px solid var(--line);
  padding-bottom: 1rem;
}
.lesson-header h2 {
  margin: 0;
  font-size: clamp(1.8rem, 2vw, 2.5rem);
}
.level-pill {
  border-radius: 999px;
  padding: 0.4rem 0.7rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid var(--line);
  background: rgba(86, 212, 255, 0.08);
  color: var(--accent);
}
.lesson-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1rem;
}
.lesson-card, .exercise-card, .note-card {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1rem;
}
.lesson-card h3, .exercise-card h3, .note-card h3 {
  margin: 0 0 0.7rem;
}
.lesson-card p, .exercise-card p, .note-card p, .exercise-card li, .lesson-card li {
  color: var(--muted);
}
.lesson-card ul, .note-card ul {
  margin: 0.7rem 0 0;
  padding-left: 1.2rem;
}
.code-box {
  background: #071b26;
  border: 1px solid var(--line);
  border-radius: 12px;
  overflow: auto;
}
.code-box pre {
  margin: 0;
  padding: 1rem;
  line-height: 1.7;
}
.exercise-card pre {
  margin: 0.8rem 0 0;
  padding: 0.8rem;
  border-radius: 12px;
  background: rgba(7, 26, 37, 0.8);
  border: 1px solid var(--line);
  overflow: auto;
}
.note-card ul { list-style: none; padding: 0; }
.note-card li + li { margin-top: 0.6rem; }
.note-card li::before {
  content: "• ";
  color: var(--mint);
}

.section-head { margin-bottom: 1rem; }
.section-head h2 {
  margin: 0;
  font-size: clamp(1.4rem, 2vw, 2.2rem);
  letter-spacing: -0.04em;
}
.mistake-grid, .resource-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
.mistake-card, .resource-card {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1rem;
  background: rgba(255,255,255,0.02);
}
.mistake-card.bad { border-color: rgba(255,125,125,0.35); }
.mistake-card.good { border-color: rgba(126,240,194,0.3); }
.mistake-card pre, .resource-card p {
  margin: 0.7rem 0 0;
}
.mistake-card pre {
  background: rgba(7, 26, 37, 0.8);
  border: 1px solid var(--line);
  border-radius: 12px;
  overflow: auto;
  padding: 0.7rem;
}

.resource-card h3 { margin: 0; }
.resource-card p { color: var(--muted); }
.links-box {
  margin-top: 1rem;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255,255,255,0.02);
  padding: 1rem;
}
.links-box h3 { margin: 0 0 0.75rem; }
.links-box ul {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--muted);
}
.links-box li + li { margin-top: 0.6rem; }
.links-box a { color: var(--accent); }

.quiz-card {
  max-width: 900px;
}
.quiz-progress {
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--mint);
  margin-bottom: 0.7rem;
}
.quiz-question {
  margin-bottom: 1rem;
  font-size: clamp(1.3rem, 2vw, 1.9rem);
  font-weight: 700;
}
.quiz-options {
  display: grid;
  gap: 0.7rem;
}
.quiz-option {
  width: 100%;
  text-align: left;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  color: var(--ink);
  cursor: pointer;
}
.quiz-option:hover:not(:disabled) {
  border-color: rgba(86,212,255,0.55);
  background: rgba(86,212,255,0.05);
}
.quiz-option.correct { border-color: rgba(126,240,194,0.6); background: rgba(126,240,194,0.08); }
.quiz-option.incorrect { border-color: rgba(255,125,125,0.5); background: rgba(255,125,125,0.06); }
.quiz-feedback {
  min-height: 1.8em;
  margin-top: 0.9rem;
  font-weight: 650;
  color: var(--muted);
}
.quiz-feedback.success { color: var(--mint); }
.quiz-feedback.error { color: var(--danger); }
#quiz-next { margin-top: 0.6rem; }

.footer {
  margin-top: 1rem;
  border-top: 1px solid var(--line);
  background: rgba(6, 18, 25, 0.8);
}
.footer-wrap {
  padding: 1.2rem 0;
  color: var(--muted);
  font-size: 0.92rem;
}
.footer-wrap p { margin: 0; }

button:focus-visible, a:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 3px;
}

@media (max-width: 1100px) {
  .page-shell { grid-template-columns: 1fr; }
  .sidebar { position: static; }
}

@media (max-width: 760px) {
  .hero-card, .lesson-grid, .mistake-grid, .resource-grid { grid-template-columns: 1fr; }
  .hero-card { flex-direction: column; align-items: flex-start; }
  .hero-meta { justify-content: flex-start; }
  .nav { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { transition: none !important; }
}
