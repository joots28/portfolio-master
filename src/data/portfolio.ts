export const portfolio: {
  name: string
  repository: string
  introduction: string
  journey: string[][]
  resumePdf: string | null
  contacts: { label: string; href: string }[]
} = {
  resumePdf: "/cv/Jonathan-Otiniel-Curriculo.pdf",
  contacts: [
    { label: "GitHub", href: "https://github.com/joots28" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jonathan-otiniel-053a12290" },
    { label: "E-mail", href: "mailto:otinieljonathan2804@gmail.com" },
  ],
  name: "Jonathan Otiniel",
  repository: "https://github.com/joots28/portfolio-master",
  introduction:
    "Estudante e Técnico em Desenvolvimento de Sistemas pela Etec. Em constante evolução, construindo meu caminho para o Full Stack.",
  journey: [
    [
      "A base",
      "Desenvolvimento de Sistemas",
      "Formação técnica pela Etec. O ponto de partida de uma trajetória em tecnologia.",
    ],
    [
      "O presente",
      "Aprender. Conectar. Construir.",
      "Uma jornada de estudo, exploração e desenvolvimento, um desafio de cada vez.",
    ],
    [
      "A direção",
      "Rumo ao Full Stack",
      "Ampliar a visão sobre as diferentes camadas de uma aplicação e como elas se conectam.",
    ],
  ],
};
