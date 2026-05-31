import useReveal from '../hooks/useReveal'
import dining   from '../assets/images/dinning.jpeg'
import kitchen  from '../assets/images/Kitchen.jpeg'
import dessert  from '../assets/images/disert planning.jpeg'
import dinning from '../assets/gallery/dinning.jpeg'
import wine from '../assets/gallery/wine.jpeg'
import drinks from '../assets/gallery/drinks.jpeg'

const photos = [
  { src: dining,  alt: 'Main Dining Room', height: '300px', col: 'col-12 col-md-4' },
  { src: kitchen, alt: 'Chef at Work',     height: '300px', col: 'col-12 col-sm-4' },
  { src: dessert, alt: 'Dessert Plating',  height: '300px', col: 'col-12 col-sm-4' },
  { src: dinning , alt: 'Main Dining',  height: '300px', col: 'col-12 col-sm-4' },
  { src: wine , alt: 'Wine',  height: '300px', col: 'col-12 col-sm-4' },
  { src: drinks , alt: 'Drink',  height: '300px', col: 'col-12 col-sm-4' },
]

export default function Gallery() {
  const ref = useReveal()

  return (
    <section id="gallery" className="bg-dark1 py-5" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container py-5">

        
        <div className="text-center mb-5">
          <p ref={ref} className="reveal section-eyebrow mb-2">Atmosphere</p>
          <h2 ref={ref} className="reveal delay-1 section-title mb-3"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Gallery
          </h2>
          <span ref={ref} className="reveal delay-2 gold-divider mx-auto d-block" />
        </div>
        <div className="row g-3">
          {photos.map(({ src, alt, height, col }, i) => (
            <div className={col} key={alt}>
              <div ref={ref} className={`reveal delay-${(i % 3) + 1} gallery-item`} style={{ height }}>
                <img
                  src={src}
                  alt={alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div className="gallery-overlay">
                  <i className="bi bi-zoom-in" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
