# 🧁 Blissfull Bites

A beautiful, modern website built for a home-grown, homemade bakery. Blissfull Bites showcases delicious baked goods with an elegant and user-friendly interface that makes ordering a delightful experience.

## ✨ About

Blissfull Bites is a website designed specifically for homemade and home-grown bakeries. It provides customers with an easy way to browse products, learn about the bakery, and place orders directly through WhatsApp integration.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Dark/Light Theme**: Toggle between themes for optimal viewing comfort
- **Interactive Gallery**: Showcase your baked goods with a beautiful image gallery
- **Menu Section**: Display your products with detailed descriptions
- **Contact Form**: Easy customer communication
- **WhatsApp Integration**: Floating action button for instant customer queries
- **FAQ Section**: Answer common customer questions
- **About Page**: Share your bakery's story
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Fast Performance**: Built with Next.js 16 for optimal speed

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom animations
- **Component Library**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with Zod validation
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Toast Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/8harath/Blissfull-bites.git
   cd Blissfull-bites
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
Blissfull-bites/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── gallery/           # Gallery page
│   ├── menu/              # Menu page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Footer component
│   ├── whatsapp-fab.tsx  # WhatsApp floating button
│   └── first-load-splash.tsx  # Loading splash screen
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 Key Components

- **Header**: Responsive navigation with mobile menu support
- **Footer**: Social links and bakery information
- **WhatsApp FAB**: Floating action button for instant customer contact
- **First Load Splash**: Engaging loading animation on first visit
- **Theme Provider**: Dark/light mode support throughout the site

## 🚀 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

The easiest way to deploy your Blissfull Bites website is to use [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/8harath/Blissfull-bites)

## 📝 Customization

1. **Update Bakery Information**: Modify content in component files
2. **Add Products**: Update the menu section with your bakery items
3. **Change Theme Colors**: Edit Tailwind configuration in `tailwind.config.js`
4. **WhatsApp Number**: Update the WhatsApp contact number in the FAB component
5. **Images**: Replace images in the `public` directory with your bakery photos

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/8harath/Blissfull-bites/issues).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**8harath**
- GitHub: [@8harath](https://github.com/8harath)

## 🙏 Acknowledgments

- Built with love for homemade bakeries
- UI components from Radix UI and shadcn/ui
- Icons from Lucide React

---

Made with ❤️ for bakers who create magic in their home kitchens
