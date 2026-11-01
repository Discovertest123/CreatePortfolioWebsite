import { useEffect, useState } from 'react'
import psychologyProjectImage from './assets/psychology-project.png'
import siteLogo from './assets/site-logo.svg'

const goals = [
  'Create a clean and professional psychology website.',
  'Make complex psychological topics easy to explore.',
  'Organize articles, tests, and tools into clear categories.',
  'Improve content discovery and navigation.',
  'Build a trustworthy and accessible user experience.',
  'Ensure a responsive design across different devices.',
]

const responsibilities = [
  {
    title: 'UI Design & Website Layout',
    items: [
      'Designed clean and modern website layouts.',
      'Created an organized homepage structure.',
      'Developed intuitive navigation and content hierarchy.',
      'Designed article cards, category sections, and content layouts.',
      'Maintained visual consistency throughout the website.',
    ],
  },
  {
    title: 'WordPress Development',
    items: [
      'Developed the website using WordPress.',
      'Built and customized pages using Elementor Pro.',
      'Created reusable page sections and layouts.',
      'Implemented responsive designs for desktop, tablet, and mobile.',
      'Structured content for easy browsing and accessibility.',
    ],
  },
  {
    title: 'Key Website Features',
    items: [
      'Dedicated psychological self-assessment tests.',
      'Organized psychology and personal development articles.',
      'Interactive tools that support learning and self-understanding.',
      'Expert profiles for psychologists, researchers, and reviewers.',
      'Trending content and a consistent responsive experience.',
    ],
  },
]

const tools = ['WordPress', 'Elementor Pro', 'HTML5', 'CSS3', 'Responsive Web Design']

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

export default function PsychologyProject() {
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
            <div className="case-study-breadcrumb">Selected Work <span>/</span> Psychology &amp; Mental Wellness</div>
            <div className="case-study-hero-grid">
              <div>
                <div className="case-study-eyebrow">UI Design &amp; WordPress Development</div>
                <h1>Psychology &amp; Mental Wellness Website Design</h1>
              </div>
              <p>
                A clean and engaging psychology website that makes knowledge accessible through educational articles,
                interactive tests, self-assessment tools, and expert-backed resources.
              </p>
            </div>
            <div className="case-study-cover">
              <img src={psychologyProjectImage} alt="Psychology and mental wellness website displayed on a laptop" />
            </div>
            <div className="case-study-meta">
              <div><span>Industry</span><strong>Psychology / Mental Wellness</strong></div>
              <div><span>Project Type</span><strong>Informational &amp; Educational Website</strong></div>
              <div><span>Tool / Platform</span><strong>WordPress, Elementor Pro</strong></div>
              <div><span>Role</span><strong>UI Designer &amp; WordPress Developer</strong></div>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="container case-study-two-column">
            <div>
              <div className="case-study-section-label">Project Overview</div>
              <h2>Psychology knowledge organized for everyday discovery.</h2>
            </div>
            <div className="case-study-body-copy">
              <p>
                I designed and developed an educational psychology platform focused on making research, psychological
                knowledge, and mental wellness resources accessible to a broad audience.
              </p>
              <p>
                The website brings together informative articles, psychological tests, interactive tools, and
                expert-reviewed resources in one organized digital platform.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-section case-study-soft-section">
          <div className="container">
            <div className="case-study-section-heading">
              <div className="case-study-section-label">Project Goals</div>
              <h2>Readable content, intuitive exploration, and accessible tools.</h2>
            </div>
            <div className="case-study-goal-grid psychology-goal-grid">
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
              <h2>Design, development, and content structure in one system.</h2>
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
              <h2>A flexible content and design foundation.</h2>
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
              <h2>Simplicity, readability, and accessibility first.</h2>
              <p>
                Clear typography, structured content sections, intuitive navigation, and easy-to-scan layouts make
                educational and psychology-related information approachable. Elementor Pro supports flexible page
                layouts and a consistent visual system throughout the platform.
              </p>
            </div>
            <div className="case-study-story-card glass-card">
              <div className="case-study-section-label">Project Outcome</div>
              <h2>One accessible platform for learning and self-discovery.</h2>
              <p>
                The completed website combines educational content, psychological tests, interactive resources, and
                expert information in a structured experience that remains easy to browse across devices.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-takeaway">
          <div className="container">
            <div className="case-study-takeaway-card">
              <span>Project Takeaway</span>
              <p>
                Designing an educational platform requires a strong balance between visual appeal, content
                readability, accessibility, and intuitive user experience.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-cta">
          <div className="container">
            <div>
              <span>Have a similar project?</span>
              <h2>Let's make complex knowledge clear and accessible.</h2>
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
