# Gursons India — Full Stack Website

White + Navy color scheme · 3D canvas animations · Multi-page React Router · Node.js REST API

---

## Project Structure

```
gursons-website/
├── backend/
│   ├── server.js        ← Express API (in-memory DB)
│   └── package.json
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx      ← Fixed nav with active links
    │   │   ├── Footer.jsx      ← Full footer with navigation
    │   │   ├── HeroCanvas.jsx  ← 3D canvas (rotating cubes, orbits, particles)
    │   │   └── Ticker.jsx      ← Scrolling marquee ticker
    │   ├── pages/
    │   │   ├── Home.jsx        ← Hero + stats + categories + CTA
    │   │   ├── About.jsx       ← Company + team + values + CSR
    │   │   ├── Products.jsx    ← Full catalog + admin CRUD
    │   │   ├── Clients.jsx     ← Client list + CSR clients
    │   │   └── Contact.jsx     ← Contact form + info
    │   ├── data/
    │   │   └── db.js           ← Frontend in-memory DB + API helper
    │   ├── App.jsx             ← React Router setup
    │   ├── index.js            ← Entry point
    │   └── index.css           ← Global styles + animations
    └── package.json
```

---

## Quick Start

### 1. Start the Backend

```bash
cd backend
npm install
npm start
# → API running at http://localhost:5000
```

### 2. Start the Frontend

```bash
cd frontend
npm install
npm start
# → App running at http://localhost:3000
```

> **Note:** If the backend is offline, the frontend automatically uses its local in-memory database as fallback — so the site works standalone too.

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero with 3D canvas, stats, service categories, CTA |
| `/about` | About | Company overview, team cards, values, CSR |
| `/products` | Products | Full catalog with filter/search + Admin CRUD |
| `/clients` | Clients | Client list, reach stats, CSR clients |
| `/contact` | Contact | Contact form + info cards |

---

## API Endpoints (Backend)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List products (supports `?category=&search=`) |
| POST | `/api/products` | Add product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |
| GET | `/api/categories` | List categories |
| GET | `/api/clients` | List clients |
| GET | `/api/team` | List team members |
| GET | `/api/stats` | Stats (years, clients, etc.) |
| POST | `/api/contact` | Submit contact message |
| GET | `/api/messages` | List all messages |
| GET | `/api/health` | Health check |

---

## Features

- **3D Animations** — rotating wireframe cubes, orbiting rings, particle network on hero canvas
- **Multi-page** — React Router v6 with 5 distinct pages
- **Admin Mode** — toggle on Products page to Add / Edit / Delete products
- **Color Scheme** — White + Deep Navy (`#0A0F2E`) + Gold accent (`#C9A84C`)
- **Fonts** — Syne (headings) + DM Sans (body)
- **Responsive** — Mobile hamburger menu, fluid grids
- **Fallback DB** — Works offline without backend

---

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Navy | `#0A0F2E` | Primary background |
| Navy Mid | `#131A45` | Section backgrounds |
| White | `#FFFFFF` | Text, buttons |
| Gold | `#C9A84C` | Accent, highlights |
| Success | `#22C55E` | In Stock badge |
| Danger | `#EF4444` | Out of Stock badge |

---

## Contact

**Gursons India**  
2920, New Sunny Enclave, Sec-123, S.A.S. Nagar  
Mohali, Punjab-140301, India  
📞 +91-9811034938  
✉️ gursonsindia@gmail.com
