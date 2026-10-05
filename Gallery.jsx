import { useCallback, useEffect, useState } from 'react'
import PageIntro from '../components/PageIntro.jsx'
import { ArrowLeft, ArrowRight } from '../components/Icons.jsx'
import { galleryImages } from '../data/projects.js'

export default function Gallery() {
  const [current, setCurrent] = useState(null) // índice da foto aberta no lightbox
  const total = galleryImages.length

  const close = useCallback(() => setCurrent(null), [])
  const step = useCallback((d) => setCurrent((c) => (c + d + total) % total), [total])

  // Atalhos de teclado do lightbox
  useEffect(() => {
    if (current === null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') step(-1)
      if (e.key === 'ArrowRight') step(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, close, step])

  return (
    <>
      <PageIntro kicker="Photo" title="Gallery" crumbs={[{ label: 'Gallery' }]} />
      <section className="section">
        <div className="container">
          <div className="gallery">
            {galleryImages.map((img, i) => (
              <button key={img.src} className="gallery__item" onClick={() => setCurrent(i)}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {current !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={close}>
          <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1) }}>
            <ArrowLeft />
          </button>
          <img
            src={galleryImages[current].src}
            alt={galleryImages[current].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox__nav lightbox__nav--next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1) }}>
            <ArrowRight />
          </button>
          <button className="lightbox__close" aria-label="Close" onClick={close}>
            ×
          </button>
        </div>
      )}
    </>
  )
}
