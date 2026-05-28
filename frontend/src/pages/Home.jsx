import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroCanvas from '../components/HeroCanvas';
import Ticker from '../components/Ticker';

const STATS = [
  { num: '20', sup: '+', label: 'Years Experience' },
  { num: '500', sup: '+', label: 'Clients Served' },
  { num: '1K', sup: '+', label: 'Products Available' },
  { num: '15', sup: '+', label: 'States Covered' },
];

const CATEGORIES = [
  { icon: '📡', title: 'Broadcast Equipment', desc: 'TV studio broadcast gear and hard-to-find spare parts from top brands.', path: '/products' },
  { icon: '⚡', title: 'RF Transistors', desc: 'Optimally efficient RF transistors with high cut-off frequency and speed.', path: '/products' },

  { icon: '✈️', title: 'Import & Export', desc: 'Seamless import/export with e-filing, e-payments, and real-time tracking.', path: '/contact' },
 
];

const CLIENTS_PREVIEW = [
  'Akashvani Bhavan', 'All India Radio', 'Doordarshan', 'Prasar Bharati', 'DTH Delhi', 'AIR Chandigarh',
];

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  useEffect(() => {
    document.title = 'Gursons India - Broadcast Equipment Specialists';
    // Cursor glow
    const glow = document.querySelector('.cursor-glow');
    if (!glow) return;
    const move = e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const go = (path) => { navigate(path); window.scrollTo(0, 0); };

  return (
    <div className="page-enter">
      {/* Cursor glow */}
      <div className="cursor-glow" />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center',
          position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 50%, #0d1535 100%)',
        }}
      >
        <HeroCanvas />

        {/* Grid texture overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Gold accent line */}
        <div style={{
          position: 'absolute', left: 0, top: '30%', bottom: '30%',
          width: 3, background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
          opacity: 0.6,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 100, paddingBottom: 60 }}>
          <div className="eyebrow animate-fadeUp delay-1">
            Established Punjab, India · Broadcasting Specialists
          </div>

          <h1 style={{
            fontFamily: 'var(--font-head)', fontWeight: 800,
            fontSize: 'clamp(32px, 5.5vw, 64px)',
            lineHeight: 0.95, letterSpacing: '-2px',
            marginBottom: '1.5rem', maxWidth: 900,
          }}>
            <div className="animate-fadeUp delay-2" style={{ color: 'var(--white)', fontSize: 'clamp(28px, 4.5vw, 48px)' }}>PROMINENT</div>
            <div className="animate-fadeUp delay-3" style={{ color: 'var(--white)', fontSize: 'clamp(28px, 4.5vw, 48px)' }}>IMPORTER</div>
            <div className="animate-fadeUp delay-4" style={{
              background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', fontSize: 'clamp(24px, 4vw, 44px)'
            }}>& SUPPLIER</div>
          </h1>

          <p className="animate-fadeUp delay-5" style={{
            maxWidth: 520, color: 'var(--white-70)',
            fontSize: 17, lineHeight: 1.7, marginBottom: '2.5rem',
          }}>
            India's trusted source for broadcast equipment, RF transistors, Harris spares,
            and hard-to-find electronic components. Serving Akashvani, Doordarshan, and
            500+ clients nationwide for over 20 years.
          </p>

          <div className="animate-fadeUp delay-6" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => go('/products')}>
              Explore Products <span>→</span>
            </button>
            <button className="btn btn-outline" onClick={() => go('/contact')}>
              Get a Quote
            </button>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
            gap: '1px', background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.1)',
            marginTop: '4rem', borderRadius: 8, overflow: 'hidden',
          }} className="animate-fadeUp" style2={{ animationDelay: '1s', opacity: 0 }}>
            {STATS.map(s => (
              <div key={s.label} style={{
                background: 'rgba(10,15,46,0.7)', backdropFilter: 'blur(12px)',
                padding: '1.5rem', textAlign: 'center',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                transition: 'background 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(10,15,46,0.7)'}
              >
                <div style={{
                  fontFamily: 'var(--font-head)', fontSize: 44, fontWeight: 800, lineHeight: 1,
                  color: 'var(--white)',
                }}>
                  {s.num}<sup style={{ fontSize: 20, color: 'var(--gold)' }}>{s.sup}</sup>
                </div>
                <div style={{ fontSize: 11, color: 'var(--white-70)', letterSpacing: 2, textTransform: 'uppercase', marginTop: 6 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          color: 'var(--white-30)', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase',
          animation: 'float3d 3s ease-in-out infinite',
        }}>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
          SCROLL
        </div>
      </section>

      {/* ── TICKER ─────────────────────────────────────────────── */}
      <Ticker />

      {/* ── WHAT WE DO ─────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--navy-mid)' }}>
        <div className="container">
          <div className="eyebrow">What We Do</div>
          <h2 className="section-title">Our Services</h2>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem', marginTop: '3rem',
          }}>
            {CATEGORIES.map((c, i) => (
              <div
                key={c.title}
                onClick={() => go(c.path)}
                style={{
                  background: 'var(--white-10)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 12, padding: '2rem',
                  cursor: 'pointer', transition: 'all 0.3s ease',
                  animationDelay: `${i * 0.1}s`,
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(201,168,76,0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: 32, marginBottom: '1rem' }}>{c.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.5px' }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--white-70)', lineHeight: 1.7 }}>{c.desc}</p>
                <div style={{ marginTop: '1.5rem', color: 'var(--gold)', fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GURSONS ────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">Why Choose Us</div>
              <h2 className="section-title">20 Years of<br /><span style={{ color: 'var(--gold)' }}>Excellence</span></h2>
              <p style={{ color: 'var(--white-70)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We supply and trade in a different range of broadcasting equipment, spares, and
                components which assure of competitive performance. As a prominent importer and
                supplier of RF transistors, we are optimally efficient with regards to cut-off
                frequency and speed.
              </p>
              <p style={{ color: 'var(--white-70)', lineHeight: 1.8, marginBottom: '2rem' }}>
                We give precedence to quality, so we have professional collaboration only with
                dependable manufacturers which are quality-centric along with price efficiency.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => go('/about')}>About Us →</button>
                <button className="btn btn-outline" onClick={() => go('/clients')}>Our Clients</button>
              </div>
            </div>

            {/* 3D Card stack */}
            <div style={{ perspective: '1000px', position: 'relative', height: 420 }}>
              {[
                { label: 'Unmatched Quality', desc: 'Every product tested on quality parameters', top: 0, left: 20, rotate: '-4deg', z: 10 },
                { label: 'Timely Delivery', desc: 'Well-connected transport network', top: 80, left: 0, rotate: '2deg', z: 20 },
                { label: 'Competitive Pricing', desc: 'Best rates without compromising quality', top: 160, left: 30, rotate: '-1deg', z: 30 },
              ].map((card, i) => (
                <div
                  key={card.label}
                  style={{
                    position: 'absolute', top: card.top, left: card.left,
                    width: '85%',
                    background: i === 2 ? 'var(--white)' : 'rgba(255,255,255,0.08)',
                    border: `1px solid ${i === 2 ? 'transparent' : 'rgba(255,255,255,0.12)'}`,
                    borderRadius: 12, padding: '1.5rem',
                    transform: `rotateY(${card.rotate})`,
                    boxShadow: i === 2 ? '0 20px 60px rgba(0,0,0,0.5)' : 'none',
                    zIndex: card.z,
                    transition: 'all 0.4s ease',
                    animation: `float3d ${4 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'rotateY(0deg) scale(1.03)'}
                  onMouseLeave={e => e.currentTarget.style.transform = `rotateY(${card.rotate})`}
                >
                  <div style={{
                    fontFamily: 'var(--font-head)', fontSize: 18, fontWeight: 700,
                    color: i === 2 ? 'var(--navy)' : 'var(--white)', marginBottom: 6,
                  }}>
                    {card.label}
                  </div>
                  <div style={{ fontSize: 13, color: i === 2 ? 'var(--navy-light)' : 'var(--white-70)' }}>
                    {card.desc}
                  </div>
                  <div style={{
                    marginTop: '1rem', width: 32, height: 3,
                    background: i === 2 ? 'var(--navy)' : 'var(--gold)', borderRadius: 2,
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS PREVIEW ────────────────────────────────────── */}
      <section className="section-sm" style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--navy-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">Trusted By</div>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800 }}>
                India's Top Broadcasters
              </h2>
            </div>
            <button className="btn btn-outline btn-sm" onClick={() => { navigate('/clients'); window.scrollTo(0, 0); }}>
              View All Clients →
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {CLIENTS_PREVIEW.map(c => (
              <div key={c} className="glass" style={{
                padding: '10px 20px', fontSize: 13, color: 'var(--white-70)',
                transition: 'all 0.2s', cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--white-70)'; e.currentTarget.style.borderColor = ''; }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────── */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, var(--gold) 0%, #a07c30 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
            Need Hard-to-Find Parts?
          </h2>
          <p style={{ color: 'rgba(10,15,46,0.7)', fontSize: 17, marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
            We specialize in sourcing rare broadcast equipment. Contact us today for a quote.
          </p>
          <button
            className="btn"
            style={{ background: 'var(--navy)', color: 'var(--white)', padding: '16px 40px', fontSize: 15, fontWeight: 600 }}
            onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
          >
            Contact Us Today →
          </button>
        </div>
      </section>
    </div>
  );
}
