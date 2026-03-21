import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { Button } from './ui/button';
import { mediaItems, mediaCategories } from '../data/mock';

const MediaPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const sectionRef = useRef(null);

  const filtered =
    activeCategory === 'All'
      ? mediaItems
      : mediaItems.filter((m) => m.category === activeCategory);

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
      id="media"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#FFFFFF' }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 fade-section">
        <div className="mb-12">
          <p
            className="text-sm font-medium tracking-[0.15em] uppercase mb-3"
            style={{ color: '#C8102E', fontFamily: 'Roboto, sans-serif' }}
          >
            Gallery
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ color: '#0B0B0B', fontFamily: 'Poppins, sans-serif' }}
          >
            Content Production Portfolio
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {mediaCategories.map((cat) => (
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

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => {
                if (item.type === 'video') setSelectedItem(item);
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                style={{ transition: 'transform 0.5s ease' }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.08)')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    'linear-gradient(to top, rgba(11,11,11,0.8) 0%, transparent 60%)',
                  transition: 'opacity 0.3s ease',
                }}
              >
                <div className="flex items-center gap-2">
                  {item.type === 'video' && (
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Play size={14} color="#FFFFFF" fill="#FFFFFF" />
                    </div>
                  )}
                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{
                        color: '#FFFFFF',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        fontFamily: 'Roboto, sans-serif',
                      }}
                    >
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedItem && selectedItem.type === 'video' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Close
            </button>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src={selectedItem.videoUrl}
                title={selectedItem.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaPortfolio;
