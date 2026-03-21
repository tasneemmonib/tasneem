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
│   ├── ProjectDetail.jsx   ← Image gallery + lightbox + YouTube support
│   └── WorkSection.jsx
├── data/
│   └── mock.js              ← Central content file
├── App.js                    ← Router setup
├── App.css
└── index.css
```

## What's Been Implemented

### Completed Features
- Homepage hero section with name, title, CTA buttons
- About section — two-column layout (bio left, professional background/education/honors right)
- Core Capabilities grid
- Work & Projects section — filterable project card grid
- Project Detail pages — case study format (overview, contributions, skills, deliverables, media)
- Contact & Footer sections
- Navbar with profile photo, navigation links, and Resume download button
- Resume PDF, Nike Marketing Plan, Denmark Analysis, Gulf Coast Foodways research paper — all linked
- Fifth Ward Library Documentary — YouTube embed
- **Sports Marketing & Media Operations — 7-image photo gallery with lightbox + 3 native videos** (Feb 2026)
  - Photos: UH Baseball gameday, Basketball (3 shots), Football, Track & Field (2 shots)
  - Videos: UH Baseball gameday, UH Football highlights, UH Basketball vs Hofstra highlights
  - Thumbnail: Replaced stock image with real UH Football photo (DSCF3531.JPG)

### Content-Populated Projects
1. Nike Marketing Strategy (PDF)
2. Denmark Country Market Analysis (PDF)
3. Sports Marketing & Media Operations (7 photos)
4. Springtime Pediatrics Marketing (pending media)
5. Fifth Ward Library Documentary (YouTube video)
6. REACH Research — Gulf Coast Foodways (PDF)
7. INK Collective
8. The H.E.A.R.T. Program — Social Media Strategy

## Backlog

### P0 — Awaiting User Content
- Additional images/videos for Sports Marketing project (user may send more)
- Springtime Pediatrics content (screenshots, video thumbnails — Instagram blocked)

### P2 — Future
- Backend development (CMS-style admin) — only if user requests
