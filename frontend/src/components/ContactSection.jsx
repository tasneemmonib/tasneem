import React, { useEffect, useRef } from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { personalInfo } from '../data/mock';

const ContactSection = () => {
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

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      tone: 'ink',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/tasneemmonib',
      href: personalInfo.linkedin,
      tone: 'sage',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: '#FBF7F2' }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 fade-section relative">
        <div className="max-w-3xl mx-auto">
          <div
            className="relative rounded-[24px] p-10 md:p-14 text-center"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(47, 42, 46, 0.10)',
              boxShadow:
                '0 1px 2px rgba(47, 42, 46, 0.04), 0 36px 60px -32px rgba(47, 42, 46, 0.22)',
            }}
          >
            <p
              className="text-xs font-semibold tracking-[0.32em] uppercase mb-5"
              style={{ color: '#5A8D62', fontFamily: 'Inter, sans-serif' }}
            >
              Section 06
            </p>
            <h2
              className="mb-5"
              style={{
                color: '#2F2A2E',
                fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif",
                fontWeight: 400,
                letterSpacing: '-0.015em',
                lineHeight: 1.02,
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              }}
            >
              Contact.
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: '#5A4F58', fontFamily: 'Inter, sans-serif' }}
            >
              Open to roles in media production, creative producing, marketing
              communications, brand campaigns, and sports/culture
              storytelling. I'd love to hear from you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                style={{
                  background: '#F4ECFB',
                  color: '#6A4B86',
                  border: '1px solid rgba(106, 75, 134, 0.18)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                <MapPin size={12} /> Houston, TX
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(156, 203, 154, 0.22)',
                  color: '#3F6446',
                  border: '1px solid rgba(90, 141, 98, 0.25)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Open to opportunities
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                const isInk = link.tone === 'ink';
                const baseColor = isInk ? '#2F2A2E' : '#5A8D62';
                const hoverColor = isInk ? '#1F1B1F' : '#4D7B54';
                return (
                  <a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-2xl text-left"
                    style={{
                      background: baseColor,
                      color: '#FBF7F2',
                      transition:
                        'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                      boxShadow: isInk
                        ? '0 12px 28px -16px rgba(47,42,46,0.45)'
                        : '0 12px 28px -16px rgba(90,141,98,0.5)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.backgroundColor = hoverColor;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.backgroundColor = baseColor;
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.18)' }}
                    >
                      <Icon size={18} color="#FBF7F2" />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-[11px] font-semibold tracking-[0.18em] uppercase opacity-80"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {link.label}
                      </p>
                      <p
                        className="text-sm font-semibold truncate"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {link.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
