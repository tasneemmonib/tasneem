import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const HomePage = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: '#0B0B0B' }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Decorative accent line */}
      <div
        className="absolute top-0 left-0 w-1 h-full"
        style={{
          background: 'linear-gradient(to bottom, #C8102E, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-6"
            style={{
              color: '#FFFFFF',
              fontFamily: 'Poppins, sans-serif',
              lineHeight: '1.05',
            }}
          >
            {personalInfo.name}
          </h1>
          <p
            className="text-base md:text-lg font-medium mb-5"
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'Roboto, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            {personalInfo.title}
          </p>
          <p
            className="text-base md:text-lg leading-relaxed mb-12 max-w-2xl"
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            {personalInfo.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => scrollTo('#work')}
              className="h-12 px-8 text-sm font-medium rounded-lg border-0"
              style={{
                backgroundColor: '#C8102E',
                color: '#FFFFFF',
                fontFamily: 'Roboto, sans-serif',
                transition: 'transform 0.2s ease',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = 'scale(1.02)')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            >
              View Work <ArrowRight className="ml-2" size={16} />
            </Button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="h-12 px-8 text-sm font-medium rounded-lg border-white/20 hover:bg-white/10"
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Roboto, sans-serif',
                  transition: 'transform 0.2s ease',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.02)')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                <Download className="mr-2" size={16} /> Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
