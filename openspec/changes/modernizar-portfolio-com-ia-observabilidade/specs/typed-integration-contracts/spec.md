## Purpose

Estabelecer fronteiras tipadas, validadas e documentadas para configurações e integrações, evitando confiança indevida em dados externos e efeitos duplicados.

## ADDED Requirements

### Requirement: Validação de entrada e saída nas fronteiras
O sistema MUST validar em runtime todo dado recebido de APIs, armazenamento do navegador e recursos não compilados antes de convertê-lo para DTOs internos tipados.

#### Scenario: Resposta válida
- **WHEN** uma integração retorna objeto compatível com o DTO documentado
- **THEN** o adapter entrega ao domínio uma representação normalizada e tipada

#### Scenario: Resposta incompatível
- **WHEN** um campo obrigatório está ausente, possui tipo incorreto ou excede limites
- **THEN** o adapter rejeita a resposta como erro de contrato, sem propagar objeto parcial à interface

### Requirement: Configuração centralizada e segura
O sistema SHALL validar variáveis de ambiente na inicialização da capacidade correspondente, SHALL representar ambientes e estados finitos por enums ou uniões fechadas e MUST NOT aceitar segredo privado em configuração exposta ao bundle do navegador.

#### Scenario: Variável opcional ausente
- **WHEN** o endpoint de IA ou OTLP não é configurado
- **THEN** a capacidade associada fica desativada ou degradada explicitamente sem impedir o build da aplicação

#### Scenario: Configuração insegura
- **WHEN** uma variável pública aparenta conter token, chave privada ou credencial
- **THEN** o build ou a inicialização segura rejeita a configuração e informa como usar um gateway servidor

### Requirement: Contrato OpenAPI do gateway
O sistema SHALL manter um documento OpenAPI válido para as operações de chat e health do gateway opcional, incluindo DTOs, enums, limites, erros padronizados, segurança e exemplos sem PII.

#### Scenario: Validação do contrato
- **WHEN** a pipeline executa os quality gates
- **THEN** o documento OpenAPI é validado sintaticamente e suas operações referenciadas pelo frontend possuem schemas completos de request e response

### Requirement: Idempotência de operações remotas
O sistema MUST atribuir uma chave de idempotência não derivada de PII a cada intenção de operação remota com efeito ou custo e SHALL reutilizar a mesma chave apenas em retentativas da mesma intenção.

#### Scenario: Timeout após envio
- **WHEN** a resposta se perde e a mesma intenção é tentada novamente
- **THEN** a nova tentativa envia a chave original para permitir deduplicação pelo serviço

#### Scenario: Nova pergunta
- **WHEN** o visitante envia uma nova intenção após uma operação anterior
- **THEN** uma nova chave é gerada, mesmo que o texto seja idêntico

### Requirement: Semântica HTTP resiliente
O sistema SHALL aplicar timeout, cancelamento, content type, status e política de retentativa explícitos e MUST NOT repetir automaticamente falhas permanentes ou solicitações não idempotentes sem proteção.

#### Scenario: Erro de validação remoto
- **WHEN** o gateway responde com erro 4xx de contrato
- **THEN** a solicitação não é repetida automaticamente e o erro seguro correspondente é apresentado

#### Scenario: Falha transitória
- **WHEN** uma operação idempotente recebe falha temporária elegível
- **THEN** o sistema pode realizar tentativas limitadas com backoff e jitter, respeitando cancelamento do visitante

### Requirement: Responsabilidade transacional explícita
O frontend MUST NOT alegar garantia ACID para operações sem persistência transacional. Caso o gateway armazene dados, o contrato e a documentação operacional SHALL exigir atomicidade, consistência, isolamento e durabilidade no limite do serviço responsável.

#### Scenario: Implementação somente de inferência
- **WHEN** o gateway processa uma pergunta sem persistir estado de negócio
- **THEN** a documentação marca ACID como não aplicável e ainda exige idempotência para controle de duplicação e custo

#### Scenario: Persistência futura
- **WHEN** uma operação futura passa a gravar contato ou conversa
- **THEN** sua especificação define transação, restrição única de idempotência, retenção e comportamento de rollback antes da habilitação em produção
