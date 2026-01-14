import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '50+', label: 'Research Projects' },
    { value: '15+', label: 'Patents Filed' },
    { value: '200+', label: 'Team Members' },
    { value: '8+', label: 'Global Partners' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="scroll-animate animate-slide-in-left opacity-0">
              <span className="inline-block text-primary font-medium text-sm tracking-widest uppercase mb-4">
                About Canonix
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Engineering the{' '}
                <span className="text-primary">Next Era</span> of Innovation
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-8" />
            </div>

            <div className="scroll-animate animate-slide-in-left opacity-0 stagger-2">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Canonix stands at the intersection of artificial intelligence and physical systems, 
                developing breakthrough technologies that redefine what's possible. Our multidisciplinary 
                team of engineers, researchers, and visionaries work tirelessly to solve humanity's 
                most pressing challenges.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From autonomous systems that protect and serve, to intelligent platforms that 
                revolutionize farming and healthcare — we build with purpose, precision, and 
                an unwavering commitment to excellence.
              </p>
            </div>

            <div className="scroll-animate animate-slide-in-left opacity-0 stagger-3">
              <a
                href="#domains"
                className="inline-flex items-center gap-2 text-primary font-semibold group"
              >
                Discover Our Domains
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`scroll-animate animate-scale-in opacity-0 card-futuristic p-8 rounded-2xl text-center transition-all duration-500 hover:scale-105`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
