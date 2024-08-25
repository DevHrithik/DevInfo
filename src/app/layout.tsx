import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import LayoutContainer from "@/components/LayoutContainer";

const space_Mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "DevInfo",
  description: "Your only tool to find any Dev related info",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <LayoutContainer>
        <body className={space_Mono.className}>{children}</body>
      </LayoutContainer>
    </html>
  );
}
