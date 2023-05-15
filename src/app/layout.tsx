import "@/styles/globals.css";
import { FunctionComponent, ReactNode } from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers";
import { cn } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Tailwind Template",
  description: "Description",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-bg-primary text-text-primary antialiased", inter.className)}>
        <ThemeProvider>
          <div className="flex h-screen flex-col">
            <header>Header</header>
            <main className="flex-1">{children}</main>
            <footer>Footer</footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
