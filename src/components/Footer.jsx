import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      {/* FOOTER BAR */}
      <footer className="footer">
        <div className="footer-inner">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              <img src="/icons/Claw_Command_Bird_Only_White.svg" alt="" className="footer-logo footer-logo-dark" />
              <img src="/icons/Claw_Command_Bird_Only.svg"       alt="" className="footer-logo footer-logo-light" />
              <span className="footer-brand-name">Claw Command</span>
            </div>
            <p className="footer-tagline">
              Cal State LA's cybersecurity club.<br />
              Bridging hardware &amp; software security.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/board">Board</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="footer-col-title">Connect</div>
            <div className="footer-social">
              <a href="https://www.instagram.com/claw.command/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://calstatela.co1.qualtrics.com/jfe/form/SV_54t7EYCRw7PEW8e" target="_blank" rel="noopener noreferrer">
                Discord
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Claw Command — Cal State LA</span>
          <span className="footer-motto">Hack Ethically. Defend Boldly.</span>
        </div>
      </footer>
    </>
  );
}
