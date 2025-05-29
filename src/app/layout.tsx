import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | GitHub Theme",
  description: "A GitHub-themed portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b border-zinc-700 bg-zinc-800">
          <nav className="github-like-container flex items-center justify-between py-4">
            <div className="flex items-center space-x-6">
              <a href="/" className="text-xl font-bold text-white">Portfolio</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#resume" className="nav-link">Resume</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                GitHub
              </a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
