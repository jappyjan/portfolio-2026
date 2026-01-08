import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"],
  },
  {
    title: "Currently Exploring",
    icon: "🔍",
    skills: ["Rust", "AI/ML", "Web3", "Edge Computing"],
  },
];

const SkillsSection = () => {
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
      id="skills" 
      className="py-24 md:py-32 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tools in my <span className="text-gradient">paws</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Like any curious raccoon, I've collected quite a toolkit over the years. 
            Here's what I tinker with most.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-sm text-muted-foreground rounded-lg hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    style={{ 
                      animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms` 
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
