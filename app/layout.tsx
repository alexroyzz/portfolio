import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import "./intro.css"
import SmoothScroll from "@/components/SmoothScroll"
import ScrollProgress from "@/components/ScrollProgress"
import CursorGlow from "@/components/CursorGlow"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Intro from "@/components/Intro"

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://deepak-portfolio.vercel.app"),
  title: "Deepak — MERN Stack Developer",
  description:
    "Deepak is a MERN stack developer in Delhi, India, building and deploying real-world e-commerce, B2B wholesale and AI-powered web products with React, Node.js, Express and MongoDB.",
  authors: [{ name: "Deepak" }],
  keywords: [
    "MERN stack developer",
    "React developer",
    "Node.js developer",
    "full stack developer Delhi",
    "freelance web developer India",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Deepak — MERN Stack Developer",
    description:
      "I build real-world web products that turn ideas into business. Live e-commerce, B2B wholesale and AI platforms built with the MERN stack.",
    siteName: "Deepak — MERN Stack Developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak — MERN Stack Developer",
    description: "I build real-world web products that turn ideas into business.",
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SmoothScroll />
        <ScrollProgress />
        <CursorGlow />
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-xl focus:border focus:border-line2 focus:bg-raised focus:px-4 focus:py-2"
        >
          Skip to work
        </a>
        <Intro />
        <div className="page-shell">
          <Nav />
          <main id="top">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
