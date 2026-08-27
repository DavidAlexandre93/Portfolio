## 1. Baseline e higiene do repositório

- [ ] 1.1 Registrar inventário de código, rotas, assets, dependências, integrações e configurações atuais em `docs/audit.md`; verificar que cada arquivo versionado relevante aparece na auditoria ou em uma exclusão justificada.
- [ ] 1.2 Executar e documentar baseline de `npm test`, `npm run lint`, `npm run build`, tamanho do bundle, Lighthouse e axe; verificar que os resultados e falhas pré-existentes estão reproduzíveis.
- [ ] 1.3 Procurar `.claude`, `CLAUDE.md`, comandos e referências Claude Code em arquivos versionados e ignorados; remover somente os encontrados e verificar com busca case-insensitive que não restou estrutura Claude, preservando `.agents` e `openspec`.
- [ ] 1.4 Auditar dependências diretas por uso real; remover Firebase, gh-pages, engines de animação e ícones não usados após a migração e verificar com `npm ls --depth=0` e busca de imports.
- [ ] 1.5 Eleger npm e `package-lock.json` como fonte única, remover `yarn.lock` e referências Yarn da CI/documentação e verificar que `npm ci` funciona em checkout limpo.

## 2. Toolchain TypeScript e qualidade estática

- [ ] 2.1 Adicionar TypeScript estrito, configs de app/test/build e aliases mínimos; verificar `npm run typecheck` em arquivo de prova e depois sem erros no projeto.
- [ ] 2.2 Configurar ESLint flat com TypeScript, React Hooks, JSX a11y, imports e segurança, sem desativação global de unused vars; verificar `npm run lint -- --max-warnings=0`.
- [ ] 2.3 Configurar Prettier e Stylelint para TS/TSX/CSS/JSON/Markdown; verificar `npm run format:check` e `npm run lint:styles` sem divergências.
- [ ] 2.4 Configurar Vitest, jsdom, Testing Library, user-event, jest-dom, MSW e axe; verificar um teste unitário e um teste de componente executados por `npm test`.
- [ ] 2.5 Configurar Playwright em build de produção para Chromium desktop e mobile; verificar que um smoke E2E abre `/` e não registra erro de console.
- [ ] 2.6 Configurar cobertura de 100% para branches, functions, lines e statements em `src` testável, com exclusões mínimas documentadas; verificar que um branch propositalmente sem teste faz `npm run test:coverage` falhar.

## 3. Contratos, configuração e modelo de conteúdo

- [ ] 3.1 Criar schemas Zod e DTOs inferidos para ambiente, conteúdo, IA, health, erros e logs; verificar casos válidos, limites e tipos incorretos com testes unitários.
- [ ] 3.2 Implementar loader de configuração centralizado com ambientes e feature flags fechados; verificar ausência opcional, URLs inválidas, sampling fora de faixa e detecção de segredo em `VITE_*`.
- [ ] 3.3 Consolidar perfil, experiência, skills, projetos, links e SEO em conteúdo tipado e imutável; verificar ids únicos, protocolos permitidos, rotas existentes e schemas no teste de conteúdo.
- [ ] 3.4 Migrar traduções para catálogos tipados português/inglês, mantendo francês/japonês apenas se completos; verificar paridade de chaves e fallback sem mostrar chave interna.
- [ ] 3.5 Substituir geolocalização por IP por preferência explícita e `navigator.languages`; verificar com teste que nenhum fetch ocorre para detectar idioma.
- [ ] 3.6 Migrar bootstrap, providers, componentes e páginas para `.ts`/`.tsx`; verificar que não restam `.js/.jsx` de aplicação fora de exceções de tooling e que `tsc --noEmit` passa.

## 4. Roteamento, shell e SEO

- [ ] 4.1 Substituir o roteador próprio por configuração React Router tipada com lazy routes; verificar navegação, back/forward, link modificado e rotas desconhecidas em testes de integração.
- [ ] 4.2 Preservar `/`, `/resume`, `/property`, `/crypto`, `/netflix` e `/twitch`, incluindo hash anchors; verificar acesso direto e retorno correto em E2E.
- [ ] 4.3 Implementar shell sem preloader artificial, skip link, landmarks e restauração de scroll/foco; verificar teclado, carregamento inicial e mudança de rota em Testing Library/Playwright.
- [ ] 4.4 Centralizar title, description, canonical, Open Graph e dados estruturados por rota; verificar metadados únicos para home, currículo, projetos, 404 e health.
- [ ] 4.5 Configurar fallback SPA e headers de segurança no Firebase Hosting; verificar `firebase.json` e respostas locais/preview para CSP, nosniff, referrer, permissions e frame policy.

## 5. Design system e modernização visual

- [ ] 5.1 Definir tokens CSS de cor, tipografia, espaço, raio, elevação, layout e movimento para temas claro/escuro; verificar contraste AA das combinações de texto e controles.
- [ ] 5.2 Implementar provider e seletor de tema `light | dark | system` sem flash; verificar preferência inicial, mudança do sistema, persistência explícita e hidratação inicial em testes.
- [ ] 5.3 Criar primitives acessíveis de Button, Link, Badge, Card, Section, Field, Status e Dialog/Drawer; verificar estados hover/focus/disabled/error e axe sem violações.
- [ ] 5.4 Redesenhar navbar e menu responsivo com marca visível, progresso discreto e focus trap; verificar Escape, clique externo, retorno de foco e viewport de 320 px.
- [ ] 5.5 Redesenhar hero como composição editorial tecnológica com CTA de projetos, IA e contato; verificar conteúdo imediato sem JS de animação e sem layout shift relevante.
- [ ] 5.6 Redesenhar seções Sobre, Skills e Projetos com hierarquia, filtros ou agrupamento úteis e cards navegáveis; verificar semântica, imagens responsivas e operação por teclado/toque.
- [ ] 5.7 Redesenhar detalhes de projeto, currículo, 404 e estados vazios preservando conteúdo e URLs; verificar responsividade mobile/desktop e metadados corretos.
- [ ] 5.8 Instalar e usar uma única biblioteca de movimento empacotada, remover GSAP/Motion globais e scripts CDN; verificar busca sem `window.gsap`, `window.Motion` ou scripts remotos e teste de movimento reduzido.
- [ ] 5.9 Self-host ou substituir fontes remotas por stack local apropriada; verificar Network sem requisição a Google Fonts e renderização estável em fallback.

## 6. Observabilidade e privacidade

- [ ] 6.1 Implementar sanitizador recursivo de campos e padrões sensíveis; verificar redação de email, telefone, token, cookie, prompt, resposta, objetos aninhados, arrays e referências circulares.
- [ ] 6.2 Implementar Logger JSON schema v1 com sinks console/memória e níveis por ambiente; verificar serialização determinística dos campos obrigatórios sem payload de usuário.
- [ ] 6.3 Implementar normalização de exceções com tipo, mensagem sanitizada, componente/classe, source, linha, coluna, cause, stack e correlation id; verificar erros com e sem stack e causes aninhadas.
- [ ] 6.4 Instalar captura global idempotente de `error` e `unhandledrejection` com teardown; verificar que cada falha produz exatamente um evento e nenhum listener vaza entre montagens.
- [ ] 6.5 Integrar OpenTelemetry Web com spans manuais, batch export, sampling e allowlist somente quando habilitado; verificar zero tráfego quando desligado e spans correlacionados com mock OTLP quando ligado.
- [ ] 6.6 Criar decorator observável para adapters e instrumentar navegação, IA e health; verificar duração, resultado, trace/span id e ausência de prompts/respostas nos eventos.
- [ ] 6.7 Capturar Web Vitals em JSON, removendo query/hash de URLs; verificar nome, valor, rating e id por sink em memória.
- [ ] 6.8 Configurar source maps como artefato protegido e não como arquivo público por padrão; verificar conteúdo de `dist` e upload de artefato da CI.

## 7. Erros, conectividade e health

- [ ] 7.1 Implementar `AppError` discriminado e mapeamento de falhas técnicas para mensagens localizadas seguras; verificar códigos, retryability, causes e fallback unknown.
- [ ] 7.2 Implementar Error Boundary raiz e por rota/assistente com UI de recuperação, correlação, retry, home e health; verificar exceção simulada sem tela branca nem stack exposto.
- [ ] 7.3 Implementar observer de conectividade e estado offline não destrutivo; verificar transições online/offline e preservação em memória da entrada não enviada.
- [ ] 7.4 Implementar checks abortáveis para aplicação, conteúdo local e gateway opcional; verificar timeout, cancelamento, clock da última verificação e ausência de loops.
- [ ] 7.5 Implementar agregação `healthy | degraded | unavailable` sem derrubar o site por serviço opcional; verificar todas as combinações em testes parametrizados.
- [ ] 7.6 Criar painel/rota de health e indicador discreto para estados degradados; verificar refresh sem concorrência, mensagens acessíveis e renderização nos três estados.

## 8. Domínio e adapters do assistente de IA

- [ ] 8.1 Definir `AssistantPort`, casos de uso, DTOs, limites e catálogo de citations sobre o conteúdo aprovado; verificar tipos e schemas para Q&A, projeto, resumo e vaga.
- [ ] 8.2 Implementar tokenização, índice e ranking determinísticos bilíngues do conteúdo; verificar acertos, empates, stopwords, acentos, pergunta vazia e fora de escopo.
- [ ] 8.3 Implementar `GroundedSearchAdapter` com respostas, limitações e links sem invenção; verificar fixtures de competências, projetos, contato e desconhecido em ambos os idiomas.
- [ ] 8.4 Implementar detecção/redação de PII e proteção de instruções antes de chamadas remotas; verificar email, telefone, secrets aparentes, jailbreak e inputs no limite.
- [ ] 8.5 Implementar geração de idempotency key por intenção e reuso somente em retry; verificar chave estável após timeout e nova chave para nova intenção idêntica.
- [ ] 8.6 Implementar cliente HTTP com abort, timeout, status mapping, backoff+jitter limitado e validação de DTO; verificar 2xx válido/inválido, 4xx, 429, 5xx, timeout, abort e retry via MSW/fake timers.
- [ ] 8.7 Implementar `RemoteAiAdapter` sem segredo no browser e com grounding mínimo; verificar headers, idempotência, payload sanitizado, citations e fallback em erro elegível.
- [ ] 8.8 Implementar `BrowserAiAdapter` por capability detection e gesto explícito; verificar disponível, indisponível, inicialização negada, erro e descarte com mocks de browser.
- [ ] 8.9 Implementar factory/chain de seleção local-remoto-determinístico com estado de provider visível; verificar matriz de configuração/capability/falhas sem fallback em erro permanente.
- [ ] 8.10 Implementar análise de vaga que separa evidências, lacunas e desconhecidos sem persistência; verificar que refresh/clear elimina o conteúdo e logs não o contêm.

## 9. Interface de IA e voz progressiva

- [ ] 9.1 Criar launcher e dialog/drawer acessível do assistente com disclosure de IA, provider atual e privacidade; verificar foco, Escape, retorno de foco, mobile e axe.
- [ ] 9.2 Implementar histórico somente em memória, perguntas sugeridas, estado streaming/loading, citations, limitações, retry e clear; verificar todos os estados com Testing Library.
- [ ] 9.3 Implementar modos explorar projetos, resumo para recrutador e aderência à vaga sobre o mesmo caso de uso; verificar saída com links/evidências e rótulos de inferência.
- [ ] 9.4 Integrar alerta de PII com preview redigido, cancelar e continuar sanitizado; verificar que o request bruto nunca alcança adapter remoto ou logger.
- [ ] 9.5 Adicionar voz progressiva por APIs nativas somente quando suportada; verificar ausência do botão sem suporte, permissão negada, start/stop explícito e fallback de texto.
- [ ] 9.6 Instrumentar eventos técnicos do assistente sem conteúdo conversacional; verificar logs/traces e teste que proíbe prompt, vaga ou resposta nos sinks.

## 10. Contato e canais externos

- [ ] 10.1 Substituir o envio simulado por schema e estado de briefing com dados mínimos; verificar required, formato, limites, mensagens associadas e ausência de sucesso falso.
- [ ] 10.2 Implementar modo padrão explícito de `mailto:` e CTAs Calendly/LinkedIn sem armazenamento; verificar URL codificada, aviso prévio e ausência de logs com dados.
- [ ] 10.3 Preparar port opcional de contato sem habilitá-lo até existir endpoint/contrato seguro; verificar feature flag desligada e mensagem correta na configuração padrão.
- [ ] 10.4 Revisar todos os links externos e assets; verificar protocolos permitidos, `noopener noreferrer`, alt text e respostas não quebradas onde testáveis.

## 11. OpenAPI, Swagger e documentação

- [ ] 11.1 Criar `docs/openapi.yaml` para `GET /health` e `POST /v1/chat` com DTOs, enums, idempotência, erros padronizados, limites, exemplos e segurança; verificar com Redocly lint sem warnings.
- [ ] 11.2 Implementar rota lazy de Swagger UI condicionada à configuração ou documentação estática equivalente; verificar carregamento do contrato sem aumentar o chunk inicial da home.
- [ ] 11.3 Documentar ACID como não aplicável ao gateway stateless e checklist obrigatório para persistência futura; verificar referência cruzada no OpenAPI e na arquitetura.
- [ ] 11.4 Reescrever README com requisitos, quick start, scripts, arquitetura, IA/fallback, env e deploy; verificar os comandos em checkout limpo sem segredo.
- [ ] 11.5 Criar `docs/architecture.md`, ADRs de IA/observabilidade, `docs/observability.md`, `docs/privacy.md`, `docs/testing.md` e `docs/runbook.md`; verificar links internos e cobertura de todas as decisões do design.
- [ ] 11.6 Adicionar `.env.example` sem valores sensíveis e tabela de configuração por ambiente; verificar loader contra o exemplo e busca de secrets no repositório.

## 12. Plano de testes e cobertura de 100%

- [ ] 12.1 Completar testes unitários de schemas, config, conteúdo, i18n, PII, logger, erros, idempotência, ranking e health; verificar 100% das quatro métricas nesses módulos.
- [ ] 12.2 Completar testes de contrato/adapters com MSW e sinks em memória, cobrindo sucesso, invalid response, abort, timeout, retry e degradação; verificar 100% das quatro métricas nos adapters em escopo.
- [ ] 12.3 Completar testes de hooks/providers e componentes com user-event e fake timers apenas onde necessário; verificar temas, idioma, menu, contato, IA, error/health e 100% das quatro métricas em UI incluída.
- [ ] 12.4 Executar axe em home, currículo, projeto, 404, health, menu, assistente e formulário nos dois temas; verificar zero violação automatizável de impacto critical/serious.
- [ ] 12.5 Criar E2E desktop/mobile para navegação, deep links, tema, idioma, projeto, currículo, IA fallback, vaga, offline, health, contato, 404 e recovery; verificar execução contra `vite preview` sem flakiness em três rodadas locais.
- [ ] 12.6 Adicionar testes de reduced motion, teclado e foco para menu, rotas, assistant e recovery; verificar fluxo completo sem mouse.
- [ ] 12.7 Adicionar screenshots de referência para home, projeto, assistente e erro em temas claro/escuro e viewports críticos; revisar diferenças e verificar ausência de overflow/layout quebrado.
- [ ] 12.8 Configurar Lighthouse CI para LCP, INP/proxy disponível, CLS, acessibilidade, boas práticas e SEO; verificar budgets e documentar limitações de laboratório versus p75 real.
- [ ] 12.9 Executar mutation testing nos módulos de domínio mais críticos se o tempo de CI permitir; verificar score mínimo documentado para PII, idempotência, ranking e health ou registrar decisão justificada de adiamento.

## 13. CI/CD, governança e entrega

- [ ] 13.1 Corrigir workflow para Node suportado, npm cache, `npm ci` e artefato `dist`; verificar execução local equivalente e inspeção do YAML sem referências `.next`/Yarn.
- [ ] 13.2 Encadear typecheck, lint, styles, format, unit, coverage, OpenAPI, build, E2E/axe, Lighthouse e audit antes de deploy; verificar que a falha de cada gate impede os jobs de promoção.
- [ ] 13.3 Atualizar scan de dependências e supply chain, fixar ações por versão segura e definir processo de exceção temporária; verificar audit sem alta/crítica corrigível ou exceção documentada com prazo.
- [ ] 13.4 Configurar commitlint para Conventional Commits e documentar SemVer, branches, PR checklist e Definition of Done; verificar mensagens válidas/inválidas em testes do script ou hook de CI.
- [ ] 13.5 Garantir que source maps, cobertura, relatórios Playwright/Lighthouse e build sejam artefatos separados com retenção adequada; verificar que somente `dist` publicável chega ao deploy.
- [ ] 13.6 Configurar staging/preview e produção para promover o mesmo artefato aprovado; verificar smoke de rotas e health pós-deploy e procedimento de rollback para o build anterior.

## 14. Verificação final da mudança

- [ ] 14.1 Executar `npm ci`, typecheck, todos os linters, format check, testes, cobertura, OpenAPI lint, build, E2E, axe, Lighthouse e audit; anexar resultados em `docs/verification.md` e verificar todos verdes.
- [ ] 14.2 Executar revisão visual manual em 320, 375, 768, 1024, 1440 e 1920 px, temas claro/escuro e reduced motion; registrar e corrigir overflow, contraste, foco e inconsistências.
- [ ] 14.3 Validar comportamento offline e com IA, OTLP e contato indisponíveis; verificar que o portfólio permanece navegável e cada capacidade mostra estado degradado correto.
- [ ] 14.4 Fazer varredura final por PII, secrets, scripts CDN, imports mortos, `console` fora do logger, `any`, ignores de lint/cobertura, TODOs e estrutura Claude; corrigir ou documentar cada ocorrência restante.
- [ ] 14.5 Executar `openspec validate modernizar-portfolio-com-ia-observabilidade --strict` e conferir cada cenário das seis specs contra teste ou evidência; verificar zero requisito sem rastreabilidade.
