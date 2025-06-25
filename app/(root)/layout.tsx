import Navbar from "@/components/Navbar";
import React from "react";
import { Toaster } from "sonner";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <Navbar />

      {children}

      <Toaster richColors position="top-center" />
    </main>
  );
}
