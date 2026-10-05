import { Link } from 'react-router-dom'

// Cabeçalho simples das páginas internas (breadcrumb + título no estilo "PROJECT Lorum")
export default function PageIntro({ kicker, title, crumbs = [] }) {
  return (
    <section className="page-intro">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Main</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <i>/</i>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="page-intro__title">
          {kicker && <span className="hero__kicker">{kicker}</span>}
          <span className="hero__name">{title}</span>
        </h1>
      </div>
    </section>
  )
}
