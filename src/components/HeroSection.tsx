import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = ({ onSummaryClick }: { onSummaryClick: () => void }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const els = heroRef.current.querySelectorAll('[data-animate]');
    gsap.fromTo(
      els,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out', delay: 2 }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center text-center relative z-10 px-4"
    >
      <h1
        data-animate
        className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground neon-text-cyan tracking-tight opacity-0"
      >
        ALOKKUMAR DUBEY
      </h1>
      <p
        data-animate
        className="font-heading text-lg md:text-2xl text-primary mt-3 tracking-wide opacity-0"
      >
        Java Full Stack Engineer
      </p>
      <div data-animate className="mt-6 space-y-1 opacity-0">
        <p className="text-sm md:text-base text-muted-foreground font-mono">
          B.E. Information Technology (2024–2028)
        </p>
        <p className="text-sm md:text-base text-muted-foreground font-mono">
          Datta Meghe College of Engineering
        </p>
        <p className="text-xs text-muted-foreground/60 font-mono">Mumbai University</p>
      </div>

      <button
        data-animate
        onClick={onSummaryClick}
        className="mt-10 px-8 py-3 glass-panel neon-glow-cyan text-primary font-heading font-medium tracking-wide
                   transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_hsl(186_100%_50%/0.4)] opacity-0 cursor-pointer"
      >
        Professional Summary
      </button>
    </section>
  );
};

export default HeroSection;
