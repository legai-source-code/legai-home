import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/navbar";
import "./globals.css";
import '@mantine/core/styles.css';
import { HeaderMegaMenu } from "./components/global/mantine/HeaderMegaMenu";
import { FooterLinks } from "./components/global/mantine/FooterLinks";

const inter = Inter({ subsets: ["latin"] });

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: "LEGAI",
  description: "Legal RFP generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        {/* <Navbar /> */}

        <MantineProvider>
          <HeaderMegaMenu />
          {children}
          <div className="footer-container">
          <FooterLinks />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
