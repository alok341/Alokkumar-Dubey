import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';

const links = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/alok341' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/alokkumar-ajaykumar-dubey-2b68282b9' },
  { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/rise.with.alok' },
  { icon: Youtube, label: 'YouTube', url: 'https://youtube.com/channel/UCzjgWY4bwOfszdKfAMDgzTw' },
];

const SocialLinks = () => {
  return (
    <section className="relative z-10 py-16 px-4">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {links.map(({ icon: Icon, label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-muted-foreground
                       transition-all duration-300 hover:text-primary hover:scale-110 neon-glow-cyan
                       hover:shadow-[0_0_25px_hsl(186_100%_50%/0.5)]"
          >
            <Icon size={22} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
