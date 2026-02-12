import { ScrollReveal } from '../components/ScrollReveal';
import { Radio, Cpu, Cloud } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Radio,
    title: 'Capture',
    description: 'Continuous, multi-signal acquisition from the ear.',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Process',
    description: 'On-device AI denoising and motion-artifact rejection.',
  },
  {
    number: '03',
    icon: Cloud,
    title: 'Deliver',
    description: 'Secure data transmission and longitudinal analytics.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative min-h-screen w-full flex items-center py-20">
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
                src="/images/howitworks_earbud_closeup.jpg"
                alt="NeuroPulse earbud in use"
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
              <div className="section-label mb-4">HOW IT WORKS</div>
              
              {/* Headline */}
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-8">
                From Signal to Insight
              </h2>

              {/* Steps */}
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <ScrollReveal
                    key={index}
                    direction="left"
                    delay={0.25 + index * 0.1}
                  >
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-teal/30 transition-colors duration-300">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <span className="font-heading font-bold text-3xl text-teal/30">
                          {step.number}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <step.icon className="w-4 h-4 text-teal" />
                          <h3 className="font-heading font-semibold text-lg text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-[#A7ACB8] text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Connection Line */}
              <div className="hidden lg:block absolute left-[calc(50%+20px)] top-[30%] bottom-[30%] w-px bg-gradient-to-b from-transparent via-teal/30 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
