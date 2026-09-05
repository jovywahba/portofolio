/**
 * Project data layer.
 *
 * Every entry follows one schema so the Projects grid, and the project detail
 * pages we add next, can read from the same source.
 *
 *   slug          stable id, also the future detail-page route
 *   title         product name
 *   url           public live URL ("" when there is none)
 *   repo          public source repo ("" when private or not published)
 *   image         primary card image, /projects/<slug>.webp
 *   images        extra screenshots for the detail page
 *   summary       1–2 sentences for the card: what it is + what it does
 *   role          how I contributed
 *   type          one of PROJECT_TYPES, shown as the badge on featured cards
 *   stack         verified technologies only — see VERIFICATION below
 *   highlights    concrete system capabilities, shown on the detail page
 *   problem       what the product exists to solve            (detail page)
 *   solution      what was built                              (detail page)
 *   architecture  how it fits together                        (detail page)
 *   integrations  third-party services wired in               (detail page)
 *   challenges    notable engineering problems                (detail page)
 *   outcomes      results — only with evidence, never invented
 *   featured      renders in "Selected Work" above the fold
 *   order         sort order within its group
 *
 * ORDER
 * The `order` of the seven featured projects is fixed and must stay identical
 * to the order of the Selected Engineering Projects section in cv/cv.html, so
 * the portfolio and the CV tell the same story:
 *   1 TPP Studios · 2 The Studio · 3 TPP Group · 4 TPP Intelligence
 *   5 ClinicPro   · 6 The Vow    · 7 The QR Gate
 *
 * VERIFICATION & PROVENANCE
 * Nothing reaches `stack` or the public copy unless it is established one of
 * two ways. `provenance` records which, per project — it is internal bookkeeping
 * and is never rendered:
 *
 *   sourceVerified   read from the application's own source repository
 *   ownerConfirmed   stated by Jovany about his own work
 *   observed         seen directly in the live product: response headers, build
 *                    output, network requests, or identifiers in the shipped
 *                    client bundle
 *   unverified       plausible but unestablished — excluded from `stack` and
 *                    from all public copy until confirmed
 *
 * `observed` and stronger may be published. `unverified` may not.
 *
 * Fields left as empty strings or arrays are placeholders for case studies not
 * yet written — they are not claims.
 */

export const PROJECT_TYPES = {
  PRODUCTION: "Production",
  INTERNAL_PLATFORM: "Production · Internal Platform",
  PUBLIC_PLATFORM: "Production · Public Platform",
  CLIENT: "Client / Production",
  ACADEMIC: "Academic / Training",
};

export const projects = [
  {
    slug: "tpp-studios",
    title: "TPP Studios",
    url: "https://studios.tpp.network",
    repo: "",
    image: "/projects/tpp-studios.webp",
    images: ["/projects/tpp-studios-2.webp"],
    summary:
      "Internal production booking and operations platform for managing studio sessions, resources and services. I worked across the full stack: the multi-step booking workflow, a configurable pricing engine, a database-driven studio catalogue, role-based administration, scheduling integrations and the operational tooling behind it.",
    role: "Full-Stack Software Engineering",
    type: PROJECT_TYPES.INTERNAL_PLATFORM,
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "REST API",
      "Supabase",
      "PostgreSQL",
      "Authentication & RBAC",
      "Google Calendar API",
      "Resend",
      "Paymob",
      "Vercel",
    ],
    highlights: [
      "Multi-step booking workflow covering date and time, guests, studio selection, equipment and crew, additional and extra services, file-delivery requirements and confirmation — the booking is assembled dynamically from what the user selects",
      "Configurable pricing engine: rules depend on selections and duration, and cover preparation time, overtime handling and rounding, external-team deposit percentage and general operational settings",
      "Database-driven studio catalogue — studios, equipment, extras, talent rooms, post-production packages, services and pricing rules are configured as data rather than hardcoded in the frontend",
      "Scheduling and availability management, with studios linked to calendar resources",
      "Internal booking workflows with role-aware approval and commercial rules, distinct from the external customer flow",
      "Role-based administration and operational permissions across the platform",
      "Administration layer for managing users, studios, equipment and extras, talent rooms, services, pricing, promo codes, booking configuration, booking status and operational settings",
      "Booking lifecycle states including approval, cancellation, rescheduling and failure handling",
      "Authenticated user accounts with a personal bookings area, booking history and management, and admin access gated by permission",
      "Notification flows for bookings and operational updates",
    ],
    problem:
      "Studio bookings were organised through a largely manual process. Sessions, studios, equipment, crew and additional services were coordinated outside a single system, which made availability, resource allocation and pricing hard to keep consistent, and left no structured record of a booking's state as it moved through approval.",
    solution:
      "A production booking and operations platform that gives company users one structured path from an empty session to a confirmed booking. A multi-step flow collects the date and time, guests, studio, equipment and crew, services and delivery requirements, assembling the booking dynamically as selections are made and pricing it from rules held in the database. Behind it sits an administration layer where the catalogue, pricing and operational settings are managed directly, so the business can change what it offers and what it charges without a code change.",
    architecture:
      "A Next.js application on Vercel, with server-side route handlers exposing the booking and catalogue APIs over a Supabase-hosted PostgreSQL database. The studio catalogue, extras, talent rooms, post-production packages, pricing rules and platform settings are all persisted as configurable records and read through a REST endpoint, so the frontend renders whatever the data describes. Authentication supports email/password and Google sign-in, with role-based permissions gating the administration and operations routes — /admin and /dashboard are route-guarded and redirect unauthenticated visitors to sign-in. Studios carry calendar identifiers so sessions reconcile against real availability, and email notification and payment integrations are wired into the booking workflow.",
    integrations: [
      "Google Calendar — studios linked to calendar resources for scheduling and availability",
      "Resend — booking and operational notification email (confirmed by Jovany; server-side, so not observable from the client)",
      "Paymob — payment integration within the broader booking platform",
      "Supabase Auth — email/password and Google sign-in",
    ],
    challenges: [
      "Modelling pricing as configurable data rather than code, so rules that depend on selections and duration — preparation time, overtime rounding, deposit percentages — stay editable without a redeploy",
      "Assembling a booking dynamically across a multi-step flow while keeping the running price and the selection state consistent at every step",
      "Separating internal commercial logic and approval workflow from the external customer booking path while both run on shared architecture",
      "Keeping studio availability coherent between the platform's own booking records and linked calendar resources",
      "Designing role-based permissions so administration, operations and ordinary booking users each see an appropriate surface",
    ],
    outcomes: [
      "Centralised studio booking into a single structured workflow",
      "Replaced fragmented manual booking steps with a guided multi-step flow",
      "Made studios, equipment, services and pricing configurable through data instead of code changes",
      "Connected scheduling and operational workflows to the booking record",
      "Gave operations a role-aware administration layer for managing resources, pricing and booking states",
      "Established the platform foundation that the external The Studio customer experience also builds on",
    ],
    featured: true,
    order: 1,
    provenance: {
      sourceVerified: [],
      ownerConfirmed: [
        "Internal/staff audience and internal approval workflow",
        "Booking step list and SSD/file-delivery requirement",
        "Configurable pricing rules incl. prep time, overtime, deposit pct",
        "Admin scope: users, studios, equipment, extras, talent rooms, services, pricing, promo codes, booking config and status",
        "Role set behind the platform",
        "Resend as the email provider",
        "Paymob as the payment provider",
      ],
      observed: [
        "Next.js on Vercel",
        "Supabase + PostgreSQL behind a REST catalogue endpoint",
        "Relational entities incl. pricing_rules, talent_rooms, post_production_packages",
        "Supabase Auth with email/password and Google sign-in",
        "/admin and /dashboard are route-guarded and redirect to /login",
        "gcal_calendar_id stored per studio",
        "ssd_fee and external_team_deposit_pct in pricing rules",
      ],
      unverified: [
        "Exact public step labels differ from the internal flow — the live public wizard shows 6 labelled steps (Date and time, Equipment, Setup, Talent room, Additional services, Guest invitations) with the guest count nested inside step 1",
        "Whether Paymob is live for internal bookings or only the external path",
        "InstaPay — an `instapay_account` field exists in platform settings, but Jovany has not confirmed it, so it is not claimed anywhere",
        "Whether row-level security is used alongside application-level RBAC",
      ],
    },
  },
  {
    slug: "the-studio",
    title: "The Studio",
    url: "https://the-studio.me",
    repo: "",
    image: "/projects/the-studio.webp",
    images: ["/projects/the-studio-2.webp", "/projects/the-studio-3.webp"],
    summary:
      "The public, customer-facing side of a full-stack production booking platform. External clients configure a studio session — time, studio, equipment, crew and services — through a dynamic booking journey priced by rule-based commercial logic, with customer accounts, calendar-backed availability, notifications and payment integration.",
    role: "Full-Stack Software Engineering",
    type: PROJECT_TYPES.PUBLIC_PLATFORM,
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "REST API",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Google Calendar API",
      "Resend",
      "Paymob",
      "Vercel",
    ],
    highlights: [
      "Self-service booking journey where a customer assembles a full production session rather than buying a single fixed product",
      "Rule-based pricing computed from the chosen configuration: studio base rate, duration tier, extras, post-production packages, talent rooms and file-delivery options, itemised into a transparent breakdown",
      "Duration-based commercial tiers — half-day and full-day rates with their own discount percentages, all held as configuration rather than code",
      "Bring-your-own equipment or crew as a booking option, which conditionally applies a refundable security deposit calculated from a configurable percentage",
      "Tax-aware totals — customer-facing prices and receipts are presented VAT-inclusive",
      "Promo code redemption validated server-side, returning the authoritative discount and final total",
      "Live availability checks per studio and per talent room before a slot can be selected",
      "Customer accounts with sign-in, email verification and a personal My Bookings area",
      "Booking selections survive sign-in — a customer asked to authenticate near checkout returns to a fully intact session rather than starting over",
      "Public-facing terms, privacy, refund and recording-consent flows",
      "Paymob checkout integration for card, mobile wallet and cash settlement",
      "Catalogue, pricing and operational settings are database-driven, so the commercial offering changes without a frontend release",
    ],
    problem:
      "Booking a production session is not buying a single product. A customer needs a studio, for a specific duration, with particular equipment, crew, services and delivery requirements — and the price depends on every one of those choices. Quoting that conversationally does not scale, leaves customers without a clear price until someone replies, and makes it hard to keep commercial rules consistent from one booking to the next.",
    solution:
      "A public booking platform where the customer configures the whole session online and sees the price update as they go. The flow collects date and time, guest and camera counts, studio, equipment and crew, additional and extra services, talent rooms and file-delivery requirements, then prices the result from rules held in the database — duration tier, discounts, deposits, taxes and promo codes included — and hands off to checkout. Customers keep an account with their booking history, and the catalogue and commercial rules stay configurable so the business can change its offering without a release.",
    architecture:
      "One booking platform serves two audiences. A shared core provides the configurable catalogue and data layer, the pricing and business-rule engine, the booking workflow, authentication and accounts, scheduling, notifications and payments. On top of that core sit two experiences: TPP Studios as the internal operational surface, and The Studio as the external commercial one. The split is enforced at sign-in — the application derives a domain type from the authenticating identity and routes staff and external customers to their own hosts, with a dedicated cross-host auth handoff endpoint and an auth audit trail. Technically it is a Next.js application on Vercel with server-side route handlers over Supabase-hosted PostgreSQL: the client renders a live quote from catalogue and pricing-rule data, while the server owns the authoritative numbers — promo validation returns the final total, and availability for studios and talent rooms is resolved server-side before a slot can be held.",
    integrations: [
      "Paymob — checkout integration presented for card, mobile wallet and cash",
      "Google Calendar — studios carry calendar identifiers used in scheduling and availability",
      "Supabase Auth — email/password with verification, and Google sign-in",
      "Resend — transactional booking and operational email (confirmed by Jovany; server-side, so not observable from the client)",
      "WhatsApp and Google Maps — enquiry and directions handoff",
    ],
    challenges: [
      "Configurable booking rather than a fixed product — a session combines time, studio, equipment, crew, services and delivery options, so the booking is assembled dynamically and every combination has to produce a valid, priceable result",
      "Pricing consistency — the same rules have to yield the same correct total no matter how many options are selected, which meant keeping the customer-facing quote and the server's authoritative total in agreement",
      "One platform, two commercial models — internal operations and external customers need different rules and permissions without forking the codebase, solved by identity-derived domain routing and a cross-host auth handoff",
      "Authentication without losing progress — a customer asked to sign in near checkout must return to an intact booking, handled with a persisted booking store, a resume-checkout flag and a return path carried through the auth redirect",
      "Operational configurability — pricing, studios, extras and services are business-owned data, so the offering changes without a frontend redeployment",
      "Scheduling correctness — bookings have to map to genuinely free studios and talent rooms, checked server-side before a slot is offered",
    ],
    outcomes: [
      "Created a self-service customer booking journey for a production studio",
      "Turned a manual quote-and-configure conversation into a structured digital workflow with a transparent, itemised price",
      "Reused one booking platform across internal operations and external customers instead of building two systems",
      "Centralised pricing, catalogue and commercial rules as configuration",
      "Connected booking, scheduling, notification and payment workflows into a single path",
      "Made studios and services changeable without hardcoding each offering in the frontend",
    ],
    featured: true,
    order: 2,
    provenance: {
      sourceVerified: [],
      ownerConfirmed: [
        "External/customer audience and its distinct commercial rules",
        "Resend as the email provider",
        "Paymob as the payment provider",
        "Google Calendar used in scheduling",
      ],
      observed: [
        "Next.js on Vercel; same deployment as the internal host",
        "Identity-derived staff/external domain typing and cross-host auth handoff",
        "Supabase Auth: signInWithPassword, Google OAuth, signUp, email verification",
        "Client-side quote engine over pricing_rules; server-authoritative totals via promo validation",
        "Half-day/full-day tiers with configurable discount percentages",
        "Conditional security deposit from external_team_deposit_pct",
        "VAT presented inclusive in customer totals",
        "Availability endpoints for studios and talent rooms",
        "Persisted booking store, resume-checkout flag and return path across sign-in",
        "My Bookings linked from the authenticated account menu",
      ],
      unverified: [
        "Whether Paymob is activated for live transactions — the checkout UI and payment_method capture are in the shipped client, but payment initiation is server-side and cannot be confirmed externally",
        "Whether the Google Calendar integration reads free/busy state or only writes events — availability is resolved by a server endpoint whose source is not observable",
        "Whether Supabase row-level security backs the API-layer authorisation",
        "Whether the first-time-user welcome email still exists in the current implementation",
      ],
    },
  },
  {
    slug: "tpp-group",
    title: "TPP Group",
    url: "https://tppgroup.co",
    repo: "",
    image: "/projects/tpp-group.webp",
    images: [],
    summary:
      "Corporate platform for a media intelligence group operating four business lines and 40+ Arabic content brands. A multi-section site covering the group, its platforms, brand portfolio, partners, newsletter capture and editorial content.",
    role: "Full-Stack Development",
    type: PROJECT_TYPES.CLIENT,
    stack: ["React", "Vite", "Supabase", "Cloudflare"],
    highlights: [
      "Multi-section routed application: about, platform, network, studio, agency, intelligence, partners, news and contact",
      "Brand portfolio with deep links to individual IP pages",
      "Newsletter capture and contact flows backed by a hosted database",
      "Served through Cloudflare",
    ],
    problem: "",
    solution: "",
    architecture: "",
    integrations: [],
    challenges: [],
    outcomes: [],
    featured: true,
    order: 3,
    unverified: [
      "Whether the newsletter/contact flow writes to Supabase or to another service",
      "Email provider — an earlier keyword match on 'resend' turned out to be Supabase's own resend() method, so no email service is claimed here",
      "Whether content is CMS-driven or committed to the repo",
      "Hosting origin behind Cloudflare",
    ],
  },
  {
    slug: "tpp-intelligence",
    title: "TPP Intelligence",
    url: "https://tppintelligence.io",
    repo: "",
    image: "/projects/tpp-intelligence.webp",
    images: [],
    summary:
      "Product platform for an Arabic audience-intelligence tool that measures behaviour across audio, video and social. Fully bilingual English/Arabic, with an interactive analytics presentation layer and a demo-request pipeline feeding the sales team.",
    role: "Full-Stack Development",
    type: PROJECT_TYPES.CLIENT,
    stack: [
      "Next.js",
      "React",
      "Vercel",
      "Google Tag Manager",
      "Google Analytics 4",
    ],
    highlights: [
      "Bilingual English/Arabic with a dedicated /ar locale and RTL layout",
      "Interactive charting for engagement rate, content volume and sentiment scoring",
      "Segmented product positioning for brands, agencies, media companies and creators",
      "Demo-request flow as the primary conversion path",
      "Analytics instrumented through Google Tag Manager and GA4",
    ],
    problem: "",
    solution: "",
    architecture: "",
    integrations: ["Google Tag Manager", "Google Analytics 4"],
    challenges: [],
    outcomes: [],
    featured: true,
    order: 4,
    unverified: [
      "Where demo requests are stored and how they are routed",
      "Whether the dashboard visuals are live data or a product presentation layer",
      "Charting library",
      "i18n approach",
    ],
  },
  {
    slug: "clinicpro",
    title: "ClinicPro",
    url: "https://clinicpro.me",
    repo: "",
    image: "/projects/clinicpro.webp",
    images: ["/projects/clinicpro-2.webp"],
    summary:
      "Bilingual clinic management SaaS for independent practices. Handles appointments and a live queue, patient records and prescriptions, branded receipts, income tracking and multi-user clinic teams, on a free tier plus paid subscription plans.",
    role: "Full-Stack Development",
    type: PROJECT_TYPES.PRODUCTION,
    stack: [
      "Next.js",
      "React",
      "Supabase",
      "PostgreSQL",
      "PostgREST",
      "Vercel",
      "PostHog",
    ],
    highlights: [
      "Full Arabic/English product with RTL layout and Arabic numerals throughout — not a translated marketing page",
      "Live queue with automatic ticket numbers, one-tap status changes and printable day schedules",
      "Scheduling rules enforced in the database — per-day hours, special dates and blocked breaks, so out-of-hours bookings cannot be created",
      "Patient records: history, complaints, diagnoses, medications and follow-ups",
      "Clinic-branded receipts carrying logo, doctor details and queue number",
      "Role-based access for doctors and reception staff, with internal team chat and unread counts",
      "Income tracking with revenue charts, Excel export and a full activity log on paid tiers",
      "Free tier plus monthly, annual and lifetime subscription plans",
      "Product analytics via PostHog; country detection for locale and currency",
    ],
    problem: "",
    solution: "",
    architecture: "",
    integrations: ["PostHog", "WhatsApp", "IP geolocation"],
    challenges: [],
    outcomes: [],
    featured: true,
    order: 5,
    unverified: [
      "Payment/subscription provider — checkout sits behind authentication",
      "Whether row-level security is used to isolate clinics",
      "Auth provider",
      "Whether the marketing figures on the site are measured or illustrative — they are NOT claimed anywhere in this portfolio or the CV",
    ],
  },
  {
    slug: "the-vow",
    title: "The Vow",
    url: "https://thevow.life",
    repo: "",
    image: "/projects/the-vow.webp",
    images: [],
    summary:
      "Digital wedding invitation platform built around per-guest tracking. Each guest gets a unique private link, and the host follows attendance live from a dashboard instead of chasing replies — with a template engine of 28 designs that recombine across colour themes and font pairings.",
    role: "Full-Stack Development",
    type: PROJECT_TYPES.PRODUCTION,
    stack: ["Next.js", "React", "Vercel"],
    highlights: [
      "Unique tokenised invite link per guest — guests reply without creating an account",
      "Live RSVP dashboard tracking attending, declined and pending",
      "Plus-one and family responses handled per guest",
      "Invitation open tracking, so hosts can follow up only with guests who have not seen it",
      "Template engine: 28 designs × 14 colour themes × 8 font pairings, personalised with each guest's name",
      "One-tap WhatsApp share that generates the message and the guest's link",
      "Host authentication and an event creation flow, plus an editorial blog",
    ],
    problem: "",
    solution: "",
    architecture: "",
    integrations: ["WhatsApp"],
    challenges: [],
    outcomes: [],
    featured: true,
    order: 6,
    unverified: [
      "Database and auth provider",
      "How open tracking is implemented",
      "Whether the product is monetised",
    ],
  },
  {
    slug: "the-qr-gate",
    title: "The QR Gate",
    url: "https://theqrgate.com",
    repo: "https://github.com/jovywahba/The-QR-Gate",
    image: "/projects/the-qr-gate.webp",
    images: [],
    summary:
      "Freemium QR code SaaS covering 16 code types, from plain URLs to vCards, WiFi credentials, menus and coupons. Dynamic codes resolve through hosted mobile landing pages so the destination stays editable after printing, with scan analytics on the paid tier.",
    role: "Full-Stack Development",
    type: PROJECT_TYPES.PRODUCTION,
    stack: ["Next.js", "React", "Vercel"],
    highlights: [
      "16 QR types: website, PDF, link list, vCard, business, video, images, Facebook, Instagram, social, WhatsApp, MP3, menu, apps, coupon and WiFi",
      "Four-step generator: pick type, add content, style the code, download",
      "Dynamic hosted codes — the QR points at a hosted landing page, so the destination can change after the code is printed",
      "Generated mobile landing pages rendered per code type, with live preview while editing",
      "PNG and SVG export",
      "Free tier capped at 3 active codes; Pro unlocks unlimited codes and scan analytics",
      "Authenticated dashboard, product docs, blog and a status page",
    ],
    problem: "",
    solution: "",
    architecture: "",
    integrations: [],
    challenges: [],
    outcomes: [],
    featured: true,
    order: 7,
    unverified: [
      "Payment/subscription provider",
      "Database and auth provider",
      "How scan analytics are captured and stored",
      "QR rendering library",
    ],
  },

  /* ---------- Earlier work: university, ITI training and team projects ---------- */

  {
    slug: "enjez-web",
    title: "Enjez — Services Booking Web App",
    url: "",
    repo: "https://github.com/ahmedshaban-blip/Enjez",
    image: "/projects/enjez-web.webp",
    images: [],
    summary:
      "Services booking web app where users browse providers, make reservations and track their bookings, with authentication and real-time data.",
    role: "Frontend & Integration",
    type: PROJECT_TYPES.ACADEMIC,
    stack: ["React", "Vite", "Tailwind CSS", "Firebase", "Supabase"],
    highlights: [],
    problem: "",
    solution: "",
    architecture: "",
    integrations: [],
    challenges: [],
    outcomes: [],
    featured: false,
    order: 8,
    unverified: [],
  },
  {
    slug: "enjez-mobile",
    title: "Enjez — Services Booking Mobile App",
    url: "",
    repo: "https://github.com/ahmedshaban-blip/EnjezMobileAppVersion",
    image: "/projects/enjez-mobile.webp",
    images: [],
    summary:
      "Mobile client for the Enjez booking platform, letting users browse services and book on the go with authentication and real-time data sync.",
    role: "Mobile Development",
    type: PROJECT_TYPES.ACADEMIC,
    stack: ["React Native", "Firebase", "Supabase"],
    highlights: [],
    problem: "",
    solution: "",
    architecture: "",
    integrations: [],
    challenges: [],
    outcomes: [],
    featured: false,
    order: 9,
    unverified: [],
  },
  {
    slug: "movie-app",
    title: "Movie App",
    url: "",
    repo: "", // repo exists but is private -> the public link 404s; make it public to restore the GitHub button
    image: "/projects/movie-app.webp",
    images: [],
    summary:
      "Mobile movie browser showing titles, ratings and cast details, fetching live data from a public movie API.",
    role: "Mobile Development",
    type: PROJECT_TYPES.ACADEMIC,
    stack: ["React Native", "Expo", "REST API"],
    highlights: [],
    problem: "",
    solution: "",
    architecture: "",
    integrations: [],
    challenges: [],
    outcomes: [],
    featured: false,
    order: 10,
    unverified: [],
  },
  {
    slug: "e-learning",
    title: "React E-Learning Web",
    url: "",
    repo: "", // repo exists but is private -> the public link 404s; make it public to restore the GitHub button
    image: "/projects/e-learning.webp",
    images: [],
    summary:
      "Component-based single-page app with authentication and course browsing, built with responsive layouts and form validation over Firebase.",
    role: "Frontend Development",
    type: PROJECT_TYPES.ACADEMIC,
    stack: ["React", "Firebase"],
    highlights: [],
    problem: "",
    solution: "",
    architecture: "",
    integrations: [],
    challenges: [],
    outcomes: [],
    featured: false,
    order: 11,
    unverified: [],
  },
  {
    slug: "ecommerce-mobile",
    title: "E-commerce Mobile App",
    url: "",
    repo: "https://github.com/jovywahba/react-native-G",
    image: "/projects/ecommerce-rn.webp",
    images: [],
    summary:
      "E-commerce app with product listing, cart and image upload flows, using device permissions and list virtualisation.",
    role: "Mobile Development",
    type: PROJECT_TYPES.ACADEMIC,
    stack: ["React Native", "Expo", "ImagePicker", "FlatList"],
    highlights: [],
    problem: "",
    solution: "",
    architecture: "",
    integrations: [],
    challenges: [],
    outcomes: [],
    featured: false,
    order: 12,
    unverified: [],
  },
  {
    slug: "ecommerce-web",
    title: "E-commerce Web",
    url: "",
    repo: "https://github.com/ahmedshaban-blip/E-Commerce-WebSite",
    image: "/projects/ecommerce-web.webp",
    images: [],
    summary:
      "Responsive product catalogue with product cards and basic cart interactions, built with Bootstrap components and custom JavaScript.",
    role: "Frontend Development",
    type: PROJECT_TYPES.ACADEMIC,
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    highlights: [],
    problem: "",
    solution: "",
    architecture: "",
    integrations: [],
    challenges: [],
    outcomes: [],
    featured: false,
    order: 13,
    unverified: [],
  },
  {
    slug: "social-app",
    title: "Social App",
    url: "",
    repo: "https://github.com/Mustafa1Mohamed/NodeJsProject",
    image: "/projects/social-app.webp",
    images: [],
    summary:
      "Team project exploring authentication, posts and comments on a Node/Express backend, structured around REST routing and MVC.",
    role: "Backend Development (team project)",
    type: PROJECT_TYPES.ACADEMIC,
    stack: ["Node.js", "Express", "MongoDB", "REST API", "MVC"],
    highlights: [],
    problem: "",
    solution: "",
    architecture: "",
    integrations: [],
    challenges: [],
    outcomes: [],
    featured: false,
    order: 14,
    unverified: [],
  },
];

const byOrder = (a, b) => a.order - b.order;

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort(byOrder);
export const earlierProjects = projects
  .filter((p) => !p.featured)
  .sort(byOrder);
export const getProject = (slug) => projects.find((p) => p.slug === slug);
