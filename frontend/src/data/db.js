// Frontend in-memory DB — mirrors the backend
// When backend is running, the API calls will use it.
// If not, the app uses this as fallback.

export const DB = {
  products: [
    // ─── HOW TO ADD YOUR OWN IMAGES ──────────────────────────────────────────
    // 1. Put your image files inside: frontend/public/images/
    //    (create the "images" folder if it doesn't exist)
    // 2. Set the "image" field to: '/images/your-filename.jpg'
    //    Example: image: '/images/harris-digital-modulator.jpg'
    // 3. You can also use a full URL: image: 'https://example.com/photo.jpg'
    // 4. Leave image as '' to show the default placeholder icon
    // ─────────────────────────────────────────────────────────────────────────
{ id: 1, category: 'Broadcast Equipment',name: 'AXON 50 FM Transmitter 2 U Body', image: '/images/axon50w.jpg', description: 'Professional stereo FM transmitter with dynamic RDS and WEB/SNMP connectivity', inStock: true,  partNumber: 'AXON 50W'  },
{ id: 2,  category: 'Broadcast Equipment', name: 'AXON 50-1 FM Transmitter',     image:'/images/axon50w.jpg',description: 'Compact Architecture - Stereo Analogue Frequency Modulation Radio Station Equipment OIRT & JAPAN Bands, WEB TCP/IP Telemetry Options',  inStock: true,  partNumber: 'Exciter RadioStation AXON50-1'},
{ id: 3,  category: 'Broadcast Equipment',  name: 'AXON 100 W FM Transmitter',   image: '/images/axon-100w-broadcast-fm-transmitter.jpg',  description: 'Professional stereo FM transmitter with dynamic RDS and WEB/SNMP connectivity.',inStock: true, partNumber: 'AXON 100W' },
{ id: 4,  category: 'Broadcast Equipment',      name: 'TEM Opera Plus 50 W FM Transmitter',  image: '/images/TEMOperaPlus50WFMTransmitter.jpg', description: 'OPERA plus 50W FM 87,5÷108MHz transmitters use amplifiers with 6^ generation LDMOS technology, practically unbreakable.',  inStock: true,  partNumber: 'A07E0051' },
{ id: 5,  category: 'Broadcast Equipment',      name: 'TEM Opera Plus 100 W FM Transmitter',  image: '/images/100WFMTransmitter.jpg', description: 'OPERA plus 100W FM 87,5÷108MHz transmitters use amplifiers with 6^ generation LDMOS technology, practically unbreakable.',  inStock: true,  partNumber: 'A07E0101' },
{ id: 6,  category: 'Broadcast Equipment',      name: 'AXON 30 W FM Transmitter',        image: '/images/AXON30WFMTransmitter.jpg',    description: 'Professional stereo FM transmitter with dynamic RDS and WEB/SNMP connectivity.',            inStock: true,  partNumber: 'AXON 30W' },
  ],
  categories: [
    { id: 1, name: 'Broadcast Equipment & Spares', icon: '📡', description: 'Television studio broadcast equipment and spare parts of different brands. We provide hard to find parts.' },
    { id: 2, name: 'Importer-Exporter', icon: '✈️', description: 'Self E-Filing of documentations, E-Payments, Real Time Tracking.' },
    
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
  messages: [],
  nextId: 14,
};

// API helper — tries backend, falls back to local DB
const API = 'http://localhost:5000/api';

export async function apiFetch(endpoint, options = {}) {
  try {
    const res = await fetch(`${API}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
    if (!res.ok) throw new Error('HTTP error');
    return await res.json();
  } catch {
    return null; // backend offline — callers use local DB
  }
}
