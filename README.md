# SCP Traders — Official Website

A clean, modern, and high-performance website for **SCP Traders** built with **React**, **Vite**, and **Tailwind CSS**.

---

## 📁 Clean Project Structure (புரிந்து கொள்ள எளிய கட்டமைப்பு)

```text
scp-traders-site/
├── public/                     # Static files (favicon, robots.txt)
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── assets/                 # Images & brand assets
│   │   ├── hero.jpg
│   │   ├── logo.png
│   │   ├── jars.jpg
│   │   ├── bottles.jpg
│   │   └── containers.jpg
│   ├── components/             # Reusable UI components
│   │   ├── Header.jsx          # Top bar, search, mega-dropdown, cart count
│   │   ├── Footer.jsx          # Company info, quick contact & footer links
│   │   ├── CategoryMenu.jsx    # Interactive category grid with hover menus
│   │   ├── ProductCard.jsx     # Product display card with animated zoom
│   │   └── Toast.jsx           # Animated notification toast for enquiry
│   ├── context/                # React Context state management
│   │   ├── CartContext.jsx     # Cart & enquiry items with localStorage
│   │   └── NavigationContext.jsx # Smooth page routing & category filtering
│   ├── data/                   # Product catalogue & data
│   │   └── products.js         # 32 products, 10 categories, WhatsApp number
│   ├── pages/                  # Main page views
│   │   ├── HomePage.jsx        # Hero with zoom, marquee, features, bestsellers
│   │   ├── ProductsPage.jsx    # Filterable product grid with category chips
│   │   ├── AboutPage.jsx       # About SCP Traders with stats cards
│   │   ├── ContactPage.jsx     # Contact info + WhatsApp enquiry form
│   │   └── CartPage.jsx        # Enquiry review list + WhatsApp quotation builder
│   ├── App.jsx                 # App layout & page switcher
│   ├── main.jsx                # React root entry point
│   └── styles.css              # Tailwind CSS, color themes, keyframe animations
├── index.html                  # Main HTML entry with Google Fonts
├── vite.config.js              # Vite + Tailwind configuration
└── package.json                # Project dependencies and scripts
```

---

## 🚀 How to Run (எப்படி இயக்குவது)

### 1. Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```

---

## ✨ Features & Animations (அம்சங்கள் மற்றும் அனிமேஷன்கள்)

- **Hero Zoom Effect (`hero-zoom`)**: Smooth background scale animation on landing.
- **Rise Entrance (`rise`)**: Staggered fade-up animation for headings and cards.
- **Marquee Ticker (`marquee`)**: Infinite scrolling banner with category tags.
- **Floating Icons (`float`)**: Smooth vertical floating movement for feature icons.
- **Card Lift Hover (`card-lift`)**: 3D lift with colored shadow on hover.
- **Mega Dropdown Menu (`dropdown` & `drop-item`)**: Hover dropdown with animated category items.
- **Live Search**: Instant keyword search from header across all products.
- **WhatsApp Integration**: Direct ordering and quotations pre-filled with cart contents.
- **Toast Notifications**: Feedback notification when items are added to the enquiry list.
- **Category Filter Chips**: Filter catalogue by PET Jars, PET Bottles, Honey Jars, etc.
