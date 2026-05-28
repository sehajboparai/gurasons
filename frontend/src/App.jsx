import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'var(--navy)', paddingTop: 70,
    }}>
      <div style={{
        fontFamily: 'var(--font-head)', fontSize: 'clamp(80px, 15vw, 160px)',
        fontWeight: 800, color: 'rgba(255,255,255,0.05)', lineHeight: 1,
      }}>404</div>
      <div style={{ fontFamily: 'var(--font-head)', fontSize: 32, fontWeight: 700, marginTop: '-1rem' }}>
        Page Not Found
      </div>
      <p style={{ color: 'var(--white-70)', marginTop: '1rem', marginBottom: '2rem' }}>
        The page you're looking for doesn't exist.
      </p>
      <a href="/" className="btn btn-primary">← Back to Home</a>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppInner />
    </HashRouter>
  );
}
