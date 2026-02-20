import Logo from "@/shared/icons/Logo";
import { ThemeToggle } from "@/shared/themes/ThemeToggle";
import { Link } from "@cher1shrxd/loading";
import { Suspense } from "react";
import User from "./User";

const Header = () => {
  return (
    <nav className="w-full border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Logo />
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text/60">
            <Link href="/profiles" className="hover:text-text transition-colors">
              Profiles
            </Link>
            <Link href="/community" className="hover:text-text transition-colors">
              Community
            </Link>
            <Link href="/docs" className="hover:text-text transition-colors">
              Docs
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Suspense
            fallback={
              <div className="w-8 h-8 rounded-full bg-surface/50 animate-pulse" />
            }>
            <User />
          </Suspense>
        </div>
      </div>
    </nav>
  );
};

export default Header;
