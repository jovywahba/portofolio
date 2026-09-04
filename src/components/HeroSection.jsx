import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Jovany</span>
            <span className="text-gradient ml-3 opacity-0 animate-fade-in-delay-1">
              Wahba
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary font-medium opacity-0 animate-fade-in-delay-2">
            Systems &amp; Software Engineer
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build and run complete software systems — full-stack applications,
            booking and workflow platforms, internal tooling and the APIs,
            databases, integrations and infrastructure behind them. Several are
            live in production today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
