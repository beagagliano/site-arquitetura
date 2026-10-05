import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import SectionTitle from './SectionTitle.jsx'
import { ArrowRight } from './Icons.jsx'
import { projects } from '../data/projects.js'

// "Our Projects": mosaico de 5 fotos (2 em cima, 3 embaixo) + botão "All projects"
export default function ProjectsMosaic({ showAllButton = true, title = 'Our Projects' }) {
  const items = projects.slice(0, 5)

  return (
    <section className="projects" id="projects">
      <div className="container">
        <SectionTitle>{title}</SectionTitle>

        <div className="mosaic">
          {items.map((project, i) => (
            <Link
              key={project.id}
              to={`/projetos/${project.id}`}
              className={`mosaic__tile mosaic__tile--${i + 1} ${i === 0 ? 'is-featured' : ''}`}
            >
              <img src={project.image} alt={project.name} loading="lazy" />
              <div className="mosaic__overlay">
                <h3>{project.name}</h3>
                <span className="mosaic__more">
                  View more <ArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {showAllButton && (
          <div className="projects__action">
            <Button to="/projetos" variant="dark">
              All projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
