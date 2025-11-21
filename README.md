# Blissful Bites

> A modern, production-ready e-commerce website for an FSSAI-certified home bakery in Bangalore, India

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Live Demo](#live-demo)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [Configuration](#configuration)
- [Testing](#testing)
- [Deployment](#deployment)
- [Performance & Optimization](#performance--optimization)
- [Accessibility](#accessibility)
- [SEO Implementation](#seo-implementation)
- [Browser Support](#browser-support)
- [Known Limitations](#known-limitations)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

---

## Overview

**Blissful Bites** is a fully responsive, modern e-commerce website designed for a women-led, FSSAI-approved home bakery operating in Bangalore, India. The platform serves as a comprehensive digital storefront, enabling customers to browse an extensive menu of artisanal baked goods, view a curated gallery of products, learn about the bakery's story, and seamlessly place orders through integrated WhatsApp communication.

### Project Purpose

This project addresses the need for small-scale, home-based bakery businesses to establish a professional online presence without the complexity and cost of traditional e-commerce platforms. By focusing on simplicity, performance, and user experience, Blissful Bites demonstrates how modern web technologies can empower local artisans to reach their customers effectively.

### Target Audience

- **Primary**: Customers in Bangalore seeking high-quality, handcrafted baked goods for special occasions
- **Secondary**: Web developers and students looking to study a production-ready Next.js application
- **Tertiary**: Small business owners seeking inspiration for their own digital presence

---

## Key Features

### Customer-Facing Features

- **📱 Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing experiences
- **🎨 Theme Customization**: Dark and light mode support with seamless theme persistence
- **🖼️ Interactive Gallery**: 55+ high-quality product images with category filtering and lightbox preview
- **📋 Comprehensive Menu**: 130+ menu items across 17 categories with pricing information
- **💬 WhatsApp Integration**: Floating action button for instant customer inquiries and order placement
- **❓ FAQ Section**: 17 frequently asked questions organized into 5 logical categories
- **📖 About Page**: Detailed bakery story, mission, values, and FSSAI certification display
- **📞 Contact Information**: Clear display of phone, email, WhatsApp, and service hours
- **🎭 Loading States**: Engaging first-load splash screen with animated cupcake illustration
- **🔍 SEO Optimized**: Comprehensive metadata, sitemap, robots.txt, and Open Graph tags

### Technical Features

- **⚡ Next.js App Router**: Server-side rendering and static generation for optimal performance
- **🎯 TypeScript**: Full type safety with strict mode enabled throughout the codebase
- **🧩 Component Library**: 60+ reusable UI components built on Radix UI primitives
- **♿ Accessibility**: WCAG-compliant with keyboard navigation, ARIA labels, and screen reader support
- **🧪 Test Coverage**: Jest and React Testing Library setup with component tests
- **📊 Analytics Integration**: Vercel Analytics for performance monitoring and user insights
- **🔧 Code Quality**: ESLint, Prettier, and strict TypeScript configuration
- **🎬 Smooth Animations**: Tailwind CSS animations and transitions for enhanced UX
- **📄 Error Handling**: Custom error boundaries, 404 pages, and loading states
- **🌐 Multi-Page Application**: Seven distinct pages with optimized navigation

---

## Live Demo

> **Note**: Replace with actual deployment URL once available

Visit the live application: [https://blissfull-bites.vercel.app](https://blissfull-bites.vercel.app)

### Screenshots

**Home Page** - Hero section with featured categories
**Menu Page** - Comprehensive product catalog with 17 categories
**Gallery** - Filterable image gallery with 55+ product photos
**About Page** - Founders' story and bakery mission

---

## Technology Stack

### Core Framework

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16.0 | React framework with App Router for server-side rendering |
| **React** | 19.2 | UI library for building component-based interfaces |
| **TypeScript** | 5.x | Static type checking for enhanced code quality |

### Styling & UI

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Tailwind CSS** | 4.1 | Utility-first CSS framework for rapid UI development |
| **Radix UI** | Latest | Unstyled, accessible component primitives |
| **Lucide React** | 0.454 | Beautiful, consistent icon library (500+ icons) |
| **PostCSS** | 8.5 | CSS transformation and optimization |
| **class-variance-authority** | 0.7 | Type-safe CSS utility variants |

### Forms & Validation

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React Hook Form** | 7.60 | Performant form state management |
| **Zod** | 3.25 | TypeScript-first schema validation |

### UI Enhancement

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Embla Carousel** | 8.5 | Lightweight, extensible carousel component |
| **Sonner** | 1.7 | Elegant toast notification system |
| **next-themes** | 0.4.6 | Dark mode and theme management |
| **date-fns** | 4.1 | Modern date utility library |

### Development Tools

| Technology | Version | Purpose |
|-----------|---------|---------|
| **ESLint** | Latest | JavaScript/TypeScript linting |
| **Prettier** | Latest | Code formatting |
| **Jest** | Latest | JavaScript testing framework |
| **React Testing Library** | Latest | React component testing utilities |

### Analytics & Monitoring

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Vercel Analytics** | Latest | Real User Monitoring (RUM) and performance metrics |

---

## System Architecture

### Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Browser                          │
│  ┌───────────────────────────────────────────────────────┐ │
│  │            Next.js App (React 19)                     │ │
│  │  ┌─────────────────────────────────────────────────┐ │ │
│  │  │         App Router (Server Components)          │ │ │
│  │  │  ┌─────────┐ ┌─────────┐ ┌─────────┐           │ │ │
│  │  │  │  Home   │ │  Menu   │ │ Gallery │  ...      │ │ │
│  │  │  └─────────┘ └─────────┘ └─────────┘           │ │ │
│  │  └─────────────────────────────────────────────────┘ │ │
│  │  ┌─────────────────────────────────────────────────┐ │ │
│  │  │      Client Components (Interactive UI)         │ │ │
│  │  │  ┌─────────┐ ┌─────────┐ ┌─────────┐           │ │ │
│  │  │  │ Header  │ │ Gallery │ │  Theme  │  ...      │ │ │
│  │  │  │  Nav    │ │ Filter  │ │ Toggle  │           │ │ │
│  │  │  └─────────┘ └─────────┘ └─────────┘           │ │ │
│  │  └─────────────────────────────────────────────────┘ │ │
│  │  ┌─────────────────────────────────────────────────┐ │ │
│  │  │       UI Component Library (Radix UI)           │ │ │
│  │  │  60+ Reusable Components (Button, Dialog, etc) │ │ │
│  │  └─────────────────────────────────────────────────┘ │ │
│  └───────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
          │                                        │
          │                                        │
          ▼                                        ▼
┌──────────────────────┐              ┌──────────────────────┐
│  Static Assets (CDN) │              │  WhatsApp Web API    │
│  - Product Images    │              │  (Order Placement)   │
│  - Fonts, Icons      │              │                      │
└──────────────────────┘              └──────────────────────┘
```

### Data Flow Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    Application Layer                         │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Server Components (SSR/SSG)                                 │
│  ├─ Static Data (Hardcoded in Components)                   │
│  │  ├─ Menu Items (130+ items)                              │
│  │  ├─ Gallery Images (55+ images)                          │
│  │  ├─ FAQ Data (17 items)                                  │
│  │  └─ Navigation Links                                     │
│  │                                                           │
│  └─ Rendered HTML sent to client                            │
│                                                              │
│  Client Components (Interactive)                             │
│  ├─ State Management (React useState/useEffect)             │
│  │  ├─ Gallery Filter State                                 │
│  │  ├─ FAQ Accordion State                                  │
│  │  ├─ Theme Preference (localStorage)                      │
│  │  └─ Mobile Menu State                                    │
│  │                                                           │
│  └─ User Interactions                                       │
│     ├─ Category Filtering                                   │
│     ├─ Image Lightbox                                       │
│     ├─ Theme Toggle                                         │
│     └─ Navigation                                           │
│                                                              │
└──────────────────────────────────────────────────────────────┘
         │                                            │
         │                                            │
         ▼                                            ▼
┌──────────────────┐                    ┌──────────────────────┐
│  No Backend API  │                    │  External Services   │
│  (Static Site)   │                    │  └─ WhatsApp Web     │
└──────────────────┘                    └──────────────────────┘
```

### Key Architectural Decisions

1. **Static Site Architecture**: No backend database or API endpoints. All product data is hardcoded as TypeScript constants within page components, making the site extremely fast and simple to deploy.

2. **Server vs. Client Components**: Strategic use of Next.js App Router to minimize client-side JavaScript by default, using client components only for interactive elements (gallery filters, theme toggle, mobile menu).

3. **Component Library Strategy**: Built on Radix UI primitives for accessibility and shadcn/ui for consistent styling, avoiding the need for custom component implementation.

4. **Order Management**: Leverages WhatsApp Web API for order placement rather than implementing a custom backend, simplifying the architecture while meeting business needs.

5. **Image Strategy**: All product images stored in `/public/Images/` directory and served statically through Next.js Image optimization.

---

## Prerequisites

Before installing and running this project, ensure you have the following installed on your system:

- **Node.js**: Version 18.0 or higher ([Download](https://nodejs.org/))
- **npm**: Version 9.0 or higher (comes with Node.js)
  - Alternatively: **pnpm** 8.0+ or **yarn** 1.22+
- **Git**: For cloning the repository ([Download](https://git-scm.com/))

### System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: At least 500MB free space

### Recommended Tools

- **Visual Studio Code**: For code editing with TypeScript support
- **Modern Browser**: Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+

---

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/8harath/Blissfull-bites.git
cd Blissfull-bites
```

### Step 2: Install Dependencies

Choose your preferred package manager:

**Using npm:**
```bash
npm install
```

**Using pnpm:**
```bash
pnpm install
```

**Using yarn:**
```bash
yarn install
```

This will install all dependencies listed in `package.json`, including:
- Next.js framework and React libraries
- Tailwind CSS and PostCSS
- Radix UI component primitives
- TypeScript and type definitions
- Development tools (ESLint, Prettier, Jest)

### Step 3: Run the Development Server

**Using npm:**
```bash
npm run dev
```

**Using pnpm:**
```bash
pnpm dev
```

**Using yarn:**
```bash
yarn dev
```

The application will start on [http://localhost:3000](http://localhost:3000).

### Step 4: Build for Production

To create an optimized production build:

```bash
npm run build
```

### Step 5: Start Production Server

After building, start the production server:

```bash
npm run start
```

---

## Project Structure

```
Blissfull-bites/
├── app/                          # Next.js App Router directory
│   ├── page.tsx                 # Home page (/)
│   ├── layout.tsx               # Root layout with fonts, metadata, analytics
│   ├── globals.css              # Global styles and CSS variables (204 lines)
│   ├── error.tsx                # Error boundary page
│   ├── loading.tsx              # Root loading state
│   ├── not-found.tsx            # Custom 404 page
│   ├── robots.ts                # Robots.txt configuration for SEO
│   ├── sitemap.ts               # XML sitemap generation
│   ├── about/
│   │   └── page.tsx            # About page - founders' story, mission
│   ├── contact/
│   │   └── page.tsx            # Contact page - phone, email, location
│   ├── faq/
│   │   └── page.tsx            # FAQ page - 17 questions in 5 categories
│   ├── gallery/
│   │   └── page.tsx            # Gallery page - 55 images with filtering
│   └── menu/
│       └── page.tsx             # Menu page - 130+ items in 17 categories
│
├── components/                   # React components (65+ files)
│   ├── __tests__/               # Component tests
│   │   ├── header.test.tsx     # Header component tests
│   │   ├── footer.test.tsx     # Footer component tests
│   │   └── whatsapp-fab.test.tsx
│   ├── header.tsx               # Navigation header with mobile menu
│   ├── footer.tsx               # Footer with links and contact info
│   ├── whatsapp-fab.tsx         # Floating WhatsApp button
│   ├── first-load-splash.tsx    # Animated splash screen (first load)
│   ├── theme-provider.tsx       # Dark/light theme context provider
│   └── ui/                      # 60+ UI components (shadcn/ui)
│       ├── accordion.tsx        # Expandable sections
│       ├── alert-dialog.tsx     # Modal dialogs
│       ├── button.tsx           # Button variants
│       ├── card.tsx             # Card container
│       ├── dialog.tsx           # Dialog/modal component
│       ├── input.tsx            # Form input
│       ├── label.tsx            # Form label
│       ├── select.tsx           # Dropdown select
│       ├── separator.tsx        # Visual divider
│       ├── tabs.tsx             # Tabbed interface
│       └── ...                  # And 50+ more components
│
├── hooks/                        # Custom React hooks
│   ├── use-toast.ts             # Toast notification hook
│   └── use-mobile.ts            # Mobile detection hook
│
├── lib/                          # Utility functions
│   └── utils.ts                 # cn() helper for Tailwind class merging
│
├── public/                       # Static assets
│   ├── Images/                  # Product images (59 files)
│   │   ├── cupcake.JPG
│   │   ├── chocolate cheesecake.JPG
│   │   ├── redvelvet brownie.JPG
│   │   └── ...
│   ├── logo.jpeg                # Bakery logo
│   └── BlissfulBites-Menu.pdf   # Downloadable menu PDF
│
├── .eslintrc.json               # ESLint configuration
├── .prettierrc                  # Prettier code formatting rules
├── .gitignore                   # Git ignore rules
├── components.json              # shadcn/ui configuration
├── jest.config.js               # Jest testing configuration
├── jest.setup.js                # Jest setup file
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration (if exists)
├── README.md                    # This file
├── ENHANCEMENTS.md              # Future improvement proposals
├── IMPROVEMENTS.md              # Technical fixes and improvements
├── LICENSE                      # MIT License
└── .env.example                 # Environment variables template

Key Directories:
├── app/                # Pages and layouts (Next.js App Router)
├── components/         # Reusable React components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static files served as-is
└── __tests__/         # Test files
```

### Important Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout defining fonts, metadata, theme provider, analytics |
| `app/globals.css` | Global CSS with Tailwind directives and custom CSS variables |
| `components/ui/*` | 60+ pre-built, accessible UI components from shadcn/ui |
| `next.config.mjs` | Next.js configuration including image optimization settings |
| `tsconfig.json` | TypeScript compiler options with strict mode enabled |
| `jest.config.js` | Jest testing framework configuration |
| `package.json` | Project dependencies, scripts, and metadata |

---

## Usage Guide

### For Customers (End Users)

#### Browsing the Menu
1. Navigate to the **Menu** page from the header navigation
2. Browse 17 product categories including:
   - Buttercream Cakes, Pastries, Cloud Cakes
   - Brownies & Blondies, Cupcakes, Macarons
   - Donuts, Cheesecakes, and more
3. View pricing ranges for each category
4. Download the complete menu as a PDF

#### Viewing the Gallery
1. Click **Gallery** in the navigation
2. Use category filters to narrow down images:
   - All, Cookies, Cakes, Brownies, Macarons, Pastries, Cupcakes, Donuts, Specialty
3. Click any image to open in lightbox mode for full-screen viewing
4. Use arrow keys or on-screen buttons to navigate between images
5. Press `Escape` or click outside to close lightbox

#### Placing an Order
1. Browse products and decide on your order
2. Click the **WhatsApp** floating button (bottom-right corner) or
3. Navigate to **Contact** page for phone/email options
4. Provide order details including:
   - Product type and quantity
   - Delivery/pickup date (minimum 48 hours advance notice)
   - Any customization requests

#### Learning About the Bakery
- **About Page**: Read the founders' story (Savitha & Poorvika), mission, and values
- **FAQ Page**: Find answers to common questions about ordering, pricing, customization, etc.

### For Developers

#### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

#### Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint errors automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting without making changes
npm run format:check
```

#### Development Workflow

1. **Create a new page**: Add a folder in `app/` directory
   ```tsx
   // app/new-page/page.tsx
   export default function NewPage() {
     return <div>New Page Content</div>
   }
   ```

2. **Add a new component**: Create file in `components/`
   ```tsx
   // components/my-component.tsx
   export function MyComponent() {
     return <div>My Component</div>
   }
   ```

3. **Add a UI component from shadcn/ui**:
   ```bash
   npx shadcn-ui@latest add [component-name]
   ```

4. **Add a custom hook**: Create file in `hooks/`
   ```tsx
   // hooks/use-custom-hook.ts
   export function useCustomHook() {
     // Hook logic
   }
   ```

---

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific configuration:

```env
# Business Contact Information
NEXT_PUBLIC_PHONE=+916362395980
NEXT_PUBLIC_EMAIL=blissfulbites291@gmail.com
NEXT_PUBLIC_WHATSAPP_NUMBER=916362395980

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://blissfullbites.com
NEXT_PUBLIC_BUSINESS_NAME=Blissful Bites

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Customization

#### 1. Update Business Information

**Contact Details** (`app/contact/page.tsx`):
- Update phone number, email, and location
- Modify WhatsApp link in `components/whatsapp-fab.tsx`

**About Page** (`app/about/page.tsx`):
- Replace founders' story with your bakery's narrative
- Update mission and values sections

#### 2. Modify Menu Items

Edit `app/menu/page.tsx`:

```typescript
const menuCategories = [
  {
    name: "Your Category",
    priceRange: "₹100 - ₹500",
    items: [
      "Item 1",
      "Item 2",
      // Add more items
    ],
    itemImageMap: {
      "Item 1": "/Images/item1.jpg",
      // Map items to images
    }
  },
  // Add more categories
]
```

#### 3. Update Gallery Images

1. Add images to `/public/Images/` directory
2. Update `app/gallery/page.tsx`:

```typescript
const galleryImages = [
  {
    id: 1,
    category: "Cakes",
    alt: "Description of image",
    src: "/Images/your-image.jpg"
  },
  // Add more images
]
```

#### 4. Customize Theme Colors

Edit `app/globals.css` to modify CSS variables:

```css
@layer base {
  :root {
    --primary: 42 87% 57%;        /* Sunflower Yellow */
    --secondary: 22 52% 60%;      /* Soft Terracotta */
    --accent: 98 16% 73%;         /* Muted Mint */
    /* Modify other color values */
  }
}
```

#### 5. Add/Remove FAQ Items

Edit `app/faq/page.tsx`:

```typescript
const faqData = [
  {
    category: "Your Category",
    items: [
      {
        q: "Your question?",
        a: "Your answer."
      },
      // Add more Q&A pairs
    ]
  },
  // Add more categories
]
```

---

## Testing

### Test Suite Overview

The project includes a comprehensive testing setup using Jest and React Testing Library.

**Test Coverage**: Component tests for critical UI elements

**Test Files**:
- `components/__tests__/header.test.tsx` - Navigation header tests
- `components/__tests__/footer.test.tsx` - Footer component tests
- `components/__tests__/whatsapp-fab.test.tsx` - WhatsApp button tests

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in interactive watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Coverage Report

After running `npm run test:coverage`, view the coverage report:
- Console summary displays immediately
- Detailed HTML report: Open `coverage/lcov-report/index.html` in a browser

### Writing Tests

Example test structure:

```typescript
import { render, screen } from '@testing-library/react'
import { MyComponent } from '@/components/my-component'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const user = userEvent.setup()
    render(<MyComponent />)
    await user.click(screen.getByRole('button'))
    expect(screen.getByText('Updated Text')).toBeInTheDocument()
  })
})
```

---

## Deployment

### Deploy to Vercel (Recommended)

Vercel is the recommended hosting platform as it's created by the Next.js team and offers seamless integration.

#### Method 1: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### Method 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Configure build settings (auto-detected):
   - **Framework**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
6. Add environment variables (if any)
7. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

#### Method 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/8harath/Blissfull-bites)

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

**Build Settings**:
- Build Command: `npm run build`
- Publish Directory: `.next`

### Deploy to Other Platforms

#### Cloudflare Pages

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. Deploy

#### AWS Amplify

1. Connect your repository
2. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

### Self-Hosting

Build and run on your own server:

```bash
# Build
npm run build

# Start production server
npm run start
```

Serve on port 3000 or configure with a reverse proxy (nginx, Apache).

---

## Performance & Optimization

### Image Optimization

- **Next.js Image Component**: Automatic lazy loading and responsive images
- **Format Conversion**: WebP and AVIF support for modern browsers
- **Responsive Sizes**: Multiple sizes generated for different screen widths
- **Compression**: Optimized image delivery via Vercel CDN

### Code Splitting

- **Automatic**: Next.js automatically splits code at page boundaries
- **Dynamic Imports**: Heavy components loaded on-demand
- **Server Components**: Reduced client-side JavaScript bundle

### Performance Metrics

Target metrics for production deployment:

| Metric | Target | Description |
|--------|--------|-------------|
| First Contentful Paint (FCP) | < 1.8s | Time until first content renders |
| Largest Contentful Paint (LCP) | < 2.5s | Time until largest content renders |
| Time to Interactive (TTI) | < 3.8s | Time until page becomes interactive |
| Total Blocking Time (TBT) | < 300ms | Time when main thread is blocked |
| Cumulative Layout Shift (CLS) | < 0.1 | Visual stability score |

### Lighthouse Scores

Expected scores after all optimizations:

- **Performance**: 90-95/100
- **Accessibility**: 95-100/100
- **Best Practices**: 95-100/100
- **SEO**: 95-100/100

---

## Accessibility

### WCAG Compliance

This project aims for **WCAG 2.1 Level AA** compliance.

### Accessibility Features

- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **ARIA Labels**: Descriptive labels on buttons, links, and interactive elements
- **Skip-to-Content Link**: Bypass navigation for screen reader users
- **Focus Indicators**: Visible focus states on all interactive elements
- **Semantic HTML**: Proper heading hierarchy and landmark regions
- **Alt Text**: Descriptive alternative text on all meaningful images
- **Color Contrast**: Minimum 4.5:1 contrast ratio for text
- **Screen Reader Support**: Tested with NVDA and VoiceOver

### Accessibility Testing

**Keyboard Navigation Testing**:
- `Tab` / `Shift+Tab`: Navigate through interactive elements
- `Enter` / `Space`: Activate buttons and links
- `Escape`: Close modals and dialogs
- Arrow keys: Navigate within carousels and galleries

**Screen Reader Compatibility**:
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

---

## SEO Implementation

### On-Page SEO

- **Unique Titles**: Each page has a unique, descriptive title
- **Meta Descriptions**: Custom descriptions for each page
- **Heading Hierarchy**: Proper h1-h6 structure
- **Semantic HTML**: Using appropriate HTML5 elements
- **Image Alt Tags**: Descriptive alt text on all images
- **Internal Linking**: Logical navigation structure

### Technical SEO

- **Sitemap**: XML sitemap at `/sitemap.xml`
- **Robots.txt**: SEO directives at `/robots.txt`
- **Canonical URLs**: Proper canonical tag implementation
- **Mobile-Friendly**: Responsive design passes Google mobile test
- **Page Speed**: Optimized loading times
- **HTTPS**: Secure connection (when deployed with SSL)

### Social Media SEO

- **Open Graph Tags**: Facebook/LinkedIn preview optimization
- **Twitter Cards**: Twitter-specific metadata
- **Social Images**: Custom OG images for sharing

### Structured Data

JSON-LD structured data for rich search results:
- Business information (LocalBusiness schema)
- Contact details
- Address and location
- Products (when applicable)

---

## Browser Support

### Supported Browsers

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |
| Samsung Internet | 14+ |

### Mobile Browsers

- Chrome Mobile (Android 90+)
- Safari Mobile (iOS 14+)
- Firefox Mobile (88+)

### Progressive Enhancement

The site is built with progressive enhancement principles:
- Core content accessible to all browsers
- Enhanced features for modern browsers
- Graceful degradation for older browsers

---

## Known Limitations

### Current Limitations

1. **No Backend Database**: All menu items and content are hardcoded. To update products, you must edit the source code and redeploy.

2. **Manual Order Processing**: Orders are placed via WhatsApp/phone/email. No automated order management system or shopping cart functionality.

3. **No User Accounts**: No customer login, order history, or saved preferences.

4. **No Online Payments**: Payment arrangements made manually after order placement.

5. **No Real-Time Inventory**: No stock tracking or availability management system.

6. **Static Content**: Product descriptions, pricing, and images require code changes to update.

7. **Single Location**: Contact information assumes a single bakery location.

8. **No CMS Integration**: Content management requires developer access to codebase.

### Intentional Design Choices

These limitations are **intentional** for this use case:
- Keeps architecture simple and maintenance low
- Reduces hosting costs (static site)
- Avoids complexity of payment processing and PCI compliance
- Leverages WhatsApp as a familiar communication channel
- Allows personal touch in order fulfillment

---

## Contributing

Contributions are welcome! Here's how you can help improve Blissful Bites:

### How to Contribute

1. **Fork the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Blissfull-bites.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

4. **Run Tests and Linting**
   ```bash
   npm run lint
   npm test
   ```

5. **Commit Your Changes**
   ```bash
   git commit -m "Add: Brief description of your changes"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues

### Contribution Guidelines

- **Code Style**: Follow existing Prettier and ESLint configurations
- **Commits**: Use clear, descriptive commit messages
- **Testing**: Add tests for new features
- **Documentation**: Update README and inline comments
- **Accessibility**: Ensure new components are keyboard and screen-reader accessible

### Areas for Contribution

- **Bug Fixes**: Report or fix issues
- **Accessibility**: Improve WCAG compliance
- **Performance**: Optimize images, code splitting
- **Documentation**: Improve or translate documentation
- **Testing**: Increase test coverage
- **Features**: See ENHANCEMENTS.md for ideas

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

You are free to:
- ✅ Use commercially
- ✅ Modify the code
- ✅ Distribute
- ✅ Use privately

Conditions:
- Include the original license and copyright notice
- No warranty provided

---

## Acknowledgments

### Technologies

- **Next.js Team** - For the incredible React framework
- **Vercel** - For hosting and analytics platform
- **Radix UI** - For accessible component primitives
- **shadcn/ui** - For beautiful pre-built components
- **Tailwind Labs** - For the Tailwind CSS framework

### Inspiration

- Built with love for **Savitha & Poorvika**, the founders of Blissful Bites
- Inspired by the needs of small-scale home bakeries

### Community

- Thank you to all contributors and supporters
- Special thanks to the Next.js and React communities

---

## Contact

### Bakery Contact

**Blissful Bites Bakery**
📍 Bangalore, India
📞 Phone: +91 63623 95980
💬 WhatsApp: +91 63623 95980
📧 Email: blissfulbites291@gmail.com
📜 FSSAI Licensed

### Developer Contact

**Project Maintainer: 8harath**
🐙 GitHub: [@8harath](https://github.com/8harath)
📦 Repository: [Blissfull-bites](https://github.com/8harath/Blissfull-bites)

### Support

- **Bug Reports**: [GitHub Issues](https://github.com/8harath/Blissfull-bites/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/8harath/Blissfull-bites/discussions)
- **Questions**: Open an issue with the "question" label

---

<div align="center">

### Made with ❤️ for bakers who create magic in their home kitchens

**Blissful Bites** | Handcrafted with Care | Bangalore, India

[⬆ Back to Top](#blissful-bites)

</div>
