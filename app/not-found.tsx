import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Glowing 404 */}
      <div className="relative mb-8">
        <h1 className="glow-text text-9xl font-bold text-primary/20 md:text-[12rem]">
          404
        </h1>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-foreground md:text-3xl">
          Page Not Found
        </p>
      </div>

      <p className="mb-8 max-w-md text-muted-foreground">
        The page you are looking for does not exist or has been moved. Let me take you
        back to safety.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </div>
  );
}
