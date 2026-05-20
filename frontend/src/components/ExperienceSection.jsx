import React, { useEffect, useRef } from 'react';
import { Film, Megaphone } from 'lucide-react';
import { experience } from '../data/mock';

const trackMeta = {
  'Media Production': {
    label: 'Media Production',
    icon: Film,
    accent: '#5A8D62',
    accentBg: 'rgba(156, 203, 154, 0.22)',
    accentBorder: 'rgba(90, 141, 98, 0.35)',
  },
  Marketing: {
    label: 'Marketing & Comms',
    icon: Megaphone,
    accent: '#6A4B86',
    accentBg: '#F1E9FB',
    accentBorder: 'rgba(106, 75, 134, 0.25)',
  },
};

const ExperienceSection = () => {
  const sectionRef = useRef(null);

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

  const tracks = ['Media Production', 'Marketing'];

  return (
    <section
      id="experience"
      className="py-24 lg:py-32"
      style={{ background: '#F1E9FB' }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 fade-section">
        <div className="mb-14 lg:mb-16">
          <p
            className="text-xs font-semibold tracking-[0.32em] uppercase mb-5"
            style={{ color: '#5A8D62', fontFamily: 'Inter, sans-serif' }}
          >
            Section 04
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              style={{
                color: '#2F2A2E',
                fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif",
                fontWeight: 400,
                letterSpacing: '-0.015em',
                lineHeight: 1.02,
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              }}
            >
              Experience.
            </h2>
            <p
              className="text-sm md:text-base max-w-md"
              style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
            >
              Media production and marketing communications — built in parallel
              across athletics, healthcare, and cultural institutions.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {tracks.map((track) => {
            const meta = trackMeta[track];
            const Icon = meta.icon;
            const items = experience.filter((e) => e.track === track);
            return (
              <div
                key={track}
                className="rounded-3xl p-6 md:p-8 lg:p-10"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(47, 42, 46, 0.10)',
                  boxShadow:
                    '0 1px 2px rgba(47, 42, 46, 0.04), 0 24px 60px -32px rgba(47, 42, 46, 0.22)',
                }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{
                      background: meta.accentBg,
                      border: `1px solid ${meta.accentBorder}`,
                    }}
                  >
                    <Icon size={18} color={meta.accent} />
                  </div>
                  <h3
                    style={{
                      color: '#2F2A2E',
                      fontFamily:
                        "'Instrument Serif', 'Playfair Display', serif",
                      fontSize: '1.5rem',
                      fontWeight: 400,
                    }}
                  >
                    {meta.label}
                  </h3>
                </div>

                <ol className="space-y-6">
                  {items.map((exp, i) => (
                    <li
                      key={`${exp.company}-${i}`}
                      className={i < items.length - 1 ? 'pb-6' : ''}
                      style={
                        i < items.length - 1
                          ? {
                              borderBottom:
                                '1px dashed rgba(47, 42, 46, 0.16)',
                            }
                          : {}
                      }
                    >
                      <div className="flex items-baseline justify-between gap-4 mb-1.5">
                        <p
                          className="text-base font-semibold"
                          style={{
                            color: '#2F2A2E',
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          {exp.role}
                        </p>
                        {exp.period && (
                          <p
                            className="text-[11px] tracking-[0.16em] uppercase whitespace-nowrap"
                            style={{
                              color: '#8A7F88',
                              fontFamily: 'Inter, sans-serif',
                            }}
                          >
                            {exp.period}
                          </p>
                        )}
                      </div>
                      <p
                        className="text-sm font-medium mb-2.5"
                        style={{
                          color: meta.accent,
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {exp.company}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: '#5A4F58',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {exp.summary}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
