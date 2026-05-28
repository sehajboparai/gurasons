import { useEffect } from 'react';
import { DB } from '../data/db';

const CRS_CLIENTS = [
  'Dr. Ambedkar Dalitha Varga Abhiruddi Sangam (DADAS), Andhra Pradesh',
  'Shree Jagrut Nagrik Trust, Gujarat',
  'Krishi Vigyan Kendra, Palampur Mandi, Himachal Pradesh',
  'Veyth Theatre Group & Cultural Society, Haryana',
  'Bharti Gramotthan Samajik Vikas Sansthan, Uttar Pradesh',
  'Health Care Foundation, Kerala',
  'Dedicated Society For Education And Science, Jharkhand',
  'Relief and Help Society, Chattisgarh',
  'Manav Seva Sansthan Seva, Uttar Pradesh',
  'Devanayagi Educational Trust, Tamil Nadu',
];

export default function Clients() {
  useEffect(() => {
    document.title = 'Clients - Gursons India';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-enter" style={{ paddingTop: 70 }}>

      {/* HERO */}
      <section style={{
        padding: '100px 0 60px',
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px', pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="eyebrow animate-fadeUp delay-1">Our Clients</div>
          <h1 className="animate-fadeUp delay-2" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 800, lineHeight: 1, letterSpacing: -2 }}>
            TRUSTED<br /><span style={{ color: 'var(--gold)' }}>BY THE</span><br />BEST
          </h1>
          <p className="animate-fadeUp delay-3" style={{ color: 'var(--white-70)', fontSize: 16, marginTop: '1rem', maxWidth: 480 }}>
            From Akashvani Bhavan to Prasar Bharati — India's top broadcast institutions
            rely on Gursons India for quality equipment and components.
          </p>
        </div>
      </section>

      {/* CLIENTS GRID */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Main Clients</div>
          <h2 className="section-title">Broadcasting Partners</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden', marginTop: '2rem' }}>
            {DB.clients.map((c, i) => (
              <div key={c.id} style={{
                background: 'var(--navy-mid)', padding: '1.5rem',
                display: 'flex', alignItems: 'center', gap: '1.25rem',
                transition: 'background 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.08)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--navy-mid)'}
              >
                <div style={{
                  fontFamily: 'var(--font-head)', fontSize: 36, fontWeight: 800,
                  color: 'rgba(255,255,255,0.1)', lineHeight: 1, minWidth: 50,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--white)' }}>{c.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--white-70)', marginTop: 3, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
                    {c.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="section-sm" style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--navy-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">Our Reach</div>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
                Pan-India<br /><span style={{ color: 'var(--gold)' }}>Presence</span>
              </h2>
              <p style={{ color: 'var(--white-70)', fontSize: 14, lineHeight: 1.8 }}>
                Our clients span from Kargil in the north to Kerala in the south,
                from Gujarat in the west to Guwahati in the east.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                {[['15+', 'States'], ['500+', 'Clients'], ['20+', 'Years'], ['1K+', 'Products']].map(([n, l]) => (
                  <div key={l} style={{ background: 'var(--white-10)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '1rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-head)', fontSize: 28, fontWeight: 800, color: 'var(--gold)' }}>{n}</div>
                    <div style={{ fontSize: 11, color: 'var(--white-70)', letterSpacing: 2, textTransform: 'uppercase', marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* India map visualization */}
            <div style={{
              background: 'var(--white-10)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16, padding: '2rem', minHeight: 300,
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)' }}>Client Locations</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {[...new Set(DB.clients.map(c => c.location.split(',')[0]))].map(loc => (
                  <div key={loc} style={{
                    padding: '6px 14px', background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.2)', borderRadius: 4,
                    fontSize: 12, color: 'var(--gold)', fontWeight: 500,
                    animation: `float3d ${3 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}>{loc}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRS CLIENTS */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Social Responsibility</div>
          <h2 className="section-title">CSR Clients</h2>
          <p style={{ color: 'var(--white-70)', marginBottom: '2rem', maxWidth: 560 }}>
            Beyond business, we proudly support social development organizations across India
            through our CSR initiatives.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {CRS_CLIENTS.map((c, i) => (
              <div key={i} style={{
                padding: '1rem 1.25rem',
                background: 'var(--white-10)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8, fontSize: 14, color: 'var(--white-70)',
                display: 'flex', alignItems: 'flex-start', gap: 10,
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--white-70)'; }}
              >
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: 6 }} />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
