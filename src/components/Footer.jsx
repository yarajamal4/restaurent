export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-dark1 pt-5 pb-4">
      <div className="container pt-4">
        <div className="row g-5 mb-5">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="footer-logo mb-3">Le Prestige</div>
            <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 2 }}>
              A sanctuary of fine dining since 1987.<br />
              Three Michelin Stars. One unforgettable experience.
            </p>
            <div className="d-flex gap-3 mt-4">
              {['instagram', 'facebook', 'twitter-x'].map(s => (
                <a key={s} href="#"
                  style={{
                    width: 36, height: 36,
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--muted)', fontSize: '0.85rem', transition: 'all 0.3s',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='var(--gold)'; e.currentTarget.style.color='var(--gold)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(201,168,76,0.2)'; e.currentTarget.style.color='var(--muted)' }}
                >
                  <i className={`bi bi-${s}`} />
                </a>
              ))}
            </div>
          </div>
          <div className="col-6 col-sm-3 col-lg-2">
            <div className="section-eyebrow mb-3" style={{ fontSize: '0.6rem' }}>Navigation</div>
            <ul className="list-unstyled">
              {['home','about','menu','gallery','reservation','contact'].map(s => (
                <li key={s} className="mb-2">
                  <a href={`#${s}`} className="footer-link"
                    onClick={e => { e.preventDefault(); scrollTo(s) }}>
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-sm-3 col-lg-2">
            <div className="section-eyebrow mb-3" style={{ fontSize: '0.6rem' }}>Experience</div>
            <ul className="list-unstyled">
              {["Chef's Table","Private Dining","Wine Pairing","Event Catering","Gift Cards"].map(l => (
                <li key={l} className="mb-2">
                  <a href="#" className="footer-link">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-4">
            <div className="section-eyebrow mb-3" style={{ fontSize: '0.6rem' }}>Visit Us</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 2.2 }}>
              Monnot Street, Achrafieh<br />
              Beirut, Lebanon<br />
              +961 70 777 888<br />
              reservations@leprestige.com
            </div>
          </div>

        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '0.65rem', color: 'rgba(240,237,232,0.2)', letterSpacing: '0.15em', margin: 0 }}>
            © 2026 Le Prestige · All Rights Reserved
          </p>
          <p style={{ fontSize: '0.65rem', color: 'rgba(240,237,232,0.15)', letterSpacing: '0.2em', margin: '8px 0 0', textTransform: 'uppercase' }}>
            Crafted with Passion
          </p>
        </div>

      </div>
    </footer>
  )
}
