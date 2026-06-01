import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const testimonials = [
  {
    text: 'An evening at Le Prestige is not a dinner — it is a journey through the finest that human artistry can offer at the table.',
    name: 'Sophie L.',
    origin: 'Paris, France',
    initial: 'S'
  },
  {
    text: 'The tasting menu was a revelation. Each course more extraordinary than the last. I left feeling I had witnessed something truly rare.',
    name: 'James R.',
    origin: 'London, UK',
    initial: 'J'
  },
  {
    text: 'From the moment we arrived, we felt as if we were the only guests. The service is extraordinary — invisible yet ever-present.',
    name: 'Amira K.',
    origin: 'Dubai, UAE',
    initial: 'A'
  },
]

export default function Contact() {
  const ref = useReveal()

  const [reviews, setReviews] = useState(testimonials)

  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    text: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.origin || !formData.text) return

    const newReview = {
      text: formData.text,
      name: formData.name,
      origin: formData.origin,
      initial: formData.name.charAt(0).toUpperCase()
    }

    setReviews([...reviews, newReview])

    setFormData({
      name: '',
      origin: '',
      text: ''
    })
  }

  return (
    <section
      id="contact"
      className="bg-dark1 py-5"
      style={{ background: '#080808' , paddingTop: '100px', paddingBottom: '100px' }}
    >
      <div className="container py-5">

        <div className="text-center mb-5">
          <p ref={ref} className="reveal section-eyebrow mb-2">
            Guest Voices
          </p>

          <h2
            ref={ref}
            className="reveal delay-1 section-title mb-3"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            What They Say
          </h2>

          <span
            ref={ref}
            className="reveal delay-2 gold-divider mx-auto d-block"
          />
        </div>

        <div className="mb-5">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control-dark"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control-dark"
                  placeholder="Country"
                  value={formData.origin}
                  onChange={(e) =>
                    setFormData({ ...formData, origin: e.target.value })
                  }
                />
              </div>

              <div className="col-12">
                <textarea
                  rows="4"
                  className="form-control-dark"
                  placeholder="Write your review..."
                  value={formData.text}
                  onChange={(e) =>
                    setFormData({ ...formData, text: e.target.value })
                  }
                />
              </div>

              <div className="col-12 text-center">
                <button type="submit" className="btn btn-warning">
                  Add Review
                </button>
              </div>

            </div>
          </form>
        </div>
        <div className="row g-4">
          {reviews.map(({ text, name, origin, initial }, i) => (
            <div className="col-12 col-md-4" key={name + i}>
              <div
                ref={ref}
                className={`reveal delay-${(i % 3) + 1} test-card p-4 p-xl-5`}
              >
                <div
                  className="mb-3"
                  style={{
                    color: 'var(--gold)',
                    letterSpacing: '0.3em',
                    fontSize: '0.85rem'
                  }}
                >
                  ★★★★★
                </div>

                <p
                  className="font-display mb-4"
                  style={{
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '1.05rem',
                    lineHeight: 1.75,
                    color: 'rgba(240,237,232,0.8)'
                  }}
                >
                  "{text}"
                </p>

                <div className="d-flex align-items-center gap-3">
                  <div className="test-avatar">{initial}</div>

                  <div>
                    <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                      {name}
                    </div>

                    <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: 2 }}>
                      {origin}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}