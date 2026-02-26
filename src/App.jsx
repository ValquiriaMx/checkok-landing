import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Features, Screenshots, HowItWorks, Emergency, Pricing, Contact, Footer } from './components/Sections'

// 📸 SCREENSHOTS: Import your real screenshots here and add them to the array below
// Example:
// import screen1 from './assets/screenshots/screen1.jpg'
// import screen2 from './assets/screenshots/screen2.jpg'
// const screenshots = [screen1, screen2]

import screen1 from './assets/screenshot1.jpg'
const screenshots = [screen1]  // Add more as you get them

export default function App() {
  return (
    <LangProvider>
      {/* Ambient background blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />
      <Hero />
      <Features />
      <Screenshots screenshots={screenshots} />
      <HowItWorks />
      <Emergency />
      <Pricing />
      <Contact />
      <Footer />
    </LangProvider>
  )
}
