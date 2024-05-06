import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../public/styles/globals";
import React from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EDrater",
  description: "Get actual student reviews!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                {/* Link to your favicon */}
                <link rel="icon" href="../public/favicon/favicon.ico" />
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
