# Project Structure Guide

## Quick Start

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## 📁 Project Structure

```
career website/
├── app/
│   ├── layout.tsx (Root layout with fonts)
│   ├── globals.css (Global styles)
│   ├── page.tsx (Home page)
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── study-abroad/
│   │       └── page.tsx
│   ├── destinations/
│   │   └── united-states/
│   │       └── page.tsx
│   ├── courses/
│   │   └── page.tsx
│   ├── colleges/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   └── gallery/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx (Navigation bar with dropdown)
│   ├── Footer.tsx (Footer with company info)
│   ├── Hero.tsx (Hero section template)
│   ├── ServicesGrid.tsx (Services display grid)
│   ├── CountryCarousel.tsx (Carousel for countries)
│   ├── Testimonials.tsx (Student testimonials)
│   ├── LeadForm.tsx (Contact form with validation)
│   ├── WhatsAppButton.tsx (Floating WhatsApp button)
│   ├── StatsCounter.tsx (Animated stats)
│   ├── EMICalculator.tsx (Loan calculator)
│   └── Process.tsx (Step-by-step process)
├── lib/
│   ├── config.ts (Site configuration)
│   ├── types.ts (TypeScript types)
│   └── utils.ts (Utility functions)
├── data/
│   ├── services.json (Services data)
│   ├── countries.json (Countries data)
│   ├── testimonials.json (Testimonials data)
│   ├── stats.json (Stats data)
│   └── process.json (Process steps data)
├── public/ (Static assets)
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── .eslintrc.json
```

## 🎨 Design System

**Colors:**
- Primary: #1E4D8C (Deep Blue)
- Accent: #E85D26 (Orange)
- Background: White

**Fonts:**
- Headings: Poppins
- Body: Inter

## 📄 Pages Created

1. **Home** (`/`) - Main landing page with all sections
2. **About** (`/about`) - Company info, team, values
3. **Contact** (`/contact`) - Contact form, map, FAQs
4. **Services** (`/services/study-abroad`) - Service detail page
5. **Destinations** (`/destinations/united-states`) - Country detail page
6. **Courses** (`/courses`) - Course listings with filters
7. **Colleges** (`/colleges`) - College finder with filters
8. **Blog** (`/blog`) - Blog posts with categories
9. **Gallery** (`/gallery`) - Images and videos gallery

## 🧩 Components Overview

### Layout Components
- **Navbar** - Sticky navigation with mobile menu
- **Footer** - Company info and links
- **Hero** - Reusable hero section

### Feature Components
- **ServicesGrid** - 8 services display
- **CountryCarousel** - Scrollable countries list
- **Testimonials** - Student success stories
- **LeadForm** - Contact form with validation
- **StatsCounter** - Animated statistics

### Advanced Features
- **WhatsAppButton** - Floating WhatsApp chat
- **EMICalculator** - Loan EMI calculator
- **Process** - 6-step process visualization

## 🔧 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Language:** TypeScript

## 📋 Key Features Implemented

✅ Responsive design (mobile-first)
✅ Smooth animations & transitions
✅ SEO-optimized meta tags
✅ Form validation (Zod + React Hook Form)
✅ WhatsApp integration
✅ EMI Calculator
✅ Testimonials carousel
✅ Country carousel
✅ Process visualization
✅ Sticky navbar with mobile menu
✅ Multiple pages with service details
✅ Blog section with filters
✅ Course finder with filters
✅ College finder with filters
✅ Gallery with images & videos

## 🚀 Deployment

```bash
npm run build
npm start
```

## 📝 Environment Variables

No environment variables required for basic setup. When adding backend integration, create `.env.local`:

```
NEXT_PUBLIC_API_URL=
DATABASE_URL=
```

## 📧 Contact Information

**AbilisPath**
- Phone: 9360492275, 8939669211
- Email: info@abilispath.com
- Address: No.769, S72, Spencer Plaza, Anna Salai, Chennai
- Founder: Arvind

## 🎯 Next Steps

To extend the project:

1. Connect to a CMS (Contentful, Sanity, etc.)
2. Add backend API integration
3. Implement user authentication
4. Add payment gateway for services
5. Deploy to production

## 📚 Documentation Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [Lucide Icons](https://lucide.dev/)
