import { Download } from 'lucide-react';

const ResumeButton = () => {
  return (
    <section className="relative z-10 flex justify-center py-8 px-4">
      <a
        href="/resume/Alokkumar_Dubey_Resume.pdf"
        download
        className="inline-flex items-center gap-3 px-8 py-3.5 glass-panel neon-glow-purple text-secondary font-heading font-semibold tracking-wide
                   transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(270_80%_60%/0.4)]"
      >
        <Download size={18} />
        Download Resume
      </a>
    </section>
  );
};

export default ResumeButton;
