export type Locale = 'zh-CN' | 'en';

type ResearchItem = {
  period?: string;
  type?: string;
  title: string;
  organization?: string;
  description?: string;
  current?: boolean;
};

type AwardGroup = {
  index: string;
  title: string;
  items: string[];
};

type Hobby = {
  image: string;
  title: string;
};

type EducationItem = {
  period: string;
  degree: string;
  institution: string;
  school: string;
};

type SiteContent = {
  skipLink: string;
  headerAriaLabel: string;
  backToTopLabel: string;
  brandName: string;
  navAriaLabel: string;
  navItems: Array<{ href: string; label: string }>;
  contactNav: string;
  languageLabel: string;
  languageAriaLabel: string;
  eyebrow: string;
  hero: string;
  viewResearch: string;
  contactButton: string;
  portraitAlt: string;
  continueReadingLabel: string;
  profileTitle: string;
  skills: string[];
  educationAriaLabel: string;
  education: EducationItem[];
  researchTitle: string;
  researchItems: ResearchItem[];
  currentLabel: string;
  awardsTitle: string;
  awardGroups: AwardGroup[];
  lifeTitle: string;
  hobbies: Hobby[];
  contactTitle: string;
  copyright: string;
  footerTagline: string;
};

export const SITE_CONTENT: Record<Locale, SiteContent> = {
  'zh-CN': {
    skipLink: '跳到主要内容',
    headerAriaLabel: '主导航',
    backToTopLabel: '返回顶部',
    brandName: '曾子瑞',
    navAriaLabel: '页面导航',
    navItems: [
      { href: '#about', label: '关于' },
      { href: '#research', label: '研究' },
      { href: '#awards', label: '奖项' },
      { href: '#life', label: '生活' },
    ],
    contactNav: '联系我',
    languageLabel: 'English',
    languageAriaLabel: 'View this page in English',
    eyebrow: '上海 · 计算生物学',
    hero:
      '我是曾子瑞，2004年出生于江西南昌，2026年本科毕业于上海交通大学生物科学（强基计划）专业，现于上海交通大学计算机学院 & 上海创智学院攻读博士学位，研究方向是 AI4Science。',
    viewResearch: '查看研究',
    contactButton: '联系我',
    portraitAlt: '曾子瑞的个人照片',
    continueReadingLabel: '继续阅读关于我',
    profileTitle: '研究兴趣',
    skills: ['Bioinformatics', 'AI4Science', 'LLM & 智能体'],
    educationAriaLabel: '教育背景',
    education: [
      {
        period: '2022 — 2026',
        degree: '本科',
        institution: '上海交通大学',
        school: '生命科学技术学院',
      },
      {
        period: '2026 — 至今',
        degree: '博士',
        institution: '上海交通大学',
        school: '计算机学院',
      },
    ],
    researchTitle: '研究经历',
    researchItems: [
      {
        period: '2024.09 — 2025.03',
        type: '第46期本科生研究计划项目(PRP)',
        title: '基于人工智能的游戏设计',
        organization: '上海交通大学',
        description:
          '借助 AI 工具完成游戏布局、画面设计，利用大语言模型及智能体开发轻量 HTML 网页游戏。',
      },
      {
        period: '2024.05 — 2025.05',
        type: '第一期强基计划科创项目',
        title: '基于人工智能的蛋白翻译组学计算流程搭建及肺癌中的应用',
        organization: '上海交通大学',
        description:
          '搭建并整合蛋白组学、翻译组学分析管线，用于发现肺癌相关肽段。',
      },
      {
        period: '2025.09 — 2026.06',
        type: '毕业设计',
        title: '灵长类基因组未命名基因的结构与功能预测',
      },
    ],
    currentLabel: '进行中',
    awardsTitle: '所获奖项',
    awardGroups: [
      {
        index: '01',
        title: '程序设计',
        items: [
          '2022年上海市大学生程序设计竞赛金奖',
          '第47届国际大学生程序设计竞赛（ICPC）亚洲区域赛沈阳站银牌',
          '第47届国际大学生程序设计竞赛（ICPC）亚洲区域赛杭州站银牌',
        ],
      },
      {
        index: '02',
        title: '数学建模',
        items: ['2023年美国大学生数学建模竞赛 M 奖'],
      },
      {
        index: '03',
        title: '围棋竞技',
        items: [
          '“乐弈杯”上海市围棋锦标赛 5 段组亚军（2023）',
          '上海市学生阳光体育大联赛围棋男子个人亚军（2023、2024）',
        ],
      },
      {
        index: '04',
        title: '荣誉与奖学金',
        items: [
          '上海交通大学生命科学技术学院三好学生（2023）',
          '上海交通大学校级 B 等优秀奖学金（2023、2024）',
          '中国红十字基金会“金赛博爱奖学金”（2023）',
          '鼎晶生物强基计划奖励基金（2024）',
        ],
      },
    ],
    lifeTitle: '科研之外',
    hobbies: [
      { image: 'hobby-go.jpg', title: '围棋' },
      { image: 'hobby-badminton.jpg', title: '羽毛球' },
      { image: 'hobby-music.jpg', title: '音乐' },
    ],
    contactTitle: '欢迎交流~',
    copyright: '© 2026 曾子瑞',
    footerTagline: 'Built with curiosity.',
  },
  en: {
    skipLink: 'Skip to main content',
    headerAriaLabel: 'Primary navigation',
    backToTopLabel: 'Back to top',
    brandName: 'Zirui Zeng',
    navAriaLabel: 'Page navigation',
    navItems: [
      { href: '#about', label: 'About' },
      { href: '#research', label: 'Research' },
      { href: '#awards', label: 'Awards' },
      { href: '#life', label: 'Life' },
    ],
    contactNav: 'Contact',
    languageLabel: '中文',
    languageAriaLabel: '查看中文版本',
    eyebrow: 'SHANGHAI · COMPUTATIONAL BIOLOGY',
    hero:
      'I’m Zirui Zeng, born in Nanchang, Jiangxi, in 2004. I earned my B.S. in Biological Sciences through the Strengthening Foundation Plan at Shanghai Jiao Tong University in 2026. I am now pursuing doctoral studies with the School of Computer Science at Shanghai Jiao Tong University and Shanghai Innovation Institute, focusing on AI for Science.',
    viewResearch: 'Explore my research',
    contactButton: 'Get in touch',
    portraitAlt: 'Portrait of Zirui Zeng',
    continueReadingLabel: 'Continue to my profile',
    profileTitle: 'Research Interests',
    skills: ['Bioinformatics', 'AI for Science', 'LLMs & AI Agents'],
    educationAriaLabel: 'Education',
    education: [
      {
        period: '2022 — 2026',
        degree: 'B.S.',
        institution: 'Shanghai Jiao Tong University',
        school: 'School of Life Sciences and Biotechnology',
      },
      {
        period: '2026 — Present',
        degree: 'Ph.D.',
        institution: 'Shanghai Jiao Tong University',
        school: 'School of Computer Science',
      },
    ],
    researchTitle: 'Research Experience',
    researchItems: [
      {
        period: '2024.09 — 2025.03',
        type: '46th Participation in Undergraduate Research Program (PRP)',
        title: 'AI-Assisted Game Design',
        organization: 'Shanghai Jiao Tong University',
        description:
          'Designed game layouts and visuals with AI tools, and developed lightweight HTML games using large language models and agents.',
      },
      {
        period: '2024.05 — 2025.05',
        type: 'Inaugural Strengthening Foundation Plan Research and Innovation Project',
        title: 'AI-Based Proteomics and Translatomics Pipeline Development for Lung Cancer Research',
        organization: 'Shanghai Jiao Tong University',
        description:
          'Built and integrated proteomics and translatomics analysis pipelines to identify lung cancer-associated peptides.',
      },
      {
        period: '2025.09 — 2026.06',
        type: 'Undergraduate Thesis',
        title: 'Structural and Functional Prediction of Unannotated Genes in Primate Genomes',
      },
    ],
    currentLabel: 'Ongoing',
    awardsTitle: 'Awards & Honors',
    awardGroups: [
      {
        index: '01',
        title: 'Competitive Programming',
        items: [
          'Gold Medal, 2022 Shanghai Collegiate Programming Contest',
          'Silver Medal, 47th ICPC Asia Shenyang Regional Contest',
          'Silver Medal, 47th ICPC Asia Hangzhou Regional Contest',
        ],
      },
      {
        index: '02',
        title: 'Mathematical Modeling',
        items: ['Meritorious Winner, 2023 Mathematical Contest in Modeling (MCM)'],
      },
      {
        index: '03',
        title: 'Competitive Go',
        items: [
          'Runner-up, 5-Dan Division, “Leyi Cup” Shanghai Go Championship (2023)',
          'Men’s Individual Runner-up, Shanghai Student Sunshine Sports League Go Competition (2023, 2024)',
        ],
      },
      {
        index: '04',
        title: 'Honors & Scholarships',
        items: [
          'Merit Student, School of Life Sciences and Biotechnology, Shanghai Jiao Tong University (2023)',
          'Shanghai Jiao Tong University Class B Excellence Scholarship (2023, 2024)',
          '“Jinsai Bo’ai” Scholarship, Chinese Red Cross Foundation (2023)',
          'Topgen Strengthening Foundation Plan Award (2024)',
        ],
      },
    ],
    lifeTitle: 'Beyond Research',
    hobbies: [
      { image: 'hobby-go.jpg', title: 'Go' },
      { image: 'hobby-badminton.jpg', title: 'Badminton' },
      { image: 'hobby-music.jpg', title: 'Music' },
    ],
    contactTitle: 'Let’s Connect',
    copyright: '© 2026 Zirui Zeng',
    footerTagline: 'Built with curiosity.',
  },
};

export const getLocale = (): Locale =>
  document.documentElement.lang.toLowerCase().startsWith('en') ? 'en' : 'zh-CN';
