import { useEffect, useRef } from 'react';

export function ECGWaveform() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const offsetRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const drawECG = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const baseY = canvas.height * 0.5;
      const amplitude = 30;
      const speed = 2;
      
      // Draw main ECG line
      ctx.strokeStyle = 'rgba(46, 233, 168, 0.25)';
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(46, 233, 168, 0.5)';
      ctx.shadowBlur = 10;
      
      ctx.beginPath();
      
      for (let x = 0; x < canvas.width; x += 2) {
        const adjustedX = x + offsetRef.current;
        let y = baseY;
        
        // Create ECG pattern (P-QRS-T wave)
        const cycle = adjustedX % 400;
        
        if (cycle < 50) {
          // P wave
          y = baseY - amplitude * 0.3 * Math.sin((cycle / 50) * Math.PI);
        } else if (cycle < 80) {
          // Baseline
          y = baseY;
        } else if (cycle < 100) {
          // Q wave (small dip)
          y = baseY + amplitude * 0.2 * Math.sin(((cycle - 80) / 20) * Math.PI);
        } else if (cycle < 140) {
          // R wave (tall spike)
          y = baseY - amplitude * 1.8 * Math.sin(((cycle - 100) / 40) * Math.PI);
        } else if (cycle < 160) {
          // S wave (deep dip)
          y = baseY + amplitude * 0.6 * Math.sin(((cycle - 140) / 20) * Math.PI);
        } else if (cycle < 220) {
          // Baseline
          y = baseY;
        } else if (cycle < 300) {
          // T wave
          y = baseY - amplitude * 0.5 * Math.sin(((cycle - 220) / 80) * Math.PI);
        } else {
          // Baseline
          y = baseY;
        }
        
        // Add subtle noise
        y += Math.sin(x * 0.02) * 3;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.stroke();
      
      // Draw secondary faint line (echo effect)
      ctx.strokeStyle = 'rgba(46, 233, 168, 0.08)';
      ctx.lineWidth = 1;
      ctx.shadowBlur = 0;
      
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 3) {
        const adjustedX = x + offsetRef.current - 100;
        let y = baseY;
        const cycle = adjustedX % 400;
        
        if (cycle < 50) {
          y = baseY - amplitude * 0.3 * Math.sin((cycle / 50) * Math.PI);
        } else if (cycle < 80) {
          y = baseY;
        } else if (cycle < 100) {
          y = baseY + amplitude * 0.2 * Math.sin(((cycle - 80) / 20) * Math.PI);
        } else if (cycle < 140) {
          y = baseY - amplitude * 1.8 * Math.sin(((cycle - 100) / 40) * Math.PI);
        } else if (cycle < 160) {
          y = baseY + amplitude * 0.6 * Math.sin(((cycle - 140) / 20) * Math.PI);
        } else if (cycle < 220) {
          y = baseY;
        } else if (cycle < 300) {
          y = baseY - amplitude * 0.5 * Math.sin(((cycle - 220) / 80) * Math.PI);
        } else {
          y = baseY;
        }
        
        y += Math.sin(x * 0.02) * 3;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      
      // Update offset for animation
      offsetRef.current += speed;
      
      animationRef.current = requestAnimationFrame(drawECG);
    };

    drawECG();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
