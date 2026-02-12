import { ScrollReveal } from '../components/ScrollReveal';
import { AlertCircle } from 'lucide-react';

const problems = [
  'Cardiovascular diseases remain the leading cause of mortality worldwide.',
  'Silent arrhythmias often go undetected until complications arise.',
  'Existing wearables are motion-prone and episodic.',
  'Clinical monitors are accurate—but bulky and uncomfortable.',
  'There is no seamless wearable that bridges cardiac and cerebral monitoring.',
];

export function Problem() {
  return (
    <section id="problem" className="relative min-h-screen w-full flex items-center py-20">
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
                src="/images/problem_patient_scene.jpg"
                alt="Clinical healthcare setting"
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
              <div className="section-label mb-4">THE PROBLEM</div>
              
              {/* Headline */}
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-6">
                The Gap Between Heart Monitoring and Daily Life
              </h2>

              {/* Problem List */}
              <ul className="space-y-4 mb-8">
                {problems.map((problem, index) => (
                  <ScrollReveal
                    key={index}
                    direction="left"
                    delay={0.2 + index * 0.08}
                  >
                    <li className="flex items-start gap-3 text-[#A7ACB8] text-sm lg:text-base">
                      <AlertCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span>{problem}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>

              {/* Closing Statement */}
              <ScrollReveal direction="up" delay={0.6}>
                <p className="text-teal font-medium text-base lg:text-lg border-l-2 border-teal pl-4">
                  Continuous, reliable monitoring should be effortless.
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
