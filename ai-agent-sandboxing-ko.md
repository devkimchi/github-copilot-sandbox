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

# 우분투에서<br><span class="accent">AI 에이전트 샌드박싱</span>하기

Docker 샌드박스와 Azure Container Apps 샌드박스로 피해 범위 통제하기

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
발표자 노트 · 00:00–01:00 · 1분

- 자기 소개
- GHCP와 같은 AI 코딩 에이전트가 갑자기 디렉토리를 삭제했다거나 하는 경험이 있나?
- AI 에이전트는 종종 예상하지 않은 방향으로 튈 때가 있음. 이런 경우에도 안전하게 사용할 수 있어야 함
- 오늘은 샌드박스 기능에 대해 얘기해 보려고 함
-->

---

<div class="quote transition-quote">
AI 에이전트는 <em>내 권한으로</em>,<br>
나보다 훨씬 빠르게 명령을 실행합니다.
</div>

<p class="muted">그렇다면 에이전트가 실수하거나 공격받았을 때, 어디까지 영향을 미치게 해야 할까요?</p>

<!--
발표자 노트 · 01:00–02:00 · 1분

- GHCP가 처음 나왔을 때는 코드를 제안하는 수준이었음
- 이제는 직접 파일을 수정하고, 패키지 설치하고, 셸 명령 실행하고, 네트워크에 접속함
- 점점 코딩 에이전트의 성능이 올라가면서 내 PC의 권한을 마음대로 부릴 수 있게 됨
- 문제가 생길 수 있는 여지가 충분히 있지만, 그렇다고 권한을 허용하지 않자니 제약이 너무 많음
- 권한을 허용할 경우 문제가 생긴다면, 문제가 생길 수 있는 범위를 어디까지 허용해야 할까?
-->

---

<!-- _class: section-divider -->
<!-- _paginate: false -->

<div class="section-name">위험과 통제 경계</div>
<div class="section-subtitle">AI 에이전트의 피해 범위를 어디까지 허용할 것인가</div>

<!--
발표자 노트 · 02:00–02:10 · 10초

- 로컬 개발 환경에서 코딩 에이전트가 만들어 낼 수 있는 위험 요소와 이를 통제하기 위한 경계는 어떤 것들이 있을까?
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
발표자 노트 · 02:10–04:10 · 2분

- 다섯 가지 정도로 봄
- 원하지 않는 파일을 건드릴 수 있음
- 환경 변수라든가 설정 파일에 있는 토큰을 읽을 수 있음
- 연결된 네트워크를 통해 정보가 유출될 수 있음
- 공급망 공격을 통한 악성 패키지 설치
- 도커 소켓을 통해 호스트를 장악할 수 있는 가능성
- 그렇다면 이 위험 요소를 통제하면 되지 않을까?
-->

---

<!-- _class: solution-bridge -->

<div class="bridge-title">그래서 필요한 것이 <strong>Docker 샌드박스</strong>입니다</div>

<div class="bridge-flow">
  <div class="bridge-box problem"><b>에이전트의 능력</b><p>파일 수정, 셸 실행, 패키지 설치와 네트워크 접근이 필요합니다</p></div>
  <div class="bridge-arrow">→</div>
  <div class="bridge-box solution"><b>격리된 실행 경계</b><p>호스트와 분리된 microVM 안에서 필요한 작업을 수행합니다</p></div>
</div>

<div class="bridge-caption">필요한 권한은 유지하고, 피해 범위는 제한합니다.</div>

<!--
발표자 노트 · 04:10–04:40 · 30초

- 이 위험 요소를 통제하기 위해 에이전트의 권한을 제거하면 작업을 할 수가 없음
- 그래서 나온 것이 바로 도커 샌드박스임
- 에이전트는 microVM 안에서 필요한 모든 권한을 유지함
- 동시에 호스트에서 공유하지 않은 파일과 자원에는 접근할 수 없음
-->

---

## 권한은 내부에 주고, 경계는 외부에서 강제합니다
<div class="grid-5">
  <div class="card"><div class="big-number">01</div><b>컴퓨트</b><p>별도 커널과 프로세스 경계</p></div>
  <div class="card"><div class="big-number">02</div><b>파일</b><p>공유 범위와 쓰기 권한</p></div>
  <div class="card"><div class="big-number">03</div><b>네트워크</b><p>목적지 기반 송신 정책</p></div>
  <div class="card"><div class="big-number">04</div><b>자격 증명</b><p>원문을 숨긴 프록시 주입</p></div>
  <div class="card"><div class="big-number">05</div><b>수명주기</b><p>생성·중지·폐기의 자동화</p></div>
</div>

<!--
발표자 노트 · 04:40–06:00 · 1분 20초

- 샌드박스는 단순한 컨테이너라기 보다는 하나의 VM임
- 그 안에서 에이전트는 sudo 권한을 포함해서 충분한 권한을 가질 수 있음
- 대신 호스트 파일에 접근하지 못하고, 네트워크 접근 권한이 제한적이고, 시크릿 값은 호스트에서 프록시로 제공하고, 샌드박스의 라이프사이클은 호스트에서 관리함
- 이런 식으로 자율성과 통제를 동시에 구현할 수 있음
-->

---

## 보안 구조
<div class="stack">
  <div class="layer agent">AI Agent · sudo · packages · 내부 Docker Engine</div>
  <div class="layer vm">microVM · 커널 분리 · 일차적인 신뢰 경계</div>
  <div class="layer host">Host OS · 호스트 파일시스템 · 호스트 Docker 데몬 · 로컬 프로세스</div>
</div>

<div class="flow">
  <div class="node"><b>Workspace</b><span>명시적으로 공유</span></div>
  <div class="arrow">→</div>
  <div class="node"><b>Host Proxy</b><span>정책·자격 증명</span></div>
  <div class="arrow">→</div>
  <div class="node"><b>Allowed Network</b><span>허용 목적지만</span></div>
</div>

<!--
발표자 노트 · 06:00–07:30 · 1분 30초

- 샌드박스의 기본 경계는 microVM임
- 이 안에서 높은 권한을 가지지만 호스트가 공유하기 전에는 호스트에 접근할 수 없음
- 호스트의 도커 엔진에 접근 못함. 샌드박스 내부의 도커 엔진을 쓸 수 있음
- 즉, 샌드박스 안에서는 정해진 경로로만 외부와 소통한다는 것
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
발표자 노트 · 07:30–09:00 · 1분 30초

- 도커 샌드박스에서 제공하는 코드 접근 원칙이 두 가지가 있음
- 다이렉트 모드와 클론 모드가 둘 다 장단점이 있음
- 다이렉트 모드의 경우 호스트와 프로젝트를 공유함. 빠른 반영이 가능함. 대신 격리 수준이 낮음
- 클론 모드의 경우 호스트와 프로젝트를 공유하지 않음. 코드 변경 사항은 PR로 처리해야 함. 높은 수준으로 격리가 가능함
-->

---

<!-- _class: demo-divider -->
<!-- _paginate: false -->

<div class="demo-kicker">DEMO #1</div>
<!-- <div class="demo-name">Docker 샌드박스에서<br>Java 앱 현대화하기</div> -->
<div class="demo-name">Docker 샌드박스에서<br>.NET 앱 현대화하기</div>

<!--
발표자 노트 · 09:00–09:10 · 10초

- 그럼 첫번째 데모를 보쟈
- 도커 샌드박스 안에서 GHCP CLI와 앱 현대화 플러그인을 통해 앱을 현대화 해 보쟈
-->

---

<!-- ## 데모 #1: Docker 샌드박스에서 Java 앱 현대화하기 -->
## 데모 #1: Docker 샌드박스에서 .NET 앱 현대화하기
<ul class="checklist">
  <li>GitHub Copilot CLI를 Docker 샌드박스에서 실행합니다</li>
  <li>GitHub Copilot modernization 플러그인을 설치합니다</li>
  <li><code>modernize</code> 에이전트가 진단·계획·실행을 오케스트레이션합니다</li>
  <li>호스트 Docker 데몬과 공유하지 않은 파일에는 접근하지 못합니다</li>
  <li>private clone의 변경 사항과 정책 로그를 검토합니다</li>
</ul>

<!--
발표자 노트 · 09:10–09:50 · 40초

- 이번 데모에서는 이런 것들을 보여줄 거임
- 앱 현대화 자체를 하는 것도 중요하지만, 이게 샌드박스 안에서만 동작하는 것을 보는게 중요함
-->

---

<!-- _class: auth-command-slide -->

<!-- ## 데모 #1: Docker 샌드박스에서 Java 앱 현대화하기 -->
## 데모 #1: Docker 샌드박스에서 .NET 앱 현대화하기
<!-- ```bash
sbx secret set github --command 'gh auth token'
sbx run --clone --name java-appmod copilot .
sbx exec -it java-appmod bash
``` -->
```bash
sbx secret set github --command 'gh auth token'
sbx run --clone --name dotnet-appmod copilot .
sbx exec -it dotnet-appmod bash
```

<div class="flow">
  <div class="node"><b>Authenticate</b><span>호스트 프록시로 토큰 주입</span></div>
  <div class="arrow">→</div>
  <div class="node"><b>Run</b><span>샌드박스 + Copilot CLI</span></div>
  <div class="arrow">→</div>
  <div class="node"><b>Shell</b><span>설치·상태 확인용 접속</span></div>
</div>

<!--
발표자 노트 · 09:50–11:10 · 1분 20초

- 깃헙 토큰을 호스트의 시크릿으로 저장함
- 그 다음에 샌드박스를 하나 클론 모드로 열면서 곧바로 GHCP CLI를 실행함
- 또는 sbx exec 명령어를 통해 샌드박스의 bash 셸로 들어감
-->

---

<!-- _class: plugin-command-slide -->

<!-- ## 데모 #1: Docker 샌드박스에서 Java 앱 현대화하기 -->
## 데모 #1: Docker 샌드박스에서 .NET 앱 현대화하기
<pre><code><span class="cli-command">/plugin</span> <span class="cli-keyword">marketplace</span> <span class="cli-keyword">add</span> <span class="cli-value">microsoft/github-copilot-modernization</span>
<span class="cli-command">/plugin</span> <span class="cli-keyword">install</span> <span class="cli-value">github-copilot-modernization@github-copilot-modernization</span></code></pre>

<!--
발표자 노트 · 11:10–12:10 · 1분

- 플러그인 설치
- 플러그인 설치 중 관련 MCP 서버도 함께 설치
- MCP 실행 실패는 샌드박스의 환경 설정 때문인 것 보여줌
-->

---

<!-- ## 데모 #1: Docker 샌드박스에서 Java 앱 현대화하기 -->
## 데모 #1: Docker 샌드박스에서 .NET 앱 현대화하기
<div class="agent-select"><code>copilot</code> → <code>/agent</code> → <strong>github-copilot-modernization:modernize</strong></div>

<div class="flow">
  <!-- <div class="node"><b>Assessment</b><span>의존성·Java·위험 분석</span></div> -->
  <div class="node"><b>Assessment</b><span>의존성·.NET·위험 분석</span></div>
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
발표자 노트 · 12:10–13:40 · 1분 30초

- /agent 실행 후 github-copilot-modernization:modernize 선택
- 현대화 에이전트는 알아서 Assessment, Planning, Execution 단계를 진행함
- 이미 GHCP는 --allow-all 옵션을 자동으로 적용시켜 놨기 때문에 맨 마지막에 진행할까요? 정도만 남겨두고 알아서 진행함
-->

---

<!-- ## 데모 #1: Docker 샌드박스에서 Java 앱 현대화하기 -->
## 데모 #1: Docker 샌드박스에서 .NET 앱 현대화하기
<!-- <div class="prompt-box">이 앱을 Java 21과 Spring Boot 4.1로 업그레이드 해줘</div> -->
<div class="prompt-box">이 앱을 .NET 10으로 현대화 해줘</div>

<!--
발표자 노트 · 13:40–17:00 · 3분 20초

- 프롬프트 실행
- 화면처럼 얘기할 수도 있고, 아예 "해줘!" 라고 해도 됨
- 여기서는 .NET 10으로 현대화 해달라고 했음
- 여기서는 Java 21과 Spring Boot 4.1로 현대화 해달라고 했음
- 시간이 오래 걸리므로 우선 여기까지 진행하는 것 보여주고 다음으로 넘어감
-->

---

<div class="quote">
로컬에서 안전하게 실행했습니다.<br>
이제 <em>팀과 서비스 규모</em>로 운영하려면 어떻게 해야 할까요?
</div>

<div class="grid-3 transition-cards">
  <div class="card"><b>개별 PC 종속</b><p>개발자 장비의 상태와 가용성에 의존</p></div>
  <div class="card"><b>수명주기 자동화</b><p>요청마다 생성·중지·폐기하는 자동화 인터페이스 필요</p></div>
  <div class="card"><b>동시 실행</b><p>다수 사용자와 에이전트의 격리 운영</p></div>
</div>

<!--
발표자 노트 · 17:00–17:30 · 30초

- 지금까지 도커 샌드박스 안에서 GHCP CLI로 앱 현대화 하는 과정을 보여줬음
- 이번에는 팀 단위로 많은 작업을 동시에 실행시켜야 한다면? 그땐 개발자 개인 PC에 의존할 수 없음
- 이때부터는 클라우드에 올라간 샌드박스를 고려해야 함
- ACA 샌드박스가 이 문제를 해결할 수 있음
-->

---

<!-- _class: section-divider -->
<!-- _paginate: false -->

<div class="section-name">로컬에서 클라우드로</div>
<div class="section-subtitle">ACA 샌드박스로 수명주기와 규모 확장</div>

<!--
발표자 노트 · 17:30–17:40 · 10초

- 로컬 개발환경 격리를 넘어, 클라우드 규모에서 샌드박스를 운영해 보쟈
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
발표자 노트 · 17:40–19:00 · 1분 20초

- ACA 샌드박스는 컨테이너 앱 기반의 리소스임. 현재 프리뷰 상태
- 포탈, CLI, 파이썬 SDK, Skills 등으로 샌드박스를 생성하고 관리할 수 있음
- 오늘은 ACA CLI를 사용할 거임
- 각각의 샌드박스는 격리된 실행환경이고 도커에서 제공하는 컨테이너 이미지를 루트 파일 시스템으로 사용함
- 샌드박스마다 스냅샷을 제공해서 사용하지 않을 경우에는 컨테이너를 멈추고 필요한 경우 다시 실행시킬 수 있음
-->

---

<div class="grid-3 value-grid">
  <div class="card"><div class="icon">&lt; 1s</div><b>빠른 시작</b><p>사전 준비 풀을 활용한 sub-second 프로비저닝</p></div>
  <div class="card"><div class="icon infinity-icon">&#x221E;</div><b>대규모 확장</b><p>Zero-to-Scale · 0에서 수천 개의 동시 샌드박스로 확장</p></div>
  <div class="card"><div class="icon">&#x23F8;&#xFE0E; &#x25B6;&#xFE0E;</div><b>Suspend / Resume</b><p>유휴 시 상태를 보존하고 빠르게 재개</p></div>
  <div class="card"><div class="icon">ID</div><b>Azure 거버넌스</b><p>Entra ID, RBAC, Azure 리소스 경계</p></div>
  <div class="card"><div class="icon">VNet</div><b>네트워크</b><p>수신·송신 정책과 가상 네트워크 통합</p></div>
  <div class="card"><div class="icon">OCI</div><b>사용자 이미지</b><p>준비된 도구 체인을 루트 파일시스템으로 사용</p></div>
</div>

<!--
발표자 노트 · 19:00–20:20 · 1분 20초

- 로컬에서 돌아가는 도커 샌드박스에 더해 이런 장점이 있음
- 빠른 시작, 스케일링, 스냅샷, 클라우드 거버넌스, 네트워크 통제, 커스텀 OCI 이미지
- 중지상태에서는 스냅샷 저장 공간을 제외한 나머지 비용이 발생하지 않음
- 샌드박스 사용자는 별도의 RBAC 권한이 필요함
-->

---

<!-- _class: demo-divider -->
<!-- _paginate: false -->

<div class="demo-kicker">DEMO #2</div>
<div class="demo-name">ACA 샌드박스에서<br>Copilot CLI 활용하기</div>

<!--
발표자 노트 · 20:20–20:30 · 10초

- 쟈 그러면 두번째 데모를 한 번 볼까?
-->

---

## 데모 #2: ACA 샌드박스에서 Copilot CLI 활용하기

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
발표자 노트 · 20:30–21:30 · 1분

- aca sandboxgroup create 명령으로 샌드박스 그룹 생성 - 모든 샌드박스가 여기서 돌아감
- aca sandbox create 명령으로 샌드박스 생성
- 샌드박스 안으로 들어가서 로그인해도 되지만, 그 전에 GitHub PAT 활용해서 사전에 로그인할 수 있음
- 이후 샌드박스 안으로 들어가면 됨
-->

---

<!-- _class: aca-shell-slide -->

## 데모 #2: ACA 샌드박스에서 Copilot CLI 활용하기

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
발표자 노트 · 21:30–22:30 · 1분

- aca sandbox shell 명령어로 샌드박스에 접속
- 깃헙 리포 클론, GHCP CLI 실행
-->

---

## 데모 #2: ACA 샌드박스에서 Copilot CLI 활용하기

<div class="prompt-box">이 프로젝트의 Web UI를 Brutal Design 스타일로 변경하려고 해. 코드는 수정하지 말고, 변경 계획을 design-update.md 파일로 작성해 줘</div>

<!--
발표자 노트 · 22:30–23:30 · 1분

- 프롬프트 실행
-->

---

## 데모 #2: ACA 샌드박스에서 Copilot CLI 활용하기

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
발표자 노트 · 23:30–24:30 · 1분

- aca sandbox stop 명령어로 샌드박스 중단
- aca sandbox resume 명령어로 다시 샌드박스 실행
- design-update.md 파일 보이는지 확인
-->

---

<!-- _class: section-divider -->
<!-- _paginate: false -->

<div class="section-name">선택과 방어 계층</div>
<div class="section-subtitle">제품 선택 기준과 여전히 남는 위험</div>

<!--
발표자 노트 · 24:30–24:40 · 10초

- 하지만 과연 샌드박스가 보안 관점에서 만능칼일까? 여전히 조심해야 할 부분이 있음
-->

---

## Docker 샌드박스 🤜🤛 ACA 샌드박스
<table class="matrix">
  <tr><th>기준</th><th>Docker 샌드박스</th><th>ACA 샌드박스</th></tr>
  <tr><td>주요 사용자</td><td>개별 개발자</td><td>팀·서비스·멀티테넌트</td></tr>
  <tr><td>실행 위치</td><td>로컬 PC</td><td>Azure 관리형 인프라</td></tr>
  <tr><td>생성 방식</td><td><span class="yes">대화형 CLI</span></td><td><span class="yes">Portal · CLI · SDK · Bicep · Skills</span></td></tr>
  <tr><td>상태 수명주기</td><td><span class="partial">로컬 지속</span></td><td><span class="yes">snapshot · suspend · resume</span></td></tr>
  <tr><td>대규모 동시성</td><td><span class="partial">장비 용량 한도</span></td><td><span class="yes">수천 개로 확장</span></td></tr>
</table>

<!--
발표자 노트 · 24:40–25:40 · 1분

- 로컬에서 개발자가 에이전트를 안전하게 사용하려면 Docker 샌드박스가 자연스러움
- 원격에서 동적으로 샌드박스 기능을 여러개 동시다발적으로 돌리려면 ACA 샌드박스가 자연스러움
-->

---

## 샌드박스를 써도 여전히 위험 요소는 남아 있습니다
<div class="grid-2">
  <div class="card"><b>네트워크·자격 증명</b><p>허용 목적지로 정보가 유출되거나 부여된 권한이 오용될 수 있습니다</p></div>
  <div class="card"><b>공급망 공격</b><p>악성 패키지, 플러그인, 이미지와 설치 스크립트가 실행될 수 있습니다</p></div>
  <div class="card"><b>생성 결과물 오염</b><p>코드, 빌드 스크립트와 CI 설정은 외부 실행 전에 검토해야 합니다</p></div>
  <div class="card"><b>외부 도구 신뢰</b><p>MCP 서버, Skills와 외부 API는 별도의 신뢰 경계입니다</p></div>
</div>

<!--
발표자 노트 · 25:40–26:40 · 1분

- 여전히 위험요소는 남아있음
- 네트워크, 토큰 등은 정보 유출 및 권한 오남용의 경로가 될 수 있음
- 서플라이 체인 어택, 플러그인, 설치 스크립트 등 별도로 검토해야 함
- 샌드박스는 이런 영향을 받을 수 있는 범위를 제한함
-->

---

## 샌드박스를 써도 여전히 위험 요소는 남아 있습니다
<div class="product-risks">
  <div class="risk-column docker">
    <h3>Docker 샌드박스</h3>
    <div class="risk-item"><b>Direct 모드</b><p>공유 워크스페이스 변경이 호스트에 즉시 반영됩니다</p></div>
    <div class="risk-item"><b>호스트 통합</b><p>로컬 stdio MCP와 공유 Skills는 microVM 밖의 호스트 자원에 연결됩니다</p></div>
  </div>
  <div class="risk-column aca">
    <h3>ACA 샌드박스</h3>
    <div class="risk-item"><b>RBAC·테넌트 격리</b><p>역할 범위나 사용자별 샌드박스 매핑 오류로 권한이 노출될 수 있습니다</p></div>
    <div class="risk-item"><b>상태 데이터 잔존</b><p>Snapshot과 Volume에 코드, 로그와 민감한 데이터가 남을 수 있습니다</p></div>
  </div>
</div>

<!--
발표자 노트 · 26:40–27:40 · 1분

- 도커 샌드박스에서는 Direct 모드 사용시 조심할 것, 샌드 박스 밖에서 실행되는 로컬 MCP, 공유 스킬 등을 조심해야 함
- ACA 샌드박스에서는 RBAC 권한 등을 정확하게 통제해야 함
- 스냅샷은 작업 상태를 보존해 준다는 장점도 있지만, 결국 데이터가 남아있으니 라이프사이클 관리에 조심해야 함
-->

---

<!-- _class: statement-slide -->

<div class="statement-text">
샌드박스는<br>
GitHub Copilot과 같은 <strong>AI 코딩 에이전트</strong>의<br>
<span class="not-safe">안전을 보장하는 장치</span>라기보다<br>
<strong>피해 범위를 최소화하는 방어 계층</strong>에 가깝습니다
</div>

<!--
발표자 노트 · 27:40–28:00 · 20초

- 따라서, 샌드박스는 GHCP 같은 AI 코딩 에이전트를 무조건 안전하게 만들어주거나 하는 장치가 아님
- 오히려 무슨 문제가 생겼을 경우 피해를 최소하 시켜주는 방어 계층임
-->

---

## 오늘의 결론
<div class="takeaway"><div class="num">1</div><p>에이전트에게 필요한 권한은 주되, <strong>경계는 외부에서 강제합니다.</strong></p></div>
<div class="takeaway"><div class="num">2</div><p>개발자 PC의 대화형 실행에는 <strong>Docker 샌드박스</strong>, 원격 자동화·다중 실행에는 <strong>ACA 샌드박스</strong>를 선택합니다.</p></div>
<div class="takeaway"><div class="num">3</div><p>샌드박스는 피해 범위를 <strong>작고, 관찰 가능하며, 폐기 가능하게</strong> 만듭니다.</p></div>

<!--
발표자 노트 · 28:00–29:00 · 1분

- 오늘 세션 내용은 요렇게 세가지로 정리 가능함
- 1. 에이전트에게 일할 권한은 주되 실행 경계는 외부 정책으로 강제
- 2. GHCP CLI를 개발자 PC에서 대화형으로 실행할 때는 Docker 샌드박스, 원격에서 자동화하거나 여러 작업을 동시에 실행할 때는 ACA 샌드박스
- 3. 샌드박스는 에이전트를 완전히 믿고 실행하는 대신 문제 발생시 피해 범위를 작고 관찰 가능하고 폐기 가능하게 만들어줌
-->

---

## 샌드박스에 대해 더 궁금하다면?

<div class="source-columns">
  <div class="source-column">
    <div class="source-card"><b>Docker 샌드박스</b><a href="https://docs.docker.com/ai/sandboxes/">docs.docker.com/ai/sandboxes</a></div>
    <div class="source-card"><b>Docker 샌드박스 보안 모델</b><a href="https://docs.docker.com/ai/sandboxes/security/">docs.docker.com/ai/sandboxes/security</a></div>
    <div class="source-card"><b>Docker 샌드박스에서 GitHub Copilot CLI 실행하기</b><a href="https://docs.docker.com/ai/sandboxes/agents/copilot/">docs.docker.com/ai/sandboxes/agents/copilot</a></div>
  </div>
  <div class="source-column">
    <div class="source-card"><b>Copilot CLI로 Java 앱 현대화하기</b><a href="https://aka.ms/ghcp/appmod/java">aka.ms/ghcp/appmod/java</a></div>
    <div class="source-card"><b>Copilot CLI로 .NET 앱 현대화하기</b><a href="https://aka.ms/ghcp/appmod/dotnet">aka.ms/ghcp/appmod/dotnet</a></div>
    <div class="source-card"><b>Azure Container Apps 샌드박스 소개</b><a href="https://aka.ms/aca/sandboxes">aka.ms/aca/sandboxes</a></div>
    <div class="source-card"><b>Azure Container Apps 샌드박스 문서</b><a href="https://sandboxes.azure.com/docs">sandboxes.azure.com/docs</a></div>
  </div>
</div>

<!--
발표자 노트 · 29:00–29:20 · 20초

- 샌드박스와 관련해서 더욱 궁금하다면? 링크 찾아봐라
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
