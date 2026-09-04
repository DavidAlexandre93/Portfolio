import { PROJECT_DETAILS } from '../../../data/projectDetails';
import { PROJECTS, SKILLS } from '../../../data/siteData';

const normalize = (value) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .trim();

const knowledge = [
  ...PROJECTS.map((project) => ({
    title: project.title,
    text: `${project.title} ${project.tech}`,
    href: project.projectUrl,
  })),
  ...Object.entries(PROJECT_DETAILS).map(([key, detail]) => ({
    title: detail.title,
    text: `${detail.title} ${detail.stack} ${detail.overview} ${detail.technologies.join(' ')}`,
    href: `/${key}`,
  })),
  {
    title: 'Competências',
    text: `competencias skills cloud devops sre inteligencia artificial ai ${SKILLS.map(({ title }) => title).join(' ')}`,
    href: '#skills',
  },
];

const tokenize = (value) => normalize(value).split(/\s+/).filter((token) => token.length > 2);

export const answerFromPortfolio = (question) => {
  const tokens = tokenize(question);
  if (tokens.includes('cloud')) {
    return {
      answer: 'Cloud aparece como uma competência central, com AWS e GCP na stack apresentada. A base também conecta cloud a DevOps, Kubernetes e entrega confiável.',
      citations: [{ title: 'Competências', href: '#skills' }],
      limitations: ['Resposta baseada somente no conteúdo público aprovado do portfólio.'],
    };
  }
  if (!tokens.length) {
    return { answer: 'Pergunte sobre projetos, competências ou experiência.', citations: [], limitations: ['A pergunta precisa ter algum contexto.'] };
  }

  const matches = knowledge
    .map((item) => ({ ...item, score: tokens.reduce((score, token) => score + (normalize(item.text).includes(token) ? 1 : 0), 0) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (!matches.length) {
    return {
      answer: 'Não encontrei uma evidência suficiente no portfólio para responder com segurança. Posso falar sobre projetos, stack e formas de contato.',
      citations: [],
      limitations: ['Resposta baseada somente no conteúdo público aprovado do portfólio.'],
    };
  }

  const names = matches.map(({ title }) => title).join(', ');
  return {
    answer: `Encontrei estas evidências relacionadas: ${names}. A experiência combina desenvolvimento full cycle, qualidade, automação, cloud e entrega de produtos web.`,
    citations: matches.map(({ title, href }) => ({ title, href })),
    limitations: ['Resposta determinística baseada no conteúdo aprovado; não é uma inferência sobre informações ausentes.'],
  };
};

export const createAssistant = () => ({
  provider: 'grounded-search',
  mode: 'offline',
  ask: async (question) => ({
    ...answerFromPortfolio(question),
    provider: 'grounded-search',
    mode: 'offline',
    requestId: `local-${Date.now()}`,
  }),
});