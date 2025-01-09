import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "@adv-re/ui/theme";
import "./globals.css";
import { LayoutHeader } from "@/components/layout/layout-header";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.variable} antialiased`}>
        <ThemeProvider>
          <LayoutHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
