import { ThemeToggle } from "@/shared/themes/ThemeToggle";
import { Link } from "@cher1shrxd/loading";

const Header = () => {
  return (
    <nav className="w-full border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="font-extrabold text-xl tracking-tighter text-text">
            KODA<span className="text-primary">.</span>
          </h1>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text/60">
            <a href="#features" className="hover:text-text transition-colors">
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-text transition-colors">
              How it works
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/login"
            className="text-sm font-bold bg-text text-background px-5 py-2 rounded-md hover:opacity-90 transition-opacity">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
