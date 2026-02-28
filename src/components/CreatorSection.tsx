import { Youtube } from 'lucide-react';

const CreatorSection = () => {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground neon-text-purple mb-2">
          Creator &amp; Vlogger
        </h2>
        <p className="text-primary font-heading text-sm md:text-base tracking-wide mb-6">
          Alokkumar Dubey Vlogs
        </p>

        <div className="glass-panel p-6 md:p-8 text-left space-y-4 mb-8">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            I also run a personal YouTube channel where I document my fitness journey, travel experiences, 
            daily life, and self-improvement routines.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Through my vlogs, I share discipline, growth, consistency, and real-life experiences as a 
            student and aspiring engineer.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            This channel reflects my mindset of continuous improvement — both physically and professionally.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://youtube.com/channel/UCzjgWY4bwOfszdKfAMDgzTw"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-3 glass-panel neon-glow-purple text-secondary font-heading font-medium tracking-wide
                       transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(270_80%_60%/0.5)]"
          >
            <Youtube size={22} className="transition-transform duration-300 group-hover:scale-110" />
            Watch My Journey
          </a>

          <a
            href="https://youtube.com/channel/UCzjgWY4bwOfszdKfAMDgzTw"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube Channel"
            className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-muted-foreground
                       transition-all duration-300 hover:text-secondary hover:scale-110 neon-glow-purple
                       hover:shadow-[0_0_25px_hsl(270_80%_60%/0.5)] animate-pulse-glow"
          >
            <Youtube size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
