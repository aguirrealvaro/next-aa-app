import "@/styles/globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ErrorBoundary } from "@/components";
import { cn } from "@/lib/cn";
import { ThemeProvider } from "@/providers";

export const metadata: Metadata = {
  title: "next-aa-app",
  description:
    "NextJS boilerplate with Tailwind, Typescript, Dark Mode, ESLint, Prettier, Precommit and more...",
};

type RootLayoutProps = {
  children: ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-bg-primary text-text-primary antialiased",
          "flex h-dvh flex-col",
          `${inter.className}`
        )}
      >
        <ErrorBoundary>
          <ThemeProvider>
            <header className="flex justify-center py-8">
              <h1 className="text-2xl font-semibold">next-aa-app</h1>
            </header>
            <main className="flex-1">{children}</main>
            <footer>Footer</footer>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
};

export default RootLayout;
