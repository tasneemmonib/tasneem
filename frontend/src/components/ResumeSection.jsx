import React, { useEffect, useRef } from 'react';
import { Download, Linkedin, Briefcase, GraduationCap, Award } from 'lucide-react';
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
            {/* Summary */}
            <div className="flex items-start gap-4 mb-8">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(200,16,46,0.07)' }}
              >
                <Briefcase size={18} color="#C8102E" />
              </div>
              <div>
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{
                    color: '#0B0B0B',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Experience
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
                      Springtime Pediatrics — Marketing Coordinator
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{
                        color: '#999',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      Marketing communications, community outreach, content creation
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
                      UH Athletics — Media Production
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{
                        color: '#999',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      Video production, highlight content, game coverage
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
                      Battleground Sports — Event Operations
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{
                        color: '#999',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      Event coordination, media credentialing, press support
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
              <div>
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{
                    color: '#0B0B0B',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Education
                </h3>
                <p
                  className="text-sm font-semibold"
                  style={{
                    color: '#0B0B0B',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  University of Houston
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    color: '#999',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  B.S. Marketing Communications, Minor in Journalism
                </p>
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Leadership */}
            <div className="flex items-start gap-4 mb-10">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(200,16,46,0.07)' }}
              >
                <Award size={18} color="#C8102E" />
              </div>
              <div>
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{
                    color: '#0B0B0B',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Leadership
                </h3>
                <p
                  className="text-sm font-semibold"
                  style={{
                    color: '#0B0B0B',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  INK Collective — Founder & President
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    color: '#999',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  Campus organization promoting underrepresented authors and literacy
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
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
