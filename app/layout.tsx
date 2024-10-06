import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Harrison Johns",
  description: "Software Developer Portfolio",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>Harrison Johns</title>
        <meta name="title" content="Harrison Johns" />
        <meta name="description" content="Software Engineering Student Portfolio" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harrisonjohns.me/" />
        <meta property="og:title" content="Harrison Johns" />
        <meta property="og:description" content="Software Engineering Student Portfolio" />
        <meta property="og:image" content="https://harrisonjohns.me/favicon.ico" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="https://harrisonjohns.me/images/porthead.png" />
        <meta name="twitter:url" content="https://harrisonjohns.me/" />
        <meta name="twitter:title" content="Harrison Johns" />
        <meta name="twitter:description" content="Software Engineering Student Portfolio" />
        <meta name="twitter:image" content="https://harrisonjohns.me/favicon.ico" />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
