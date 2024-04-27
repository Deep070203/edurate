import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../public/styles/globals";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduRate",
  description: "Get actual student reviews!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
