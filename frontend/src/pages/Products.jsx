import { useState, useEffect } from 'react';
import { DB, apiFetch } from '../data/db';

export default function Products() {
  const [products, setProducts] = useState([...DB.products]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.title = 'Products - Gursons India';
    window.scrollTo(0, 0);
    loadProducts();
  }, []);

  async function loadProducts() {
    const res = await apiFetch('/products');
    if (res?.data) setProducts(res.data);
  }

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.partNumber.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

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
          backgroundSize: '60px 60px',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="eyebrow animate-fadeUp delay-1">Product Catalog</div>
          <h1 className="animate-fadeUp delay-2" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 800, lineHeight: 1, letterSpacing: -2 }}>
            OUR<br /><span style={{ color: 'var(--gold)' }}>PRODUCTS</span>
          </h1>
          <p className="animate-fadeUp delay-3" style={{ color: 'var(--white-70)', fontSize: 16, marginTop: '1rem', maxWidth: 480 }}>
            Browse our extensive catalog of broadcast equipment, Harris spares, NATUEL products,
            and electronic components.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="section">
        <div className="container">

          {/* Filters & Search */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {categories.map(c => (
                <button key={c}
                  onClick={() => setActiveCategory(c)}
                  style={{
                    padding: '7px 18px', fontSize: 12, fontWeight: 600,
                    letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer',
                    border: '1px solid',
                    borderColor: activeCategory === c ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
                    background: activeCategory === c ? 'var(--gold)' : 'transparent',
                    color: activeCategory === c ? 'var(--navy)' : 'rgba(255,255,255,0.7)',
                    borderRadius: 4, transition: 'all 0.2s', fontFamily: 'var(--font-body)',
                  }}>
                  {c}
                </button>
              ))}
              <span style={{ fontSize: 13, color: 'var(--white-30)' }}>{filtered.length} item{filtered.length !== 1 ? 's' : ''}</span>
            </div>
            <input
              style={{
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff', padding: '9px 16px', fontSize: 13, borderRadius: 6,
                outline: 'none', width: 240, fontFamily: 'var(--font-body)',
              }}
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
            />
          </div>

          {/* Products Grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--white-30)', fontSize: 16 }}>
              No products found. Try a different filter or search term.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {filtered.map((p, i) => (
                <div key={p.id} className="product-card" style={{ animationDelay: `${i * 0.05}s`, padding: 0, overflow: 'hidden' }}>

                  {/* ── COHESIVE IMAGE WRAPPER ── */}
                  <div style={{ 
                    width: '100%', 
                    height: 200,                
                    background: '#12223a',       
                    overflow: 'hidden',          
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',     
                          objectPosition: 'center', 
                          display: 'block' 
                        }}
                        onError={e => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}

                    {/* Fallback layout shown when image fails */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: p.image ? 'none' : 'flex',
                      alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                      gap: 8, background: 'linear-gradient(135deg, rgba(201,168,76,0.05), rgba(255,255,255,0.02))'
                    }}>
                      <div style={{ fontSize: 36, opacity: 0.3 }}>📦</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', letterSpacing: 2, textTransform: 'uppercase' }}>No Image Available</div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)' }}>{p.category}</span>
                      <span className={`badge ${p.inStock ? 'badge-green' : 'badge-red'}`}>
                        {p.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, marginBottom: '0.5rem', letterSpacing: -0.5 }}>{p.name}</h3>
                    <p style={{ fontSize: 13, color: 'var(--white-70)', lineHeight: 1.6, marginBottom: '1rem' }}>{p.description}</p>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', letterSpacing: 1 }}>
                      PN: {p.partNumber || '—'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}