import { useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';
import gsap from 'gsap';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            sectionRef.current!.querySelectorAll('[data-fade]'),
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.12, duration: 0.6, ease: 'power3.out' }
          );
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const gmailUrl =
    'https://mail.google.com/mail/?view=cm&fs=1&to=dubeyalokkumar2005@gmail.com&su=Portfolio%20Contact&body=Hi%20Alok,%0A%0AI%20would%20like%20to%20connect%20with%20you%20regarding';

  return (
    <section ref={sectionRef} className="relative z-10 py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        <h2 data-fade className="font-heading text-2xl md:text-3xl font-bold text-foreground neon-text-cyan mb-3 opacity-0">
          Contact Me
        </h2>
        <p data-fade className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10 opacity-0">
          Interested in collaborating, internship opportunities, or professional discussions? Feel free to reach out.
        </p>

        <div data-fade className="opacity-0">
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 glass-panel neon-glow-cyan text-primary font-heading font-semibold tracking-wide
                       transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(186_100%_50%/0.4)]"
          >
            <Mail size={18} />
            Send Email
          </a>
        </div>

        <div data-fade className="mt-6 opacity-0">
          <p className="text-muted-foreground/60 text-xs font-mono mb-1">Or email directly:</p>
          <a
            href="mailto:dubeyalokkumar2005@gmail.com"
            className="text-primary/80 text-sm font-mono transition-colors duration-200 hover:text-primary"
          >
            dubeyalokkumar2005@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
