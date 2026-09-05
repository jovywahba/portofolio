/**
 * Skills, grouped by competency area rather than rated by percentage.
 *
 * Every entry is backed by at least one production project in
 * src/data/projects.js (or documented training). Nothing is listed for keyword
 * coverage. When a project's verified stack changes, update it here too so the
 * skills section and the project stacks never drift apart.
 */

export const skillGroups = [
  {
    id: "languages",
    title: "Languages",
    description: "The languages I build and query systems in.",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "Dart"],
  },
  {
    id: "frontend",
    title: "Frontend & Product",
    description: "Interfaces that hold up on real devices, in two languages.",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Responsive UI",
      "RTL / i18n",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "The logic and endpoints behind a product.",
    skills: [
      "Node.js",
      "REST APIs",
      "Server Actions / Route Handlers",
      "Business-rule & pricing engines",
      "Webhooks",
      "OAuth 2.0",
    ],
  },
  {
    id: "data",
    title: "Databases & Data",
    description: "Relational modelling with the rules kept close to the data.",
    skills: [
      "PostgreSQL",
      "Supabase",
      "Row-Level Security",
      "PostgREST",
      "Data modelling",
      "Data pipelines",
    ],
  },
  {
    id: "integrations",
    title: "Auth, Systems & Integrations",
    description: "Access control and the third-party services products depend on.",
    skills: [
      "Supabase Auth",
      "Role-based access control",
      "Stripe",
      "Paymob",
      "Google Calendar",
      "Resend",
    ],
  },
  {
    id: "data-ai",
    title: "Data & AI",
    description: "Turning collected data into analysis and decisions.",
    skills: [
      "Analytics systems",
      "Anthropic API",
      "OpenAI embeddings",
      "Semantic search",
      "Reporting pipelines",
      "PostHog",
    ],
  },
  {
    id: "infra",
    title: "Infrastructure & Tooling",
    description: "Getting systems onto real domains and keeping them healthy.",
    skills: [
      "Vercel",
      "Cloudflare",
      "Git & GitHub",
      "GitHub Actions",
      "Playwright",
      "Vitest",
    ],
  },
];
