import { useEffect, useRef, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

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
    details: {
      overview: 'Our AI division develops cutting-edge intelligent systems that power the next generation of autonomous decision-making platforms.',
      capabilities: [
        'Deep Learning & Neural Network Architectures',
        'Natural Language Processing & Understanding',
        'Computer Vision & Image Recognition',
        'Predictive Analytics & Forecasting',
        'Reinforcement Learning Systems',
      ],
      applications: 'From intelligent automation to predictive maintenance, our AI solutions are deployed across industries including manufacturing, logistics, and enterprise operations.',
    },
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
    details: {
      overview: 'We engineer precision robotic systems and automation solutions that transform industrial operations with unmatched accuracy and efficiency.',
      capabilities: [
        'Industrial Robotic Arms & Manipulators',
        'Autonomous Mobile Robots (AMR)',
        'Collaborative Robot Systems (Cobots)',
        'Process Automation & Control Systems',
        'Sensor Integration & Real-time Feedback',
      ],
      applications: 'Our robotics solutions serve manufacturing plants, warehouses, and commercial facilities, enabling 24/7 operations with minimal human intervention.',
    },
  },
  {
    title: 'Drone Technology',
    description: 'Autonomous aerial systems, AI-powered drones, real-time monitoring, mapping, inspection, and surveillance solutions for industrial and commercial applications.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    color: 'from-purple-500/20 to-violet-500/20',
    details: {
      overview: 'Our drone technology division develops autonomous aerial platforms equipped with advanced AI for mission-critical operations across diverse environments.',
      capabilities: [
        'Autonomous Flight & Navigation Systems',
        'AI-Powered Object Detection & Tracking',
        'High-Resolution Aerial Mapping & 3D Modeling',
        'Real-time Data Transmission & Analytics',
        'Multi-Drone Swarm Coordination',
      ],
      applications: 'Deployed for infrastructure inspection, agricultural monitoring, security surveillance, emergency response, and industrial site mapping with precision and reliability.',
    },
  },
];

type Domain = typeof domains[0];

const DomainsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);

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

  const handleLearnMore = (domain: Domain) => {
    setSelectedDomain(domain);
  };

  return (
    <>
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

                  {/* Learn More Button */}
                  <button
                    onClick={() => handleLearnMore(domain)}
                    className="mt-6 flex items-center text-primary group-hover:text-foreground transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-2 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                {/* Corner Decoration */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Detail Modal */}
      <Dialog open={!!selectedDomain} onOpenChange={() => setSelectedDomain(null)}>
        <DialogContent className="max-w-2xl bg-background border-border">
          {selectedDomain && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {selectedDomain.icon}
                  </div>
                  <DialogTitle className="font-display text-2xl font-bold">
                    {selectedDomain.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-muted-foreground">
                  {selectedDomain.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Overview */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Overview</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedDomain.details.overview}
                  </p>
                </div>

                {/* Capabilities */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Capabilities</h4>
                  <ul className="space-y-2">
                    {selectedDomain.details.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Applications</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedDomain.details.applications}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DomainsSection;
