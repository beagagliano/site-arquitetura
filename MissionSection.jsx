import SectionTitle from './SectionTitle.jsx'
import { missionItems } from '../data/site.js'

export default function MissionSection() {
  return (
    <section className="mission">
      <div className="container">
        <SectionTitle>Main Focus/Mission Statement</SectionTitle>
        <div className="mission__grid">
          {missionItems.map((item) => (
            <div key={item.number} className="mission__item">
              <span className="mission__number" aria-hidden="true">
                {item.number}
              </span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
