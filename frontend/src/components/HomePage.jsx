import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/mock';

const HomePage = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const firstName = personalInfo.name.split(' ')[0];
  const lastName = personalInfo.name.split(' ').slice(1).join(' ');

  return (
    <section
      className="relative overflow-hidden pt-32 lg:pt-40 pb-24 lg:pb-32"
      style={{ color: '#2F2A2E', background: '#FBF7F2' }}
    >
      {/* Soft lavender wash — kept, no gradient noise */}
      <div
        aria-hidden="true"
        className="absolute top-32 right-[-12%] w-[560px] h-[560px] rounded-full opacity-50"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(210,183,241,0.55), rgba(210,183,241,0) 70%)',
          filter: 'blur(10px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-12%] left-[-8%] w-[460px] h-[460px] rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(156,203,154,0.42), rgba(156,203,154,0) 70%)',
          filter: 'blur(10px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        {/* Editorial top strip */}
        <div className="flex items-center justify-between mb-14 lg:mb-20">
          <p
            className="text-[10px] tracking-[0.36em] uppercase"
            style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
          >
            Portfolio · Spring 2026
          </p>
          <p
            className="hidden sm:block text-[10px] tracking-[0.36em] uppercase"
            style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
          >
            Media · Marketing · Story
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Editorial type */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p
              className="mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#5A8D62',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
              }}
            >
              Tasneem Monib — Houston, TX
            </p>

            <h1
              className="mb-6"
              style={{
                color: '#2F2A2E',
                fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: '-0.015em',
                fontSize: 'clamp(3rem, 8.5vw, 7rem)',
              }}
            >
              <span className="block">Multimedia Storyteller</span>
              <span className="block">
                &amp;{' '}
                <span style={{ fontStyle: 'italic', color: '#6A4B86' }}>
                  Marketing Creative
                </span>
              </span>
            </h1>

            <p
              className="mb-6 max-w-xl"
              style={{
                color: '#2F2A2E',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              Documentary · Sports & Culture · Brand &amp; Campaigns
            </p>

            <p
              className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
              style={{
                color: '#5A4F58',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {personalInfo.subtitle}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('#work')}
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: '#2F2A2E',
                  color: '#FBF7F2',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.04em',
                  boxShadow: '0 10px 22px -10px rgba(47,42,46,0.45)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.backgroundColor = '#5A8D62';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = '#2F2A2E';
                }}
              >
                See Media Production <ArrowRight size={16} />
              </button>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: 'transparent',
                  color: '#2F2A2E',
                  border: '1.5px solid #2F2A2E',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.04em',
                  transition: 'transform 0.2s ease, background-color 0.2s ease, color 0.2s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.backgroundColor = '#2F2A2E';
                  e.currentTarget.style.color = '#FBF7F2';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#2F2A2E';
                }}
              >
                <Download size={16} /> Resume
              </a>
            </div>

            {/* Pillars */}
            <div className="mt-12 flex flex-wrap items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(156, 203, 154, 0.22)',
                  color: '#3F6446',
                  border: '1px solid rgba(90, 141, 98, 0.35)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                Open to Roles
              </span>
              {[
                { label: 'Documentary & Video', tone: 'sage' },
                { label: 'Sports + Culture Storytelling', tone: 'lavender' },
                { label: 'Brand Campaigns', tone: 'default' },
                { label: 'Social & Content', tone: 'lavender' },
              ].map((p) => (
                <span
                  key={p.label}
                  className={
                    p.tone === 'sage'
                      ? 'tm-chip tm-chip-sage'
                      : p.tone === 'lavender'
                      ? 'tm-chip tm-chip-lavender'
                      : 'tm-chip'
                  }
                >
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Editorial portrait card */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative w-[280px] sm:w-[340px] lg:w-[420px] mx-auto lg:ml-auto">
              {/* Lavender backplate offset */}
              <div
                aria-hidden="true"
                className="absolute -top-6 -right-6 w-full h-full rounded-[28px]"
                style={{
                  background: '#F1E9FB',
                  border: '1px solid rgba(106, 75, 134, 0.18)',
                }}
              />
              {/* Sage backplate offset */}
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-[20px]"
                style={{
                  background: 'rgba(156, 203, 154, 0.55)',
                }}
              />
              {/* Portrait */}
              <div
                className="relative rounded-[24px] overflow-hidden"
                style={{
                  aspectRatio: '4 / 5',
                  background: '#F4ECFB',
                  boxShadow:
                    '0 28px 60px -28px rgba(47,42,46,0.4), 0 1px 2px rgba(47,42,46,0.06)',
                }}
              >
                <img
                  src={personalInfo.profilePhoto}
                  alt="Tasneem Monib"
                  className="w-full h-full block"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Caption */}
              <div className="mt-6 flex items-center justify-between">
                <p
                  className="text-[11px] tracking-[0.26em] uppercase"
                  style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
                >
                  Houston · Texas
                </p>
                <p
                  className="text-[11px] tracking-[0.26em] uppercase"
                  style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
                >
                  Issue №01
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
