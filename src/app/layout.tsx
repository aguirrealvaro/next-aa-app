import "@/css/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Tailwind Template",
  description: "Description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("h-screen flex flex-col", inter.className)}>
        <main className="flex-1 p-2">{children}</main>
      </body>
    </html>
  );
}
