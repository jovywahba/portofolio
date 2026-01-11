import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enjez – Services Booking Web App",
    description:
      "Full services booking web app where users explore providers, make reservations, and track bookings. Includes authentication, real-time data, and responsive UI.",
    tech: ["React", "Vite", "Tailwind CSS", "Firebase", "Supabase"],
    image: "/projects/enjez-web.png",
    github: "https://github.com/ahmedshaban-blip/Enjez",
    live: "",
  },
  {
    title: "Enjez – Services Booking Mobile App",
    description:
      "Mobile version of Enjez that lets users browse services and book on the go. Integrated authentication and real-time data sync for a smooth experience.",
    tech: ["React Native", "Firebase", "Supabase"],
    image: "/projects/enjez-mobile.png",
    github: "https://github.com/ahmedshaban-blip/EnjezMobileAppVersion",
    live: "",
  },
  {
    title: "Movie App",
    description:
      "Custom-designed movie app that shows movies, ratings, and cast details. Uses a public movie API to fetch real-time data and present it in a clean UI.",
    tech: ["React Native", "Expo", "REST API"],
    image: "/projects/movie-app.png",
    github: "https://github.com/jovywahba/movieapp-react",
    live: "",
  },
  {
    title: "React E-Learning Web",
    description:
      "Component-based SPA with authentication and course browsing. Built responsive layouts, form validation, and integrated Firebase for auth/data.",
    tech: ["React", "Firebase", "Responsive UI"],
    image: "/projects/e-learning.png",
    github: "https://github.com/jovywahba/project-react-elearning-",
    live: "",
  },
  {
    title: "E-commerce Mobile/Web",
    description:
      "E-commerce app with product listing, cart, and image upload flows. Used permissions & ImagePicker, optimized lists with FlatList, and structured modules under src/.",
    tech: ["React Native", "Expo", "ImagePicker", "FlatList"],
    image: "/projects/ecommerce-rn.png",
    github: "https://github.com/jovywahba/react-native-G",
    live: "",
  },
  {
    title: "E-commerce Web",
    description:
      "Responsive catalog with product cards and basic cart interactions built using Bootstrap components and custom JavaScript.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "/projects/ecommerce-web.png",
    github: "https://github.com/ahmedshaban-blip/E-Commerce-WebSite/tree/main",
    live: "",
  },
  {
    title: "Social App (Facebook-style)",
    description:
      "Team project exploring authentication, posts, comments, and real-time patterns. Practiced REST APIs, routing, and MVC structure.",
    tech: ["Node.js", "Express", "REST APIs", "MVC"],
    image: "/projects/social-app.png",
    github: "https://github.com/Mustafa1Mohamed/NodeJsProject",
    live: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-xl overflow-hidden border border-white/5 card-hover flex flex-col"
            >
              {/* Image */}
              <div className="h-48 w-full bg-secondary/30 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">{p.title}</h3>

                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {p.description}
                </p>

                {/* Tech */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-secondary/60 text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto pt-6 flex flex-wrap gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition"
                    >
                      <Github className="h-4 w-4" />
                      Go to GitHub
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
