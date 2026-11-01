import { useEffect, useState } from 'react'
import ecommerceProjectImage from './assets/ecommerce-project.png'
import siteLogo from './assets/site-logo.svg'

const goals = [
  'Build a modern and visually appealing e-commerce website.',
  'Create a user-friendly shopping experience.',
  'Showcase products through attractive layouts and visuals.',
  'Develop consistent product graphics and promotional designs.',
  'Ensure responsive layouts across desktop, tablet, and mobile.',
  'Improve product discovery and website navigation.',
]

const responsibilities = [
  {
    title: 'Website Design & Development',
    items: [
      'Designed and developed the website using WordPress.',
      'Customized a premium WordPress theme.',
      'Built pages and layouts using Elementor Pro.',
      'Created responsive layouts for different screen sizes.',
      'Organized product categories and website navigation.',
    ],
  },
  {
    title: 'Product Design',
    items: [
      'Created product visuals and presentation designs.',
      'Worked on product graphics and visual consistency.',
      'Designed product-focused assets for the online storefront.',
    ],
  },
  {
    title: 'Graphics Design',
    items: [
      'Created custom website and promotional graphics.',
      'Designed product-related visuals.',
      'Maintained consistent typography, colors, and visual styling.',
      'Improved the overall visual presentation of the brand.',
    ],
  },
]

const tools = ['WordPress', 'Elementor Pro', 'Premium WordPress Theme', 'WooCommerce', 'Adobe Photoshop', 'Canva']

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

export default function EcommerceProject() {
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
            <div className="case-study-breadcrumb">Selected Work <span>/</span> E-commerce &amp; Lifestyle</div>
            <div className="case-study-hero-grid">
              <div>
                <div className="case-study-eyebrow">E-commerce, Product &amp; Graphics Design</div>
                <h1>E-commerce Website Design, Product &amp; Graphics Design</h1>
              </div>
              <p>
                A visually engaging WordPress storefront with custom product designs and graphics, created to deliver
                consistent branding, stronger product presentation, and a smooth responsive shopping experience.
              </p>
            </div>
            <div className="case-study-cover">
              <img src={ecommerceProjectImage} alt="E-commerce website displayed on a laptop" />
            </div>
            <div className="case-study-meta">
              <div><span>Industry</span><strong>E-commerce / Lifestyle</strong></div>
              <div><span>Project Type</span><strong>E-commerce Website &amp; Visual Design</strong></div>
              <div><span>Tool / Platform</span><strong>WordPress, Elementor Pro, Premium Theme</strong></div>
              <div><span>Role</span><strong>Web Designer, WordPress Developer &amp; Graphic Designer</strong></div>
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <div className="container case-study-two-column">
            <div>
              <div className="case-study-section-label">Project Overview</div>
              <h2>A cohesive storefront built around product presentation.</h2>
            </div>
            <div className="case-study-body-copy">
              <p>
                I designed and developed a modern e-commerce website for a specialty product brand, creating an
                attractive online storefront that showcases products effectively across every screen size.
              </p>
              <p>
                Alongside website development, I created product designs and graphics to strengthen the brand
                presentation and make the complete shopping journey more engaging.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-section case-study-soft-section">
          <div className="container">
            <div className="case-study-section-heading">
              <div className="case-study-section-label">Project Goals</div>
              <h2>Clear product discovery with a consistent visual identity.</h2>
            </div>
            <div className="case-study-goal-grid ecommerce-goal-grid">
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
              <h2>Website, product, and graphic design working as one system.</h2>
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
              <h2>A flexible WordPress design and commerce stack.</h2>
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
              <h2>Engaging visuals with clear product presentation.</h2>
              <p>
                Elementor Pro and premium theme customization provided the structured foundation, while custom product
                designs and graphics created a consistent identity. Responsive behavior, product visibility, and simple
                navigation shaped every design decision.
              </p>
            </div>
            <div className="case-study-story-card glass-card">
              <div className="case-study-section-label">Project Outcome</div>
              <h2>One cohesive commerce and brand experience.</h2>
              <p>
                The completed website brings together customized page layouts, product presentation, and supporting
                graphics. Website design, development, product visuals, and brand presentation now work together as a
                unified digital storefront.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-takeaway">
          <div className="container">
            <div className="case-study-takeaway-card">
              <span>Project Takeaway</span>
              <p>
                A successful e-commerce experience requires more than website development. Product presentation,
                custom graphics, consistent branding, and intuitive user experience all play an important role.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-cta">
          <div className="container">
            <div>
              <span>Have a similar project?</span>
              <h2>Let's build a storefront that presents your products beautifully.</h2>
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
