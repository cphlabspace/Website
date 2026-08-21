import { useMemo, useState, type FormEvent } from 'react'
import './App.css'

type Feature = {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '⚙️',
    title: 'Prototyping bench',
    description:
      'Electronics benches, 3D printers, and a CNC corner so an idea can become a working prototype the same afternoon.',
  },
  {
    icon: '🧪',
    title: 'Wet + dry lab',
    description:
      'Separated wet and dry zones with proper ventilation, storage, and safety gear for material and chemistry work.',
  },
  {
    icon: '🚀',
    title: 'Launch support',
    description:
      'Mentors, weekly demo nights, and a small-batch manufacturing network to help you take a product to market.',
  },
  {
    icon: '🤝',
    title: 'A real community',
    description:
      'Founders, researchers, and makers sharing one roof in central Copenhagen. Collaboration happens by accident here.',
  },
]

const stats: { value: string; label: string }[] = [
  { value: '120+', label: 'Active members' },
  { value: '18', label: 'Startups launched' },
  { value: '24/7', label: 'Studio access' },
  { value: '600m²', label: 'Of workshop space' },
]

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), [])
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.')
      setSubmitted(null)
      return
    }
    setError(null)
    setSubmitted(email.trim())
    setEmail('')
  }

  return (
    <div className="page">
      <div className="backdrop" aria-hidden="true" />

      <header className="nav">
        <a className="brand" href="#top">
          <span className="brand__mark" aria-hidden="true">
            ⌁
          </span>
          <span className="brand__name">CPH Lab Space</span>
        </a>
        <nav className="nav__links">
          <a href="#features">Space</a>
          <a href="#stats">Community</a>
          <a href="#waitlist">Join</a>
        </nav>
        <a className="btn btn--ghost nav__cta" href="#waitlist">
          Book a tour
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <p className="hero__eyebrow">Copenhagen · Nordvest</p>
          <h1 className="hero__title">
            Build. Prototype. <span className="hero__accent">Ship.</span>
          </h1>
          <p className="hero__subtitle">
            CPH Lab Space is a members&rsquo; studio and hardware lab where builders turn
            rough ideas into real, working things — surrounded by people doing the same.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#waitlist">
              Join the waitlist
            </a>
            <a className="btn btn--ghost" href="#features">
              Explore the space
            </a>
          </div>
        </section>

        <section id="stats" className="stats" aria-label="By the numbers">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat__value">{stat.value}</div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </section>

        <section id="features" className="features">
          <h2 className="section__title">Everything under one roof</h2>
          <p className="section__lead">
            One membership, the full stack of tools and people you need to go from sketch
            to shipped.
          </p>
          <div className="features__grid">
            {features.map((feature) => (
              <article className="card" key={feature.title}>
                <div className="card__icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="card__title">{feature.title}</h3>
                <p className="card__body">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="waitlist" className="waitlist">
          <div className="waitlist__panel">
            <h2 className="section__title">Get an invite</h2>
            <p className="section__lead">
              We onboard a small group of new members each month. Drop your email and
              we&rsquo;ll reach out with a tour slot.
            </p>

            <form className="waitlist__form" onSubmit={handleSubmit} noValidate>
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                className="waitlist__input"
                type="email"
                name="email"
                placeholder="you@studio.dev"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={error ? 'true' : 'false'}
              />
              <button className="btn btn--primary" type="submit">
                Request invite
              </button>
            </form>

            {error && (
              <p className="waitlist__message waitlist__message--error" role="alert">
                {error}
              </p>
            )}
            {submitted && (
              <p className="waitlist__message waitlist__message--success" role="status">
                You&rsquo;re on the list, <strong>{submitted}</strong>. Check your inbox
                soon!
              </p>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {year} CPH Lab Space</span>
        <span className="footer__dot" aria-hidden="true">
          ·
        </span>
        <span>Made in Copenhagen</span>
      </footer>
    </div>
  )
}
