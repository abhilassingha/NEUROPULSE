import { ScrollReveal } from '../components/ScrollReveal';
import { FlaskConical, Cpu, TrendingUp, Building2, Brain } from 'lucide-react';

const partners = [
  { icon: FlaskConical, text: 'Clinical research partnerships' },
  { icon: Cpu, text: 'Biomedical engineering collaborators' },
  { icon: TrendingUp, text: 'Digital health investors' },
  { icon: Building2, text: 'Hospital pilot programs' },
  { icon: Brain, text: 'AI research integration' },
];

export function Partnerships() {
  return (
    <section id="partnerships" className="relative min-h-screen w-full flex items-center py-20">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8">
          {/* Text Card */}
          <ScrollReveal 
            direction="right" 
            className="w-full lg:w-[41vw] lg:max-w-[640px]"
            delay={0}
          >
            <div className="clinical-card h-full p-8 lg:p-10 flex flex-col justify-center">
              {/* Label */}
              <div className="section-label mb-4">PARTNERSHIPS</div>
              
              {/* Headline */}
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4">
                Open for Collaboration
              </h2>

              {/* Body */}
              <p className="text-[#A7ACB8] text-sm lg:text-base leading-relaxed mb-8">
                We are actively seeking partners who share our vision for preventive, 
                continuous care.
              </p>

              {/* Partner Pills */}
              <div className="flex flex-wrap gap-3">
                {partners.map((partner, index) => (
                  <ScrollReveal
                    key={index}
                    direction="up"
                    delay={0.2 + index * 0.06}
                  >
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-teal/40 hover:bg-teal/5 transition-all duration-300">
                      <partner.icon className="w-4 h-4 text-teal" />
                      <span className="text-white text-sm font-medium">{partner.text}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Image Card */}
          <ScrollReveal 
            direction="left" 
            className="w-full lg:w-[41vw] lg:max-w-[640px]"
            delay={0.15}
          >
            <div className="clinical-card h-[400px] lg:h-[64vh] overflow-hidden">
              <img
                src="/images/partners_team_scene.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
