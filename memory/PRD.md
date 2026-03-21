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
│   ├── ProjectDetail.jsx   ← Image gallery + lightbox + native video + YouTube + Tools Used
│   └── WorkSection.jsx
├── data/
│   └── mock.js              ← Central content file (all projects, tools, deliverables)
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
- Project Detail pages — full case study format:
  - Overview, Key Contributions, Deliverables & Work Samples, Photo Gallery, Video
  - Sidebar: Skills Demonstrated, Tools Used, Project Info (Category, Role)
- Contact & Footer sections
- Navbar with profile photo, navigation links, and Resume download button
- Lightbox image viewer with navigation

### Content & Thumbnails (Updated Feb 2026)
- **Nike Marketing Strategy**: Glowing Nike swoosh thumbnail, PDF deliverable + text deliverables
- **Denmark Country Market Analysis**: Danish flag thumbnail, PDF deliverable
- **Sports Marketing & Media Operations**: Real UH Football thumbnail, 7-image gallery, 3 native videos
- **Springtime Pediatrics Marketing**: Pediatric healthcare thumbnail, descriptive deliverables
- **Fifth Ward Library Documentary**: Library thumbnail, YouTube embed
- **REACH Research — Gulf Coast Foodways**: Historical B&W photo thumbnail, PDF deliverable
- **INK Collective**: Stacked books thumbnail
- **H.E.A.R.T. Program — Social Media Strategy**: Laptop/desk thumbnail, descriptive deliverables

### Case Study Enhancement (Feb 2026)
- All project descriptions rewritten with professional case-study tone
- Added `tools` field to data model (rendered in sidebar)
- Deliverables section now supports both downloadable PDFs and descriptive text items
- Section renamed to "Deliverables & Work Samples"
- Tools Used section added to sidebar with wrench icon badges

## Backlog

### P0 — Awaiting User Content
- Additional images/videos for Sports Marketing project (user may send more)
- Springtime Pediatrics content (screenshots, video thumbnails — Instagram blocked)

### P2 — Future
- Backend development (CMS-style admin) — only if user requests
