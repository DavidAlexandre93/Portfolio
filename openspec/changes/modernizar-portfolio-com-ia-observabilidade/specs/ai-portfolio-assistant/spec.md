## Purpose

Oferecer IA útil em pontos estratégicos do portfólio para explicar experiência, recomendar projetos e apoiar recrutadores, com transparência, privacidade e fallback funcional.

## ADDED Requirements

### Requirement: Assistente contextual fundamentado
O sistema SHALL oferecer um assistente capaz de responder sobre perfil profissional, competências, projetos e formas de contato usando somente o conteúdo aprovado do portfólio como fonte factual.

#### Scenario: Pergunta coberta pelo portfólio
- **WHEN** o visitante pergunta sobre uma competência ou projeto documentado
- **THEN** o assistente responde no idioma atual, indica a seção ou projeto relacionado e oferece um link interno relevante

#### Scenario: Pergunta fora do escopo
- **WHEN** a pergunta exige fatos pessoais, profissionais ou técnicos ausentes do conteúdo aprovado
- **THEN** o assistente declara a limitação sem inventar informações e sugere um canal de contato

### Requirement: Modos de apoio orientados a objetivos
O sistema SHALL disponibilizar perguntas sugeridas e modos para explorar projetos, gerar um resumo para recrutadores e comparar uma descrição de vaga fornecida pelo visitante com competências comprovadas no portfólio.

#### Scenario: Análise de aderência a uma vaga
- **WHEN** o visitante cola uma descrição de vaga e solicita análise
- **THEN** o sistema separa correspondências comprovadas, lacunas ou itens sem evidência e links para os projetos relevantes

#### Scenario: Resumo para recrutador
- **WHEN** o visitante solicita uma visão executiva
- **THEN** o sistema produz um resumo conciso que diferencia experiência declarada de inferências e permite acessar as evidências usadas

### Requirement: Estratégia progressiva de provedores
O sistema SHALL selecionar entre IA local disponível no navegador, gateway remoto configurado e mecanismo determinístico baseado em busca no conteúdo, sem tornar qualquer provedor único requisito para acessar as informações do portfólio.

#### Scenario: IA local disponível e autorizada
- **WHEN** o navegador oferece um modelo local compatível e o visitante inicia o assistente
- **THEN** o sistema pode utilizá-lo e identifica a execução como local no dispositivo

#### Scenario: Nenhum modelo disponível
- **WHEN** IA local e gateway remoto estão indisponíveis
- **THEN** perguntas suportadas continuam recebendo respostas determinísticas baseadas no conteúdo e o estado degradado é explicado sem erro fatal

### Requirement: Transparência da resposta
O sistema MUST identificar que respostas podem ser geradas por IA, SHALL informar o modo ativo e MUST permitir que o visitante verifique a origem local do conteúdo usado.

#### Scenario: Resposta gerada remotamente
- **WHEN** o gateway remoto responde com sucesso
- **THEN** a interface identifica o uso de IA, mostra referências internas relevantes e não apresenta a resposta como declaração humana direta

### Requirement: Privacidade na interação com IA
O sistema MUST NOT exigir dados pessoais para uso do assistente, MUST NOT incluir conteúdo de outros campos do site no prompt e MUST NOT registrar prompts ou respostas em logs de telemetria. Conteúdo de vaga SHALL permanecer apenas em memória durante a sessão, salvo consentimento explícito futuro.

#### Scenario: Prompt contém email ou telefone
- **WHEN** o visitante inclui um possível dado pessoal no prompt
- **THEN** o sistema alerta sobre dados sensíveis, redige o dado antes de qualquer chamada remota e permite cancelar a operação

#### Scenario: Sessão encerrada
- **WHEN** a página é recarregada ou a conversa é limpa
- **THEN** prompts, respostas e descrições de vaga não permanecem no armazenamento local

### Requirement: Controle de abuso e instruções não confiáveis
O sistema SHALL limitar tamanho e frequência de entradas e MUST tratar conteúdo fornecido pelo visitante como dado não confiável, incapaz de alterar as regras, fontes ou configuração do assistente.

#### Scenario: Tentativa de sobrescrever instruções
- **WHEN** uma entrada solicita ignorar limites, revelar configuração ou inventar experiência
- **THEN** o sistema mantém o escopo do portfólio e responde sem expor configuração ou dados internos

### Requirement: Interação multimodal progressiva
O sistema SHALL oferecer entrada e leitura por voz quando APIs nativas compatíveis estiverem disponíveis, sempre mediante ação explícita e indicação clara de captura.

#### Scenario: Reconhecimento de voz indisponível
- **WHEN** o navegador não oferece reconhecimento de voz
- **THEN** o campo de texto permanece totalmente funcional e nenhum controle inoperante é exibido

#### Scenario: Permissão de microfone negada
- **WHEN** o visitante nega acesso ao microfone
- **THEN** o sistema encerra a captura, explica a alternativa por texto e não repete pedidos de permissão automaticamente
