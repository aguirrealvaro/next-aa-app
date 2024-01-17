import "@/styles/globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
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
        className={cn(
          "bg-bg-primary text-text-primary antialiased",
          `${inter.variable} font-body`
        )}
      >
        <ErrorBoundary>
          <ThemeProvider>
            <div className="flex min-h-screen flex-col">
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
