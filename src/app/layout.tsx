import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarDemo from "@/components/resizable-navbar-demo";
import ShapeGrid from "@/components/ShapeGrid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafhrs-portofolio",
  description: "Become a Great Programmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Global Background Animation */}
        <div className="fixed inset-0 z-[-1] w-full bg-[#242f47]">
          <ShapeGrid 
            speed={0.18}
            squareSize={40}
            direction="diagonal"
            borderColor="#272eac"
            hoverFillColor="#3B82F6"
            shape="square"
            hoverTrailAmount={0}
          />
        </div>

        <NavbarDemo/>
        {children}
      </body>
    </html>
  );
}
