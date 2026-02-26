import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'
import logoImg from '../assets/logo.png'

// ── FEATURES ──────────────────────────────────────────────
export function Features() {
  const { t } = useLang()
  useReveal()

  const features = [
    { icon: '🚨', color: 'var(--danger)', bg: 'rgba(255,77,109,0.12)', title: 'Alerta de emergencia', desc: 'Si un miembro no responde en el tiempo configurado, la app envía alertas push automáticas a toda la familia, con email de respaldo vía Resend.' },
    { icon: '📍', color: 'var(--accent2)', bg: 'rgba(0,170,255,0.12)', title: 'Geolocalización en vivo', desc: 'Ve en el mapa dónde está cada familiar en tiempo real. Las coordenadas se incluyen automáticamente en las alertas de emergencia.' },
    { icon: '💬', color: 'var(--accent)', bg: 'rgba(0,229,160,0.12)', title: 'Mensajería familiar', desc: 'Chat grupal con burbujas estilo WhatsApp, confirmación de lectura y notificaciones push para mantenerse comunicados siempre.' },
    { icon: '🔔', color: 'var(--accent3)', bg: 'rgba(124,92,252,0.12)', title: 'Check-in automático', desc: 'Configura intervalos de tiempo y si nadie responde el check-in, la alerta se dispara sola. Cero esfuerzo, máxima seguridad.' },
    { icon: '👥', color: '#ffc83c', bg: 'rgba(255,200,60,0.12)', title: 'Grupos familiares', desc: 'Crea tu grupo, invita a tu familia con un código simple y gestiona permisos y roles. Cada integrante tiene su perfil y estado.' },
    { icon: '🎨', color: '#e879f9', bg: 'rgba(232,121,249,0.12)', title: 'Temas personalizables', desc: 'Liquid Glass, OLED Dark y Neumorphism Nord. Accesibilidad con tamaño de fuente ajustable para todos los miembros de la familia.' },
  ]

  return (
    <section id="features">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">{t.featuresLabel}</span>
          <h2>{t.featuresTitle.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</h2>
          <p className="section-sub">{t.featuresSub}</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feat-card reveal" key={i} style={{ '--feat-color': f.color }}>
              <div className="feat-icon" style={{ background: f.bg }}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── SCREENSHOTS ───────────────────────────────────────────
export function Screenshots({ screenshots = [] }) {
  const { t } = useLang()
  useReveal()

  const placeholders = [
    { icon: '🏠', label: t.sc1 },
    { icon: '🗺️', label: t.sc2 },
    { icon: '💬', label: t.sc3 },
    { icon: '🚨', label: t.sc4 },
    { icon: '⚙️', label: t.sc5 },
  ]

  return (
    <section id="screenshots">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">{t.screenshotsLabel}</span>
          <h2>{t.screenshotsTitle}</h2>
          <p className="section-sub">{t.screenshotsSub}</p>
        </div>
        <div className="screenshots-track">
          {placeholders.map((p, i) => (
            <div className="screenshot-card reveal" key={i}>
              {screenshots[i]
                ? <img src={screenshots[i]} alt={p.label} />
                : (
                  <div className="screenshot-placeholder">
                    <div className="sc-icon">{p.icon}</div>
                    <div className="sc-label">{p.label}</div>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── HOW IT WORKS ──────────────────────────────────────────
export function HowItWorks() {
  const { t } = useLang()
  useReveal()

  const steps = [
    { num: '1', color: 'var(--accent)', borderColor: 'rgba(0,229,160,0.25)', bg: 'rgba(0,229,160,0.12)', title: t.step1Title, desc: t.step1 },
    { num: '2', color: 'var(--accent2)', borderColor: 'rgba(0,170,255,0.25)', bg: 'rgba(0,170,255,0.12)', title: t.step2Title, desc: t.step2 },
    { num: '3', color: 'var(--accent3)', borderColor: 'rgba(124,92,252,0.25)', bg: 'rgba(124,92,252,0.12)', title: t.step3Title, desc: t.step3 },
    { num: '4', color: '#ffc83c', borderColor: 'rgba(255,200,60,0.25)', bg: 'rgba(255,200,60,0.12)', title: t.step4Title, desc: t.step4 },
  ]

  return (
    <section id="how">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">{t.howLabel}</span>
          <h2>{t.howTitle}</h2>
          <p className="section-sub">{t.howSub}</p>
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div className="step-card reveal" key={i}>
              <div className="step-num" style={{ background: s.bg, border: `2px solid ${s.borderColor}`, color: s.color }}>{s.num}</div>
              <div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── EMERGENCY ─────────────────────────────────────────────
export function Emergency() {
  const { t } = useLang()
  useReveal()

  return (
    <section id="emergency">
      <div className="section-inner">
        <div className="emergency-layout">
          <div className="reveal">
            <span className="section-label">{t.emergencyLabel}</span>
            <h2>{t.emergencyTitle.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>{t.emergencySub}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--muted)', fontSize: '0.875rem' }}>
              {[t.em1, t.em2, t.em3, t.em4].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="emergency-panel reveal">
            <div className="em-header">
              <div className="em-badge"><span>🔴</span> {t.emActive}</div>
              <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{t.emSim}</span>
            </div>
            {[
              { title: t.emStep1Title, desc: t.emStep1 },
              { title: t.emStep2Title, desc: t.emStep2 },
              { title: t.emStep3Title, desc: t.emStep3 },
              { title: t.emStep4Title, desc: t.emStep4 },
            ].map((s, i) => (
              <div className="em-step" key={i}>
                <div className="em-step-num">{i + 1}</div>
                <div className="em-step-text"><strong>{s.title}</strong><br />{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── PRICING ───────────────────────────────────────────────
export function Pricing() {
  const { t } = useLang()
  useReveal()

  return (
    <section id="pricing">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">{t.pricingLabel}</span>
          <h2>{t.pricingTitle}</h2>
          <p className="section-sub">{t.pricingSub}</p>
        </div>
        <div className="pricing-grid">
          <div className="price-card reveal">
            <div className="plan-name">Lite</div>
            <div className="plan-price">$0<span> {t.forever}</span></div>
            <p className="plan-desc">{t.liteDesc}</p>
            <ul className="plan-features">
              {t.liteFeatures.map((f, i) => (
                <li key={i}><span className="check-icon">✓</span>{f}</li>
              ))}
            </ul>
            <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="btn-secondary" style={{ justifyContent: 'center' }}>
              {t.liteBtn}
            </a>
          </div>
          <div className="price-card featured reveal">
            <div className="plan-badge">{t.recommended}</div>
            <div className="plan-name">Pro</div>
            <div className="plan-price">$2.99<span> {t.perMonth}</span></div>
            <p className="plan-desc">{t.proDesc}</p>
            <ul className="plan-features">
              {t.proFeatures.map((f, i) => (
                <li key={i}><span className="check-icon">✓</span>{f}</li>
              ))}
            </ul>
            <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="btn-primary" style={{ justifyContent: 'center' }}>
              {t.proBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── CONTACT ───────────────────────────────────────────────
export function Contact() {
  const { t } = useLang()
  useReveal()

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="contact-inner">
          <div className="reveal">
            <span className="section-label">{t.contactLabel}</span>
            <h2>{t.contactTitle}</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '32px' }}>{t.contactSub}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a className="contact-link" href="mailto:soporte@checkok.app">
                <div className="contact-link-icon">📧</div>soporte@checkok.app
              </a>
              <a className="contact-link" href="https://play.google.com/store" target="_blank" rel="noreferrer">
                <div className="contact-link-icon">🎮</div>{t.contactPlayStore}
              </a>
              <a className="contact-link" href="https://checkok.app">
                <div className="contact-link-icon">🌐</div>checkok.app
              </a>
            </div>
          </div>
          <div className="contact-form reveal">
            <div className="form-group">
              <label>{t.labelName}</label>
              <input type="text" placeholder="Tu nombre" />
            </div>
            <div className="form-group">
              <label>{t.labelEmail}</label>
              <input type="email" placeholder="tu@email.com" />
            </div>
            <div className="form-group">
              <label>{t.labelMessage}</label>
              <textarea placeholder="..."></textarea>
            </div>
            <button className="btn-primary" onClick={() => alert('¡Mensaje enviado!')}>
              {t.sendBtn}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── FOOTER ────────────────────────────────────────────────
export function Footer() {
  const { t } = useLang()

  return (
    <footer>
      <div className="footer-logo">
        <div className="logo-icon" style={{ width: '28px', height: '28px' }}>
          <img src={logoImg} alt="CheckOK" />
        </div>
        CheckOK
      </div>
      <ul className="footer-links">
        <li><a href="#features">{t.navFeatures}</a></li>
        <li><a href="#pricing">{t.navPricing}</a></li>
        <li><a href="#contact">{t.navContact}</a></li>
        <li><a href="#">{t.footerPrivacy}</a></li>
      </ul>
      <p className="footer-copy">© 2025 CheckOK. {t.footerMade}</p>
    </footer>
  )
}
