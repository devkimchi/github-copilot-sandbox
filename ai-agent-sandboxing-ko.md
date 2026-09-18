---
marp: true
theme: default
size: 16:9
# paginate: true
# footer: AI 에이전트 샌드박싱
header: '<a class="language-switch" href="../en/" onclick="this.href = this.getAttribute(&quot;href&quot;) + location.hash" lang="en">English</a>'
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

.grid-2, .grid-3, .grid-4, .grid-5 {
  display: grid;
  gap: 18px;
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }
.grid-5 { grid-template-columns: repeat(5, 1fr); }

section.control-slide > h2 {
  font-size: 36px;
}

section.control-slide > .control-summary {
  margin: 12px 0 0;
}

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

.isolation-zone {
  border: 2px solid var(--line);
  border-radius: 12px;
  padding: 18px;
}

.isolation-zone.microvm {
  background: #fff0e8;
  border-color: var(--green);
}

.isolation-zone.host-resources {
  background: #f8e7ea;
  border-color: #8f2437;
}

.isolation-items {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, 1fr);
}

.isolation-item {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 8px;
  text-align: center;
}

.isolation-kernel {
  background: var(--surface);
  border-radius: 8px;
  color: var(--cyan);
  font-size: 17px;
  font-weight: 700;
  margin-top: 12px;
  padding: 10px;
  text-align: center;
}

.isolation-zone > p {
  color: var(--muted);
  font-size: 16px;
  margin: 12px 0 0;
}

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

# 우분투에서<br><span class="accent">AI 에이전트 샌드박싱</span>하기

Docker 샌드박스와 Azure Container Apps 샌드박스로<br> 피해 범위 제한하기

<div class="speaker-intro">
  <b>유저스틴</b>
  <span class="speaker-role">수석 디벨로퍼 아드보캇</span>
  <span class="speaker-org">Microsoft / GitHub</span>
  <span class="speaker-captain">Docker Captain</span>
  <span class="speaker-social">
    <span class="social-item"><img src="../assets/icon-github.png" alt="GitHub"> @justinyoo</span>
    <span class="social-item"><img src="../assets/icon-linkedin.png" alt="LinkedIn"> @justinyoo</span>
  </span>
</div>

<!--
발표자 노트 · 00:00–00:50 · 50초

- 자기 소개
- GHCP와 같은 AI 코딩 에이전트가 갑자기 디렉토리를 삭제했다거나 하는 경험이 있나?
- AI 에이전트는 종종 예상하지 않은 방향으로 튈 때가 있음. 이런 경우에도 안전하게 사용할 수 있어야 함
- 오늘은 Docker 샌드박스의 로컬 격리와 ACA 샌드박스의 원격 실행환경 운영을 살펴봄
-->

---

<div class="quote transition-quote">
AI 에이전트는 <em>내 권한으로</em>,<br>
나보다 훨씬 빠르게 명령을 실행합니다.
</div>

<p class="muted">그렇다면 에이전트가 실수하거나 공격받았을 때, 어디까지 영향을 미치게 해야 할까요?</p>

<!--
발표자 노트 · 00:50–01:40 · 50초

- GHCP가 처음 나왔을 때는 코드를 제안하는 수준이었음
- 이제는 직접 파일을 수정하고, 패키지 설치하고, 셸 명령 실행하고, 네트워크에 접속함
- 점점 코딩 에이전트의 성능이 올라가면서 내 PC의 권한을 마음대로 부릴 수 있게 됨
- 문제가 생길 수 있는 여지가 충분히 있지만, 그렇다고 권한을 허용하지 않자니 제약이 너무 많음
- 권한을 허용할 경우 문제가 생긴다면, 문제가 생길 수 있는 범위를 어디까지 허용해야 할까?
-->

---

<!-- _class: section-divider -->
<!-- _paginate: false -->

<div class="section-name">위험으로부터 격리하는 경계</div>
<div class="section-subtitle">AI 에이전트의 피해 범위를 어디까지 허용할 것인가</div>

<!--
발표자 노트 · 01:40–01:50 · 10초

- 로컬 개발 환경에서 코딩 에이전트로 인해 어떤 위험이 있고, 격리와 접근 제어로 피해 범위를 어떻게 제한할 수 있을까?
-->

---

## 예상 문제점
<div class="grid-5 threat-grid">
  <div class="card"><div class="icon">rm</div><b>파일 손상</b><p>소스·설정·홈 디렉터리 삭제 또는 덮어쓰기</p></div>
  <div class="card"><div class="icon">key</div><b>자격 증명</b><p>토큰과 클라우드 키의 노출 또는 오용</p></div>
  <div class="card"><div class="icon">net</div><b>정보 유출</b><p>허용되지 않은 목적지로 코드와 데이터 전송</p></div>
  <div class="card"><div class="icon">pkg</div><b>공급망</b><p>악성 패키지와 설치 스크립트 실행</p></div>
  <div class="card"><div class="icon">docker.sock</div><b>호스트 장악</b><p>Docker 소켓과 로컬 프로세스 접근</p></div>
</div>

<!--
발표자 노트 · 01:50–03:10 · 1분 20초

- 다섯 가지 정도로 봄
- 원하지 않는 파일을 건드릴 수 있음
- 환경 변수라든가 설정 파일에 있는 토큰을 읽을 수 있음
- 연결된 네트워크를 통해 정보가 유출될 수 있음
- 공급망 공격을 통한 악성 패키지 설치
- 도커 소켓을 통해 호스트를 장악할 수 있는 가능성
- 그렇다면 다양한 제어 수단을 통해서 피해 범위를 제한할 수 있지 않을까?
-->

---

<!-- _class: control-slide -->

## Docker 샌드박스: 권한은 내부에, 제어는 외부에서
<h3>어디에서 에이전트를 실행하고, 에이전트는 무엇에 접근할 수 있을까요?</h3>
<div class="grid-4">
  <div class="card"><div class="big-number">01</div><b>컴퓨트</b><p>호스트와 분리된 microVM에서 실행</p></div>
  <div class="card"><div class="big-number">02</div><b>파일</b><p>공유 범위와 쓰기 권한</p></div>
  <div class="card"><div class="big-number">03</div><b>네트워크</b><p>목적지 기반 송신 정책</p></div>
  <div class="card"><div class="big-number">04</div><b>자격 증명</b><p>원문을 숨긴 프록시 주입</p></div>
</div>

<p class="small control-summary">에이전트를 별도 환경에서 실행하고 접근 권한을 제한해, <strong>문제가 생겼을 때 피해 범위를 줄입니다.</strong></p>

<div class="card resource-caption">
  <b>수명주기 관리</b>
  <p>호스트에서 <code>sbx</code> 명령으로 샌드박스를 생성·중지·삭제합니다.</p>
</div>

<!--
발표자 노트 · 03:10–04:00 · 50초

- 그래서 나온 것이 도커 샌드박스
- 이 기능의 핵심은 에이전트를 어디에서 실행하고, 무엇에 접근할 수 있게 할 것인지 정하는 것임
- 컴퓨트: 에이전트는 호스트와 분리된 microVM 안에서 실행함
- 파일: 호스트에서 공유할 경로와 읽기·쓰기 권한을 정함
- 네트워크: 접속할 수 있는 목적지를 호스트 쪽 송신 정책으로 정함
- 자격 증명: 지원되는 인증은 호스트 프록시가 토큰을 주입하므로, 에이전트에 토큰 원문을 직접 전달하지 않아도 됨
- 이렇게 필요한 작업은 허용하면서 문제가 생겼을 때 피해 범위를 줄임. 앞장의 위험과 일대일로 대응하는 목록은 아님
- 수명주기 관리는 별도의 운영 작업임. 사용자는 호스트에서 sbx 명령으로 샌드박스를 생성·중지·삭제함
-->

---

## 에이전트와 호스트는 이렇게 분리됩니다
<div class="grid-2">
  <div class="isolation-zone microvm">
    <h3>샌드박스 microVM</h3>
    <div class="isolation-items">
      <div class="isolation-item">AI Agent</div>
      <div class="isolation-item">셸 · 설치한 도구</div>
      <div class="isolation-item">내부 Docker Engine</div>
    </div>
    <div class="isolation-kernel">자체 Linux 커널</div>
    <p>에이전트와 도구가 이 안에서 실행됩니다. sudo 권한도 이 환경 안에서 사용합니다.</p>
  </div>
  <div class="isolation-zone host-resources">
    <h3>호스트 자원 · microVM 바깥</h3>
    <div class="isolation-items">
      <div class="isolation-item">파일시스템</div>
      <div class="isolation-item">호스트 Docker 데몬</div>
      <div class="isolation-item">로컬 프로세스</div>
    </div>
    <div class="isolation-kernel">호스트 OS</div>
    <p>샌드박스 내부 자원과 구분됩니다. 명시적으로 공유한 파일은 샌드박스에서 접근할 수 있습니다.</p>
  </div>
</div>

<div class="grid-3 process-outputs">
  <div class="card"><b>파일 공유</b><p>호스트에서 공유할 경로와 읽기·쓰기 권한을 지정</p></div>
  <div class="card"><b>외부 통신</b><p>호스트 프록시를 거쳐 송신 정책과 지원되는 인증의 자격 증명 주입 적용</p></div>
  <div class="card"><b>Docker 실행</b><p>호스트 데몬에 연결하는 대신 microVM 내부 엔진 사용</p></div>
</div>

<!--
발표자 노트 · 04:00–04:50 · 50초

- 왼쪽 큰 박스가 샌드박스 microVM이며, 에이전트·셸·설치한 도구·내부 Docker Engine이 자체 Linux 커널 위에서 실행됨
- sudo는 별도 계층이 아니라 microVM 안에서 사용할 수 있는 권한임
- 오른쪽은 microVM 바깥의 호스트 자원임. 두 박스는 별도 PC 두 대가 아니라 실행환경과 자원의 구분을 나타냄
- 파일은 호스트에서 명시적으로 공유한 범위에 접근하고, 외부 통신은 호스트 프록시의 정책을 따름. 지원되는 인증은 프록시가 자격 증명을 주입함
- Docker 명령은 호스트 데몬이 아닌 microVM 내부 엔진을 사용함. 다음 장에서 파일 공유 방식을 비교함
-->

---

## Direct 🤜🤛 Clone
<div class="versus">
  <div class="mode direct">
    <h3>Direct 모드</h3>
    <ul>
      <li>프로젝트를 읽기·쓰기로 마운트</li>
      <li>변경 사항이 호스트에 즉시 반영</li>
      <li>빠른 반복, 낮은 코드 격리</li>
    </ul>
  </div>
  <div class="mode clone">
    <h3>Clone 모드</h3>
    <ul>
      <li>원본 저장소는 읽기 전용</li>
      <li>VM 내부의 비공개 복제본에서 작업</li>
      <li>검토 후 선택적으로 반영</li>
    </ul>
  </div>
</div>

<p class="center warning">Direct 모드에서는 샌드박스라고 하더라도 호스트에 저장되어 있는 프로젝트가 영향을 받습니다.</p>

<!--
발표자 노트 · 04:50–06:00 · 1분 10초

- 도커 샌드박스에서 제공하는 코드 접근 원칙이 두 가지가 있음
- 다이렉트 모드와 클론 모드가 둘 다 장단점이 있음
- 다이렉트 모드의 경우 호스트와 프로젝트를 공유함. 빠른 반영이 가능함. 대신 격리 수준이 낮음
- 클론 모드는 원본을 읽기 전용으로 공유하고 별도의 복제본에서 작업함. 검토 후 fetch 등으로 변경 사항을 가져올 수 있음
- 읽을 수 있는 소스에 시크릿을 넣어두면 클론 모드에서도 노출될 수 있음
-->

---

<!-- _class: demo-divider -->
<!-- _paginate: false -->

<div class="demo-kicker">DEMO #1</div>
<div class="demo-name">Docker 샌드박스에서<br>Java 앱 현대화하기</div>
<!-- <div class="demo-name">Docker 샌드박스에서<br>.NET 앱 현대화하기</div> -->

<!--
발표자 노트 · 06:00–06:10 · 10초

- 그럼 첫번째 데모를 보쟈
- 도커 샌드박스 안에서 GHCP CLI와 앱 현대화 플러그인을 통해 앱을 현대화 해 보쟈
-->

---

## 데모 #1: 작업과 격리를 함께 확인합니다
<ul class="checklist">
  <li>Clone 모드에서 Copilot CLI로 Java 현대화를 시작합니다</li>
  <!-- <li>Clone 모드에서 Copilot CLI로 .NET 현대화를 시작합니다</li> -->
  <li>에이전트가 일하는 동안 원본 쓰기와 통신 정책을 확인합니다</li>
  <li>호스트 작업 트리와 private clone의 변경 사항을 비교합니다</li>
</ul>

<!--
발표자 노트 · 06:10–06:40 · 30초

- 데모의 질문은 현대화가 진행되는가, 그리고 작업이 어느 경계 안에 머무르는가 두 가지임
- 터미널 A에서는 작업을 실행하고, 터미널 B에서는 경계를 확인함
-->

---

<!-- _class: auth-command-slide -->

## 데모 #1: 인증하고 Clone 모드로 실행

### 터미널 A · 호스트에서 인증 준비 → Copilot 실행
```bash
sbx secret set github --command 'gh auth token'
sbx run --clone --name java-appmod copilot .
```
<!-- ```bash
sbx secret set github --command 'gh auth token'
sbx run --clone --name dotnet-appmod copilot .
``` -->

### 터미널 B · 실행 중인 샌드박스에 추가 접속 (선택)
```bash
sbx exec -it java-appmod bash
```
<!-- ```bash
sbx exec -it dotnet-appmod bash
``` -->

<p class="small">Copilot이 작업하는 동안, 별도의 호스트 터미널에서 같은 샌드박스에 접속해 설치·상태 확인을 합니다.</p>

<!--
발표자 노트 · 06:40–07:40 · 1분

- 터미널 A에서 sbx secret set으로 호스트 쪽 GitHub 자격 증명을 설정함. 토큰 주입은 이후 인증 요청을 처리할 때 호스트 프록시가 수행함
- 같은 터미널에서 sbx run으로 Clone 모드 샌드박스를 생성하고 그 안에서 Copilot CLI를 실행함
- 점검이 필요하면 별도의 호스트 터미널 B에서 sbx exec로 이미 실행 중인 java-appmod 샌드박스에 bash 셸을 추가로 열어 설치·상태 확인을 함
-->

---

<!-- _class: plugin-command-slide -->

## 데모 #1: 현대화 플러그인 설치
<pre><code><span class="cli-command">/plugin</span> <span class="cli-keyword">marketplace</span> <span class="cli-keyword">add</span> <span class="cli-value">microsoft/github-copilot-modernization</span>
<span class="cli-command">/plugin</span> <span class="cli-keyword">install</span> <span class="cli-value">github-copilot-modernization@github-copilot-modernization</span></code></pre>

<!--
발표자 노트 · 07:40–08:20 · 40초

- 플러그인 설치
- 플러그인 설치 중 관련 MCP 서버도 함께 설치
- MCP 실행 실패는 샌드박스의 환경 설정 때문인 것 보여줌
-->

---

## 데모 #1: 진단·계획·실행과 산출물
<div class="agent-select"><code>copilot</code> → <code>/agent</code> → <strong>github-copilot-modernization:modernize</strong></div>

<div class="flow">
  <div class="node"><b>Assessment</b><span>의존성·Java·위험 분석</span></div>
  <!-- <div class="node"><b>Assessment</b><span>의존성·.NET·위험 분석</span></div> -->
  <div class="arrow">→</div>
  <div class="node"><b>Planning</b><span>실행 가능한 작업 계획</span></div>
  <div class="arrow">→</div>
  <div class="node"><b>Execution</b><span>변경·빌드·검증</span></div>
</div>

<div class="grid-3 process-outputs">
  <div class="card"><b>assessment/</b><p>현대화 평가 결과</p></div>
  <div class="card"><b>plan.md · tasks.json</b><p>검토 가능한 실행 계획</p></div>
  <div class="card"><b>task commits</b><p>작업별 변경 이력</p></div>
</div>

<!--
발표자 노트 · 08:20–09:00 · 40초

- /agent 실행 후 github-copilot-modernization:modernize 선택
- 현대화 에이전트는 알아서 Assessment, Planning, Execution 단계를 진행함
- 이미 GHCP는 --allow-all 옵션을 자동으로 적용시켜 놨기 때문에 맨 마지막에 진행할까요? 정도만 남겨두고 알아서 진행함
-->

---

## 데모 #1: Java 앱 현대화 요청
<div class="prompt-box">이 앱을 현대화 해줘</div>
<div class="prompt-box">이 앱을 Java 21과 Spring Boot 4.1로 업그레이드 해줘</div>
<!-- <div class="prompt-box">이 앱을 .NET 10으로 현대화 해줘</div> -->

<!--
발표자 노트 · 09:00–12:30 · 3분 30초

- 프롬프트 실행
- 화면처럼 얘기할 수도 있고, 아예 "해줘!" 라고 해도 됨
- 여기서는 Java 21과 Spring Boot 4.1로 업그레이드 해달라고 했음
- 시간이 오래 걸리므로 작업을 진행시켜 두고, 다음 장에서 별도 터미널로 격리 경계를 확인함
- 진행 중인 작업을 완료된 현대화로 소개하지 않음
-->

---

## 데모 #1: 경계가 작동하는지 확인
<table class="matrix">
  <tr><th>확인 위치</th><th>관찰할 증거</th></tr>
  <tr><td>샌드박스의 원본 마운트</td><td><code>/run/sandbox/source</code> 아래 쓰기가 읽기 전용 오류로 거부되는가?</td></tr>
  <tr><td>호스트 작업 트리</td><td>작업 전후 <code>git status --short</code>가 같은가?</td></tr>
  <tr><td>샌드박스 내부</td><td><code>docker info</code>가 내부 엔진을 가리키는가?</td></tr>
  <tr><td>호스트의 정책 대시보드</td><td>연결 허용·차단 결정과 적용 규칙을 확인할 수 있는가?</td></tr>
</table>

<!--
발표자 노트 · 12:30–14:00 · 1분 30초

- docs/demo-1-runbook-java.md의 4~5단계에 따라 터미널 B에서 확인함
- 데모용 저장소에서 touch /run/sandbox/source/__sandbox-write-test를 실행해 읽기 전용 오류를 확인함
- 호스트에서 git status --short를 확인하고, 샌드박스에서 docker info를 확인함
- 호스트에서 sbx 대시보드의 네트워크 패널을 보여줌. 차단 사례는 실제 로그가 있을 때만 설명함
- 표는 확인 항목이지 이미 검증된 결과가 아님. 예상과 다르면 데모를 멈추고 설정을 확인함
-->

---

<div class="quote">
로컬에서 실행 경계를 확인했습니다.<br>
이제 <em>팀과 서비스 규모</em>로 운영하려면 어떻게 해야 할까요?
</div>

<div class="grid-3 transition-cards">
  <div class="card"><b>개별 PC 종속</b><p>개발자 장비의 상태와 가용성에 의존</p></div>
  <div class="card"><b>수명주기 자동화</b><p>생성·중지·재개·폐기를 서비스 코드에서 관리</p></div>
  <div class="card"><b>동시 실행</b><p>여러 사용자와 에이전트의 작업을 격리해 운영</p></div>
</div>

<!--
발표자 노트 · 14:00–14:30 · 30초

- Docker 샌드박스로 로컬 실행 경계를 확인했음. 이제 여러 사용자의 작업을 서비스에서 운영하는 상황으로 넘어감
- 요청별 생성과 상태 보존, 중지·재개를 관리하기 위해 ACA 샌드박스를 살펴봄
-->

---

## 샌드박스를 클라우드에 올린다면?
<div class="flow">
  <div class="node channels-node"><b>ACA CLI</b><span>Portal · SDK · Bicep · Skills</span></div>
  <div class="arrow">→</div>
  <div class="node"><b>샌드박스 그룹</b><span>정책·이미지·네트워크</span></div>
  <div class="arrow">→</div>
  <div class="node"><b>샌드박스</b><span>격리된 상태 저장 실행</span></div>
  <div class="arrow">→</div>
  <div class="node"><b>Snapshot</b><span>메모리·디스크</span></div>
</div>

<p class="center resource-caption"><strong>Microsoft.App/SandboxGroups</strong> · Azure Container Apps Sandboxes</p>

<!--
발표자 노트 · 14:30–15:40 · 1분 10초

- ACA 샌드박스는 컨테이너 앱 기반의 리소스임. 현재 프리뷰 상태
- 포탈, CLI, 파이썬 SDK, Skills 등으로 샌드박스를 생성하고 관리할 수 있음
- 오늘은 ACA CLI를 사용할 거임
- 각각의 샌드박스는 격리된 실행환경이고 도커에서 제공하는 컨테이너 이미지를 루트 파일 시스템으로 사용함
- 샌드박스마다 스냅샷을 제공해서 사용하지 않을 경우에는 컨테이너를 멈추고 필요한 경우 다시 실행시킬 수 있음
-->

---

## 서비스 운영에서 달라지는 세 가지
<div class="grid-3 value-grid">
  <div class="card"><div class="icon infinity-icon">&#x221E;</div><b>대기와 동시성</b><p>사전 준비 풀로 시작 시간을 줄이고, 여러 작업을 별도 샌드박스로 실행</p></div>
  <div class="card"><div class="icon">&#x23F8;&#xFE0E; &#x25B6;&#xFE0E;</div><b>유휴 상태와 비용</b><p>Suspend / Resume으로 상태를 보존하고 유휴 컴퓨팅 사용을 줄임</p></div>
  <div class="card"><div class="icon">ID</div><b>중앙 관리</b><p>Entra ID·RBAC, 네트워크 정책과 사용자 이미지를 운영 기준으로 관리</p></div>
</div>

<!--
발표자 노트 · 15:40–16:40 · 1분

- 앞 장은 리소스 구조였고, 여기서는 서비스 운영에서 해결할 문제를 세 가지로 연결함
- 요청이 몰릴 때의 대기, 작업이 없을 때의 비용, 사용자별 권한과 환경을 각각 관리함
- 중지상태에서는 스냅샷 저장 공간을 제외한 나머지 비용이 발생하지 않음
- 다음 데모에서는 이 중 상태를 보존하며 중지·재개하는 흐름을 확인함. 대규모 동시성이나 모든 격리 속성을 검증하는 데모는 아님
-->

---

<!-- _class: demo-divider -->
<!-- _paginate: false -->

<div class="demo-kicker">DEMO #2</div>
<div class="demo-name">ACA 샌드박스에서<br>Copilot CLI 활용하기</div>

<!--
발표자 노트 · 16:40–16:50 · 10초

- 쟈 그러면 두번째 데모를 한 번 볼까?
-->

---

## 데모 #2: 그룹과 샌드박스 생성

<div class="aca-command-grid">
  <div class="aca-command-card">
    <h3>1 · 샌드박스 그룹 준비</h3>
    <pre><code><span class="aca-cli">aca</span> <span class="aca-keyword">sandboxgroup create</span> \
  --name <span class="aca-value">ghcp-sandbox-demo</span> \
  --location <span class="aca-value">koreacentral</span> \
  --set-config</code></pre>
  </div>
  <div class="aca-command-card">
    <h3>2 · 샌드박스 생성</h3>
    <pre><code><span class="aca-cli">aca</span> <span class="aca-keyword">sandbox create</span> \
  --disk <span class="aca-value">copilot</span> \
  --credential <span class="aca-value">&lt;copilot-credential-id&gt;</span> \
  --label <span class="aca-value">name=ghcp-demo</span></code></pre>
  </div>
</div>

<div class="creation-result">
  <b>샌드박스 그룹 구성 저장</b>
  <span class="arrow">→</span>
  <b>샌드박스 ID · Running</b>
</div>

<!--
발표자 노트 · 16:50–17:50 · 1분

- aca sandboxgroup create 명령으로 샌드박스 그룹 생성 - 모든 샌드박스가 여기서 돌아감
- aca sandbox create 명령으로 샌드박스 생성
- 샌드박스 안으로 들어가서 로그인해도 되지만, 그 전에 GitHub PAT 활용해서 사전에 로그인할 수 있음
- 이후 샌드박스 안으로 들어가면 됨
-->

---

<!-- _class: aca-shell-slide -->

## 데모 #2: 저장소를 준비하고 Copilot 실행

<pre><code><span class="shell-prompt">$</span> <span class="shell-command">aca sandbox shell</span> <span class="shell-value">-l name=ghcp-demo</span>

<span class="shell-prompt">workspaces$</span> <span class="shell-command">git clone</span> <span class="shell-url">https://github.com/devkimchi/battle-school-lunch.git</span>
<span class="shell-prompt">workspaces$</span> <span class="shell-command">cd</span> <span class="shell-value">battle-school-lunch</span>
<span class="shell-prompt">workspaces$</span> <span class="shell-command">copilot</span></code></pre>

<div class="creation-result">
  <b>Clone</b><span class="arrow">→</span>
  <b>작업 디렉터리 이동</b><span class="arrow">→</span>
  <b>Copilot CLI 실행</b>
</div>

<!--
발표자 노트 · 17:50–18:50 · 1분

- aca sandbox shell 명령어로 샌드박스에 접속
- 깃헙 리포 클론, GHCP CLI 실행
-->

---

## 데모 #2: 복원할 작업 파일 만들기

<div class="prompt-box">이 프로젝트의 Web UI를 Brutal Design 스타일로 변경하려고 해. 코드는 수정하지 말고, 변경 계획을 design-update.md 파일로 작성해 줘</div>

<!--
발표자 노트 · 18:50–20:10 · 1분 20초

- 프롬프트를 실행하고 design-update.md가 생성되는 것을 확인함
- 다음 장에서 같은 파일을 다시 확인할 수 있도록 내용을 보여줌
-->

---

## 데모 #2: 중지하고 작업 상태 복원

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
  <li>동일한 샌드박스 ID와 실행 컨텍스트로 재개합니다</li>
  <li><code>design-update.md</code> 파일이 유지되는지 확인합니다</li>
  <li>중지한 동안 CPU·메모리 컴퓨팅 비용이 발생하지 않습니다</li>
</ul>

<!--
발표자 노트 · 20:10–21:30 · 1분 20초

- aca sandbox stop 명령어로 샌드박스 중단
- aca sandbox resume 명령어로 다시 샌드박스 실행
- 다시 접속해 동일한 샌드박스 ID와 design-update.md 내용을 확인함
- 이 확인은 파일 상태 보존의 증거이며, 모든 프로세스의 메모리 복원이나 보안을 입증하는 것은 아님
-->

---

<!-- _class: section-divider -->
<!-- _paginate: false -->

<div class="section-name">선택과 방어 계층</div>
<div class="section-subtitle">두 샌드박스의 선택 기준과 여전히 남는 위험</div>

<!--
발표자 노트 · 21:30–21:40 · 10초

- 두 샌드박스의 선택 기준을 정리한 뒤, 에이전트 내장 샌드박스 및 원격 개발환경과의 차이를 차례로 짚어 봄
-->

---

## Docker 샌드박스 🤜🤛 ACA 샌드박스
<table class="matrix">
  <tr><th>선택 기준</th><th>Docker 샌드박스</th><th>ACA 샌드박스</th></tr>
  <tr><td>주요 상황</td><td>개발자의 대화형 작업</td><td>서비스 요청별 에이전트 실행</td></tr>
  <tr><td>실행 위치</td><td>로컬 PC</td><td>Azure 관리형 인프라</td></tr>
  <tr><td>상태·수명주기</td><td>로컬 작업환경 유지·폐기</td><td>snapshot · suspend · resume</td></tr>
  <tr><td>동시 실행 규모</td><td>개발자 장비 용량 중심</td><td>서비스 수요와 할당량 중심</td></tr>
</table>

<p class="small resource-caption">보안 등급표가 아닙니다. <strong>작업을 누가, 어디서, 어떤 수명주기로 운영하는지</strong>에 따라 선택합니다.</p>

<!--
발표자 노트 · 21:40–22:40 · 1분

- 로컬에서 반복 개발하면서 에이전트 실행 경계를 두려면 Docker 샌드박스를 고려함
- 서비스 코드가 여러 에이전트 작업의 생성·중지·재개를 관리하려면 ACA 샌드박스를 고려함
- 용도가 겹칠 수 있음. 제품 이름보다 실제 공유 범위와 권한 정책을 확인해야 함
-->

---

## 보충: 에이전트 내장 샌드박스와는 무엇이 다른가요?
<table class="matrix">
  <tr><th>구분</th><th>핵심 질문</th><th>격리·관리 방식</th></tr>
  <tr><td>에이전트 내장<br>로컬 샌드박스</td><td>실행한 명령이 어디까지<br>접근할 수 있는가?</td><td>OS 수준 파일·네트워크 제약<br>적용 대상·기본값은 CLI마다 다름</td></tr>
  <tr><td>Docker 샌드박스</td><td>실행환경을 호스트와<br>어떻게 분리하는가?</td><td>독립 커널의 microVM<br>샌드박스 내부 Docker Engine</td></tr>
  <tr><td>ACA 샌드박스</td><td>격리된 실행환경을<br>서비스에서 어떻게 운영하는가?</td><td>관리형 격리 인스턴스<br>생성·중지·재개·폐기와 상태 보존</td></tr>
</table>

<p class="small"><strong>승인</strong>은 “실행해도 되는가”, <strong>격리</strong>는 “실행해도 어디까지 접근하는가”입니다.<br>안전 등급의 순서가 아닙니다. 지원되는 환경에서는 내장 제약과 외부 격리를 함께 적용할 수 있습니다.</p>

<p class="small">내장 로컬 샌드박스 문서:
<a href="https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes">GitHub Copilot CLI</a> ·
<a href="https://learn.chatgpt.com/docs/agent-approvals-security">OpenAI Codex CLI</a> ·
<a href="https://code.claude.com/docs/en/sandboxing">Claude Code</a></p>

<!--
발표자 노트 · 22:40–24:00 · 1분 20초

- 두 실행환경의 동작을 살펴봤으니, 각 CLI의 로컬 샌드박스와 적용 대상·제한 범위를 비교함
- 세 CLI 모두 단순한 승인창과는 별개로 OS 수준의 로컬 샌드박싱을 문서화하고 있음. 내장 기능을 보안 효과가 없는 것으로 설명하면 안 됨
- 차이는 안전 등급보다 적용 대상과 관리 단위임. 내장 기능은 명령의 접근 범위, Docker는 microVM 실행환경, ACA는 관리형 인스턴스의 운영에 초점을 맞춰 설명함
- 공유 파일·자격 증명·네트워크와 실제 도구 실행 위치를 함께 봐야 함. 외부 환경을 쓴다고 모든 연동이 그 안에서 실행되는 것은 아님
- 자동 승인은 격리 경계가 아님. 그렇다고 모든 승인 생략 옵션이 격리를 유지하는 것도 아님. 예를 들어 Codex의 --dangerously-bypass-approvals-and-sandbox는 둘 다 해제함
- 참고 · Copilot CLI 로컬 샌드박스는 실험적 기능이며 기본적으로 꺼져 있음. 셸·검색과 기본 설정의 로컬 MCP/LSP 서버를 포함하지만, CLI 내부 파일 도구는 OS 격리가 아닌 최선 노력 방식의 정책 적용이고 원격 MCP는 대상이 아님
- 참고 · Copilot 로컬 샌드박스는 기본적으로 외부 송신을 허용함. 네트워크 프록시 강제 방식과 Windows 지원 조건은 공식 문서 간 차이가 있어 여기서는 단정하지 않음
- 참고 · Codex는 sandbox mode와 approval policy가 별개임. workspace-write는 프로젝트 밖의 모든 읽기를 차단한다는 뜻이 아니며, 명령 네트워크 프록시는 MCP·외부 도구 연결까지 제어하지 않음
- 참고 · Claude Code 내장 샌드박스는 셸 명령과 자식 프로세스가 중심임. 내장 파일 도구·MCP·hooks까지 전체 프로세스를 감싸는 별도 sandbox-runtime과 구분함
- 참고 · Copilot의 클라우드 샌드박스는 ACA Sandboxes 기반이므로, 여기서 비교하는 “내장”은 각 CLI의 로컬 샌드박스를 뜻함
- 참고 · 중첩 실행과 강제 정책은 OS·버전·설정에 따라 달라짐. 예외 명령, 비격리 재시도와 기능 사용 불가 시 동작도 확인해야 함
- 공식 문서: https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes
- 공식 문서: https://learn.chatgpt.com/docs/agent-approvals-security
- 공식 문서: https://code.claude.com/docs/en/sandboxing
- 적용 범위 참고: https://code.claude.com/docs/en/sandbox-environments
- 외부 실행환경 참고: https://docs.docker.com/ai/sandboxes/security/isolation/
- 외부 실행환경 참고: https://learn.microsoft.com/en-us/azure/container-apps/sandboxes-overview
-->

---

## 보충: Codespaces와는 무엇이 다른가요?
<div class="grid-3">
  <div class="card"><b>원격 개발환경의 격리</b><p>Codespace마다 전용 VM과 개발 컨테이너를 사용합니다. 브라우저에서 실행하면 로컬 작업 폴더를 직접 수정하지 않습니다.</p></div>
  <div class="card"><b>그 안에서 유효한 권한</b><p>원격 워크스페이스, 부여된 GitHub 토큰과 전달한 시크릿은 에이전트가 사용할 수 있습니다.</p></div>
  <div class="card"><b>별도로 필요한 정책</b><p>기본적으로 인터넷 송신이 가능합니다. 원격에서 실행한다고 에이전트의 접근 범위까지 제한되는 것은 아닙니다.</p></div>
</div>

<p class="small resource-caption">이 저장소 체험: <strong>Copilot CLI 사전 설치 · 터미널 중심 UI</strong><br>
<a href="https://codespaces.new/devkimchi/github-copilot-sandbox">Codespaces에서 열기</a> → <code>copilot</code> 실행 → 필요 시 로그인</p>

<p class="small warning">이 저장소는 새 대화형 세션에 <code>allow-all</code>을 적용하며, 별도 송신 제한은 설정하지 않습니다.<br>조직 정책이 우선하며, 신뢰하는 저장소와 폐기 가능한 데이터만 사용하세요.</p>

<!--
발표자 노트 · 24:00–25:20 · 1분 20초

- Codespaces를 세 번째 샌드박스 제품으로 소개하는 것이 아니라, 원격 개발환경과 실행 정책의 차이를 설명하는 보충 비교임
- Codespaces에는 전용 VM과 네트워크 격리가 있음. 격리가 없는 서비스라는 뜻은 아님
- GitHub 토큰의 실제 권한은 사용자의 저장소 권한과 추가로 승인한 접근 범위에 따라 달라짐
- #13의 설정은 실습 시작을 쉽게 해 줌. 터미널을 열 뿐 Copilot을 자동 실행하지 않으며, 필요하면 사용자가 인증해야 함
- allow-all은 이 저장소에서 정한 새 대화형 Copilot 세션의 자동 승인 설정이지, Codespaces 전체의 기본 정책이나 별도의 격리 경계가 아님
- autopilot이나 인증 우회가 아니며 비대화형 실행에는 별도 옵션이 필요함
- 공식 보안 설명: https://docs.github.com/en/codespaces/reference/security-in-github-codespaces
-->

---

## 격리 경계를 넘을 때 다시 검토합니다
<div class="grid-2">
  <div class="card"><b>외부 시스템에 한 행동</b><p>유효한 토큰으로 실행한 API 호출이나 허용 목적지로의 전송은 환경을 폐기해도 되돌아가지 않습니다.</p></div>
  <div class="card"><b>반입한 도구와 의존성</b><p>패키지·플러그인·이미지의 출처를 확인합니다. 격리 실행이 신뢰할 수 있는 도구라는 보증은 아닙니다.</p></div>
  <div class="card"><b>밖으로 가져온 결과물</b><p>코드·빌드 스크립트·CI 설정은 호스트나 파이프라인에서 실행하기 전에 diff를 검토합니다.</p></div>
  <div class="card"><b>경계를 넘는 연동</b><p>MCP·Skills·외부 API가 실제 어디서 실행되고 어떤 권한을 갖는지 확인합니다.</p></div>
</div>

<!--
발표자 노트 · 25:20–26:30 · 1분 10초

- 도입의 위험 목록을 다시 읽기보다, 환경 경계를 넘는 순간을 짚음
- 샌드박스를 지워도 외부 API에서 이미 한 변경이나 전송은 사라지지 않음
- 내부에서 생성한 CI 설정을 호스트나 파이프라인에서 실행하면 새로운 권한으로 동작함
- 따라서 실행 위치를 분리하는 것과 결과물·외부 권한을 검토하는 것은 별도의 작업임
-->

---

## 실행 전에 확인할 설정
<div class="product-risks">
  <div class="risk-column docker">
    <h3>Docker 샌드박스</h3>
    <div class="risk-item"><b>공유 범위</b><p>Direct의 쓰기 권한과 Clone 원본의 읽기 범위를 확인합니다.</p></div>
    <div class="risk-item"><b>호스트 연동</b><p>MCP·Skills의 실행 위치와 호스트 자원 접근을 확인합니다.</p></div>
  </div>
  <div class="risk-column aca">
    <h3>ACA 샌드박스</h3>
    <div class="risk-item"><b>RBAC·사용자 매핑</b><p>역할 범위와 사용자별 샌드박스 연결을 확인합니다.</p></div>
    <div class="risk-item"><b>보존 상태</b><p>Snapshot·Volume의 보존 기간과 삭제 절차를 정합니다.</p></div>
  </div>
</div>

<!--
발표자 노트 · 26:30–27:40 · 1분 10초

- 제품별 위험을 추상적으로 나열하지 말고, 실행 전에 실제로 바꿀 수 있는 설정으로 설명함
- Docker는 쓰기뿐 아니라 원본 읽기 범위와 호스트 연동도 확인함
- ACA는 사용자 매핑과 RBAC를 확인하고 보존 상태의 삭제 절차를 정함
-->

---

## 오늘의 결론
<div class="takeaway"><div class="num">1</div><p>에이전트에게 필요한 권한은 주되, <strong>경계는 외부에서 강제합니다.</strong></p></div>
<div class="takeaway"><div class="num">2</div><p>실행 장소뿐 아니라 <strong>파일·토큰·네트워크·보존 상태</strong>를 확인합니다.</p></div>
<div class="takeaway"><div class="num">3</div><p>생성 결과물은 <strong>다른 권한으로 실행하기 전에 검토합니다.</strong></p></div>

<p class="center warning">샌드박스는 안전 보장이 아니라,<br><strong>피해 범위를 줄이는 방어 계층</strong>입니다.</p>

<!--
발표자 노트 · 27:40–28:40 · 1분

- 제품 기능을 다시 요약하지 않고, 다음 에이전트 작업에 적용할 세 가지 행동으로 마무리함
- 권한과 경계를 따로 설정하고, 경계가 작동하는지 관찰하고, 결과물을 검토한 뒤 반영함
- 마지막 문장을 핵심 메시지로 남김
-->

---

## 샌드박스에 대해 더 궁금하다면?

<div class="source-columns">
  <div class="source-column">
    <div class="source-card"><b>Docker 샌드박스</b><a href="https://docs.docker.com/ai/sandboxes/">docs.docker.com/ai/sandboxes</a></div>
    <div class="source-card"><b>Docker 샌드박스 보안 모델</b><a href="https://docs.docker.com/ai/sandboxes/security/">docs.docker.com/ai/sandboxes/security</a></div>
    <div class="source-card"><b>Docker 샌드박스에서 GitHub Copilot CLI 실행하기</b><a href="https://docs.docker.com/ai/sandboxes/agents/copilot/">docs.docker.com/ai/sandboxes/agents/copilot</a></div>
    <div class="source-card"><b>GitHub Codespaces의 격리와 보안</b><a href="https://docs.github.com/en/codespaces/reference/security-in-github-codespaces">GitHub Docs · Security in GitHub Codespaces</a></div>
  </div>
  <div class="source-column">
    <div class="source-card"><b>Copilot CLI로 Java 앱 현대화하기</b><a href="https://aka.ms/ghcp/appmod/java">aka.ms/ghcp/appmod/java</a></div>
    <div class="source-card"><b>Copilot CLI로 .NET 앱 현대화하기</b><a href="https://aka.ms/ghcp/appmod/dotnet">aka.ms/ghcp/appmod/dotnet</a></div>
    <div class="source-card"><b>Azure Container Apps 샌드박스 소개</b><a href="https://aka.ms/aca/sandboxes">aka.ms/aca/sandboxes</a></div>
    <div class="source-card"><b>Azure Container Apps 샌드박스 문서</b><a href="https://sandboxes.azure.com/docs">sandboxes.azure.com/docs</a></div>
  </div>
</div>

<!--
발표자 노트 · 28:40–29:20 · 40초

- 두 샌드박스의 문서와 Codespaces 보안 설명을 함께 안내함
- Codespaces 체험은 저장소 README의 Open in GitHub Codespaces 버튼에서도 시작할 수 있음
-->

---

<!-- _class: closing -->
<!-- _paginate: false -->

<div class="closing-thanks">감사합니다</div>

<div class="closing-title">
우분투에서 AI 에이전트 샌드박싱하기
</div>

<div class="closing-links">
  <a href="https://devkimchi.com/github-copilot-sandbox">devkimchi.com/github-copilot-sandbox</a>
  <a href="https://github.com/devkimchi/github-copilot-sandbox">github.com/devkimchi/github-copilot-sandbox</a>
</div>

<div class="closing-speaker">
  <span>유저스틴</span><span>|</span>
  <span>수석 디벨로퍼 아드보캇</span><span>|</span>
  <span>Microsoft/GitHub</span><span>|</span>
  <span>Docker Captain</span><span>|</span>
  <span class="closing-social"><img src="../assets/icon-github.png" alt="GitHub"> @justinyoo</span><span>|</span>
  <span class="closing-social"><img src="../assets/icon-linkedin.png" alt="LinkedIn"> @justinyoo</span>
</div>

<!--
발표자 노트 · 29:20–30:00 · 40초

- 땡큐베리감사!
-->
