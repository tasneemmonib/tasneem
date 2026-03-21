import React, { useEffect, useRef } from 'react';
import {
  Target,
  PenTool,
  Calendar,
  Share2,
  Video,
  Film,
  ImageIcon,
  Palette,
} from 'lucide-react';
import { skills } from '../data/mock';

const iconMap = {
  Target,
  PenTool,
  Calendar,
  Share2,
  Video,
  Film,
  Image: ImageIcon,
  Palette,
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <div>
            <div
              className="aspect-[4/5] rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#F5F5F5' }}
            >
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                alt="Tasneem Monib"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <p
              className="text-sm font-medium tracking-[0.15em] uppercase mb-3"
              style={{ color: '#C8102E', fontFamily: 'Roboto, sans-serif' }}
            >
              About
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ color: '#0B0B0B', fontFamily: 'Poppins, sans-serif' }}
            >
              Building Brands Through
              <br />
              Strategic Storytelling
            </h2>

            <div className="space-y-5 mb-12">
              <p
                className="text-base leading-relaxed"
                style={{ color: '#444', fontFamily: 'Roboto, sans-serif' }}
              >
                I am a marketing graduate from the University of Houston with a
                focus on marketing communications and a minor in journalism. My
                work focuses on how brands connect with audiences through
                content, storytelling, and live experiences.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: '#444', fontFamily: 'Roboto, sans-serif' }}
              >
                Through my academic and professional experience, I have
                developed skills in marketing strategy, content production,
                event marketing, and audience engagement. I have supported
                marketing communications efforts for healthcare organizations,
                helped execute large sporting events, and produced digital media
                for university athletics.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: '#444', fontFamily: 'Roboto, sans-serif' }}
              >
                I am interested in early career marketing roles where I can
                contribute to campaigns, brand storytelling, and audience
                engagement.
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h3
                className="text-lg font-semibold mb-6"
                style={{
                  color: '#0B0B0B',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Core Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {skills.map((skill, i) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center p-4 rounded-xl"
                      style={{
                        backgroundColor: '#F5F5F5',
                        transition: 'box-shadow 0.2s ease',
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.boxShadow =
                          '0 4px 12px rgba(0,0,0,0.08)')
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.boxShadow = 'none')
                      }
                    >
                      {Icon && (
                        <Icon size={20} className="mb-2" color="#C8102E" />
                      )}
                      <span
                        className="text-xs font-medium"
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
