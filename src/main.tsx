import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AutomotiveProject from './AutomotiveProject'
import ClinicalImmunologyProject from './ClinicalImmunologyProject'
import EcommerceProject from './EcommerceProject'
import HvacProject from './HvacProject'
import NatdoctorProject from './NatdoctorProject'
import PsychologyProject from './PsychologyProject'
import './index.css'
import './project.css'

const PROJECT_ROUTE = '#/healthcare-website'
const AUTOMOTIVE_PROJECT_ROUTE = '#/automotive-website'
const CLINICAL_IMMUNOLOGY_PROJECT_ROUTE = '#/clinical-immunology-website'
const ECOMMERCE_PROJECT_ROUTE = '#/ecommerce-website'
const HVAC_PROJECT_ROUTE = '#/hvac-website'
const PSYCHOLOGY_PROJECT_ROUTE = '#/psychology-website'

function Root() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (
      hash === PROJECT_ROUTE ||
      hash === AUTOMOTIVE_PROJECT_ROUTE ||
      hash === CLINICAL_IMMUNOLOGY_PROJECT_ROUTE ||
      hash === ECOMMERCE_PROJECT_ROUTE ||
      hash === HVAC_PROJECT_ROUTE ||
      hash === PSYCHOLOGY_PROJECT_ROUTE
    ) {
      window.scrollTo(0, 0)
      return
    }

    const sectionId = hash.replace(/^#/, '')
    if (!sectionId) return
    window.requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView())
  }, [hash])

  if (hash === PROJECT_ROUTE) return <NatdoctorProject />
  if (hash === AUTOMOTIVE_PROJECT_ROUTE) return <AutomotiveProject />
  if (hash === CLINICAL_IMMUNOLOGY_PROJECT_ROUTE) return <ClinicalImmunologyProject />
  if (hash === ECOMMERCE_PROJECT_ROUTE) return <EcommerceProject />
  if (hash === HVAC_PROJECT_ROUTE) return <HvacProject />
  if (hash === PSYCHOLOGY_PROJECT_ROUTE) return <PsychologyProject />
  return <App />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
