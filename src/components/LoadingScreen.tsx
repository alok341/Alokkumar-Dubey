import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const timer = setTimeout(() => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete,
        });
      }
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <p className="font-mono text-sm text-primary mb-6 tracking-widest">INITIALIZING</p>
      <div className="w-48 h-0.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-100 ease-out neon-glow-cyan"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="font-mono text-xs text-muted-foreground mt-3">{progress}%</p>
    </div>
  );
};

export default LoadingScreen;
