import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import EcommerceProject from './EcommerceProject'
import NatdoctorProject from './NatdoctorProject'
import './index.css'
import './project.css'

const PROJECT_ROUTE = '#/healthcare-website'
const ECOMMERCE_PROJECT_ROUTE = '#/ecommerce-website'

function Root() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (hash === PROJECT_ROUTE || hash === ECOMMERCE_PROJECT_ROUTE) {
      window.scrollTo(0, 0)
      return
    }

    const sectionId = hash.replace(/^#/, '')
    if (!sectionId) return
    window.requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView())
  }, [hash])

  if (hash === PROJECT_ROUTE) return <NatdoctorProject />
  if (hash === ECOMMERCE_PROJECT_ROUTE) return <EcommerceProject />
  return <App />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
