## Context

Ver `proposal.md` para a motivação e `specs/**/spec.md` para os contratos observáveis. A base atual é um SPA React 18/Vite 7 em JavaScript, com componentes e dados distribuídos em diretórios de raiz, roteador próprio, traduções no contexto, Tailwind 3, Firebase Hosting e uma pipeline que ainda procura artefatos Next.js. GSAP e Motion são executados a partir de scripts CDN globais; o formulário apenas aguarda um timeout e declara sucesso; a detecção de idioma chama um serviço de geolocalização por IP; a suíte atual cobre somente um script de promoção da CI.

O produto é essencialmente estático. Portanto, o desenho adota uma arquitetura hexagonal leve apenas nas fronteiras que realmente variam — IA, telemetria, health e armazenamento — e composição direta de componentes no restante. Não haverá backend obrigatório, segredo no browser ou abstrações de banco artificiais.

## Goals / Non-Goals

**Goals:**

- tornar regras, dados, configurações e integrações verificáveis por TypeScript estrito e schemas de runtime;
- produzir uma interface diferenciada e acessível que permaneça rápida sem JavaScript de animação vindo de CDN;
- isolar provedores de IA atrás de um contrato único e garantir fallback útil sem rede;
- tornar falhas correlacionáveis por logs JSON e traces sem coletar PII;
- alinhar build, testes, cobertura, segurança, contrato e deploy em uma única esteira reproduzível;
- manter o custo arquitetural proporcional a um SPA de portfólio.

**Non-Goals:**

- criar banco, autenticação, painel administrativo, CRM ou armazenamento de conversas;
- expor chave de OpenAI, Anthropic ou qualquer outro provedor no bundle;
- alegar ACID no cliente; essa garantia só será exigida se um serviço persistente for criado;
- transformar todos os componentes em camadas, classes ou padrões formais;
- treinar modelos, baixar modelos grandes automaticamente ou tornar recursos experimentais requisito de navegação;
- prometer 100% de cobertura sobre código de terceiros, gerado, declarações de tipos ou bootstrap sem lógica.

## Decisions

### 1. Migração incremental para TypeScript estrito e módulos por feature

A aplicação será migrada para `.ts`/`.tsx` com `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes` e checagem sem emissão. O layout de alto nível será:

```text
src/
  app/                 # composição, providers, rotas, error boundary
  features/
    portfolio/         # conteúdo e apresentação
    assistant/         # domínio, casos de uso, UI e adapters de IA
    health/            # health model, checks e UI
    contact/           # validação e canais de contato
  shared/
    config/            # schema de env e enums
    contracts/         # DTOs e schemas compartilhados
    observability/     # logger, redaction e OTEL
    ui/                # primitives acessíveis e tokens
```

Cada feature poderá conter `domain`, `application`, `infrastructure` e `ui` somente quando houver uma fronteira real. Componentes puramente visuais não ganharão interfaces artificiais.

Alternativas consideradas:

- **manter JavaScript com JSDoc:** menor diff, mas não fornece a mesma qualidade de refactor nem contratos estritos pedidos;
- **Clean Architecture completa em círculos:** excessiva para o tamanho atual e contrária a KISS/YAGNI;
- **Next.js:** melhoraria renderização por rota, mas muda hospedagem e operação sem necessidade imediata. Vite com prerender/metadados por rota é suficiente nesta etapa.

### 2. Roteamento padrão e rotas carregadas sob demanda

O roteador manual será substituído por React Router com configuração tipada, error elements, lazy loading de páginas pesadas e tratamento uniforme de scroll/hash. Os paths legados continuarão como aliases estáveis. Metadados serão definidos por route model e aplicados por um único adapter de head.

Alternativas consideradas:

- **corrigir o roteador próprio:** mantém pouco código, mas reimplementa foco, erros, matching e navegação que já possuem soluções maduras;
- **TanStack Router:** tipagem de rotas superior, porém agrega uma curva desproporcional ao número de páginas.

### 3. Design system CSS-first, com uma única biblioteca de movimento

O novo visual seguirá uma direção editorial tecnológica: superfícies profundas em azul-noturno, acentos ciano/lima moderados, tipografia de display para títulos e sans variável para leitura, grids assimétricos, cards com bordas luminosas discretas e alto contraste. Tokens CSS serão a fonte de verdade para temas e Tailwind será usado como utilitário de composição, sem hexadecimais repetidos.

Motion será instalado pelo gerenciador de pacotes e usado para animações declarativas, layout e presença. GSAP, `window.Motion`, scripts CDN e o preloader artificial serão removidos. `prefers-reduced-motion` desligará animações não essenciais. Radix Dialog poderá fornecer foco, escape e semântica do menu/assistente; Lucide substituirá o conjunto heterogêneo de ícones se a auditoria de bundle confirmar ganho.

Alternativas consideradas:

- **manter GSAP e Motion:** duas engines aumentam peso e duplicam conceitos;
- **somente CSS:** excelente para microinterações, mas pior para presença do assistente e transições coordenadas;
- **biblioteca completa de componentes:** aceleraria a entrega, mas reduziria autoria visual e aumentaria CSS não usado.

### 4. Conteúdo tipado como fonte de grounding

Perfil, experiências, competências, projetos, links e traduções serão consolidados em objetos `satisfies` schemas imutáveis. Esse conteúdo será usado por UI, SEO, fallback da IA e referências, eliminando duplicação. A seleção de idioma usará escolha salva e `navigator.languages`; a consulta a `ipapi.co` será removida.

Schemas de conteúdo falharão durante testes/build quando links, ids, chaves ou campos obrigatórios estiverem inválidos. Conteúdo de usuário nunca será incorporado a essa fonte.

### 5. IA como Strategy + Adapter com seleção progressiva

O domínio definirá `AssistantPort.ask(AssistantRequestDto): Promise<AssistantResponseDto>`. Três strategies implementarão o contrato:

1. `BrowserAiAdapter`: detecta uma API local compatível, inicializa somente após gesto e não força download;
2. `RemoteAiAdapter`: chama `VITE_AI_GATEWAY_URL` sem credencial privada, com DTO validado, timeout e chave de idempotência;
3. `GroundedSearchAdapter`: tokeniza a base aprovada, pontua trechos, produz respostas e links determinísticos em português/inglês.

Uma factory selecionará a estratégia disponível e o caso de uso poderá cair para a próxima estratégia apenas em falhas elegíveis. O prompt de sistema remoto será versionado e enviará trechos mínimos de grounding, regras de não invenção e idioma. Entrada será limitada, sanitizada e analisada para PII antes de tráfego remoto. Conversas viverão somente em estado React; não haverá `localStorage` de prompts.

O assistente reunirá três fluxos sobre o mesmo port: Q&A, recomendação de projetos e análise de aderência de uma vaga. Saídas sempre carregarão `provider`, `mode`, `answer`, `citations`, `limitations` e `requestId`.

Alternativas consideradas:

- **chamar diretamente um provedor no browser:** rejeitada por expor chaves e acoplar o produto;
- **WebLLM/Transformers.js obrigatório:** inovador, porém o download e memória prejudicariam a experiência. Pode ser um adapter futuro, opt-in;
- **chat remoto como único modo:** falharia justamente quando a integração externa estiver indisponível.

### 6. Contratos com Zod e OpenAPI validado

Zod será usado nas fronteiras de env, storage, conteúdo e HTTP; tipos TypeScript serão inferidos dos schemas para evitar DTO duplicado. Estados fechados usarão enums string ou uniões discriminadas. O contrato `docs/openapi.yaml` descreverá `GET /health` e `POST /v1/chat`, `Idempotency-Key`, limites, erros RFC 9457 compatíveis e exemplos sanitizados. Uma rota lazy `/api-docs` poderá renderizar Swagger UI apenas sob configuração de documentação, e Redocly CLI validará o arquivo na CI.

Não será criado endpoint falso dentro do SPA. O OpenAPI é um contrato implementável por Firebase Functions, Cloudflare Workers ou outro gateway. Caso o gateway permaneça sem persistência, ACID será marcado como não aplicável; se persistência for adicionada, a decisão exigirá transação, unique constraint na chave de idempotência, rollback e retenção.

Alternativas consideradas:

- **interfaces TypeScript apenas:** não protegem dados recebidos em runtime;
- **gerar tipos somente a partir do OpenAPI:** bom para HTTP, mas não cobre env e conteúdo local. Uma futura geração poderá complementar os schemas.

### 7. Erros como união discriminada e Error Boundary por rota

Erros esperados serão mapeados para `AppError` com `kind`, `code`, `retryable`, `userMessageKey`, `correlationId` e `cause`; exceções desconhecidas serão normalizadas na fronteira. Um Error Boundary raiz impedirá tela branca, e boundaries de rota/assistente limitarão blast radius. A interface de recuperação terá tentativa, home, health e correlação, sem detalhes técnicos.

Health checks retornarão `healthy | degraded | unavailable` por dependência. Conteúdo local será validado uma vez; rede e gateway terão checks abortáveis e sem retentativa infinita. O estado geral será derivado: uma integração opcional degradada não derruba o site.

### 8. Logger JSON próprio e OpenTelemetry focado em traces

Uma fachada `Logger` produzirá eventos JSON schema v1. Um sanitizador recursivo aplicará allowlist de chaves e redação por nome/padrão antes de qualquer sink. Em desenvolvimento, o sink será `console`; em testes, memória; em produção, console estruturado e/ou bridge configurada. `window.error` e `unhandledrejection` serão registrados uma vez e removidos no teardown.

OpenTelemetry Web SDK instrumentará spans manuais de navegação, IA e health quando `VITE_OTEL_ENABLED=true` e o endpoint OTLP HTTPS for válido. A amostragem será configurável e atributos serão allowlisted. A SDK de logs OTEL não será base obrigatória porque logs no JavaScript/browser continuam menos maduros que traces; o JSON estável evita acoplar o schema do produto a uma API experimental. Web Vitals serão enviados ao logger e, quando houver span ativo, correlacionados.

Um decorator de observabilidade envolverá adapters sem misturar medição com regras de negócio. Source maps serão gerados sem publicação pública automática; a operação deverá armazená-los como artefato protegido para simbolização.

### 9. Contato sem mentira operacional

Na ausência de `VITE_CONTACT_ENDPOINT`, a interface será um construtor de briefing: valida campos mínimos, mostra que nada será armazenado e abre uma ação `mailto:` explícita ou Calendly/LinkedIn. Se um endpoint futuro for configurado, ele deverá implementar contrato separado, consentimento, retenção, proteção antiabuso e idempotência antes de habilitar o texto “enviado”.

Isso evita coletar PII para uma infraestrutura inexistente e mantém uma jornada útil. Firebase SDK será removido se a análise confirmar que não há uso real.

### 10. Quality gates e escopo de cobertura

Vitest + Testing Library + jest-dom cobrirão unidades, hooks e componentes; MSW simulará contratos HTTP; axe-core verificará violações automatizáveis; Playwright validará E2E em Chromium móvel e desktop. O alvo de 100% para branches, functions, lines e statements será aplicado a `src/**/*.{ts,tsx}` com exclusões estritas: entrypoint, arquivos `.d.ts`, constantes de conteúdo sem lógica e adapters puramente condicionais de API experimental quando não emuláveis. Toda exclusão terá justificativa em `docs/testing.md`.

Matriz mínima:

| Camada | Foco | Evidência |
|---|---|---|
| Domínio | busca, ranking, PII, idempotência, health agregado, erros | testes unitários e property cases de limites |
| Contratos | DTOs válidos/inválidos, env e OpenAPI | testes de schema e lint do contrato |
| Adapters | local/remoto/fallback, timeout, abort, retry e OTEL | MSW, fake timers e sinks em memória |
| Componentes | menu, temas, idioma, formulário, chat e errors | Testing Library + user-event + axe |
| Rotas | paths legados, 404, metadados, scroll/foco | testes de integração com memory router |
| E2E | home, projetos, currículo, IA fallback, offline e recovery | Playwright desktop/mobile no build |
| Visual | temas e breakpoints críticos | screenshots estáveis revisadas, sem tornar pixels frágeis o único gate |
| Performance | budgets e ausência de bloqueios | Lighthouse CI/Web Vitals em build de produção |

ESLint flat config com plugins TypeScript, React Hooks, jsx-a11y, import e security; Prettier; Stylelint para CSS; commitlint + Husky somente se o hook local não prejudicar CI. `npm` e `package-lock.json` serão autoritativos; `yarn.lock` será removido. A pipeline executará `npm ci`, typecheck, lint, format check, unit/coverage, OpenAPI lint, build, E2E/a11y, Lighthouse e audit antes de publicar `dist`.

### 11. Padrões usados apenas onde resolvem variação real

- **Strategy:** seleção de IA local, remota ou determinística;
- **Adapter:** browser APIs e HTTP convertidos para portas do domínio;
- **Factory:** criação da estratégia a partir de capabilities/configuração validada;
- **Decorator:** logs/traces em volta de adapters sem contaminar casos de uso;
- **Observer:** eventos nativos de conectividade, tema e erros globais com teardown explícito.

Singleton, Repository, CQRS, Mediator e outros padrões não serão usados sem problema concreto. A composição de dependências ocorrerá no bootstrap por funções simples, evitando container de DI.

### 12. Segurança, headers e dependências

Firebase Hosting será configurado com fallback de SPA e headers de segurança compatíveis: CSP sem `unsafe-eval`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` restritiva e proteção de framing. Fontes serão self-hosted ou usarão fallback de sistema para retirar dependências de tracking/carregamento. Links externos usarão `noopener noreferrer`; URLs e protocolos serão validados no conteúdo.

Dependências diretas serão adicionadas apenas quando substituírem código sensível ou fornecerem comportamento complexo comprovado. A auditoria removerá Firebase, gh-pages, React Icons ou outras libs não usadas antes de acrescentar alternativas.

## Risks / Trade-offs

- [Migração total para TypeScript amplia o diff] → migrar primeiro contratos/dados, depois infraestrutura e UI, mantendo build verde por fatias.
- [100% de cobertura pode incentivar testes frágeis] → medir apenas código testável em escopo, priorizar comportamento e revisar cada exclusão; E2E, axe e Lighthouse complementam cobertura estrutural.
- [APIs locais de IA variam entre navegadores] → detecção por capability, adapter isolado, nenhum download automático e fallback determinístico obrigatório.
- [Gateway remoto ainda não existe] → interface e OpenAPI serão implementados, mas a configuração padrão permanecerá no fallback sem simular disponibilidade.
- [OTEL no browser possui partes experimentais] → usar spans manuais estáveis e logger JSON independente; exportação desligada por padrão.
- [CSP pode bloquear integrações configuradas incorretamente] → documentar allowlist de `connect-src` por ambiente e testar build hospedado.
- [Novo visual pode regredir conteúdo ou acessibilidade] → preservar conteúdo em modelo tipado, testar WCAG, viewports e screenshots antes de substituir a versão publicada.
- [Análise de vaga pode conter informação sensível] → manter em memória, alertar/redigir PII antes de rede e nunca logar prompt/resposta.
- [Service health visto pelo cliente não prova saúde interna] → rotular como verificação de disponibilidade observada e usar `/health` remoto quando existir.

## Migration Plan

1. Congelar o comportamento atual com testes smoke das rotas e registrar baseline de build, bundle e acessibilidade.
2. Unificar npm/Node suportado, corrigir CI Vite e instalar tooling de tipos/testes sem alterar produção.
3. Migrar conteúdo, contratos, config e roteamento para TypeScript; manter aliases das URLs atuais.
4. Introduzir tokens, primitives, tema e shell acessível; migrar seção a seção e remover scripts CDN/preloader.
5. Adicionar logger, redaction, Error Boundaries, health e Web Vitals; validar que telemetria desligada não emite rede.
6. Implementar assistant domain e fallback determinístico; depois adapters local/remoto e interface acessível.
7. Substituir o formulário falso, adicionar OpenAPI/Swagger, documentação, headers e remover dependências/artefatos obsoletos, incluindo Claude Code se encontrados.
8. Completar matriz de testes, atingir os limiares, executar E2E/axe/Lighthouse e revisar visualmente mobile/desktop e ambos os temas.
9. Publicar primeiro em preview/staging, executar smoke e health, então promover o mesmo `dist` para produção.

Rollback: preservar o artefato anterior e a configuração de hosting; se os smoke tests pós-deploy falharem, republicar o último `dist` aprovado. Integrações de IA e OTEL terão feature flags para desativação independente sem rollback completo.

## Open Questions

- Qual plataforma implementará futuramente o gateway definido por OpenAPI (Firebase Functions, Cloudflare Workers ou serviço existente)? A escolha não altera o contrato nem bloqueia o fallback local.
- Qual coletor OTLP e política organizacional de retenção serão usados em produção? A exportação permanecerá desativada até que endpoint, CORS e retenção estejam aprovados.

## Implementation Slice 2026-09-04

Esta execução implementou a primeira superfície que define a percepção do produto e que funciona sem infraestrutura privada:

- o shell foi modernizado com tokens CSS, tema claro/escuro/system, skip link, marca visível, tipografia local e sem preloader artificial;
- o hero recebeu CTAs de exploração e um launcher de assistente contextual;
- o assistente local foi implementado como busca grounded determinística sobre `siteData`/`projectDetails`, com histórico apenas em memória, citações e limitações explícitas;
- o provider `grounded-search` fica visível e preparado para gateway remoto futuro, sem credencial ou chamada remota no bundle padrão;
- o contato deixou de declarar envio concluído e gera um briefing local para `mailto:`, sem armazenamento no site;
- scripts CDN de GSAP/Motion e dependências de animação global foram removidos; movimento não essencial respeita `prefers-reduced-motion`.

Este recorte é deliberadamente incremental: contratos remotos, OpenAPI, telemetria, health e migração TypeScript continuam sendo tarefas posteriores e não serão considerados implementados apenas pela existência da interface.

## Content Update 2026-09-04

O currículo fornecido pelo proprietário do portfólio passou a ser a fonte factual desta atualização de conteúdo. O site agora comunica o posicionamento de Engenheiro de Software Sênior com 10 anos em tecnologia, registra Dock, Bradesco, Mercado Livre, Itaú, Cognizant e Tech Mahindra, inclui formação acadêmica/certificados e destaca arquitetura, cloud, observabilidade e IA aplicada com LLMs, RAG e MCP. O perfil público do LinkedIn foi atualizado para `david-alexandre-fernandes-08b005b4` nos links de perfil; nenhuma informação foi inferida além do material fornecido.
