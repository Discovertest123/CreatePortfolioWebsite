import { useEffect, useState } from 'react'
import clinicalImmunologyProjectImage from './assets/clinical-immunology-project.png'
import siteLogo from './assets/site-logo.svg'

const goals = [
  'Create a simple and professional website design.',
  'Present complex medical education content clearly.',
  'Showcase learning platforms and educational resources.',
  'Improve navigation and content accessibility.',
  'Build a responsive experience across devices.',
]

const responsibilities = [
  {
    title: 'UI Design & Content Structure',
    items: [
      'Designed clean and minimal website layouts.',
      'Created structured homepage sections.',
      'Organized educational content and service information.',
      'Maintained consistent typography, spacing, and visual hierarchy.',
    ],
  },
  {
    title: 'WordPress Development',
    items: [
      'Developed the website using WordPress.',
      'Built and customized layouts with the Gutenberg Block Editor.',
      'Created flexible sections that are easy to manage and update.',
      'Implemented responsive page sections across devices.',
    ],
  },
  {
    title: 'Key Website Features',
    items: [
      'Structured clinical immunology learning resources.',
      'Dedicated board preparation materials.',
      'Question banks and practice learning content.',
      'AI-powered personalized learning concepts.',
      'Clinical insights, testimonials, and FAQs.',
    ],
  },
]

const tools = ['WordPress', 'Gutenberg Block Editor', 'HTML5', 'CSS3', 'Responsive Web Design']

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

export default function ClinicalImmunologyProject() {
  const [darkMode, setDarkMode] = useState(() => {
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
          <a className="site-logo-lockup" href="#home" aria-label="Back to Sarfaraj Khan portfolio">
            <img src={siteLogo} alt="" />
          </a>
          <div className="project-header-actions">
            <a className="project-back-link" href="#work">
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
            <div className="case-study-breadcrumb">Selected Work <span>/</span> Medical Education &amp; Healthcare</div>
            <div className="case-study-hero-grid">
              <div>
                <div className="case-study-eyebrow">UI Design &amp; WordPress Development</div>
                <h1>Clinical Immunology Education Website Design</h1>
              </div>
              <p>
                A simple and professional educational website presenting clinical immunology resources, board
                preparation tools, and AI-powered learning solutions through an organized user experience.
              </p>
            </div>
            <div className="case-study-cover">
              <img src={clinicalImmunologyProjectImage} alt="Clinical immunology education website displayed on a laptop" />
            </div>
            <div className="case-study-meta">
              <div><span>Industry</span><strong>Medical Education / Healthcare</strong></div>
              <div><span>Project Type</span><strong>Educational Website</strong></div>
              <div><span>Tool / Platform</span><strong>WordPress, Gutenberg Editor</strong></div>
              <div><span>Role</span><strong>UI Designer &amp; WordPress Developer</strong></div>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="container case-study-two-column">
            <div>
              <div className="case-study-section-label">Project Overview</div>
              <h2>Structured clinical learning for professionals and students.</h2>
            </div>
            <div className="case-study-body-copy">
              <p>
                I designed and developed a professional educational platform focused on clinical immunology, helping
                medical professionals and students access structured resources and board preparation materials.
              </p>
              <p>
                Educational solutions, clinical knowledge, practice questions, and AI-powered learning concepts are
                presented through one clean and organized interface.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-section case-study-soft-section">
          <div className="container">
            <div className="case-study-section-heading">
              <div className="case-study-section-label">Project Goals</div>
              <h2>Complex medical education made clear and accessible.</h2>
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

        <section className="case-study-section case-study-dark-section">
          <div className="container">
            <div className="case-study-section-heading">
              <div className="case-study-section-label">My Role &amp; Responsibilities</div>
              <h2>Minimal UI, structured content, and flexible WordPress blocks.</h2>
            </div>
            <div className="case-study-feature-grid">
              {responsibilities.map(responsibility => (
                <article className="case-study-feature-card" key={responsibility.title}>
                  <div className="case-study-feature-icon"><FeatureIcon /></div>
                  <h3>{responsibility.title}</h3>
                  <ul className="case-study-responsibility-list">
                    {responsibility.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="container case-study-role-panel ecommerce-tools-panel">
            <div>
              <div className="case-study-section-label">Tools &amp; Technologies</div>
              <h2>A manageable and responsive WordPress foundation.</h2>
            </div>
            <div className="case-study-tools" aria-label="Tools and technologies used">
              {tools.map(tool => <span className="case-study-tool" key={tool}>{tool}</span>)}
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="container case-study-story-grid">
            <div className="case-study-story-card glass-card">
              <div className="case-study-section-label">Design Approach</div>
              <h2>Clear typography and balanced content structure.</h2>
              <p>
                The design uses balanced spacing, simple typography, and organized sections to make complex learning
                material approachable. Gutenberg blocks provide flexible page layouts while keeping content easy to
                manage and update.
              </p>
            </div>
            <div className="case-study-story-card glass-card">
              <div className="case-study-section-label">Project Outcome</div>
              <h2>An accessible educational experience across devices.</h2>
              <p>
                The completed website presents clinical learning resources, board preparation tools, and educational
                solutions in a clean, responsive format that supports focused exploration.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-takeaway">
          <div className="container">
            <div className="case-study-takeaway-card">
              <span>Project Takeaway</span>
              <p>
                A successful medical education website makes complex information easier to understand through simple
                UI design, clear content structure, and intuitive navigation.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-cta">
          <div className="container">
            <div>
              <span>Have a similar project?</span>
              <h2>Let's make specialized knowledge easier to access.</h2>
            </div>
            <a href="mailto:ksarfaraj23@gmail.com">Start a Project <span aria-hidden="true">→</span></a>
          </div>
        </section>
      </main>

      <footer className="project-footer">
        <div className="container">
          <span>© {new Date().getFullYear()} Sarfaraj Khan</span>
          <a href="#work">Back to all work</a>
        </div>
      </footer>
    </div>
  )
}
