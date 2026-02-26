import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { path: '/about',  label: 'About'  },
  { path: '/board',  label: 'Board'  },
  { path: '/events', label: 'Events' },
];

export default function Header({ theme, onToggleTheme }) {
  const navigate  = useNavigate();
  const location  = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const go = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-inner">

        {/* Brand */}
        <div className="header-brand" onClick={() => go('/')} role="button" tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && go('/')}>
          <img
            src="/icons/Claw_Command_Bird_Only_White.svg"
            alt="Claw Command"
            className="header-logo header-logo-dark"
          />
          <img
            src="/icons/Claw_Command_Bird_Only.svg"
            alt="Claw Command"
            className="header-logo header-logo-light"
          />
          <span className="header-title">
            CLAW COMMAND
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="header-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <button
              key={link.path}
              className={`nav-link${isActive(link.path) ? ' active' : ''}`}
              onClick={() => go(link.path)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '[ Light ]' : '[ Dark ]'}
          </button>
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((m) => !m)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link.path}
            className={`nav-link${isActive(link.path) ? ' active' : ''}`}
            onClick={() => go(link.path)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </header>
  );
}
