import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Tailwind Template",
  description: "Description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col">
          <header>Header</header>
          <main className="flex-1">{children}</main>
          <footer>Footer</footer>
        </div>
      </body>
    </html>
  );
}
