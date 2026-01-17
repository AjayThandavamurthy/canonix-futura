import { useRef } from 'react';
import { Eye, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const VisionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative py-32 bg-muted/30 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Vision Card */}
          <div className="scroll-animate animate-slide-in-left opacity-0">
            <div className="relative h-full card-futuristic rounded-3xl p-10 overflow-hidden group">
              {/* Glow Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-8">
                  <Eye className="w-8 h-8" />
                </div>
                
                <span className="text-primary font-medium text-sm tracking-widest uppercase block mb-4">
                  Our Vision
                </span>
                
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  To be the global leader in{' '}
                  <span className="text-primary">intelligent systems</span> that 
                  transform industries and elevate humanity.
                </h3>
                
                <div className="w-20 h-1 bg-primary rounded-full" />
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="scroll-animate animate-slide-in-right opacity-0 stagger-2">
            <div className="relative h-full card-futuristic rounded-3xl p-10 overflow-hidden group">
              {/* Glow Effect */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-[80px] group-hover:bg-secondary/30 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 text-secondary mb-8">
                  <TrendingUp className="w-8 h-8" />
                </div>
                
                <span className="text-secondary font-medium text-sm tracking-widest uppercase block mb-4">
                  Our Mission
                </span>
                
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  To pioneer{' '}
                  <span className="text-secondary">breakthrough technologies</span> in 
                  AI and robotics that solve real-world challenges at scale.
                </h3>
                
                <div className="w-20 h-1 bg-secondary rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="scroll-animate animate-slide-up opacity-0 stagger-4 mt-20 text-center">
          <blockquote className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-primary/20 font-serif">"</div>
            <p className="font-display text-2xl md:text-3xl font-bold text-foreground max-w-4xl mx-auto leading-relaxed">
              We don't predict the future — we build it.
            </p>
            <cite className="block mt-6 text-muted-foreground text-sm not-italic">
              — Canonix Leadership
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
