import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-portfolio-domain.vercel.app"),

  title: {
    default: "Nishtha Portfolio",
    template: "%s | Nishtha Portfolio",
  },

  description:
    "Portfolio of Nishtha Vatsa — Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, AI-powered web applications, and modern full-stack development.",

  keywords: [
    "Nishtha Vatsa",
    "Portfolio",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "AI",
    "MERN Stack",
  ],

  authors: [
    {
      name: "Nishtha Vatsa",
    },
  ],

  creator: "Nishtha Vatsa",

  openGraph: {
    title: "Nishtha Portfolio",
    description:
      "Full Stack Developer building AI-powered web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#020617] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}