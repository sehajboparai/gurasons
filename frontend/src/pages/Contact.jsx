import { useState, useEffect } from 'react';
import { apiFetch } from '../data/db';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [msg, setMsg] = useState('');
  const [msgType, setMsgType] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedCount, setSubmittedCount] = useState(0);

  useEffect(() => {
    document.title = 'Contact - Gursons India';
    window.scrollTo(0, 0);
  }, []);

  

  const inputSt = {
    width: '100%', background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.15)', color: '#fff',
    padding: '13px 16px', fontSize: 15, fontFamily: 'var(--font-body)',
    outline: 'none', borderRadius: 8, transition: 'all 0.2s',
  };

  const CONTACT_INFO = [
    { icon: '📍', label: 'Address', value: '2920, New Sunny Enclave, Sec-123, S.A.S. Nagar\nMohali, Punjab-140301, India' },
    { icon: '📞', label: 'Phone', value: '+91-9811034938\n+91-9872727725' },
    { icon: '✉️', label: 'Email', value: 'gursonsindia@gmail.com' },
    { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 9:00 AM – 6:00 PM\nSunday: Closed' },
  ];

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
          <div className="eyebrow animate-fadeUp delay-1">Get In Touch</div>
          <h1 className="animate-fadeUp delay-2" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 800, lineHeight: 1, letterSpacing: -2 }}>
            CONTACT<br /><span style={{ color: 'var(--gold)' }}>US</span>
          </h1>
          <p className="animate-fadeUp delay-3" style={{ color: 'var(--white-70)', fontSize: 16, marginTop: '1rem', maxWidth: 420 }}>
            Have a query about our products or need a quote?
            We'd love to hear from you.
          </p>
        </div>
      </section>

 {/* CONTACT LAYOUT */}
<section className="section" style={{ padding: '100px 0' }}>
  <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    
    {/* Centered Wrapper Box */}
    <div style={{ 
      maxWidth: '600px', // Increased max-width to look elegant with bigger font sizes
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center' 
    }}>
      
      {/* Increased Eyebrow size */}
      <div className="eyebrow" style={{ textAlign: 'center', fontSize: 16, letterSpacing: 3 }}>Reach Us</div>
      
      {/* Increased Heading size */}
      <h2 style={{ 
        fontFamily: 'var(--font-head)', 
        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', // Increased size range
        fontWeight: 800, 
        marginBottom: '2.5rem',
        textAlign: 'center',
        lineHeight: 1.2
      }}>
        Always Here<br /><span style={{ color: 'var(--gold)' }}>For You</span>
      </h2>

      {/* Cards list wrapper */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
        {CONTACT_INFO.map(info => (
          <div key={info.label} style={{
            display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
            padding: '1.75rem', background: 'rgba(255,255,255,0.05)', // Increased padding for balance
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12,
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.background = 'rgba(201,168,76,0.05)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
          >
            {/* Increased Icon size */}
            <div style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>{info.icon}</div>
            <div>
              {/* Increased Label size */}
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 6 }}>{info.label}</div>
              {/* Increased Value text size */}
              <div style={{ fontSize: 17, color: 'var(--white-70)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{info.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Message counter */}
      {submittedCount > 0 && (
        <div style={{
          marginTop: '2rem', padding: '1.25rem',
          background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
          borderRadius: 8, fontSize: 15, color: '#22C55E', width: '100%', textAlign: 'center'
        }}>
          ✓ {submittedCount} message{submittedCount > 1 ? 's' : ''} submitted this session
        </div>
      )}

    </div>

  </div>
</section>
    </div>
  );
}
