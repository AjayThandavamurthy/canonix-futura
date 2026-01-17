import { useRef } from 'react';
import { Lightbulb, TrendingUp, Users, FlaskConical, Mail } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const benefits = [
  {
    icon: Lightbulb,
    title: 'Innovation Culture',
    description: 'Work on groundbreaking technologies',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear paths for advancement',
  },
  {
    icon: Users,
    title: 'Collaborative Teams',
    description: 'Work with world-class experts',
  },
  {
    icon: FlaskConical,
    title: 'Cutting-Edge R&D',
    description: 'Access to latest tools & research',
  },
];

const CareersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { threshold: 0.1 });

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
                <benefit.icon className="w-6 h-6" />
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
              href="mailto:careers@canonix.in"
              className="btn-outline px-8 py-3 rounded-xl text-base font-semibold text-foreground inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Your Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
