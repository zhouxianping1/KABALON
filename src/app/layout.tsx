import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { ParallaxBanner } from "@/components/ParallaxBanner";
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
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          {/* 顶部导航栏 - 固定 */}
          <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white shadow-sm">
            <div className="mx-auto flex h-16 sm:h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-sm sm:text-base font-semibold tracking-tight text-slate-900">
                  Thiên Bang Việt Nam
                </span>
                <span className="hidden sm:inline text-xs text-slate-500 font-normal">
                  / Kabalon
                </span>
              </Link>

              <nav className="flex items-center gap-3 sm:gap-6 lg:gap-8 text-xs sm:text-sm">
                <Link
                  href="/"
                  className="text-slate-700 hover:text-slate-900 font-medium transition whitespace-nowrap"
                >
                  Trang chủ
                </Link>
                <Link
                  href="/products"
                  className="text-slate-700 hover:text-slate-900 font-medium transition whitespace-nowrap"
                >
                  Sản phẩm
                </Link>
                <Link
                  href="/contact"
                  className="text-slate-700 hover:text-slate-900 font-medium transition whitespace-nowrap"
                >
                  Liên hệ
                </Link>
              </nav>
            </div>
          </header>

          {/* 视差滚动海报 */}
          <ParallaxBanner />

          {/* 主体内容区域 - 白色背景从顶部开始，滚动时会覆盖海报 */}
          <main className="relative z-50 flex-1 bg-white">
            <div className="py-3 sm:py-4">
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-5 shadow-md sm:p-6 lg:p-8">
                  {children}
                </div>
              </div>
            </div>
          </main>

          {/* 页脚 */}
          <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-6 text-center sm:px-6 lg:px-8">
              <p className="text-xs font-medium text-slate-700 mb-2">
                CÔNG TY TNHH THƯƠNG MẠI QUỐC TẾ THIÊN BANG VIỆT NAM
              </p>
              <p className="text-xs text-slate-600">
                19 Đường Số 1, Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh · 
                Hotline: 0981 675 008 · Email: sales@kabalon.vn
              </p>
              <p className="mt-2 text-[11px] text-slate-500">
                Nguồn sỉ chậu rửa bát inox 304 cho thị trường Việt Nam · 中国不锈钢水槽源头工厂越南供货通道
              </p>
            </div>
          </footer>
        </div>
        
        {/* 浮动联系按钮 */}
        <FloatingContactButtons />
        
        {/* Zalo 官方聊天插件 */}
        <ZaloChatWidget />
      </body>
    </html>
  );
}


