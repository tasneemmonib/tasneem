import React, { useEffect, useRef } from 'react';
import {
  MessageSquare,
  Target,
  Calendar,
  PenTool,
  Video,
  Film,
  Trophy,
  Image as ImageIcon,
  GraduationCap,
  Award,
  Globe,
} from 'lucide-react';
import {
  personalInfo,
  capabilities,
  education,
  honors,
} from '../data/mock';

const iconMap = {
  MessageSquare,
  Target,
  Calendar,
  PenTool,
  Video,
  Film,
  Trophy,
  Image: ImageIcon,
};

const AboutSection = () => {
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

  return (
    <section
      id="about"
      style={{
        background: '#FBF7F2',
      }}
    >
      <div className="py-24 lg:py-32" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 fade-section">
          <div className="grid lg:grid-cols-5 gap-14 lg:gap-20">
            {/* Left Column — About + Core Capabilities */}
            <div className="lg:col-span-3">
              <p
                className="text-xs font-semibold tracking-[0.32em] uppercase mb-5"
                style={{ color: '#5A8D62', fontFamily: 'Inter, sans-serif' }}
              >
                Section 01
              </p>
              <h2
                className="mb-12"
                style={{
                  color: '#2F2A2E',
                  fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif",
                  fontWeight: 400,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.02,
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                }}
              >
                About.
              </h2>

              <div className="space-y-6 mb-14">
                {personalInfo.aboutBio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[15px] md:text-base leading-[1.85]"
                    style={{
                      color: '#3F3A3E',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core Capabilities */}
              <div className="pt-2">
                <p
                  className="text-xs font-semibold tracking-[0.32em] uppercase mb-6"
                  style={{ color: '#6A4B86', fontFamily: 'Inter, sans-serif' }}
                >
                  Capabilities
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {capabilities.map((cap, i) => {
                    const Icon = iconMap[cap.icon];
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid rgba(47, 42, 46, 0.10)',
                          transition:
                            'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.borderColor = '#9CCB9A';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                          e.currentTarget.style.boxShadow =
                            '0 8px 20px -12px rgba(47,42,46,0.18)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.borderColor =
                            'rgba(47, 42, 46, 0.10)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: '#F4ECFB' }}
                        >
                          {Icon && <Icon size={15} color="#6A4B86" />}
                        </div>
                        <span
                          className="text-sm font-medium"
                          style={{
                            color: '#2F2A2E',
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          {cap.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column — Education + Honors */}
            <div className="lg:col-span-2">
              <div
                className="p-6 lg:p-8 rounded-3xl"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(47, 42, 46, 0.10)',
                  boxShadow:
                    '0 1px 2px rgba(47, 42, 46, 0.04), 0 24px 48px -28px rgba(47, 42, 46, 0.22)',
                }}
              >
                {/* Education */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(156, 203, 154, 0.25)' }}
                  >
                    <GraduationCap size={16} color="#5A8D62" />
                  </div>
                  <h3
                    className="text-lg font-semibold"
                    style={{
                      color: '#2F2A2E',
                      fontFamily: "'Instrument Serif', 'Playfair Display', serif",
                    }}
                  >
                    Education
                  </h3>
                </div>

                <div className="mb-6">
                  <p
                    className="text-sm font-semibold"
                    style={{
                      color: '#2F2A2E',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {education.school}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{
                      color: '#5A4F58',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {education.degree} · GPA {education.gpa}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{
                      color: '#8A7F88',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {education.dates}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <Globe size={14} color="#5A8D62" />
                  <p
                    className="text-xs"
                    style={{
                      color: '#5A4F58',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    University of Granada, Spain — Study Abroad (Spring 2024)
                  </p>
                </div>

                <div
                  className="mb-6"
                  style={{ borderTop: '1px solid rgba(47, 42, 46, 0.10)' }}
                />

                {/* Honors */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(210, 183, 241, 0.45)' }}
                  >
                    <Award size={16} color="#6A4B86" />
                  </div>
                  <h3
                    className="text-base font-semibold"
                    style={{
                      color: '#2F2A2E',
                      fontFamily: "'Instrument Serif', serif",
                    }}
                  >
                    Honors
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {honors.map((honor, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{
                        background: '#F4ECFB',
                        color: '#6A4B86',
                        border: '1px solid rgba(106, 75, 134, 0.18)',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {honor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
