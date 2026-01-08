import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Years tinkering", value: "10+", icon: "🔧" },
  { label: "Projects shipped", value: "50+", icon: "🚀" },
  { label: "Cups of late-night coffee", value: "∞", icon: "☕" },
  { label: "Curiosity level", value: "MAX", icon: "🦝" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text content */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold">
              About the <span className="text-gradient">tinkerer</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Like my mascot, I'm endlessly curious — digging into codebases, 
                exploring new tech, and building things that actually work. 
                I'm not satisfied until I understand <em>how</em> something ticks.
              </p>
              <p>
                As a maker with a developer's heart, I thrive in the space between 
                idea and execution. Whether it's a midnight coding session or an 
                early morning brainstorm, I'm always looking for the next interesting 
                problem to solve.
              </p>
              <p>
                Resourceful by nature, I believe the best solutions come from 
                creative constraints and genuine curiosity. If there's a way to 
                make it better, faster, or more elegant — I'll find it.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-105 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
