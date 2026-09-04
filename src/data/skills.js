/**
 * Skills, grouped by engineering competency area rather than rated by
 * percentage. Every entry below is backed by a project in src/data/projects.js
 * or by documented training — nothing is listed for keyword coverage.
 *
 * When a new project is added, add its verified technologies here too, so the
 * skills section and the project stacks never drift apart.
 */

export const skillGroups = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description:
      "End-to-end product work: interface, application logic, data layer and release.",
    skills: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description:
      "Server-side logic, REST endpoints and the rules that sit behind a product.",
    skills: [
      "REST APIs",
      "Next.js Route Handlers",
      "Express",
      "Server-side business logic",
      "Pricing & booking rules engines",
      "Tax, discount & deposit calculation",
      "Authentication & authorisation",
      "Role-based access control",
    ],
  },
  {
    id: "data",
    title: "Databases & Data",
    description:
      "Relational modelling, querying and keeping business rules close to the data.",
    skills: [
      "PostgreSQL",
      "Supabase",
      "PostgREST",
      "Firebase",
      "MongoDB",
      "Schema design",
      "Database-enforced constraints",
      "Data export & reporting",
    ],
  },
  {
    id: "infra",
    title: "Infrastructure & Deployment",
    description:
      "Getting systems onto real domains and keeping them running in production.",
    skills: [
      "Vercel",
      "Cloudflare",
      "Domain & DNS configuration",
      "Custom-domain routing",
      "Environment configuration",
      "Production deployment",
      "Git & GitHub",
    ],
  },
  {
    id: "integrations",
    title: "Systems & Integrations",
    description: "Wiring products into the third-party services they depend on.",
    skills: [
      "Google Calendar API",
      "Supabase Auth (OAuth, email verification)",
      "Transactional email (Resend)",
      "Payment gateway integration (Paymob)",
      "WhatsApp Business links",
      "Google Maps",
      "Third-party REST APIs",
      "Webhooks & callbacks",
    ],
  },
  {
    id: "product",
    title: "Product Engineering & Analytics",
    description:
      "Multi-tenant configuration, subscription tiers and measuring what ships.",
    skills: [
      "Multi-tenant / white-label configuration",
      "Subscription & plan gating",
      "Admin dashboards & internal tooling",
      "Audit logging",
      "PostHog",
      "Google Analytics 4",
      "Google Tag Manager",
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Mobile",
    description:
      "Interfaces that hold up on real devices, in two languages and both directions.",
    skills: [
      "Responsive UI",
      "Arabic / English bilingual UI",
      "RTL layout",
      "Accessibility basics",
      "React Native",
      "Expo",
      "Flutter",
      "HTML5 & CSS3",
      "Bootstrap",
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "How the work actually gets built and shipped.",
    skills: [
      "Git & GitHub",
      "VS Code",
      "AI-assisted development",
      "Figma",
      "Debugging & profiling",
      "Technical documentation",
    ],
  },
];
