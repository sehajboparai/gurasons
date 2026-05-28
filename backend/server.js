const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// ─── IN-MEMORY DATABASE ─────────────────────────────────────────
let db = {
  products: [
{ id: 1, category: 'Broadcast Equipment',name: 'AXON 50 FM Transmitter 2 U Body', image: '/images/axon50w.jpg', description: 'Professional stereo FM transmitter with dynamic RDS and WEB/SNMP connectivity', inStock: true,  partNumber: 'AXON 50W'  },
{ id: 2,  category: 'Broadcast Equipment', name: 'AXON 50-1 FM Transmitter',     image: '/images/axon50w.jpg',description: 'Compact Architecture - Stereo Analogue Frequency Modulation Radio Station Equipment OIRT & JAPAN Bands, WEB TCP/IP Telemetry Options',  inStock: true,  partNumber: 'Exciter Radio Station AXON 50-1'},
{ id: 3,  category: 'Broadcast Equipment',  name: 'AXON 100 W FM Transmitter',   image: '/images/axon-100w-broadcast-fm-transmitter.jpg',  description: 'Professional stereo FM transmitter with dynamic RDS and WEB/SNMP connectivity.',inStock: true, partNumber: 'AXON 100W' },
{ id: 4,  category: 'Broadcast Equipment',      name: 'TEM Opera Plus 50 W FM Transmitter',  image: '/images/TEMOperaPlus50WFMTransmitter.jpg', description: 'OPERA plus 50W FM 87,5÷108MHz transmitters use amplifiers with 6^ generation LDMOS technology, practically unbreakable.',  inStock: true,  partNumber: 'A07E0051' },
{ id: 5,  category: 'Broadcast Equipment',      name: 'TEM Opera Plus 100 W FM Transmitter',  image: '/images/100WFMTransmitter.jpg', description: 'OPERA plus 100W FM 87,5÷108MHz transmitters use amplifiers with 6^ generation LDMOS technology, practically unbreakable.',  inStock: true,  partNumber: 'A07E0101' },
{ id: 6,  category: 'Broadcast Equipment',      name: 'AXON 30 W FM Transmitter',        image: '/images/AXON30WFMTransmitter.jpg',    description: 'Professional stereo FM transmitter with dynamic RDS and WEB/SNMP connectivity.',            inStock: true,  partNumber: 'AXON 30W' },
  ],
  clients: [
    { id: 1, name: 'Central Stores, Akashvani Bhavan', location: 'New Delhi' },
    { id: 2, name: 'All India Radio & TV', location: 'Kolkata' },
    { id: 3, name: 'All India Radio & Doordarshan', location: 'Guwahati' },
    { id: 4, name: 'Doordarshan Kendra Mandi House', location: 'Delhi' },
    { id: 5, name: 'All India Radio', location: 'Gangtok' },
    { id: 6, name: 'AIR High Power Transmitter, TV Tower', location: 'Pitampura, Delhi' },
    { id: 7, name: 'DTH, Doordarshan', location: 'Delhi' },
    { id: 8, name: 'Prasar Bharati, All India Radio', location: 'Kargil' },
    { id: 9, name: 'Akashvani', location: 'Srinagar, J&K' },
    { id: 10, name: 'Akashvani', location: 'Chandigarh' },
    { id: 11, name: 'Apsara Banquet Hall', location: 'Delhi' },
    { id: 12, name: 'Rukmini Devi Public School', location: 'Delhi' },
  ],
  team: [
    { id: 1, name: 'G.S. Bitta', role: 'Proprietor', phone: '+91-9811034938', exp: '20+ years', initials: 'GB' },
    { id: 2, name: 'Ishtdeep Singh', role: 'Foreign Executive', phone: '—', exp: '10+ years', initials: 'IS' },
    { id: 3, name: 'Akashdeep Singh ', role: 'Manager', phone: '+91-9811856056', exp: '2+ years', initials: 'AS' },
    { id: 4, name: 'Riyajul Ansari', role: 'Technical (AC)', phone: '+91-9958677285', exp: '12+ years', initials: 'RA' },
  ],
  categories: [
    { id: 1, name: 'Broadcast Equipment & Spares', icon: '📡', description: 'Television studio broadcast equipment and spare parts of different brands.' },
    { id: 2, name: 'Importer-Exporter', icon: '✈️', description: 'Self E-Filing of documentations, E-Payments, Real Time Tracking.' },
    
  ],
  messages: [],
  nextId: 14,
};

// ─── PRODUCTS ───────────────────────────────────────────────────
app.get('/api/products', (req, res) => {
  const { category, search } = req.query;
  let results = [...db.products];
  if (category && category !== 'All') results = results.filter(p => p.category === category);
  if (search) results = results.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );
  res.json({ success: true, data: results, total: results.length });
});

app.post('/api/products', (req, res) => {
  const { name, category, description, partNumber, inStock } = req.body;
  if (!name || !category) return res.status(400).json({ success: false, message: 'Name and category required' });
  const product = { id: db.nextId++, name, category, description: description || '', partNumber: partNumber || '', inStock: inStock !== false };
  db.products.push(product);
  res.status(201).json({ success: true, data: product });
});

app.put('/api/products/:id', (req, res) => {
  const idx = db.products.findIndex(p => p.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ success: false, message: 'Not found' });
  db.products[idx] = { ...db.products[idx], ...req.body };
  res.json({ success: true, data: db.products[idx] });
});

app.delete('/api/products/:id', (req, res) => {
  const idx = db.products.findIndex(p => p.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ success: false, message: 'Not found' });
  db.products.splice(idx, 1);
  res.json({ success: true });
});

// ─── OTHER ROUTES ────────────────────────────────────────────────
app.get('/api/categories', (req, res) => res.json({ success: true, data: db.categories }));
app.get('/api/clients', (req, res) => res.json({ success: true, data: db.clients }));
app.get('/api/team', (req, res) => res.json({ success: true, data: db.team }));
app.get('/api/stats', (req, res) => res.json({ success: true, data: { yearsExperience: 20, clientsServed: 500, productsAvailable: 1000, statesCovered: 15 } }));

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ success: false, message: 'Name, email, message required' });
  db.messages.push({ id: db.messages.length + 1, name, email, phone: phone || '', message, createdAt: new Date().toISOString() });
  res.status(201).json({ success: true, message: 'Message sent successfully!' });
});

app.get('/api/messages', (req, res) => res.json({ success: true, data: db.messages }));
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Gursons India API → http://localhost:${PORT}`));
