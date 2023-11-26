import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/queryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieFriends",
  description: "A social network for movie lovers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <QueryProvider>{children}</QueryProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
