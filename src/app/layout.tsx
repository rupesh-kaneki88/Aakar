import type { Metadata } from "next";
import "./globals.css";
import "./loading.css";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { LoadingProvider } from "@/app/providers/LoadingProvider";
import { CartProvider } from "@/app/providers/CartProvider";
import { WishlistProvider } from "@/app/providers/WishlistProvider";
import { Toaster } from "@/app/components/ui/Sonner";

export const metadata: Metadata = {
  title: "AAKAAR Studio - Rooted in Tradition, Designed for YOU",
  description: "Discover exquisite Pakistani suits, Anarkalis, and traditional wear. Premium quality clothing for every occasion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Akatab:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <CartProvider>
              <WishlistProvider>
                <Header />
                {children}
                <Footer />
                <Toaster />
              </WishlistProvider>
            </CartProvider>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
