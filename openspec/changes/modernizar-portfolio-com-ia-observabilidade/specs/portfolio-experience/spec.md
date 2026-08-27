## Purpose

Definir uma experiência de portfólio moderna, coerente, inclusiva e rápida, que comunique competência técnica sem sacrificar clareza, compatibilidade ou autonomia do visitante.

## ADDED Requirements

### Requirement: Identidade visual responsiva e consistente
O sistema SHALL apresentar uma identidade visual autoral baseada em tokens de cor, tipografia, espaçamento, elevação e movimento, adaptando conteúdo e controles entre 320 px e telas largas sem perda de informação ou sobreposição.

#### Scenario: Visualização em dispositivo móvel
- **WHEN** o visitante acessa qualquer rota com viewport de 320 px
- **THEN** o conteúdo permanece legível, todos os controles continuam alcançáveis e não existe rolagem horizontal causada pela interface

#### Scenario: Visualização em tela larga
- **WHEN** o visitante acessa o portfólio em uma tela larga
- **THEN** a hierarquia visual preserva largura de leitura confortável e utiliza o espaço adicional sem esticar excessivamente textos ou imagens

### Requirement: Tema e preferências do usuário
O sistema SHALL oferecer temas claro, escuro e automático, SHALL respeitar inicialmente a preferência do sistema operacional e SHALL persistir apenas a escolha explícita do visitante.

#### Scenario: Preferência automática
- **WHEN** não existe escolha de tema salva
- **THEN** o tema acompanha `prefers-color-scheme` sem flash visual incompatível durante a inicialização

#### Scenario: Escolha persistida
- **WHEN** o visitante escolhe um tema explícito e retorna ao site
- **THEN** o sistema restaura essa escolha no mesmo navegador

### Requirement: Acessibilidade de nível AA
O sistema MUST atender aos critérios aplicáveis de WCAG 2.2 nível AA, incluindo navegação por teclado, ordem de foco, foco visível, contraste, nomes acessíveis, landmarks, mensagens de status e alternativas textuais.

#### Scenario: Navegação apenas por teclado
- **WHEN** o visitante percorre a página sem mouse
- **THEN** todos os controles interativos são alcançáveis em ordem lógica, o foco é visível e o menu modal mantém e devolve o foco corretamente

#### Scenario: Movimento reduzido
- **WHEN** o sistema operacional indica `prefers-reduced-motion: reduce`
- **THEN** animações não essenciais, paralaxe e transições longas são desativadas sem ocultar conteúdo

#### Scenario: Leitor de tela
- **WHEN** uma região dinâmica exibe carregamento, sucesso ou erro
- **THEN** a mudança relevante é anunciada por uma região semântica apropriada sem duplicar todo o conteúdo da página

### Requirement: Navegação e compatibilidade de URLs
O sistema SHALL permitir navegação interna sem recarga completa, atualizar histórico e título de documento, restaurar a posição esperada e preservar as URLs públicas `/`, `/resume`, `/property`, `/crypto`, `/netflix` e `/twitch`.

#### Scenario: Link profundo válido
- **WHEN** o visitante abre diretamente uma URL pública de projeto
- **THEN** a página correspondente é exibida com título, descrição e ação de retorno corretos

#### Scenario: Link desconhecido
- **WHEN** o visitante acessa uma rota não reconhecida
- **THEN** o sistema exibe uma página 404 acessível com ações para retornar, explorar projetos e tentar novamente

### Requirement: Conteúdo localizado sem geolocalização invasiva
O sistema SHALL disponibilizar a experiência em português e inglês, MAY manter outros idiomas atualmente completos, e MUST escolher o idioma por preferência explícita ou idioma do navegador sem consultar IP ou localização precisa.

#### Scenario: Primeiro acesso no Brasil
- **WHEN** o navegador declara português como idioma preferencial e não há escolha salva
- **THEN** o conteúdo é apresentado em português sem chamada de geolocalização

#### Scenario: Tradução ausente
- **WHEN** uma chave não possui tradução no idioma atual
- **THEN** o sistema usa uma tradução de fallback conhecida e não exibe a chave interna ao visitante

### Requirement: Contato honesto e com minimização de dados
O sistema MUST validar dados de contato antes de qualquer ação, MUST informar claramente o canal usado e MUST NOT declarar sucesso de envio se nenhuma entrega real ocorreu. Campos de telefone e outros dados não essenciais SHALL ser opcionais ou removidos.

#### Scenario: Gateway de contato indisponível
- **WHEN** não existe serviço de envio configurado
- **THEN** o sistema oferece ações explícitas para email, calendário ou rede profissional sem copiar ou registrar os dados digitados silenciosamente

#### Scenario: Entrada inválida
- **WHEN** o visitante fornece email inválido ou mensagem fora dos limites permitidos
- **THEN** o envio é bloqueado e erros específicos, associados aos respectivos campos, são exibidos

### Requirement: Orçamento de performance e SEO
O sistema SHALL ser construído para atingir em produção p75 LCP menor que 2,5 s, INP menor que 200 ms e CLS menor que 0,1, e SHALL expor metadados únicos, estrutura semântica e conteúdo rastreável por rota.

#### Scenario: Carregamento inicial
- **WHEN** a home é carregada em conexão móvel intermediária
- **THEN** conteúdo essencial não aguarda um preloader artificial e dependências de animação não bloqueiam a primeira renderização

#### Scenario: Metadados de projeto
- **WHEN** uma rota de projeto é aberta
- **THEN** título e descrição identificam o projeto atual e não reutilizam metadados genéricos da home
