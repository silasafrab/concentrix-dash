import { Montserrat } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/base/Header";
import { Footer } from "@/components/base/Footer";
import { AppProvider } from "@/contexts/AppContext";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "@/contexts/UserContext";
import { ArrowsUpbeat } from "@/components/primitives/ArrowsUpbeat";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerenciador de tarefa",
  description: "Gerenciador de tarefa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} flex flex-col h-screen`}>
        <AppProvider>
          <UserProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <ArrowsUpbeat />
              <Toaster />
              <Footer />
            </ThemeProvider>
          </UserProvider>
        </AppProvider>
      </body>
    </html>
  );
}
