import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { StarBackground } from "@/components/StarBackground";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex items-center justify-center px-4">
      <StarBackground />

      <main className="relative z-10 text-center max-w-md">
        <p className="text-7xl md:text-8xl font-bold text-gradient">404</p>

        <h1 className="mt-4 text-2xl md:text-3xl font-semibold">
          This page doesn&apos;t exist
        </h1>

        <p className="mt-3 text-muted-foreground">
          The link may be out of date, or the page may have moved.
        </p>

        <Link
          to="/"
          className="cosmic-button mt-8 inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to homepage
        </Link>
      </main>
    </div>
  );
};
