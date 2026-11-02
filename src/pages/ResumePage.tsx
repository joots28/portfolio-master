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
          <Text className="eyebrow blue">PERFIL PROFISSIONAL / CURRÍCULOS</Text>
          <Text as="h1">
            Jonathan
            <br />
            Otiniel<span className="blue">.</span>
          </Text>
        </div>
      </div>

      <div className="resume-grid">
        <section className="resume-block">
          <Text className="eyebrow blue">01 / BRASIL</Text>
          <Text as="h2">Currículo profissional</Text>
          <Text>Versão em português para oportunidades no Brasil.</Text>
          <div className="resume-actions">
            <Link className="button button-primary" href={portfolio.resumePdf} target="_blank" rel="noreferrer">
              Abrir currículo brasileiro <Arrow />
            </Link>
            <Link className="text-link" href={portfolio.resumePdf} download="Jonathan-Otiniel-Curriculo.pdf">
              Baixar PDF brasileiro <Arrow direction="down" />
            </Link>
          </div>
        </section>

        <section className="resume-block">
          <Text className="eyebrow blue">02 / INTERNATIONAL</Text>
          <Text as="h2">U.S. Resume</Text>
          <Text>English-language, ATS-friendly version for international opportunities.</Text>
          <div className="resume-actions">
            <Link className="button button-primary" href={portfolio.usResumePdf} target="_blank" rel="noreferrer">
              Open U.S. Resume <Arrow />
            </Link>
            <Link className="text-link" href={portfolio.usResumePdf} download="Jonathan-Otiniel-US-Resume.pdf">
              Download U.S. Resume <Arrow direction="down" />
            </Link>
          </div>
        </section>
      </div>

      <div className="resume-contacts" id="curriculo-contatos" tabIndex={-1}>
        <Text className="eyebrow blue">03 / CONTATOS</Text>
        <Text as="h2">Vamos nos conectar.</Text>
        {portfolio.contacts.length ? (
          <div className="contact-channels">
            {portfolio.contacts.map((contact) => (
              <Link className="button contact-channel" key={contact.href} href={contact.href} target="_blank" rel="noreferrer">
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
        <Link className="text-link" href={portfolio.repository} target="_blank" rel="noreferrer">
          Repositório de referência <Arrow />
        </Link>
      </div>
    </section>
  )
}
