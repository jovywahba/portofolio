import { Github, ExternalLink } from "lucide-react";
import { featuredProjects, earlierProjects } from "@/data/projects";

const ProjectCard = ({ project, featured = false }) => {
  // `url` is the schema field; `live` is accepted as an alias so either name works.
  const liveUrl = project.url || project.live || "";
  const repoUrl = project.repo || "";

  return (
    <article
      className={
        "bg-card rounded-xl overflow-hidden border card-hover flex flex-col text-left " +
        (featured ? "border-primary/25" : "border-border/60")
      }
    >
      <div className="relative h-48 w-full bg-secondary/40 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          width="1440"
          height="900"
          className="h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
        {featured && (
          <span className="absolute top-3 left-3 text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-background/85 text-primary border border-primary/30 backdrop-blur-sm">
            {project.type}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold">{project.title}</h3>

        <p className="mt-1 text-xs uppercase tracking-wide text-primary/90">
          {project.role}
        </p>

        <p className="mt-3 text-sm text-muted-foreground">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="tag-chip">
              {tech}
            </span>
          ))}
        </div>

        {/* Links come from the data layer. A project may have a repo, a live URL,
          both, or neither — nothing is rendered for a link that doesn't exist. */}
        {(repoUrl || liveUrl) && (
          <div className="mt-auto pt-6 flex flex-wrap items-center gap-3">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Github className="h-4 w-4 shrink-0" />
                Go to GitHub
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live site in a new tab`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ExternalLink className="h-4 w-4 shrink-0" />
                Open Link
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Selected <span className="text-primary">Work</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Production systems I build and operate — booking platforms, clinic
          software and SaaS products running on live domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Earlier <span className="text-primary">Projects</span>
          </h3>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            University, ITI training and team projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 opacity-90">
            {earlierProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
