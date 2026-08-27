## Purpose

Assegurar que falhas de código, rede ou integrações sejam isoladas, diagnosticáveis e comunicadas por estados visuais úteis, evitando telas vazias e becos sem saída.

## ADDED Requirements

### Requirement: Recuperação global de falhas de renderização
O sistema MUST capturar falhas não tratadas na árvore de interface e exibir um estado de recuperação consistente com a identidade visual, sem revelar stack trace, caminhos internos ou dados sensíveis ao visitante.

#### Scenario: Componente falha durante renderização
- **WHEN** uma exceção escapa de um componente de rota
- **THEN** a tela apresenta identificador de correlação, explicação amigável, opção de tentar novamente e caminho para a home

#### Scenario: Nova tentativa bem-sucedida
- **WHEN** o visitante aciona a recuperação e a causa transitória não existe mais
- **THEN** a rota volta a renderizar sem exigir limpeza manual de dados do navegador

### Requirement: Isolamento de integrações opcionais
O sistema SHALL tratar IA, telemetria, métricas e demais serviços externos como capacidades opcionais, com timeout, cancelamento e fallback independente.

#### Scenario: Timeout do gateway de IA
- **WHEN** o gateway excede o limite de tempo configurado
- **THEN** somente o assistente entra em modo degradado, a requisição é cancelada e o restante do portfólio continua operacional

#### Scenario: Coletor de telemetria indisponível
- **WHEN** a exportação de telemetria falha
- **THEN** a navegação não é bloqueada e a aplicação evita ciclos de erro ou retentativas ilimitadas

### Requirement: Estado de conectividade
O sistema SHALL indicar quando uma ação depende de rede indisponível e SHALL restaurar a capacidade automaticamente quando a conectividade retornar, sem descartar entrada ainda não enviada.

#### Scenario: Conexão perdida durante interação
- **WHEN** o navegador fica offline antes de uma operação remota
- **THEN** a interface preserva a entrada em memória, bloqueia duplicações e oferece o fallback disponível

### Requirement: Health checks compreensíveis
O sistema SHALL disponibilizar uma visão de saúde que diferencie aplicação, conteúdo local e integrações opcionais nos estados `healthy`, `degraded` e `unavailable`, com horário da última verificação.

#### Scenario: Aplicação saudável sem gateway de IA
- **WHEN** assets e conteúdo local funcionam, mas o gateway opcional está ausente
- **THEN** a saúde geral é apresentada como funcional com IA degradada, não como indisponibilidade total

#### Scenario: Verificação manual
- **WHEN** o visitante solicita nova verificação
- **THEN** o sistema executa uma tentativa limitada, atualiza horário e estado e impede cliques concorrentes na mesma ação

### Requirement: Mensagens seguras e acionáveis
O sistema MUST mapear falhas técnicas para mensagens de usuário estáveis e acionáveis e SHALL manter detalhes completos apenas no canal de diagnóstico protegido.

#### Scenario: Resposta remota inválida
- **WHEN** uma integração devolve conteúdo fora do contrato
- **THEN** o visitante recebe uma mensagem de indisponibilidade temporária com opção segura de tentar mais tarde e o diagnóstico registra a violação do contrato
