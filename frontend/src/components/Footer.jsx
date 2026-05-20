import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Monogram = ({ size = 44 }) => (
  <div
    aria-hidden="true"
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: '#F1E9FB',
      border: '1.5px solid #D2B7F1',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6A4B86',
      fontFamily: "'Instrument Serif', 'Playfair Display', serif",
      fontSize: size * 0.45,
      letterSpacing: '0.02em',
    }}
  >
    TM
  </div>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#2F2A2E',
        color: '#FBF7F2',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left — monogram + name */}
          <div className="flex items-center gap-4">
            <Monogram size={48} />
            <div>
              <p
                className="text-xl mb-1"
                style={{
                  color: '#FBF7F2',
                  fontFamily: "'Instrument Serif', 'Playfair Display', serif",
                  fontWeight: 400,
                }}
              >
                Tasneem Monib
              </p>
              <p
                className="text-sm"
                style={{
                  color: 'rgba(251, 247, 242, 0.6)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Media · Marketing · Story
              </p>
            </div>
          </div>

          {/* Center socials */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(251, 247, 242, 0.10)',
                border: '1px solid rgba(251, 247, 242, 0.16)',
                transition: 'all 0.2s ease',
              }}
              aria-label="Email"
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#9CCB9A';
                e.currentTarget.style.borderColor = '#9CCB9A';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(251, 247, 242, 0.10)';
                e.currentTarget.style.borderColor = 'rgba(251, 247, 242, 0.16)';
              }}
            >
              <Mail size={16} color="#FBF7F2" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(251, 247, 242, 0.10)',
                border: '1px solid rgba(251, 247, 242, 0.16)',
                transition: 'all 0.2s ease',
              }}
              aria-label="LinkedIn"
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#D2B7F1';
                e.currentTarget.style.borderColor = '#D2B7F1';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(251, 247, 242, 0.10)';
                e.currentTarget.style.borderColor = 'rgba(251, 247, 242, 0.16)';
              }}
            >
              <Linkedin size={16} color="#FBF7F2" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full"
            style={{
              background: '#FBF7F2',
              color: '#2F2A2E',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#9CCB9A';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#FBF7F2';
            }}
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(251, 247, 242, 0.10)' }}
        >
          <p
            className="text-xs"
            style={{
              color: 'rgba(251, 247, 242, 0.5)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            &copy; {new Date().getFullYear()} Tasneem Monib. All rights reserved.
          </p>
          <p
            className="text-xs tracking-[0.22em] uppercase"
            style={{
              color: 'rgba(251, 247, 242, 0.5)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Houston · Texas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
