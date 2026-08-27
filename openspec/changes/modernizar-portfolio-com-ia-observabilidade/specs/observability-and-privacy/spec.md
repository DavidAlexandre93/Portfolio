## Purpose

Fornecer diagnóstico estruturado e correlacionado de comportamento e falhas do frontend, preservando a privacidade e mantendo a telemetria opcional e segura por padrão.

## ADDED Requirements

### Requirement: Logs estruturados em JSON
O sistema SHALL emitir eventos de diagnóstico em JSON com schema versionado contendo, quando aplicável, timestamp UTC, severidade, nome do evento, ambiente, versão, componente, operação, resultado, duração e identificadores de trace e span.

#### Scenario: Operação concluída
- **WHEN** uma operação monitorada termina
- **THEN** um evento estruturado registra resultado e duração sem serializar o conteúdo fornecido pelo visitante

### Requirement: Diagnóstico completo de exceções
O sistema SHALL registrar para erros capturados o tipo, mensagem sanitizada, componente ou classe lógica, arquivo/origem, linha, coluna, causa encadeada e stack trace completos quando o runtime os fornecer.

#### Scenario: Exceção com stack disponível
- **WHEN** ocorre um erro de runtime com stack trace
- **THEN** o evento de erro preserva stack, origem, linha e coluna no canal técnico e associa um identificador de correlação exibível ao visitante

#### Scenario: Exceção sem localização
- **WHEN** o runtime não fornece arquivo ou linha
- **THEN** o logger usa valores explícitos de indisponibilidade sem inventar localização

### Requirement: Redação de PII e segredos
O sistema MUST remover ou mascarar emails, telefones, tokens, cookies, credenciais, conteúdo de formulários, prompts e respostas de IA antes de emitir logs, spans ou métricas.

#### Scenario: Objeto contém campos sensíveis aninhados
- **WHEN** um contexto de log contém campos sensíveis em qualquer nível suportado
- **THEN** os valores são substituídos por marcação de redação antes de chegar ao console ou exportador

#### Scenario: Mensagem livre contém PII reconhecível
- **WHEN** uma mensagem de erro incorpora email, telefone ou token com padrão conhecido
- **THEN** o valor reconhecível é mascarado e a estrutura útil do erro é mantida

### Requirement: OpenTelemetry configurável
O sistema SHALL criar traces OpenTelemetry para navegação e integrações somente quando habilitado por configuração válida, SHALL propagar correlação em chamadas permitidas e MUST limitar atributos a uma allowlist sem PII.

#### Scenario: Telemetria desabilitada
- **WHEN** o endpoint OTLP não está configurado ou a telemetria está desativada
- **THEN** nenhum envio de telemetria ocorre e a instrumentação permanece segura para a navegação

#### Scenario: Exportação habilitada
- **WHEN** endpoint, ambiente e taxa de amostragem são válidos
- **THEN** spans são exportados em lote com identificação de serviço e versão sem payloads de usuário

### Requirement: Captura global e Web Vitals
O sistema SHALL observar erros globais, promises rejeitadas e Core Web Vitals sem instalar manipuladores duplicados ou enviar eventos após descarte do ciclo de vida correspondente.

#### Scenario: Promise rejeitada sem tratamento
- **WHEN** o navegador sinaliza uma rejeição não tratada
- **THEN** um único evento de erro correlacionado é produzido com razão sanitizada

#### Scenario: Métrica de experiência disponível
- **WHEN** uma métrica Web Vital final é calculada
- **THEN** nome, valor, classificação e id técnico são registrados sem URL completa com query string

### Requirement: Controles de ambiente e retenção
O sistema MUST distinguir desenvolvimento, teste, staging e produção, SHALL evitar exportação real durante testes e MUST documentar amostragem, destino, retenção e forma de desativação para ambientes implantados.

#### Scenario: Execução de testes
- **WHEN** a aplicação roda no ambiente de teste
- **THEN** exportadores de rede permanecem desabilitados e os eventos podem ser inspecionados por um sink em memória
