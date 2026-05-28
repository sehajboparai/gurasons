import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const go = (path) => { navigate(path); window.scrollTo(0, 0); };

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Clients', path: '/clients' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <div className="nav-logo" onClick={() => go('/')}>
            <img src="/images/Logo.jpeg" alt="Gursons India" className="nav-logo-img" />
          </div>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.path}>
                <a
                  className={location.pathname === l.path ? 'active' : ''}
                  onClick={() => go(l.path)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button className="nav-cta" onClick={() => go('/contact')}>
            Get Quote
          </button>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.path} onClick={() => go(l.path)}
            style={{ color: location.pathname === l.path ? '#fff' : undefined }}>
            {l.label}
          </a>
        ))}
        <button
          className="btn btn-primary"
          style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
          onClick={() => go('/contact')}
        >
          Get Quote →
        </button>
      </div>
    </>
  );
}
