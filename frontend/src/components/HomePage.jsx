import React, { useEffect, useRef } from 'react';
import {
  ArrowRight,
  Download,
  Target,
  Film,
  Calendar,
  MessageSquare,
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { personalInfo, credibilityItems, projects } from '../data/mock';
import { useNavigate } from 'react-router-dom';

const iconMap = { Target, Film, Calendar, MessageSquare };

const HomePage = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.filter((p) => p.featured);
  const sectionsRef = useRef([]);

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
    sectionsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{ background: '#0B0B0B' }}
      >
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Decorative accent line */}
        <div
          className="absolute top-0 left-0 w-1 h-full"
          style={{ background: 'linear-gradient(to bottom, #C8102E, transparent)' }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 pt-20">
          <div className="max-w-3xl">
            <p
              className="text-sm font-medium tracking-[0.25em] uppercase mb-8"
              style={{ color: '#C8102E', fontFamily: 'Roboto, sans-serif' }}
            >
              Portfolio
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-6"
              style={{
                color: '#FFFFFF',
                fontFamily: 'Poppins, sans-serif',
                lineHeight: '1.05',
              }}
            >
              {personalInfo.name}
            </h1>
            <p
              className="text-xl md:text-2xl font-light mb-4"
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              {personalInfo.title}
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-12 max-w-2xl"
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              {personalInfo.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo('#work')}
                className="h-12 px-8 text-sm font-medium rounded-lg transition-transform duration-200 hover:scale-[1.02] border-0"
                style={{
                  backgroundColor: '#C8102E',
                  color: '#FFFFFF',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                View Work <ArrowRight className="ml-2" size={16} />
              </Button>
              <Button
                onClick={() => scrollTo('#resume')}
                variant="outline"
                className="h-12 px-8 text-sm font-medium rounded-lg border-white/20 hover:bg-white/10 transition-transform duration-200"
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                <Download className="mr-2" size={16} /> Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section
        className="py-16 lg:py-20 border-b border-gray-100"
        style={{ backgroundColor: '#FFFFFF' }}
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 fade-section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {credibilityItems.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#F5F5F5' }}
                  >
                    {Icon && <Icon size={20} color="#C8102E" />}
                  </div>
                  <span
                    className="text-sm font-medium tracking-wide"
                    style={{
                      color: '#0B0B0B',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: '#F5F5F5' }}
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 fade-section">
          <div className="mb-14">
            <p
              className="text-sm font-medium tracking-[0.15em] uppercase mb-3"
              style={{ color: '#C8102E', fontFamily: 'Roboto, sans-serif' }}
            >
              Featured Work
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: '#0B0B0B', fontFamily: 'Poppins, sans-serif' }}
            >
              Selected Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-sm hover:shadow-lg bg-white rounded-xl"
                style={{ transition: 'box-shadow 0.3s ease' }}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{ transition: 'transform 0.5s ease' }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = 'scale(1.05)')
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = 'scale(1)')
                    }
                  />
                </div>
                <CardContent className="p-6">
                  <span
                    className="text-xs font-medium tracking-wider uppercase"
                    style={{
                      color: '#C8102E',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="text-lg font-semibold mt-2 mb-2"
                    style={{
                      color: '#0B0B0B',
                      fontFamily: 'Poppins, sans-serif',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed line-clamp-2"
                    style={{
                      color: '#666',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    {project.overview}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
