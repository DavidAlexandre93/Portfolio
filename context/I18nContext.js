import { createContext, useContext, useEffect, useMemo, useState } from 'react';

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

const COUNTRY_TO_LOCALE = {
  AR: 'es-ES', AU: 'en-US', AT: 'de-DE', BE: 'fr-FR', BR: 'pt-BR', CA: 'en-US', CH: 'de-DE', CL: 'es-ES', CN: 'zh-CN',
  CO: 'es-ES', CZ: 'cs-CZ', DE: 'de-DE', DK: 'da-DK', EG: 'ar-SA', ES: 'es-ES', FI: 'fi-FI', FR: 'fr-FR', GB: 'en-US',
  GR: 'en-US', HK: 'zh-CN', HU: 'hu-HU', ID: 'id-ID', IE: 'en-US', IL: 'he-IL', IN: 'hi-IN', IT: 'it-IT', JP: 'ja-JP',
  KR: 'ko-KR', MX: 'es-ES', MY: 'ms-MY', NL: 'nl-NL', NO: 'no-NO', NZ: 'en-US', PE: 'es-ES', PH: 'en-US', PL: 'pl-PL',
  PT: 'pt-BR', RO: 'ro-RO', RU: 'ru-RU', SA: 'ar-SA', SE: 'sv-SE', SG: 'en-US', TH: 'th-TH', TR: 'tr-TR', TW: 'zh-CN',
  UA: 'uk-UA', US: 'en-US', UY: 'es-ES', VE: 'es-ES', VN: 'vi-VN', ZA: 'en-US',
};

const MESSAGES = {
  'pt-BR': {
    'nav.home': 'Home', 'nav.about': 'Sobre', 'nav.skills': 'Skills', 'nav.projects': 'Projetos', 'nav.resume': 'Currículo', 'nav.contact': 'Contato',
    'common.connect': 'Vamos nos conectar', 'common.back': 'Voltar', 'common.moreInfo': 'Mais informações',
    'hero.tagline': 'DESENVOLVENDO SOLUÇÕES DIGITAIS COM FOCO EM RESULTADO', 'hero.greeting': 'Olá, eu sou',
    'hero.summary': 'Profissional com trajetória iniciada na engenharia eletrônica e consolidada em tecnologia, atuando em desenvolvimento full cycle, automação, DevOps e SRE para produtos web, APIs e projetos inovadores.',
    'about.title': 'Sobre', 'about.subtitle': 'Quem Sou', 'about.highlight': '/ / Desenvolvedor focado em entrega de valor real para o negócio.',
    'about.p1': 'Natural de Mato Grosso e residente na região metropolitana de São Paulo, com formação técnica em eletrônica e desenvolvimento de sistemas. Atualmente cursando Ciência da Computação no UNASP.',
    'about.p2': 'Experiência prática em desenvolvimento full stack/full cycle, automação de testes, DevOps e SRE, com foco em qualidade, observabilidade, performance e experiência do usuário.',
    'about.github': 'Veja alguns dos meus projetos mais recentes no GitHub.',
    'skills.subtitle': 'Tecnologias e competências', 'projects.title': 'Projetos', 'projects.subtitle': 'Projetos em destaque',
    'contact.title': 'Contato', 'contact.subtitle': 'Entre em contato', 'contact.available': 'Disponível para oportunidades e projetos. Vamos conversar.',
    'contact.connectMe': 'Conecte-se comigo', 'contact.name': 'Nome', 'contact.phone': 'Telefone', 'contact.email': 'Email', 'contact.subject': 'Assunto', 'contact.message': 'Mensagem', 'contact.send': 'Enviar mensagem',
    'menu.open': 'Abrir menu', 'menu.close': 'Fechar menu', 'menu.legendary': 'Vamos construir algo lendário juntos',
    'meta.homeDescription': 'Portfólio de David Alexandre Fernandes, com projetos e experiências em desenvolvimento full cycle, DevOps, SRE, cloud, IA e blockchain.',
  },
  'en-US': {
    'nav.home': 'Home', 'nav.about': 'About', 'nav.skills': 'Skills', 'nav.projects': 'Projects', 'nav.resume': 'Resume', 'nav.contact': 'Contact',
    'common.connect': "Let's connect", 'common.back': 'Back', 'common.moreInfo': 'More Info',
    'hero.tagline': 'BUILDING DIGITAL SOLUTIONS FOCUSED ON RESULTS', 'hero.greeting': 'Hi, I am',
    'hero.summary': 'Professional with a career that started in electronic engineering and matured in technology, working with full-cycle development, automation, DevOps and SRE for web products, APIs and innovative projects.',
    'about.title': 'About', 'about.subtitle': 'Who I Am', 'about.highlight': '/ / Developer focused on delivering real business value.',
    'about.p1': 'Born in Mato Grosso and based in the São Paulo metropolitan area, with a technical background in electronics and systems development. Currently studying Computer Science at UNASP.',
    'about.p2': 'Hands-on experience in full-stack/full-cycle development, test automation, DevOps and SRE, focused on quality, observability, performance and user experience.',
    'about.github': 'See some of my latest projects on GitHub.',
    'skills.subtitle': 'Technologies and skills', 'projects.title': 'Projects', 'projects.subtitle': 'Featured projects',
    'contact.title': 'Contact', 'contact.subtitle': 'Get in touch', 'contact.available': 'Available for opportunities and projects. Let\'s talk.',
    'contact.connectMe': 'Connect with me', 'contact.name': 'Name', 'contact.phone': 'Phone', 'contact.email': 'Email', 'contact.subject': 'Subject', 'contact.message': 'Message', 'contact.send': 'Send message',
    'menu.open': 'Open menu', 'menu.close': 'Close menu', 'menu.legendary': "Let's build something legendary together",
    'meta.homeDescription': 'Portfolio of David Alexandre Fernandes, with projects and experience in full-cycle development, DevOps, SRE, cloud, AI and blockchain.',
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

const resolveFromGeoData = (data) => {
  if (!data) return null;

  if (typeof data.languages === 'string') {
    const locales = data.languages.split(',').map((entry) => entry.trim()).filter(Boolean);
    const localeFromLanguages = resolveFromLocaleCandidates(locales, null);
    if (localeFromLanguages) return localeFromLanguages;
  }

  if (data.country_code && COUNTRY_TO_LOCALE[data.country_code]) {
    return COUNTRY_TO_LOCALE[data.country_code];
  }

  return null;
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
      let resolvedLocale = resolveFromLocaleCandidates(browserLocales);

      try {
        const controller = new AbortController();
        const timeout = window.setTimeout(() => controller.abort(), 1500);
        const response = await fetch('https://ipapi.co/json/', { signal: controller.signal });
        window.clearTimeout(timeout);

        if (response.ok) {
          const data = await response.json();
          const geoLocale = resolveFromGeoData(data);
          if (geoLocale) resolvedLocale = geoLocale;
        }
      } catch (error) {
        resolvedLocale = resolveFromLocaleCandidates(browserLocales);
      }

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
