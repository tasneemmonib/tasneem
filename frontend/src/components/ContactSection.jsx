import React, { useEffect, useRef } from 'react';
import { Mail, Linkedin } from 'lucide-react';
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
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/tasneemmonib',
      href: personalInfo.linkedin,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#FFFFFF' }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 fade-section">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p
            className="text-sm font-medium tracking-[0.15em] uppercase mb-3"
            style={{ color: '#C8102E', fontFamily: 'Roboto, sans-serif' }}
          >
            Contact
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#0B0B0B', fontFamily: 'Poppins, sans-serif' }}
          >
            Let's Connect
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: '#666', fontFamily: 'Roboto, sans-serif' }}
          >
            Interested in working together? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center p-6 rounded-xl group"
                  style={{
                    backgroundColor: '#F5F5F5',
                    transition: 'background-color 0.2s ease, transform 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#EBEBEB';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#F5F5F5';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: 'rgba(200,16,46,0.07)' }}
                  >
                    <Icon size={20} color="#C8102E" />
                  </div>
                  <span
                    className="text-sm font-semibold mb-1"
                    style={{
                      color: '#0B0B0B',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      color: '#999',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    {link.value}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
