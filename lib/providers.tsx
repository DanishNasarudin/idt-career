"use client";
import CookieBanner from "@/components/custom/cookie-banner";
import React from "react";
import { Toaster } from "sonner";
import { useLocalStorage } from "usehooks-ts";
import FacebookPixel from "./fb-pixel";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [cookie] = useLocalStorage<boolean | null>("cookieConsent", null);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <CookieBanner />
      {cookie && <FacebookPixel />}
      <Toaster richColors closeButton theme="dark" />
    </ThemeProvider>
  );
}
