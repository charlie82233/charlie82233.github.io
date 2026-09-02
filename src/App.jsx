// Charlie Chen — 個人作品集 / Portfolio (單檔 React 元件)
// 可直接當成 Vite 專案的 src/App.jsx 使用。無外部套件依賴。

const SKILLS = [
  { group: "語言", items: ["Python", "JavaScript", "Dart"] },
  { group: "AI / ML", items: ["PyTorch", "LoRA / QLoRA", "Unsloth", "Ollama", "Gemma 3", "Llama 3.2"] },
  { group: "後端", items: ["FastAPI", "Flask"] },
  { group: "前端", items: ["React", "Flutter"] },
  { group: "資料庫 / 工具", items: ["MongoDB", "Git", "Linux", "Nginx", "PM2"] },
];

const STACK = ["Gemma 3 4B", "QLoRA", "PyTorch", "Unsloth", "Ollama", "FastAPI", "Flask", "React", "MongoDB", "SenseVoice"];

// 靜態聲波紋路：一組高低起伏的長條，代表語音訊號
const WAVE = [8, 14, 22, 34, 26, 44, 60, 40, 52, 72, 88, 64, 46, 30, 20, 33, 48, 68, 84, 100, 78, 54, 38, 24, 16, 28, 42, 58, 46, 32, 22, 36, 50, 30, 18, 12, 20, 14, 9];

function Wave() {
  return (
    <div className="wave" aria-hidden="true">
      {WAVE.map((h, i) => (
        <span key={i} style={{ height: `${h}%`, opacity: 0.35 + (h / 100) * 0.65 }} />
      ))}
    </div>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Noto+Sans+TC:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #F4F6F5; --surface: #FFFFFF; --ink: #16211D; --muted: #59665F;
          --line: #DCE3DF; --teal: #0E7C6B; --teal-deep: #0A5C50; --gold: #A9762A;
          --display: 'Space Grotesk', 'Noto Sans TC', sans-serif;
          --body: 'IBM Plex Sans', 'Noto Sans TC', sans-serif;
        }
        .page { background: var(--bg); color: var(--ink); font-family: var(--body);
          line-height: 1.7; -webkit-font-smoothing: antialiased; min-height: 100vh; }
        .wrap { max-width: 860px; margin: 0 auto; padding: 0 28px; }
        a { color: inherit; }
        ::selection { background: rgba(14,124,107,.18); }

        /* nav */
        nav { position: sticky; top: 0; z-index: 20; background: rgba(244,246,245,.82);
          backdrop-filter: blur(10px); border-bottom: 1px solid var(--line); }
        .nav-in { max-width: 860px; margin: 0 auto; padding: 14px 28px; display: flex;
          align-items: center; justify-content: space-between; }
        .nav-name { font-family: var(--display); font-weight: 600; letter-spacing: -.01em; }
        .nav-links { display: flex; gap: 22px; }
        .nav-links a { font-size: 14px; color: var(--muted); text-decoration: none; transition: color .15s; }
        .nav-links a:hover { color: var(--teal-deep); }
        @media (max-width: 620px) { .nav-links { display: none; } }

        /* hero */
        .hero { padding: 76px 0 60px; border-bottom: 1px solid var(--line); }
        .hero h1 { font-family: var(--display); font-size: clamp(38px, 7vw, 62px);
          font-weight: 700; letter-spacing: -.03em; line-height: 1.02; }
        .hero .en { color: var(--teal-deep); }
        .hero .role { margin-top: 18px; font-size: clamp(16px,2.4vw,19px); color: var(--muted);
          font-weight: 500; }
        .hero .lede { margin-top: 20px; max-width: 60ch; font-size: 17px; }
        .chips { margin-top: 26px; display: flex; flex-wrap: wrap; gap: 10px; }
        .chip { font-size: 13px; padding: 6px 12px; border: 1px solid var(--line);
          border-radius: 999px; background: var(--surface); color: var(--muted); }
        .chip.gold { color: var(--gold); border-color: rgba(169,118,42,.35); background: rgba(169,118,42,.06); font-weight: 500; }
        .wave { display: flex; align-items: flex-end; gap: 3px; height: 64px; margin-top: 38px; }
        .wave span { flex: 1; background: var(--teal); border-radius: 2px; min-height: 3px; }

        /* sections */
        section { padding: 66px 0; border-bottom: 1px solid var(--line); }
        .eyebrow { font-family: var(--display); font-size: 13px; font-weight: 600;
          color: var(--teal); letter-spacing: .04em; }
        h2 { font-family: var(--display); font-size: clamp(24px,3.6vw,30px);
          font-weight: 600; letter-spacing: -.02em; margin: 8px 0 26px; }
        .about p { max-width: 64ch; margin-bottom: 16px; font-size: 16.5px; }
        .about strong { color: var(--teal-deep); font-weight: 600; }

        /* skills */
        .skills-grid { display: grid; grid-template-columns: 140px 1fr; gap: 10px 22px; }
        .skills-grid .g { font-family: var(--display); font-weight: 600; color: var(--ink);
          padding-top: 3px; }
        .tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .tag { font-size: 13.5px; padding: 5px 11px; background: var(--surface);
          border: 1px solid var(--line); border-radius: 7px; }
        @media (max-width: 560px) { .skills-grid { grid-template-columns: 1fr; gap: 4px 0; }
          .skills-grid .g { padding-top: 14px; } }

        /* project */
        .proj { background: var(--surface); border: 1px solid var(--line); border-radius: 16px;
          overflow: hidden; }
        .proj-head { padding: 26px 28px 22px; border-bottom: 1px solid var(--line); }
        .proj-title { font-family: var(--display); font-size: 21px; font-weight: 600; letter-spacing: -.01em; }
        .proj-sub { color: var(--muted); font-size: 14px; margin-top: 4px; }
        .proj-body { padding: 24px 28px 28px; }
        .proj-body p { max-width: 62ch; margin-bottom: 14px; font-size: 15.5px; }
        .award { display: inline-flex; align-items: center; gap: 8px; font-size: 13.5px;
          color: var(--gold); background: rgba(169,118,42,.07); border: 1px solid rgba(169,118,42,.3);
          padding: 6px 12px; border-radius: 999px; font-weight: 500; }

        /* metrics */
        .metrics { display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: 1px;
          background: var(--line); border: 1px solid var(--line); border-radius: 12px;
          overflow: hidden; margin: 4px 0 22px; }
        .metric { background: var(--surface); padding: 18px 20px; }
        .metric .k { font-size: 12.5px; color: var(--muted); }
        .metric .v { font-family: var(--display); font-size: 26px; font-weight: 700;
          letter-spacing: -.02em; margin-top: 4px; color: var(--ink); }
        .metric .v em { font-style: normal; color: var(--teal); }
        .metric .d { font-size: 12.5px; color: var(--muted); margin-top: 2px; }
        @media (max-width: 560px) { .metrics { grid-template-columns: 1fr 1fr; } }

        .stack { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 6px; }
        .stack .tag { font-size: 12.5px; }

        /* contact */
        .contact p { max-width: 54ch; margin-bottom: 22px; font-size: 16.5px; }
        .btns { display: flex; flex-wrap: wrap; gap: 12px; }
        .btn { display: inline-flex; align-items: center; gap: 9px; font-size: 15px;
          padding: 11px 18px; border-radius: 10px; text-decoration: none; transition: all .15s; }
        .btn.primary { background: var(--teal-deep); color: #fff; }
        .btn.primary:hover { background: var(--teal); }
        .btn.ghost { border: 1px solid var(--line); background: var(--surface); color: var(--ink); }
        .btn.ghost:hover { border-color: var(--teal); color: var(--teal-deep); }
        a.btn:focus-visible, .nav-links a:focus-visible { outline: 2px solid var(--teal); outline-offset: 3px; }

        footer { padding: 30px 0 44px; }
        footer .wrap { color: var(--muted); font-size: 13.5px; display: flex;
          justify-content: space-between; flex-wrap: wrap; gap: 8px; }
      `}</style>

      <div className="page">
        <nav>
          <div className="nav-in">
            <span className="nav-name">陳靖澄 · Charlie</span>
            <div className="nav-links">
              <a href="#about">關於</a>
              <a href="#skills">技能</a>
              <a href="#projects">專案</a>
              <a href="#contact">聯絡</a>
            </div>
          </div>
        </nav>

        <header className="hero">
          <div className="wrap">
            <h1>陳靖澄<br /><span className="en">Ching-Cheng (Charlie) Chen</span></h1>
            <p className="role">軟體工程師 — AI 模型 · 後端服務 · 全端開發</p>
            <p className="lede">
              從銀行行員轉身投入資訊工程,專注大型語言模型微調與全端系統實作。
              碩士論文以架構感知 QLoRA 打造個人化語音校正系統,把推論延遲砍到接近即時。
            </p>
            <div className="chips">
              <span className="chip">資訊工程碩士</span>
              <span className="chip gold">2026 TWSC² Best Paper</span>
              <span className="chip">TOEIC 875</span>
            </div>
            <Wave />
          </div>
        </header>

        <main>
          <section id="about" className="about">
            <div className="wrap">
              <div className="eyebrow">關於我</div>
              <h2>從臨櫃到模型訓練</h2>
              <p>
                經濟系畢業後,我在<strong>合作金庫</strong>擔任臨櫃行員三年。每天經手大量交易與客戶,
                養成對數字與細節的高度嚴謹,以及在壓力下即時應對、與人清楚溝通的能力。
              </p>
              <p>
                任職期間逐漸對資訊工程產生濃厚興趣,最終決定辭去穩定工作、考取<strong>臺北大學資工所</strong>。
                碩士期間我完成了從 AI 模型訓練、後端資料處理,到前端介面與行動應用的完整開發,
                並把系統優化到推論接近即時、可在行動端運作的程度。
              </p>
              <p>
                我希望投入後端、AI 或全端相關的軟體工程,做出能真正解決問題、幫到使用者的產品。
              </p>
            </div>
          </section>

          <section id="skills">
            <div className="wrap">
              <div className="eyebrow">技能</div>
              <h2>技術棧</h2>
              <div className="skills-grid">
                {SKILLS.flatMap((s) => [
                  <div className="g" key={s.group + "-g"}>{s.group}</div>,
                  <div className="tags" key={s.group + "-t"}>
                    {s.items.map((it) => <span className="tag" key={it}>{it}</span>)}
                  </div>,
                ])}
              </div>
            </div>
          </section>

          <section id="projects">
            <div className="wrap">
              <div className="eyebrow">代表專案</div>
              <h2>AARA 語音矯正系統</h2>

              <div className="proj">
                <div className="proj-head">
                  <div className="proj-title">構音障礙者個人化語音校正</div>
                  <div className="proj-sub">碩士論文 · 個人化語音校正 · 22 位受試者縱向評測</div>
                </div>
                <div className="proj-body">
                  <p>
                    協助構音障礙者的語音校正系統:當語音辨識誤判患者發音時,系統自動修正為其原意,
                    讓發音不清者能更順利地以語音與他人溝通。前端為 Flask + React 的收音/辨識網站,
                    患者於網頁錄音後,經 SenseVoice 語音辨識轉為文字,再交由校正模組還原。
                  </p>
                  <p>
                    原校正模組採 RAG 檢索式生成,有檢索延遲與語意碎片化的瓶頸。本研究提出
                    <strong> 架構感知非對稱秩分配</strong>(全域注意力層 Rank 32、滑動窗層 Rank 4),
                    以 QLoRA 微調把外部檢索知識內化進模型,取代 RAG 模組——延遲大幅下降,校正品質同步提升。
                  </p>

                  <div className="metrics">
                    <div className="metric">
                      <div className="k">單句推論延遲</div>
                      <div className="v">1.349s <em>→</em> 0.710s</div>
                      <div className="d">約 −47%,壓進 1 秒內</div>
                    </div>
                    <div className="metric">
                      <div className="k">CER 字元錯誤率</div>
                      <div className="v">0.089 <em>→</em> 0.085</div>
                      <div className="d">越低越好</div>
                    </div>
                    <div className="metric">
                      <div className="k">SAR 語句準確率</div>
                      <div className="v">0.792 <em>→</em> 0.821</div>
                      <div className="d">越高越好</div>
                    </div>
                  </div>

                  <div className="stack">
                    {STACK.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>

                  <div style={{ marginTop: 20 }}>
                    <span className="award">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M8.2 13.5 7 22l5-3 5 3-1.2-8.5" /></svg>
                      Best Paper Award · 2026 臺灣雲端與服務計算研討會 (TWSC²)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="contact">
            <div className="wrap">
              <div className="eyebrow">聯絡</div>
              <h2>一起做點東西</h2>
              <p>目前正在找後端、AI、全端相關的軟體工程職缺。有機會或想聊聊,歡迎來信。</p>
              <div className="btns">
                <a className="btn primary" href="mailto:charlie822330@gmail.com"><MailIcon /> charlie822330@gmail.com</a>
                <a className="btn ghost" href="https://github.com/你的帳號" target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="wrap">
            <span>© 2026 陳靖澄 Ching-Cheng Chen</span>
            <span>Built with React &amp; Vite</span>
          </div>
        </footer>
      </div>
    </>
  );
}