const learningItems = [
  'System Design',
  'Advanced Spring Security',
  'Microservices Architecture',
  'Docker & Deployment',
];

const CurrentlyLearning = () => {
  return (
    <section className="relative z-10 py-16 px-4 max-w-md mx-auto">
      <div className="glass-panel p-6 text-center">
        <h3 className="font-heading text-sm font-semibold tracking-widest uppercase text-secondary mb-5">
          Currently Learning
        </h3>
        <ul className="space-y-2">
          {learningItems.map((item) => (
            <li key={item} className="font-mono text-sm text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
