const ITEMS = [
  'Broadcast Equipment', 'Harris Spares', 'NATUEL Products', 'RF Transistors',
  'HVAC Systems', 'Importer & Exporter', 'Delhi Based', 'Akashvani Supplier',
  'Doordarshan Partner', '20+ Years Experience', 'Prasar Bharati',
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="ticker-sep" style={{ margin: '0 1rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
