import PageIntro from '../components/PageIntro.jsx'
import ContactSection from '../components/ContactSection.jsx'
import { PinIcon, PhoneIcon, MailIcon } from '../components/Icons.jsx'
import { contactInfo } from '../data/site.js'

export default function Contact() {
  return (
    <>
      <PageIntro kicker="Get in" title="Touch" crumbs={[{ label: 'Contacts' }]} />
      <ContactSection />

      <section className="section">
        <div className="container info-cards">
          <div className="info-card">
            <PinIcon />
            <p>
              {contactInfo.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
          <div className="info-card">
            <PhoneIcon />
            <p>{contactInfo.phone}</p>
          </div>
          <div className="info-card">
            <MailIcon />
            <p>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
