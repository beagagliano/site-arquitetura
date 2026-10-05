import PageIntro from '../components/PageIntro.jsx'
import { certifications } from '../data/site.js'

export default function Certifications() {
  return (
    <>
      <PageIntro kicker="Our" title="Certifications" crumbs={[{ label: 'Certifications' }]} />
      <section className="mission">
        <div className="container">
          <div className="mission__grid">
            {certifications.map((c, i) => (
              <div key={c.title} className="mission__item">
                <span className="mission__number" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="cert-title">{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
