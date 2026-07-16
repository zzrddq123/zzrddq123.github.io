import { useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import './App.css';

type ResearchItem = {
  period?: string;
  type?: string;
  title: string;
  organization?: string;
  description?: string;
  current?: boolean;
};

const RESEARCH_ITEMS: ResearchItem[] = [
  {
    title: '毕业设计：灵长类基因组未命名基因的结构与功能预测',
  },
  {
    period: '2024.05 — 2025.05',
    type: '强基科创 · 负责人',
    title: '基于人工智能的蛋白翻译组学计算流程搭建及肺癌中的应用',
    organization: '上海交通大学',
    description:
      '搭建并整合蛋白组学、翻译组学分析管线，用于发现肺癌相关肽段，项目已结项。',
  },
  {
    period: '2024.09 — 2025.03',
    type: 'PRP #46',
    title: '基于人工智能的游戏设计',
    organization: '上海交通大学',
    description:
      '借助 AI 工具完成游戏布局、画面与背景音乐设计，并使用大语言模型辅助开发轻量化 HTML 网页游戏。',
  },
  {
    period: '2023.09 — 2024.09',
    type: 'PRP #44',
    title: '基于人工智能和组学数据库的植物逆境机制研究',
    organization: '上海交通大学',
    description:
      '完成组学数据筛选、质控与肽段预测，分析拟南芥在逆境环境中的基因表达。',
  },
];

const AWARD_GROUPS = [
  {
    index: '01',
    title: '程序设计',
    items: ['上海市大学生程序设计竞赛金奖', 'ICPC 亚洲区域赛沈阳站、杭州站银牌'],
  },
  {
    index: '02',
    title: '数学建模',
    items: ['2023 美国大学生数学建模竞赛 M 奖'],
  },
  {
    index: '03',
    title: '围棋竞技',
    items: ['上海市学生阳光体育大联赛男子个人亚军（2023、2024）', '业余 6 段'],
  },
  {
    index: '04',
    title: '奖学金',
    items: ['校级 B 等优秀奖学金（2023、2024）', '金赛博爱奖学金 · 鼎晶生物强基计划奖学金'],
  },
];

const HOBBIES = [
  {
    image: 'hobby-go.jpg',
    title: '围棋',
  },
  {
    image: 'hobby-badminton.jpg',
    title: '羽毛球',
  },
  {
    image: 'hobby-music.jpg',
    title: '音乐',
  },
];

const imagePath = (fileName: string) => `${import.meta.env.BASE_URL}images/${fileName}`;

function App() {
  useEffect(() => {
    document.documentElement.classList.add('reveal-ready');
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>

      <header className="topbar" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回顶部">
          <span className="brand-mark">ZZR</span>
          <span className="brand-name">曾子瑞</span>
        </a>

        <nav aria-label="页面导航">
          <ul className="nav-list">
            <li><a href="#about">关于</a></li>
            <li><a href="#research">研究</a></li>
            <li><a href="#awards">荣誉</a></li>
            <li><a href="#life">生活</a></li>
          </ul>
        </nav>

        <a className="nav-contact" href="#contact">
          联系我
          <ArrowDownRight aria-hidden="true" size={16} strokeWidth={1.8} />
        </a>
      </header>

      <main id="main-content">
        <section className="hero section-container" aria-labelledby="hero-title">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span aria-hidden="true" /> 上海 · 计算生物学</p>
            <h1 id="hero-title">
              用计算，<br />
              <em>理解生命。</em>
            </h1>
            <p className="hero-intro">
              曾子瑞，上海交通大学生物科学本科生，专注生物信息学与 AI for Science。
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                查看研究
                <ArrowDownRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </a>
              <a className="button button-quiet" href="#contact">联系我</a>
            </div>

          </div>

          <div className="hero-visual" data-reveal>
            <div className="portrait-orbit" aria-hidden="true" />
            <figure className="portrait-card">
              <img
                src={imagePath('portrait-optimized.jpg')}
                alt="曾子瑞的个人照片"
                width="900"
                height="1200"
                fetchPriority="high"
              />
              <figcaption>
                <span><MapPin aria-hidden="true" size={14} /> Shanghai, China</span>
                <strong>SJTU · BIO</strong>
              </figcaption>
            </figure>
            <div className="portrait-note" aria-hidden="true">
              <span>RESEARCH</span>
              <span>CODE</span>
              <span>GO</span>
            </div>
          </div>

          <a className="scroll-cue" href="#about" aria-label="继续阅读关于我">
            <span>SCROLL</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="content-section section-container" id="about" aria-labelledby="about-title">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">01 / PROFILE</p>
            <h2 id="about-title">把问题拆清楚，<br />再一步步验证。</h2>
          </div>

          <div className="profile-grid">
            <article className="profile-card glass-card" data-reveal>
              <p className="profile-lead">
                我在上海交通大学学习生物科学，选择大数据与智能医疗方向。当前聚焦蛋白质功能预测与生物信息学，习惯把生物问题转化为可复现的计算流程。
              </p>
              <div className="skill-list" aria-label="技能方向">
                <span>Python</span>
                <span>C++</span>
                <span>Bioinformatics</span>
                <span>Protein Language Models</span>
              </div>
            </article>

            <aside className="education-card" data-reveal aria-label="教育背景">
              <p className="card-label">EDUCATION</p>
              <p className="education-period">2022 — 至今</p>
              <h3>上海交通大学</h3>
              <p>生命科学技术学院</p>
              <div className="education-detail">
                <span>生物科学 · 强基计划</span>
                <span>大数据与智能医疗方向</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section research-section" id="research" aria-labelledby="research-title">
          <div className="section-container">
            <div className="section-heading section-heading-row" data-reveal>
              <div>
                <p className="section-kicker">02 / RESEARCH</p>
                <h2 id="research-title">研究经历</h2>
              </div>
              <p className="section-summary">从数据质量控制到模型推理，关注能被复现、解释与应用的结果。</p>
            </div>

            <ol className="research-list">
              {RESEARCH_ITEMS.map((item, index) => {
                const hasMeta = Boolean(item.period || item.type);

                return (
                  <li
                    className={`research-item${hasMeta ? '' : ' research-item-compact'}`}
                    data-reveal
                    key={item.title}
                  >
                    <div className="research-index" aria-hidden="true">0{index + 1}</div>
                    {hasMeta && (
                      <div className="research-time">
                        {item.period && <time>{item.period}</time>}
                        {item.type && <span>{item.type}</span>}
                      </div>
                    )}
                    <div className="research-body">
                      <div className="research-title-row">
                        <h3>{item.title}</h3>
                        {item.current && <span className="status-pill">进行中</span>}
                      </div>
                      {item.organization && <p className="research-org">{item.organization}</p>}
                      {item.description && <p>{item.description}</p>}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="content-section section-container" id="awards" aria-labelledby="awards-title">
          <div className="section-heading section-heading-row" data-reveal>
            <div>
              <p className="section-kicker">03 / HIGHLIGHTS</p>
              <h2 id="awards-title">精选荣誉</h2>
            </div>
            <p className="section-summary">程序设计、建模与围棋，让不同类型的训练彼此补充。</p>
          </div>

          <div className="awards-grid">
            {AWARD_GROUPS.map((group) => (
              <article className="award-card" data-reveal key={group.title}>
                <div className="award-header">
                  <span>{group.index}</span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section life-section" id="life" aria-labelledby="life-title">
          <div className="section-container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">04 / OFF THE CLOCK</p>
              <h2 id="life-title">科研之外</h2>
            </div>

            <div className="hobby-grid">
              {HOBBIES.map((hobby) => (
                <article className="hobby-card" data-reveal key={hobby.title}>
                  <div className="hobby-image">
                    <img
                      src={imagePath(hobby.image)}
                      alt=""
                      width="1728"
                      height="2304"
                      loading="lazy"
                    />
                  </div>
                  <div className="hobby-copy">
                    <h3>{hobby.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-wrap section-container" id="contact" aria-labelledby="contact-title">
          <div className="contact-card" data-reveal>
            <div>
              <p className="section-kicker section-kicker-light">05 / CONTACT</p>
              <h2 id="contact-title">欢迎交流科研、<br />代码与围棋。</h2>
            </div>
            <div className="contact-links">
              <a href="mailto:sjtu19979148823@sjtu.edu.cn">
                <span className="contact-icon"><Mail aria-hidden="true" size={20} /></span>
                <span>
                  <small>EMAIL</small>
                  <strong>sjtu19979148823@sjtu.edu.cn</strong>
                </span>
                <ArrowUpRight aria-hidden="true" size={19} />
              </a>
              <a href="https://github.com/zzrddq123" target="_blank" rel="noreferrer">
                <span className="contact-icon" aria-hidden="true">GH</span>
                <span>
                  <small>GITHUB</small>
                  <strong>github.com/zzrddq123</strong>
                </span>
                <ArrowUpRight aria-hidden="true" size={19} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-container">
        <span>© 2026 曾子瑞</span>
        <span>Built with curiosity.</span>
      </footer>
    </div>
  );
}

export default App;
