import { useEffect, useRef, useState } from "react"
import { Arrow, Button, Link, SectionHeading, Text } from "./components/ui"
import { AtomArt, FuturisticCursor } from "./components/Atmosphere"
import ResumePage from "./pages/ResumePage"
import SceneMotion from "./components/SceneMotion"
import { portfolio } from "./data/portfolio"
import { projects, type Project } from "./data/projects"

function ProjectArt({ project }: { project: Project }) {
  return (
    <div className={`project-art art-${project.kind}`} aria-hidden="true">
      <span className="art-coordinate">JO—{project.index} / CONCEPT COVER</span>
      <div className="project-symbol">
        {project.kind === "architecture" ? (
          <div className="architecture-symbol">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        ) : project.kind === "orbit" ? (
          <div className="nexus-symbol">
            <i />
            <i />
            <i />
          </div>
        ) : (
          <div className="shield-symbol">
            <i />
          </div>
        )}
      </div>
      <span className="art-word">{project.mark}</span>
      <span className="art-caption">EXPLORATION {project.index}</span>
    </div>
  )
}

function Header({
  hash,
  paused,
  onToggleMotion,
}: {
  hash: string
  paused: boolean
  onToggleMotion: () => void
}) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setOpen(false)
  }, [hash])
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        document.getElementById("menu-toggle")?.focus()
      }
    }
    if (open) window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
  }, [open])
  return (
    <header className="header">
      <div className="container header-inner">
        <Link
          href="#/"
          className="wordmark"
          aria-label="Jonathan Otiniel, início"
        >
          jo<span>∗</span>
          <span className="wordmark-caption">
            JONATHAN
            <br />
            OTINIEL
          </span>
        </Link>
        <nav
          className={`nav ${open ? "is-open" : ""}`}
          aria-label="Navegação principal"
        >
          <Link
            href="#projetos"
            className={hash === "#projetos" ? "active" : ""}
          >
            <span>01</span> Projetos
          </Link>
          <Link href="#sobre" className={hash === "#sobre" ? "active" : ""}>
            <span>02</span> Sobre
          </Link>
          <Link
            href="#/curriculo"
            className={
              hash.startsWith("#/curriculo")
                ? "nav-contact active"
                : "nav-contact"
            }
          >
            Currículo & contato <Arrow />
          </Link>
        </nav>
        <Button
          className="motion-toggle"
          aria-pressed={paused}
          onClick={onToggleMotion}
          aria-label={paused ? "Retomar animações" : "Pausar animações"}
        >
          {paused ? "Movimento: off" : "Movimento: on"}
        </Button>
        <Button
          id="menu-toggle"
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Fechar −" : "Menu +"}
        </Button>
      </div>
    </header>
  )
}

function Home() {
  return (
    <>
      <section className="hero container" id="inicio">
        <div className="hero-topline">
          <Text className="eyebrow">
            <span className="status-dot" /> DESENVOLVIMENTO EM EVOLUÇÃO
          </Text>
          <Text className="eyebrow hero-edition">
            PORTFÓLIO PESSOAL / VOL. 01
          </Text>
        </div>
        <div className="hero-layout">
          <div className="hero-copy">
            <Text className="hero-pretitle">
              A PRÓXIMA VERSÃO COMEÇA AGORA.
            </Text>
            <Text as="h1">
              <span className="name-line">Jonathan</span>
              <br />
              <span className="name-line name-outline">
                Otiniel<span className="name-period">.</span>
              </span>
            </Text>
            <div className="hero-description">
              <span className="crosshair">+</span>
              <Text>{portfolio.introduction}</Text>
            </div>
            <div className="hero-actions">
              <Link className="button button-primary" href="#projetos">
                Explorar projetos <Arrow direction="down" />
              </Link>
              <Link className="text-link" href="#/curriculo">
                Ver meu currículo <Arrow />
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-grid" />
            <span className="visual-corner corner-tl" />
            <span className="visual-corner corner-br" />
            <span className="visual-label">
              FIG. 001 — EM CONSTRUÇÃO CONSTANTE
            </span>
            <AtomArt />
            <span className="atom-index" aria-hidden="true">
              [ JO — 001 ]<br />
              SISTEMA EM EVOLUÇÃO
            </span>
            <div className="visual-bottom">
              <span>
                IDEIAS EM ÓRBITA.
                <br />
                CÓDIGO EM MOVIMENTO.
              </span>
              <span className="visual-cross">+</span>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <Text className="eyebrow">
            TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS{" "}
            <span className="muted">/ ETEC</span>
          </Text>
          <Link href="#projetos" className="scroll-link">
            CONTINUE EXPLORANDO <Arrow direction="down" />
          </Link>
        </div>
      </section>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <div className="ticker-group" key={copy}>
              {["DESENVOLVER", "EXPLORAR", "CONECTAR", "EVOLUIR"].map(
                (word) => (
                  <span className="ticker-item" key={word}>
                    {word}
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M12 0v24M0 12h24M3.5 3.5l17 17m0-17-17 17"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
      <section
        className="manifesto container"
        aria-label="Entre ideias e código"
      >
        <Text className="eyebrow">
          <span className="blue">O PONTO DE PARTIDA /</span> CURIOSIDADE
        </Text>
        <Text as="h2">
          Transformar
          <br />
          <span className="manifesto-outline">possibilidades</span>
          <br />
          em <span className="blue">construção.</span>
        </Text>
        <div className="manifesto-bottom">
          <span className="manifesto-symbol" aria-hidden="true">
            +
          </span>
          <Text>
            Entre o que eu já aprendi e tudo o que ainda quero descobrir, existe
            um caminho: construir.
          </Text>
          <Link href="#projetos" className="text-link">
            Conheça os projetos <Arrow direction="down" />
          </Link>
        </div>
      </section>
      <section className="section container selected-work" id="projetos">
        <SectionHeading
          number="01"
          label="PROJETOS SELECIONADOS"
          title="Ideias que ganham forma."
        >
          <Text className="section-note">
            Dois projetos. Diferentes caminhos.
            <br />A mesma vontade de construir.
          </Text>
        </SectionHeading>
        <div className="project-grid">
          {projects.map((project) => (
            <Link
              href={`#/projetos/${project.slug}`}
              className={`project-card project-scene scene-${project.kind} reveal`}
              key={project.slug}
              aria-label={`Conhecer ${project.name}`}
            >
              <ProjectArt project={project} />
              <div className="project-title">
                <div>
                  <Text className="eyebrow">PROJETO / {project.index}</Text>
                  <Text as="h3">{project.name}</Text>
                </div>
                <span className="circle-arrow">
                  <Arrow />
                </span>
              </div>
              <Text className="project-status">
                Estudo de caso em preparação
              </Text>
              <span className="project-explore">
                EXPLORAR PROJETO <Arrow />
              </span>
            </Link>
          ))}
        </div>
        <div className="projects-footnote">
          <span className="blue">↳</span> Capas conceituais autorais. A
          documentação de cada projeto está sendo preparada.
        </div>
      </section>
      <section className="about-section" id="sobre">
        <div className="container section">
          <SectionHeading
            number="02"
            label="ALÉM DO CÓDIGO"
            title="Não é só sobre tecnologia."
          />
          <div className="about-layout">
            <div className="about-statement">
              <Text as="h3">
                É sobre o que
                <br />
                podemos{" "}
                <span>
                  construir
                  <br />
                  com ela.
                </span>
              </Text>
              <div className="about-signature">
                Jonathan Otiniel <span>↗</span>
              </div>
            </div>
            <div className="about-copy">
              <Text>
                Sou Jonathan. Minha trajetória começa no Desenvolvimento de
                Sistemas, com formação técnica pela Etec, e continua em direção
                ao Full Stack.
              </Text>
              <Text>
                Este espaço acompanha essa evolução: ideias, projetos e o
                aprendizado que conecta cada etapa. Sem atalhos. Um passo de
                cada vez.
              </Text>
              <div className="journey">
                {portfolio.journey.map(([label, title, description], i) => (
                  <div className="journey-item" key={label}>
                    <span className="journey-number">0{i + 1}</span>
                    <div>
                      <Text className="eyebrow">{label}</Text>
                      <Text as="h3">{title}</Text>
                      <Text>{description}</Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section container" id="stack">
        <SectionHeading
          number="03"
          label="DIREÇÃO & APRENDIZADO"
          title="Conectar as camadas."
        />
        <div className="stack-layout">
          <Text className="section-note">
            O Full Stack como direção, não como ponto de chegada. Um olhar para
            a aplicação inteira — da experiência à estrutura.
          </Text>
          <div className="stack-list">
            {[
              ["01", "Interface", "O que as pessoas veem e com que interagem."],
              [
                "02",
                "Lógica",
                "As regras e os fluxos por trás da experiência.",
              ],
              ["03", "Dados", "A informação que conecta o sistema."],
            ].map(([n, title, copy]) => (
              <div className="stack-row" key={n}>
                <span className="eyebrow blue">{n}</span>
                <Text as="h3">{title}</Text>
                <Text>{copy}</Text>
                <span className="stack-plus">+</span>
              </div>
            ))}
            <Text className="stack-disclaimer">
              Focos de aprendizagem. Tecnologias e aplicações práticas serão
              documentadas nos estudos de caso.
            </Text>
          </div>
        </div>
      </section>
      <section className="method-section">
        <div className="section container">
          <SectionHeading
            number="04"
            label="UM NORTE PARA CONSTRUIR"
            title="Antes de escrever, entender."
          />
          <div className="method-grid">
            {[
              [
                "Compreender",
                "Fazer as perguntas certas e olhar para o problema antes da solução.",
              ],
              [
                "Estruturar",
                "Organizar ideias, relações e o caminho a seguir.",
              ],
              [
                "Desenvolver",
                "Transformar a intenção em pequenas partes que se conectam.",
              ],
              [
                "Revisar",
                "Voltar ao que foi feito. Questionar, ajustar e evoluir.",
              ],
            ].map(([title, copy], i) => (
              <div className="method-item reveal" key={title}>
                <span className="method-number">
                  0{i + 1}
                  <span>↗</span>
                </span>
                <Text as="h3">{title}</Text>
                <Text>{copy}</Text>
              </div>
            ))}
          </div>
          <Text className="method-note">
            Uma proposta de abordagem para os próximos desafios.
          </Text>
        </div>
      </section>
      <section className="contact-section container section" id="contato">
        <Text className="eyebrow">
          <span className="blue">05 /</span> PRÓXIMAS CONEXÕES
        </Text>
        <div className="contact-layout">
          <Text as="h2">
            Toda boa ideia
            <br />
            começa com uma
            <br />
            <span>conversa.</span>
          </Text>
          <div className="contact-copy">
            <span className="contact-star" aria-hidden="true">
              ↗
            </span>
            <Text>
              Este portfólio também está em evolução. Os canais de contato serão
              adicionados em breve.
            </Text>
            <Link href="#/curriculo/contatos" className="text-link">
              Currículo & contatos <Arrow />
            </Link>
            <Text className="eyebrow muted">
              POR ENQUANTO, CONTINUE EXPLORANDO.
            </Text>
          </div>
        </div>
      </section>
    </>
  )
}

function ProjectPage({ project }: { project: Project }) {
  const next = projects[(projects.indexOf(project) + 1) % projects.length]
  return (
    <div className="container project-page">
      <Link href="#projetos" className="text-link back-link">
        ← Voltar aos projetos
      </Link>
      <Text className="eyebrow blue">
        PROJETO {project.index} / ESTUDO DE CASO
      </Text>
      <Text as="h1">
        {project.name}
        <span className="blue">.</span>
      </Text>
      <div className="case-cover">
        <ProjectArt project={project} />
      </div>
      <div className="case-content">
        <Text as="h2">
          Cada projeto tem
          <br />
          uma história.
        </Text>
        <div>
          <Text className="eyebrow blue">DOCUMENTAÇÃO EM PREPARAÇÃO</Text>
          <Text>
            O estudo de caso de {project.name} será apresentado aqui, com
            contexto, decisões de desenvolvimento e aprendizados.
          </Text>
          <Text>
            Os detalhes técnicos, minha participação e o estado atual ainda não
            estão documentados neste portfólio. Para manter uma apresentação
            fiel, funcionalidades, tecnologias e resultados não são antecipados.
          </Text>
          <Text className="case-note">
            A capa é uma exploração gráfica, não uma tela do produto.
          </Text>
        </div>
      </div>
      <Link className="next-project" href={`#/projetos/${next.slug}`}>
        <div>
          <Text className="eyebrow">PRÓXIMO PROJETO / {next.index}</Text>
          <Text as="h2">{next.name}</Text>
        </div>
        <Arrow />
      </Link>
    </div>
  )
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash || "#/")
  const [paused, setPaused] = useState(false)
  const mainRef = useRef<HTMLElement>(null)
  const first = useRef(true)
  const pagePath = hash.startsWith("#/") ? hash : "#/"
  const project = projects.find((p) => pagePath === `#/projetos/${p.slug}`)
  const isResume =
    pagePath === "#/curriculo" || pagePath === "#/curriculo/contatos"
  const notFound = pagePath !== "#/" && !project && !isResume
  useEffect(() => {
    document.documentElement.classList.toggle("motion-paused", paused)
    return () => document.documentElement.classList.remove("motion-paused")
  }, [paused])
  useEffect(() => {
    const update = () => setHash(window.location.hash || "#/")
    window.addEventListener("hashchange", update)
    return () => window.removeEventListener("hashchange", update)
  }, [])
  useEffect(() => {
    document.title = project
      ? `${project.name} — Jonathan Otiniel`
      : isResume
        ? "Currículo & contatos — Jonathan Otiniel"
        : "Jonathan Otiniel — Desenvolvimento em evolução"
    const section =
      hash === "#/curriculo/contatos"
        ? document.getElementById("curriculo-contatos")
        : !hash.startsWith("#/")
          ? document.getElementById(hash.slice(1))
          : null
    if (section)
      section.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      })
    else {
      window.scrollTo(0, 0)
    }
    if (!first.current) {
      const target = section || mainRef.current
      target?.setAttribute("tabindex", "-1")
      target?.focus({ preventScroll: true })
    }
    first.current = false
    if (!("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.08 },
    )
    document
      .querySelectorAll(
        ".reveal, .section-heading, .about-statement, .journey-item, .stack-row, .contact-layout, .resume-block",
      )
      .forEach((el) => {
        el.classList.add("will-reveal")
        observer.observe(el)
      })
    return () => observer.disconnect()
  }, [hash, project, isResume])
  return (
    <>
      <Link href="#main" className="skip-link">
        Pular para o conteúdo
      </Link>
      <FuturisticCursor />
      <SceneMotion route={hash} paused={paused} />
      <Header
        hash={hash}
        paused={paused}
        onToggleMotion={() => setPaused(!paused)}
      />
      <main id="main" ref={mainRef} tabIndex={-1}>
        {project ? (
          <ProjectPage project={project} />
        ) : isResume ? (
          <ResumePage />
        ) : notFound ? (
          <section className="container not-found">
            <Text className="eyebrow blue">404 / FORA DE ÓRBITA</Text>
            <Text as="h1">
              Este caminho
              <br />
              não existe.
            </Text>
            <Link href="#/" className="button button-primary">
              Voltar ao início <Arrow />
            </Link>
          </section>
        ) : (
          <Home />
        )}
      </main>
      <footer className="footer container">
        <Link href="#/" className="footer-logo">
          jo<span>∗</span>
        </Link>
        <Text>
          Jonathan Otiniel{" "}
          <span className="muted">/ Em constante evolução.</span>
        </Text>
        <Link href="#/" className="scroll-link">
          VOLTAR AO TOPO <span>↑</span>
        </Link>
      </footer>
    </>
  )
}