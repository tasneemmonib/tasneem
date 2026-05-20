import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { mediaGallery } from '../data/mock';

// Renders just the gallery grid + lightbox — no outer section wrapper, so it
// can be embedded inside the Media Production section.
const MediaGallery = ({ heading = true }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i === 0 ? mediaGallery.length - 1 : i - 1));
  const next = () =>
    setLightboxIndex((i) => (i === mediaGallery.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <div id="gallery">
      {heading && (
        <div className="mb-8 lg:mb-10">
          <p
            className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-3"
            style={{ color: '#6A4B86', fontFamily: 'Inter, sans-serif' }}
          >
            Media Gallery
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
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
              Media Gallery.
            </h3>
            <p
              className="text-sm md:text-base max-w-md"
              style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
            >
              A curated edit from sports coverage, editorial portraits, and
              documentary frames.
            </p>
          </div>
        </div>
      )}

      <div
        className="grid gap-3 md:gap-4"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gridAutoRows: '180px',
          gridAutoFlow: 'dense',
        }}
      >
        {mediaGallery.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setLightboxIndex(i)}
            className="group relative overflow-hidden rounded-xl"
            style={{
              gridColumn: item.feature ? 'span 2' : 'span 1',
              gridRow: item.feature ? 'span 2' : 'span 1',
              background: '#F1E9FB',
              border: '1px solid rgba(47, 42, 46, 0.08)',
              cursor: 'zoom-in',
            }}
            aria-label={`Open photo: ${item.caption}`}
          >
            <img
              src={item.src}
              alt={item.caption}
              loading="lazy"
              className="w-full h-full object-cover"
              style={{
                transition:
                  'transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1), filter 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.04)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 px-3 py-2.5 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  'linear-gradient(to top, rgba(47,42,46,0.78), rgba(47,42,46,0))',
                transition: 'opacity 0.25s ease',
              }}
            >
              <p
                className="text-[11px] tracking-[0.16em] uppercase font-semibold"
                style={{
                  color: '#FBF7F2',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {item.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background: 'rgba(20, 16, 22, 0.92)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={close}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(251, 247, 242, 0.12)',
              color: '#FBF7F2',
            }}
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <button
            className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(251, 247, 242, 0.12)',
              color: '#FBF7F2',
            }}
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(251, 247, 242, 0.12)',
              color: '#FBF7F2',
            }}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>
          <div
            className="max-w-[92vw] max-h-[88vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={mediaGallery[lightboxIndex].src}
              alt={mediaGallery[lightboxIndex].caption}
              style={{
                maxWidth: '92vw',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: 8,
                boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6)',
              }}
            />
            <p
              className="mt-4 text-xs tracking-[0.22em] uppercase"
              style={{ color: 'rgba(251, 247, 242, 0.8)', fontFamily: 'Inter, sans-serif' }}
            >
              {mediaGallery[lightboxIndex].caption} · {lightboxIndex + 1}/
              {mediaGallery.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
