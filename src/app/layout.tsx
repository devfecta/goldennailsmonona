import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../public/css/globals.css";
import BootstrapClient from "./components/BootstrapClient";
import Script from 'next/script';
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golden Nails - Monona",
  description: "Looking for top-rated nail care in Monona, WI? Visit Golden Nails for manicures, pedicures, gel nails, and custom nail art. Book your appointment today!",
  icons: {
		icon: 'images/favicon.png',
		apple: 'images/favicon.png', 
	},
	openGraph: {
		url: 'https://goldennailsmonona.com',
    	siteName: 'Golden Nails',
		locale: 'en_US',
    	type: 'website',
	},
	alternates: {
    canonical: 'https://goldennailsmonona.com/',
  	},
	robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
		index: true,
		follow: true,
		noimageindex: false,
		'max-video-preview': -1,
		'max-image-preview': 'large',
		'max-snippet': -1,
    },
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className="bg-body text-body-secondary">
        <Header/>
        <main>
          {children}
        </main>
        <Footer />
        <BootstrapClient />
        <Script src="js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
