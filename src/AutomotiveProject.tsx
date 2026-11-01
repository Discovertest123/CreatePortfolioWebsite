import { useEffect, useState } from 'react'
import automotiveProjectImage from './assets/automotive-project.png'
import siteLogo from './assets/site-logo.svg'

const goals = [
  'Create a clean and professional business website.',
  'Design a memorable and recognizable brand logo.',
  'Showcase vehicle rental services and available options.',
  'Organize website information for easy navigation.',
  "Follow the client's design preferences and requirements.",
  'Ensure a responsive experience across devices.',
]

const responsibilities = [
  {
    title: 'UI Design',
    items: [
      'Created a simple and clean website layout.',
      'Designed structured homepage sections.',
      'Organized content and navigation.',
      'Maintained consistent typography, spacing, and visual hierarchy.',
      'Focused on a user-friendly browsing experience.',
    ],
  },
  {
    title: 'WordPress Development',
    items: [
      'Developed the website using WordPress.',
      'Built page layouts using the Gutenberg Block Editor.',
      'Customized sections according to client requirements.',
      'Implemented responsive layouts for desktop, tablet, and mobile.',
      'Created easy-to-manage content sections.',
    ],
  },
  {
    title: 'Logo Design & Branding',
    items: [
      'Designed a custom business logo.',
      'Developed a visual identity aligned with the business.',
      'Focused on brand recognition and professional presentation.',
      'Maintained visual consistency across the website.',
    ],
  },
]

const tools = ['WordPress', 'Gutenberg Block Editor', 'HTML5', 'CSS3', 'Logo & Graphic Design Tools']

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

export default function AutomotiveProject() {
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
            <div className="case-study-breadcrumb">Selected Work <span>/</span> Automotive &amp; Exotic Car Rentals</div>
            <div className="case-study-hero-grid">
              <div>
                <div className="case-study-eyebrow">UI Design, WordPress Development &amp; Logo Design</div>
                <h1>Automotive Business Website &amp; Logo Design</h1>
              </div>
              <p>
                A clean and professional business website with a custom logo, organized to showcase exotic car rental
                services, vehicle options, and essential business information.
              </p>
            </div>
            <div className="case-study-cover">
              <img src={automotiveProjectImage} alt="Automotive rental website displayed on a laptop" />
            </div>
            <div className="case-study-meta">
              <div><span>Industry</span><strong>Automotive / Exotic Car Rentals</strong></div>
              <div><span>Project Type</span><strong>Business Website &amp; Brand Identity</strong></div>
              <div><span>Tool / Platform</span><strong>WordPress, Gutenberg Block Editor</strong></div>
              <div><span>Role</span><strong>UI Designer, WordPress Developer &amp; Logo Designer</strong></div>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="container case-study-two-column">
            <div>
              <div className="case-study-section-label">Project Overview</div>
              <h2>A clear rental experience with a recognizable identity.</h2>
            </div>
            <div className="case-study-body-copy">
              <p>
                I designed and developed a professional business website for an automotive rental company, focusing on
                clean visual presentation and a straightforward user experience.
              </p>
              <p>
                The project combined website UI design, Gutenberg-based WordPress development, and custom logo design
                to establish a consistent brand identity.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-section case-study-soft-section">
          <div className="container">
            <div className="case-study-section-heading">
              <div className="case-study-section-label">Project Goals</div>
              <h2>Simple discovery, clear services, and stronger recognition.</h2>
            </div>
            <div className="case-study-goal-grid automotive-goal-grid">
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
              <h2>Website design, development, and identity working together.</h2>
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
              <h2>A flexible website and visual identity toolkit.</h2>
            </div>
            <div className="case-study-tools" aria-label="Tools and technologies used">
              {tools.map(tool => <span className="case-study-tool" key={tool}>{tool}</span>)}
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="container case-study-story-grid">
            <div className="case-study-story-card glass-card">
              <div className="case-study-section-label">Key Website Features</div>
              <h2>Everything customers need to explore the business.</h2>
              <p>
                The website combines a clear business overview, dedicated vehicle showcase, organized rental service
                information, accessible contact options, and responsive layouts across screen sizes.
              </p>
            </div>
            <div className="case-study-story-card glass-card">
              <div className="case-study-section-label">Design Approach</div>
              <h2>Client requirements translated into a cohesive brand.</h2>
              <p>
                Simplicity, clarity, and professional presentation guided the website structure. Easy navigation,
                flexible Gutenberg layouts, and a custom logo create a consistent identity that remains manageable for
                the business.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="container case-study-role-panel">
            <div>
              <div className="case-study-section-label">Project Outcome</div>
              <h2>A professional business presence with a unified identity.</h2>
            </div>
            <p>
              The delivered website brings together a clean interface, responsive layouts, flexible content sections,
              and a custom-designed logo—connecting digital presentation and brand recognition in one experience.
            </p>
          </div>
        </section>

        <section className="case-study-takeaway">
          <div className="container">
            <div className="case-study-takeaway-card">
              <span>Project Takeaway</span>
              <p>
                A strong business website starts with understanding client requirements and translating them into a
                clean design, functional website, and recognizable brand identity.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-cta">
          <div className="container">
            <div>
              <span>Have a similar project?</span>
              <h2>Let's build a clear website and memorable identity.</h2>
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
