import { useEffect, useRef } from 'react';

const domains = [
  {
    title: 'Artificial Intelligence',
    description: 'Advanced machine learning, neural networks, and cognitive computing systems that learn, adapt, and evolve.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-red-500/20 to-orange-500/20',
  },
  {
    title: 'Robotics & Automation',
    description: 'Precision robotics, autonomous systems, and intelligent automation for industrial and commercial applications.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Defense Technologies',
    description: 'Next-generation defense systems, surveillance platforms, and strategic security solutions.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'from-gray-500/20 to-slate-500/20',
  },
  {
    title: 'AgriTech Systems',
    description: 'Smart farming solutions, precision agriculture, and sustainable food production technologies.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Healthcare Intelligence',
    description: 'AI-driven diagnostics, medical robotics, and intelligent healthcare management platforms.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: 'from-pink-500/20 to-rose-500/20',
  },
];

const DomainsSection = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="domains"
      ref={sectionRef}
      className="relative py-32 bg-muted/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="scroll-animate animate-slide-up opacity-0 inline-block text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Our Expertise
          </span>
          <h2 className="scroll-animate animate-slide-up opacity-0 stagger-1 font-display text-4xl md:text-5xl font-bold mb-6">
            Core <span className="text-primary">Domains</span>
          </h2>
          <p className="scroll-animate animate-slide-up opacity-0 stagger-2 text-lg text-muted-foreground">
            Pioneering technologies across multiple frontiers, each domain represents 
            our commitment to transformative innovation.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <div
              key={domain.title}
              className={`scroll-animate animate-scale-in opacity-0 group relative overflow-hidden rounded-2xl card-futuristic p-8 transition-all duration-500 hover:-translate-y-2`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  {domain.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-foreground transition-colors">
                  {domain.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {domain.description}
                </p>

                {/* Arrow Icon */}
                <div className="mt-6 flex items-center text-primary group-hover:text-foreground transition-colors">
                  <span className="text-sm font-medium mr-2">Learn more</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
