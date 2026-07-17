import { useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import './App.css';
import { getLocale, SITE_CONTENT } from './content';

const imagePath = (fileName: string) => `${import.meta.env.BASE_URL}images/${fileName}`;

function App() {
  const locale = getLocale();
  const copy = SITE_CONTENT[locale];
  const languageHref = locale === 'en'
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}en/`;

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
    <div className={`site-shell${locale === 'en' ? ' site-shell--en' : ''}`} id="top">
      <a className="skip-link" href="#main-content">
        {copy.skipLink}
      </a>

      <header className="topbar" aria-label={copy.headerAriaLabel}>
        <a className="brand" href="#top" aria-label={copy.backToTopLabel}>
          <span className="brand-mark">ZZR</span>
          <span className="brand-name">{copy.brandName}</span>
        </a>

        <nav aria-label={copy.navAriaLabel}>
          <ul className="nav-list">
            {copy.navItems.map((item) => (
              <li key={item.href}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="topbar-actions">
          <a
            className="language-link"
            href={languageHref}
            hrefLang={locale === 'en' ? 'zh-CN' : 'en'}
            lang={locale === 'en' ? 'zh-CN' : 'en'}
            aria-label={copy.languageAriaLabel}
          >
            {copy.languageLabel}
          </a>
          <a className="nav-contact" href="#contact">
            {copy.contactNav}
            <ArrowDownRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section-container" aria-labelledby="hero-title">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span aria-hidden="true" /> {copy.eyebrow}</p>
            <h1 id="hero-title">
              {copy.hero}
            </h1>

            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                {copy.viewResearch}
                <ArrowDownRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </a>
              <a className="button button-quiet" href="#contact">{copy.contactButton}</a>
            </div>

          </div>

          <div className="hero-visual" data-reveal>
            <div className="portrait-orbit" aria-hidden="true" />
            <figure className="portrait-card">
              <img
                src={imagePath('portrait-optimized.jpg')}
                alt={copy.portraitAlt}
                width="900"
                height="1200"
                fetchPriority="high"
              />
              <figcaption>
                <span><MapPin aria-hidden="true" size={14} /> Shanghai, China</span>
                <strong>SJTU · CS</strong>
              </figcaption>
            </figure>
          </div>

          <a className="scroll-cue" href="#about" aria-label={copy.continueReadingLabel}>
            <span>SCROLL</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="content-section section-container" id="about" aria-labelledby="profile-title">
          <div className="section-heading section-heading-compact" data-reveal>
            <p className="section-kicker">01 / PROFILE</p>
          </div>

          <div className="profile-grid">
            <article className="profile-card glass-card" data-reveal>
              <h2 className="profile-title" id="profile-title">{copy.profileTitle}</h2>
              <div className="skill-list" aria-label={copy.profileTitle}>
                {copy.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>

            <aside className="education-card" data-reveal aria-label={copy.educationAriaLabel}>
              <p className="card-label">EDUCATION</p>
              <div className="education-list">
                {copy.education.map((item) => (
                  <div className="education-entry" key={`${item.period}-${item.degree}`}>
                    <div className="education-meta">
                      <time>{item.period}</time>
                      <span>{item.degree}</span>
                    </div>
                    <h3>{item.institution}</h3>
                    <p>{item.school}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section research-section" id="research" aria-labelledby="research-title">
          <div className="section-container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="section-kicker">02 / RESEARCH</p>
                <h2 id="research-title">{copy.researchTitle}</h2>
              </div>
            </div>

            <ol className="research-list">
              {copy.researchItems.map((item, index) => {
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
                        {item.current && <span className="status-pill">{copy.currentLabel}</span>}
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
          <div className="section-heading" data-reveal>
            <div>
              <p className="section-kicker">03 / HIGHLIGHTS</p>
              <h2 id="awards-title">{copy.awardsTitle}</h2>
            </div>
          </div>

          <div className="awards-grid">
            {copy.awardGroups.map((group) => (
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
              <h2 id="life-title">{copy.lifeTitle}</h2>
            </div>

            <div className="hobby-grid">
              {copy.hobbies.map((hobby) => (
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
              <h2 id="contact-title">{copy.contactTitle}</h2>
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
        <span>{copy.copyright}</span>
        <span>{copy.footerTagline}</span>
      </footer>
    </div>
  );
}

export default App;
