import { ScrollReveal } from '../components/ScrollReveal';
import { Heart, Wind, Droplets, Brain, Info } from 'lucide-react';

const clinicalCategories = [
  {
    icon: Heart,
    title: 'Cardiac',
    items: [
      'Atrial fibrillation screening',
      'Tachycardia & bradycardia monitoring',
      'Premature beat detection',
      'Heart rate variability analysis',
      'Long-term rhythm tracking',
    ],
  },
  {
    icon: Wind,
    title: 'Respiratory',
    items: [
      'Respiratory rate monitoring',
      'Breathing pattern irregularities',
      'Early hypoventilation detection',
    ],
  },
  {
    icon: Droplets,
    title: 'Vascular',
    items: [
      'Oxygen saturation trends',
      'Peripheral perfusion tracking',
      'Pulse waveform analysis',
    ],
  },
  {
    icon: Brain,
    title: 'Neurological / Cerebral',
    items: [
      'Cerebral oxygenation trend monitoring (via NIRS)',
      'Early hypoperfusion warning signals',
      'Autonomic nervous system analysis',
      'Syncope risk monitoring',
    ],
  },
];

export function Clinical() {
  return (
    <section id="clinical" className="relative w-full py-20 lg:py-32">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <ScrollReveal className="text-center max-w-[920px] mx-auto mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Designed for Advanced Health Monitoring
          </h2>
          <p className="text-[#A7ACB8] text-base lg:text-lg">
            A single platform supporting screening, early detection, and longitudinal 
            tracking across multiple physiological systems.
          </p>
        </ScrollReveal>

        {/* Clinical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-[1200px] mx-auto">
          {clinicalCategories.map((category, categoryIndex) => (
            <ScrollReveal
              key={categoryIndex}
              direction="up"
              delay={categoryIndex * 0.1}
            >
              <div className="clinical-card p-6 lg:p-8 h-full">
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Items List */}
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-start gap-2 text-[#A7ACB8] text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Categories */}
        <div className="mt-6 max-w-[1200px] mx-auto">
          <ScrollReveal direction="up" delay={0.4}>
            <div className="clinical-card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white">
                  Metabolic / General
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  'Temperature monitoring',
                  'Stress pattern detection',
                  'Sleep quality metrics',
                  'Recovery tracking',
                  'Remote patient monitoring integration',
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-[#A7ACB8] text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Disclaimer */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="max-w-[920px] mx-auto mt-8 flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <Info className="w-5 h-5 text-[#A7ACB8] flex-shrink-0 mt-0.5" />
            <p className="text-[#A7ACB8] text-xs lg:text-sm">
              NeuroPulse™ is designed as a screening and monitoring platform and is not 
              intended to replace diagnostic imaging or clinical decision-making tools.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Need to import Activity for the Metabolic section
import { Activity } from 'lucide-react';
