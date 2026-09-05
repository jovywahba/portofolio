import { Server, Database, Workflow } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              Building software systems that run in production
            </h3>

            <p className="text-muted-foreground">
              I&apos;m Jovany Raafat Wahba, a Systems &amp; Software Engineer
              based in Cairo, with a B.Sc. in Computer Science from Nile
              University and specialised training from the ITI Frontend &amp;
              Mobile Platform track.
            </p>

            <p className="text-muted-foreground">
              My work covers whole systems rather than interfaces alone. Across
              seven production products I&apos;ve built multi-step booking and
              scheduling engines, a multi-tenant healthcare platform, an
              audience-intelligence product with Python data pipelines and an AI
              analysis layer, and SaaS tools with subscription billing — owning
              the application, the API and business logic, the relational data
              model and access control, the integrations, and the deployment.
            </p>

            <p className="text-muted-foreground">
              I work mainly with TypeScript across Next.js and React, Python for
              data ingestion, and PostgreSQL through Supabase with row-level
              security — shipped on Vercel and Cloudflare. I care most about the
              parts that keep a system correct: data isolation, verified
              payments, safe redirects and access control.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>

              <a
                href="/Jovany_Raafat_Wahba_CV.pdf"
                download="Jovany_Raafat_Wahba_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>

            <div className="pt-2 text-sm text-muted-foreground">
              Cairo, Egypt ·{" "}
              <a
                className="text-primary hover:underline"
                href="mailto:jovywahba@gmail.com"
              >
                jovywahba@gmail.com
              </a>
            </div>
          </div>

          {/* Right side cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover border border-border/60">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Application, API and business logic built together — from
                    the booking flow a customer sees down to the rules that
                    price it on the server.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover border border-border/60">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data &amp; Backend</h4>
                  <p className="text-muted-foreground">
                    Relational schema design on PostgreSQL and Supabase, with
                    authentication, user roles and constraints enforced close to
                    the data.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover border border-border/60">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Integrations &amp; Deployment
                  </h4>
                  <p className="text-muted-foreground">
                    Calendar, payment, email and analytics services wired in,
                    then shipped to real domains on Vercel and Cloudflare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
