import ToastifyProvider from "@/providers/toastifyProvider";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dannyduong.vercel.app"),
  title: "Danny Duong",
  description:
    "Full-time software developer and rhythm game enthusiast. Creator of Web osu!mania and other interactive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        defer
        src="https://umami-37qe.onrender.com/script.js"
        data-website-id="fb5ad42c-4bdb-4a3c-940a-c9246ff77cb7"
      />

      <body className={cn(inter.className, "bg-black")}>
        <ToastifyProvider>{children}</ToastifyProvider>
      </body>
    </html>
  );
}
