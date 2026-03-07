
const PROJECT_BACK_LINK = '/#projects';

export const PROJECT_DETAILS = {
  property: {
    heroAlt: 'Projeto integrador',
    title: 'Projeto Integrador - Bootcamp Mercado Livre',
    stack: 'SpringBoot / Java / MySQL',
    overview:
      'Projeto integrador com foco em backend, arquitetura de aplicação e práticas de entrega contínua no contexto do bootcamp do Mercado Livre.',
    links: [
      { label: 'Código', href: 'https://github.com/DavidAlexandre93/DH-Projeto-Integrador.git' },
      { label: 'Demonstração', href: 'https://github.com/DavidAlexandre93/DH-Projeto-Integrador.git' },
    ],
    technologies: ['SpringBoot', 'Java', 'MySQL', 'Jenkins', 'Docker', 'Junit'],
  },
  crypto: {
    heroAlt: 'Projeto Hortelan',
    title: 'Hortelan',
    stack: 'PHP / IoT / MySQL',
    overview:
      'Projeto IoT + Web para monitoramento de horta conectada, com coleta de dados de sensores (umidade do solo, temperatura, nível de água e bateria) e painel web para acompanhamento em tempo real. O sistema contempla modos de operação manual e automático de irrigação, permitindo maior controle e previsibilidade no cuidado das plantas.',
    links: [
      {
        label: 'Publicação',
        href: 'https://www.linkedin.com/posts/david-fernandes-08b005b4_hortelan-resumo-deste-nome-%C3%A9-justamente-de-activity-6422814925667737600-BnkD?utm_source=linkedin_share&utm_medium=member_desktop_web',
      },
      {
        label: 'Demonstração',
        href: 'https://www.linkedin.com/posts/david-fernandes-08b005b4_hortelan-resumo-deste-nome-%C3%A9-justamente-de-activity-6422814925667737600-BnkD?utm_source=linkedin_share&utm_medium=member_desktop_web',
      },
    ],
    technologies: ['PHP', 'MySQL', 'Arduino', 'IoT', 'C++', 'JavaScript'],
  },
  netflix: {
    heroAlt: 'API FastAPI',
    title: 'API - FastAPI',
    stack: 'FastAPI / Python / MySQL',
    overview: 'API REST criada com FastAPI para estudos de arquitetura, modelagem de dados e operações CRUD.',
    links: [
      { label: 'Código', href: 'https://github.com/DavidAlexandre93/Python-FastAPI.git' },
      { label: 'Demonstração', href: 'https://github.com/DavidAlexandre93/Python-FastAPI.git' },
    ],
    technologies: ['FastAPI', 'Python', 'MySQL', 'Pytest', 'CRUD'],
  },
  twitch: {
    heroAlt: 'Website Institucional',
    title: 'Website Institucional',
    stack: 'Next.js / Tailwind / JavaScript',
    overview: 'Website desenvolvido para prática de front-end moderno com componentes reutilizáveis e design responsivo.',
    links: [
      { label: 'Demonstração', href: 'https://github.com/DavidAlexandre93/Web-site.git' },
      { label: 'Código', href: 'https://github.com/DavidAlexandre93/Web-site.git' },
    ],
    technologies: ['Next.js', 'Tailwind', 'JavaScript', 'Next Auth', 'Github Auth', 'Google Auth'],
  },
};

export const getProjectDetail = (projectKey) => {
  const detail = PROJECT_DETAILS[projectKey];

  if (!detail) return null;

  return {
    ...detail,
    heroImage: '/assets/projects/logoprojects.svg',
    backLink: PROJECT_BACK_LINK,
  };
};
