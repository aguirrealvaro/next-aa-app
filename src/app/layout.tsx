import "@/styles/globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ErrorBoundary } from "@/components";
import { cn } from "@/lib/cn";
import { ThemeProvider } from "@/providers";

export const metadata: Metadata = {
  title: "Next Tailwind Template",
  description: "Description",
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
        className={cn("bg-bg-primary text-text-primary antialiased", `${inter.className}`)}
      >
        <ErrorBoundary>
          <ThemeProvider>
            <div className="flex h-dvh flex-col">
              <header>Header</header>
              <main className="flex-1">{children}</main>
              <footer>Footer</footer>
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
};

export default RootLayout;
