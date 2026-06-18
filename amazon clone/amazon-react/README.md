# Amazon Clone — React

A pixel-perfect Amazon.com clone built with React 18 + Vite, using CSS Modules for styling.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📁 Folder Structure

```
amazon-clone/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                    # App entry point
    ├── App.jsx                     # Root component, holds global state
    │
    ├── data/                       # Static data (no API calls needed)
    │   ├── slides.js               # Hero slider content
    │   ├── categories.js           # Category card data
    │   ├── products.js             # Product listings
    │   └── navigation.js           # Nav links + footer columns
    │
    ├── hooks/                      # Custom React hooks
    │   ├── useWindowWidth.js       # Responsive breakpoint detection
    │   ├── useCart.js              # Cart state (add, remove, qty)
    │   └── useToast.js             # Toast notification state
    │
    ├── styles/
    │   └── global.css              # CSS variables, resets, animations
    │
    └── components/
        ├── UI/                     # Shared/reusable primitives
        │   ├── AmazonLogo.jsx
        │   ├── Stars.jsx
        │   ├── Toast.jsx
        │   ├── SearchBar.jsx
        │   └── SearchBar.module.css
        │
        ├── Navbar/
        │   ├── Navbar.jsx          # Orchestrator (top + secondary)
        │   ├── NavTop.jsx          # Logo, search, cart, account
        │   ├── NavTop.module.css
        │   ├── NavSecondary.jsx    # Dark nav bar with links
        │   ├── NavSecondary.module.css
        │   ├── MobileMenu.jsx      # Slide-in drawer for mobile
        │   └── MobileMenu.module.css
        │
        ├── Hero/
        │   ├── HeroSlider.jsx      # Auto-advancing banner carousel
        │   └── HeroSlider.module.css
        │
        ├── Categories/
        │   ├── CategoryGrid.jsx    # 4-col responsive grid
        │   ├── CategoryGrid.module.css
        │   ├── CategoryCard.jsx    # Handles single/quad/kitchen layouts
        │   └── CategoryCard.module.css
        │
        ├── Products/
        │   ├── ProductGrid.jsx     # 5-col responsive grid
        │   ├── ProductGrid.module.css
        │   ├── ProductCard.jsx     # Individual product tile
        │   └── ProductCard.module.css
        │
        ├── Cart/
        │   ├── CartSidebar.jsx     # Slide-in cart panel
        │   ├── CartSidebar.module.css
        │   ├── CartItem.jsx        # Single cart row with qty controls
        │   └── CartItem.module.css
        │
        └── Footer/
            ├── Footer.jsx
            └── Footer.module.css
```

## ✨ Features

- **Sticky navbar** with search, cart badge, account links
- **Responsive** — 4 breakpoints (1100 / 768 / 480 / 360px)
- **Mobile drawer menu** — slides in from left
- **Hero carousel** — auto-advances every 5s with dots + arrows
- **8 category cards** — single image, 2×2 grid, kitchen layouts
- **10 product cards** — add to cart with ✓ feedback animation
- **Cart sidebar** — add, remove, update qty, running total
- **Search** — filters deals section in real time
- **Toast notifications** — non-blocking add-to-cart messages
- **CSS Modules** — scoped styles per component, no conflicts
- **Custom hooks** — `useCart`, `useToast`, `useWindowWidth`

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool + dev server |
| CSS Modules | Scoped component styles |
| Custom hooks | Shared stateful logic |
