import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spring_2026 } from '../data/spring_2026.js';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const FILTERS = [
  { key: 'all',      label: 'All'       },
  { key: 'meeting',  label: 'Meetings'  },
  { key: 'workshop', label: 'Workshops' },
  { key: 'ctf',      label: 'CTF'       },
  { key: 'study',    label: 'Study'     },
  { key: 'event',    label: 'Events'    },
];

function parseLocalDate(dateStr) {
  if (!dateStr) return new Date(NaN);
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (m) {
    const [, y, mo, d] = m;
    return new Date(Number(y), Number(mo) - 1, Number(d));
  }
  return new Date(dateStr);
}

function getStatus(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = parseLocalDate(dateStr);
  if (isNaN(d)) return 'upcoming';
  d.setHours(0, 0, 0, 0);
  if (d.getTime() === today.getTime()) return 'current';
  if (d < today) return 'past';
  return 'upcoming';
}

function FilterBtn({ label, typeKey, active, onClick }) {
  const cls = `badge badge-${typeKey === 'all' ? 'all' : typeKey}`;
  return (
    <button
      onClick={onClick}
      className={cls}
      style={{
        cursor: 'pointer',
        fontSize: 16,
        padding: '4px 14px',
        background: active ? 'var(--accent)' : undefined,
        color:      active ? 'var(--bg)'     : undefined,
        borderColor: active ? 'var(--accent)' : undefined,
      }}
    >
      {label}
    </button>
  );
}

export default function EventsPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const visible = filter === 'all'
    ? Spring_2026
    : Spring_2026.filter((e) => e.type === filter);

  return (
    <main className="app-main">
      <div className="page-content">

        {/* Page header */}
        <div className="text-center animate-fade-in" style={{ marginBottom: 'var(--space-8)' }}>
          <h1 className="section-title">Spring 2026</h1>
          <p
            className="text-muted"
            style={{ marginTop: 'var(--space-3)', fontFamily: 'var(--font-retro)', fontSize: 20, letterSpacing: 1 }}
          >
            Full schedule &amp; events
          </p>
        </div>

        {/* Filter bar */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 'var(--space-8)' }}>
          {FILTERS.map(({ key, label }) => (
            <FilterBtn
              key={key}
              typeKey={key}
              label={label}
              active={filter === key}
              onClick={() => setFilter(key)}
            />
          ))}
        </div>

        {/* Events list */}
        <div className="events-list animate-fade-in stagger-2">
          {visible.map((ev, i) => {
            const status = getStatus(ev.date);
            const d = parseLocalDate(ev.date);
            const day   = isNaN(d) ? '??' : d.getDate();
            const month = isNaN(d) ? '??' : MONTHS[d.getMonth()];

            return (
              <div key={i} className={`event-card ${status}`}>
                <div className="event-date-col">
                  <div className="event-date-day">{day}</div>
                  <div className="event-date-month">{month}</div>
                </div>
                <div className="event-info">
                  <span className={`badge badge-${ev.type}`}>{ev.type}</span>
                  <div className="event-name">{ev.event}</div>
                  {ev.description && (
                    <p className="event-desc">{ev.description}</p>
                  )}
                  {status === 'current' && (
                    <span className="event-today-label">⚡ TODAY</span>
                  )}
                </div>
              </div>
            );
          })}

          {visible.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: 'var(--space-12)',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-retro)',
                fontSize: 22,
                letterSpacing: 1,
              }}
            >
              No events found for this filter.
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
          <button className="btn btn-ghost" onClick={() => navigate('/')}>← Back to Home</button>
        </div>

      </div>
    </main>
  );
}
