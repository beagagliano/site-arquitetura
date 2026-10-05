import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { PinIcon, PhoneIcon, MailIcon, socialIcons } from './Icons.jsx'
import { navLinks, contactInfo, social } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" aria-label="Digital Project — home">
            <Logo className="logo--footer" />
          </Link>
        </div>

        <div>
          <h4 className="footer__title">Information</h4>
          <ul className="footer__list">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer__title">Contacts</h4>
          <ul className="footer__contacts">
            <li>
              <PinIcon />
              <span>
                {contactInfo.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li>
              <PhoneIcon />
              <span>{contactInfo.phone}</span>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer__title">Social Media</h4>
          <ul className="footer__social">
            {social.map((s) => {
              const Icon = socialIcons[s.name]
              return (
                <li key={s.name}>
                  <a href={s.href} aria-label={s.name}>
                    <Icon />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">© 2021 All Rights Reserved</div>
    </footer>
  )
}
