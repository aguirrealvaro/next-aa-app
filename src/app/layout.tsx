import "@/styles/globals.css";
import { FunctionComponent, ReactNode } from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";

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
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col">
          <header className="wrapper">Header</header>
          <main className="flex-1">{children}</main>
          <footer>Footer</footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
