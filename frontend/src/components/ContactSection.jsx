import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Globe, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { personalInfo } from '../data/mock';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission — saves to localStorage
    const msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    msgs.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('contactMessages', JSON.stringify(msgs));
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/tasneemmonib',
      href: personalInfo.linkedin,
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'tasneemmonib.com',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#FFFFFF' }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 fade-section">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p
            className="text-sm font-medium tracking-[0.15em] uppercase mb-3"
            style={{ color: '#C8102E', fontFamily: 'Roboto, sans-serif' }}
          >
            Contact
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#0B0B0B', fontFamily: 'Poppins, sans-serif' }}
          >
            Let's Connect
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: '#666', fontFamily: 'Roboto, sans-serif' }}
          >
            Interested in working together? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-sm rounded-xl">
            <CardContent className="p-8 lg:p-10">
              {/* Contact Links */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {contactLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={i}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-center p-4 rounded-xl"
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
                      <Icon size={20} color="#C8102E" className="mb-2" />
                      <span
                        className="text-xs font-medium"
                        style={{
                          color: '#0B0B0B',
                          fontFamily: 'Roboto, sans-serif',
                        }}
                      >
                        {link.label}
                      </span>
                      <span
                        className="text-xs mt-0.5"
                        style={{
                          color: '#999',
                          fontFamily: 'Roboto, sans-serif',
                        }}
                      >
                        {link.value}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium mb-1.5 block"
                    style={{
                      color: '#0B0B0B',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-11 rounded-lg"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium mb-1.5 block"
                    style={{
                      color: '#0B0B0B',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-11 rounded-lg"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium mb-1.5 block"
                    style={{
                      color: '#0B0B0B',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="rounded-lg resize-none"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-11 text-sm font-medium rounded-lg border-0"
                  style={{
                    backgroundColor: '#0B0B0B',
                    color: '#FFFFFF',
                    fontFamily: 'Roboto, sans-serif',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = 'scale(1.01)')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                >
                  <Send size={16} className="mr-2" /> Send Message
                </Button>

                {submitted && (
                  <p
                    className="text-center text-sm font-medium"
                    style={{
                      color: '#16a34a',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    Message sent successfully! I'll be in touch soon.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
