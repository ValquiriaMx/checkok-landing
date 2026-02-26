import { useLang } from '../context/LangContext'
import logoImg from '../assets/logo.png'

export default function Navbar() {
  const { lang, setLang, t } = useLang()

  return (
    <nav>
      <a className="nav-logo" href="#">
        <div className="logo-icon">
          <img src={logoImg} alt="CheckOK" />
        </div>
        CheckOK
      </a>

      <ul className="nav-links">
        <li><a href="#features">{t.navFeatures}</a></li>
        <li><a href="#how">{t.navHow}</a></li>
        <li><a href="#pricing">{t.navPricing}</a></li>
        <li><a href="#contact">{t.navContact}</a></li>
        <li>
          <a className="nav-cta" href="https://play.google.com/store" target="_blank" rel="noreferrer">
            {t.navCta}
          </a>
        </li>
      </ul>

      <div className="lang-toggle">
        <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>ES</button>
        <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
      </div>
    </nav>
  )
}
