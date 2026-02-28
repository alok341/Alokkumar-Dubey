import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ProfessionalSummary = ({ isOpen, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current && overlayRef.current) {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    if (modalRef.current && overlayRef.current) {
      gsap.to(modalRef.current, { opacity: 0, scale: 0.95, duration: 0.3 });
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, onComplete: onClose });
    }
  };

  return (
    <div ref={overlayRef} className="fixed inset-0 z-40 flex items-center justify-center px-4" onClick={handleClose}>
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      <div
        ref={modalRef}
        className="glass-modal p-8 max-w-lg w-full relative z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>
        <h2 className="font-heading text-xl font-semibold text-primary mb-4 neon-text-cyan">
          Professional Summary
        </h2>
        <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
          Second-Year Information Technology student specializing in Java Full Stack Development. 
          Experienced in designing and building scalable backend systems using Spring Boot, Spring Security, 
          REST APIs, and Microservices, along with frontend development using React.js. Strong understanding 
          of database design with MySQL and MongoDB. Focused on writing clean, production-level code and 
          building secure, high-performance applications.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalSummary;
