import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ChatbotScript from "./chatbot-script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cool Macaly App",
  description: "Build Your Personal Developer AI Avatar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}<ChatbotScript /></body>
    </html>
  );
}