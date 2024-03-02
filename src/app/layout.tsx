import ToastifyProvider from "@/providers/toastifyProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "../utils/cn";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danny Duong",
  description: "Danny's Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-black")}>
        <ToastifyProvider>{children}</ToastifyProvider>
      </body>
    </html>
  );
}
