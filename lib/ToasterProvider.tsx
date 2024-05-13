"use client";
import React from "react";
import { Toaster } from "sonner";

type Props = {};

const ToasterProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Toaster richColors closeButton theme="dark" />
    </>
  );
};

export default ToasterProvider;
