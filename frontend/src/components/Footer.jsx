import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#0B0B0B' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left — TM monogram + name */}
          <div className="flex items-center gap-4">
            <svg
              width="44"
              height="44"
              viewBox="0 0 64 64"
              aria-hidden="true"
              role="img"
              style={{ flexShrink: 0 }}
            >
              <rect width="64" height="64" rx="10" fill="#FFFFFF" />
              <rect x="0" y="54" width="64" height="10" fill="#C8102E" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="Poppins, Helvetica, Arial, sans-serif"
                fontSize="28"
                fontWeight="700"
                fill="#0B0B0B"
              >
                TM
              </text>
            </svg>
            <div>
              <p
                className="text-xl font-semibold mb-1"
                style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}
              >
                Tasneem Monib
              </p>
              <p
                className="text-sm"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                Marketing Communications | Brand & Product Marketing
              </p>
            </div>
          </div>

          {/* Center links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                transition: 'background-color 0.2s ease',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  'rgba(255,255,255,0.15)')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  'rgba(255,255,255,0.08)')
              }
            >
              <Mail size={16} color="#FFFFFF" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                transition: 'background-color 0.2s ease',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  'rgba(255,255,255,0.15)')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  'rgba(255,255,255,0.08)')
              }
            >
              <Linkedin size={16} color="#FFFFFF" />
            </a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              transition: 'background-color 0.2s ease',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                'rgba(255,255,255,0.15)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                'rgba(255,255,255,0.08)')
            }
          >
            <ArrowUp size={16} color="#FFFFFF" />
          </button>
        </div>

        <div
          className="mt-10 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p
            className="text-xs text-center"
            style={{
              color: 'rgba(255,255,255,0.35)',
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            &copy; {new Date().getFullYear()} Tasneem Monib. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
