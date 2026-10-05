import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <h1 className="page-intro__title">
          <span className="hero__kicker">Error 404</span>
          <span className="hero__name">Page not found</span>
        </h1>
        <p>The page you are looking for does not exist.</p>
        <Button to="/" variant="dark">
          Back to main
        </Button>
      </div>
    </section>
  )
}
