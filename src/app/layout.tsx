import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tn.pik - Phongit Khanthawisood",
  description: "Phongit Khanthawisood Portfolio",
  authors: { name: "Phongit Khanthawisood" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Phongit Khanthawisood | tn.pik </title>
      </head>
      <body
        className={`animate-fadeIn overflow-x-hidden bg-base antialiased transition-all delay-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
