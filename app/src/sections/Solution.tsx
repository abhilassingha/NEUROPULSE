import { ScrollReveal } from '../components/ScrollReveal';
import { Activity, Zap, Waves, Mic, Brain } from 'lucide-react';

const sensors = [
  { icon: Activity, label: 'Differential ear-canal ECG' },
  { icon: Zap, label: 'Multi-wavelength PPG' },
  { icon: Waves, label: 'Seismocardiography (SCG)' },
  { icon: Mic, label: 'Phonocardiography (PCG)' },
  { icon: Brain, label: 'Dual-site NIRS' },
];

export function Solution() {
  return (
    <section id="solution" className="relative min-h-screen w-full flex items-center py-20">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8">
          {/* Text Card */}
          <ScrollReveal 
            direction="right" 
            className="w-full lg:w-[41vw] lg:max-w-[640px] order-2 lg:order-1"
            delay={0}
          >
            <div className="clinical-card h-full p-8 lg:p-10 flex flex-col justify-center">
              {/* Label */}
              <div className="section-label mb-4">THE SOLUTION</div>
              
              {/* Headline */}
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-6">
                A Multimodal Biosensing Platform Inside an Earbud
              </h2>

              {/* Body */}
              <p className="text-[#A7ACB8] text-sm lg:text-base leading-relaxed mb-4">
                NeuroPulse integrates multiple sensing modalities into a lightweight, 
                ergonomic ear wearable.
              </p>
              <p className="text-[#A7ACB8] text-sm lg:text-base leading-relaxed mb-8">
                Each heartbeat is validated electrically, mechanically, optically, 
                acoustically, and hemodynamically—delivering clinical-grade signal 
                quality in daily life.
              </p>

              {/* Sensor Callouts */}
              <div className="space-y-3">
                {sensors.map((sensor, index) => (
                  <ScrollReveal
                    key={index}
                    direction="up"
                    delay={0.3 + index * 0.08}
                  >
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <sensor.icon className="w-5 h-5 text-teal" />
                      <span className="text-white text-sm font-medium">{sensor.label}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Image Card */}
          <ScrollReveal 
            direction="left" 
            className="w-full lg:w-[41vw] lg:max-w-[640px] order-1 lg:order-2"
            delay={0.15}
          >
            <div className="clinical-card h-[400px] lg:h-[64vh] overflow-hidden relative">
              <img
                src="/images/solution_earbud_diagram.jpg"
                alt="NeuroPulse earbud with sensor diagram"
                className="w-full h-full object-cover"
              />
              
              {/* Sensor overlay indicators */}
              <div className="absolute inset-0 pointer-events-none">
                {/* ECG Sensor indicator */}
                <div 
                  className="absolute top-[30%] left-[35%] w-3 h-3 rounded-full bg-teal animate-pulse"
                  style={{ boxShadow: '0 0 15px rgba(46, 233, 168, 0.8)' }}
                />
                {/* PPG Sensor indicator */}
                <div 
                  className="absolute top-[50%] left-[55%] w-3 h-3 rounded-full bg-teal animate-pulse"
                  style={{ boxShadow: '0 0 15px rgba(46, 233, 168, 0.8)', animationDelay: '0.5s' }}
                />
                {/* NIRS Sensor indicator */}
                <div 
                  className="absolute top-[40%] right-[25%] w-3 h-3 rounded-full bg-teal animate-pulse"
                  style={{ boxShadow: '0 0 15px rgba(46, 233, 168, 0.8)', animationDelay: '1s' }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
