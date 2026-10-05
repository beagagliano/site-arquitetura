import Button from './Button.jsx'
import SectionTitle from './SectionTitle.jsx'
import { aboutImages } from '../data/projects.js'
import { aboutText } from '../data/site.js'

// Painel cinza claro: colagem de fotos + texto "About"
export default function AboutSection({ readMore = true }) {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__panel">
          <div className="about__collage">
            <div className="about__col">
              <img className="about__img about__img--1" src={aboutImages.one} alt="Glass facade" />
              <img className="about__img about__img--2" src={aboutImages.two} alt="Architectural lines" />
            </div>
            <div className="about__col about__col--offset">
              <img className="about__img about__img--3" src={aboutImages.three} alt="Glass tower corner" />
            </div>
          </div>

          <div className="about__text">
            <SectionTitle>About</SectionTitle>
            <p>{aboutText}</p>
            {readMore && (
              <Button to="/sobre" variant="light" className="about__btn">
                Read more
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
