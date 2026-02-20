import LoginButton from "@/features/auth/ui/LoginButton";
import Logo from "@/shared/icons/Logo";
import { Link } from "@cher1shrxd/loading";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="w-full h-svh">
      <div className="w-1/2 h-full flex flex-col items-center justify-center gap-16">
        <div className="neon-sign">
          <Logo size={64} />
        </div>
        <div className="w-full max-w-xl flex flex-col items-start gap-4">
          <h2 className="text-4xl font-semibold">Login</h2>
          <p className="text-lg text-text/60 italic tracking-wider">
            Login for generate your new KODA profile.
          </p>
          <LoginButton />
        </div>
        <div className="w-full max-w-xl">
          <Link href="/" className="flex items-center text-text/80 hover:text-text transition-colors">
            <ArrowLeft strokeWidth={1} size={16} className="inline mr-1" /> Back to Landing
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-full bg-surface fixed right-0 top-0">
        image area
      </div>
    </div>
  );
}
