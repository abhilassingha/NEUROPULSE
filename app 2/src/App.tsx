import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { ECGWaveform } from './components/ECGWaveform';
import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { Solution } from './sections/Solution';
import { Technology } from './sections/Technology';
import { Clinical } from './sections/Clinical';
import { HowItWorks } from './sections/HowItWorks';
import { Partnerships } from './sections/Partnerships';
import { Investor } from './sections/Investor';
import { Contact } from './sections/Contact';

function App() {
  useEffect(() => {
    // Add smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-dark text-white overflow-x-hidden">
      {/* ECG Waveform Background */}
      <ECGWaveform />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Section 2: The Problem */}
        <Problem />
        
        {/* Section 3: The Solution */}
        <Solution />
        
        {/* Section 4: Technology */}
        <Technology />
        
        {/* Section 5: Clinical Applications */}
        <Clinical />
        
        {/* Section 6: How It Works */}
        <HowItWorks />
        
        {/* Section 7: Partnerships */}
        <Partnerships />
        
        {/* Section 8: Investor Invitation */}
        <Investor />
        
        {/* Section 9: Contact */}
        <Contact />
      </main>
      
      {/* Global Noise Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[100]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
}

export default App;
