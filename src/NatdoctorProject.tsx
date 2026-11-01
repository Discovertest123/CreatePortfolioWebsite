import { useEffect, useState } from 'react'
import natdoctorProjectImage from './assets/natdoctor-project.jpg'
import siteLogo from './assets/site-logo.svg'

const goals = [
  'Present healthcare services in a clear, professional format.',
  'Build trust through practitioner information and educational content.',
  'Improve navigation across treatments and clinical focus areas.',
  'Encourage visitors to take the wellness quiz and book discovery calls.',
  'Make health information accessible through blogs and FAQs.',
]

const features = [
  {
    title: 'Service Pages',
    description: 'Dedicated sections for naturopathic care, acupuncture, nutrition, and other wellness treatments.',
  },
  {
    title: 'User-Friendly Navigation',
    description: 'Organized clinical focus areas and service categories that help visitors find relevant care.',
  },
  {
    title: 'Consultation Booking',
    description: 'Clear calls to action for booking a free discovery call with the practitioner.',
  },
  {
    title: 'Wellness Quiz',
    description: 'An approachable way for visitors to explore and understand their health priorities.',
  },
  {
    title: 'Educational Blog',
    description: 'Health and wellness articles that inform visitors and support professional credibility.',
  },
  {
    title: 'FAQ Section',
    description: 'Accessible answers to common questions about naturopathic medicine and care.',
  },
  {
    title: 'Responsive Experience',
    description: 'Services and educational content remain accessible across desktop, tablet, and mobile.',
  },
]

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M16.8 12.3A7 7 0 017.7 3.2 7 7 0 1016.8 12.3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4 4l1.4 1.4M14.6 14.6L16 16M16 4l-1.4 1.4M5.4 14.6L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function FeatureIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4.2 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function NatdoctorProject() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  return (
    <div className={`app-shell project-shell${darkMode ? ' dark-theme' : ''}`}>
      <header className="project-header">
        <div className="container project-header-inner">
          <a className="site-logo-lockup" href="index.html#home" aria-label="Back to Sarfaraj Khan portfolio">
            <img src={siteLogo} alt="" />
          </a>
          <div className="project-header-actions">
            <a className="project-back-link" href="index.html#work">
              <span aria-hidden="true">←</span> Back to work
            </a>
            <button
              className="project-theme-button"
              type="button"
              onClick={() => setDarkMode(mode => !mode)}
              aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <ThemeIcon dark={darkMode} />
            </button>
            <a className="project-hire-button" href="mailto:ksarfaraj23@gmail.com">Hire Me</a>
          </div>
        </div>
      </header>

      <main className="case-study-page">
        <section className="case-study-hero">
          <div className="container">
            <div className="case-study-breadcrumb">Selected Work <span>/</span> Healthcare &amp; Wellness</div>
            <div className="case-study-hero-grid">
              <div>
                <div className="case-study-eyebrow">Web Design &amp; Front-End Development</div>
                <h1>Healthcare Website Design &amp; Development</h1>
              </div>
              <p>
                A professional experience for a healthcare practitioner, helping patients understand personalized
                wellness services and confidently take the next step toward consultation.
              </p>
            </div>
            <div className="case-study-cover">
              <img src={natdoctorProjectImage} alt="Healthcare website shown on a laptop mockup" />
            </div>
            <div className="case-study-meta">
              <div><span>Industry</span><strong>Healthcare &amp; Wellness</strong></div>
              <div><span>Project Type</span><strong>Website Design, UI/UX &amp; Development</strong></div>
              <div><span>Tool / Platform</span><strong>Custom HTML, Bootstrap</strong></div>
              <div><span>Service</span><strong>Web Design &amp; Front-End Development</strong></div>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="container case-study-two-column">
            <div>
              <div className="case-study-section-label">Project Overview</div>
              <h2>Making personalized healthcare easier to understand.</h2>
            </div>
            <div className="case-study-body-copy">
              <p>
                The website showcases naturopathic medicine, acupuncture, nutrition counselling, hypnotherapy, and other
                personalized wellness services in one clear digital experience.
              </p>
              <p>
                The website guides patients from learning about available treatments to exploring resources, taking a
                wellness quiz, and booking a discovery call.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-section case-study-soft-section">
          <div className="container">
            <div className="case-study-section-heading">
              <div className="case-study-section-label">Project Goals</div>
              <h2>A clear path from discovery to consultation.</h2>
            </div>
            <div className="case-study-goal-grid">
              {goals.map((goal, index) => (
                <div className="case-study-goal-card glass-card" key={goal}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="container case-study-role-panel">
            <div>
              <div className="case-study-section-label">My Role as a Web Designer</div>
              <h2>Visual direction, information architecture, and conversion-focused UI.</h2>
            </div>
            <p>
              I shaped the website's visual presentation, content hierarchy, responsive experience, and calls to action.
              The project focused on presenting complex healthcare information with clarity while creating a warm,
              trustworthy patient journey.
            </p>
          </div>
        </section>

        <section className="case-study-section case-study-dark-section">
          <div className="container">
            <div className="case-study-section-heading">
              <div className="case-study-section-label">Key Website Features</div>
              <h2>Everything patients need in one accessible experience.</h2>
            </div>
            <div className="case-study-feature-grid">
              {features.map(feature => (
                <article className="case-study-feature-card" key={feature.title}>
                  <div className="case-study-feature-icon"><FeatureIcon /></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="container case-study-story-grid">
            <div className="case-study-story-card glass-card">
              <div className="case-study-section-label">Design Approach</div>
              <h2>Credibility, service discovery, and patient education.</h2>
              <p>
                The content structure balances practitioner information, treatment descriptions, educational resources,
                and booking calls to action. The result is a straightforward journey that keeps healthcare information
                approachable without reducing its professional value.
              </p>
            </div>
            <div className="case-study-story-card glass-card">
              <div className="case-study-section-label">Outcome</div>
              <h2>One connected wellness experience.</h2>
              <p>
                The completed website brings together wellness services, learning resources, and consultation pathways.
                Visitors can explore treatment options, understand the practitioner's approach, and find a relevant next step.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-takeaway">
          <div className="container">
            <div className="case-study-takeaway-card">
              <span>Project Takeaway</span>
              <p>
                Creating a healthcare website requires more than an attractive layout. Clear information architecture,
                trustworthy presentation, and accessible calls to action are essential to a useful patient experience.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-cta">
          <div className="container">
            <div>
              <span>Have a similar project?</span>
              <h2>Let's create a clear, trustworthy digital experience.</h2>
            </div>
            <a href="mailto:ksarfaraj23@gmail.com">Start a Project <span aria-hidden="true">→</span></a>
          </div>
        </section>
      </main>

      <footer className="project-footer">
        <div className="container">
          <span>© {new Date().getFullYear()} Sarfaraj Khan</span>
          <a href="index.html#work">Back to all work</a>
        </div>
      </footer>
    </div>
  )
}
