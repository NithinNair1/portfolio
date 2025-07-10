import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // ← only import once, up here
import { ThemeProvider } from "@/components/theme-provider";
const config = require("../next.config.mjs");

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nithin Nair | Portfolio",
  description: "Personal portfolio website of Nithin Nair, AI Engineer",
  icons: {
    icon: "${config.basePath}/title_icon_portfolio.png" // or "/icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
