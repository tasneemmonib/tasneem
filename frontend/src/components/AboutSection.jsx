import React, { useEffect, useRef } from 'react';
import { Target, PenTool, Calendar, Share2, Video } from 'lucide-react';
import { personalInfo, skills } from '../data/mock';

const iconMap = {
  Target,
  PenTool,
  Calendar,
  Share2,
  Video,
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
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#FFFFFF' }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 fade-section">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p
            className="text-sm font-medium tracking-[0.15em] uppercase mb-3"
            style={{ color: '#C8102E', fontFamily: 'Roboto, sans-serif' }}
          >
            About
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-10"
            style={{ color: '#0B0B0B', fontFamily: 'Poppins, sans-serif' }}
          >
            Building Brands Through
            <br />
            Strategy & Creative Execution
          </h2>

          <div className="space-y-6">
            {personalInfo.aboutBio.map((paragraph, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed"
                style={{ color: '#444', fontFamily: 'Roboto, sans-serif' }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Skills Bar */}
        <div
          className="border-t pt-12"
          style={{ borderColor: '#F0F0F0' }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, i) => {
              const Icon = iconMap[skill.icon];
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl group"
                  style={{
                    backgroundColor: '#FAFAFA',
                    transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#F5F5F5';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#FAFAFA';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(200,16,46,0.06)' }}
                  >
                    {Icon && <Icon size={18} color="#C8102E" />}
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: '#0B0B0B',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
