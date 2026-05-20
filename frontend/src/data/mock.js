// Public URL prefix helps when the site is hosted at a subpath.
const PUBLIC = process.env.PUBLIC_URL || '';
const gallery = (name) => `${PUBLIC}/media-gallery/${name}`;
const videoPoster = (name) => `${PUBLIC}/media-videos/posters/${name}`;

export const personalInfo = {
  name: "Tasneem Monib",
  title: "Multimedia Storyteller & Marketing Creative",
  subtitle:
    "I produce documentary, sports, and brand stories — and build the marketing that carries them. Based in Houston, working at the intersection of media production and marketing communications.",
  email: "tasneemmonib@gmail.com",
  linkedin: "https://linkedin.com/in/tasneemmonib",
  resumeUrl:
    "https://customer-assets.emergentagent.com/job_marketing-pro-131/artifacts/6eqlbgf1_Tasneem_Monib_Resume.pdf",
  profilePhoto:
    "https://customer-assets.emergentagent.com/job_marketing-pro-131/artifacts/ram015gf_Screenshot%202026-03-21%20at%203.56.46%E2%80%AFPM.png",
  aboutBio: [
    "I'm a multimedia storyteller and marketing-minded creative producer based in Houston. My work lives where media production meets marketing strategy — directing documentary shorts, producing sports and culture coverage, and building the campaigns and content that bring those stories to an audience.",
    "I've directed a documentary for the Houston Museum of Natural Science as part of an official collaboration, produced a community documentary for the Fifth Ward Library through UH's ShastaDocs series, and led sports media coverage as Sports Head Editor at CoogTV. Alongside production work, I've supported marketing communications for a pediatric medical practice and gameday marketing for University of Houston Athletics.",
    "I care about stories that sit at the intersection of sports, culture, and community — and about the marketing instincts that make those stories land. I'm equally at home on a shoot, in an edit bay, or building out a campaign deck.",
    "Open to opportunities across media production, creative producing, and marketing communications — particularly in sports, culture, lifestyle, and brand storytelling.",
  ],
};

export const capabilities = [
  { name: "Documentary Direction", icon: "Film" },
  { name: "Video Production & Editing", icon: "Video" },
  { name: "Sports & Culture Storytelling", icon: "Trophy" },
  { name: "Photography", icon: "Image" },
  { name: "Marketing Communications", icon: "MessageSquare" },
  { name: "Brand & Campaign Strategy", icon: "Target" },
  { name: "Social & Content Production", icon: "PenTool" },
  { name: "Event Marketing & Operations", icon: "Calendar" },
];

export const experience = [
  {
    company: "University of Houston · CoogTV",
    role: "Sports Head Editor",
    period: "2024 – Present",
    track: "Media Production",
    summary:
      "Lead sports video production — covering live games, producing highlight packages, and delivering promotional content on tight turnaround. Manage the full post-production workflow from raw footage to broadcast-ready cut for multi-platform distribution.",
  },
  {
    company: "Houston Museum of Natural Science",
    role: "Documentary Director (Collaboration)",
    period: "2026",
    track: "Media Production",
    summary:
      "Directed a documentary short in official collaboration with HMNS, leading concept, production, and final delivery for the museum's digital channels.",
  },
  {
    company: "UH ShastaDocs · Fifth Ward Library",
    role: "Director & Project Lead",
    period: "2025",
    track: "Media Production",
    summary:
      "Directed a documentary on the Fifth Ward Library through UH CoogTV's ShastaDocs series — owned the story from research and interviews through post-production and broadcast delivery.",
  },
  {
    company: "Springtime Pediatrics",
    role: "Marketing Communications Coordinator",
    period: "2023 – Present",
    track: "Marketing",
    summary:
      "Supported marketing communications and community outreach for a growing pediatric practice — short-form social video, patient-facing collateral, ribbon-cuttings and grand opening events, and physician referral visits.",
  },
  {
    company: "University of Houston Athletics",
    role: "Marketing & Gameday Operations",
    period: "2024 – 2025",
    track: "Marketing",
    summary:
      "Executed gameday marketing for UH Baseball and other athletics events including on-field promotions, fan engagement activations, and halftime coordination.",
  },
  {
    company: "The Cougar (UH Student Newspaper)",
    role: "Contributor",
    period: "2023 – 2024",
    track: "Marketing",
    summary:
      "Wrote and contributed editorial coverage for UH's student newspaper across campus, culture, and community topics — sharpening editorial voice and reporting instincts.",
  },
  {
    company: "United Sports & Entertainment · Battleground 2K24",
    role: "Event Operations Intern",
    period: "2024",
    track: "Marketing",
    summary:
      "Supported logistics and media coordination for a multi-day sports and entertainment event — prepared teleprompter speech summaries, ran media check-in and credentialing, and coordinated staff logistics across venues.",
  },
];

export const education = {
  school: "University of Houston, C.T. Bauer College of Business",
  degree: "BBA in Marketing, Minor in Journalism",
  gpa: "3.7",
  dates: "Aug 2022 – May 2026",
  studyAbroad: "University of Granada, Spain — Spring 2024",
};

export const honors = ["REACH Scholar", "Dean's List — All Semesters"];

export const categories = [
  "All",
  "Media Production",
  "Marketing Strategy",
  "Event Marketing",
  "Research & Leadership",
];

export const featuredWork = {
  // Hero of the Featured Work section
  hmns: {
    id: "hmns-documentary",
    title: "Houston Museum of Natural Science",
    subtitle: "Documentary · Official Collaboration",
    summary:
      "An official collaboration with the Houston Museum of Natural Science — directed and produced as a short documentary piece for the museum's digital channels. The project sits at the intersection of cultural institution and visual storytelling, treating museum subject matter with cinematic care.",
    role: "Director & Producer",
    year: "2026",
    collaborator: "Houston Museum of Natural Science",
    reelUrl: "https://www.instagram.com/reel/DXZ5d2qkd0E/",
    embedHtml: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DXZ5d2qkd0E/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%;"></blockquote>`,
    poster: `${PUBLIC}/media-gallery/HMNS-Thumbnail.jpg`,
    image: `${PUBLIC}/media-gallery/HMNS-Thumbnail.jpg`,
  },
};

// Short-form editing work — three MP4s under public/media-videos/
export const videoWork = [
  {
    id: "houston-fb-x-dracula",
    title: "UH Football × Dracula",
    description:
      "A cinematic edit pairing UH Football gameday footage with a Dracula score — built to showcase pacing, color, and rhythm in sports storytelling.",
    src: `${PUBLIC}/media-videos/houston-fb-x-dracula.mp4`,
    poster: `${PUBLIC}/media-gallery/DSCF3531.jpg`,
    tags: ["Sports", "Cinematic Edit", "Color"],
  },
  {
    id: "nyc-wes-anderson",
    title: "NYC — Wes Anderson",
    description:
      "A New York City travel edit cut in the Wes Anderson style — symmetrical framing, deliberate composition, and pastel-driven color grading.",
    src: `${PUBLIC}/media-videos/nyc-wes-anderson.mp4`,
    poster: videoPoster("nyc-wes-anderson-poster.jpg"),
    tags: ["Travel", "Stylized Edit", "Color"],
  },
  {
    id: "nyc-passin-me-by",
    title: "NYC — Passin' Me By",
    description:
      "A New York travel piece cut to The Pharcyde's 'Passin' Me By' — rhythmic editing, soft motion, and an editorial mood.",
    src: `${PUBLIC}/media-videos/nyc-passin-me-by.mp4`,
    poster: videoPoster("nyc-passin-me-by-poster.jpg"),
    tags: ["Travel", "Music-Driven Edit"],
  },
];

export const projects = [
  {
    id: "hmns-documentary",
    title: "Houston Museum of Natural Science — Documentary Collaboration",
    category: "Media Production",
    tags: ["Documentary", "Brand Collaboration", "Direction"],
    image: `${PUBLIC}/media-gallery/HMNS-Thumbnail.jpg`,
    overview:
      "Directed and produced a documentary short in official collaboration with the Houston Museum of Natural Science. The project paired institutional storytelling with cinematic visual treatment, delivered for HMNS's digital channels through Instagram Reels.",
    role: "Director & Producer",
    contributions: [
      "Directed the documentary in official collaboration with the Houston Museum of Natural Science",
      "Owned concept development, on-site production, and creative direction",
      "Managed post-production, editing, and final delivery for HMNS digital channels",
      "Coordinated with museum stakeholders to ensure the piece met brand and institutional standards",
    ],
    skills: [
      "Documentary Direction",
      "Brand Collaboration",
      "Video Production",
      "Storytelling",
      "Editing",
    ],
    tools: ["Adobe Premiere Pro", "Adobe Lightroom"],
    deliverables: [],
    supportingWork: [
      "Final documentary piece published via HMNS Instagram (collaboration post)",
    ],
    media: [
      {
        type: "instagram",
        url: "https://www.instagram.com/reel/DXZ5d2qkd0E/embed/",
        link: "https://www.instagram.com/reel/DXZ5d2qkd0E/",
        title: "HMNS Documentary — Collaboration Reel",
      },
    ],
    socialLink: "https://www.instagram.com/reel/DXZ5d2qkd0E/",
  },
  {
    id: "fifth-ward-documentary",
    title: "Fifth Ward Library Documentary",
    category: "Media Production",
    tags: ["Documentary", "Community Storytelling", "Direction"],
    image: gallery("Fifth-Ward-Library-Thumbnail.jpg"),
    overview:
      "Directed and produced a documentary highlighting a Houston community initiative, leading the full production lifecycle from concept through delivery including interviews, filming coordination, editing oversight, and storytelling structure. Delivered as part of the ShastaDocs series at UH CoogTV for broadcast and digital distribution.",
    role: "Director & Project Lead",
    contributions: [
      "Led the full documentary production from concept development through final delivery",
      "Conducted background research and coordinated interview subjects to build the narrative arc",
      "Managed filming logistics, camera operation, and on-location production at community sites",
      "Oversaw post-production editing and storytelling structure for broadcast-quality delivery",
      "Delivered a polished documentary short as part of the ShastaDocs series for multi-platform distribution",
    ],
    skills: [
      "Project Leadership",
      "Production Management",
      "Storytelling",
      "Team Coordination",
      "Video Editing",
    ],
    tools: ["Adobe Premiere Pro"],
    deliverables: [],
    supportingWork: [],
    media: [
      {
        type: "youtube",
        url: "https://www.youtube.com/embed/mTX2G7go8Cs",
        link: "https://youtu.be/mTX2G7go8Cs?si=5O-bw-ndusPsNTLI",
        title: "5th Ward Library | ShastaDocs — Directed by Tasneem Monib",
      },
    ],
  },
  {
    id: "march-madness-storytelling",
    title: "Houston Basketball: Built to Last",
    category: "Media Production",
    tags: ["Sports Documentary", "Tournament Coverage", "Storytelling"],
    image: gallery("March-Madness-Thumbnail.jpg"),
    overview:
      "A documentary on Houston Cougar basketball culture, built from March Madness coverage and moments captured throughout the year.",
    role: "Sports Head Editor (CoogTV) · Event Operations (Battleground 2K24)",
    contributions: [
      "Produced highlight packages and storytelling cuts around UH Basketball's tournament run for broadcast and digital distribution",
      "Coordinated post-production turnaround on tight deadline windows tied to live game schedules",
      "Supported press conference operations at Battleground 2K24 — teleprompter speech summaries, media check-in, and credentialing",
      "Built the narrative around player and team storylines rather than purely score-driven coverage",
    ],
    skills: [
      "Sports Documentary",
      "Tournament Coverage",
      "Video Editing",
      "Live Event Production",
      "Storytelling",
    ],
    tools: ["Adobe Premiere Pro"],
    deliverables: [],
    supportingWork: [
      "Tournament-window highlight packages",
      "Press conference and media operations support",
    ],
    media: [
      {
        type: "instagram",
        url: "https://www.instagram.com/reel/DXVUaBbkcjl/embed/",
        link: "https://www.instagram.com/reel/DXVUaBbkcjl/",
        title: "Houston Basketball: Built to Last",
      },
    ],
    socialLink: "https://www.instagram.com/reel/DXVUaBbkcjl/",
  },
  {
    id: "sports-marketing-operations",
    title: "Sports Media & Marketing — UH Athletics + CoogTV",
    category: "Media Production",
    tags: ["Sports Media", "Video Production", "Gameday Marketing"],
    image: gallery("DSCF3531.jpg"),
    overview:
      "Sports media production, gameday marketing, and event operations across University of Houston Athletics, CoogTV, and a multi-day national sports/entertainment event. Work spans covering live games, producing highlight packages, on-field promotions, fan engagement activations, and media coordination.",
    role: "Sports Head Editor (CoogTV) · Marketing & Gameday Operations (UH Athletics) · Event Operations (Battleground 2K24)",
    contributions: [
      "Led end-to-end sports video production at UH CoogTV — covering live games, producing highlight packages, and delivering promotional content on tight turnaround",
      "Managed complete post-production workflow from raw footage through final cut, ensuring broadcast-ready delivery for multi-platform digital distribution",
      "Executed gameday marketing operations for UH Baseball including on-field promotions, fan engagement activations, and halftime coordination",
      "Prepared teleprompter-ready speech summaries and media scripts for press conference speakers at Battleground 2K24",
      "Coordinated on-site media check-in, credentialing, and staff logistics across simultaneous event venues",
    ],
    skills: [
      "Sports Media",
      "Video Production",
      "Event Operations",
      "Content Strategy",
      "Gameday Marketing",
      "Media Relations",
    ],
    tools: ["Adobe Premiere Pro", "Adobe Lightroom", "Canva"],
    deliverables: [],
    supportingWork: [
      "Game highlight packages and promotional video content",
      "Gameday marketing activations and fan engagement programs",
      "Media scripts, credentialing materials, and event logistics documentation",
    ],
    media: [
      {
        type: "image",
        url: "https://customer-assets.emergentagent.com/job_marketing-pro-131/artifacts/612o9jhh_IMG_6880.jpeg",
        title: "UH Baseball — Gameday Fan Engagement at Schaefer Park",
      },
      {
        type: "image",
        url: "https://customer-assets.emergentagent.com/job_marketing-pro-131/artifacts/tv90cx4m_IMG_0238.JPEG",
        title: "UH Basketball — Game Action at Fertitta Center",
      },
      {
        type: "image",
        url: "https://customer-assets.emergentagent.com/job_marketing-pro-131/artifacts/yck7oeeq_DSCF3531.JPG",
        title: "UH Football — Gameday at TDECU Stadium",
      },
      {
        type: "video",
        url: "https://customer-assets.emergentagent.com/job_5cc4b4b6-e90a-44f5-98bd-311296ba1c1a/artifacts/cqrw4faw_Sequence%2006_1.MP4",
        title: "UH Football — Game Highlights",
      },
      {
        type: "video",
        url: "https://customer-assets.emergentagent.com/job_5cc4b4b6-e90a-44f5-98bd-311296ba1c1a/artifacts/qqgy5frm_uh%20hofstra%20touch%20the%20sky.MP4",
        title: "UH Basketball vs. Hofstra — Game Highlights",
      },
    ],
  },
  {
    id: "springtime-pediatrics",
    title: "Marketing Communications | Springtime Pediatrics",
    category: "Event Marketing",
    tags: ["Marketing Communications", "Social Content", "Event Marketing"],
    image:
      "https://images.pexels.com/photos/5998457/pexels-photo-5998457.jpeg?auto=compress&cs=tinysrgb&w=1200",
    overview:
      "Supported marketing communications for a growing pediatric medical practice — social media, marketing collateral, community outreach events, and referral relationship initiatives. Contributed to patient engagement, brand visibility, and local awareness across the Houston area.",
    role: "Marketing Communications Coordinator",
    contributions: [
      "Coordinated community events including educational classes, ribbon-cutting ceremonies, and grand opening activations to drive local brand awareness",
      "Designed patient-facing marketing collateral — flyers, signage, rack cards, and digital graphics — for outreach and acquisition campaigns",
      "Filmed and edited short-form video content for social media platforms to increase practice visibility and audience engagement",
      "Drafted and edited promotional communications supporting patient acquisition and retention goals",
      "Accompanied outreach visits to specialist offices to strengthen physician referral relationships",
    ],
    skills: [
      "Marketing Communications",
      "Content Creation",
      "Event Marketing",
      "Social Media Marketing",
      "Video Production",
      "Graphic Design",
    ],
    tools: ["Canva", "Adobe Premiere Pro", "Instagram", "Facebook"],
    deliverables: [],
    supportingWork: [
      "Patient-facing marketing materials (flyers, signage, rack cards, digital graphics)",
      "Short-form social media video content",
      "Community event coordination and execution",
      "Promotional communications and outreach materials",
    ],
    media: [
      {
        type: "instagram",
        url: "https://www.instagram.com/reel/DNOA_UmyFdE/embed/",
        link: "https://www.instagram.com/reel/DNOA_UmyFdE/",
        title: "Springtime Pediatrics — Social Media Reel",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/reel/DLnBLgMNtCc/embed/",
        link: "https://www.instagram.com/reel/DLnBLgMNtCc/",
        title: "Springtime Pediatrics — Social Media Reel",
      },
    ],
    socialLink: "https://www.instagram.com/springtimepediatrics",
  },
  {
    id: "nike-marketing-strategy",
    title: "Nike Marketing Strategy",
    category: "Marketing Strategy",
    tags: ["Marketing Strategy", "Brand Positioning"],
    image:
      "https://images.unsplash.com/photo-1715277998963-7949e2732583?w=1200&q=80",
    overview:
      "Developed a comprehensive marketing strategy addressing Nike's brand positioning, customer loyalty retention, and cultural relevance with emerging consumer segments. Delivered competitive landscape analysis and a strategic campaign framework targeting Gen Z audiences through culturally relevant messaging and digital-first engagement.",
    role: "Marketing Strategist",
    contributions: [
      "Conducted competitive landscape analysis across major athletic and lifestyle brands to identify positioning gaps",
      "Performed a SWOT analysis surfacing key opportunities for Nike to re-engage younger demographics",
      "Developed campaign concepts built around cultural relevance, digital engagement, and community-driven storytelling",
      "Created a segmentation and targeting strategy informed by consumer behavior research and market trends",
      "Delivered strategic brand positioning recommendations with supporting data and implementation roadmap",
    ],
    skills: [
      "Marketing Strategy",
      "Market Research",
      "Brand Positioning",
      "Campaign Planning",
      "Consumer Analysis",
    ],
    tools: ["Microsoft Office", "Google Workspace"],
    deliverables: [
      {
        type: "pdf",
        label: "Nike Marketing Strategy Document",
        url: "https://customer-assets.emergentagent.com/job_marketing-pro-131/artifacts/5tc21t3u_Nike%20Marketing%20Plan%20Paper.pdf",
      },
    ],
    supportingWork: [
      "Competitive landscape analysis and SWOT framework",
      "Campaign concept development",
      "Targeting and segmentation framework",
    ],
    media: [],
  },
  {
    id: "reach-research",
    title: "REACH Research — Gulf Coast Foodways",
    category: "Research & Leadership",
    tags: ["Research", "Qualitative Analysis"],
    image:
      "https://customer-assets.emergentagent.com/job_5cc4b4b6-e90a-44f5-98bd-311296ba1c1a/artifacts/7fexjkds_Screenshot%202026-03-21%20at%205.44.25%E2%80%AFPM.png",
    overview:
      "Conducted qualitative research through the REACH Program investigating Gulf Coast foodways in Southeast Texas. Developed a case study examining Arab contributions to regional cuisine through archival research and historical analysis, culminating in a formal presentation at the University of Houston Undergraduate Research Day.",
    role: "Undergraduate Researcher, REACH Program",
    contributions: [
      "Conducted qualitative research on Gulf Coast foodways through archival research and primary source analysis",
      "Developed a case study examining Arab contributions to regional cuisine and culinary traditions in Southeast Texas",
      "Performed historical analysis under faculty supervision to construct a research narrative grounded in primary evidence",
      "Delivered formal research presentation at the University of Houston Undergraduate Research Day",
    ],
    skills: [
      "Qualitative Research",
      "Historical Analysis",
      "Primary Source Evaluation",
      "Research Communication",
      "Academic Presentation",
    ],
    tools: ["Microsoft Office", "Google Workspace"],
    deliverables: [
      {
        type: "pdf",
        label: "Gulf Coast Foodways Research Paper",
        url: "https://customer-assets.emergentagent.com/job_marketing-pro-131/artifacts/uc8m34cb_Monib-Tasneem_Gulf%20Coast%20Foodways.pdf",
      },
    ],
    supportingWork: [
      "Formal research presentation at UH Undergraduate Research Day",
    ],
    media: [],
  },
  {
    id: "ink-collective",
    title: "INK Collective",
    category: "Research & Leadership",
    tags: ["Leadership", "Community Building"],
    image:
      "https://images.unsplash.com/photo-1610282475397-fa89b00c4d5f?w=1200&q=80",
    overview:
      "Co-founded and lead INK Collective, an on-campus organization at the University of Houston dedicated to promoting underrepresented and minority authors. Built the organization from the ground up, developing programming strategy, growing membership through campus outreach, and establishing community partnerships to expand literacy access across Houston.",
    role: "Co-Founder & Co-President",
    contributions: [
      "Founded and built an on-campus organization from the ground up, establishing its mission, structure, and programming",
      "Developed event programming strategy that drove consistent membership growth and engagement",
      "Coordinated community partnerships supporting literacy access and outreach initiatives across Houston",
      "Collaborated with a Houston library access project to expand community reach and impact",
    ],
    skills: [
      "Leadership",
      "Organization Building",
      "Program Development",
      "Community Engagement",
      "Event Planning",
    ],
    tools: [],
    deliverables: [],
    supportingWork: [],
    media: [],
  },
  {
    id: "denmark-market-analysis",
    title: "International Market Analysis — Denmark",
    category: "Marketing Strategy",
    tags: ["Marketing Strategy", "Market Research"],
    image:
      "https://images.pexels.com/photos/2862156/pexels-photo-2862156.jpeg?auto=compress&cs=tinysrgb&w=1200",
    overview:
      "Conducted a comprehensive market entry analysis evaluating Denmark as a potential expansion market for US-based companies. Assessed legal, economic, and cultural business environment and delivered strategic recommendations for market entry positioning, localization, and risk mitigation.",
    role: "Market Analyst",
    contributions: [
      "Researched and evaluated Denmark's regulatory and business environment for US market entry feasibility",
      "Analyzed economic indicators, trade policies, and consumer behavior patterns across the Danish market",
      "Assessed cultural factors and their implications for marketing strategy localization and brand adaptation",
      "Identified key market risks and developed mitigation strategies for each entry scenario",
      "Delivered strategic recommendations outlining positioning, timing, and operational considerations",
    ],
    skills: [
      "Market Research",
      "International Marketing",
      "Business Strategy",
      "Strategic Analysis",
    ],
    tools: ["Microsoft Office", "Google Workspace"],
    deliverables: [
      {
        type: "pdf",
        label: "Country Analysis Report — Denmark",
        url: "https://customer-assets.emergentagent.com/job_marketing-pro-131/artifacts/dndupe8u_Country%20Analysis%20%28Denmark%29.pdf",
      },
    ],
    supportingWork: [
      "Market entry risk assessment and mitigation framework",
    ],
    media: [],
  },
];

// Media Gallery — curated mix from uploaded photography.
// `feature: true` items render at a larger size (mosaic mix).
export const mediaGallery = [
  { src: gallery("DSCF0212.jpg"), caption: "Graduation Portrait", feature: true },
  { src: gallery("021826_WBB_TCU_TMonib-4.jpg"), caption: "UH Women's Basketball" },
  { src: gallery("021826_WBB_TCU_TMonib-5.jpg"), caption: "UH Women's Basketball" },
  { src: gallery("DSCF5634.jpg"), caption: "Architecture" },
  { src: gallery("DSCF3531.jpg"), caption: "UH Football" },
  { src: gallery("DSCF0719-2.jpg"), caption: "Editorial Frame" },
  { src: gallery("DSCF1696-2.jpg"), caption: "Engagement" },
  { src: gallery("A7402982.jpg"), caption: "UH Basketball" },
  { src: gallery("DSC01161.jpg"), caption: "UH Track" },
  { src: gallery("DSCF0295.jpg"), caption: "Graduation Portrait" },
  { src: gallery("DSCF0984.jpg"), caption: "Editorial Detail" },
  { src: gallery("DSCF1019.jpg"), caption: "Editorial Detail" },
  { src: gallery("A740165.jpg"), caption: "UH Basketball" },
  { src: gallery("A740302.jpg"), caption: "UH Basketball" },
  { src: gallery("DSCF3503.jpg"), caption: "UH Football" },
  { src: gallery("DSCF3537.jpg"), caption: "UH Football" },
  { src: gallery("DSCF3555.jpg"), caption: "UH Football" },
  { src: gallery("DSCF4056.jpg"), caption: "Architecture", feature: true },
  { src: gallery("DSCF4325.jpg"), caption: "UH Football" },
  { src: gallery("021826_WBB_TCU_TMonib-6.jpg"), caption: "UH Women's Basketball" },
  { src: gallery("A7403154.jpg"), caption: "UH Basketball" },
  { src: gallery("A7403475.jpg"), caption: "UH Basketball" },
  { src: gallery("A7403510.jpg"), caption: "UH Basketball" },
  { src: gallery("DSC00813.jpg"), caption: "UH Track" },
  { src: gallery("DSC01073.jpg"), caption: "UH Track" },
  { src: gallery("DSC01565.jpg"), caption: "UH Track" },
  { src: gallery("DSC02016.jpg"), caption: "UH Track" },
  { src: gallery("DSC02225.jpg"), caption: "UH Track" },
  { src: gallery("DSCF0739.jpg"), caption: "UH Basketball" },
  { src: gallery("DSCF1085.jpg"), caption: "Editorial" },
  { src: gallery("DSCF1117.jpg"), caption: "City" },
  // Newly added — 20 additional frames
  { src: gallery("DSCF4419.jpg"), caption: "Fashion Editorial" },
  { src: gallery("DSCF5310.jpg"), caption: "Fashion Editorial", feature: true },
  { src: gallery("DSCF5580.jpg"), caption: "UH Football" },
  { src: gallery("DSCF5739.jpg"), caption: "UH Basketball" },
  { src: gallery("DSCF6003.jpg"), caption: "Motorcycle — City" },
  { src: gallery("DSCF6063.jpg"), caption: "Graduation Portrait" },
  { src: gallery("DSCF6160.jpg"), caption: "Graduation Portrait" },
  { src: gallery("DSCF6367.jpg"), caption: "Graduation Portrait" },
  { src: gallery("DSCF7826.jpg"), caption: "Ducks in the Park" },
  { src: gallery("IMG_0197.jpg"), caption: "UH Basketball" },
  { src: gallery("IMG_0238.jpg"), caption: "UH Basketball" },
  { src: gallery("IMG_0326.jpg"), caption: "UH Basketball" },
  { src: gallery("IMG_735.jpg"), caption: "UH Track", feature: true },
  { src: gallery("IMG_6893.jpg"), caption: "UH Basketball" },
  { src: gallery("IMG_6966.jpg"), caption: "UH Basketball — Coach Sampson", feature: true },
  { src: gallery("IMG_9898.jpg"), caption: "UH Basketball" },
  { src: gallery("Untitled-5.jpg"), caption: "UH Baseball" },
  { src: gallery("Untitled-13.jpg"), caption: "UH Baseball" },
  { src: gallery("Untitled-14.jpg"), caption: "UH Baseball" },
];
