import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const I18nContext = createContext({ locale: 'en-US', t: (key) => key, setLocale: () => {} });

const LANGUAGE_TO_LOCALE = {
  ar: 'ar-SA',
  cs: 'cs-CZ',
  da: 'da-DK',
  de: 'de-DE',
  en: 'en-US',
  es: 'es-ES',
  fi: 'fi-FI',
  fr: 'fr-FR',
  he: 'he-IL',
  hi: 'hi-IN',
  hu: 'hu-HU',
  id: 'id-ID',
  it: 'it-IT',
  ja: 'ja-JP',
  ko: 'ko-KR',
  ms: 'ms-MY',
  nl: 'nl-NL',
  no: 'no-NO',
  pl: 'pl-PL',
  pt: 'pt-BR',
  ro: 'ro-RO',
  ru: 'ru-RU',
  sv: 'sv-SE',
  th: 'th-TH',
  tr: 'tr-TR',
  uk: 'uk-UA',
  vi: 'vi-VN',
  zh: 'zh-CN',
};

const MESSAGES = {
  'pt-BR': {
    'nav.home': 'Home', 'nav.about': 'Sobre', 'nav.skills': 'Skills', 'nav.projects': 'Projetos', 'nav.resume': 'Currículo', 'nav.contact': 'Contato',
    'common.connect': 'Vamos nos conectar', 'common.back': 'Voltar', 'common.moreInfo': 'Mais informações',
    'hero.tagline': 'ENGENHARIA DE SOFTWARE SÊNIOR PARA SISTEMAS QUE PRECISAM ESCALAR', 'hero.greeting': 'Olá, eu sou',
    'hero.summary': 'Engenheiro de Software Sênior com 10 anos em tecnologia, especializado em APIs, microsserviços e soluções distribuídas com Java, Spring Boot, Python, Node.js, React, Kafka e Redis. Atuo na interseção entre arquitetura, cloud, observabilidade e IA aplicada com LLMs, RAG e MCP.',
    'about.title': 'Sobre', 'about.subtitle': 'Quem Sou', 'about.highlight': '/ / Desenvolvedor focado em entrega de valor real para o negócio.',
    'about.p1': 'Natural de Mato Grosso e residente em São Paulo, construí minha carreira a partir de uma base técnica em eletrônica e desenvolvimento de sistemas. Sou bacharel em Ciência da Computação pela USJT, com MBA em Arquitetura de Software pela FullCycle e pós-graduação em FullStack Development pela FIAP.',
    'about.p2': 'Hoje atuo como Engenheiro de Software Sênior na Dock, no time do Pix, desenhando e evoluindo soluções de pagamentos com TypeScript, Clean Architecture, AWS, Kubernetes, SQS, Lambdas e observabilidade com Datadog. Minha trajetória também inclui Bradesco, Mercado Livre, Itaú, Cognizant e Tech Mahindra.',
    'about.github': 'Veja alguns dos meus projetos mais recentes no GitHub.',
    'skills.subtitle': 'Tecnologias e competências', 'projects.title': 'Projetos', 'projects.subtitle': 'Projetos em destaque',
    'contact.title': 'Contato', 'contact.subtitle': 'Entre em contato', 'contact.available': 'Disponível para oportunidades e projetos. Vamos conversar.',
    'contact.connectMe': 'Conecte-se comigo', 'contact.name': 'Nome', 'contact.phone': 'Telefone', 'contact.email': 'Email', 'contact.subject': 'Assunto', 'contact.message': 'Mensagem', 'contact.send': 'Enviar mensagem',
    'menu.open': 'Abrir menu', 'menu.close': 'Fechar menu', 'menu.legendary': 'Vamos construir algo lendário juntos',
    'meta.homeDescription': 'Portfólio de David Alexandre Fernandes, Engenheiro de Software Sênior especializado em arquitetura, APIs, microsserviços, cloud, observabilidade e IA aplicada.',
  },
  'en-US': {
    'nav.home': 'Home', 'nav.about': 'About', 'nav.skills': 'Skills', 'nav.projects': 'Projects', 'nav.resume': 'Resume', 'nav.contact': 'Contact',
    'common.connect': "Let's connect", 'common.back': 'Back', 'common.moreInfo': 'More Info',
    'hero.tagline': 'BUILDING DIGITAL SOLUTIONS FOCUSED ON RESULTS', 'hero.greeting': 'Hi, I am',
    'hero.summary': 'Senior Software Engineer with 10 years in technology, focused on APIs, microservices and distributed systems with Java, Spring Boot, Python, Node.js, React, Kafka and Redis. I work across architecture, cloud, observability and applied AI with LLMs, RAG and MCP.',
    'about.title': 'About', 'about.subtitle': 'Who I Am', 'about.highlight': '/ / Developer focused on delivering real business value.',
    'about.p1': 'Born in Mato Grosso and based in São Paulo, I built my career from a technical foundation in electronics and systems development. I hold a degree in Computer Science from USJT, an MBA in Software Architecture from FullCycle and a postgraduate degree in FullStack Development from FIAP.',
    'about.p2': 'I currently work as a Senior Software Engineer at Dock on the Pix team, designing payment solutions with TypeScript, Clean Architecture, AWS, Kubernetes, SQS, Lambdas and Datadog observability. My background also includes Bradesco, Mercado Livre, Itaú, Cognizant and Tech Mahindra.',
    'about.github': 'See some of my latest projects on GitHub.',
    'skills.subtitle': 'Technologies and skills', 'projects.title': 'Projects', 'projects.subtitle': 'Featured projects',
    'contact.title': 'Contact', 'contact.subtitle': 'Get in touch', 'contact.available': 'Available for opportunities and projects. Let\'s talk.',
    'contact.connectMe': 'Connect with me', 'contact.name': 'Name', 'contact.phone': 'Phone', 'contact.email': 'Email', 'contact.subject': 'Subject', 'contact.message': 'Message', 'contact.send': 'Send message',
    'menu.open': 'Open menu', 'menu.close': 'Close menu', 'menu.legendary': "Let's build something legendary together",
    'meta.homeDescription': 'Portfolio of David Alexandre Fernandes, Senior Software Engineer focused on architecture, APIs, microservices, cloud, observability and applied AI.',
  },
  'fr-FR': {
    'nav.home': 'Accueil', 'nav.about': 'À propos', 'nav.skills': 'Compétences', 'nav.projects': 'Projets', 'nav.resume': 'CV', 'nav.contact': 'Contact',
    'common.connect': 'Connectons-nous', 'common.back': 'Retour', 'common.moreInfo': 'Plus d\'infos',
    'hero.tagline': 'CRÉER DES SOLUTIONS NUMÉRIQUES AXÉES SUR LES RÉSULTATS', 'hero.greeting': 'Bonjour, je suis',
    'hero.summary': 'Professionnel dont la carrière a commencé en ingénierie électronique et s\'est consolidée dans la technologie, en développement full cycle, automatisation, DevOps et SRE.',
    'about.title': 'À propos', 'about.subtitle': 'Qui suis-je', 'about.highlight': '/ / Développeur axé sur la création de valeur métier réelle.',
    'about.p1': 'Originaire du Mato Grosso et vivant dans la région métropolitaine de São Paulo, avec une formation technique en électronique et en développement de systèmes.',
    'about.p2': 'Expérience pratique en développement full stack/full cycle, automatisation des tests, DevOps et SRE, axée sur la qualité, l\'observabilité et la performance.',
    'about.github': 'Découvrez mes projets récents sur GitHub.',
    'skills.subtitle': 'Technologies et compétences', 'projects.title': 'Projets', 'projects.subtitle': 'Projets en vedette',
    'contact.title': 'Contact', 'contact.subtitle': 'Entrer en contact', 'contact.available': 'Disponible pour des opportunités et projets. Parlons-en.',
    'contact.connectMe': 'Connectez-vous avec moi', 'contact.name': 'Nom', 'contact.phone': 'Téléphone', 'contact.email': 'Email', 'contact.subject': 'Sujet', 'contact.message': 'Message', 'contact.send': 'Envoyer',
    'menu.open': 'Ouvrir le menu', 'menu.close': 'Fermer le menu', 'menu.legendary': 'Construisons quelque chose de légendaire ensemble',
    'meta.homeDescription': 'Portfolio de David Alexandre Fernandes, avec des projets et de l\'expérience en développement full cycle, DevOps, SRE, cloud, IA et blockchain.',
  },
  'ja-JP': {
    'nav.home': 'ホーム', 'nav.about': '概要', 'nav.skills': 'スキル', 'nav.projects': 'プロジェクト', 'nav.resume': '履歴書', 'nav.contact': 'お問い合わせ',
    'common.connect': 'つながりましょう', 'common.back': '戻る', 'common.moreInfo': '詳細',
    'hero.tagline': '成果重視のデジタルソリューションを開発', 'hero.greeting': 'こんにちは、',
    'hero.summary': '電子工学からキャリアを始め、現在はテクノロジー分野でフルサイクル開発、自動化、DevOps、SREに取り組んでいます。',
    'about.title': '概要', 'about.subtitle': 'プロフィール', 'about.highlight': '/ / ビジネス価値の提供に注力する開発者。',
    'about.p1': 'マットグロッソ州出身で、現在はサンパウロ都市圏在住。電子工学とシステム開発の技術的背景を持っています。',
    'about.p2': 'フルスタック/フルサイクル開発、テスト自動化、DevOps、SREの実務経験があります。',
    'about.github': 'GitHubで最近のプロジェクトをご覧ください。',
    'skills.subtitle': '技術とスキル', 'projects.title': 'プロジェクト', 'projects.subtitle': '注目プロジェクト',
    'contact.title': 'お問い合わせ', 'contact.subtitle': 'ご連絡ください', 'contact.available': '案件やプロジェクトのご相談を受け付けています。',
    'contact.connectMe': 'SNSでつながる', 'contact.name': '名前', 'contact.phone': '電話', 'contact.email': 'メール', 'contact.subject': '件名', 'contact.message': 'メッセージ', 'contact.send': '送信',
    'menu.open': 'メニューを開く', 'menu.close': 'メニューを閉じる', 'menu.legendary': '一緒に素晴らしいものを作りましょう',
    'meta.homeDescription': 'David Alexandre Fernandes のポートフォリオ。フルサイクル開発、DevOps、SRE、クラウド、AI、ブロックチェーンの実績を紹介。',
  },
};

const normalizeLocale = (locale) => {
  if (!locale) return 'en-US';
  const normalized = locale.replace('_', '-').trim();
  const supportedLocale = Object.keys(MESSAGES).find((key) => key.toLowerCase() === normalized.toLowerCase());
  if (supportedLocale) return supportedLocale;

  const [language] = normalized.toLowerCase().split('-');
  return LANGUAGE_TO_LOCALE[language] || 'en-US';
};

const resolveFromLocaleCandidates = (candidates = [], fallback = 'en-US') => {
  for (const candidate of candidates) {
    const resolved = normalizeLocale(candidate);
    if (resolved) return resolved;
  }
  return fallback;
};

export const I18nProvider = ({ children }) => {
  const [locale, setLocale] = useState('en-US');

  useEffect(() => {
    const detectLocale = async () => {
      const saved = window.localStorage.getItem('site-locale');
      if (saved) {
        const normalizedSavedLocale = normalizeLocale(saved);
        setLocale(normalizedSavedLocale);
        return;
      }

      const browserLocales = window.navigator?.languages?.length
        ? window.navigator.languages
        : [window.navigator?.language];
      const resolvedLocale = resolveFromLocaleCandidates(browserLocales);

      setLocale(resolvedLocale);
      window.localStorage.setItem('site-locale', resolvedLocale);
    };

    if (typeof window !== 'undefined') detectLocale();
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale: (nextLocale) => {
      const normalizedLocale = normalizeLocale(nextLocale);
      setLocale(normalizedLocale);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('site-locale', normalizedLocale);
      }
    },
    t: (key) => MESSAGES[locale]?.[key] || MESSAGES['en-US'][key] || key,
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
