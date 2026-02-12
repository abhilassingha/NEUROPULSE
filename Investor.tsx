import { ScrollReveal } from '../components/ScrollReveal';
import { Calendar, ArrowRight } from 'lucide-react';

export function Investor() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="investor" className="relative min-h-screen w-full flex items-center py-20">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8">
          {/* Image Card */}
          <ScrollReveal 
            direction="right" 
            className="w-full lg:w-[40vw] lg:max-w-[600px]"
            delay={0}
          >
            <div className="clinical-card h-[400px] lg:h-[64vh] overflow-hidden">
              <img
                src="/images/investor_founder_scene.jpg"
                alt="Founder portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Text Card */}
          <ScrollReveal 
            direction="left" 
            className="w-full lg:w-[41vw] lg:max-w-[640px]"
            delay={0.15}
          >
            <div className="clinical-card h-full p-8 lg:p-10 flex flex-col justify-center">
              {/* Label */}
              <div className="section-label mb-4">INVESTORS</div>
              
              {/* Headline */}
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-6">
                Building the Future of Continuous Cardio-Neuro Monitoring
              </h2>

              {/* Body */}
              <p className="text-[#A7ACB8] text-sm lg:text-base leading-relaxed mb-4">
                NeuroPulse™ is positioned at the intersection of wearable technology, 
                AI, and preventive healthcare.
              </p>
              <p className="text-[#A7ACB8] text-sm lg:text-base leading-relaxed mb-8">
                We are currently open to seed investment, strategic partnerships, 
                and research collaborations.
              </p>

              {/* CTA */}
              <ScrollReveal direction="up" delay={0.4}>
                <button 
                  onClick={scrollToContact}
                  className="btn-primary flex items-center gap-2 w-fit"
                >
                  <Calendar size={18} />
                  Schedule a Discussion
                  <ArrowRight size={18} />
                </button>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
