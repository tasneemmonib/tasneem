import React, { useEffect, useRef } from 'react';
import { Download, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/mock';

const ResumeSection = () => {
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
      id="resume"
      className="py-20 lg:py-24"
      style={{ background: '#FBF7F2' }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 fade-section">
        <div
          className="relative rounded-[24px] overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, #2F2A2E 0%, #3A3138 60%, #4A3D52 100%)',
            color: '#FBF7F2',
          }}
        >
          {/* Soft lavender + sage glows */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full opacity-30"
            style={{
              background:
                'radial-gradient(circle, rgba(210,183,241,0.6), rgba(210,183,241,0) 70%)',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-16 w-[360px] h-[360px] rounded-full opacity-25"
            style={{
              background:
                'radial-gradient(circle, rgba(156,203,154,0.55), rgba(156,203,154,0) 70%)',
            }}
          />

          <div className="relative grid lg:grid-cols-12 gap-8 p-10 md:p-12 lg:p-14 items-center">
            <div className="lg:col-span-8">
              <p
                className="text-[11px] font-semibold tracking-[0.32em] uppercase mb-4"
                style={{
                  color: '#9CCB9A',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Section 05
              </p>
              <h2
                className="mb-4"
                style={{
                  color: '#FBF7F2',
                  fontFamily:
                    "'Instrument Serif', 'Playfair Display', Georgia, serif",
                  fontWeight: 400,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.05,
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                }}
              >
                Resume.
              </h2>
              <p
                className="text-base md:text-lg max-w-2xl"
                style={{
                  color: 'rgba(251, 247, 242, 0.78)',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 1.7,
                }}
              >
                Full media production and marketing experience, education,
                tools, and honors on one page.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-sm font-semibold whitespace-nowrap"
                  style={{
                    backgroundColor: '#9CCB9A',
                    color: '#1F3A23',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.04em',
                    boxShadow:
                      '0 12px 32px -14px rgba(156, 203, 154, 0.6)',
                    transition:
                      'transform 0.2s ease, background-color 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.backgroundColor = '#B3D9B1';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.backgroundColor = '#9CCB9A';
                  }}
                >
                  <Download size={16} /> Download Resume
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-sm font-semibold whitespace-nowrap"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#FBF7F2',
                    border: '1.5px solid rgba(251, 247, 242, 0.45)',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.04em',
                  }}
                >
                  <FileText size={16} /> View PDF <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
