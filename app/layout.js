"use client";
import { ChakraProvider } from '@chakra-ui/react';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: 'black', color: 'white' }}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}