# Jonathan Otiniel — sistema visual

## Direção
Cyberpunk × Opium editorial: carvão, azul concentrado, tipografia em grande escala e grafismos abstratos. Sem fotografia artificial, vídeos automáticos ou bibliotecas de animação.

## Edição
- `src/data/portfolio.ts`: biografia, trajetória e repositório confirmado.
- `src/data/projects.ts`: nomes e identificadores dos projetos.
- `src/components/ui.tsx`: texto semântico, links, ícones, títulos de seção e arte orbital.
- `src/App.tsx`: navegação, páginas e seções.
- `src/index.css`: tokens semânticos em `:root`, componentes e adaptações.
- `src/cinematic.css`: direção editorial imersiva, cenas amplas, escala tipográfica e adaptações próprias.
- `src/components/SceneMotion.tsx`: progresso de leitura, deslocamento do hero na rolagem e resposta suave do átomo ao ponteiro; eventos agrupados por requestAnimationFrame.

Space Grotesk e IBM Plex Mono são carregadas pelo Google Fonts com `display=swap` e fallbacks. As cores principais são `--bg`, `--surface`, `--text`, `--muted`, `--line`, `--blue` e `--accent`. Espaçamento principal: `--gutter` e `--section`; largura: `--page`.

## Estados e responsividade
Links e botões têm foco visível e hover. Barra de navegação flutuante com fundo próprio, raio de 10px e sombra. Navegação compacta abaixo de 640px com Escape e fechamento após navegação; entre 640px e 1023px, layout intermediário. Projetos em uma coluna no celular, dois em telas maiores. O conteúdo não depende de hover.

## Movimento
Átomo em CSS 3D com núcleo esférico, três planos orbitais e elétrons em movimento contínuo. Faixa com dois grupos idênticos para loop contínuo. Grafismos dos projetos, indicadores e ornamentos animados; entrada progressiva das seções por IntersectionObserver. O controle de movimento pausa todas as animações decorativas; a preferência de movimento reduzido remove animações, transições e rolagem suave. Sem observer, conteúdo permanece visível. Cursor futurista somente com mouse preciso, sem captura de ponteiro; cursor nativo retorna com Tab, fora da janela ou movimento reduzido.

## Fontes e limites
Nome, formação Etec, direção Full Stack e nomes de projetos: informações do usuário. A seleção atual contém ChurchManager e EleiNexus, conforme solicitado. Consulta pública ao repositório `joots28/portfolio-master`: árvore contendo somente README.md com título, sem biografia, stack ou imagens. Nenhuma tecnologia pessoal, funcionalidade, data, resultado ou canal de contato foi inferido. As capas são grafismos, não screenshots. Estudos de caso apresentam estado de documentação pendente.

## Rotas
Home `#/`; seções `#projetos`, `#sobre`, `#contato`; estudos `#/projetos/churchmanager`, `#/projetos/eleinexus`; perfil e currículo `#/curriculo`; contatos `#/curriculo/contatos`. Caminhos desconhecidos exibem retorno ao início. Nenhum backend, formulário simulado ou analytics.

## Currículo e contatos
O perfil pode ser consultado sem baixar arquivos. Em `src/data/portfolio.ts`, `resumePdf` aceita um caminho local para um PDF real (ainda não fornecido); quando preenchido, aparecem ações separadas para abrir e baixar. Use arquivo no mesmo domínio para o atributo de download ser respeitado. `contacts` recebe uma lista de `{ label, href }` confirmados. A interface informa a ausência enquanto os dados não forem fornecidos, sem links fictícios.

## Referência de acabamento
A referência indicada pelo usuário, `https://valentingassend.com/en/`, foi consultada por HTML/CSS públicos. Princípios adotados: tipografia monumental, composição em cenas, hierarquia editorial, progressão pela rolagem e projetos com presença de tela. Nenhum texto, imagem, fonte privada ou código do autor foi incorporado. Não foi possível revisar a experiência da referência ou da implementação em um navegador nesta sessão.

O movimento é original, sem scroll hijacking: rolagem nativa, parallax leve no hero, órbitas em CSS 3D e resposta ao mouse. Navegadores compatíveis ganham animações ligadas ao progresso de visualização; nos demais, o conteúdo e as revelações continuam disponíveis. Movimento reduzido e pausa permanecem respeitados.