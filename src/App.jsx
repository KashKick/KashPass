import './index.css'
import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'

export default function App() {
  return (
    <div className='app'>
      <main>
        <div className='purple-section hero-shell'>
          <SiteHeader />
          <Hero />
        </div>
        <HowItWorks />
      </main>
    </div>
  )
}