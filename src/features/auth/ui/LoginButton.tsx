"use client";

import Github from "@/shared/icons/Github";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <button
      onClick={() => signIn("github", { callbackUrl: "/profiles" })}
      className="w-full bg-surface text-text px-8 py-4 rounded-lg font-medium hover:bg-surface/80 transition-colors flex items-center justify-center gap-2 mt-4 cursor-pointer">
      <Github className="w-5 h-5" />
      Login with GitHub
    </button>
  );
};

export default LoginButton;
