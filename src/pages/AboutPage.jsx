import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <main className="app-main">
      <div className="page-content">

        {/* Page header */}
        <div className="animate-fade-in" style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
          <img
            src="/icons/Claw_Command_Bird_Only_White.svg"
            alt="Claw Command"
            className="hero-logo hero-logo-dark"
            style={{ width: 80, margin: '0 auto var(--space-4)' }}
          />
          <img
            src="/icons/Claw_Command_Bird_Only.svg"
            alt="Claw Command"
            className="hero-logo hero-logo-light"
            style={{ width: 80, margin: '0 auto var(--space-4)' }}
          />
          <h1 className="section-title">About Us</h1>
        </div>

        <div className="about-section">

          <p className="about-lead animate-fade-in stagger-1">
            Cal State LA's first cybersecurity club — bridging hardware and software security.
          </p>

          <div className="about-block animate-fade-in stagger-2">
            <h3>Who We Are</h3>
            <p>
              Welcome to <strong>Claw Command Cyber Club</strong> — Cal State LA's first dedicated
              cybersecurity organization. We're a community of <strong>varioues majors</strong> united
              by a passion for security, ethical hacking, and building a safer digital world. We're new,
              we're growing, and we want you to help shape what we become.
            </p>
          </div>

          <div className="about-block animate-fade-in stagger-3">
            <h3>What We Do</h3>
            <p>
              From hands-on <strong>workshops</strong> using real security tools to <strong>CTF
              competitions</strong>, guest speakers, <strong>hardware hacking</strong> sessions, and more
              — we cover the full spectrum of cybersecurity. Crack passwords, analyze malware, map WiFi
              networks, pick locks, and compete against other schools. Each week is something new.
            </p>
          </div>

          <div className="about-block animate-fade-in stagger-4">
            <h3>Who Can Join</h3>
            <p>
              Everyone is welcome, from <strong>complete beginners</strong> to students with experience.
              CS, EE, CIS, and all majors are encouraged to join. If you want to learn how systems work
              (and how they break), you belong here. No prior security experience required.
            </p>
          </div>

          <div className="about-block animate-fade-in stagger-5">
            <h3>Where & When</h3>
            <p>
              We meet <strong>weekly</strong> during the semester in the{' '}
              <strong>Circuit Space (ET B-105)</strong> at Cal State LA. Check our events page or
              follow us on Instagram <strong>@claw.command</strong> for the latest schedule updates,
              workshop materials, and announcements.
            </p>
          </div>

          <div className="about-block animate-fade-in stagger-5">
            <h3>The SoCal Scene</h3>
            <p>
              Cybersecurity in Southern California is more than just a college club, it's a
              thriving community of hackers, researchers, and professionals who meet, compete,
              and share knowledge year round. Claw Command actively connects with this scene so
              our members can build real relationships beyond campus.
            </p>
            <ul className="about-community-list">
              {/*
              <li>
                <span className="about-community-name">BSides </span>
                <span className="about-community-desc">
                </span>
              </li>
              */}
                <li>
                <span className="about-community-name">Irvine Underground</span>
                <span className="about-community-desc">
                  Join us in Irvine for Irvine Underground every second friday of the month. Meet various people and you'll always see one of use there. Join us for the talk of the month from people who are knowledgeable in their field.
                </span>
              </li>
              <li>
                <span className="about-community-name">OC2600</span>
                <span className="about-community-desc">
                  Join us at 23b lab every first of the month. Meet various people and you'll always see one of use there.
                </span>
              </li>
              <li>
                <span className="about-community-name">Isaca Los Angeles</span>
                <span className="about-community-desc">
                  Regular chapter meetings focused. Good for members
                  interested in web security, GRC, and meeting others in the industry.
                </span>
              </li>
              <li>
                <span className="about-community-name">Null Space Labs</span>
                <span className="about-community-desc">
                  LA's hacker space in Chinatown. Open nights, hardware projects, and a community
                  of makers and security researchers you can learn from in person.
                </span>
              </li>
              <li>
                <span className="about-community-name">DEF CON</span>
                <span className="about-community-desc">
                  The world's largest hacker conference, just a drive away. We plan to attend as
                  a group, hitting the villages, and absorbing everything the
                  community has to offer.
                </span>
              </li>
              <li>
                <span className="about-community-name">DEF CON Groups</span>
                <span className="about-community-desc">
                  Local chapters like DC626 run monthly meetups with talks and hangout events. They are free 
                  free and open to all skill levels. Find and join us there.
                </span>
              </li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-8)' }}>
            <a
              href="https://www.instagram.com/claw.command/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram →
            </a>
            <a
              href="https://calstatela.co1.qualtrics.com/jfe/form/SV_54t7EYCRw7PEW8e"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
            <button className="btn btn-ghost" onClick={() => navigate('/')}>
              ← Home
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
