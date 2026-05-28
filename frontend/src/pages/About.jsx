import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DB } from '../data/db';


const VALUES = [
  { icon: '🏆', title: 'Unmatched Quality', desc: 'Maintaining standard quality measures at all product handling stages has been an age-old tradition at Gursons India.' },
  { icon: '🚚', title: 'Timely Delivery', desc: 'We ensure timely delivery of consignments through a well-connected transportation network across the country.' },
  { icon: '💰', title: 'Best Price', desc: 'We can repair all electronics equipment at reasonable rates with full satisfaction and as per terms & conditions.' },
  { icon: '🔧', title: 'Expert Technicians', desc: 'Highly trained and experienced persons to repair equipment professionally, also capable in indigenous development.' },
];

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'About Us - Gursons India';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-enter" style={{ paddingTop: 70 }}>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section style={{
        padding: '100px 0 60px',
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="eyebrow animate-fadeUp delay-1">Our Story</div>
          <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px' }} className="animate-fadeUp delay-2">
            ABOUT<br /><span style={{ color: 'var(--gold)' }}>GURSONS</span><br />INDIA
          </h1>
          <p style={{ maxWidth: 500, color: 'var(--white-70)', fontSize: 17, lineHeight: 1.7, marginTop: '1.5rem' }} className="animate-fadeUp delay-3">
            Established in Punjab , we have been satisfactorily
            catering to industrial needs with standard and bespoke configurations for over 20 years.
          </p>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div className="eyebrow">Who We Are</div>
              <h2 className="section-title">Gursons India</h2>
              <p style={{ color: 'var(--white-70)', lineHeight: 1.8, marginBottom: '1rem' }}>
                We at Gursons India supply and trade in a different range of Broadcasting equipments,
                spares and components which assure of competitive performance. We are a prominent
                Importer and Supplier of RF Transistors which are optimally efficient with regards to
                cut-off frequency and speed.
              </p>
              <p style={{ color: 'var(--white-70)', lineHeight: 1.8, marginBottom: '1rem' }}>
                We give precedence to quality, so we have professional collaboration only with
                dependable manufacturers which are quality-centric along with price efficiency.
                Our key goal is to serve the clients with the product range that can improve the
                customers' productivity, so resultantly, their profitability.
              </p>
              <p style={{ color: 'var(--white-70)', lineHeight: 1.8, marginBottom: '2rem' }}>
                GURSONS INDIA was incorporated with Proprietor namely G. S. Bitta. The company
                business is being managed by a team of experienced professionals and associates.
                We are result oriented company with trained and qualified manpower.
              </p>
              <button className="btn btn-gold" onClick={() => { navigate('/contact'); window.scrollTo(0,0); }}>
                Contact Us →
              </button>
            </div>

            {/* 3D rotating badge */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                background: 'var(--white)', color: 'var(--navy)',
                borderRadius: 16, padding: '2.5rem', textAlign: 'center',
                animation: 'rotateY3d 8s ease-in-out infinite',
                transformStyle: 'preserve-3d',
              }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 52, fontWeight: 800, letterSpacing: -2 }}>GURSONS</div>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 18, fontWeight: 600, letterSpacing: 8, color: 'var(--navy-light)' }}>INDIA</div>
                <div style={{ width: '100%', height: 3, background: 'var(--gold)', margin: '1.5rem 0' }} />
                <div style={{ fontSize: 12, letterSpacing: 3, color: 'var(--navy-light)', textTransform: 'uppercase' }}>Est. 2004 · Punjab, India</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
                  {[['20+', 'Years'], ['500+', 'Clients']].map(([n, l]) => (
                    <div key={l} style={{ padding: '1rem', background: 'var(--off-white)', borderRadius: 8 }}>
                      <div style={{ fontFamily: 'var(--font-head)', fontSize: 32, fontWeight: 800, color: 'var(--navy)' }}>{n}</div>git init
                      <div style={{ fontSize: 11, color: 'var(--navy-light)', letterSpacing: 2, textTransform: 'uppercase' }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 12, padding: '1.5rem' }}>
                <div style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>Proprietor</div>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 700 }}>Mr. G.S. Bitta</div>
                <div style={{ fontSize: 14, color: 'var(--white-70)', marginTop: 4 }}>20+ years marketing executive experience</div>
                <div style={{ fontSize: 14, color: 'var(--gold)', marginTop: 8 }}>+91-9811034938</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--navy-mid)' }}>
        <div className="container">
          <div className="eyebrow">Our Strengths</div>
          <h2 className="section-title">What Makes Us<br /><span style={{ color: 'var(--gold)' }}>The Best</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {VALUES.map((v, i) => (
              <div key={v.title} style={{
                background: 'var(--white-10)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12, padding: '2rem', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                <div style={{ fontSize: 36, marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, marginBottom: '0.75rem' }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--white-70)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Our People</div>
          <h2 className="section-title">Meet the Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {DB.team.map((t, i) => (
              <div key={t.id} style={{
                background: 'var(--white-10)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12, padding: '2rem', textAlign: 'center',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: i % 2 === 0 ? 'var(--white)' : 'var(--gold)',
                  color: i % 2 === 0 ? 'var(--navy)' : 'var(--navy)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                  fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 800,
                  animation: `float3d ${3 + i * 0.5}s ease-in-out infinite`,
                }}>
                  {t.initials}
                </div>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Mr. {t.name}</div>
                <div style={{ fontSize: 11, color: 'var(--gold)', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.role}</div>
                <div style={{ fontSize: 13, color: 'var(--white-70)', fontFamily: 'monospace' }}>{t.phone}</div>
                <div style={{ fontSize: 11, color: 'var(--white-30)', marginTop: 4 }}>{t.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIDE-BY-SIDE IMAGES SECTION ─────────────────────────── */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
            gap: '2rem' 
          }}>
            {/* Image 1 Container */}
            <div style={{
              overflow: 'hidden',
              borderRadius: 16,
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'var(--white-5)',
              position: 'relative',
              height: '400px'
            }}>
              <img 
                src="/images/license.png" // Update paths as needed
                alt="Gursons India Sole and Exclusive Dealer" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '1.5rem', background: 'linear-gradient(transparent, rgba(10,25,47,0.95))'
              }}>
                <div style={{ color: 'var(--gold)', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}></div>
                <div style={{ fontSize: 18, fontWeight: 600, marginTop: 4 }}>Gursons India Sole and Exclusive Dealer</div>
              </div>
            </div>

            {/* Image 2 Container */}
            <div style={{
              overflow: 'hidden',
              borderRadius: 16,
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'var(--white-5)',
              position: 'relative',
              height: '400px'
            }}>
              <img 
              
                src= '/images/pic.jpeg'// Update paths as needed
                alt="TKO Head Office " 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '1.5rem', background: 'linear-gradient(transparent, rgba(10,25,47,0.95))'
              }}>
                <div style={{ color: 'var(--gold)', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}></div>
                <div style={{ fontSize: 18, fontWeight: 600, marginTop: 4 }}>TKO Head Office Visit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CSR CLIENTS ─────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--navy-border)' }}>
        <div className="container">
          <div className="eyebrow">CSR Initiatives</div>
          <h2 className="section-title">Social Responsibility</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              'Dr. Ambedkar Dalitha Varga Abhiruddi Sangam, Andhra Pradesh',
              'Shree Jagrut Nagrik Trust, Gujarat',
              'Krishi Vigyan Kendra, Palampur Mandi, Himachal Pradesh',
              'Veyth Theatre Group & Cultural Society, Haryana',
              'Bharti Gramotthan Samajik Vikas Sansthan, Uttar Pradesh',
              'Health Care Foundation, Kerala',
              'Dedicated Society For Education And Science, Jharkhand',
              'Relief and Help Society, Chattisgarh',
              'Manav Seva Sansthan, Uttar Pradesh',
              'Devanayagi Educational Trust, Tamil Nadu',
            ].map(c => (
              <div key={c} style={{
                padding: '1rem 1.25rem', background: 'var(--white-10)',
                border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8,
                fontSize: 14, color: 'var(--white-70)', display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}