import { useEffect, useState } from 'react'
import hvacProjectImage from './assets/hvac-project.png'
import siteLogo from './assets/site-logo.svg'

const goals = [
  'Establish a professional online presence.',
  'Showcase commercial and industrial HVAC solutions.',
  'Present technical services and product categories clearly.',
  'Highlight completed projects and industry experience.',
  'Build trust through testimonials and company information.',
  'Generate inquiries through clear calls to action.',
  'Ensure a responsive experience across all devices.',
]

const responsibilities = [
  {
    title: 'Website Design',
    items: [
      'Designed a professional corporate website layout.',
      'Created structured homepage and service sections.',
      'Developed clear navigation and content hierarchy.',
      'Designed project showcase and product sections.',
      'Focused on user-friendly layouts and visual consistency.',
    ],
  },
  {
    title: 'Front-End Development',
    items: [
      'Developed the website using custom HTML and CSS.',
      'Used Bootstrap for responsive layouts and grid systems.',
      'Implemented custom styling and reusable components.',
      'Created responsive sections for desktop, tablet, and mobile.',
      'Optimized layouts for a consistent browsing experience.',
    ],
  },
  {
    title: 'Website Sections & Features',
    items: [
      'Hero messaging focused on core HVAC solutions.',
      'Industrial cooling, centralized AC, and ventilation services.',
      'Organized equipment and product categories.',
      'Portfolio of completed commercial and industrial projects.',
      'Company overview, testimonials, and inquiry options.',
    ],
  },
]

const tools = ['HTML5', 'CSS3', 'Bootstrap', 'Responsive Web Design']

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

export default function HvacProject() {
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
            <div className="case-study-breadcrumb">Selected Work <span>/</span> HVAC &amp; Industrial</div>
            <div className="case-study-hero-grid">
              <div>
                <div className="case-study-eyebrow">Website Design &amp; Front-End Development</div>
                <h1>Commercial &amp; Industrial HVAC Website Design &amp; Development</h1>
              </div>
              <p>
                A professional HVAC website created to showcase industrial cooling solutions, air conditioning
                systems, ventilation products, and technical services through a clean and responsive interface.
              </p>
            </div>
            <div className="case-study-cover">
              <img src={hvacProjectImage} alt="Commercial HVAC website displayed on a laptop" />
            </div>
            <div className="case-study-meta">
              <div><span>Industry</span><strong>HVAC / Industrial &amp; Commercial</strong></div>
              <div><span>Project Type</span><strong>Corporate Website</strong></div>
              <div><span>Tool / Platform</span><strong>Custom HTML, CSS, Bootstrap</strong></div>
              <div><span>Role</span><strong>Web Designer &amp; Front-End Developer</strong></div>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="container case-study-two-column">
            <div>
              <div className="case-study-section-label">Project Overview</div>
              <h2>A strong digital presence for technical HVAC solutions.</h2>
            </div>
            <div className="case-study-body-copy">
              <p>
                I designed and developed a professional corporate website for an HVAC solutions provider specializing
                in commercial and industrial cooling systems.
              </p>
              <p>
                The website showcases services, industrial products, completed projects, and technical expertise while
                making it easy for potential customers to explore relevant solutions and submit inquiries.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-section case-study-soft-section">
          <div className="container">
            <div className="case-study-section-heading">
              <div className="case-study-section-label">Project Goals</div>
              <h2>Technical clarity, industry credibility, and inquiry generation.</h2>
            </div>
            <div className="case-study-goal-grid hvac-goal-grid">
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
              <h2>Corporate design and responsive development working together.</h2>
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
              <h2>A custom, responsive front-end foundation.</h2>
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
              <h2>Structured content for a complex industrial offering.</h2>
              <p>
                Custom HTML, CSS, and Bootstrap created a clean visual system with consistent spacing and responsive
                sections. Service visibility, product presentation, project showcases, and inquiry-focused calls to
                action remained central throughout the design.
              </p>
            </div>
            <div className="case-study-story-card glass-card">
              <div className="case-study-section-label">Project Outcome</div>
              <h2>One clear corporate experience across every device.</h2>
              <p>
                The completed website brings together HVAC services, industrial products, completed projects, and
                company information in a structured experience that supports both technical discovery and customer
                inquiries.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-takeaway">
          <div className="container">
            <div className="case-study-takeaway-card">
              <span>Project Takeaway</span>
              <p>
                Designing an effective industrial website requires balancing professional presentation, technical
                information, responsive layouts, and clear conversion pathways.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-cta">
          <div className="container">
            <div>
              <span>Have a similar project?</span>
              <h2>Let's turn complex services into a clear digital experience.</h2>
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
