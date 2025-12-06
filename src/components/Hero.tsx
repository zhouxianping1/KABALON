/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Hero() {
  // 蓝色背景透明度 - 可以手动调节这个值 (0-1 之间，例如 0.85 = 85% 不透明度)
  const blueOverlayOpacity = 0.85; // 调节这个值来改变蓝色背景的透明度

  // 轮播图片列表 - 按 01、02、03、04、05、06 顺序
  const carouselImages = [
    { src: "/01.jpg.jpeg", alt: "Chậu rửa inox 304 - Sản phẩm 01" },
    { src: "/02.jpg.webp", alt: "Chậu rửa inox 304 - Sản phẩm 02" },
    { src: "/03.jpg.webp", alt: "Chậu rửa inox 304 - Sản phẩm 03" },
    { src: "/04.jpg.webp", alt: "Chậu rửa inox 304 - Sản phẩm 04" },
    { src: "/05.jpg.webp", alt: "Chậu rửa inox 304 - Sản phẩm 05" },
    { src: "/06.jpg.webp", alt: "Chậu rửa inox 304 - Sản phẩm 06" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 每5秒切换一次，可以调整这个时间

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // 切换到上一张
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  // 切换到下一张
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 跳转到指定图片
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center pt-16 sm:pt-20"
      style={{
        background: `linear-gradient(to bottom right, rgba(10, 82, 161, ${blueOverlayOpacity}), rgba(13, 107, 200, ${blueOverlayOpacity}), rgba(10, 82, 161, ${blueOverlayOpacity}))`,
      }}
    >
      <div className="absolute inset-0 bg-[url('/jimeng2025.jpg')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Nguồn sỉ chậu rửa inox 304 tại Việt Nam
            </h1>
            <p className="text-lg sm:text-xl lg:text-xl text-white/90 leading-relaxed">
              Nhà máy Trung Quốc – nguồn hàng ổn định cho đại lý
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-white text-[#0A52A1] font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Xem sản phẩm
              </Link>
              <a
                href="https://zalo.me/0981675008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#0A52A1] transition-all duration-300"
              >
                Zalo liên hệ
              </a>
            </div>
          </div>

          {/* Right: Product Image Carousel */}
          <div className="mt-8 lg:mt-0">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm relative">
                {/* 轮播图片容器 */}
                <div className="relative w-full aspect-[4/3]">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full rounded-2xl object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* 左右切换按钮 */}
                {carouselImages.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110"
                      aria-label="Previous image"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110"
                      aria-label="Next image"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}

                {/* 指示器（小圆点） */}
                {carouselImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "w-8 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              {/* Decorative elements - Desktop only */}
              <div className="hidden lg:block absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
              <div className="hidden lg:block absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

