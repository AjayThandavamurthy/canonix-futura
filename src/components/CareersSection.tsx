import { useEffect, useRef, useState } from 'react';

const jobOpenings = [
  {
    title: 'Senior AI/ML Engineer',
    department: 'Artificial Intelligence',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Lead the development of cutting-edge machine learning models and neural network architectures.',
  },
  {
    title: 'Robotics Software Engineer',
    department: 'Robotics & Automation',
    location: 'On-site',
    type: 'Full-time',
    description: 'Design and implement control systems for autonomous robotic platforms.',
  },
  {
    title: 'Computer Vision Researcher',
    department: 'Research & Development',
    location: 'Remote',
    type: 'Full-time',
    description: 'Pioneer advanced computer vision algorithms for real-time object detection and tracking.',
  },
  {
    title: 'Embedded Systems Developer',
    department: 'Hardware Engineering',
    location: 'On-site',
    type: 'Full-time',
    description: 'Develop firmware and embedded solutions for next-generation robotic systems.',
  },
  {
    title: 'Product Manager - Defense Tech',
    department: 'Product',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Drive product strategy and roadmap for defense technology solutions.',
  },
  {
    title: 'Data Scientist - Healthcare AI',
    department: 'Healthcare Intelligence',
    location: 'Remote',
    type: 'Full-time',
    description: 'Apply data science techniques to revolutionize healthcare diagnostics and patient care.',
  },
];

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Competitive Salary',
    description: 'Industry-leading compensation packages',
  },
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Flexible Work',
    description: 'Remote and hybrid options available',
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
];

const CareersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

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

        {/* Job Listings */}
        <div className="scroll-animate animate-slide-up opacity-0 stagger-3">
          <h3 className="font-display text-2xl font-bold mb-8 text-center">
            Open <span className="text-primary">Positions</span>
          </h3>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <div
                key={job.title}
                className={`group card-futuristic rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  selectedJob === index ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedJob(selectedJob === index ? null : index)}
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h4>
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                          selectedJob === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      selectedJob === index ? 'max-h-40 mt-4 pt-4 border-t border-border' : 'max-h-0'
                    }`}
                  >
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <button className="btn-primary px-6 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground inline-flex items-center gap-2 group/btn">
                      Apply Now
                      <svg
                        className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="scroll-animate animate-slide-up opacity-0 stagger-5 mt-16 text-center">
          <div className="card-futuristic rounded-3xl p-10 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <h3 className="font-display text-2xl font-bold mb-4">
              Don't See Your Role?
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
