import { ScrollReveal } from '../components/ScrollReveal';
import { Cpu, Zap, Brain, Activity, Mic, Bluetooth, Code, GitMerge, Shield, HeartPulse, BarChart3 } from 'lucide-react';

const hardwareItems = [
  { icon: Cpu, text: 'Rigid-flex PCB architecture' },
  { icon: Zap, text: 'Ultra-low-noise ECG analog front end' },
  { icon: Brain, text: 'Dual-site NIRS cerebral oxygenation monitoring' },
  { icon: Activity, text: 'High-resolution accelerometer for SCG' },
  { icon: Mic, text: 'Acoustic heart sound detection' },
  { icon: Bluetooth, text: 'BLE-enabled microcontroller' },
];

const softwareItems = [
  { icon: Code, text: 'AI-driven signal denoising' },
  { icon: GitMerge, text: 'Multimodal fusion algorithms' },
  { icon: Shield, text: 'Motion artifact rejection' },
  { icon: HeartPulse, text: 'Arrhythmia pattern recognition' },
  { icon: BarChart3, text: 'Longitudinal health analytics' },
];

export function Technology() {
  return (
    <section id="technology" className="relative min-h-screen w-full flex items-center py-20">
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
                src="/images/tech_pcb_assembly.jpg"
                alt="PCB hardware assembly"
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
              <div className="section-label mb-4">TECHNOLOGY</div>
              
              {/* Headline */}
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-8">
                Built on Advanced Biomedical Engineering + AI
              </h2>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Hardware Column */}
                <div>
                  <h3 className="text-teal font-semibold text-sm uppercase tracking-wider mb-4">
                    Hardware
                  </h3>
                  <ul className="space-y-3">
                    {hardwareItems.map((item, index) => (
                      <ScrollReveal
                        key={index}
                        direction="left"
                        delay={0.2 + index * 0.05}
                      >
                        <li className="flex items-start gap-2 text-[#A7ACB8] text-sm">
                          <item.icon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                          <span>{item.text}</span>
                        </li>
                      </ScrollReveal>
                    ))}
                  </ul>
                </div>

                {/* Software Column */}
                <div>
                  <h3 className="text-teal font-semibold text-sm uppercase tracking-wider mb-4">
                    Software
                  </h3>
                  <ul className="space-y-3">
                    {softwareItems.map((item, index) => (
                      <ScrollReveal
                        key={index}
                        direction="left"
                        delay={0.35 + index * 0.05}
                      >
                        <li className="flex items-start gap-2 text-[#A7ACB8] text-sm">
                          <item.icon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                          <span>{item.text}</span>
                        </li>
                      </ScrollReveal>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
