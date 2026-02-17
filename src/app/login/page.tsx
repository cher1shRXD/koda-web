import LoginButton from "@/features/auth/ui/LoginButton";

export default function LoginPage() {
  return (
    <div className="w-full h-svh">
      <div className="w-1/2 h-full flex flex-col items-center justify-center gap-16">
        <h1 className="font-playpen font-bold text-3xl tracking-widest">
          Hi my{" "}
          <span className="neon-sign">KODA <span className="text-primary">.</span></span>
        </h1>
        <div className="w-full max-w-xl flex flex-col items-start gap-4">
          <h2 className="text-4xl font-semibold">Login</h2>
          <p className="text-lg text-text/60 italic tracking-wider">
            Login for generate your new KODA profile.
          </p>
          <LoginButton />
        </div>
      </div>
      <div className="w-1/2 h-full bg-surface fixed right-0 top-0">
        image area
      </div>
    </div>
  );
}
