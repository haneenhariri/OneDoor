#  OneDoor - Digital Solutions Platform

<div align="center">
  <img src="./public/logo.png" alt="OneDoor Logo" width="200"/>

  ### Where creativity meets technology to shape your unique digital future

  [![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Internationalization](#internationalization)
- [Components](#components)
- [Deployment](#deployment)
- [License](#license)

---

## 🎯 About

**OneDoor** is a modern, fully responsive web platform for a digital solutions company specializing in:

- 🌐 Web Design & Development
- 🛒 E-Commerce Solutions
- 🎨 Visual Identity & Branding
- 📱 Mobile Applications
- 📊 Digital Project Management
- 🎓 Training & Coaching

The platform showcases services, company information, partnerships, and provides a comprehensive contact system with interactive maps.

---

## ✨ Features

### 🌍 Multi-language Support
- **Arabic (RTL)** and **English (LTR)** with seamless switching
- Persistent language preference using localStorage
- Dynamic text direction and alignment

### 🎨 Modern UI/UX
- Clean, professional design with gradient accents
- Smooth animations using Framer Motion
- Fully responsive across all devices (mobile, tablet, desktop)
- Dark mode support with theme persistence

### 🚀 Performance Optimized
- Built with Vite for lightning-fast development and builds
- Code splitting and lazy loading
- Optimized images and assets
- SEO-friendly structure

### 📱 Interactive Components
- Animated hero section with floating shapes
- Service cards with hover effects
- Expandable FAQ sections
- Interactive contact form with validation
- Integrated Leaflet maps
- Scroll-to-top button
- Show More/Less functionality for services

### 🎭 Smooth Animations
- Entrance animations on scroll
- Hover effects and transitions
- Staggered animations for lists
- Subtle background animations

---

## 🛠 Tech Stack

### Core
- **React 19.1.1** - UI library
- **TypeScript** - Type safety
- **Vite 6.0** - Build tool and dev server

### Styling
- **TailwindCSS 4.1** - Utility-first CSS framework
- **Custom CSS** - Additional styling and fonts

### Animation
- **Framer Motion 12.23** - Animation library

### Routing
- **React Router 7.9** - Client-side routing

### Internationalization
- **i18next 25.5** - Internationalization framework
- **react-i18next 16.0** - React bindings for i18next

### Maps
- **Leaflet 1.9** - Interactive maps
- **React Leaflet 5.0** - React components for Leaflet

### Development
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules

---

## 📁 Project Structure

```
OneDoor/
├── public/
│   ├── Fonts/              # Custom fonts
│   └── logo.png            # Company logo
├── src/
│   ├── assets/             # Images, icons, SVGs
│   │   ├── flags/          # Country flags
│   │   ├── footer/         # Footer icons
│   │   └── serv/           # Service icons
│   ├── components/         # React components
│   │   ├── About/          # About section
│   │   ├── CallToAction/   # CTA component
│   │   ├── CircularText/   # Circular text animation
│   │   ├── ContactHero/    # Contact form & map
│   │   ├── FAQ/            # FAQ accordion
│   │   ├── Footer/         # Footer component
│   │   ├── Hero/           # Hero section (modular)
│   │   ├── LanguageSelector/ # Language switcher
│   │   ├── NavBar/         # Navigation & Sidebar
│   │   ├── Partnerships/   # Partnership cards
│   │   ├── ScrollToTop/    # Scroll to top button
│   │   ├── ServicesSection/ # Home services (modular)
│   │   ├── ServSections/   # Service detail sections
│   │   ├── SubHero/        # Page headers
│   │   ├── ThemSelect/     # Theme switcher
│   │   └── ui/             # Reusable UI components
│   ├── data/               # Static data
│   ├── layout/             # Layout components
│   ├── locales/            # Translation files
│   ├── pages/              # Page components
│   ├── utils/              # Utility functions
│   ├── index.css           # Global styles
│   ├── main.tsx            # App entry point
│   └── routes.tsx          # Route definitions
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/haneenhariri/OneDoor
   cd oneDoor
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

---

## 📜 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement (HMR)

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder

### Preview
```bash
npm run preview
```
Preview the production build locally

### Lint
```bash
npm run lint
```
Run ESLint to check code quality

---

## 🌐 Internationalization

The project supports **Arabic** and **English** languages with full RTL/LTR support.

### How it works:
- Translation files are located in `src/locales/`
- Language preference is stored in `localStorage`
- Text direction (`rtl`/`ltr`) is automatically applied
- Use the `useTranslation` hook to access translations:

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return <h1>{t('Home')}</h1>;
}
```

### Adding new translations:
1. Add the key-value pair to both `ar.json` and `en.json`
2. Use the key with the `t()` function

---

## 🧩 Components

### Core Components

#### Hero Section
Modular hero component with:
- Animated background shapes
- Title, slogan, and description
- Country flags
- CTA button
- Scroll indicator

#### Services Section
- Company help section
- Work together CTA
- Service cards grid with animations
- Show More/Less functionality

#### FAQ
- Accordion-style FAQ
- Two-column layout on desktop
- Smooth expand/collapse animations

#### Contact Form
- Form validation
- Budget slider
- Checkbox groups
- Interactive Leaflet map

#### Scroll to Top
- Appears after scrolling 300px
- Smooth scroll animation
- Gradient button with icon

### UI Components
- **Buttons**: GetStart, custom buttons
- **Cards**: ServiceCard, PartnerCard
- **Icons**: Social media icons
- **Logo**: Company logo component
- **SocialLinks**: Social media links

---

## 🎨 Styling

### TailwindCSS
The project uses TailwindCSS 4.1 with custom configuration:
- Custom colors for brand gradients
- Responsive breakpoints
- Dark mode support
- RTL/LTR utilities

### Custom Fonts
- **Copperplate** - For headings
- Located in `public/Fonts/`

### Theme
- Light and dark modes
- Gradient accents: `#722973` → `#a43ca6` → `#F07EF2`
- Smooth transitions between themes

---

## 📦 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel
```

### Deploy to Netlify
```bash
netlify deploy --prod
```

### Deploy to GitHub Pages
1. Update `vite.config.ts` with base path
2. Run `npm run build`
3. Deploy the `dist` folder

---



## 📞 Contact

**OneDoor Company**
- 📧 Email: onedoorr.info@gmail.com
- 📱 Phone: +963 995 550 310
- 🌐 Website: [www.onedoorit.com](http://www.onedoorit.com/)
- 📍 Location: Aleppo, Syria

---

<div align="center">
  Made with ❤️ by Haneen Al-hariri

  ⭐ Star this repo if you find it helpful!
</div>
