import { Github, ExternalLink } from "lucide-react";
import { featuredProjects, earlierProjects } from "@/data/projects";

/**
 * Featured cards tell the full production story. Earlier (student/team) work
 * renders in a compact variant so it never competes with Selected Work: no
 * image, no type badge, tighter type and a trimmed set of chips.
 */
const ProjectCard = ({ project, featured = false }) => {
  // `url` is the schema field; `live` is accepted as an alias so either works.
  const liveUrl = project.url || project.live || "";
  const repoUrl = project.repo || "";
  // Cards show a representative subset; the full verified stack lives in data.
  const chips = project.cardStack || project.stack;

  return (
    <article
      className={
        "bg-card rounded-xl overflow-hidden border card-hover flex flex-col text-left " +
        (featured ? "border-primary/25" : "border-border/60")
      }
    >
      {featured && (
        <div className="relative h-48 w-full bg-secondary/40 overflow-hidden">
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width="1440"
            height="900"
            className="h-full w-full object-cover object-top"
            loading="lazy"
            decoding="async"
          />
          <span className="absolute top-3 left-3 text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-background/85 text-primary border border-primary/30 backdrop-blur-sm">
            {project.type}
          </span>
        </div>
      )}

      <div className={featured ? "p-6 flex flex-col flex-1" : "p-5 flex flex-col flex-1"}>
        <h3 className={featured ? "text-lg font-semibold" : "text-base font-semibold"}>
          {project.title}
        </h3>

        <p className="mt-1 text-xs uppercase tracking-wide text-primary/90">
          {project.role}
        </p>

        <p
          className={
            "mt-3 text-sm text-muted-foreground " + (featured ? "" : "line-clamp-3")
          }
        >
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((tech) => (
            <span key={tech} className="tag-chip">
              {tech}
            </span>
          ))}
        </div>

        {/* Links come from the data layer: a project may have a repo, a live
            URL, both, or neither — nothing renders for a link that doesn't exist. */}
        {(repoUrl || liveUrl) && (
          <div className="mt-auto pt-6 flex flex-wrap items-center gap-3">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View the ${project.title} source on GitHub (opens in a new tab)`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Github className="h-4 w-4 shrink-0" aria-hidden="true" />
                Go to GitHub
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open the ${project.title} live site (opens in a new tab)`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
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
          Seven products I build and operate in production — booking and clinic
          platforms, an audience-intelligence system, and SaaS tools on live
          domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-border/50">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-center text-foreground/90">
            Earlier <span className="text-primary">Projects</span>
          </h3>

          <p className="text-center text-sm text-muted-foreground mb-10 max-w-2xl mx-auto">
            University, ITI training and team projects.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {earlierProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
