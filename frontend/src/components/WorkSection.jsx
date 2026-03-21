import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects, categories } from '../data/mock';
import { useNavigate } from 'react-router-dom';

const WorkSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
      id="work"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#F5F5F5' }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 fade-section">
        <div className="mb-12">
          <p
            className="text-sm font-medium tracking-[0.15em] uppercase mb-3"
            style={{ color: '#C8102E', fontFamily: 'Roboto, sans-serif' }}
          >
            Portfolio
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ color: '#0B0B0B', fontFamily: 'Poppins, sans-serif' }}
          >
            Work & Projects
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="rounded-full text-xs font-medium"
                style={
                  activeCategory === cat
                    ? {
                        backgroundColor: '#0B0B0B',
                        color: '#FFFFFF',
                        borderColor: '#0B0B0B',
                        transition: 'all 0.2s ease',
                      }
                    : {
                        borderColor: '#D1D5DB',
                        color: '#555',
                        transition: 'all 0.2s ease',
                      }
                }
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-sm bg-white rounded-xl"
              style={{ transition: 'box-shadow 0.3s ease, transform 0.3s ease' }}
              onClick={() => navigate(`/project/${project.id}`)}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 20px 40px rgba(0,0,0,0.08)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 1px 3px rgba(0,0,0,0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="aspect-[16/9] overflow-hidden relative">
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
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <ArrowUpRight size={18} color="#0B0B0B" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <Badge
                  variant="secondary"
                  className="text-xs font-medium mb-3"
                  style={{
                    backgroundColor: 'rgba(200,16,46,0.07)',
                    color: '#C8102E',
                  }}
                >
                  {project.category}
                </Badge>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{
                    color: '#0B0B0B',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: '#666', fontFamily: 'Roboto, sans-serif' }}
                >
                  {project.overview}
                </p>
                <div
                  className="flex items-center text-sm font-medium"
                  style={{ color: '#C8102E', fontFamily: 'Roboto, sans-serif' }}
                >
                  View Case Study <ArrowUpRight size={14} className="ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
