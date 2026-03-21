import React, { useEffect, useRef } from 'react';
import {
  Download,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { personalInfo } from '../data/mock';

const ResumeSection = () => {
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
      id="resume"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#F5F5F5' }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 fade-section">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p
            className="text-sm font-medium tracking-[0.15em] uppercase mb-3"
            style={{ color: '#C8102E', fontFamily: 'Roboto, sans-serif' }}
          >
            Resume
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#0B0B0B', fontFamily: 'Poppins, sans-serif' }}
          >
            Professional Background
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: '#666', fontFamily: 'Roboto, sans-serif' }}
          >
            {personalInfo.resumeSummary}
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-0 shadow-sm rounded-xl overflow-hidden">
          <CardContent className="p-8 lg:p-10">
            {/* Experience */}
            <div className="flex items-start gap-4 mb-8">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(200,16,46,0.07)' }}
              >
                <Briefcase size={18} color="#C8102E" />
              </div>
              <div className="flex-1">
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{
                    color: '#0B0B0B',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Experience
                </h3>
                <div className="space-y-5">
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        color: '#0B0B0B',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      University of Houston Athletics
                    </p>
                    <p
                      className="text-xs font-medium mt-0.5"
                      style={{
                        color: '#C8102E',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      Marketing and Gameday Operations Lead, Baseball
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{
                        color: '#999',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      Jan 2025 – Present · Gameday coordination, on-field promotions, fan engagement
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        color: '#0B0B0B',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      Springtime Pediatrics
                    </p>
                    <p
                      className="text-xs font-medium mt-0.5"
                      style={{
                        color: '#C8102E',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      Marketing Communications Coordinator
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{
                        color: '#999',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      Aug 2023 – Present · Community events, marketing materials, social media content
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        color: '#0B0B0B',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      United Sports & Entertainment
                    </p>
                    <p
                      className="text-xs font-medium mt-0.5"
                      style={{
                        color: '#C8102E',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      Event Operations Intern, Battleground 2K24
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{
                        color: '#999',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      Oct – Nov 2024 · Production logistics, media credentialing, press conferences
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Education */}
            <div className="flex items-start gap-4 mb-8">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(200,16,46,0.07)' }}
              >
                <GraduationCap size={18} color="#C8102E" />
              </div>
              <div className="flex-1">
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{
                    color: '#0B0B0B',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        color: '#0B0B0B',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      University of Houston, C.T. Bauer College of Business
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{
                        color: '#666',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      BBA in Marketing, Minor in Journalism · GPA 3.7
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{
                        color: '#999',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      Aug 2022 – May 2026 · REACH Scholar · Dean's List (All Semesters)
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        color: '#0B0B0B',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      University of Granada, Spain
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{
                        color: '#999',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      International Studies Program · Spring 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Leadership */}
            <div className="flex items-start gap-4 mb-8">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(200,16,46,0.07)' }}
              >
                <Award size={18} color="#C8102E" />
              </div>
              <div className="flex-1">
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{
                    color: '#0B0B0B',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Leadership
                </h3>
                <div className="space-y-4">
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        color: '#0B0B0B',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      UH CoogTV — Sports Head Editor
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{
                        color: '#999',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      2023 – Present · Lead sports video production, highlight packages, documentary content
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        color: '#0B0B0B',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      INK Collective — Co-Founder & Co-President
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{
                        color: '#999',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      Fall 2023 – Present · Campus book club promoting underrepresented authors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Study Abroad */}
            <div className="flex items-start gap-4 mb-10">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(200,16,46,0.07)' }}
              >
                <Globe size={18} color="#C8102E" />
              </div>
              <div className="flex-1">
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{
                    color: '#0B0B0B',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  International Experience
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: '#444',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  Study abroad at the University of Granada, Spain — Spring 2024
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="h-11 px-8 text-sm font-medium rounded-lg border-0"
                  style={{
                    backgroundColor: '#C8102E',
                    color: '#FFFFFF',
                    fontFamily: 'Roboto, sans-serif',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = 'scale(1.02)')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                >
                  <Download size={16} className="mr-2" /> Download Resume
                </Button>
              </a>
              <Button
                variant="outline"
                className="h-11 px-8 text-sm font-medium rounded-lg"
                style={{
                  borderColor: '#D1D5DB',
                  color: '#0B0B0B',
                  fontFamily: 'Roboto, sans-serif',
                  transition: 'transform 0.2s ease',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.02)')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
                onClick={() =>
                  window.open(personalInfo.linkedin, '_blank')
                }
              >
                <Linkedin size={16} className="mr-2" /> View LinkedIn
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResumeSection;
