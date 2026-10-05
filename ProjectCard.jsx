import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link to={`/projetos/${project.id}`} className="project-card__link">
        <div className="project-card__media">
          <img src={project.image} alt={project.name} loading="lazy" />
        </div>
        <div className="project-card__body">
          <h3>{project.name}</h3>
          <p>
            {project.category} · {project.year}
          </p>
          <span className="project-card__more">
            View project <ArrowRight />
          </span>
        </div>
      </Link>
    </article>
  )
}
