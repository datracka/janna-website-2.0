# janna-website-2.0 ✨

Personal website for Janna Ziesemer, a German as a Foreign Language teacher specialized in teaching German and English for companies and students.

## 🚀 Features

- **Multi-language support** (Spanish/English) with Astro i18n
- **Responsive design** with Tailwind CSS 
- **Modern tech stack** (Astro + React + TypeScript)
- **Google Analytics** integration with Partytown
- **Static site generation** for optimal performance
- **SEO optimized** with proper meta tags and structure

## 📋 Sections

1. **Header** - Navigation and language switcher
2. **Hero Section** - Professional introduction and CTA
3. **About** - Biography and qualifications
4. **Services** - Private lessons, corporate training, exam prep, business German
5. **Testimonials** - Student feedback and reviews
6. **Contact** - Contact form and information
7. **Footer** - Quick links and legal pages

## 🛠️ Tech Stack

- **Frontend**: Astro + React + TypeScript
- **Styling**: Tailwind CSS v4
- **Analytics**: Google Analytics with Partytown
- **i18n**: Built-in Astro internationalization
- **Deployment**: Static site generation

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌍 Languages

- **Spanish** (default) - `/`
- **English** - `/en/`

## 📁 Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Header.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Services.astro
│   ├── Testimonials.astro
│   ├── Contact.astro
│   └── Footer.astro
├── layouts/            # Page layouts
│   └── Layout.astro
├── pages/              # Route pages
│   ├── index.astro     # Spanish homepage
│   ├── privacy.astro   # Privacy policy (ES)
│   ├── imprint.astro   # Legal notice (ES)
│   └── en/             # English pages
│       ├── index.astro
│       ├── privacy.astro
│       └── imprint.astro
├── i18n/               # Internationalization
│   ├── translations.ts # Translation strings
│   └── utils.ts        # i18n utilities
└── styles/             # Global styles
    └── global.css
```

## ⚙️ Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Google Analytics
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## 🔧 Development Workflow

The project includes automated scripts for GitHub workflow:

### Create Issue Branch
```bash
./scripts/create-issue-branch.sh <issue-number>
```

### Merge Current PR
```bash
./scripts/merge-current-pr.sh
```

### Quick Commands (via Claude)
- Say "OK", "merge it", or "approve" → Auto-merge current PR
- Say "work on issue #X" → Create branch for issue

## 🎨 Customization

### Colors
The design uses a warm, professional color palette:
- Primary: Blue (#2563eb)
- Background: Light blue gradients
- Text: Gray shades for hierarchy

### Content
Update translations in `src/i18n/translations.ts` for both Spanish and English.

### Contact Information
Update contact details in:
- `src/components/Contact.astro`
- `src/components/Footer.astro`
- Legal pages

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Mobile navigation menu
- Optimized images and layouts

## 🔍 SEO

- Semantic HTML structure
- Meta descriptions and titles
- Open Graph tags
- Proper heading hierarchy
- Fast loading times with static generation

## 📄 Legal Compliance

Includes German/EU legal requirements:
- Privacy Policy (Datenschutzerklärung)
- Legal Notice (Impressum)
- Available in both languages

## 🚀 Deployment

The site generates static files in the `dist/` folder, ready for deployment to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

1. Create an issue for new features or bugs
2. Use the automated scripts for branch management
3. Follow the existing code style and structure
4. Test builds before submitting PRs

## 📞 Support

For questions about this project, contact:
- Email: [Add project maintainer email]
- GitHub Issues: [Repository issues page]

---

Built with ❤️ using Astro, React, and Tailwind CSS
