import type { Metadata } from "next";
import { Fira_Code, Inter, Poppins } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

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
      <body className={`${inter.variable} ${poppins.variable} ${firaCode.variable} font-sans`}>
        <header className="border-b border-[#30363d] bg-[#161b22]">
          <nav className="github-like-container flex items-center justify-between py-4">
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-xl font-bold text-white font-poppins">
                Portfolio
              </Link>
              <Link href="#projects" className="nav-link">
                Projects
              </Link>
              <Link href="#about" className="nav-link">
                About
              </Link>
              <Link href="#resume" className="nav-link">
                Resume
              </Link>
              <Link href="#contact" className="nav-link">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
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
