import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack web application built during a late-night coding session. Features real-time collaboration and dark mode (obviously).",
    tech: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Midnight Toolkit",
    description: "A collection of developer tools I built because the existing ones weren't quite right. Now used by hundreds of nocturnal coders.",
    tech: ["TypeScript", "Rust", "CLI"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Curious Bot",
    description: "An AI-powered assistant that learns from user interactions. Built it to scratch my own itch, turned out others wanted it too.",
    tech: ["Python", "OpenAI", "FastAPI", "React"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-primary/20 to-purple-500/20",
  },
  {
    title: "Open Source Contrib",
    description: "Various contributions to projects I use and love. Because sharing is caring, and curiosity is contagious.",
    tech: ["Various", "Open Source", "Community"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-cyan-500/20 to-primary/20",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-24 md:py-32 relative"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Late-night <span className="text-gradient">creations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Things I've built while the rest of the world sleeps. Each project 
            started with curiosity and ended with something useful.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10 p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Explore
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div 
                className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 70%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
