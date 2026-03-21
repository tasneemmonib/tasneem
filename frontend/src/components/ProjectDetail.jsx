import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { projects } from '../data/mock';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

  const handleBack = () => {
    // Navigate to home and scroll to work section
    navigate('/');
    setTimeout(() => {
      const workSection = document.querySelector('#work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'instant' });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ color: '#0B0B0B', fontFamily: 'Poppins, sans-serif' }}
        >
          Project Not Found
        </h2>
        <Button onClick={() => navigate('/')} variant="outline">
          <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
        </Button>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero Banner */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(11,11,11,0.85) 0%, rgba(11,11,11,0.3) 50%, transparent 100%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 max-w-7xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-medium tracking-wide uppercase px-3 py-1 rounded-full"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold mb-2"
            style={{
              color: '#FFFFFF',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {project.title}
          </h1>
          <p
            className="text-base md:text-lg"
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            Role: {project.role}
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <Button
          onClick={handleBack}
          variant="ghost"
          className="text-sm font-medium hover:bg-gray-50"
          style={{ color: '#666', fontFamily: 'Roboto, sans-serif' }}
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Work
        </Button>
      </div>

      {/* Content */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16"
        ref={sectionRef}
      >
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 fade-section">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{
                  color: '#0B0B0B',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Overview
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: '#444', fontFamily: 'Roboto, sans-serif' }}
              >
                {project.overview}
              </p>
            </div>

            <Separator />

            {/* Key Contributions */}
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{
                  color: '#0B0B0B',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Key Contributions
              </h2>
              <div className="space-y-3">
                {project.contributions.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      color="#C8102E"
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span
                      className="text-base"
                      style={{
                        color: '#444',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            {project.deliverables.length > 0 && (
              <>
                <Separator />
                <div>
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{
                      color: '#0B0B0B',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    Deliverables
                  </h2>
                  <div className="space-y-3">
                    {project.deliverables.map((d, i) => (
                      <a
                        key={i}
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-lg"
                        style={{
                          backgroundColor: '#F5F5F5',
                          transition: 'background-color 0.2s ease',
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.backgroundColor = '#EBEBEB')
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.backgroundColor = '#F5F5F5')
                        }
                      >
                        <FileText size={18} color="#C8102E" />
                        <span
                          className="text-sm font-medium"
                          style={{
                            color: '#0B0B0B',
                            fontFamily: 'Roboto, sans-serif',
                          }}
                        >
                          {d.label}
                        </span>
                        <ExternalLink
                          size={14}
                          color="#999"
                          className="ml-auto"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Media Section */}
            {project.media.length > 0 && (
              <>
                <Separator />
                <div>
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{
                      color: '#0B0B0B',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    Media
                  </h2>
                  <div className="space-y-6">
                    {project.media.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-xl overflow-hidden"
                        style={{ backgroundColor: '#0B0B0B' }}
                      >
                        {item.type === 'youtube' && (
                          <div className="aspect-video">
                            <iframe
                              src={item.url}
                              title={item.title}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        )}
                        <div className="p-4">
                          <p
                            className="text-sm font-medium"
                            style={{
                              color: '#FFFFFF',
                              fontFamily: 'Roboto, sans-serif',
                            }}
                          >
                            {item.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-sm rounded-xl sticky top-24">
              <CardContent className="p-6">
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{
                    color: '#0B0B0B',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Skills Demonstrated
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs font-medium"
                      style={{
                        backgroundColor: '#F5F5F5',
                        color: '#0B0B0B',
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Separator className="my-6" />

                <h3
                  className="text-lg font-semibold mb-3"
                  style={{
                    color: '#0B0B0B',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Project Info
                </h3>
                <div className="space-y-3">
                  <div>
                    <span
                      className="text-xs uppercase tracking-wider"
                      style={{
                        color: '#999',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      Category
                    </span>
                    <p
                      className="text-sm font-medium mt-0.5"
                      style={{
                        color: '#0B0B0B',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      {project.category}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-xs uppercase tracking-wider"
                      style={{
                        color: '#999',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      Role
                    </span>
                    <p
                      className="text-sm font-medium mt-0.5"
                      style={{
                        color: '#0B0B0B',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      {project.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
