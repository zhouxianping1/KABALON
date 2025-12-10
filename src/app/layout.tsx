// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import ZaloChatWidget from "@/components/ZaloChatWidget";

export const metadata: Metadata = {
  title: "Kabalon Inox Sink",
  description: "Nguồn sỉ chậu rửa inox 304 tại Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}

        {/* 浮动联系按钮 */}
        <FloatingContactButtons />

        {/* Zalo 官方聊天插件 */}
        <ZaloChatWidget />
      </body>
    </html>
  );
}
