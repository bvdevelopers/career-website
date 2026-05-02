# AbilisPath - Directory Structure

```
career website/
│
├── 📄 Configuration Files
│   ├── package.json                 # Dependencies & npm scripts
│   ├── tsconfig.json                # TypeScript configuration
│   ├── next.config.js               # Next.js settings
│   ├── tailwind.config.ts           # Tailwind CSS customization
│   ├── postcss.config.js            # CSS processing
│   ├── .eslintrc.json               # ESLint rules
│   ├── .gitignore                   # Git ignore patterns
│   └── next-env.d.ts                # TypeScript definitions
│
├── 📁 app/ (Next.js App Router)
│   ├── layout.tsx                   # Root layout with fonts
│   ├── globals.css                  # Global styles & custom utilities
│   ├── page.tsx                     # Home page ⭐ (Main landing)
│   │
│   ├── 📁 about/
│   │   └── page.tsx                 # About page (Story, Team, Values)
│   │
│   ├── 📁 contact/
│   │   └── page.tsx                 # Contact page (Form, Map, FAQ)
│   │
│   ├── 📁 services/
│   │   └── 📁 study-abroad/
│   │       └── page.tsx             # Service detail template
│   │
│   ├── 📁 destinations/
│   │   └── 📁 united-states/
│   │       └── page.tsx             # Country detail template
│   │
│   ├── 📁 courses/
│   │   └── page.tsx                 # Course listing with filters
│   │
│   ├── 📁 colleges/
│   │   └── page.tsx                 # College finder with search
│   │
│   ├── 📁 blog/
│   │   └── page.tsx                 # Blog articles with categories
│   │
│   └── 📁 gallery/
│       └── page.tsx                 # Image gallery + videos
│
├── 📁 components/ (React Components)
│   ├── Navbar.tsx                   # 🧭 Sticky navigation
│   ├── Footer.tsx                   # 📍 Footer with company info
│   ├── Hero.tsx                     # 🎯 Hero section template
│   ├── ServicesGrid.tsx             # 📊 8 services display
│   ├── CountryCarousel.tsx          # 🌍 Carousel for countries
│   ├── Testimonials.tsx             # ⭐ Student reviews
│   ├── LeadForm.tsx                 # 📋 Contact form (validated)
│   ├── WhatsAppButton.tsx           # 💬 Floating WhatsApp
│   ├── StatsCounter.tsx             # 📈 Animated statistics
│   ├── EMICalculator.tsx            # 💰 Loan calculator
│   └── Process.tsx                  # ✅ 6-step process viz
│
├── 📁 lib/ (Utilities & Config)
│   ├── config.ts                    # Site configuration
│   ├── types.ts                     # TypeScript interfaces
│   └── utils.ts                     # Helper functions
│
├── 📁 data/ (JSON Data)
│   ├── services.json                # 8 services data
│   ├── countries.json               # 8 countries with stats
│   ├── testimonials.json            # 6 student reviews
│   ├── stats.json                   # 4 key statistics
│   └── process.json                 # 6 process steps
│
├── 📁 public/ (Static Assets)
│   └── (Add images, logos here)
│
├── 📚 Documentation
│   ├── README.md                    # Project overview
│   ├── SETUP_GUIDE.md               # Installation & setup
│   ├── PROJECT_STRUCTURE.md         # Detailed structure
│   ├── COMPONENT_USAGE.md           # Component docs
│   ├── COMPLETE_SUMMARY.md          # Summary of all files
│   └── DIRECTORY_STRUCTURE.md       # This file
│
└── 🚀 Ready to Deploy
    ├── npm install                  # Install dependencies
    └── npm run dev                  # Start development
```

---

## 📊 File Count by Category

| Category | Files | Status |
|----------|-------|--------|
| Configuration | 8 | ✅ Complete |
| App Layout | 1 | ✅ Complete |
| Pages | 9 | ✅ Complete |
| Components | 11 | ✅ Complete |
| Utilities | 3 | ✅ Complete |
| Data | 5 | ✅ Complete |
| Documentation | 5 | ✅ Complete |
| **TOTAL** | **42+** | **✅ READY** |

---

## 🎯 Quick Navigation

### Start Here
1. Read `README.md` - Overview
2. Follow `SETUP_GUIDE.md` - Installation
3. Check `PROJECT_STRUCTURE.md` - Details

### For Development
1. `COMPONENT_USAGE.md` - How to use components
2. Component files in `components/` folder
3. Page examples in `app/` folder

### For Deployment
1. `SETUP_GUIDE.md` - Build commands
2. Verify all pages work locally
3. Connect to backend services

---

## 📍 Key Locations

**All Pages:** `app/` folder
**All Components:** `components/` folder
**Data Sources:** `data/` folder
**Configuration:** Root directory
**Styles:** `app/globals.css`
**Utilities:** `lib/` folder

---

## 🔗 Important Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main home page |
| `components/Navbar.tsx` | Top navigation |
| `components/Footer.tsx` | Bottom footer |
| `components/LeadForm.tsx` | Contact form |
| `lib/config.ts` | Site settings |
| `package.json` | Dependencies |
| `tailwind.config.ts` | Styling theme |

---

## ✨ Feature Files

| Feature | Location |
|---------|----------|
| Hero Section | `components/Hero.tsx` |
| Contact Form | `components/LeadForm.tsx` |
| WhatsApp Button | `components/WhatsAppButton.tsx` |
| EMI Calculator | `components/EMICalculator.tsx` |
| Services Grid | `components/ServicesGrid.tsx` |
| Testimonials | `components/Testimonials.tsx` |
| Navigation | `components/Navbar.tsx` |
| Footer | `components/Footer.tsx` |

---

## 🎨 Customization Files

| To Change | Edit This |
|-----------|-----------|
| Company Info | `lib/config.ts` |
| Colors | `tailwind.config.ts` |
| Services Data | `data/services.json` |
| Countries Data | `data/countries.json` |
| Logo/Nav Links | `components/Navbar.tsx` |
| Footer Info | `components/Footer.tsx` |
| Global Styles | `app/globals.css` |

---

## 📱 Page Descriptions

### Home (`/`)
- Hero section
- Stats counter
- Services grid
- Country carousel
- Why choose us
- Mission & vision
- Process steps
- EMI calculator
- Testimonials
- Lead form

### About (`/about`)
- Company story
- Core values (6)
- Team members
- Achievements

### Contact (`/contact`)
- Contact info
- Map embed
- Contact form
- FAQ section

### Services (`/services/study-abroad`)
- Service overview
- Benefits list
- Process steps
- Success stories
- Lead form

### Destinations (`/destinations/united-states`)
- Country overview
- Top universities
- Popular courses
- Cost breakdown
- Visa info

### Courses (`/courses`)
- Course listings
- Search & filter
- Category filter
- Course details

### Colleges (`/colleges`)
- College listings
- Search & filter
- Placement stats
- Rankings

### Blog (`/blog`)
- Blog articles
- Category filter
- Search function
- Read time

### Gallery (`/gallery`)
- Image gallery
- Video section
- Statistics

---

## 🔧 Configuration Files Overview

**package.json** - All dependencies listed
**tsconfig.json** - TypeScript strict mode enabled
**next.config.js** - Image optimization configured
**tailwind.config.ts** - Custom colors & fonts set
**postcss.config.js** - CSS processing setup
**.eslintrc.json** - Code quality rules
**.gitignore** - Ignore patterns set

---

## 📚 Data Structure

**services.json** - 8 services with icons
**countries.json** - 8 countries with stats
**testimonials.json** - 6 reviews with ratings
**stats.json** - 4 key metrics
**process.json** - 6 step process

---

## 🎯 Next Steps After Setup

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Visit http://localhost:3000
4. ✅ Test all pages
5. ✅ Customize company info
6. ✅ Replace placeholder images
7. ✅ Connect to backend
8. ✅ Deploy to production

---

## 📞 Support

**Component Help:** See `COMPONENT_USAGE.md`
**Setup Issues:** See `SETUP_GUIDE.md`
**Project Overview:** See `README.md`

---

**Everything is ready! 🚀 Just run `npm install` and `npm run dev`**
