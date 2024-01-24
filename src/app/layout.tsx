import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/navbar";
import "./globals.css";
import '@mantine/core/styles.css';
import { HeaderSimple } from "./components/global/mantine/HeaderSimple";

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
          <HeaderSimple />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
