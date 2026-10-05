import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from './Icons.jsx'
import { heroSlides } from '../data/projects.js'

const pad = (n) => String(n).padStart(2, '0')

// Hero com carrossel "PROJECT Lorum" + contador 01 / 02
export default function Hero() {
  const [index, setIndex] = useState(0)
  const total = heroSlides.length
  const slide = heroSlides[index]

  const go = (step) => setIndex((index + step + total) % total)

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1 key={slide.name} className="hero__title">
            <span className="hero__kicker">Project</span>
            <span className="hero__name">{slide.name}</span>
          </h1>

          <div className="hero__controls">
            <button type="button" aria-label="Previous project" onClick={() => go(-1)}>
              <ArrowLeft />
            </button>
            <button type="button" aria-label="Next project" onClick={() => go(1)}>
              <ArrowRight />
            </button>
            <span className="hero__line" aria-hidden="true" />
          </div>

          <div className="hero__counter" aria-live="polite">
            <span>{pad(index + 1)}</span>
            <svg viewBox="0 0 40 40" aria-hidden="true">
              <line x1="4" y1="36" x2="36" y2="4" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span>{pad(total)}</span>
          </div>
        </div>

        <div className="hero__media">
          <img key={slide.image} src={slide.image} alt={`Project ${slide.name}`} />
          <Link to={`/projetos/${slide.projectId}`} className="hero__view">
            <span>View project</span>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
