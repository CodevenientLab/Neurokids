import { useEffect, useRef, useState } from 'react'
import logo from './logo.webp'
import playMobile from './play-mobile-640.webp'
import playMobileDense from './play-mobile-960.webp'
import playLarge from './play-1120.webp'
import playWide from './play-1920.webp'
import listenArt from './visit-art/listen.webp'
import playArt from './visit-art/play.webp'
import nextStepsArt from './visit-art/next-steps.webp'
import './styles.css'

const PHONE = '065 881 6605'
const PHONE_URL = 'tel:+27658816605'
const EMAIL = 'genesisneurokidscentre@gmail.com'
const WHATSAPP = '27685056811'

const locations = [
  {
    name: 'Netcare Park Lane Hospital',
    area: 'Parktown, Johannesburg',
    rooms: 'South Wing, First Floor',
    practice: 'Dr Pholo’s & Associates',
  },
  {
    name: 'Busamed Modderfontein Private Hospital',
    area: 'Modderfontein',
    rooms: 'Ground Floor',
    practice: 'Dr Pholo & Associates',
  },
]

const concerns = [
  ['Speech and language', 'Your child is taking longer to start talking or has difficulty understanding what people say.'],
  ['Social communication and play', 'You have questions about how your child plays, interacts or communicates, including possible autism.'],
  ['Attention and activity', 'Staying focused, sitting still or managing impulses is hard at home or at school, and you have questions about ADHD.'],
  ['Learning at school', 'Your child is finding schoolwork difficult or their teacher has raised concerns about their development.'],
  ['Toilet training', 'Your child is struggling to learn or keep up with toileting routines.'],
  ['Development after premature birth', 'You would like follow-up on your child’s development after an early birth.'],
]

const visitSteps = [
  {
    title: 'Tell us about your child',
    art: listenArt,
    text: 'Dr Thambe may ask about your child’s early years, what they enjoy and what you notice at home, at school or during play.',
  },
  {
    title: 'See how they play and learn',
    art: playArt,
    text: 'Depending on their age and what brought you in, your child might play with toys, look at pictures or try simple activities. This helps the doctor see how they communicate, move and learn.',
  },
  {
    title: 'Talk through what comes next',
    art: nextStepsArt,
    text: 'The doctor can explain what she noticed and talk through options with you. These might include ideas for home or school, a referral to another professional, or a follow-up.',
  },
]

const milestones = [
  ['12 months', ['Waves goodbye', 'Uses a special name for a parent', 'Pulls up to stand']],
  ['18 months', ['Tries at least three words besides names for parents', 'Walks independently', 'Imitates chores you do at home']],
  ['2 years', ['Puts at least two words together', 'Points to a picture in a book when asked', 'Kicks a ball']],
  ['3 years', ['Has a conversation with at least two back-and-forth exchanges', 'Copies a circle after you show them', 'Puts on some clothes independently']],
  ['4 years', ['Speaks in sentences of at least four words', 'Tells you about something that happened that day', 'Recalls words from a familiar song or story']],
]

const questions = [
  { title: 'What happens at the first visit?', text: 'You’ll talk about your child. The doctor may use play or simple activities to see how they’re developing.', href: '#first-visit', link: 'See the first-visit guide' },
  { title: 'Do we need a referral?', text: 'Tell the practice if you’re booking directly or were referred. Ask what they need when you enquire.' },
  { title: 'What will it cost?', text: 'Ask the practice for the fee, then check what your medical aid covers before you book.' },
]

function whatsappLink(location) {
  const locationNote = location ? ` My preferred location is ${location}.` : ''
  const message = `Hello, I’d like to ask about booking a developmental assessment.${locationNote} Could you let me know what appointments are available?`
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
}

function Brand() {
  return (
    <a className="brand" href="#top">
      <img src={logo} width="44" height="44" alt="" />
      <span>Genesis NeuroKids Centre<small>Developmental care services</small></span>
    </a>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY >= 56)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const closeOutside = (event) => {
      if (!menuRef.current.contains(event.target)) setMenuOpen(false)
    }
    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return
      event.preventDefault()
      setMenuOpen(false)
      triggerRef.current.focus()
    }

    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="wrap nav">
        <Brand />
        <div className="site-menu" ref={menuRef}>
          <button
            className="menu-trigger"
            type="button"
            ref={triggerRef}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-label">Menu</span>
            <span className="menu-icon" aria-hidden="true" />
          </button>
          <nav id="main-navigation" aria-label="Main navigation" hidden={!menuOpen}>
            <a href="#help" onClick={() => setMenuOpen(false)}>Assessments</a>
            <a href="#first-visit" onClick={() => setMenuOpen(false)}>First visit</a>
            <a href="#visit" onClick={() => setMenuOpen(false)}>Locations</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-content wrap">
        <div className="hero-copy">
          <p className="kicker">Developmental paediatrics in Johannesburg</p>
          <h1 id="hero-title">Understand how your child is developing</h1>
          <p className="lead">A developmental assessment with Dr N. A. Thambe helps you talk through concerns about speech, play or learning and discuss what support could help next.</p>
          <div className="actions">
            <a className="button" href={whatsappLink('')} target="_blank" rel="noopener noreferrer">Ask about an assessment on WhatsApp</a>
            <a className="text-link" href={PHONE_URL}>Call {PHONE}</a>
          </div>
        </div>
      </div>
      <picture className="hero-photo">
        <source
          media="(max-width: 650px)"
          srcSet={`${playMobile} 640w, ${playMobileDense} 960w`}
          sizes="100vw"
        />
        <img
          src={playLarge}
          srcSet={`${playLarge} 1120w, ${playWide} 1920w`}
          sizes="100vw"
          width="1120"
          height="804"
          fetchpriority="high"
          alt="A child’s hands exploring wooden blocks"
        />
      </picture>
    </section>
  )
}

function Concerns() {
  return (
    <section id="help" className="section wrap">
      <div className="section-intro">
        <h2>When to get in touch</h2>
        <p>You can book an assessment to discuss something you’ve noticed, or a concern raised by your child’s teacher.</p>
      </div>
      <dl className="concerns">
        {concerns.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}
      </dl>

    </section>
  )
}

function FirstVisit() {
  const stepsRef = useRef(null)
  const [entered, setEntered] = useState([])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const threshold = 0.65
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.intersectionRatio >= threshold)
      if (visible.length === 0) return

      visible.forEach(({ target }) => observer.unobserve(target))
      setEntered((previous) => [...previous, ...visible.map(({ target }) => target.dataset.step)])
    }, { threshold })

    for (const item of stepsRef.current.children) observer.observe(item)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="first-visit" className="section first-visit" aria-labelledby="first-visit-title">
      <div className="wrap">
        <div className="section-intro">
          <h2 id="first-visit-title">What happens at the first visit?</h2>
          <p>Here’s what a developmental assessment may look like. The activities depend on your child’s age and what you’d like help with.</p>
        </div>
        <ol className="visit-steps" role="list" ref={stepsRef}>
          {visitSteps.map(({ title, art, text }) => (
            <li key={title} data-step={title} data-entered={entered.includes(title)}>
              <div className="visit-art">
                <img src={art} width="480" height="255" alt="" loading="lazy" />
              </div>
              <div className="visit-step-copy">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="visit-notes">
          <div>
            <h3>For kids</h3>
            <p>You can tell us what you like doing. We might look at pictures or play together. You can ask questions, too.</p>
          </div>
          <div>
            <h3>For parents and carers</h3>
            <p>When you book, ask what to bring. A teacher’s notes or a previous assessment can help you describe what you’ve noticed.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Milestones() {
  const [index, setIndex] = useState(0)
  const [age, examples] = milestones[index]

  return (
    <section id="milestones" className="section milestone-section">
      <div className="wrap split">
        <div>
          <h2>Developmental milestones</h2>
          <p>Choose an age to see a few skills most children have by then. These examples come from the US Centers for Disease Control and Prevention and are intended as a guide for conversations about development.</p>
          <a className="text-link" href="https://www.cdc.gov/act-early/milestones/index.html">See the full CDC checklists</a>
        </div>
        <div className="milestone-panel">
          <label htmlFor="age">Choose an age</label>
          <select id="age" value={index} onChange={(event) => setIndex(Number(event.target.value))}>
            {milestones.map(([label], i) => <option key={label} value={i}>{label}</option>)}
          </select>
          <div aria-live="polite">
            <h3>By {age}</h3>
            <ul className="milestone-examples" key={age}>
              {examples.map((example) => <li key={example}>{example}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Doctor() {
  return (
    <section id="doctor" className="section wrap split doctor">
      <div>
        <p className="kicker">Meet the doctor</p>
        <h2>Dr N. A. Thambe</h2>
        <p className="lead">Specialist paediatrician and developmental paediatrician</p>
        <p>Developmental paediatrics looks at how children communicate, learn, move, play and manage everyday activities. Dr Thambe’s focus is on understanding where a child needs support and discussing next steps with the family.</p>
      </div>
      <div className="credentials">
        <h3>Qualifications</h3>
        <ul>
          <li>MBChB, DCH, FCPaed (SA)</li>
          <li>MMed (Wits)</li>
          <li>MSc in Neurodevelopment (Wits)</li>
          <li>Certificate in Developmental Paediatrics (SA)</li>
        </ul>
        <p>Practice number 1247638</p>
      </div>
    </section>
  )
}

function Locations() {
  return (
    <section id="visit" className="section locations-section">
      <div className="wrap">
        <div className="section-intro">
          <h2>Where to find us</h2>
          <p>Ask the practice about availability at the hospital that works for you.</p>
        </div>
        <div className="location-grid">
          {locations.map(({ name, area, rooms, practice }) => (
            <article className="location" key={name}>
              <p className="kicker">{area}</p>
              <h3>{name}</h3>
              <p>{practice}<br />{rooms}</p>
              <a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ', ' + area)}`} aria-label={`Directions to ${name}`}>Get directions</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Booking() {
  const [location, setLocation] = useState('')

  return (
    <section id="book" className="section booking">
      <div className="wrap split">
        <div>
          <h2>Ask about an appointment</h2>
          <p>Message the practice for dates and fees, or call <a href={PHONE_URL}>{PHONE}</a>.</p>
        </div>
        <div className="enquiry">
          <label htmlFor="location">Preferred hospital <span>(optional)</span></label>
          <select id="location" value={location} onChange={(event) => setLocation(event.target.value)}>
            <option value="">Either location</option>
            {locations.map(({ name }) => <option key={name}>{name}</option>)}
          </select>
          <a className="button" href={whatsappLink(location)} target="_blank" rel="noopener noreferrer">Continue to WhatsApp</a>
          <p>WhatsApp opens a draft for you to send. Please keep medical details and reports out of your first message.</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="privacy" className="footer">
      <div className="wrap">
        <div className="footer-main">
          <Brand />
          <div className="footer-contact">
            <a href={PHONE_URL}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
        <details className="footnote">
          <summary>Website privacy</summary>
          <p>This site uses no analytics or cookies. The site only passes your hospital preference to WhatsApp when you choose to open a draft. If you send that draft, WhatsApp and the practice receive your message. Contact the practice using the email above with any privacy questions.</p>
        </details>
        <details className="footnote">
          <summary>Website terms</summary>
          <p>The information here is general and cannot replace a developmental assessment. The practice confirms appointments and fees directly. For urgent care, contact a healthcare provider or local emergency services.</p>
        </details>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <div className="care-band">
          <ul className="wrap" aria-label="Our approach">
            <li>Developmental assessments</li>
            <li>Early intervention</li>
            <li>Family-centred care</li>
          </ul>
        </div>
        <Doctor />
        <section className="wrap before-booking" aria-label="Before you book">
          <dl>
            {questions.map(({ title, text, href, link }) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{text}{href && <a className="text-link" href={href}>{link}</a>}</dd>
              </div>
            ))}
          </dl>
        </section>
        <FirstVisit />
        <Concerns />
        <Milestones />
        <Locations />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
