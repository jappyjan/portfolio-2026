import { useEffect, useState } from "react";
import raccoonLogo from "@/assets/raccoon-logo.png";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      {/* Floating elements with parallax */}
      <div 
        className="absolute top-20 left-[10%] text-6xl opacity-20 text-primary"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        {"</>"}
      </div>
      <div 
        className="absolute top-40 right-[15%] text-4xl opacity-15 text-accent"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        {"{ }"}
      </div>
      <div 
        className="absolute bottom-40 left-[20%] w-20 h-20 border border-primary/20 rounded-full"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      />
      <div 
        className="absolute top-1/3 right-[10%] w-32 h-32 border border-accent/20 rounded-lg rotate-45"
        style={{ transform: `translateY(${scrollY * 0.25}px) rotate(45deg)` }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Raccoon logo */}
        <div 
          className="mb-8 inline-block"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <img 
            src={raccoonLogo} 
            alt="JanJaap's raccoon mascot" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto glow-primary rounded-2xl animate-fade-in invert"
          />
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-gradient">JanJaap</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Curious by nature. Builder by choice.
        </p>

        {/* Sub-tagline */}
        <p className="text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Nocturnal tinkerer crafting digital experiences — always exploring, 
          always building, never satisfied with "good enough."
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <a 
            href="#projects" 
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 glow-primary"
          >
            See my creations
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all hover:scale-105"
          >
            Let's connect
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
