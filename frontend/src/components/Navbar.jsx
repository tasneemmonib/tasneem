import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { personalInfo } from '../data/mock';

const Monogram = ({ size = 36 }) => (
  <span
    aria-hidden="true"
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: '#F1E9FB',
      color: '#6A4B86',
      border: '1.5px solid rgba(106, 75, 134, 0.32)',
      boxShadow: '0 10px 24px -16px rgba(106, 75, 134, 0.55)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Instrument Serif', 'Playfair Display', serif",
      fontSize: size * 0.42,
      letterSpacing: '0.02em',
      flexShrink: 0,
    }}
  >
    TM
  </span>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Media Production', href: '#work' },
    { label: 'Marketing & Research', href: '#marketing' },
    { label: 'Experience', href: '#experience' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isProjectPage = location.pathname.startsWith('/project/');
  const elevated = isScrolled || isProjectPage;

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: elevated
            ? 'rgba(251, 247, 242, 0.94)'
            : 'rgba(251, 247, 242, 0.65)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: elevated
            ? '1px solid rgba(47, 42, 46, 0.08)'
            : '1px solid transparent',
          boxShadow: elevated
            ? '0 1px 24px -16px rgba(47, 42, 46, 0.25)'
            : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left: monogram + name */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleLogoClick}
                aria-label="Home"
                className="flex items-center gap-3"
                style={{ transition: 'transform 0.2s ease' }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = 'translateY(-1px)')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = 'translateY(0)')
                }
              >
                <Monogram size={36} />
                <span
                  className="text-base lg:text-lg tracking-tight"
                  style={{
                    color: '#2F2A2E',
                    fontFamily:
                      "'Instrument Serif', 'Playfair Display', Georgia, serif",
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                  }}
                >
                  Tasneem Monib
                </span>
              </button>
            </div>

            {/* Right: Nav links + Resume */}
            <div className="hidden md:flex items-center gap-6 lg:gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium relative group"
                  style={{
                    color: '#2F2A2E',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {link.label}
                  <span
                    className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: '#9CCB9A', borderRadius: '2px' }}
                  />
                </button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold"
                style={{
                  background: '#2F2A2E',
                  color: '#FBF7F2',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.04em',
                  transition: 'background-color 0.2s ease, transform 0.2s ease',
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
                <Download size={12} />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} color="#2F2A2E" />
              ) : (
                <Menu size={24} color="#2F2A2E" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{
            backgroundColor: '#FBF7F2',
            borderTop: '1px solid rgba(47, 42, 46, 0.08)',
          }}
        >
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-sm font-medium py-3"
                style={{
                  color: '#2F2A2E',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold py-3"
              style={{
                color: '#2F2A2E',
                fontFamily: 'Inter, sans-serif',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download size={14} /> Download Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
