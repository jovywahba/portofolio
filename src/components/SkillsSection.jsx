import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", level: 90, category: "frontend" },
  { name: "HTML5", level: 90, category: "frontend" },
  { name: "CSS", level: 85, category: "frontend" },
  { name: "CSS3", level: 85, category: "frontend" },
  { name: "JavaScript", level: 88, category: "frontend" },
  { name: "TypeScript", level: 78, category: "frontend" },
  { name: "React", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 86, category: "frontend" },
  { name: "Next.js", level: 72, category: "frontend" },
  { name: "jQuery", level: 70, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },
  { name: "Angular", level: 70, category: "frontend" },
  { name: "Responsive Design", level: 90, category: "frontend" },

  // Mobile
  { name: "React Native", level: 82, category: "mobile" },
  { name: "Flutter", level: 78, category: "mobile" },
  { name: "Dart", level: 75, category: "mobile" },

  // Backend / Services
  { name: "Node.js", level: 75, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },
  { name: "Firebase", level: 82, category: "backend" },
  { name: "Supabase", level: 78, category: "backend" },

  // Tools
  { name: "Git / GitHub", level: 88, category: "tools" },
  { name: "Figma", level: 78, category: "tools" },
  { name: "VS Code", level: 92, category: "tools" },
];

const categories = ["all", "frontend", "mobile", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
