import { useState } from 'react'
import logo from './logo.webp'
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

const everydaySkills = [
  ['Talk', 'Asking for a toy or following a simple instruction.'],
  ['Play', 'Taking turns or joining in a game.'],
  ['Learn', 'Getting started on a task or following its steps.'],
]

const milestones = [
  ['12 months', ['Waves goodbye', 'Uses a special name for a parent', 'Pulls up to stand']],
  ['18 months', ['Tries at least three words besides names for parents', 'Walks independently', 'Imitates chores you do at home']],
  ['2 years', ['Puts at least two words together', 'Points to a picture in a book when asked', 'Kicks a ball']],
  ['3 years', ['Has a conversation with at least two back-and-forth exchanges', 'Copies a circle after you show them', 'Puts on some clothes independently']],
  ['4 years', ['Speaks in sentences of at least four words', 'Tells you about something that happened that day', 'Recalls words from a familiar song or story']],
]

const questions = [
  ['What should I ask when I book?', 'Ask which location has availability, whether you need a referral, and what to bring to your first appointment.'],
  ['What are the fees? Can I use medical aid?', 'Ask the practice about the consultation fee and how payment works before you book. Check your cover directly with your medical aid.'],
  ['How do I know my appointment is confirmed?', 'The practice will confirm the date, time and location with you directly.'],
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
      <span>Genesis NeuroKids<small>Developmental paediatrics</small></span>
    </a>
  )
}

function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="kicker">Developmental paediatrics in Johannesburg</p>
        <h1 id="hero-title">Questions about your child’s development?</h1>
        <p className="lead">Dr N. A. Thambe sees children for developmental assessments and early intervention. An appointment is a place to talk through what you’ve noticed at home or at school and discuss what support may help.</p>
        <div className="actions">
          <a className="button" href="#book">Ask about an appointment</a>
          <a className="text-link" href={PHONE_URL}>Call {PHONE}</a>
        </div>
      </div>
      <div className="hero-identity">
        <img src={logo} width="370" height="315" alt="Genesis NeuroKids Centre" />
      </div>
    </section>
  )
}

function Concerns() {
  return (
    <section id="help" className="section wrap">
      <div className="section-intro">
        <h2>What the centre helps with</h2>
        <p>A developmental assessment looks at what your child already does comfortably and where everyday tasks are harder. Here are some reasons families ask for an assessment.</p>
      </div>
      <dl className="concerns">
        {concerns.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}
      </dl>
      <div className="skills-guide">
        <h3>What those skills look like in everyday life</h3>
        <dl className="skill-examples">
          {everydaySkills.map(([title, example]) => (
            <div key={title}><dt>{title}</dt><dd>{example}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function FirstVisit() {
  return (
    <section id="first-visit" className="section first-visit" aria-labelledby="first-visit-title">
      <div className="wrap">
        <div className="section-intro">
          <h2 id="first-visit-title">What happens at the first visit?</h2>
          <p>Here’s what a developmental assessment may look like. The activities depend on your child’s age and what you’d like help with.</p>
        </div>
        <ol className="visit-steps" role="list">
          {visitSteps.map(({ title, art, text }) => (
            <li key={title}>
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
        <p className="footnote">The information on this site is general and cannot diagnose a condition or replace an assessment.</p>
        <details className="footnote">
          <summary>Website privacy</summary>
          <p>This site uses no analytics or cookies. Your hospital selection stays on the page until you open WhatsApp, where it appears in a draft message. If you send the message, WhatsApp and the practice receive it. Contact the practice using the email above for questions about how it handles enquiries.</p>
        </details>
      </div>
    </footer>
  )
}

export default function App() {
  const [motionPaused, setMotionPaused] = useState(false)

  return (
    <div className="site" data-motion={motionPaused ? 'paused' : undefined}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <div className="wrap nav">
          <Brand />
          <nav aria-label="Main navigation">
            <a href="#help">Assessments</a>
            <a href="#first-visit">First visit</a>
            <a href="#visit">Locations</a>
          </nav>
          <div className="nav-actions">
            <button
              className="motion-control"
              type="button"
              aria-pressed={motionPaused}
              onClick={() => setMotionPaused((paused) => !paused)}
            >
              Pause motion
            </button>
            <a className="button compact" href="#book">Appointments</a>
          </div>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <Hero />
        <Concerns />
        <FirstVisit />
        <Doctor />
        <Milestones />
        <Locations />
        <section className="section wrap split faq" aria-labelledby="faq-title">
          <h2 id="faq-title">Before you book</h2>
          <div>{questions.map(([question, answer]) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}</div>
        </section>
        <Booking />
      </main>
      <Footer />
    </div>
  )
}
