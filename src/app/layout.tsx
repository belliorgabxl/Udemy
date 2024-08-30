"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "../../components/Provider";
import TopNavbar from "../../components/Navbar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Provider>
        <TopNavbar/>
        <main className="w-full h-fit">
          {children}
        </main>
        
      </Provider>
      </body>
    </html>
  );
}
