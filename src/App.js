import { useState, useEffect, useRef, createContext } from 'react';
import { Menu, X, Heart, Target, Users, Book, ChevronRight, Sun, Moon } from 'lucide-react';
import './App.css';

// Shared utility function for scroll behavior
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Theme Context
const ThemeContext = createContext();

// Reusable Button Component
const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
};

// Reusable Section Container with Fade In Animation
const Section = ({ id, children, className = '', bgColor = 'bg-white' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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
      className={`section ${bgColor} ${className} ${isVisible ? 'visible' : ''}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

// Reusable Card Component with Hover Animation
const Card = ({ icon: Icon, title, description, className = '', index = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
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
      className={`card ${className} ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="card-icon">
        <Icon size={32} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Reusable Section Header with Stagger Animation
const SectionHeader = ({ title, subtitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
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
    <div ref={headerRef} className={`section-header ${isVisible ? 'visible' : ''}`}>
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

// Theme Toggle Component
const ThemeToggle = ({ isDark, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="theme-toggle"
    aria-label="Toggle theme"
  >
    {isDark ? <Sun size={20} /> : <Moon size={20} />}
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
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-header">
          <div className="logo">Steve Belgum</div>
          
          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`nav-mobile ${isOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="nav-link-mobile"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Hero Component with Parallax Effect
const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero">
      <div 
        className="hero-overlay"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <div className="hero-content">
        <h1 className="animate-fade-in-up">Welcome Home, Warrior</h1>
        <p className="animate-fade-in-up-delay">
          Faith-based life coaching to help veterans and young couples find purpose, clarity, and confidence
        </p>
        <div className="hero-buttons animate-fade-in-up-delay-2">
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
  <Section id="about" bgColor="bg-gray">
    <div className="about-grid">
      <div className="about-text">
        <h2>About Steve</h2>
        <p>
          As a Christian life coach, I'm passionate about serving two distinct communities: veterans transitioning to civilian life and young couples building strong foundations for their marriages.
        </p>
        <p>
          Whether you're a veteran navigating the challenges of coming home or a couple learning to grow together in faith and partnership, I'm here to provide guidance, accountability, and support rooted in Christian principles.
        </p>
        <p>
          Together, we'll work through challenges, celebrate victories, and build the purposeful life you're called to live.
        </p>
      </div>
      <div className="core-values">
        <h3>Core Values</h3>
        <ul>
          {['Faith-Centered Guidance', 'Honor & Integrity', 'Purpose-Driven Living', 'Accountability & Support'].map((value, index) => (
            <li key={value} className="animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
              <ChevronRight size={24} />
              <span>{value}</span>
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
    <Section id="couples-coaching" bgColor="bg-white">
      <SectionHeader 
        title="Couples Coaching"
        subtitle="Building strong, Christ-centered marriages for young couples"
      />
      <div className="service-description">
        <p>
          The early years of marriage are both exciting and challenging. You're learning to blend two lives, two backgrounds, and two sets of expectations into one unified partnership. Without proper guidance, small issues can become major obstacles.
        </p>
        <p>
          My couples coaching provides young married couples and engaged partners with the biblical tools, practical strategies, and supportive accountability needed to build a thriving marriage. Whether you're engaged, newlyweds, or in your first few years of marriage, I'll help you establish patterns that lead to lifelong love and partnership.
        </p>
      </div>
      <div className="cards-grid">
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
    <Section id="veteran-coaching" bgColor="bg-gray">
      <SectionHeader 
        title="Veteran Coaching"
        subtitle="Specialized coaching designed for veterans of all branches transitioning to civilian life"
      />
      <div className="service-description">
        <p>
          The transition from military to civilian life is one of the most challenging journeys a service member faces. The structure, camaraderie, and clear sense of mission don't just disappear when you take off the uniform. I understand the unique challenges veterans face—whether you served in the Army, Navy, Air Force, Marines, Coast Guard, or Space Force.
        </p>
        <p>
          My coaching approach helps you leverage the leadership skills, discipline, and resilience you developed in service while building a meaningful civilian life grounded in faith. We'll work together to identify your new mission, strengthen relationships, and create a purpose-driven path forward.
        </p>
      </div>
      <div className="cards-grid">
        {veteranServices.map((service, index) => (
          <Card key={index} index={index} {...service} />
        ))}
      </div>
    </Section>
  );
};

// Approach Step Component
const ApproachStep = ({ step, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef(null);

  useEffect(() => {
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
      ref={stepRef}
      className={`approach-step ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="step-number">{step.num}</div>
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
    </div>
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
    <Section id="approach" bgColor="bg-white">
      <SectionHeader title="My Approach" />
      <div className="approach-grid">
        {steps.map((step, index) => (
          <ApproachStep key={index} step={step} index={index} />
        ))}
      </div>
    </Section>
  );
};

// Contact Component
const Contact = () => (
  <Section id="contact" bgColor="bg-blue" className="contact-section">
    <div className="contact-content">
      <h2>Ready to Start Your Next Chapter?</h2>
      <p className="contact-subtitle">
        Whether you're a veteran seeking purpose in civilian life or a couple building a strong marriage foundation, let's talk about how I can support your journey.
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <p>Email</p>
          <a href="mailto:steve@stevebelgum.com">
            steve@stevebelgum.com
          </a>
        </div>
        <div className="contact-item">
          <p>Phone</p>
          <a href="tel:+15551234567">
            (555) 123-4567
          </a>
        </div>
      </div>
    </div>
  </Section>
);

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>© 2024 Steve Belgum Life Coaching. All rights reserved.</p>
      <p className="footer-tagline">Serving veterans and couples with faith, honor, and purpose.</p>
    </div>
  </footer>
);

// Main App Component
export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className="app">
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