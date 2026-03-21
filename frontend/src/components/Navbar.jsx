import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { personalInfo } from '../data/mock';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isProjectPage = location.pathname.startsWith('/project/');
  const showDarkText = isScrolled || isProjectPage;

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showDarkText
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left: Profile photo + Name */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowPhotoModal(true)}
                className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"
                style={{
                  boxShadow: showDarkText
                    ? '0 0 0 2px rgba(11,11,11,0.1)'
                    : '0 0 0 2px rgba(255,255,255,0.25)',
                  transition: 'transform 0.2s ease',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.05)')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                <img
                  src={personalInfo.profilePhoto}
                  alt="Tasneem Monib"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={handleLogoClick}
                className="text-lg font-semibold tracking-tight transition-colors duration-200"
                style={{
                  color: showDarkText ? '#0B0B0B' : '#FFFFFF',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Tasneem Monib
              </button>
            </div>

            {/* Right: Nav links + Resume download */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                  style={{
                    color: showDarkText ? '#0B0B0B' : '#FFFFFF',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium"
                style={{
                  backgroundColor: showDarkText
                    ? '#0B0B0B'
                    : 'rgba(255,255,255,0.15)',
                  color: showDarkText
                    ? '#FFFFFF'
                    : 'rgba(255,255,255,0.9)',
                  fontFamily: 'Roboto, sans-serif',
                  transition: 'background-color 0.2s ease, transform 0.2s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  if (showDarkText) {
                    e.currentTarget.style.backgroundColor = '#222';
                  } else {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)';
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  if (showDarkText) {
                    e.currentTarget.style.backgroundColor = '#0B0B0B';
                  } else {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                  }
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
            >
              {isMobileMenuOpen ? (
                <X size={24} color={showDarkText ? '#0B0B0B' : '#FFFFFF'} />
              ) : (
                <Menu size={24} color={showDarkText ? '#0B0B0B' : '#FFFFFF'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{
            backgroundColor: showDarkText
              ? '#FFFFFF'
              : 'rgba(11,11,11,0.95)',
          }}
        >
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-sm font-medium py-3 transition-colors duration-200"
                style={{
                  color: showDarkText ? '#0B0B0B' : '#FFFFFF',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium py-3"
              style={{
                color: '#C8102E',
                fontFamily: 'Roboto, sans-serif',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download size={14} /> Download Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Profile Photo Modal */}
      {showPhotoModal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-6"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
          onClick={() => setShowPhotoModal(false)}
        >
          <div
            className="relative max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPhotoModal(false)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-medium"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Close
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={personalInfo.profilePhoto}
                alt="Tasneem Monib"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-4 text-center">
              <p
                className="text-lg font-semibold"
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Tasneem Monib
              </p>
              <p
                className="text-sm"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                Marketing Communications
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
