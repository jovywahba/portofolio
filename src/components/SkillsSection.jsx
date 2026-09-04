import { skillGroups } from "@/data/skills";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Grouped by what I actually do on a system, and limited to what the
          projects above genuinely demonstrate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="bg-card p-6 rounded-lg border border-border/60 card-hover text-left flex flex-col"
            >
              <h3 className="font-semibold text-lg">{group.title}</h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {group.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="tag-chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
