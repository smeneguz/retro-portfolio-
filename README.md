# Silvio Meneguzzo - Retro Portfolio 🎮

**A professional blockchain research portfolio with a retro 8-bit aesthetic**

Live site: [https://meneguzzo.eth.limo](https://meneguzzo.eth.limo)

---

## ✨ Features

- 🎮 **Playable Snake Game** - Fun retro easter egg
- 🎨 **5 Color Themes** - Cyberpunk Pink, Game Boy, Outrun, Matrix, Blockchain Blue
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- 📝 **9 Publications** - All academic papers with DOIs
- 💼 **Complete CV** - Education, work experience, skills
- 📧 **Contact Form** - Email integration with EmailJS
- 📬 **Newsletter** - Subscription functionality
- ⚡ **Fast Loading** - Optimized production build (~110KB gzipped)

---

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Visit http://localhost:5173
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📧 Contact Forms - Working Now!

**Current Status:** ✅ Forms work immediately without setup!

### How It Works (Without EmailJS)

### 1. Create EmailJS Account

1. Sign up at https://www.emailjs.com/ (free tier: 200 emails/month)
2. Add a new Email Service (Gmail recommended)
3. Create two Email Templates:
   - **Contact Form Template** - for contact messages
   - **Newsletter Template** - for newsletter subscriptions

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Add your EmailJS credentials to `.env`:
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 3. Email Template Setup

**Contact Form Template:**
```
Subject: New Contact Message from {{from_name}}

You have received a new message:

From: {{from_name}}
Email: {{from_email}}
Subject: {{message_subject}}

Message:
{{message}}
```

**Newsletter Template:**
```
Subject: New Newsletter Subscription

New subscriber:
Email: {{subscriber_email}}
```

**Contact Form:** Opens visitor's email client with pre-filled message → They send → You receive in inbox

**Newsletter:** Saves to browser localStorage → View with `newsletterManager.getSubscribers()` in console → Export with `newsletterManager.exportSubscribers()`

### Upgrade to EmailJS (Optional - Better UX)

For automatic email delivery without mailto: popups:

---

## 📝 Content Management

All content is stored in JSON files in `src/config/`. No coding required to update!

### Update Personal Info

Edit `src/config/siteConfig.json`:
```json
{
  "personal": {
    "name": "Your Name",
    "email": "your@email.com"
  }
}
```

### Add a Publication

Edit `src/config/publications.json`:
```json
{
  "id": 10,
  "title": "Your Paper Title",
  "authors": "Your Name et al.",
  "venue": "Conference Name 2026",
  "year": 2026,
  "doi": "https://doi.org/...",
  "type": "conference",
  "status": "Published"
}
```

### Add a Project

Edit `src/config/projects.json`:
```json
{
  "id": 9,
  "title": "Project Name",
  "category": "blockchain",
  "description": "Project description...",
  "technologies": ["Tech1", "Tech2"],
  "github": "https://github.com/username/repo",
  "featured": true
}
```

### Write a Blog Post

Edit `src/config/blog.json`:
```json
{
  "id": 1,
  "title": "Your Post Title",
  "slug": "your-post-slug",
  "excerpt": "Brief description...",
  "author": "Your Name",
  "date": "2026-01-15",
  "category": "blockchain",
  "readTime": "10 min",
  "tags": ["DAO", "Research"],
  "status": "published",
  "content": "Your full post content..."
}
```

---

## 🎨 Themes

Users can switch between 5 retro color themes:

1. **Cyberpunk Pink** (default) - Hot pink & cyan vibes
2. **Game Boy Classic** - Nostalgic green monochrome
3. **Outrun Sunset** - Purple & orange aesthetic
4. **Matrix Green** - Terminal hacker style
5. **Blockchain Blue** - Professional blue & gold

Themes persist in browser localStorage.

---

## 🎮 Snake Game

Click the gamepad icon (🎮) in the header to play!

**Controls:**
- Arrow Keys - Move
- SPACE - Pause/Resume
- ESC - Close game

High scores are saved in localStorage.

---

## 📁 Project Structure

```
retro-portfolio/
├── public/
│   └── CV_Europass_Silvio_Meneguzzo.pdf  # Your CV
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components (Button, Card, etc.)
│   │   ├── game/            # Snake game components
│   │   └── layout/          # Header, Footer
│   ├── config/              # ⭐ EDIT THESE FOR UPDATES
│   │   ├── siteConfig.json  # Personal info, education, experience
│   │   ├── publications.json # Papers and talks
│   │   ├── projects.json    # GitHub projects
│   │   ├── blog.json        # Blog posts
│   │   └── themes.json      # Color themes
│   ├── pages/               # All page components
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Helper functions
│   └── styles/              # Global styles
├── .env.example             # Email configuration template
└── README.md                # This file
```

---

## 🚢 Deployment

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI (one-time)
npm install -g vercel

# Deploy
npm run build
vercel --prod
```

**Add environment variables in Vercel:**
Settings → Environment Variables → Add your EmailJS credentials

### Option 2: Netlify

```bash
npm run build
# Drag the 'dist' folder to netlify.com/drop
```

**Add environment variables in Netlify:**
Site Settings → Build & Deploy → Environment → Add variables

---

## 🔧 Tech Stack

- **Framework:** React 18 + Vite
- **Routing:** React Router v6
- **Icons:** Font Awesome
- **Email:** EmailJS
- **Styling:** CSS Variables (theme system)
- **Font:** Press Start 2P (retro pixel font)

---

## 📊 Build Info

- **Bundle Size:** ~355 KB (~110 KB gzipped)
- **Load Time:** <2 seconds
- **Lighthouse Score:** 95+

---

## 🐛 Troubleshooting

### Contact form not sending emails

1. Check `.env` file exists with correct credentials
2. Verify EmailJS templates are created
3. Check browser console for errors
4. Test EmailJS dashboard directly

### Theme not persisting

Clear browser localStorage and try again.

### Dev server issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📄 License

Personal portfolio website. All rights reserved.

---

## 👤 Contact

**Silvio Meneguzzo**
- Email: meneguzzosilvio@gmail.com
- GitHub: [@smeneguz](https://github.com/smeneguz)
- LinkedIn: [silvio-arras-meneguzzo](https://www.linkedin.com/in/silvio-arras-meneguzzo/)
- Website: https://meneguzzo.eth.limo

---

**Built with ❤️ using React + Vite**
