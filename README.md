# Cloud Engineer Portfolio - Kunigiri Abhishek

A premium, responsive personal portfolio website for a Cloud Engineer fresher with modern UI/UX, smooth animations, and structured content presentation.

## 🌟 Features

**Modern Design**
- Glassmorphism effects with blur panels
- Smooth gradient backgrounds (Deep Navy to vibrant accents)
- Clean, professional layout
- Classic + Futuristic hybrid theme

**Smooth Animations**
- Hero section fade-out on scroll
- Sticky navigation with blur effect
- Staggered section reveals
- 3D card tilt effects on projects
- Button hover animations (scale + glow)

**Fully Responsive**
- Mobile-first approach
- Optimized for tablets and desktops
- Flexible grid layouts

## 🎨 Design System

**Colors:**
- Primary: Deep Navy (#0F172A)
- Accent: Electric Blue (#3B82F6)
- Secondary: Soft Purple (#8B5CF6)

**Typography:**
- Font: Inter (Google Fonts)
- Clean, modern, and readable

## 📋 Sections

1. **Hero Section** - Full viewport with profile image, name, role, bio, contact info, and CTA buttons
2. **About** - Cloud-focused developer summary
3. **Skills** - Grouped interactive cards (Cloud, Programming, Web, Database, Tools, Other)
4. **Experience** - Internship timeline with staggered animations
5. **Projects** - 3D animated cards with tilt effects
6. **Education** - Academic background with timeline
7. **Certifications** - Badge-style certification cards
8. **Contact** - Form and social links (LinkedIn, GitHub, Email)

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Inter Font** - Typography

## 📦 Installation

```bash
npm install
```

## 🏃 Run Development Server

```bash
npm run dev
```

Open browser to `http://localhost:5173`

## 🔨 Build for Production

```bash
npm run build
```

## 📝 Customization

### Update Personal Information

**Hero Section** (`src/components/Hero.jsx`):
- Name, role, bio
- Email and phone
- Profile image URL

**About Section** (`src/components/About.jsx`):
- Professional summary

**Skills Section** (`src/components/Skills.jsx`):
- Update `skillGroups` array with your skills

**Experience Section** (`src/components/Experience.jsx`):
- Update `experiences` array with your internships/jobs

**Projects Section** (`src/components/Projects.jsx`):
- Update `projects` array with your projects
- Add project screenshots and live demo links

**Education Section** (`src/components/Education.jsx`):
- Update `education` array with your academic background

**Certifications Section** (`src/components/Certifications.jsx`):
- Update `certifications` array with your certificates

**Contact Section** (`src/components/Contact.jsx`):
- Update social media links (LinkedIn, GitHub)
- Configure form submission endpoint

### Update Colors

Edit `tailwind.config.js`:
```js
colors: {
  primary: '#0F172A',    // Deep Navy
  accent: '#3B82F6',     // Electric Blue
  secondary: '#8B5CF6',  // Soft Purple
}
```

### Add Resume

Place your resume PDF in the `public` folder and update the links in `Hero.jsx`

## ⚡ Performance Optimizations

- Intersection Observer for scroll animations
- Optimized animation timing (0.3s-0.6s)
- Lazy loading for images
- Minimal re-renders with proper React hooks
- Smooth scroll behavior

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 💡 Pro Tips for Making It "Hire-Worthy"

1. **Add project screenshots** - Visual proof of your work
2. **Add live demo links** - Let recruiters interact with your projects
3. **Reduce text, increase visuals** - Show, don't just tell
4. **Keep spacing clean** - Proper whitespace makes a huge difference
5. **Update regularly** - Keep adding new projects and skills

## 📄 License

MIT License - Free to use for personal portfolios
