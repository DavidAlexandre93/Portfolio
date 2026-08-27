## Purpose

Definir uma esteira verificável de qualidade, segurança e manutenção que permita evoluir o portfólio com confiança e evidência automatizada de comportamento.

## ADDED Requirements

### Requirement: Verificações estáticas obrigatórias
O projeto MUST fornecer comandos reproduzíveis para checagem de tipos, lint, formatação e build de produção, e todos SHALL terminar sem erros ou warnings promovidos a erro na pipeline.

#### Scenario: Pull request com violação
- **WHEN** uma mudança contém erro de tipo, regra de lint ou divergência de formatação
- **THEN** o quality gate falha antes de qualquer deploy

### Requirement: Cobertura automatizada integral do código em escopo
O projeto MUST medir branches, functions, lines e statements do código de aplicação testável e SHALL exigir 100% em todas as quatro métricas para os módulos incluídos no escopo de cobertura.

#### Scenario: Branch não exercitado
- **WHEN** uma mudança adiciona um branch em módulo coberto sem teste correspondente
- **THEN** a pipeline falha pelo limiar de cobertura

#### Scenario: Exclusão de cobertura
- **WHEN** código gerado, declaração apenas de tipos ou bootstrap tecnicamente não instrumentável precisa ser excluído
- **THEN** a exclusão é mínima, explícita, documentada e não reduz a cobertura de regras de domínio, adapters ou componentes interativos

### Requirement: Plano de testes em camadas
O projeto SHALL manter testes unitários de domínio e utilitários, testes de componentes e hooks, testes de contrato dos adapters, testes de acessibilidade e testes E2E dos caminhos críticos em viewports móvel e desktop.

#### Scenario: Caminho crítico saudável
- **WHEN** a suíte E2E é executada contra o build de produção
- **THEN** navegação, troca de tema/idioma, exploração de projetos, assistente em fallback, contato e recuperação de erro são validados

#### Scenario: Regressão de acessibilidade
- **WHEN** uma página crítica introduz violação automatizável de acessibilidade
- **THEN** a pipeline falha e identifica a rota e a regra violada

### Requirement: Pipeline coerente e determinística
O sistema MUST usar um único gerenciador de pacotes e lockfile autoritativo na CI, SHALL instalar dependências de forma imutável e SHALL publicar apenas o artefato Vite produzido após todos os quality gates.

#### Scenario: Build aprovado
- **WHEN** tipos, lint, formato, testes, cobertura, contrato e auditoria são aprovados
- **THEN** a pipeline gera e publica o diretório `dist` associado ao mesmo commit verificado

### Requirement: Segurança de dependências e supply chain
O projeto SHALL auditar vulnerabilidades de severidade alta ou crítica, revisar dependências diretas, fixar versões de ações de CI de forma segura e evitar scripts remotos executáveis não versionados na página.

#### Scenario: Dependência vulnerável
- **WHEN** a auditoria encontra vulnerabilidade alta ou crítica com correção disponível em dependência usada
- **THEN** o gate bloqueia a promoção até atualização ou exceção temporária documentada com prazo

### Requirement: Governança de mudanças
O projeto SHALL documentar Conventional Commits, política de branches, revisão, versionamento semântico e checklist de Definition of Done, e SHALL validar mensagens de commit no fluxo automatizado aplicável.

#### Scenario: Commit fora do padrão
- **WHEN** uma mensagem sujeita ao gate não segue Conventional Commits
- **THEN** a validação falha com exemplo de correção

### Requirement: Higiene de ferramentas de agentes
O repositório MUST manter somente configurações de agentes necessárias ao fluxo OpenSpec/Codex aprovado e SHALL remover arquivos, comandos e diretórios residuais específicos do Claude Code quando encontrados.

#### Scenario: Varredura de estrutura legada
- **WHEN** a modernização é aplicada
- **THEN** `.claude`, `CLAUDE.md` e comandos Claude versionados não existem, enquanto os artefatos OpenSpec e a integração Codex permanecem funcionais

### Requirement: Documentação operacional e arquitetural
O projeto SHALL documentar arquitetura, decisões relevantes, execução local, variáveis de ambiente, contrato OpenAPI, telemetria, privacidade, health checks, testes e deploy em conteúdo versionado junto ao código.

#### Scenario: Novo colaborador
- **WHEN** uma pessoa clona o repositório com uma versão suportada do Node
- **THEN** ela consegue instalar, executar, testar e gerar build seguindo somente a documentação versionada, sem segredo obrigatório para a experiência básica
