import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spring_2026, getUpcomingEvent, formatEventDate } from '../data/spring_2026.js';

const PHOTOS = [
  '/images/image1.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
  '/images/image7.jpg',
];

const SPONSORS = [
  { name: 'Mesa',      src: '/logo/Mesa.png' },
  { name: 'Framework', src: '/logo/framework.svg' },
  { name: 'NUC',       src: '/logo/nuc.png' },
];

const FEATURES = [
  {
    icon: '🔓',
    title: 'Workshops',
    desc: 'Hands-on sessions with real tools — Nmap, Wireshark, Hashcat, Aircrack-ng, and more.'
  },
  {
    icon: '🚩',
    title: 'CTF Competitions',
    desc: 'Compete in picoCTF, Easter Egg Trail CTF, and other capture the flag events.'
  },
  {
    icon: '🛡️',
    title: 'Blue & Red Teaming',
    desc: 'Learn ethical hacking, threat hunting, and how to defend systems against real attacks.'
  },
  {
    icon: '🤝',
    title: 'Community',
    desc: 'CSULA\'s first cybersecurity club. Build connections with CS, EE, and security professionals.'
  }
];

function getBadgeClass(type) {
  if (!type) return 'badge';
  return `badge badge-${type.toLowerCase()}`;
}

export default function HomePage() {
  const navigate = useNavigate();
  const upcoming = getUpcomingEvent();
  const [lightbox, setLightbox] = useState(null);

  const semesterHighlights = Spring_2026.filter(
    (e) => e.type !== 'meeting' && e.event !== 'TBD'
  );

  return (
    <main className="app-main">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <img
          src="/icons/Claw_Command_Bird_Only_White.svg"
          alt="Claw Command"
          className="hero-logo hero-logo-dark animate-fade-in-scale"
        />
        <img
          src="/icons/Claw_Command_Bird_Only.svg"
          alt="Claw Command"
          className="hero-logo hero-logo-light animate-fade-in-scale"
        />

        <h1 className="hero-title glitch animate-fade-in" data-text="CLAW COMMAND">
          CLAW COMMAND
        </h1>

        <p className="hero-subtitle animate-fade-in stagger-2">
          Cybersecurity Club &nbsp;/&nbsp; Cal State LA
        </p>

        <p className="hero-tagline animate-fade-in stagger-3">A cyber club for everyone</p>

        <div className="hero-actions animate-fade-in stagger-3">
          <button className="btn btn-primary" onClick={() => navigate('/events')}>
            View Schedule →
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/about')}>
            About Us
          </button>
        </div>
      </section>

      {/* ── UPCOMING EVENT ───────────────────────────────── */}
      {upcoming && (
        <section className="section" style={{ paddingTop: 'var(--space-8)' }}>
          <div className="container" style={{ maxWidth: 680 }}>
            <div className="card animate-fade-in">
              <div className="card-meta">⚡ Next Event</div>
              <div className="card-title">{upcoming.event}</div>
              <div style={{ margin: '6px 0 8px' }}>
                <span className={getBadgeClass(upcoming.type)}>{upcoming.type}</span>
              </div>
              <div className="card-meta">{formatEventDate(upcoming.date)}</div>
              {upcoming.description && (
                <p className="card-body" style={{ marginTop: 8 }}>{upcoming.description}</p>
              )}
              <button
                className="btn btn-secondary"
                style={{ marginTop: 16, fontSize: 16, padding: '6px 16px' }}
                onClick={() => navigate('/events')}
              >
                Full Schedule →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── WHAT WE DO ───────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Do</h2>
            <p className="section-desc">
              From total beginner to seasoned hacker — there's a place for everyone in Claw Command.
            </p>
          </div>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div key={i} className={`feature-card animate-fade-in stagger-${i + 1}`}>
                <span className="feature-icon">{f.icon}</span>
                <div className="feature-title">{f.title}</div>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPRING 2026 HIGHLIGHTS ───────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Spring 2026</h2>
            <p className="section-desc">Topics and events we're covering this semester.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', maxWidth: 720, margin: '0 auto' }}>
            {semesterHighlights.map((e, i) => (
              <span key={i} className={getBadgeClass(e.type)} style={{ fontSize: 16, padding: '3px 12px' }}>
                {e.event}
              </span>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <button className="btn btn-primary" onClick={() => navigate('/events')}>
              See Full Schedule →
            </button>
          </div>
        </div>
      </section>

      {/* ── PHOTOS ───────────────────────────────────────── */}
      <section className="photos-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Photos</h2>
            <p className="section-desc">Moments from our workshops, CTFs, and events.</p>
          </div>
        </div>
        <div className="photos-grid">
          {PHOTOS.map((src, i) => (
            <div key={i} className="photo-slot" onClick={() => setLightbox(src)} style={{ cursor: 'zoom-in' }}>
              <img src={src} alt={`Club photo ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ── SPONSORS ─────────────────────────────────────── */}
      <section className="sponsors-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sponsors</h2>
            <p className="section-desc">
              Interested in sponsoring Claw Command?{' '}
              <a href="https://www.instagram.com/claw.command/" target="_blank" rel="noopener noreferrer">
                Reach out to us.
              </a>
            </p>
          </div>
          <div className="sponsors-grid">
            {SPONSORS.map((sponsor, i) => (
              <div key={i} className="sponsor-slot">
                <img src={sponsor.src} alt={sponsor.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────── */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <img
            className="lightbox-img"
            src={lightbox}
            alt="Full size"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </main>
  );
}
