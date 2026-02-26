import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BOARD = [
  {
    role: 'President',
    name: 'Grecia Campos',
    handle: null,
    photo: '/icons/board1.png',
    bio: `War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku.
        There are heroes on both sides.
        Evil is everywhere.
        In a stunning move, the fiendish droid leader, General Grievous, has swept into the
        Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.`,
  },
  {
    role: 'Vice President',
    name: 'Luis Ponce',
    handle: null,
    photo: '/icons/board2.png',
    bio: `War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku.
          There are heroes on both sides.
          Evil is everywhere.
          In a stunning move, the fiendish droid leader, General Grievous, has swept into the
          Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.`,
  },
  {
    role: 'Secretary',
    name: 'Arlyn Garcia-Martinez',
    handle: null,
    photo: '/icons/board3.png',
    bio: `War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku.
        There are heroes on both sides.
        Evil is everywhere.
        In a stunning move, the fiendish droid leader, General Grievous, has swept into the
        Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.`,
  },
  {
    role: 'Treasurer',
    name: 'Agustin Liscano',
    handle: null,
    photo: '/icons/board4.png',
    bio: `War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku.
        There are heroes on both sides.
        Evil is everywhere.
        In a stunning move, the fiendish droid leader, General Grievous, has swept into the
        Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.`,
  },
  {
    role: 'Infrastructure Lead',
    name: 'Nicholas Lee',
    handle: null,
    photo: '/icons/board5.png',
    bio: `War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku.
        There are heroes on both sides.
        Evil is everywhere.
        In a stunning move, the fiendish droid leader, General Grievous, has swept into the
        Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.`,
  },
];

export default function BoardPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <main className="app-main">
      <div className="page-content">

        {/* Page header */}
        <div className="text-center animate-fade-in" style={{ marginBottom: 'var(--space-10)' }}>
          <h1 className="section-title">Board</h1>
          <p
            className="text-muted"
            style={{ marginTop: 'var(--space-3)', fontFamily: 'var(--font-retro)', fontSize: 20, letterSpacing: 1 }}
          >
            The team keeping Claw Command running
          </p>
        </div>

        {/* Board grid */}
        <div className="board-grid animate-fade-in stagger-2">
          {BOARD.map((member, i) => (
            <div
              key={i}
              className="board-card board-card-clickable"
              onClick={() => setSelected(member)}
            >
              <div className="board-avatar">
                <img src={member.photo} alt={member.role} />
              </div>
              <div className="board-role">{member.role}</div>
              <div className="board-name">{member.name}</div>
              {member.handle && (
                <div className="board-handle">{member.handle}</div>
              )}
              <div className="board-card-hint">click for more</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="animate-fade-in"
          style={{
            textAlign: 'center',
            marginTop: 'var(--space-12)',
            padding: 'var(--space-8)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-retro)',
              fontSize: 20,
              color: 'var(--text-muted)',
              letterSpacing: 1,
              marginBottom: 'var(--space-5)',
            }}
          >
            Want to get more involved? Come to our weekly meetings and make your mark.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => navigate('/events')}>
              See Events →
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/')}>
              ← Home
            </button>
          </div>
        </div>

      </div>

      {/* Modal */}
      {selected && (
        <div className="board-modal-overlay" onClick={() => setSelected(null)}>
          <div className="board-modal" onClick={(e) => e.stopPropagation()}>
            <button className="board-modal-close" onClick={() => setSelected(null)}>✕</button>
            <div className="board-avatar board-modal-avatar">
              <img src={selected.photo} alt={selected.role} />
            </div>
            <div className="board-role" style={{ marginBottom: 'var(--space-1)' }}>{selected.role}</div>
            <div className="board-name" style={{ fontSize: 26, marginBottom: 'var(--space-4)' }}>{selected.name}</div>
            {selected.handle && (
              <div className="board-handle" style={{ marginBottom: 'var(--space-4)' }}>{selected.handle}</div>
            )}
            <p className="board-modal-bio">{selected.bio}</p>
          </div>
        </div>
      )}

    </main>
  );
}
