import Navbar from "@/components/custom/navbar";
import Providers from "@/lib/providers";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/custom/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ideal Tech PC Career",
  description:
    "Start, discover and explore your career path through Ideal Tech PC.",
  keywords: [
    "Ideal Tech",
    "Custom PC",
    "Career",
    "Job",
    "Linkedin",
    "Malaysia Job",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: true,
  openGraph: {
    title: "Ideal Tech PC Career",
    description:
      "Start, discover and explore your career path through Ideal Tech PC.",
    images: [
      {
        url: "https://idealtech.com.my/wp-content/uploads/2023/07/01_Artwork-PC.png",
        width: 1000,
        height: 1000,
        alt: "Ideal Tech Custom PC",
      },
      {
        url: "https://idealtech.com.my/wp-content/uploads/2023/03/IDT_LOGO-150x150.png",
        width: 1000,
        height: 1000,
        alt: "Ideal Tech Gaming PC",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative flex flex-col`}>
        <Providers>
          <Navbar />
          <div className="mx-auto flex-1 w-full">{children}</div>
          <div className="h-[30vh]"></div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
