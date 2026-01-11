import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Frontend & Mobile Developer building real products
            </h3>

            <p className="text-muted-foreground">
              I’m Jovany Raafat Wahba — a frontend & mobile developer with a B.Sc.
              in Computer Science from Nile University, and specialized training
              from the ITI Frontend & Mobile Platform track. I build responsive,
              accessible UIs and ship clean, structured applications.
            </p>

            <p className="text-muted-foreground">
              I work mainly with React, React Native, and Flutter, and I’m
              experienced using Firebase and Supabase for authentication,
              databases, and storage. I also use AI-powered coding assistants to
              speed up delivery, debugging, and testing.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
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

            <div className="pt-2 text-sm text-muted-foreground text-center">
              Cairo, Egypt •{" "}
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
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive, accessible interfaces using HTML5/CSS3,
                    JavaScript, and modern frameworks like React.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobile Apps</h4>
                  <p className="text-muted-foreground">
                    Developing mobile experiences with React Native & Flutter,
                    integrating APIs, auth, and smooth UI flows.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Real Projects & Internships
                  </h4>
                  <p className="text-muted-foreground">
                    Hands-on experience from IT internships (Cred Development,
                    General Petroleum Company) and building production-style apps
                    with Firebase/Supabase.
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
