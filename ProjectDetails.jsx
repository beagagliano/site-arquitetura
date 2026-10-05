import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button.jsx'
import { ArrowLeft, ArrowRight } from '../components/Icons.jsx'
import { projects, getProjectById } from '../data/projects.js'

// Rota dinâmica: /projetos/:id
export default function ProjectDetails() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <section className="section not-found">
        <div className="container">
          <h1 className="page-intro__title">
            <span className="hero__kicker">Project not found</span>
            <span className="hero__name">“{id}”</span>
          </h1>
          <p>We could not find this project. It may have been removed or the address is wrong.</p>
          <Button to="/projetos" variant="dark">
            All projects
          </Button>
        </div>
      </section>
    )
  }

  const index = projects.findIndex((p) => p.id === project.id)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <section className="hero hero--detail">
        <div className="container hero__grid">
          <div className="hero__text">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Main</Link>
              <i>/</i>
              <Link to="/projetos">Projects</Link>
            </nav>

            <h1 className="hero__title">
              <span className="hero__kicker">Project</span>
              <span className="hero__name">{project.name}</span>
            </h1>

            <dl className="detail__meta">
              <div>
                <dt>Category</dt>
                <dd>{project.category}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{project.location}</dd>
              </div>
            </dl>

            <p className="detail__text">{project.description}</p>

            <div className="hero__controls">
              <Link to={`/projetos/${prev.id}`} className="icon-btn" aria-label={`Previous: ${prev.name}`}>
                <ArrowLeft />
              </Link>
              <Link to={`/projetos/${next.id}`} className="icon-btn" aria-label={`Next: ${next.name}`}>
                <ArrowRight />
              </Link>
              <span className="hero__line" aria-hidden="true" />
            </div>
          </div>

          <div className="hero__media">
            <img src={project.cover} alt={project.name} />
          </div>
        </div>
      </section>
    </>
  )
}
