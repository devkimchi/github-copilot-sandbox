---
marp: true
theme: default
size: 16:9
# paginate: true
# footer: Sandboxing AI Agents
header: '<a class="language-switch" href="../ko/" onclick="this.href = this.getAttribute(&quot;href&quot;) + location.hash" lang="ko">한국어</a>'
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&family=Fira+Code:wght@400;600&display=swap');

:root {
  --bg: #fffaf3;
  --surface: #ffffff;
  --surface-2: #f8eee9;
  --text: #2c1637;
  --muted: #765e74;
  --cyan: #77216f;
  --green: #e95420;
  --orange: #c64612;
  --red: #c72c41;
  --line: #decfda;
}

section {
  background:
    radial-gradient(circle at 88% 14%, rgba(233, 84, 32, .12), transparent 28%),
    linear-gradient(140deg, var(--bg), #fff6ee);
  color: var(--text);
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 25px;
  line-height: 1.45;
  padding: 58px 68px 52px;
  border-left: 7px solid var(--green);
}

section:not(.lead):not(.statement-slide):not(.demo-divider):not(.section-divider):not(.solution-bridge):not(.closing) {
  justify-content: flex-start;
}

section:has(> h2) {
  padding-top: 142px;
}

section:has(> h2) > h2 {
  left: 68px;
  position: absolute;
  right: 68px;
  top: 58px;
}

section::after {
  color: var(--muted);
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  right: 28px;
  bottom: 20px;
}

footer {
  color: #8a7187;
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  left: 68px;
  bottom: 20px;
}

header {
  left: auto;
  right: 28px;
  top: 22px;
  z-index: 10;
}

.language-switch {
  background: rgba(255, 255, 255, .92);
  border: 1px solid var(--line);
  border-radius: 6px;
  color: var(--cyan);
  display: inline-block;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  padding: 9px 12px;
  text-decoration: none;
}

h1, h2, h3 {
  color: var(--text);
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
}

h1 {
  font-size: 62px;
  font-weight: 900;
  line-height: 1.17;
  letter-spacing: -2px;
}

h2 {
  font-size: 42px;
  font-weight: 900;
  margin-bottom: 34px;
  letter-spacing: -1px;
}

h3 {
  color: var(--cyan);
  font-size: 22px;
  margin-bottom: 10px;
}

strong { color: var(--green); }
code {
  background: #f7ece7;
  color: var(--green);
  font-family: 'Fira Code', monospace;
  padding: 2px 7px;
  border-radius: 5px;
}

pre {
  background: #2c1637;
  border: 1px solid #77216f;
  border-radius: 10px;
  padding: 18px 22px;
  font-size: 21px;
}

pre code {
  background: transparent;
  color: #fff4ec;
  padding: 0;
}

section.auth-command-slide .hljs-string {
  color: #55e6ff !important;
}

section.auth-command-slide .hljs-built_in {
  color: #ffd166 !important;
}

section.plugin-command-slide .cli-command {
  color: #55e6ff;
}

section.plugin-command-slide .cli-keyword {
  color: #ffd166;
}

section.plugin-command-slide .cli-value {
  color: #fff4ec;
}

.lead {
  border-left-color: var(--cyan);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.lead::before {
  content: 'sandbox://ubucon-korea';
  color: var(--green);
  font-family: 'Fira Code', monospace;
  font-size: 18px;
  margin-bottom: 28px;
}

.lead p {
  color: var(--muted);
  font-size: 25px;
  margin-top: 24px;
}

section.opening {
  background: url('../assets/image-opening.jpg') center / cover no-repeat;
  border-left: none;
  justify-content: flex-start;
}

section.opening::before {
  display: none;
}

section.opening h1 {
  color: #2c1637;
  left: 76px;
  max-width: 760px;
  position: absolute;
  text-shadow: 0 2px 14px rgba(255, 255, 255, .8);
  top: 170px;
}

section.opening > p {
  color: #2c1637;
  left: 76px;
  margin: 0;
  max-width: 840px;
  position: absolute;
  text-shadow: 0 1px 10px rgba(255, 255, 255, .9);
  top: 360px;
}

.speaker-intro {
  bottom: 76px;
  color: #2c1637;
  display: grid;
  gap: 3px;
  left: 76px;
  position: absolute;
  text-shadow: 0 1px 8px rgba(255, 255, 255, .9);
  width: 520px;
}

.speaker-intro b {
  color: #77216f;
  font-size: 23px;
}

.speaker-intro .speaker-role {
  font-size: 16px;
  font-weight: 700;
}

.speaker-intro .speaker-org {
  color: #765e74;
  font-size: 15px;
  font-weight: 700;
}

.speaker-intro .speaker-captain {
  background: #fff0e8;
  border: 1px solid rgba(233, 84, 32, .45);
  border-radius: 999px;
  color: #c64612;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  margin: 5px 0 3px;
  padding: 3px 10px;
  width: fit-content;
}

.speaker-social {
  align-items: center;
  display: flex;
  gap: 18px;
  margin-top: 5px;
}

.speaker-social .social-item {
  align-items: center;
  display: inline-flex;
  gap: 6px;
  color: #765e74;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
}

.speaker-social img {
  height: 18px;
  object-fit: contain;
  width: 18px;
}

.accent { color: var(--cyan); }
.warning { color: var(--orange); }
.center.warning { margin-top: 36px; }
.danger { color: var(--red); }
.muted { color: var(--muted); }
.small { font-size: 17px; }
.center { text-align: center; }

.agent-select {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  font-size: 18px;
  margin: 0 auto 26px;
  padding: 11px 22px;
  text-align: center;
  width: fit-content;
}

.prompt-box {
  background: linear-gradient(145deg, var(--surface), #fff7f1);
  border: 1px solid var(--line);
  border-left: 7px solid var(--green);
  border-radius: 12px;
  color: var(--text);
  font-size: 36px;
  font-weight: 700;
  line-height: 1.45;
  margin-top: 62px;
  padding: 34px 38px;
}

.prompt-box::before {
  color: var(--green);
  content: '>';
  font-family: 'Fira Code', monospace;
  margin-right: 18px;
}

.process-outputs { margin-top: 28px; }
.transition-cards { margin-top: 40px; }
.resource-caption { margin-top: 36px; }

.quote {
  color: var(--text);
  font-size: 40px;
  font-weight: 900;
  line-height: 1.35;
  max-width: 1120px;
  margin-top: 56px;
}

.quote em {
  color: var(--cyan);
  font-style: normal;
}

.transition-quote {
  font-size: 36px;
  max-width: 1120px;
  width: 100%;
}

.grid-2, .grid-3, .grid-5 {
  display: grid;
  gap: 18px;
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-5 { grid-template-columns: repeat(5, 1fr); }

.card {
  background: linear-gradient(145deg, var(--surface), #fff8f3);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 22px;
  min-height: 118px;
}

.card b {
  color: var(--cyan);
  display: block;
  font-size: 21px;
  margin-bottom: 8px;
}

.card p {
  color: var(--muted);
  font-size: 17px;
  margin: 0;
  word-break: keep-all;
}

.icon {
  align-items: center;
  background: rgba(233, 84, 32, .09);
  border: 1px solid rgba(233, 84, 32, .38);
  border-radius: 50%;
  color: var(--green);
  display: flex;
  font-family: 'Fira Code', monospace;
  font-size: 23px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  margin-bottom: 15px;
  width: 48px;
}

.threat-grid .icon,
.value-grid .icon {
  border-radius: 999px;
  box-sizing: border-box;
  display: inline-flex;
  font-size: 16px;
  height: 34px;
  min-width: 58px;
  padding: 0 14px;
  width: auto;
}

.value-grid .infinity-icon {
  font-size: 30px;
}

.flow {
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 50px;
}

.flow .node {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 12px;
  box-shadow: 0 7px 20px rgba(119, 33, 111, .07);
  padding: 22px 18px;
  text-align: center;
  width: 190px;
}

.flow .node b {
  color: var(--cyan);
  display: block;
  font-size: 20px;
}

.flow .node span {
  color: var(--muted);
  font-size: 15px;
}

.flow .node.compact-copy span {
  display: block;
  line-height: 1.15;
}

.flow .node.channels-node {
  width: 250px;
}

.flow .node.channels-node span {
  font-size: 13px;
  white-space: nowrap;
}

.arrow {
  color: var(--green);
  font-family: 'Fira Code', monospace;
  font-size: 30px;
}

.stack {
  display: grid;
  gap: 10px;
  margin: 10px auto 0;
  width: 78%;
}

.layer {
  border-radius: 9px;
  font-weight: 700;
  padding: 16px;
  text-align: center;
}

.layer.agent { background: #f0e2ef; color: var(--cyan); }
.layer.vm { background: #fff0e8; border: 2px solid var(--green); color: #c23e10; }
.layer.host { background: #f8e7ea; color: #8f2437; }

.versus {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
}

.mode {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 26px;
}

.mode.direct { border-top: 7px solid var(--orange); }
.mode.clone { border-top: 7px solid var(--green); }
.mode h3 { font-size: 28px; }
.mode ul { color: var(--muted); font-size: 19px; }

.big-number {
  color: var(--green);
  font-family: 'Fira Code', monospace;
  font-size: 64px;
  font-weight: 600;
  line-height: 1;
}

.checklist {
  list-style: none;
  padding: 0;
}

.resume-checks { margin-top: 32px; }

.checklist li {
  background: var(--surface);
  border-left: 5px solid var(--green);
  margin: 12px 0;
  padding: 13px 18px;
}

.checklist li::before {
  color: var(--green);
  content: '✓';
  font-weight: 900;
  margin-right: 12px;
}

.matrix {
  border-collapse: separate;
  border-spacing: 0;
  display: table;
  font-size: 18px;
  overflow: hidden;
  table-layout: fixed;
  width: 100%;
}

.matrix th, .matrix td {
  border-bottom: 1px solid var(--line);
  padding: 15px 18px;
  text-align: left;
}

.matrix th {
  background: #77216f;
  color: #ffffff;
}

.matrix td { background: rgba(255, 255, 255, .92); }
.yes { color: var(--green); font-weight: 700; }
.partial { color: var(--orange); font-weight: 700; }

.takeaway {
  align-items: center;
  display: grid;
  gap: 22px;
  grid-template-columns: 78px 1fr;
  margin: 20px 0;
}

.takeaway .num {
  align-items: center;
  background: var(--green);
  border-radius: 50%;
  color: #ffffff;
  display: flex;
  font-family: 'Fira Code', monospace;
  font-size: 30px;
  font-weight: 600;
  height: 62px;
  justify-content: center;
  width: 62px;
}

.takeaway p { font-size: 22px; margin: 0; }

.product-risks {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
}

.risk-column {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 24px;
}

.risk-column.docker { border-top: 6px solid var(--orange); }
.risk-column.aca { border-top: 6px solid var(--cyan); }

.risk-column h3 {
  color: var(--text);
  font-size: 27px;
  margin-bottom: 18px;
}

.risk-item {
  background: #fffaf6;
  border: 1px solid var(--line);
  border-radius: 9px;
  margin-top: 12px;
  padding: 15px 17px;
}

.risk-item b {
  color: var(--cyan);
  display: block;
  font-size: 19px;
  margin-bottom: 5px;
}

.risk-item p {
  color: var(--muted);
  font-size: 16px;
  margin: 0;
}

section.statement-slide {
  align-items: center;
  background:
    radial-gradient(circle at 82% 12%, rgba(233, 84, 32, .24), transparent 30%),
    linear-gradient(140deg, #2c1637, #4a183f);
  border-left-color: var(--orange);
  color: #fff8f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.statement-text {
  color: #fff8f2;
  font-size: 54px;
  font-weight: 900;
  letter-spacing: -1px;
  line-height: 1.45;
}

.statement-text .not-safe { color: #ffd166; }
.statement-text strong { color: #55e6ff; }

section.statement-slide footer,
section.statement-slide::after {
  color: #d9c2d3;
}

section.closing {
  background: url('../assets/image-closing.jpg') center / cover no-repeat;
  border-left: none;
  color: #ffffff;
  display: block;
  padding: 0;
}

section.closing footer,
section.closing::after {
  display: none;
}

section.closing::before {
  background: #2b436f;
  bottom: 48px;
  content: '';
  height: 30px;
  left: 48px;
  position: absolute;
  width: 320px;
  z-index: 1;
}

.closing-thanks {
  color: #ffffff;
  font-size: 66px;
  font-weight: 900;
  left: 0;
  letter-spacing: -2px;
  position: absolute;
  right: 0;
  text-align: center;
  top: 140px;
}

.closing-title {
  color: #ffffff;
  font-size: 46px;
  font-weight: 700;
  left: 0;
  line-height: 1.4;
  position: absolute;
  right: 0;
  text-align: center;
  top: 330px;
}

.closing-links {
  display: grid;
  font-size: 26px;
  gap: 8px;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 450px;
}

.closing-links a {
  color: #ffffff;
  text-decoration: none;
}

.closing-links strong {
  display: inline-block;
  margin-right: 8px;
}

.closing-speaker {
  align-items: center;
  bottom: 92px;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  font-size: 15px;
  gap: 8px;
  justify-content: center;
  left: 70px;
  position: absolute;
  right: 70px;
  text-align: center;
  z-index: 2;
}

.closing-social {
  align-items: center;
  display: inline-flex;
  gap: 5px;
}

.closing-social img {
  filter: brightness(0) invert(1);
  height: 17px;
  object-fit: contain;
  width: 17px;
}

section.demo-divider {
  background:
    linear-gradient(90deg, rgba(44, 22, 55, .78), rgba(44, 22, 55, .32) 62%, transparent),
    url('../assets/image-demo.jpg') center / cover no-repeat;
  border-left: none;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
}

section.demo-divider footer,
section.demo-divider::after {
  display: none;
}

.demo-kicker {
  color: #ffd166;
  font-family: 'Fira Code', monospace;
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 18px;
}

.demo-name {
  color: #ffffff;
  font-size: 58px;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1.28;
  max-width: 900px;
  text-shadow: 0 3px 18px rgba(44, 22, 55, .45);
}

section.section-divider {
  background:
    linear-gradient(90deg, rgba(44, 22, 55, .68), rgba(44, 22, 55, .12) 68%, transparent),
    url('../assets/image-section.jpg') center / cover no-repeat;
  border-left: none;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
}

section.section-divider footer,
section.section-divider::after {
  display: none;
}

.section-name {
  color: #ffffff;
  font-size: 62px;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1.25;
  max-width: 920px;
  text-shadow: 0 3px 18px rgba(44, 22, 55, .5);
}

.section-subtitle {
  color: #e9f7ff;
  font-size: 25px;
  font-weight: 500;
  margin-top: 22px;
  max-width: 880px;
  text-shadow: 0 2px 14px rgba(44, 22, 55, .5);
}

section.solution-bridge {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bridge-kicker {
  color: var(--orange);
  font-family: 'Fira Code', monospace;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 14px;
}

.bridge-title {
  color: var(--text);
  font-size: 50px;
  font-weight: 900;
  letter-spacing: -1px;
  line-height: 1.3;
}

.bridge-flow {
  align-items: center;
  display: grid;
  gap: 22px;
  grid-template-columns: 1fr auto 1fr;
  margin-top: 42px;
}

.bridge-box {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 12px;
  box-shadow: 0 8px 22px rgba(119, 33, 111, .07);
  min-height: 112px;
  padding: 22px;
}

.bridge-box.problem { border-top: 6px solid var(--red); }
.bridge-box.solution { border-top: 6px solid var(--green); }

.bridge-box b {
  color: var(--cyan);
  display: block;
  font-size: 22px;
  margin-bottom: 8px;
}

.bridge-box p {
  color: var(--muted);
  font-size: 17px;
  margin: 0;
}

.bridge-arrow {
  color: var(--green);
  font-family: 'Fira Code', monospace;
  font-size: 34px;
}

.bridge-caption {
  color: var(--orange);
  font-size: 23px;
  font-weight: 700;
  margin-top: 28px;
  text-align: center;
}

.aca-command-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr 1fr;
}

.aca-command-card {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 12px;
  box-shadow: 0 8px 22px rgba(119, 33, 111, .07);
  padding: 20px;
}

.aca-command-card h3 {
  color: var(--cyan);
  font-size: 22px;
  margin-bottom: 14px;
}

.aca-command-card pre {
  font-size: 17px;
  margin: 0;
  padding: 16px 18px;
}

.aca-command-card .aca-cli {
  color: #55e6ff;
}

.aca-command-card .aca-keyword {
  color: #ffd166;
}

.aca-command-card .aca-value {
  color: #fff4ec;
}

.creation-result {
  align-items: center;
  color: var(--muted);
  display: flex;
  font-size: 18px;
  gap: 18px;
  justify-content: center;
  margin-top: 28px;
}

.creation-result b {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--cyan);
  padding: 10px 18px;
}

.creation-result .arrow {
  color: var(--green);
  font-size: 28px;
}

section.aca-shell-slide .shell-prompt {
  color: #97a6ba;
}

section.aca-shell-slide .shell-command {
  color: #ffd166;
}

section.aca-shell-slide .shell-url {
  color: #55e6ff;
}

section.aca-shell-slide .shell-value {
  color: #fff4ec;
}

.sources {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.7;
}

.source-columns {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
}

.source-column {
  display: grid;
  gap: 16px;
}

.source-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 15px 18px;
}

.source-card b {
  color: var(--text);
  display: block;
  font-size: 18px;
  margin-bottom: 4px;
}

.source-card a {
  color: var(--cyan);
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  text-decoration: none;
}
</style>

<!-- _class: lead opening -->
<!-- _paginate: false -->

# <span class="accent">Sandboxing<br>AI Agents</span> on Ubuntu

Controlling boundaries with<br/>Docker Sandboxes and Azure Container Apps Sandboxes

<div class="speaker-intro">
  <b>Justin Yoo</b>
  <span class="speaker-role">Principal Developer Advocate</span>
  <span class="speaker-org">Microsoft / GitHub</span>
  <span class="speaker-captain">Docker Captain</span>
  <span class="speaker-social">
    <span class="social-item"><img src="../assets/icon-github.png" alt="GitHub"> @justinyoo</span>
    <span class="social-item"><img src="../assets/icon-linkedin.png" alt="LinkedIn"> @justinyoo</span>
  </span>
</div>

<!--
Speaker Notes · 00:00–01:00 · 1 minute

- Self-introduction
- Have you ever experienced an AI coding agent like GitHub Copilot suddenly deleting directories?
- AI agents often behave in unexpected ways. We need to ensure we can use them safely even in such situations
- Today, let's discuss the sandbox features
-->

---

<div class="quote transition-quote">
AI agents execute commands <em>with my privileges</em>,<br>
much faster than I can.
</div>

<p class="muted">So, how far should we allow the impact when agents make mistakes or get compromised?</p>

<!--
Speaker Notes · 01:00–02:00 · 1 minute

- When GitHub Copilot first came out, it was only at the level of suggesting code
- Now it directly modifies files, installs packages, executes shell commands, and accesses the network
- As coding agents improve, they can use my PC's privileges however they want
- There's plenty of potential for problems, but if we don't grant privileges, the constraints are too restrictive
- If we grant privileges and something goes wrong, how far should we allow the scope of damage?
-->

---

<!-- _class: section-divider -->
<!-- _paginate: false -->

<div class="section-name">Risks and Control Boundaries</div>
<div class="section-subtitle">How far should we allow the parameters of AI agents?</div>

<!--
Speaker Notes · 02:00–02:10 · 10 seconds

- What are the potential risks that a coding agent can create in a local development environment, and what boundaries should we establish to control them?
-->

---

## Potential Threats
<div class="grid-5 threat-grid">
  <div class="card"><div class="icon">rm</div><b>File Corruption</b><p>Deletion or overwriting of source, config, and home directories</p></div>
  <div class="card"><div class="icon">key</div><b>Credentials</b><p>Exposure or misuse of tokens and cloud keys</p></div>
  <div class="card"><div class="icon">net</div><b>Data Leakage</b><p>Transmission of code and data to unauthorized destinations</p></div>
  <div class="card"><div class="icon">pkg</div><b>Supply Chain</b><p>Execution of malicious packages and installation scripts</p></div>
  <div class="card"><div class="icon">docker.sock</div><b>Host Takeover</b><p>Access to Docker sockets and local processes</p></div>
</div>

<!--
Speaker Notes · 02:10–04:10 · 2 minutes

- We can categorize about five types of risks
- Unwanted files can be touched
- Tokens in environment variables or config files can be read
- Information can be leaked through connected networks
- Supply chain attacks through malicious package installation
- Possibility of host takeover through Docker sockets
- So, can we control these risks?
-->

---

<!-- _class: solution-bridge -->

<div class="bridge-title"><strong>Docker Sandboxes</strong> comes for rescue</div>

<div class="bridge-flow">
  <div class="bridge-box problem"><b>Agent Capabilities</b><p>File modification, shell execution, package installation, and network access are necessary</p></div>
  <div class="bridge-arrow">→</div>
  <div class="bridge-box solution"><b>Isolated Execution Boundary</b><p>Perform necessary tasks within a microVM isolated from the host</p></div>
</div>

<div class="bridge-caption">Maintain necessary privileges, but limit the impacting parameters.</div>

<!--
Speaker Notes · 04:10–04:40 · 30 seconds

- If we remove agent privileges to control these risks, they won't be able to do their work
- That's why Docker Sandboxes were created
- Agents maintain all necessary privileges within a microVM
- At the same time, they cannot access files and resources not shared by the host
-->

---

## Grant privileges inside, enforce boundaries outside
<div class="grid-5">
  <div class="card"><div class="big-number">01</div><b>Compute</b><p>Separate kernel and process boundaries</p></div>
  <div class="card"><div class="big-number">02</div><b>Files</b><p>Sharing scope and write permissions</p></div>
  <div class="card"><div class="big-number">03</div><b>Network</b><p>Destination-based egress policies</p></div>
  <div class="card"><div class="big-number">04</div><b>Credentials</b><p>Proxy injection with plaintext hidden</p></div>
  <div class="card"><div class="big-number">05</div><b>Lifecycle</b><p>Automation of creation, suspension, and termination</p></div>
</div>

<!--
Speaker Notes · 04:40–06:00 · 1 minute 20 seconds

- Sandboxes are more like VMs than simple containers
- Agents inside can have sufficient privileges including sudo
- However, they cannot access host files, have limited network access, secrets are provided via proxy from the host, and the sandbox lifecycle is managed by the host
- This way, we can implement both autonomy and control simultaneously
-->

---

## Security Architecture
<div class="stack">
  <div class="layer agent">AI Agent · sudo · packages · Internal Docker Engine</div>
  <div class="layer vm">microVM · Kernel isolation · Primary trust boundary</div>
  <div class="layer host">Host OS · Host filesystem · Host Docker daemon · Local processes</div>
</div>

<div class="flow">
  <div class="node"><b>Workspace</b><span>Explicitly shared</span></div>
  <div class="arrow">→</div>
  <div class="node"><b>Host Proxy</b><span>Policies and credentials</span></div>
  <div class="arrow">→</div>
  <div class="node"><b>Allowed Network</b><span>Allowed destinations only</span></div>
</div>

<!--
Speaker Notes · 06:00–07:30 · 1 minute 30 seconds

- The basic boundary of a sandbox is the microVM
- Inside, agents have high privileges but cannot access the host until the host shares resources
- Cannot access the host's Docker daemon. Sandboxes use their internal Docker engine
- In other words, sandboxes only communicate with the outside through predetermined channels
-->

---

## Direct 🤜🤛 Clone
<div class="versus">
  <div class="mode direct">
    <h3>Direct Mode</h3>
    <ul>
      <li>Mount projects with read-write access</li>
      <li>Changes immediately reflect on the host</li>
      <li>Fast iteration, low code isolation</li>
    </ul>
  </div>
  <div class="mode clone">
    <h3>Clone Mode</h3>
    <ul>
      <li>Original repository is read-only</li>
      <li>Work on a private copy inside the VM</li>
      <li>Selectively merge changes after review</li>
    </ul>
  </div>
</div>

<p class="center warning">In Direct Mode, even with sandboxes, projects stored on the host are affected.</p>

<!--
Speaker Notes · 07:30–09:00 · 1 minute 30 seconds

- Docker Sandboxes offer two code access principles
- Direct Mode and Clone Mode both have pros and cons
- Direct Mode shares the project with the host. Fast reflection is possible. But isolation is lower
- Clone Mode doesn't share the project with the host. Code changes must be handled via PR. Higher isolation is possible
-->

---

<!-- _class: demo-divider -->
<!-- _paginate: false -->

<div class="demo-kicker">DEMO #1</div>
<div class="demo-name">Modernizing .NET Apps<br>in Docker Sandboxes</div>

<!--
Speaker Notes · 09:00–09:10 · 10 seconds

- Let's see the first demo
- We'll modernize the app using GitHub Copilot CLI and the app modernization plugin within a Docker Sandbox
-->

---

## Demo #1: Modernizing .NET Apps in Docker Sandboxes
<ul class="checklist">
  <li>Run GitHub Copilot CLI in a Docker Sandbox</li>
  <li>Install the GitHub Copilot modernization plugin</li>
  <li>The <code>modernize</code> agent orchestrates diagnosis, planning, and execution</li>
  <li>Cannot access files not shared with the host Docker daemon</li>
  <li>Review changes and policy logs from private clones</li>
</ul>

<!--
Speaker Notes · 09:10–09:50 · 40 seconds

- In this demo, we'll show these things
- App modernization itself is important, but it's crucial to see that it only runs within the sandbox
-->

---

<!-- _class: auth-command-slide -->

## Demo #1: Modernizing .NET Apps in Docker Sandboxes
```bash
sbx secret set github --command 'gh auth token'
sbx run --clone --name dotnet-appmod copilot .
sbx exec -it dotnet-appmod bash
```

<div class="flow">
  <div class="node"><b>Authenticate</b><span>Inject token via host proxy</span></div>
  <div class="arrow">→</div>
  <div class="node"><b>Run</b><span>Sandbox + Copilot CLI</span></div>
  <div class="arrow">→</div>
  <div class="node compact-copy"><b>Shell</b><span>Access for installation and status checks</span></div>
</div>

<!--
Speaker Notes · 09:50–11:10 · 1 minute 20 seconds

- Store the GitHub token as a host secret
- Then open a sandbox in clone mode and immediately run the GitHub Copilot CLI
- Or enter the sandbox bash shell via the sbx exec command
-->

---

<!-- _class: plugin-command-slide -->

## Demo #1: Modernizing .NET Apps in Docker Sandboxes
<pre><code><span class="cli-command">/plugin</span> <span class="cli-keyword">marketplace</span> <span class="cli-keyword">add</span> <span class="cli-value">microsoft/github-copilot-modernization</span>
<span class="cli-command">/plugin</span> <span class="cli-keyword">install</span> <span class="cli-value">github-copilot-modernization@github-copilot-modernization</span></code></pre>

<!--
Speaker Notes · 11:10–12:10 · 1 minute

- Install the plugin
- Related MCP servers are also installed during plugin installation
- MCP execution failures are due to sandbox environment configuration
-->

---

## Demo #1: Modernizing .NET Apps in Docker Sandboxes
<div class="agent-select"><code>copilot</code> → <code>/agent</code> → <strong>github-copilot-modernization:modernize</strong></div>

<div class="flow">
  <div class="node compact-copy"><b>Assessment</b><span>Analyze dependencies, .NET, and risks</span></div>
  <div class="arrow">→</div>
  <div class="node compact-copy"><b>Planning</b><span>Create actionable task plans</span></div>
  <div class="arrow">→</div>
  <div class="node"><b>Execution</b><span>Modify, build, and validate</span></div>
</div>

<div class="grid-3 process-outputs">
  <div class="card"><b>assessment/</b><p>Modernization assessment results</p></div>
  <div class="card"><b>plan.md · tasks.json</b><p>Reviewable execution plans</p></div>
  <div class="card"><b>task commits</b><p>Change history per task</p></div>
</div>

<!--
Speaker Notes · 12:10–13:40 · 1 minute 30 seconds

- After running /agent, select github-copilot-modernization:modernize
- The modernization agent automatically proceeds through Assessment, Planning, and Execution stages
- GitHub Copilot already automatically applies the --allow-all option, leaving only the confirmation at the end
-->

---

## Demo #1: Modernizing .NET Apps in Docker Sandboxes
<div class="prompt-box">Modernize this application</div>
<div class="prompt-box">Modernize this app to .NET 10</div>

<!--
Speaker Notes · 13:40–17:00 · 3 minutes 20 seconds

- Execute the prompt
- You can say it as shown on screen, or simply say "do it!"
- Here we asked it to modernize to .NET 10
- This takes time, so we'll show progress and move on to the next
-->

---

<div class="quote">
We've executed it safely in a local machine.<br>
Now, how do we operate it at <em>team and service scale</em>?
</div>

<div class="grid-3 transition-cards">
  <div class="card"><b>Machine Dependency</b><p>Dependent on developer machine's status and availability</p></div>
  <div class="card"><b>Lifecycle Automation</b><p>Need automated interfaces for creation, suspension, and termination on demand</p></div>
  <div class="card"><b>Concurrent Execution</b><p>Isolated operation of multiple users and agents</p></div>
</div>

<!--
Speaker Notes · 17:00–17:30 · 30 seconds

- So far we've shown the process of app modernization with GitHub Copilot CLI in Docker Sandboxes
- But what if we need to run many tasks simultaneously at the team level? We can't rely on individual developer PCs
- From here on, we need to consider sandboxes running in the cloud
- ACA Sandboxes can solve this problem
-->

---

<!-- _class: section-divider -->
<!-- _paginate: false -->

<div class="section-name">From Local to Cloud</div>
<div class="section-subtitle">Scaling lifecycle and capacity<br />with Azure Container Apps Sandboxes</div>

<!--
Speaker Notes · 17:30–17:40 · 10 seconds

- Beyond local development environment isolation, let's operate sandboxes at cloud scale
-->

---

## What if we move sandboxes to the cloud?
<div class="flow">
  <div class="node channels-node"><b>ACA CLI</b><span>Portal · SDK · Bicep · Skills</span></div>
  <div class="arrow">→</div>
  <div class="node compact-copy"><b>Sandbox Group</b><span>Policies, images, networking</span></div>
  <div class="arrow">→</div>
  <div class="node"><b>Sandbox</b><span>Isolated stateful execution</span></div>
  <div class="arrow">→</div>
  <div class="node"><b>Snapshot</b><span>Memory and disk</span></div>
</div>

<p class="center resource-caption"><strong>Microsoft.App/SandboxGroups</strong> · Azure Container Apps Sandboxes</p>

<!--
Speaker Notes · 17:40–19:00 · 1 minute 20 seconds

- ACA Sandboxes are Container Apps-based resources. Currently in preview
- You can create and manage sandboxes via Portal, CLI, Python SDK, Skills, etc.
- Today we'll use the ACA CLI
- Each sandbox is an isolated execution environment using container images from Docker as the root filesystem
- Each sandbox provides snapshots so you can suspend containers when not in use and resume them when needed
-->

---

<div class="grid-3 value-grid">
  <div class="card"><div class="icon">&lt; 1s</div><b>Fast Startup</b><p>Sub-second provisioning using pre-warmed pools</p></div>
  <div class="card"><div class="icon infinity-icon">&#x221E;</div><b>Massive Scaling</b><p>Zero-to-Scale · Scale from zero to thousands of concurrent sandboxes</p></div>
  <div class="card"><div class="icon">&#x23F8;&#xFE0E; &#x25B6;&#xFE0E;</div><b>Suspend / Resume</b><p>Preserve state during idle periods and resume quickly</p></div>
  <div class="card"><div class="icon">ID</div><b>Azure Governance</b><p>Entra ID, RBAC, Azure resource boundaries</p></div>
  <div class="card"><div class="icon">VNet</div><b>Networking</b><p>Ingress and egress policies with virtual network integration</p></div>
  <div class="card"><div class="icon">OCI</div><b>Custom Images</b><p>Use pre-configured toolchains as root filesystems</p></div>
</div>

<!--
Speaker Notes · 19:00–20:20 · 1 minute 20 seconds

- In addition to Docker Sandboxes running locally, ACA Sandboxes offer these advantages
- Fast startup, scaling, snapshots, cloud governance, network control, custom OCI images
- No costs accrue for suspended sandboxes except for snapshot storage
- Sandbox users require separate RBAC permissions
-->

---

<!-- _class: demo-divider -->
<!-- _paginate: false -->

<div class="demo-kicker">DEMO #2</div>
<div class="demo-name">Using Copilot CLI<br>in ACA Sandboxes</div>

<!--
Speaker Notes · 20:20–20:30 · 10 seconds

- Now, let's see the second demo
-->

---

## Demo #2: Using Copilot CLI in ACA Sandboxes

<div class="aca-command-grid">
  <div class="aca-command-card">
    <h3>1 · Prepare Sandbox Group</h3>
    <pre><code><span class="aca-cli">aca</span> <span class="aca-keyword">sandboxgroup create</span> \
  --name <span class="aca-value">ghcp-sandbox-demo</span> \
  --location <span class="aca-value">koreacentral</span> \
  --set-config</code></pre>
  </div>
  <div class="aca-command-card">
    <h3>2 · Create Sandbox</h3>
    <pre><code><span class="aca-cli">aca</span> <span class="aca-keyword">sandbox create</span> \
  --disk <span class="aca-value">copilot</span> \
  --credential <span class="aca-value">&lt;copilot-credential-id&gt;</span> \
  --label <span class="aca-value">name=ghcp-demo</span></code></pre>
  </div>
</div>

<div class="creation-result">
  <b>Sandbox Group Configuration Saved</b>
  <span class="arrow">→</span>
  <b>Sandbox ID · Running</b>
</div>

<!--
Speaker Notes · 20:30–21:30 · 1 minute

- Create a sandbox group with the aca sandboxgroup create command - all sandboxes run here
- Create a sandbox with the aca sandbox create command
- You can log in within the sandbox, or pre-login using GitHub PAT before entering
- Then you can enter the sandbox
-->

---

<!-- _class: aca-shell-slide -->

## Demo #2: Using Copilot CLI in ACA Sandboxes

<pre><code><span class="shell-prompt">$</span> <span class="shell-command">aca sandbox shell</span> <span class="shell-value">-l name=ghcp-demo</span>

<span class="shell-prompt">workspaces$</span> <span class="shell-command">git clone</span> <span class="shell-url">https://github.com/devkimchi/battle-school-lunch.git</span>
<span class="shell-prompt">workspaces$</span> <span class="shell-command">cd</span> <span class="shell-value">battle-school-lunch</span>
<span class="shell-prompt">workspaces$</span> <span class="shell-command">copilot</span></code></pre>

<div class="creation-result">
  <b>Clone</b><span class="arrow">→</span>
  <b>Move to Working Directory</b><span class="arrow">→</span>
  <b>Run Copilot CLI</b>
</div>

<!--
Speaker Notes · 21:30–22:30 · 1 minute

- Enter the sandbox with the aca sandbox shell command
- Clone a GitHub repo and run the GitHub Copilot CLI
-->

---

## Demo #2: Using Copilot CLI in ACA Sandboxes

<div class="prompt-box">I want to change this project's Web UI to Brutal Design style. Don't modify the code, just write the change plan to a design-update.md file</div>

<!--
Speaker Notes · 22:30–23:30 · 1 minute

- Execute the prompt
-->

---

## Demo #2: Using Copilot CLI in ACA Sandboxes

<div class="aca-command-grid">
  <div class="aca-command-card">
    <h3>1 · Suspend</h3>
    <pre><code><span class="aca-cli">aca</span> <span class="aca-keyword">sandbox stop</span> \
  -l <span class="aca-value">name=ghcp-demo</span></code></pre>
  </div>
  <div class="aca-command-card">
    <h3>2 · Resume</h3>
    <pre><code><span class="aca-cli">aca</span> <span class="aca-keyword">sandbox resume</span> \
  -l <span class="aca-value">name=ghcp-demo</span></code></pre>
  </div>
</div>

<ul class="checklist resume-checks">
  <li>Resume with the same sandbox ID and execution context</li>
  <li>Verify the <code>design-update.md</code> file is preserved</li>
  <li>No CPU or memory computing costs while suspended</li>
</ul>

<!--
Speaker Notes · 23:30–24:30 · 1 minute

- Suspend the sandbox with the aca sandbox stop command
- Resume the sandbox with the aca sandbox resume command
- Verify the design-update.md file is still there
-->

---

<!-- _class: section-divider -->
<!-- _paginate: false -->

<div class="section-name">What to choose and<br />What to defend</div>
<div class="section-subtitle">Product selection criteria and remaining risks</div>

<!--
Speaker Notes · 24:30–24:40 · 10 seconds

- But is a sandbox really a silver bullet from a security perspective? There are still things to be careful about
-->

---

## Docker Sandboxes 🤜🤛 ACA Sandboxes
<table class="matrix">
  <tr><th>Criteria</th><th>Docker Sandboxes</th><th>ACA Sandboxes</th></tr>
  <tr><td>Primary Users</td><td>Individual developers</td><td>Teams, services, multi-tenant</td></tr>
  <tr><td>Execution Location</td><td>Local PC</td><td>Azure-managed infrastructure</td></tr>
  <tr><td>Creation Methods</td><td><span class="yes">Interactive CLI</span></td><td><span class="yes">Portal · CLI · SDK · Bicep · Skills</span></td></tr>
  <tr><td>State Lifecycle</td><td><span class="partial">Local persistence</span></td><td><span class="yes">snapshot · suspend · resume</span></td></tr>
  <tr><td>Massive Concurrency</td><td><span class="partial">Machine capacity limits</span></td><td><span class="yes">Scale to thousands</span></td></tr>
</table>

<!--
Speaker Notes · 24:40–25:40 · 1 minute

- For developers to safely use agents locally, Docker Sandboxes are natural
- For remotely running multiple sandboxes dynamically and automatically, ACA Sandboxes are natural
-->

---

## Risks remain even with sandboxes
<div class="grid-2">
  <div class="card"><b>Network and Credentials</b><p>Information can be leaked to allowed destinations or granted privileges misused</p></div>
  <div class="card"><b>Supply Chain Attacks</b><p>Malicious packages, plugins, images, and installation scripts can be executed</p></div>
  <div class="card"><b>Generated Content Contamination</b><p>Code, build scripts, and CI configurations must be reviewed before external execution</p></div>
  <div class="card"><b>External Tool Trust</b><p>MCP servers, Skills, and external APIs represent separate trust boundaries</p></div>
</div>

<!--
Speaker Notes · 25:40–26:40 · 1 minute

- Risks still remain
- Network and tokens can be pathways for information leakage and privilege misuse
- Supply chain attacks, plugins, installation scripts, etc. require separate review
- Sandboxes limit the scope of impact from these risks
-->

---

## Risks remain even with sandboxes
<div class="product-risks">
  <div class="risk-column docker">
    <h3>Docker Sandboxes</h3>
    <div class="risk-item"><b>Direct Mode</b><p>Changes to shared workspaces immediately affect the host</p></div>
    <div class="risk-item"><b>Host Integration</b><p>Local stdio MCP and shared Skills connect to host resources outside the microVM</p></div>
  </div>
  <div class="risk-column aca">
    <h3>ACA Sandboxes</h3>
    <div class="risk-item"><b>RBAC and Tenant Isolation</b><p>Errors in role scope or user-to-sandbox mapping can expose privileges</p></div>
    <div class="risk-item"><b>Residual State Data</b><p>Code, logs, and sensitive data can remain in snapshots and volumes</p></div>
  </div>
</div>

<!--
Speaker Notes · 26:40–27:40 · 1 minute

- For Docker Sandboxes: be careful with Direct Mode, local MCP running outside the sandbox, and shared Skills
- For ACA Sandboxes: properly control RBAC permissions
- Snapshots have the advantage of preserving working state, but data persists so lifecycle management requires care
-->

---

<!-- _class: statement-slide -->

<div class="statement-text">
Sandboxes <span class="not-safe">don't<br>guarantee for security</span> on<br><strong>AI coding agents</strong> like GitHub Copilot.<br>
Instead, they add a <strong>defense layer</strong> that <span class="not-safe">minimizes risks</span>
</div>

<!--
Speaker Notes · 27:40–28:00 · 20 seconds

- Therefore, sandboxes are not devices that unconditionally make AI coding agents like GitHub Copilot safe
- Rather, they're a defense layer that minimizes damage if problems occur
-->

---

## Key Takeaways
<div class="takeaway"><div class="num">1</div><p>Grant agents the privileges they need, but <strong>enforce boundaries from outside.</strong></p></div>
<div class="takeaway"><div class="num">2</div><p>Use <strong>Docker Sandboxes</strong> for interactive execution on developer PCs, and <strong>ACA Sandboxes</strong> for remote automation and multi-execution.</p></div>
<div class="takeaway"><div class="num">3</div><p>Sandboxes make troubles <strong>small, observable, and disposable.</strong></p></div>

<!--
Speaker Notes · 28:00–29:00 · 1 minute

- Today's session content can be summarized in three ways
- 1. Grant agents work privileges but enforce execution boundaries through external policies
- 2. Use Docker Sandboxes for interactive execution of GitHub Copilot CLI on developer PCs, and ACA Sandboxes for remote automation and multi-execution
- 3. Sandboxes make blast radius small, observable, and disposable
-->

---

## Want to learn more about sandboxes?

<div class="source-columns">
  <div class="source-column">
    <div class="source-card"><b>Docker Sandboxes</b><a href="https://docs.docker.com/ai/sandboxes/">docs.docker.com/ai/sandboxes</a></div>
    <div class="source-card"><b>Docker Sandboxes Security Model</b><a href="https://docs.docker.com/ai/sandboxes/security/">docs.docker.com/ai/sandboxes/security</a></div>
    <div class="source-card"><b>Running GitHub Copilot CLI in Docker Sandboxes</b><a href="https://docs.docker.com/ai/sandboxes/agents/copilot/">docs.docker.com/ai/sandboxes/agents/copilot</a></div>
  </div>
  <div class="source-column">
    <div class="source-card"><b>Modernizing Java Apps with Copilot CLI</b><a href="https://aka.ms/ghcp/appmod/java">aka.ms/ghcp/appmod/java</a></div>
    <div class="source-card"><b>Modernizing .NET Apps with Copilot CLI</b><a href="https://aka.ms/ghcp/appmod/dotnet">aka.ms/ghcp/appmod/dotnet</a></div>
    <div class="source-card"><b>Azure Container Apps Sandboxes Introduction</b><a href="https://aka.ms/aca/sandboxes">aka.ms/aca/sandboxes</a></div>
    <div class="source-card"><b>Azure Container Apps Sandboxes Documentation</b><a href="https://sandboxes.azure.com/docs">sandboxes.azure.com/docs</a></div>
  </div>
</div>

<!--
Speaker Notes · 29:00–29:20 · 20 seconds

- If you want to learn more about sandboxes, check out these links
-->

---

<!-- _class: closing -->
<!-- _paginate: false -->

<div class="closing-thanks">Thank You</div>

<div class="closing-title">
Sandboxing AI Agents on Ubuntu
</div>

<div class="closing-links">
  <a href="https://devkimchi.com/github-copilot-sandbox">devkimchi.com/github-copilot-sandbox</a>
  <a href="https://github.com/devkimchi/github-copilot-sandbox">github.com/devkimchi/github-copilot-sandbox</a>
</div>

<div class="closing-speaker">
  <span>Justin Yoo</span><span>|</span>
  <span>Principal Developer Advocate</span><span>|</span>
  <span>Microsoft/GitHub</span><span>|</span>
  <span>Docker Captain</span><span>|</span>
  <span class="closing-social"><img src="../assets/icon-github.png" alt="GitHub"> @justinyoo</span><span>|</span>
  <span class="closing-social"><img src="../assets/icon-linkedin.png" alt="LinkedIn"> @justinyoo</span>
</div>

<!--
Speaker Notes · 29:20–30:00 · 40 seconds

- Thank you very much!
-->