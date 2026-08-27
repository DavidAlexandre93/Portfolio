## Why

O portfólio atual entrega conteúdo estático, porém acumula riscos de manutenção e confiança: JavaScript sem contratos de runtime, dependências de animação carregadas por CDN, formulário que simula sucesso sem enviar dados, observabilidade ausente, CI inconsistente com Vite e tratamento de falhas limitado. A modernização cria uma experiência autoral, acessível e confiável, com IA útil e progressiva, sem transformar um site pequeno em uma arquitetura desnecessariamente complexa.

## What Changes

- Redesenhar a interface com um design system responsivo, elegante e contemporâneo, incluindo tema claro/escuro, microinterações com preferência de movimento reduzido, navegação acessível, estados de foco, SEO e melhorias de performance.
- Migrar o código da aplicação para TypeScript estrito e organizar o domínio por funcionalidades e portas/adaptadores leves, preservando KISS, DRY, YAGNI e SOLID.
- Introduzir um assistente de IA contextual ao portfólio com sugestões, respostas baseadas apenas em conteúdo aprovado, suporte progressivo a IA local do navegador e gateway remoto configurável, sempre com fallback offline.
- Substituir o falso envio do formulário por um fluxo honesto e validado, com consentimento, minimização de PII e fallback seguro para canais externos de contato.
- Implementar Error Boundary, páginas de erro/indisponibilidade consistentes, health checks de integrações e recuperação sem tela em branco.
- Adicionar logs JSON estruturados com redação de PII e telemetria OpenTelemetry opcional por ambiente, incluindo classe/componente, origem, linha/coluna quando disponíveis, causa e stack trace.
- Definir DTOs de entrada e saída validados em runtime, enums e configuração de ambiente centralizada; documentar em OpenAPI o contrato do gateway opcional de IA/health.
- Garantir idempotência nas operações remotas por chave de idempotência. Documentar que ACID pertence ao serviço persistente e exigir comportamento transacional do gateway caso passe a armazenar dados; o frontend não fingirá garantias de banco inexistentes.
- Modernizar lint, formatação, testes unitários, de componentes, acessibilidade e E2E, com limiares de cobertura de 100% no código testável crítico e um plano explícito para exceções justificadas.
- Corrigir a pipeline para Vite/npm, adicionar validações de tipos, segurança, cobertura e Conventional Commits; remover qualquer estrutura residual do Claude Code sem afetar configurações do OpenSpec/Codex.
- Documentar arquitetura, decisões, variáveis de ambiente, observabilidade, segurança, operação e critérios de evolução.

## Capabilities

### New Capabilities

- `portfolio-experience`: Experiência visual responsiva, acessível, internacionalizada e performática do portfólio e de seus estados de navegação.
- `ai-portfolio-assistant`: Assistente de IA contextual, seguro, transparente e resiliente, com adapters local, remoto e fallback determinístico.
- `resilience-and-health`: Tratamento global de erros, estados degradados, health checks e recuperação amigável ao usuário.
- `observability-and-privacy`: Logs JSON, rastreamento OpenTelemetry, correlação, diagnóstico de exceções e proteção de PII.
- `typed-integration-contracts`: DTOs validados, configuração tipada, idempotência e contrato OpenAPI para integrações externas.
- `engineering-quality`: Quality gates, testes, cobertura, segurança de dependências, formatação, lint e governança de commits.

### Modified Capabilities

- Nenhuma. Este repositório ainda não possuía especificações OpenSpec.

## Impact

- Código afetado: aplicação React/Vite completa, componentes, roteamento, internacionalização, dados, estilos, testes e assets.
- Configuração afetada: TypeScript, Vite, ESLint, Prettier, Vitest, Playwright, Tailwind, variáveis de ambiente, Firebase Hosting e GitHub Actions.
- Dependências esperadas: bibliotecas pequenas e justificadas para schema validation, animação empacotada, testes, acessibilidade e OpenTelemetry; scripts globais de CDN serão eliminados.
- Integrações: endpoint opcional e sem segredo no cliente para IA/health; nenhum token privado poderá ser incluído em variáveis `VITE_*`.
- Compatibilidade: URLs públicas existentes serão preservadas ou redirecionadas; ausência de IA ou telemetria deverá degradar de forma funcional.
- Dados: o frontend não persistirá conteúdo sensível; qualquer persistência futura deverá cumprir idempotência, transações ACID e política explícita de retenção no serviço responsável.
