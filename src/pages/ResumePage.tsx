import { Arrow, Link, Text } from "../components/ui"
import { portfolio } from "../data/portfolio"

export default function ResumePage() {
  return (
    <section className="container resume-page">
      <Link href="#/" className="text-link back-link">
        ← Voltar ao portfólio
      </Link>
      <div className="resume-heading">
        <div>
          <Text className="eyebrow blue">PERFIL PROFISSIONAL / CURRÍCULO</Text>
          <Text as="h1">
            Jonathan
            <br />
            Otiniel<span className="blue">.</span>
          </Text>
        </div>
        <div className="resume-actions">
          {portfolio.resumePdf ? (
            <>
              <Link
                className="button button-primary"
                href={portfolio.resumePdf}
                target="_blank"
                rel="noreferrer"
              >
                Abrir PDF <Arrow />
              </Link>
              <Link
                className="text-link"
                href={portfolio.resumePdf}
                download="Jonathan-Otiniel-Curriculo.pdf"
              >
                Baixar currículo PDF <Arrow direction="down" />
              </Link>
            </>
          ) : (
            <Text className="pdf-pending">
              PDF ainda não disponibilizado.
              <br />
              Você pode consultar o perfil abaixo.
            </Text>
          )}
          <Link className="text-link" href="#/curriculo/contatos">
            Acessar contatos <Arrow direction="down" />
          </Link>
        </div>
      </div>
      <div className="resume-grid">
        <div className="resume-block">
          <Text className="eyebrow blue">01 / APRESENTAÇÃO</Text>
          <Text as="h2">Em evolução constante.</Text>
          <Text>{portfolio.introduction}</Text>
        </div>
        <div className="resume-block">
          <Text className="eyebrow blue">02 / FORMAÇÃO</Text>
          <Text as="h2">Desenvolvimento de Sistemas</Text>
          <Text>Técnico em Desenvolvimento de Sistemas pela Etec.</Text>
          <Text className="muted">Direção de desenvolvimento: Full Stack.</Text>
          <Text as="h3">Programador de Computadores</Text>
          <Text>Certificado emitido pela Etec.</Text>
        </div>
      </div>
      <div className="resume-contacts" id="curriculo-contatos" tabIndex={-1}>
        <Text className="eyebrow blue">03 / CONTATOS</Text>
        <Text as="h2">Vamos nos conectar.</Text>
        {portfolio.contacts.length ? (
          <div className="contact-channels">
            {portfolio.contacts.map((contact) => (
              <Link
                className="button contact-channel"
                key={contact.href}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
              >
                {contact.label}
                <Arrow />
              </Link>
            ))}
          </div>
        ) : (
          <Text className="muted">
            Os canais de contato serão publicados assim que forem informados.
          </Text>
        )}
        <Link
          className="text-link"
          href={portfolio.repository}
          target="_blank"
          rel="noreferrer"
        >
          Repositório de referência <Arrow />
        </Link>
      </div>
    </section>
  )
}