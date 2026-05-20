import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Wrench,
} from 'lucide-react';
import { Button } from './ui/button';
import { projects } from '../data/mock';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const sectionRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const imageMedia = project ? project.media.filter((m) => m.type === 'image') : [];
  const youtubeMedia = project ? project.media.filter((m) => m.type === 'youtube') : [];
  const nativeVideoMedia = project ? project.media.filter((m) => m.type === 'video') : [];
  const instagramMedia = project ? project.media.filter((m) => m.type === 'instagram') : [];

  const fileDeliverables = project ? (project.deliverables || []).filter((d) => d.url) : [];
  const supportingWork = project ? (project.supportingWork || []) : [];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % imageMedia.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + imageMedia.length) % imageMedia.length);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const workSection = document.querySelector('#work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'instant' });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ background: '#F1E9FB' }}
      >
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ color: '#3B2A52', fontFamily: "'Fraunces', serif" }}
        >
          Project Not Found
        </h2>
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          style={{ borderColor: '#6A4B86', color: '#6A4B86' }}
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
        </Button>
      </div>
    );
  }

  const SectionDivider = () => (
    <div
      className="my-10 flex items-center gap-3"
      aria-hidden="true"
    >
      <span
        className="flex-1 h-[1px]"
        style={{ background: 'rgba(106, 75, 134, 0.18)' }}
      />
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: '#9CCB9A' }}
      />
      <span
        className="flex-1 h-[1px]"
        style={{ background: 'rgba(106, 75, 134, 0.18)' }}
      />
    </div>
  );

  return (
    <div className="tm-paper" style={{ background: '#FBF7F2' }}>
      {/* Hero Banner */}
      <div className="relative h-[55vh] md:h-[62vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(59,42,82,0.92) 0%, rgba(59,42,82,0.45) 45%, rgba(59,42,82,0.15) 100%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(241, 233, 251, 0.95)',
                  color: '#6A4B86',
                  fontFamily: 'Inter, sans-serif',
                  border: '1px solid rgba(106, 75, 134, 0.18)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="text-3xl md:text-5xl lg:text-6xl mb-3"
            style={{
              color: '#FFFFFF',
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            {project.title}
          </h1>
          <p
            className="text-base md:text-lg max-w-3xl"
            style={{
              color: 'rgba(241, 233, 251, 0.85)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            <span style={{ color: '#9CCB9A', fontWeight: 600 }}>Role · </span>
            {project.role}
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full"
          style={{
            color: '#6A4B86',
            background: '#FFFFFF',
            border: '1px solid rgba(106, 75, 134, 0.18)',
            fontFamily: 'Inter, sans-serif',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#6A4B86';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = '#FFFFFF';
            e.currentTarget.style.color = '#6A4B86';
          }}
        >
          <ArrowLeft size={14} /> Back to Work
        </button>
      </div>

      {/* Content */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16"
        ref={sectionRef}
      >
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 fade-section">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-block w-6 h-[2px] rounded-full"
                  style={{ background: '#9CCB9A' }}
                />
                <p
                  className="text-xs font-semibold tracking-[0.22em] uppercase"
                  style={{ color: '#6A4B86', fontFamily: 'Inter, sans-serif' }}
                >
                  Overview
                </p>
              </div>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{
                  color: '#4A3A66',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {project.overview}
              </p>
            </div>

            <SectionDivider />

            {/* Key Contributions */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="inline-block w-6 h-[2px] rounded-full"
                  style={{ background: '#9CCB9A' }}
                />
                <p
                  className="text-xs font-semibold tracking-[0.22em] uppercase"
                  style={{ color: '#6A4B86', fontFamily: 'Inter, sans-serif' }}
                >
                  Contributions
                </p>
              </div>
              <div className="space-y-3">
                {project.contributions.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(106, 75, 134, 0.08)',
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      color="#5A8D62"
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span
                      className="text-[15px] leading-relaxed"
                      style={{
                        color: '#4A3A66',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            {fileDeliverables.length > 0 && (
              <>
                <SectionDivider />
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="inline-block w-6 h-[2px] rounded-full"
                      style={{ background: '#9CCB9A' }}
                    />
                    <p
                      className="text-xs font-semibold tracking-[0.22em] uppercase"
                      style={{ color: '#6A4B86', fontFamily: 'Inter, sans-serif' }}
                    >
                      Deliverables
                    </p>
                  </div>
                  <div className="space-y-3">
                    {fileDeliverables.map((d, i) => (
                      <a
                        key={i}
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`deliverable-file-${i}`}
                        className="flex items-center gap-3 p-4 rounded-2xl group"
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid rgba(106, 75, 134, 0.10)',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.borderColor = '#9CCB9A';
                          e.currentTarget.style.background = '#F6FBF6';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.borderColor =
                            'rgba(106, 75, 134, 0.10)';
                          e.currentTarget.style.background = '#FFFFFF';
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(156, 203, 154, 0.25)' }}
                        >
                          <FileText size={18} color="#5A8D62" />
                        </div>
                        <span
                          className="text-sm font-semibold flex-1"
                          style={{
                            color: '#3B2A52',
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          {d.label}
                        </span>
                        <ExternalLink
                          size={14}
                          color="#6A4B86"
                          className="flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Supporting Work */}
            {supportingWork.length > 0 && (
              <>
                <SectionDivider />
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="inline-block w-6 h-[2px] rounded-full"
                      style={{ background: '#9CCB9A' }}
                    />
                    <p
                      className="text-xs font-semibold tracking-[0.22em] uppercase"
                      style={{ color: '#6A4B86', fontFamily: 'Inter, sans-serif' }}
                    >
                      Supporting Work
                    </p>
                  </div>
                  <ul className="space-y-3 pl-1">
                    {supportingWork.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: '#6A4B86' }}
                        />
                        <span
                          className="text-[15px] leading-relaxed"
                          style={{
                            color: '#4A3A66',
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Photo Gallery */}
            {imageMedia.length > 0 && (
              <>
                <SectionDivider />
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="inline-block w-6 h-[2px] rounded-full"
                      style={{ background: '#9CCB9A' }}
                    />
                    <p
                      className="text-xs font-semibold tracking-[0.22em] uppercase"
                      style={{ color: '#6A4B86', fontFamily: 'Inter, sans-serif' }}
                    >
                      Photo Gallery
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {imageMedia.map((item, i) => (
                      <div
                        key={i}
                        data-testid={`gallery-image-${i}`}
                        className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-square"
                        onClick={() => openLightbox(i)}
                        style={{
                          background: '#D2B7F1',
                          border: '1px solid rgba(106, 75, 134, 0.08)',
                        }}
                      >
                        <img
                          src={item.url}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                          style={{
                            background:
                              'linear-gradient(to top, rgba(59,42,82,0.78) 0%, transparent 55%)',
                          }}
                        >
                          <p
                            className="p-3 text-xs font-medium"
                            style={{
                              color: '#F1E9FB',
                              fontFamily: 'Inter, sans-serif',
                            }}
                          >
                            {item.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Videos */}
            {(youtubeMedia.length > 0 || nativeVideoMedia.length > 0) && (
              <>
                <SectionDivider />
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="inline-block w-6 h-[2px] rounded-full"
                      style={{ background: '#9CCB9A' }}
                    />
                    <p
                      className="text-xs font-semibold tracking-[0.22em] uppercase"
                      style={{ color: '#6A4B86', fontFamily: 'Inter, sans-serif' }}
                    >
                      Video
                    </p>
                  </div>
                  <div className="space-y-6">
                    {nativeVideoMedia.map((item, i) => (
                      <div
                        key={`native-${i}`}
                        data-testid={`native-video-${i}`}
                        className="rounded-2xl overflow-hidden"
                        style={{
                          background: '#3B2A52',
                          border: '1px solid rgba(106, 75, 134, 0.15)',
                        }}
                      >
                        <div className="aspect-video">
                          <video
                            src={item.url}
                            controls
                            preload="metadata"
                            className="w-full h-full object-contain"
                            style={{ backgroundColor: '#000' }}
                          />
                        </div>
                        <div className="p-4">
                          <p
                            className="text-sm font-medium"
                            style={{
                              color: '#F1E9FB',
                              fontFamily: 'Inter, sans-serif',
                            }}
                          >
                            {item.title}
                          </p>
                        </div>
                      </div>
                    ))}
                    {youtubeMedia.map((item, i) => (
                      <div
                        key={`yt-${i}`}
                        className="rounded-2xl overflow-hidden"
                        style={{
                          background: '#3B2A52',
                          border: '1px solid rgba(106, 75, 134, 0.15)',
                        }}
                      >
                        <div className="aspect-video">
                          <iframe
                            src={item.url}
                            title={item.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="p-4">
                          <p
                            className="text-sm font-medium"
                            style={{
                              color: '#F1E9FB',
                              fontFamily: 'Inter, sans-serif',
                            }}
                          >
                            {item.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Instagram */}
            {instagramMedia.length > 0 && (
              <>
                <SectionDivider />
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="inline-block w-6 h-[2px] rounded-full"
                      style={{ background: '#9CCB9A' }}
                    />
                    <p
                      className="text-xs font-semibold tracking-[0.22em] uppercase"
                      style={{ color: '#6A4B86', fontFamily: 'Inter, sans-serif' }}
                    >
                      Social Media Content
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {instagramMedia.map((item, i) => (
                      <div
                        key={`ig-${i}`}
                        data-testid={`instagram-reel-${i}`}
                        className="rounded-2xl overflow-hidden"
                        style={{
                          border: '1px solid rgba(106, 75, 134, 0.14)',
                          background: '#FFFFFF',
                        }}
                      >
                        <div style={{ height: '480px' }}>
                          <iframe
                            src={item.url}
                            title={item.title}
                            className="w-full h-full"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency="true"
                            allow="encrypted-media"
                          />
                        </div>
                        {item.link && (
                          <div
                            className="p-3 flex items-center justify-between"
                            style={{ background: '#F1E9FB' }}
                          >
                            <p
                              className="text-xs font-medium"
                              style={{
                                color: '#6A4B86',
                                fontFamily: 'Inter, sans-serif',
                              }}
                            >
                              {item.title}
                            </p>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full"
                              style={{
                                color: '#FFFFFF',
                                background: '#6A4B86',
                                border: '1px solid #6A4B86',
                                fontFamily: 'Inter, sans-serif',
                                transition: 'all 0.2s ease',
                                whiteSpace: 'nowrap',
                              }}
                              onMouseOver={(e) => {
                                e.currentTarget.style.background = '#553A6E';
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.background = '#6A4B86';
                              }}
                            >
                              View on Instagram <ExternalLink size={10} />
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div
              className="rounded-3xl sticky top-24"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(106, 75, 134, 0.10)',
                boxShadow:
                  '0 1px 2px rgba(106, 75, 134, 0.04), 0 24px 48px -28px rgba(106, 75, 134, 0.25)',
              }}
            >
              <div className="p-6">
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{
                    color: '#3B2A52',
                    fontFamily: "'Fraunces', serif",
                  }}
                >
                  Skills Demonstrated
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{
                        background: '#F1E9FB',
                        color: '#6A4B86',
                        border: '1px solid rgba(106, 75, 134, 0.14)',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {project.tools && project.tools.length > 0 && (
                  <>
                    <div
                      className="my-6"
                      style={{ borderTop: '1px solid rgba(106, 75, 134, 0.10)' }}
                    />
                    <h3
                      className="text-lg font-semibold mb-4"
                      style={{
                        color: '#3B2A52',
                        fontFamily: "'Fraunces', serif",
                      }}
                    >
                      Tools Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full"
                          style={{
                            background: 'rgba(156, 203, 154, 0.22)',
                            color: '#3F6446',
                            border: '1px solid rgba(90, 141, 98, 0.25)',
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          <Wrench size={10} /> {tool}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                <div
                  className="my-6"
                  style={{ borderTop: '1px solid rgba(106, 75, 134, 0.10)' }}
                />

                <h3
                  className="text-lg font-semibold mb-3"
                  style={{
                    color: '#3B2A52',
                    fontFamily: "'Fraunces', serif",
                  }}
                >
                  Project Info
                </h3>
                <div className="space-y-3">
                  <div>
                    <span
                      className="text-[10px] uppercase tracking-[0.18em] font-semibold"
                      style={{
                        color: '#9583B0',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      Category
                    </span>
                    <p
                      className="text-sm font-semibold mt-0.5"
                      style={{
                        color: '#3B2A52',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {project.category}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-[10px] uppercase tracking-[0.18em] font-semibold"
                      style={{
                        color: '#9583B0',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      Role
                    </span>
                    <p
                      className="text-sm font-semibold mt-0.5"
                      style={{
                        color: '#3B2A52',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {project.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && imageMedia.length > 0 && (
        <div
          data-testid="lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(59, 42, 82, 0.94)' }}
          onClick={closeLightbox}
        >
          <button
            data-testid="lightbox-close"
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full"
            style={{
              background: 'rgba(241, 233, 251, 0.12)',
              transition: 'background 0.2s ease',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = 'rgba(241, 233, 251, 0.24)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = 'rgba(241, 233, 251, 0.12)')
            }
          >
            <X size={24} color="#F1E9FB" />
          </button>
          <button
            data-testid="lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 p-2 rounded-full"
            style={{ background: 'rgba(241, 233, 251, 0.12)' }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = 'rgba(241, 233, 251, 0.24)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = 'rgba(241, 233, 251, 0.12)')
            }
          >
            <ChevronLeft size={28} color="#F1E9FB" />
          </button>
          <div
            className="max-w-5xl max-h-[85vh] px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageMedia[lightboxIndex].url}
              alt={imageMedia[lightboxIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
              style={{ margin: '0 auto', display: 'block' }}
            />
            <p
              className="text-center mt-4 text-sm"
              style={{
                color: 'rgba(241,233,251,0.85)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {imageMedia[lightboxIndex].title}
              <span style={{ color: 'rgba(241,233,251,0.5)' }}>
                {' '}— {lightboxIndex + 1} / {imageMedia.length}
              </span>
            </p>
          </div>
          <button
            data-testid="lightbox-next"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 p-2 rounded-full"
            style={{ background: 'rgba(241, 233, 251, 0.12)' }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = 'rgba(241, 233, 251, 0.24)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = 'rgba(241, 233, 251, 0.12)')
            }
          >
            <ChevronRight size={28} color="#F1E9FB" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
