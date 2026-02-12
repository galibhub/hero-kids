import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NextAuthProvider from "@/provider/NextAuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const fontBangla = localFont({
  src: "./../fonts/mayaboti-normal.ttf",
});

export const metadata = {
  metadataBase: new URL("https://hero-kidz-beige.vercel.app"), // change to your real domain

  title: {
    default: "Hero kidz",
    template: "%s | Your App Name",
  },

  description:
    "A modern full-stack e-commerce platform built with Next.js. Browse products, read reviews, and manage everything efficiently.",

  keywords: ["Next.js", "E-commerce", "MERN", "Full Stack App", "Online Shop"],

  authors: [{ name: "Ibrahim Galib" }],
  creator: "Ibrahim Galib",
  publisher: "Your App Name",

  openGraph: {
    title: "hero kidz",
    description:
      "Browse products and experience a modern e-commerce platform built with Next.js.",
    url: "https://yourdomain.com",
    siteName: "Your App Name",
    images: [
      {
        url: "https://i.ibb.co/wN6tXrmn/product.png",
        width: 1200,
        height: 630,
        alt: "Product Preview",
      },
      {
        url: "https://i.ibb.co/JR0CzCPC/home.png",
        width: 1200,
        height: 630,
        alt: "Homepage Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Your App Name - Modern E-commerce",
    description: "Modern e-commerce platform built using Next.js.",
    images: ["https://i.ibb.co/wN6tXrmn/product.png"],
  },

  icons: {
    icon: "https://i.ibb.co/dwGyDFgV/logo.png",
    shortcut: "https://i.ibb.co/dwGyDFgV/logo.png",
    apple: "https://i.ibb.co/dwGyDFgV/logo.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
          {children}
        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
    </NextAuthProvider>
  );
}
