# Tasneem Monib — Marketing Portfolio Website

## Original Problem Statement
Build a modern, sleek marketing portfolio website for a recent marketing graduate entering the workforce. Professional, creative, agency-inspired, confident, minimalist but visually engaging.

## Tech Stack
- **Frontend**: React, React Router, TailwindCSS, Shadcn UI components
- **Data**: All content in `/app/frontend/src/data/mock.js` (frontend-only, no backend)
- **Fonts**: Poppins, Inter (headlines), Roboto, Open Sans (body)
- **Colors**: Black #0B0B0B, White #FFFFFF, Light gray #F5F5F5, Accent red #C8102E

## Architecture
```
/app/frontend/src/
├── components/
│   ├── AboutSection.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   ├── HomePage.jsx
│   ├── Navbar.jsx
│   ├── ProjectDetail.jsx   ← Gallery, lightbox, video, Instagram embeds, Tools, Deliverables
│   └── WorkSection.jsx
├── data/
│   └── mock.js              ← All project data (7 projects, ordered by strength)
├── App.js
├── App.css
└── index.css
```

## Projects (in display order)
1. **Sports Marketing & Media Production Experience** — real UH photo, 7 images, 3 videos
2. **Marketing Communications | Springtime Pediatrics** — 2 Instagram reel embeds
3. **Fifth Ward Library Documentary** — YouTube embed, role: Director & Project Lead
4. **Nike Marketing Strategy** — PDF deliverable + supporting work bullets
5. **REACH Research — Gulf Coast Foodways** — historical photo, PDF deliverable
6. **INK Collective** — leadership, no deliverables
7. **International Market Analysis — Denmark** — Danish flag, PDF deliverable

## Completed Features
- Homepage hero, About section (two-column), Core Capabilities grid
- Work section with category filters, reordered by professional strength
- "View Project" CTAs (not "View Case Study")
- Project detail pages with standardized structure:
  - Overview, Key Contributions
  - Deliverables (only real files, clickable)
  - Supporting Work (plain text bullets, not clickable)
  - Photo Gallery + Lightbox, Native Video, YouTube, Instagram embeds
  - Sidebar: Skills Demonstrated, Tools Used, Project Info
- Professional case-study tone across all content
- HEART Program project removed
- Instagram reel embeds with "View on Instagram" buttons
- Contact & Footer sections
- Navbar with profile photo, navigation, Resume download

## Backlog

### P0 — Awaiting User Content
- Additional images/videos for Sports Marketing
- Springtime Pediatrics screenshots/marketing materials (user may provide)

### P2 — Future
- Backend CMS (only if user requests)
