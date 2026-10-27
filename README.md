# Jonathan Otiniel — Portfólio V3

Portfólio pessoal de **Jonathan Otiniel**, Técnico em Desenvolvimento de Sistemas pela Etec e em evolução rumo ao desenvolvimento Full Stack.

**Site publicado:** https://jonathan-otiniel-portfolio-v3.onrender.com  
**Repositório:** https://github.com/joots28/portfolio-master

## Visão geral

O projeto apresenta a trajetória de aprendizagem, os projetos selecionados e os próximos passos profissionais em uma experiência editorial cinematográfica. A identidade visual combina fundos em carvão, azul concentrado, tipografia expressiva e movimento implementado principalmente em CSS.

O portfólio está organizado em seções de apresentação, projetos, trajetória, direção de aprendizagem e currículo/contatos. Os estudos de caso de **ChurchManager** e **EleiNex** fazem parte da seleção atual.

## Principais características

- Layout responsivo para diferentes tamanhos de tela.
- Direção visual editorial, com cenas amplas e hierarquia tipográfica marcada.
- Elemento orbital com movimento em CSS 3D e efeitos de interação sutis.
- Navegação por páginas e seções com URLs baseadas em hash.
- Projetos com páginas próprias para detalhar cada iniciativa.
- Navegação por teclado e indicadores de foco visíveis.
- Controle de movimento decorativo e respeito à preferência de movimento reduzido do sistema.
- Currículo em PDF e canais de contato configurados no código do projeto.

## Tecnologias

- **React 19** — interface e componentes.
- **TypeScript 5** — tipagem e organização do código.
- **Vite 8** — desenvolvimento local e build.
- **Tailwind CSS 4** — suporte de estilização, junto de CSS próprio.
- **CSS** — identidade visual, responsividade e animações.

## Executar localmente

### Requisitos

- Node.js **20.19+** ou **22.12+**.
- npm.

### Instalação

```bash
git clone https://github.com/joots28/portfolio-master.git
cd portfolio-master
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

### Build de produção

```bash
npm run build
npm run preview
```

O build final é gerado na pasta `dist/`.

## Estrutura do projeto

```text
portfolio-master/
├── public/
│   ├── cv/                 # Currículo em PDF
│   ├── favicon.svg
│   └── social-preview.svg
├── src/
│   ├── components/         # Componentes reutilizáveis e movimento
│   ├── data/
│   │   ├── portfolio.ts    # Apresentação, currículo e contatos
│   │   └── projects.ts     # Projetos exibidos no portfólio
│   ├── pages/              # Páginas, incluindo currículo
│   ├── App.tsx             # Composição e navegação da aplicação
│   ├── cinematic.css       # Direção visual cinematográfica
│   ├── index.css           # Estilos base e responsivos
│   └── main.tsx            # Entrada da aplicação
├── docs/
│   └── design-system.md    # Diretrizes do sistema visual
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Onde editar o conteúdo

- **Apresentação, trajetória, PDF e contatos:** `src/data/portfolio.ts`.
- **Projetos e links:** `src/data/projects.ts`.
- **Estrutura das páginas e navegação:** `src/App.tsx`.
- **Componentes compartilhados:** `src/components/`.
- **Estilos e animações:** `src/index.css` e `src/cinematic.css`.
- **Diretrizes visuais:** `docs/design-system.md`.

## Projetos apresentados

- **ChurchManager** — https://github.com/joots28/ChurchMennager
- **EleiNex** — https://eleinexus-civico.onrender.com/

Os estudos de caso podem evoluir conforme a documentação técnica e os projetos forem sendo concluídos.

## Publicação no Render

O site é configurado como **Static Site**.

- **Build command:** `npm install --no-audit --no-fund && npm run build`
- **Publish directory:** `dist`

A aplicação é construída com Vite e os arquivos estáticos resultantes são publicados pelo Render.

## Status

O portfólio é um projeto em evolução. Seções e estudos de caso poderão ser ampliados à medida que os projetos e a trajetória técnica avancem.
