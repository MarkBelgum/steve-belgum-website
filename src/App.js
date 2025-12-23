import React, { useState } from 'react';
import { Menu, X, Heart, Target, Users, Book, ChevronRight, Sun, Moon } from 'lucide-react';

// Shared utility function for scroll behavior
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Theme Context
const ThemeContext = React.createContext();

// Reusable Button Component
const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 dark:bg-slate-700 dark:text-white dark:border-slate-600 dark:hover:bg-slate-600',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-blue-600 dark:hover:bg-slate-700 dark:hover:text-white dark:hover:border-slate-600'
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Reusable Section Container with Fade In Animation
const Section = ({ id, children, className = '', bgColor = 'bg-white dark:bg-slate-900' }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-20 px-6 ${bgColor} ${className} transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

// Reusable Card Component with Hover Animation
const Card = ({ icon: Icon, title, description, className = '', index = 0 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-blue-100 dark:bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
        <Icon className="w-8 h-8 text-blue-600 dark:text-blue-300" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-200 leading-relaxed">{description}</p>
    </div>
  );
};

// Reusable Section Header with Stagger Animation
const SectionHeader = ({ title, subtitle }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const headerRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div ref={headerRef} className="text-center mb-16">
      <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Theme Toggle Component
const ThemeToggle = ({ isDark, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="fixed top-6 left-6 z-50 bg-white dark:bg-slate-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
    aria-label="Toggle theme"
  >
    {isDark ? (
      <Sun className="w-5 h-5 text-yellow-400" />
    ) : (
      <Moon className="w-5 h-5 text-slate-700" />
    )}
  </button>
);

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Couples Coaching', id: 'couples-coaching' },
    { label: 'Veteran Coaching', id: 'veteran-coaching' },
    { label: 'Contact', id: 'contact' }
  ];
  
  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-slate-800 shadow-md fixed w-full top-0 z-40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
            Steve Belgum
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 transform hover:scale-105"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 dark:text-gray-100 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4 pb-4' : 'max-h-0'
        }`}>
          <div className="space-y-3">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Component with Parallax Effect
const Hero = () => {
  const [offsetY, setOffsetY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-slate-900 dark:to-slate-800 text-white pt-32 pb-20 px-6 relative overflow-hidden transition-colors duration-500">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent dark:from-blue-500/10"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          Welcome Home, Warrior
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 dark:text-gray-200 max-w-3xl mx-auto animate-fade-in-up-delay">
          Faith-based life coaching to help veterans and young couples find purpose, clarity, and confidence
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
          <Button variant="outline" onClick={() => scrollToSection('couples-coaching')}>
            Couples Coaching
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection('veteran-coaching')}>
            Veteran Coaching
          </Button>
        </div>
      </div>
    </div>
  );
};

// About Component
const About = () => (
  <Section id="about" bgColor="bg-gray-50 dark:bg-slate-800">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">About Steve</h2>
        <p className="text-lg text-gray-600 dark:text-gray-200 mb-4 leading-relaxed transition-colors duration-300">
          As a Christian life coach, I'm passionate about serving two distinct communities: veterans transitioning to civilian life and young couples building strong foundations for their marriages.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-200 mb-4 leading-relaxed transition-colors duration-300">
          Whether you're a veteran navigating the challenges of coming home or a couple learning to grow together in faith and partnership, I'm here to provide guidance, accountability, and support rooted in Christian principles.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed transition-colors duration-300">
          Together, we'll work through challenges, celebrate victories, and build the purposeful life you're called to live.
        </p>
      </div>
      <div className="bg-blue-600 dark:bg-slate-700 rounded-2xl p-8 text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-2xl font-bold mb-6">Core Values</h3>
        <ul className="space-y-4">
          {['Faith-Centered Guidance', 'Honor & Integrity', 'Purpose-Driven Living', 'Accountability & Support'].map((value, index) => (
            <li key={value} className="flex items-start opacity-0 animate-slide-in-right" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
              <ChevronRight className="w-6 h-6 mr-2 flex-shrink-0 mt-1" />
              <span className="text-lg">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

// Couples Coaching Component
const CouplesCoaching = () => {
  const couplesServices = [
    {
      icon: Heart,
      title: 'Biblical Foundation',
      description: 'Build your marriage on Christ-centered principles that provide stability, purpose, and lasting joy through all seasons.'
    },
    {
      icon: Users,
      title: 'Communication Skills',
      description: 'Learn healthy communication patterns, active listening, and conflict resolution strategies that strengthen your bond.'
    },
    {
      icon: Target,
      title: 'Shared Vision & Goals',
      description: 'Align your dreams, set mutual goals, and create a compelling vision for your life together.'
    },
    {
      icon: Book,
      title: 'Premarital & Early Marriage',
      description: 'Navigate the critical early years with tools for financial planning, intimacy, roles, and building strong habits together.'
    }
  ];

  return (
    <Section id="couples-coaching" bgColor="bg-white dark:bg-slate-900">
      <SectionHeader 
        title="Couples Coaching"
        subtitle="Building strong, Christ-centered marriages for young couples"
      />
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed mb-6 transition-colors duration-300">
          The early years of marriage are both exciting and challenging. You're learning to blend two lives, two backgrounds, and two sets of expectations into one unified partnership. Without proper guidance, small issues can become major obstacles.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed transition-colors duration-300">
          My couples coaching provides young married couples and engaged partners with the biblical tools, practical strategies, and supportive accountability needed to build a thriving marriage. Whether you're engaged, newlyweds, or in your first few years of marriage, I'll help you establish patterns that lead to lifelong love and partnership.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {couplesServices.map((service, index) => (
          <Card key={index} index={index} {...service} />
        ))}
      </div>
    </Section>
  );
};

// Veteran Services Component
const Services = () => {
  const veteranServices = [
    {
      icon: Target,
      title: 'Transition Planning',
      description: 'Strategic guidance for moving from military to civilian life, including career planning, education, and finding your new mission.'
    },
    {
      icon: Heart,
      title: 'Faith Integration',
      description: 'Discover how your Christian faith can be the anchor during transition, providing peace, direction, and renewed purpose.'
    },
    {
      icon: Users,
      title: 'Identity & Purpose',
      description: 'Navigate the shift from military identity to civilian life while maintaining the discipline, honor, and sense of purpose that defined your service.'
    },
    {
      icon: Book,
      title: 'Personal Development',
      description: 'Set meaningful goals, develop new skills, and create a roadmap for the next chapter of your life.'
    }
  ];

  return (
    <Section id="veteran-coaching" bgColor="bg-gray-50 dark:bg-slate-800">
      <SectionHeader 
        title="Veteran Coaching"
        subtitle="Specialized coaching designed for veterans of all branches transitioning to civilian life"
      />
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed mb-6 transition-colors duration-300">
          The transition from military to civilian life is one of the most challenging journeys a service member faces. The structure, camaraderie, and clear sense of mission don't just disappear when you take off the uniform. I understand the unique challenges veterans face—whether you served in the Army, Navy, Air Force, Marines, Coast Guard, or Space Force.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed transition-colors duration-300">
          My coaching approach helps you leverage the leadership skills, discipline, and resilience you developed in service while building a meaningful civilian life grounded in faith. We'll work together to identify your new mission, strengthen relationships, and create a purpose-driven path forward.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {veteranServices.map((service, index) => (
          <Card key={index} index={index} {...service} />
        ))}
      </div>
    </Section>
  );
};

// Approach Component
const Approach = () => {
  const steps = [
    { num: '01', title: 'Listen & Understand', desc: 'Every person\'s story is unique. We start by understanding your experiences, challenges, and goals.' },
    { num: '02', title: 'Ask Good Questions', desc: 'Together, we create a faith-centered roadmap tailored to your specific needs and aspirations.' },
    { num: '03', title: 'Take Action', desc: 'With accountability and support, we execute your plan one step at a time, celebrating progress along the way.' }
  ];

  return (
    <Section id="approach" bgColor="bg-white dark:bg-slate-900">
      <SectionHeader title="My Approach" />
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const [isVisible, setIsVisible] = React.useState(false);
          const stepRef = React.useRef(null);

          React.useEffect(() => {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setIsVisible(true);
                }
              },
              { threshold: 0.1 }
            );

            if (stepRef.current) {
              observer.observe(stepRef.current);
            }

            return () => {
              if (stepRef.current) {
                observer.unobserve(stepRef.current);
              }
            };
          }, []);

          return (
            <div 
              key={index} 
              ref={stepRef}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-6xl font-bold text-blue-200 dark:text-slate-700 mb-4 transition-colors duration-300">{step.num}</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 transition-colors duration-300">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-200 transition-colors duration-300">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

// Contact Component
const Contact = () => (
  <Section id="contact" bgColor="bg-blue-600 dark:bg-slate-800" className="text-white">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Next Chapter?</h2>
      <p className="text-xl mb-8 text-blue-100 dark:text-gray-200">
        Whether you're a veteran seeking purpose in civilian life or a couple building a strong marriage foundation, let's talk about how I can support your journey.
      </p>
      <div className="space-y-6">
        <div className="transform transition-all duration-300 hover:scale-105">
          <p className="text-lg mb-2">Email</p>
          <a href="mailto:steve@stevebelgum.com" className="text-2xl font-semibold hover:text-blue-200 dark:hover:text-blue-400 transition-colors duration-300">
            steve@stevebelgum.com
          </a>
        </div>
        <div className="transform transition-all duration-300 hover:scale-105">
          <p className="text-lg mb-2">Phone</p>
          <a href="tel:+15551234567" className="text-2xl font-semibold hover:text-blue-200 dark:hover:text-blue-400 transition-colors duration-300">
            (555) 123-4567
          </a>
        </div>
      </div>
    </div>
  </Section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 dark:bg-slate-950 text-gray-400 dark:text-gray-400 py-8 px-6 transition-colors duration-300">
    <div className="max-w-6xl mx-auto text-center">
      <p className="mb-2">© 2024 Steve Belgum Life Coaching. All rights reserved.</p>
      <p className="text-sm">Serving veterans and couples with faith, honor, and purpose.</p>
    </div>
  </footer>
);

// Main App Component
export default function App() {
  const [isDark, setIsDark] = useState(true);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className="font-sans transition-colors duration-300">
        <style>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out;
          }
          
          .animate-fade-in-up-delay {
            animation: fade-in-up 0.8s ease-out 0.2s both;
          }
          
          .animate-fade-in-up-delay-2 {
            animation: fade-in-up 0.8s ease-out 0.4s both;
          }
          
          .animate-slide-in-right {
            animation: slide-in-right 0.6s ease-out;
          }
        `}</style>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        <Navigation />
        <Hero />
        <About />
        <CouplesCoaching />
        <Services />
        <Approach />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}