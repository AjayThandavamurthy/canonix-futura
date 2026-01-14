import { useEffect, useRef } from 'react';

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Innovation Culture',
    description: 'Work on groundbreaking technologies',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Career Growth',
    description: 'Clear paths for advancement',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Collaborative Teams',
    description: 'Work with world-class experts',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Cutting-Edge R&D',
    description: 'Access to latest tools & research',
  },
];

const CareersSection = () => {
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
      id="careers"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="scroll-animate animate-slide-up opacity-0 inline-block text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Join Our Team
          </span>
          <h2 className="scroll-animate animate-slide-up opacity-0 stagger-1 font-display text-4xl md:text-5xl font-bold mb-6">
            Build the <span className="text-primary">Future</span> With Us
          </h2>
          <p className="scroll-animate animate-slide-up opacity-0 stagger-2 text-lg text-muted-foreground">
            Join a team of visionaries, engineers, and innovators shaping the next 
            generation of AI and robotics technology.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`scroll-animate animate-scale-in opacity-0 text-center p-6 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-all duration-300`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                {benefit.icon}
              </div>
              <h4 className="font-display font-bold text-foreground mb-1">{benefit.title}</h4>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="scroll-animate animate-slide-up opacity-0 stagger-3 text-center">
          <div className="card-futuristic rounded-3xl p-10 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <h3 className="font-display text-2xl font-bold mb-4">
              Interested in Joining Canonix?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for exceptional talent. Send us your resume and 
              let us know how you can contribute to our mission.
            </p>
            <a
              href="mailto:careers@canonix.tech"
              className="btn-outline px-8 py-3 rounded-xl text-base font-semibold text-foreground inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Your Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
