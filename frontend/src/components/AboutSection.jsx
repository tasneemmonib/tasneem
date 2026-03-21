import React, { useEffect, useRef } from 'react';
import {
  MessageSquare,
  Target,
  Calendar,
  PenTool,
  Share2,
  Video,
  Search,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
} from 'lucide-react';
import {
  personalInfo,
  capabilities,
  experience,
  education,
  honors,
} from '../data/mock';

const iconMap = {
  MessageSquare,
  Target,
  Calendar,
  PenTool,
  Share2,
  Video,
  Search,
  FileText,
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
    <section id="about" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="py-20 lg:py-28" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 fade-section">
          <div className="grid lg:grid-cols-5 gap-14 lg:gap-20">
            {/* Left Column — About + Core Capabilities */}
            <div className="lg:col-span-3">
              <p
                className="text-sm font-medium tracking-[0.15em] uppercase mb-3"
                style={{
                  color: '#C8102E',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                About
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-10"
                style={{
                  color: '#0B0B0B',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Strategy Meets Execution
              </h2>

              <div className="space-y-5 mb-14">
                {personalInfo.aboutBio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base leading-[1.75]"
                    style={{
                      color: '#444',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core Capabilities — inside left column */}
              <div
                className="border-t pt-10"
                style={{ borderColor: '#F0F0F0' }}
              >
                <p
                  className="text-xs font-medium tracking-[0.15em] uppercase mb-6"
                  style={{ color: '#999', fontFamily: 'Roboto, sans-serif' }}
                >
                  Core Capabilities
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {capabilities.map((cap, i) => {
                    const Icon = iconMap[cap.icon];
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-lg"
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
                          {cap.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column — Professional Background + Education + Honors */}
            <div className="lg:col-span-2">
              <div
                className="p-6 lg:p-8 rounded-xl"
                style={{ backgroundColor: '#FAFAFA' }}
              >
                {/* Professional Background */}
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

                <div className="space-y-5 mb-8">
                  {experience.map((exp, i) => (
                    <div
                      key={i}
                      className={i < experience.length - 1 ? 'pb-5' : ''}
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

                {/* Divider */}
                <div
                  className="mb-6"
                  style={{ borderTop: '1px solid #E5E5E5' }}
                />

                {/* Education */}
                <div className="flex items-center gap-2.5 mb-4">
                  <GraduationCap size={18} color="#C8102E" />
                  <h3
                    className="text-base font-semibold"
                    style={{
                      color: '#0B0B0B',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    Education
                  </h3>
                </div>

                <div className="mb-4">
                  <p
                    className="text-sm font-semibold"
                    style={{
                      color: '#0B0B0B',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    {education.school}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{
                      color: '#666',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    {education.degree} · GPA {education.gpa}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{
                      color: '#999',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    {education.dates}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-5">
                  <Globe size={14} color="#999" />
                  <p
                    className="text-xs"
                    style={{
                      color: '#999',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    University of Granada, Spain — Study Abroad Program (Spring 2024)
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="mb-5"
                  style={{ borderTop: '1px solid #E5E5E5' }}
                />

                {/* Honors */}
                <div className="flex items-center gap-2.5 mb-3">
                  <Award size={18} color="#C8102E" />
                  <h3
                    className="text-base font-semibold"
                    style={{
                      color: '#0B0B0B',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    Honors
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {honors.map((honor, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{
                        backgroundColor: '#F0F0F0',
                        color: '#555',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      {honor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
