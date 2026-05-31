import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const times = ['6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM']
const occasions = ['Dinner','Anniversary','Birthday','Business Meal','Proposal','Other']

export default function Reservation() {
  const ref = useReveal()
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    date: '', time: '7:00 PM', guests: '2', occasion: 'Dinner', notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="reservation" className="py-5" style={{ background: 'var(--black)', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container py-5">

        <div className="row g-5 align-items-start">

          <div className="col-12 col-lg-5">
            <p ref={ref} className="reveal section-eyebrow mb-2">Join Us</p>
            <h2 ref={ref} className="reveal delay-1 section-title mb-3" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              Reserve<br /><em style={{ color: 'var(--gold)' }}>Your Table</em>
            </h2>
            <span ref={ref} className="reveal delay-2 gold-divider mb-4 d-block" />
            <p ref={ref} className="reveal delay-2 mb-5"
              style={{ fontSize: '0.85rem', color: 'rgba(240,237,232,0.55)', lineHeight: 2 }}>
              We accommodate a maximum of 48 guests per evening to ensure an intimate,
              exceptional experience for each and every visit.
            </p>

            <div ref={ref} className="reveal delay-3 d-flex flex-column gap-4">
              {[
                { icon: 'bi-clock',         label: 'Opening Hours',  val: 'Tue–Sun  ·  6:00 PM – 11:00 PM' },
                { icon: 'bi-person-check',  label: 'Dress Code',     val: 'Smart Elegant — Jacket Required' },
                { icon: 'bi-telephone',     label: 'Reservations',   val: '+961 70 777 888' },
                { icon: 'bi-geo-alt',       label: 'Address',        val: 'Monnot Street, Achrafieh, Beirut, Lebanon' },
              ].map(({ icon, label, val }) => (
                <div className="d-flex align-items-center gap-3" key={label}>
                  <div style={{
                    width: 44, height: 44, flexShrink: 0,
                    border: '1px solid rgba(201,168,76,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--gold)', fontSize: '1rem'
                  }}>
                    <i className={`bi ${icon}`} />
                  </div>
                  <div className="contact-info-item">
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase' }}>{label}</div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(240,237,232,0.65)', marginTop: 2 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div ref={ref} className="reveal delay-2 p-4 p-md-5" style={{ background: 'var(--dark2)', border: '1px solid rgba(201,168,76,0.1)' }}>
              <h3 className="font-display mb-4" style={{ fontWeight: 300, fontSize: '1.7rem' }}>
                Make a Reservation
              </h3>

              {submitted && (
                <div className="mb-4 p-3" style={{ border: '1px solid var(--gold)', background: 'rgba(201,168,76,0.06)', fontSize: '0.8rem', color: 'var(--gold)', letterSpacing: '0.1em' }}>
                  <i className="bi bi-check-circle me-2" />
                  Your reservation has been received. We will confirm shortly.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-12 col-sm-6">
                    <label className="form-label-custom">First Name</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange}
                      className="form-control form-control-dark" placeholder="Yara" required />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label-custom">Last Name</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange}
                      className="form-control form-control-dark" placeholder="Jamal" required />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-12 col-sm-6">
                    <label className="form-label-custom">Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      className="form-control form-control-dark" placeholder="Yara@example.com" required />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label-custom">Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                      className="form-control form-control-dark" placeholder="+961 70 777 888" />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-12 col-sm-6">
                    <label className="form-label-custom">Date</label>
                    <input name="date" type="date" value={form.date} onChange={handleChange}
                      className="form-control form-control-dark" required
                      style={{ colorScheme: 'dark' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label-custom">Time</label>
                    <select name="time" value={form.time} onChange={handleChange}
                      className="form-select form-select-dark">
                      {times.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-12 col-sm-6">
                    <label className="form-label-custom">Guests</label>
                    <select name="guests" value={form.guests} onChange={handleChange}
                      className="form-select form-select-dark">
                      {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n===1?'Guest':'Guests'}</option>)}
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label-custom">Occasion</label>
                    <select name="occasion" value={form.occasion} onChange={handleChange}
                      className="form-select form-select-dark">
                      {occasions.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label-custom">Special Requests</label>
                  <textarea name="notes" value={form.notes} onChange={handleChange}
                    className="form-control form-control-dark" rows={3}
                    placeholder="Dietary requirements, allergies, celebrations..." />
                </div>

                <button type="submit" className="btn-gold w-100">
                  <span>Confirm Reservation</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
