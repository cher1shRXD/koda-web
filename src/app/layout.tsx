import type { Metadata } from "next";
import "./globals.css";
import { ThemeSetter } from "@/shared/themes/ThemeSetter";
import { LoadingBar } from "@cher1shrxd/loading";
import AuthProvider from "../shared/providers/AuthProvider";
import InitScrollProvider from "@/shared/providers/InitScrollProvider";

export const metadata: Metadata = {
  title: "KODA | An AI-powered coding style analyzer",
  description:
    "KODA is an AI-powered coding style analyzer. It provides instructions of your coding style and generates profile for you AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeSetter />
      </head>
      <body className={`antialiased bg-background text-text`}>
        <LoadingBar color="var(--theme-color-primary)" />
        <InitScrollProvider />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
