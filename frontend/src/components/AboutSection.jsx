import React, { useEffect, useRef } from 'react';
import {
  Target,
  PenTool,
  Calendar,
  Share2,
  Video,
  Briefcase,
} from 'lucide-react';
import { personalInfo, skills, experience } from '../data/mock';

const iconMap = { Target, PenTool, Calendar, Share2, Video };

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
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left Column — About + Skills */}
          <div className="lg:col-span-3">
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
              Strategy Meets Execution
            </h2>

            <div className="space-y-5 mb-14">
              {personalInfo.aboutBio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed"
                  style={{ color: '#444', fontFamily: 'Roboto, sans-serif' }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Skills Bar */}
            <div className="border-t pt-10" style={{ borderColor: '#F0F0F0' }}>
              <h3
                className="text-xs font-medium tracking-[0.15em] uppercase mb-5"
                style={{ color: '#999', fontFamily: 'Roboto, sans-serif' }}
              >
                Core Capabilities
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg"
                      style={{
                        backgroundColor: '#FAFAFA',
                        border: '1px solid #F0F0F0',
                        transition:
                          'background-color 0.2s ease, box-shadow 0.2s ease',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#F5F5F5';
                        e.currentTarget.style.boxShadow =
                          '0 2px 8px rgba(0,0,0,0.04)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#FAFAFA';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {Icon && <Icon size={16} color="#C8102E" />}
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

          {/* Right Column — Professional Background */}
          <div className="lg:col-span-2">
            <div
              className="lg:sticky lg:top-28 p-6 lg:p-8 rounded-xl"
              style={{ backgroundColor: '#FAFAFA' }}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <Briefcase size={18} color="#C8102E" />
                <h3
                  className="text-lg font-semibold"
                  style={{
                    color: '#0B0B0B',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Professional Background
                </h3>
              </div>

              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className={i < experience.length - 1 ? 'pb-6' : ''}
                    style={
                      i < experience.length - 1
                        ? { borderBottom: '1px solid #EBEBEB' }
                        : {}
                    }
                  >
                    <p
                      className="text-sm font-semibold mb-0.5"
                      style={{
                        color: '#0B0B0B',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      {exp.company}
                    </p>
                    <p
                      className="text-xs font-medium mb-2"
                      style={{
                        color: '#C8102E',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      {exp.role}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: '#666',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      {exp.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
