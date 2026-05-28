import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const go = (path) => { navigate(path); window.scrollTo(0, 0); };

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="nav-logo-box" style={{ fontSize: 20, padding: '6px 14px' }}>GURSONS</div>
              <span className="nav-logo-sub">INDIA</span>
            </div>
            <p className="footer-desc">
              Prominent importer and supplier of broadcast equipment, RF transistors,
              Harris spares, NATUEL products, and electronic components.
              Serving India's leading broadcasters since 2004.
            </p>
          </div>

          <div>
            <div className="footer-title">Navigate</div>
            <ul className="footer-links">
              {[['/', 'Home'], ['/about', 'About Us'], ['/products', 'Products'], ['/clients', 'Clients'], ['/contact', 'Contact']].map(([path, label]) => (
                <li key={path}><a onClick={() => go(path)}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-title">Products</div>
            <ul className="footer-links">
              {['Harris Spares', 'NATUEL Products', 'Broadcast Equipment', 'HVAC Systems', 'RF Transistors'].map(p => (
                <li key={p}><a onClick={() => { go('/products'); }}>{p}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-title">Contact</div>
            <div style={{ fontSize: 14, color: 'var(--white-70)', lineHeight: 2 }}>
              <div>2920, New Sunny Enclave</div>
              <div>Sec-123, S.A.S. Nagar</div>
              <div>Mohali, Punjab-140301</div>
              <div style={{ marginTop: 8, color: 'var(--white)' }}>+91-9811034938</div>
              <div>+91-9872727725</div>
              <div style={{ color: 'var(--gold)', marginTop: 4 }}>gursonsindia@gmail.com</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">© 2024 Gursons India. All Rights Reserved.</div>
          <div className="footer-copy">Broadcasting Equipment Specialists · India</div>
        </div>
      </div>
    </footer>
  );
}
