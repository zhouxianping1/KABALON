"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  alwaysOpaque?: boolean;
}

export function Navbar({ alwaysOpaque = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(alwaysOpaque);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // 如果不在首页，锚点链接应该指向首页的锚点
  const isHomePage = pathname === "/";
  const linkPrefix = isHomePage ? "" : "/";

  useEffect(() => {
    if (alwaysOpaque) {
      setIsScrolled(true);
      return;
    }
    
    // 立即检查当前滚动位置
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // 初始化时立即检查
    checkScroll();
    
    // 监听滚动事件
    const handleScroll = () => {
      checkScroll();
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysOpaque, pathname]);

  const navLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/products", label: "Sản phẩm" },
    { href: `${linkPrefix}#about`, label: "Về chúng tôi" },
    { href: `${linkPrefix}#process`, label: "Quy trình hợp tác" },
    { href: `${linkPrefix}#contact`, label: "Liên hệ" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className={`text-lg sm:text-xl font-bold transition-colors ${
                isScrolled ? "text-[#0A52A1]" : "text-white"
              }`}
            >
              Thiên Bang
            </span>
            <span
              className={`hidden sm:inline text-sm transition-colors ${
                isScrolled ? "text-slate-600" : "text-white/80"
              }`}
            >
              / Kabalon
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#0A52A1] ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-slate-700 hover:text-[#0A52A1] py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}




