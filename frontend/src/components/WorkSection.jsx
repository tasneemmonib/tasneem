import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Instagram, ExternalLink, Play } from 'lucide-react';
import { projects, featuredWork, videoWork } from '../data/mock';
import { useNavigate } from 'react-router-dom';
import MediaGallery from './MediaGallerySection';

const categoryAccent = {
  'Media Production': { bg: 'rgba(156, 203, 154, 0.18)', dot: '#5A8D62' },
  'Marketing Strategy': { bg: '#F1E9FB', dot: '#6A4B86' },
  'Event Marketing': { bg: '#F1E9FB', dot: '#6A4B86' },
  'Research & Leadership': { bg: '#EFE2FB', dot: '#6A4B86' },
};

// Re-render Instagram embeds when present.
const useInstagramEmbeds = () => {
  useEffect(() => {
    const process = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };
    process();
    const t = setTimeout(process, 1200);
    return () => clearTimeout(t);
  }, []);
};

const WorkSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  useInstagramEmbeds();

  const fifthWard = projects.find((p) => p.id === 'fifth-ward-documentary');
  const marchMadness = projects.find(
    (p) => p.id === 'march-madness-storytelling'
  );
  const sportsMedia = projects.find(
    (p) => p.id === 'sports-marketing-operations'
  );
  const marketingProjects = projects.filter(
    (p) => p.category !== 'Media Production'
  );

  const subnav = [
    { label: 'Documentary Work', href: '#documentary' },
    { label: 'Video Editing', href: '#video' },
    { label: 'Sports Media', href: '#sports-media' },
    { label: 'Photo Gallery', href: '#gallery' },
  ];

  const handleSubnavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (projectId) => {
    sessionStorage.setItem('returnToWork', 'true');
    navigate(`/project/${projectId}`);
  };

  return (
    <>
      {/* MEDIA PRODUCTION — parent section */}
      <section
        id="work"
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: '#F4ECFB' }}
        ref={sectionRef}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 fade-section relative">
          {/* Section header */}
          <div className="mb-14 lg:mb-20">
            <p
              className="text-xs font-semibold tracking-[0.32em] uppercase mb-5"
              style={{ color: '#5A8D62', fontFamily: 'Inter, sans-serif' }}
            >
              Section 02
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2
                style={{
                  color: '#2F2A2E',
                  fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif",
                  fontWeight: 400,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.02,
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)',
                }}
              >
                Media Production.
              </h2>
              <p
                className="text-sm md:text-base max-w-md"
                style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
              >
                Documentary direction, video editing, sports storytelling, and
                editorial photography.
              </p>
            </div>

            {/* In-section subnav — anchors to sub-sections */}
            <div className="mt-8 flex flex-wrap gap-2">
              {subnav.map((s) => (
                <button
                  key={s.href}
                  onClick={() => handleSubnavClick(s.href)}
                  className="text-xs font-semibold tracking-[0.14em] uppercase rounded-full px-4 py-2"
                  style={{
                    background: '#FFFFFF',
                    color: '#2F2A2E',
                    border: '1px solid rgba(47, 42, 46, 0.12)',
                    fontFamily: 'Inter, sans-serif',
                    transition:
                      'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#2F2A2E';
                    e.currentTarget.style.color = '#FBF7F2';
                    e.currentTarget.style.borderColor = '#2F2A2E';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#2F2A2E';
                    e.currentTarget.style.borderColor =
                      'rgba(47, 42, 46, 0.12)';
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* DOCUMENTARY WORK — sub-section */}
          <div id="documentary" className="mb-20 lg:mb-24">
            <div className="mb-8 lg:mb-10">
              <p
                className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-3"
                style={{ color: '#5A8D62', fontFamily: 'Inter, sans-serif' }}
              >
                Documentary Work
              </p>
              <h3
                style={{
                  color: '#2F2A2E',
                  fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif",
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.05,
                  fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                }}
              >
                Documentary Work.
              </h3>
            </div>

            {/* HMNS HERO — official collaboration */}
            <article
              className="rounded-[24px] overflow-hidden mb-8 lg:mb-10"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(47, 42, 46, 0.10)',
                boxShadow:
                  '0 1px 2px rgba(47, 42, 46, 0.04), 0 36px 70px -36px rgba(47, 42, 46, 0.22)',
              }}
            >
              <div className="grid lg:grid-cols-12">
                {/* Left — Editorial copy */}
                <div className="lg:col-span-5 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full self-start mb-5"
                    style={{
                      background: 'rgba(156, 203, 154, 0.22)',
                      color: '#3F6446',
                      border: '1px solid rgba(90, 141, 98, 0.35)',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <Instagram size={11} /> Official Collaboration
                  </span>
                  <p
                    className="text-xs font-semibold tracking-[0.28em] uppercase mb-3"
                    style={{ color: '#6A4B86', fontFamily: 'Inter, sans-serif' }}
                  >
                    {featuredWork.hmns.subtitle}
                  </p>
                  <h4
                    className="mb-5"
                    style={{
                      color: '#2F2A2E',
                      fontFamily:
                        "'Instrument Serif', 'Playfair Display', serif",
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.05,
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    }}
                  >
                    {featuredWork.hmns.title}
                  </h4>
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
                  >
                    {featuredWork.hmns.summary}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-7">
                    <div>
                      <p
                        className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-1"
                        style={{
                          color: '#8A7F88',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        Role
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{
                          color: '#2F2A2E',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {featuredWork.hmns.role}
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-1"
                        style={{
                          color: '#8A7F88',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        Year
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{
                          color: '#2F2A2E',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {featuredWork.hmns.year}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={featuredWork.hmns.reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-11 px-5 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: '#2F2A2E',
                        color: '#FBF7F2',
                        fontFamily: 'Inter, sans-serif',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      <Instagram size={14} /> Watch on Instagram
                    </a>
                    <button
                      onClick={() => handleProjectClick('hmns-documentary')}
                      className="inline-flex items-center gap-2 h-11 px-5 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: 'transparent',
                        color: '#2F2A2E',
                        border: '1.5px solid #2F2A2E',
                        fontFamily: 'Inter, sans-serif',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Project Details <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Right — HMNS poster + Instagram Reel embed */}
                <div
                  className="lg:col-span-7 p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center gap-6"
                  style={{ background: '#F1E9FB' }}
                >
                  {/* Official project thumbnail — gives the project a polished poster */}
                  <a
                    href={featuredWork.hmns.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full max-w-[540px] rounded-2xl overflow-hidden relative group"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(106, 75, 134, 0.18)',
                      boxShadow:
                        '0 24px 48px -28px rgba(47, 42, 46, 0.22)',
                      aspectRatio: '16 / 9',
                    }}
                    aria-label="Open HMNS Reel on Instagram"
                  >
                    <img
                      src={featuredWork.hmns.poster}
                      alt="Houston Museum of Natural Science documentary — thumbnail"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(47,42,46,0.05), rgba(47,42,46,0.45))',
                        transition: 'background 0.25s ease',
                      }}
                    >
                      <span
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(251, 247, 242, 0.94)',
                          color: '#2F2A2E',
                          boxShadow: '0 12px 24px -10px rgba(47,42,46,0.45)',
                        }}
                      >
                        <Play size={22} />
                      </span>
                    </div>
                    <span
                      className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                      style={{
                        background: 'rgba(251, 247, 242, 0.92)',
                        color: '#2F2A2E',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                      }}
                    >
                      <Instagram size={11} /> HMNS Collaboration
                    </span>
                  </a>

                  {/* Instagram Reel embed */}
                  <div className="w-full max-w-[540px]">
                    <div
                      className="rounded-2xl overflow-hidden"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(106, 75, 134, 0.18)',
                        boxShadow:
                          '0 24px 48px -28px rgba(47, 42, 46, 0.22)',
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: featuredWork.hmns.embedHtml,
                        }}
                      />
                      <noscript>
                        <a
                          href={featuredWork.hmns.reelUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Watch the HMNS documentary on Instagram
                        </a>
                      </noscript>
                    </div>
                    <p
                      className="text-[11px] tracking-[0.22em] uppercase mt-4 text-center"
                      style={{
                        color: '#5A4F58',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      <a
                        href={featuredWork.hmns.reelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5"
                        style={{ color: '#5A4F58' }}
                      >
                        View original Reel <ExternalLink size={11} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Fifth Ward + March Madness — secondary documentary cards */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {fifthWard && (
                <DocumentaryProjectCard
                  project={fifthWard}
                  onClick={() => handleProjectClick(fifthWard.id)}
                />
              )}
              {marchMadness && (
                <DocumentaryProjectCard
                  project={marchMadness}
                  onClick={() => handleProjectClick(marchMadness.id)}
                />
              )}
            </div>
          </div>

          {/* VIDEO EDITING — sub-section */}
          <div id="video" className="mb-20 lg:mb-24">
            <div className="mb-8 lg:mb-10">
              <p
                className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-3"
                style={{ color: '#5A8D62', fontFamily: 'Inter, sans-serif' }}
              >
                Video Editing
              </p>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <h3
                  style={{
                    color: '#2F2A2E',
                    fontFamily:
                      "'Instrument Serif', 'Playfair Display', Georgia, serif",
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.05,
                    fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                  }}
                >
                  Video Editing.
                </h3>
                <p
                  className="text-sm md:text-base max-w-md"
                  style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
                >
                  Short-form edits demonstrating pacing, color, and visual style
                  — from sports cinematic cuts to stylized travel pieces.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {videoWork.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>
          </div>

          {/* SPORTS MEDIA — sub-section */}
          {sportsMedia && (
            <div id="sports-media" className="mb-20 lg:mb-24">
              <div className="mb-8 lg:mb-10">
                <p
                  className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-3"
                  style={{ color: '#5A8D62', fontFamily: 'Inter, sans-serif' }}
                >
                  Sports Media &amp; Storytelling
                </p>
                <h3
                  style={{
                    color: '#2F2A2E',
                    fontFamily:
                      "'Instrument Serif', 'Playfair Display', Georgia, serif",
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.05,
                    fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                  }}
                >
                  Sports Media.
                </h3>
              </div>
              <ProjectCard
                project={sportsMedia}
                onClick={() => handleProjectClick(sportsMedia.id)}
                wide
              />
            </div>
          )}

          {/* MEDIA GALLERY — sub-section, embedded inside Media Production */}
          <MediaGallery heading />
        </div>
      </section>

      {/* SELECTED MARKETING & RESEARCH */}
      <section
        id="marketing"
        className="py-24 lg:py-32"
        style={{ background: '#FBF7F2' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12 lg:mb-14">
            <p
              className="text-xs font-semibold tracking-[0.32em] uppercase mb-5"
              style={{ color: '#6A4B86', fontFamily: 'Inter, sans-serif' }}
            >
              Section 03
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2
                style={{
                  color: '#2F2A2E',
                  fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif",
                  fontWeight: 400,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.02,
                  fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                }}
              >
                Marketing &amp; Research.
              </h2>
              <p
                className="text-sm md:text-base max-w-md"
                style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
              >
                Brand strategy, marketing communications, and research projects
                across healthcare, sports, and consumer brands.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {marketingProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const DocumentaryProjectCard = ({ project, onClick }) => {
  const youtube = project.media?.find((m) => m.type === 'youtube');
  const instagram = project.media?.find((m) => m.type === 'instagram');

  return (
    <article
      className="overflow-hidden rounded-[18px]"
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(47, 42, 46, 0.10)',
        boxShadow:
          '0 1px 2px rgba(47, 42, 46, 0.04), 0 12px 32px -18px rgba(47, 42, 46, 0.18)',
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{ background: '#F1E9FB', aspectRatio: '16 / 9' }}
      >
        <a
          href={youtube?.link || instagram?.link || project.socialLink || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full group"
          aria-label={`Open ${project.title}`}
        >
          <img
            src={project.image}
            alt={`${project.title} thumbnail`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                'linear-gradient(180deg, rgba(47,42,46,0.02), rgba(47,42,46,0.36))',
            }}
          >
            <span
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(251, 247, 242, 0.94)',
                color: '#2F2A2E',
                boxShadow: '0 12px 24px -10px rgba(47,42,46,0.45)',
              }}
            >
              {instagram ? <Instagram size={20} /> : <Play size={20} />}
            </span>
          </div>
        </a>
      </div>

      <div className="p-6 lg:p-7">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
              style={{
                background: 'rgba(156, 203, 154, 0.18)',
                color: '#3F6446',
                border: '1px solid rgba(90, 141, 98, 0.22)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h4
          className="text-2xl mb-3"
          style={{
            color: '#2F2A2E',
            fontFamily: "'Instrument Serif', 'Playfair Display', serif",
            fontWeight: 400,
            letterSpacing: '-0.005em',
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </h4>
        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
        >
          {project.overview}
        </p>

        <div className="flex flex-wrap gap-3">
          {instagram && (
            <a
              href={instagram.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: '#2F2A2E',
                color: '#FBF7F2',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              <Instagram size={13} /> Watch Reel
            </a>
          )}
          <button
            onClick={onClick}
            className="inline-flex items-center gap-2 h-10 px-4 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: 'transparent',
              color: '#2F2A2E',
              border: '1.5px solid #2F2A2E',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Project Details <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </article>
  );
};

const VideoCard = ({ video }) => {
  return (
    <article
      className="overflow-hidden rounded-[18px]"
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(47, 42, 46, 0.10)',
        boxShadow:
          '0 1px 2px rgba(47, 42, 46, 0.04), 0 12px 32px -18px rgba(47, 42, 46, 0.18)',
      }}
    >
      <video
        controls
        preload="metadata"
        playsInline
        poster={video.poster}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          background: '#2F2A2E',
          aspectRatio: '16 / 9',
          objectFit: 'cover',
        }}
      >
        <source src={video.src} type="video/mp4" />
        <a href={video.src} target="_blank" rel="noopener noreferrer">
          Download {video.title}
        </a>
      </video>
      <div className="p-5 lg:p-6">
        <h4
          className="text-xl mb-2"
          style={{
            color: '#2F2A2E',
            fontFamily: "'Instrument Serif', 'Playfair Display', serif",
            fontWeight: 400,
            letterSpacing: '-0.005em',
            lineHeight: 1.15,
          }}
        >
          {video.title}
        </h4>
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
        >
          {video.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {video.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
              style={{
                background: '#F4ECFB',
                color: '#6A4B86',
                border: '1px solid rgba(106, 75, 134, 0.16)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const ProjectCard = ({ project, onClick, wide }) => {
  const accent =
    categoryAccent[project.category] || categoryAccent['Event Marketing'];
  return (
    <article
      className="group cursor-pointer overflow-hidden rounded-[18px]"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onClick();
      }}
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(47, 42, 46, 0.10)',
        boxShadow:
          '0 1px 2px rgba(47, 42, 46, 0.04), 0 12px 32px -18px rgba(47, 42, 46, 0.18)',
        transition:
          'transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.35s cubic-bezier(0.2, 0.7, 0.2, 1)',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow =
          '0 4px 8px rgba(47, 42, 46, 0.05), 0 28px 48px -22px rgba(47, 42, 46, 0.22)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow =
          '0 1px 2px rgba(47, 42, 46, 0.04), 0 12px 32px -18px rgba(47, 42, 46, 0.18)';
      }}
    >
      {wide ? (
        <div className="grid md:grid-cols-5 items-stretch">
          <div
            className="md:col-span-3 relative overflow-hidden"
            style={{
              background: accent.bg,
              minHeight: 280,
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{
                transition:
                  'transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1)',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = 'scale(1.04)')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
              loading="lazy"
            />
          </div>
          <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: accent.dot }}
              />
              <span
                className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
              >
                {project.category}
              </span>
            </div>
            <h4
              className="text-2xl md:text-3xl mb-3"
              style={{
                color: '#2F2A2E',
                fontFamily: "'Instrument Serif', 'Playfair Display', serif",
                fontWeight: 400,
                letterSpacing: '-0.005em',
                lineHeight: 1.1,
              }}
            >
              {project.title}
            </h4>
            <p
              className="text-sm leading-relaxed mb-4 line-clamp-3"
              style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
            >
              {project.overview}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
                  style={{
                    background: '#F4ECFB',
                    color: '#6A4B86',
                    border: '1px solid rgba(106, 75, 134, 0.16)',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              className="inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: '#5A8D62', fontFamily: 'Inter, sans-serif' }}
            >
              View project
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="relative overflow-hidden"
            style={{
              background: accent.bg,
              aspectRatio: '4 / 3',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{
                transition:
                  'transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1)',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
              loading="lazy"
            />
            <div
              className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
              style={{
                background: '#FFFFFF',
                transition: 'opacity 0.3s ease',
                boxShadow: '0 6px 16px -6px rgba(47, 42, 46, 0.35)',
              }}
            >
              <ArrowUpRight size={16} color="#2F2A2E" />
            </div>
          </div>
          <div className="p-5 lg:p-6">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: accent.dot }}
              />
              <span
                className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
              >
                {project.category}
              </span>
            </div>
            <h3
              className="text-xl mb-2"
              style={{
                color: '#2F2A2E',
                fontFamily: "'Instrument Serif', 'Playfair Display', serif",
                fontWeight: 400,
                letterSpacing: '-0.005em',
                lineHeight: 1.15,
              }}
            >
              {project.title}
            </h3>
            <p
              className="text-sm leading-relaxed mb-4 line-clamp-2"
              style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
            >
              {project.overview}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
                  style={{
                    background: '#F4ECFB',
                    color: '#6A4B86',
                    border: '1px solid rgba(106, 75, 134, 0.16)',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              className="inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: '#5A8D62', fontFamily: 'Inter, sans-serif' }}
            >
              View project
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default WorkSection;
