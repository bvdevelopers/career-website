# AbilisPath - Setup & Installation Guide

## 📋 Prerequisites

- Node.js 18+ (Download from https://nodejs.org/)
- npm or yarn package manager
- Code editor (VS Code recommended)

## 🚀 Installation Steps

### 1. Navigate to Project Directory

```bash
cd "c:\Users\Lenovo\Documents\career website"
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Lucide React Icons

### 3. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000 in your browser.

## 📁 Project Files Overview

### Core Configuration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

### Application Files
- `app/layout.tsx` - Root layout with fonts
- `app/globals.css` - Global styles and custom utilities
- `app/page.tsx` - Home page (complete)

### Pages Created (9 Main Pages)

1. **Home** - `/` (Complete with all sections)
   - Hero section
   - Stats counter
   - Services grid (8 services)
   - Country carousel
   - Why choose us
   - Mission & Vision
   - Process steps
   - EMI calculator
   - Testimonials
   - Lead form

2. **About** - `/about`
   - Company story
   - Values (6 cards)
   - Team members
   - Achievements timeline

3. **Contact** - `/contact`
   - Contact information
   - Google Map embed
   - Contact form
   - FAQ section

4. **Services** - `/services/study-abroad` (Template)
   - Service overview
   - Benefits list
   - Process steps
   - Success stories
   - Lead form

5. **Destinations** - `/destinations/united-states` (Template)
   - Country overview
   - Top universities
   - Popular courses
   - Cost breakdown
   - Visa information

6. **Courses** - `/courses`
   - 6 sample courses
   - Search & filter
   - Course details

7. **Colleges** - `/colleges`
   - 6 top colleges
   - Search & filter
   - Placement stats

8. **Blog** - `/blog`
   - 6 sample blog posts
   - Category filter
   - Search functionality

9. **Gallery** - `/gallery`
   - Image gallery (12 items)
   - Videos section
   - Statistics

### Components (11 Main Components)

Located in `/components`:

1. **Navbar.tsx** - Sticky navigation
   - Mobile hamburger menu
   - Services dropdown
   - Smooth animations

2. **Footer.tsx** - Footer section
   - Company info
   - Quick links
   - Contact details

3. **Hero.tsx** - Hero section template
   - Animated background
   - CTAs
   - Scroll indicator

4. **ServicesGrid.tsx** - Services display
   - 8 services grid
   - Hover effects
   - Icon integration

5. **CountryCarousel.tsx** - Countries carousel
   - Horizontal scroll
   - Navigation arrows
   - Country stats

6. **Testimonials.tsx** - Student testimonials
   - Rating display
   - Author info
   - Service tags

7. **LeadForm.tsx** - Contact form
   - Zod validation
   - React Hook Form
   - Error messages

8. **WhatsAppButton.tsx** - Floating button
   - Pre-filled message
   - Animated icon
   - Always visible

9. **StatsCounter.tsx** - Animated numbers
   - Counter animation
   - Multiple columns
   - Intersection observer

10. **EMICalculator.tsx** - Loan calculator
    - Slider inputs
    - Real-time calculation
    - Results display

11. **Process.tsx** - Step visualization
    - 6-step process
    - Timeline design
    - Staggered animation

### Data Files (5 JSON Files)

Located in `/data`:
- `services.json` - 8 services data
- `countries.json` - 8 countries data
- `testimonials.json` - 6 testimonials
- `stats.json` - 4 statistics
- `process.json` - 6 process steps

### Utilities

Located in `/lib`:
- `config.ts` - Site configuration
- `types.ts` - TypeScript interfaces
- `utils.ts` - Helper functions

## 🎨 Design System

**Colors:**
- Primary: `#1E4D8C` (Deep Blue)
- Accent: `#E85D26` (Orange)
- Background: White

**Fonts:**
- Headings: Poppins
- Body: Inter

**Tailwind Classes:**
- `.btn-primary` - Blue button
- `.btn-secondary` - Orange button
- `.section-padding` - Section padding
- `.heading-1` to `.heading-4` - Heading styles

## 🔨 Build Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📊 Features Implemented

✅ **Responsive Design** - Mobile-first approach
✅ **Animations** - Smooth transitions with Framer Motion
✅ **Forms** - React Hook Form with Zod validation
✅ **SEO** - Meta tags and semantic HTML
✅ **Performance** - Optimized images and code splitting
✅ **Accessibility** - ARIA labels and semantic elements
✅ **Mobile Menu** - Hamburger menu with animations
✅ **Sticky Navbar** - Always accessible navigation
✅ **WhatsApp Integration** - Floating chat button
✅ **EMI Calculator** - Interactive loan calculator
✅ **Multiple Pages** - 9 fully functional pages
✅ **Filtering** - Courses, colleges, blog with filters
✅ **Carousel** - Countries horizontal scroll
✅ **Testimonials** - Star ratings and reviews
✅ **Process Steps** - Visual 6-step process

## 📱 Responsive Breakpoints

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🔐 Form Validation

**LeadForm fields:**
- Name: Min 2 characters
- Email: Valid email format
- Phone: Exactly 10 digits
- Service: Required selection
- Message: Min 10 characters

## 🌐 SEO Features

- Meta tags on all pages
- Semantic HTML structure
- Open Graph tags
- Mobile meta viewport
- Proper heading hierarchy (H1, H2, H3, H4)

## 📞 Contact Information

**AbilisPath**
- Phone: +91 9360492275, +91 8939669211
- Email: info@abilispath.com
- Address: No.769, S72, Spencer Plaza, Anna Salai, Chennai, India
- Founder: Arvind

## 🚀 Next Steps for Production

1. **Database Setup**
   - Connect to MongoDB or PostgreSQL
   - Create collections for leads, blogs, etc.

2. **CMS Integration**
   - Integrate with Contentful, Sanity, or headless CMS
   - Manage content dynamically

3. **Authentication**
   - Add NextAuth or Firebase auth
   - User profiles and dashboards

4. **Payment Integration**
   - Razorpay or Stripe for payments
   - Service booking system

5. **Email Service**
   - Nodemailer or SendGrid
   - Automated email notifications

6. **Analytics**
   - Google Analytics
   - Conversion tracking

7. **Hosting**
   - Deploy to Vercel (recommended)
   - Docker containerization option

## 🐛 Troubleshooting

**Issue: Dependencies not installing**
```bash
# Clear npm cache
npm cache clean --force
npm install
```

**Issue: Port 3000 already in use**
```bash
npm run dev -- -p 3001
```

**Issue: CSS not loading**
```bash
# Rebuild Tailwind
npm run build
```

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

## 🎯 Project Status

✅ **Complete and Ready for Development**
- All pages created
- All components implemented
- Mock data integrated
- Forms validated
- Responsive design
- SEO optimized

## 📝 Notes

- This is a template-ready project
- Mock data can be replaced with API calls
- Email forms need backend integration
- WhatsApp button is pre-configured
- EMI calculator uses mock calculations

---

**Created with ❤️ for AbilisPath | Powered by Next.js 14**
