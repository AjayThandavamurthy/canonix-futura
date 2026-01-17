import { useRef } from 'react';
import { Zap, Lightbulb, Shield } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  {
    title: 'Innovation-Driven',
    description: 'Constantly pushing boundaries with cutting-edge research and breakthrough technologies.',
    icon: Zap,
  },
  {
    title: 'R&D Focused',
    description: 'Dedicated research teams driving fundamental advances in AI, robotics, and automation.',
    icon: Lightbulb,
  },
  {
    title: 'Scalable & Secure',
    description: 'Enterprise-grade systems built for reliability, security, and seamless scalability.',
    icon: Shield,
  },
];

const WhyCanonixSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id="why-canonix"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual Element */}
          <div className="scroll-animate animate-slide-in-left opacity-0 relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Orbiting Elements */}
              <div className="absolute inset-0 border border-border/30 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 border border-border/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-16 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              
              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-45 animate-pulse" />
                  <div className="absolute inset-4 bg-card rounded-xl rotate-45 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-primary -rotate-45">C</span>
                  </div>
                </div>
              </div>

              {/* Orbiting Dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full animate-orbit" />
              <div className="absolute top-1/4 right-0 w-2 h-2 bg-secondary rounded-full animate-orbit" style={{ animationDelay: '-5s' }} />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/50 rounded-full animate-orbit" style={{ animationDelay: '-10s' }} />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="scroll-animate animate-slide-in-right opacity-0 inline-block text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="scroll-animate animate-slide-in-right opacity-0 stagger-1 font-display text-4xl md:text-5xl font-bold mb-6">
              Why <span className="text-primary">Canonix</span>
            </h2>
            <p className="scroll-animate animate-slide-in-right opacity-0 stagger-2 text-lg text-muted-foreground mb-10">
              We don't just build technology — we architect the future. Our approach 
              combines relentless innovation with battle-tested engineering.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`scroll-animate animate-slide-in-right opacity-0 flex gap-4 group`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-1 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCanonixSection;
