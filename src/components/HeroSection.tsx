import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      const orbs = hero.querySelectorAll('.parallax-orb');
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        (orb as HTMLElement).style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-orb absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="parallax-orb absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="parallax-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-[15%] w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-[25%] w-4 h-4 border border-primary/30 rotate-45 animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 right-[10%] w-3 h-3 border border-secondary/30 rotate-45 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Hero Content */}
      <div className="section-container relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-text-reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Pioneering the Future of Technology</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="block animate-text-reveal opacity-0" style={{ animationDelay: '0.4s' }}>
              Innovating
            </span>
            <span className="block animate-text-reveal opacity-0" style={{ animationDelay: '0.6s' }}>
              <span className="text-primary glow-text">Intelligence</span>
            </span>
            <span className="block text-muted-foreground animate-text-reveal opacity-0" style={{ animationDelay: '0.8s' }}>
              with AI & Robotics
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-text-reveal opacity-0" style={{ animationDelay: '1s' }}>
            A deep-tech company at the forefront of artificial intelligence, robotics, and automation — 
            engineering tomorrow's solutions for defense, agriculture, and healthcare.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-text-reveal opacity-0" style={{ animationDelay: '1.2s' }}>
            <a
              href="#domains"
              className="btn-primary px-8 py-4 rounded-xl text-base font-semibold text-primary-foreground flex items-center gap-2 group"
            >
              Explore Our Work
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#about"
              className="btn-outline px-8 py-4 rounded-xl text-base font-semibold text-foreground"
            >
              Learn More
            </a>
          </div>

        {/* Scroll Indicator - positioned outside button area */}
        <div className="hidden sm:block absolute bottom-4 left-1/2 -translate-x-1/2 animate-text-reveal opacity-0 pointer-events-none" style={{ animationDelay: '1.5s' }}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
