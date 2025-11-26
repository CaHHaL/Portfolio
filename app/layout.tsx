import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import SkipLink from "@/components/SkipLink";
import { ThemeProvider } from "@/hooks/useTheme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: {
    default: "Cahal Agarwalla | Cybersecurity Portfolio",
    template: "%s | Cahal Agarwalla"
  },
  description:
    "Portfolio for Cahal Agarwalla, highlighting pentesting, security analysis, and cyber research.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "security analyst",
    "Cahal Agarwalla"
  ],
  authors: [{ name: "Cahal Agarwalla" }],
  openGraph: {
    title: "Cahal Agarwalla | Cybersecurity Portfolio",
    description:
      "Exploring cybersecurity achievements, projects, experience, and credentials.",
    url: "https://www.example.com",
    siteName: "Cahal Agarwalla",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cahal Agarwalla brand mark"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cahal Agarwalla | Cybersecurity Portfolio",
    description:
      "Cybersecurity enthusiast, pentester, and security analyst focused on building resilient systems."
  }
};

export const viewport: Viewport = {
  themeColor: [
    { color: "#f8fbff", media: "(prefers-color-scheme: light)" },
    { color: "#030714", media: "(prefers-color-scheme: dark)" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-navy text-white antialiased selection:bg-neon/30 selection:text-white`}
      >
        <SkipLink />
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-gradient-to-b from-navy via-[#050b21] to-black">
            <Nav />
            <main id="main-content" className="flex-1 px-4 py-8 sm:px-6 lg:px-10">
              {children}
            </main>
            <footer className="border-t border-white/10 px-4 py-6 text-center text-xs text-slate-400 sm:px-6">
              <span suppressHydrationWarning>
                © {new Date().getFullYear()} Cahal Agarwalla. Stay resilient.
              </span>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

