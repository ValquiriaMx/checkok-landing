import { useLang } from '../context/LangContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <section id="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            {t.heroBadge}
          </div>
          <h1>
            {t.heroTitle}<br />
            <span className="accent-word">{t.heroAccent}</span>
          </h1>
          <p className="hero-sub">{t.heroSub}</p>
          <div className="hero-actions">
            <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76a2 2 0 0 0 2.18-.2l12.4-7.17-3.23-3.23L3.18 23.76zm17.14-9.26L17.1 12.7l-3.11 3.11 3.11 3.11 3.24-1.87a1.93 1.93 0 0 0-.02-3.55zM3 .32A1.95 1.95 0 0 0 2 2.1v19.8a1.95 1.95 0 0 0 1 1.78l.1.05L14.51 12 3.1.27z" />
              </svg>
              {t.heroPlayStore}
            </a>
            <a href="#features" className="btn-secondary">{t.heroSeeFeatures}</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">360°</span>
              <span className="stat-label">{t.statCoverage}</span>
            </div>
            <div className="stat">
              <span className="stat-num">&lt;30s</span>
              <span className="stat-label">{t.statAlert}</span>
            </div>
            <div className="stat">
              <span className="stat-num">FCM+</span>
              <span className="stat-label">{t.statBackup}</span>
            </div>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="hero-visual">
          <div className="phone-wrap">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="phone-topbar">
                  <span className="phone-logo">CheckOK</span>
                  <div className="phone-status">
                    <span className="status-dot"></span>
                    <span className="status-text">{t.phoneLive}</span>
                  </div>
                </div>
                <div className="phone-alert">
                  <div className="alert-icon">🚨</div>
                  <div>
                    <div className="alert-title">{t.phoneAlert}</div>
                    <div className="alert-sub">{t.phoneAlertSub}</div>
                  </div>
                </div>
                <div className="phone-members">
                  <div style={{ fontSize: '0.6rem', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                    {t.phoneFamily}
                  </div>
                  {[
                    { emoji: '👩', name: 'Mamá', loc: '📍 Casa', status: 'OK', cls: 'ok-green', bg: 'rgba(0,229,160,0.15)' },
                    { emoji: '👧', name: 'Valeria', loc: '📍 Escuela', status: 'SOS', cls: 'ok-red', bg: 'rgba(255,77,109,0.15)' },
                    { emoji: '👦', name: 'Ernesto', loc: '📍 En camino', status: '~OK', cls: 'ok-yellow', bg: 'rgba(255,200,60,0.15)' },
                  ].map(m => (
                    <div className="member-row" key={m.name}>
                      <div className="member-avatar" style={{ background: m.bg }}>{m.emoji}</div>
                      <div className="member-info">
                        <div className="member-name">{m.name}</div>
                        <div className="member-loc">{m.loc}</div>
                      </div>
                      <span className={`member-ok ${m.cls}`}>{m.status}</span>
                    </div>
                  ))}
                </div>
                <div className="phone-msg">
                  <div className="msg-title">{t.phoneMessages}</div>
                  <div className="msg-bubble">{t.phoneMsg1}</div>
                  <div className="msg-bubble-out">{t.phoneMsg2}</div>
                </div>
              </div>
              <div className="phone-glow"></div>
            </div>

            <div className="phone-float-badge left">
              <span>📧</span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <span style={{ fontWeight: 700, fontSize: '0.7rem' }}>{t.badgeEmail}</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.6rem' }}>{t.badgeEmailSub}</span>
              </span>
            </div>
            <div className="phone-float-badge right">
              <span>📍</span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <span style={{ fontWeight: 700, fontSize: '0.7rem' }}>{t.badgeGps}</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.6rem' }}>{t.badgeGpsSub}</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
