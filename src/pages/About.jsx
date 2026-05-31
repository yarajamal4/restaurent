import chefImg from '../assets/images/chef.jpeg'
import useReveal from '../hooks/useReveal'

const stats = [
  { num: '37+', label: 'Years of Excellence' },
  { num: '3',   label: 'Michelin Stars' },
  { num: '12',  label: 'Awards Won' },
  { num: '48',  label: 'Exclusive Seats' },
]

const experiences = [
  { icon: 'bi-cup-hot-fill',        title: 'Wine Cellar',  desc: 'Over 800 labels across 5 continents, curated by our Sommelier for the perfect pairing.' },
  { icon: 'bi-fire',                title: "Chef's Table", desc: 'An intimate 6-seat experience set at the heart of our open kitchen — pure theatre.' },
  { icon: 'bi-music-note-beamed',   title: 'Live Music',   desc: 'Friday and Saturday evenings feature an intimate classical jazz quartet.' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="bg-dark1 py-5" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container py-5">
        <div className="row align-items-center g-5 mb-5 pb-5">
          <div className="col-12 col-lg-5">
            <div ref={ref} className="reveal-left position-relative">
              <img src={chefImg} alt="Chef" style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
          <div className="col-12 col-lg-7 ps-lg-5">
            <p ref={ref} className="reveal section-eyebrow mb-2">Our Story</p>
            <h2 ref={ref} className="reveal delay-1 section-title mb-3" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              A Legacy of<br /><em style={{ color: 'var(--gold)' }}>Excellence</em>
            </h2>
            <span ref={ref} className="reveal delay-2 gold-divider mb-4 d-block" />
            <p ref={ref} className="reveal delay-2 mb-3"
              style={{ fontSize: '0.85rem', color: 'rgba(240,237,232,0.6)', lineHeight: 2 }}>
              Founded in 1987, Le Prestige has been a sanctuary of fine dining for 
              those who believe that a great meal is not merely sustenance 
              — it is an experience that transcends time.
            </p>

            <p ref={ref} className="reveal delay-3 mb-5"
              style={{ fontSize: '0.85rem', color: 'rgba(240,237,232,0.6)', lineHeight: 2 }}>
              Our Executive Chef, trained in the great kitchens of Paris and Lyon, 
              brings four decades of mastery to every plate —
               marrying classical French technique with the finest seasonal 
               ingredients sourced locally from Lebanese terroir and from around the world.
            </p>
            <div ref={ref} className="reveal delay-3 row row-cols-2 g-4">
              {stats.map(({ num, label }) => (
                <div className="col" key={label}>
                  <div className="stat-card">
                    <div className="stat-number">{num}</div>
                    <div className="section-eyebrow mt-1" style={{ fontSize: '0.6rem' }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row g-4 mt-3">
          {experiences.map(({ icon, title, desc }, i) => (
            <div className="col-12 col-md-4" key={title}>
              <div ref={ref} className={`reveal delay-${i + 1} exp-card p-4 p-xl-5 text-center h-100`}>
                <div className="exp-icon-wrap mx-auto mb-4">
                  <i className={`bi ${icon}`} />
                </div>
                <h4 className="font-display mb-3" style={{ fontWeight: 300, fontSize: '1.4rem' }}>{title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.9 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
