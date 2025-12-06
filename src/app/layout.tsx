import type { Metadata } from "next";
import "./globals.css";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import ZaloChatWidget from "@/components/ZaloChatWidget";

export const metadata: Metadata = {
  title: "Kabalon / Thiên Bang Inox Sink",
  description:
    "Nguồn sỉ chậu rửa bát inox cho thị trường Việt Nam · 中国不锈钢水槽源头工厂越南供货通道",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </head>
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


