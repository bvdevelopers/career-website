# Component Usage Guide

This guide explains how to use each component in your project.

## 1. Navbar

**Location:** `components/Navbar.tsx`

**Features:**
- Sticky positioning
- Mobile hamburger menu
- Services dropdown
- Smooth animations

**Usage:**
```tsx
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      {/* Page content */}
    </>
  );
}
```

**Customization:**
- Edit navigation links in the component
- Add/remove dropdown items
- Change logo text

---

## 2. Footer

**Location:** `components/Footer.tsx`

**Features:**
- Company information
- Quick links
- Social media
- Contact details

**Usage:**
```tsx
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      {/* Page content */}
      <Footer />
    </>
  );
}
```

**Update Company Info:**
Edit `lib/config.ts` for phone, email, address

---

## 3. Hero

**Location:** `components/Hero.tsx`

**Features:**
- Animated background
- Customizable title & description
- CTA buttons
- Scroll indicator

**Usage:**
```tsx
import Hero from '@/components/Hero';

export default function Page() {
  return (
    <Hero
      title="Your Title"
      subtitle="Optional subtitle"
      description="Your description"
      primaryCTA={{
        label: 'Get Started',
        href: '/contact',
      }}
      secondaryCTA={{
        label: 'Learn More',
        href: '#services',
      }}
      fullHeight={true}
      backgroundImage="url-to-image"
    />
  );
}
```

**Props:**
- `title` - Main heading
- `subtitle` - Small text above title
- `description` - Paragraph text
- `primaryCTA` - Main button
- `secondaryCTA` - Secondary button
- `fullHeight` - Full screen height (default: true)
- `backgroundImage` - Background image URL

---

## 4. ServicesGrid

**Location:** `components/ServicesGrid.tsx`

**Features:**
- Grid layout for services
- Icon display
- Hover effects
- Customizable columns

**Usage:**
```tsx
import ServicesGrid from '@/components/ServicesGrid';
import servicesData from '@/data/services.json';

export default function Page() {
  return (
    <ServicesGrid 
      services={servicesData.services}
      columns={4}
    />
  );
}
```

**Data Format:**
```json
{
  "services": [
    {
      "id": 1,
      "name": "Service Name",
      "description": "Service description",
      "icon": "GraduationCap",
      "color": "bg-blue-50",
      "link": "/services/link"
    }
  ]
}
```

**Available Icons:** GraduationCap, BookOpen, Stethoscope, Heart, Briefcase, DollarSign, Star, Passport

---

## 5. CountryCarousel

**Location:** `components/CountryCarousel.tsx`

**Features:**
- Horizontal scrollable carousel
- Navigation arrows
- Country statistics
- Smooth animations

**Usage:**
```tsx
import CountryCarousel from '@/components/CountryCarousel';
import countriesData from '@/data/countries.json';

export default function Page() {
  return (
    <CountryCarousel countries={countriesData.countries} />
  );
}
```

**Data Format:**
```json
{
  "countries": [
    {
      "id": 1,
      "name": "Country Name",
      "flag": "🇺🇸",
      "universities": 50,
      "programs": "Engineering, Business",
      "studentsPlaced": 450,
      "link": "/destinations/link"
    }
  ]
}
```

---

## 6. Testimonials

**Location:** `components/Testimonials.tsx`

**Features:**
- Star ratings
- Author information
- Service tags
- Grid layout

**Usage:**
```tsx
import Testimonials from '@/components/Testimonials';
import testimonialsData from '@/data/testimonials.json';

export default function Page() {
  return (
    <Testimonials testimonials={testimonialsData.testimonials} />
  );
}
```

**Data Format:**
```json
{
  "testimonials": [
    {
      "id": 1,
      "name": "Student Name",
      "role": "University/Role",
      "location": "City, Country",
      "image": "👨‍🎓",
      "text": "Testimonial text",
      "rating": 5,
      "service": "Study Abroad"
    }
  ]
}
```

---

## 7. LeadForm

**Location:** `components/LeadForm.tsx`

**Features:**
- Form validation (Zod + React Hook Form)
- Error messages
- Service dropdown
- Optional message field

**Usage:**
```tsx
import LeadForm from '@/components/LeadForm';

export default function Page() {
  return (
    <LeadForm
      title="Get Free Consultation"
      description="Fill the form and we'll contact you."
      services={['Study Abroad', 'MBBS', 'Placement']}
      showMessage={true}
    />
  );
}
```

**Props:**
- `title` - Form heading
- `description` - Form subtitle
- `services` - Array of service options
- `showMessage` - Show message field (default: true)

**Form Fields:**
- Name (min 2 chars)
- Email (valid format)
- Phone (10 digits)
- Service (dropdown)
- Message (min 10 chars, optional)

---

## 8. WhatsAppButton

**Location:** `components/WhatsAppButton.tsx`

**Features:**
- Floating button
- Pre-filled message
- Animated icon
- Mobile responsive

**Usage:**
```tsx
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Page() {
  return (
    <>
      {/* Page content */}
      <WhatsAppButton />
    </>
  );
}
```

**Update Phone Number:**
Edit the `phoneNumber` variable in the component

---

## 9. StatsCounter

**Location:** `components/StatsCounter.tsx`

**Features:**
- Animated number counting
- Intersection observer
- Multiple columns
- Responsive grid

**Usage:**
```tsx
import StatsCounter from '@/components/StatsCounter';
import statsData from '@/data/stats.json';

export default function Page() {
  return (
    <StatsCounter 
      stats={statsData.stats}
      columns={4}
    />
  );
}
```

**Data Format:**
```json
{
  "stats": [
    {
      "number": 5000,
      "label": "Students Guided",
      "suffix": "+"
    }
  ]
}
```

---

## 10. EMICalculator

**Location:** `components/EMICalculator.tsx`

**Features:**
- Interactive sliders
- Real-time calculation
- Loan breakdown
- Educational display

**Usage:**
```tsx
import EMICalculator from '@/components/EMICalculator';

export default function Page() {
  return <EMICalculator />;
}
```

**No props required** - Component is self-contained

---

## 11. Process

**Location:** `components/Process.tsx`

**Features:**
- Step visualization
- Timeline design
- Staggered animations
- Responsive layout

**Usage:**
```tsx
import Process from '@/components/Process';
import processData from '@/data/process.json';

export default function Page() {
  return <Process steps={processData.process} />;
}
```

**Data Format:**
```json
{
  "process": [
    {
      "step": 1,
      "title": "Step Title",
      "description": "Step description"
    }
  ]
}
```

---

## Common Tailwind Classes

### Buttons
```tsx
<button className="btn-primary">Primary</button>
<button className="btn-secondary">Secondary</button>
<button className="btn-outline">Outline</button>
```

### Headings
```tsx
<h1 className="heading-1">H1</h1>
<h2 className="heading-2">H2</h2>
<h3 className="heading-3">H3</h3>
<h4 className="heading-4">H4</h4>
```

### Containers
```tsx
<div className="container-custom">
  <div className="section-padding">
    Content
  </div>
</div>
```

### Effects
```tsx
<div className="card-hover">Card with hover effect</div>
<div className="gradient-text">Gradient text</div>
```

---

## Framer Motion Examples

### Basic Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Scroll Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content appears on scroll
</motion.div>
```

### Hover Effect
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

---

## Form Validation Example

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string().min(2, 'Too short'),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}
    </form>
  );
}
```

---

## Tips for Component Usage

1. **Always import components** with path alias `@/components/Name`
2. **Use TypeScript** for better type safety
3. **Pass data correctly** using JSON files in `/data`
4. **Test responsiveness** on mobile and desktop
5. **Check animations** in different browsers
6. **Validate forms** before submission
7. **Optimize images** before using in components

---

**Need Help?** Refer to individual component files for more details or check the page implementations for usage examples.
