import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, Users } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark-card" />
      
      {/* Subtle radial glow */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(46, 233, 168, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Product Image */}
          <div
            className="w-full lg:w-[52vw] max-w-[720px] transition-all duration-1000"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0) scale(1)' : 'translateX(-12vw) scale(0.96)',
            }}
          >
            <div className="relative">
              {/* Pulse ring */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  animation: 'pulse-glow 3s ease-in-out infinite',
                }}
              >
                <div className="w-[80%] h-[80%] rounded-full border border-teal/20" />
              </div>
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  animation: 'pulse-glow 3s ease-in-out infinite 1s',
                }}
              >
                <div className="w-[90%] h-[90%] rounded-full border border-teal/10" />
              </div>
              
              <img
                src="/images/hero_ear_sensor.jpg"
                alt="NeuroPulse Medical Wearable"
                className="relative z-10 w-full h-auto rounded-2xl shadow-glow"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-[36vw] max-w-[420px] text-center lg:text-left">
            {/* Label */}
            <div
              className="section-label mb-4 transition-all duration-700"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.2s',
              }}
            >
              NEUROPULSE™ PLATFORM
            </div>

            {/* Headline */}
            <h1
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[0.95] mb-6 transition-all duration-700"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '0.3s',
              }}
            >
              Monitoring Your<br />
              <span className="text-gradient">Heart to Brain.</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-[#A7ACB8] text-base lg:text-lg leading-relaxed mb-8 transition-all duration-700"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(18px)',
                transitionDelay: '0.4s',
              }}
            >
              A next-generation AI-powered ear wearable that continuously monitors 
              cardiac, vascular, and cerebral health using multimodal biosensing.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-center gap-4 transition-all duration-700"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(18px)',
                transitionDelay: '0.5s',
              }}
            >
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Request Early Access
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('#partnerships')}
                className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Users size={18} />
                Partner With Us
              </button>
            </div>
            
            {/* Contact link */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="mt-4 text-sm text-[#A7ACB8] hover:text-teal transition-colors duration-300 flex items-center gap-2 justify-center lg:justify-start"
              style={{
                opacity: isLoaded ? 1 : 0,
                transitionDelay: '0.6s',
              }}
            >
              <Mail size={14} />
              Contact Founder
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
    </section>
  );
}
