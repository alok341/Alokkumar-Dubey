import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { X } from 'lucide-react';

interface Skill {
  name: string;
  description: string;
}

interface SkillOrbit {
  label: string;
  color: string;
  skills: Skill[];
}

const orbits: SkillOrbit[] = [
  {
    label: 'Programming',
    color: 'hsl(186, 100%, 50%)',
    skills: [
      { name: 'Java', description: 'Primary language for backend development. Proficient in Java 17+ with OOP, collections, streams, and concurrency.' },
      { name: 'Python', description: 'Used for scripting, automation, and data processing tasks.' },
    ],
  },
  {
    label: 'Backend',
    color: 'hsl(270, 80%, 60%)',
    skills: [
      { name: 'Spring Boot', description: 'Core framework for building production-grade REST APIs and microservices.' },
      { name: 'Spring Security', description: 'Implementing JWT authentication, OAuth2, and role-based access control.' },
      { name: 'REST APIs', description: 'Designing and building RESTful services following industry best practices.' },
      { name: 'JPA / Hibernate', description: 'ORM framework for database operations with entity mapping and query optimization.' },
      { name: 'Microservices', description: 'Architecting distributed systems with service discovery and API gateways.' },
    ],
  },
  {
    label: 'Frontend',
    color: 'hsl(186, 100%, 50%)',
    skills: [
      { name: 'React.js', description: 'Building modern, component-based user interfaces with hooks and state management.' },
    ],
  },
  {
    label: 'Database',
    color: 'hsl(270, 80%, 60%)',
    skills: [
      { name: 'MySQL', description: 'Relational database design, complex queries, indexing, and performance tuning.' },
      { name: 'MongoDB', description: 'NoSQL database for flexible document-based data storage and aggregation pipelines.' },
    ],
  },
];

const SkillsGalaxy = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedSkill && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power3.out' }
      );
    }
  }, [selectedSkill]);

  return (
    <section ref={sectionRef} className="relative z-10 py-20 px-4 max-w-5xl mx-auto">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center text-foreground mb-16 neon-text-cyan">
        Skills Galaxy
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {orbits.map((orbit) => (
          <div key={orbit.label} className="glass-panel p-6">
            <h3
              className="font-heading text-sm font-semibold tracking-widest uppercase mb-5"
              style={{ color: orbit.color }}
            >
              {orbit.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {orbit.skills.map((skill) => (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className="px-4 py-2 rounded-lg border border-border bg-muted/40 text-foreground/80 font-mono text-sm
                             transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary
                             hover:shadow-[0_0_15px_hsl(186_100%_50%/0.3)] cursor-pointer"
                >
                  {skill.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div className="fixed inset-0 z-40 flex items-center justify-center px-4" onClick={() => setSelectedSkill(null)}>
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
          <div
            ref={modalRef}
            className="glass-modal p-6 max-w-sm w-full relative z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            <h3 className="font-heading text-lg font-semibold text-primary mb-2">{selectedSkill.name}</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">{selectedSkill.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillsGalaxy;
