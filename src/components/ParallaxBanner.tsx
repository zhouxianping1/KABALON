"use client";

import { useEffect, useRef, useState } from "react";

export function ParallaxBanner() {
  const [placeholderHeight, setPlaceholderHeight] = useState(400);
  const bannerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (imgRef.current && bannerRef.current) {
        const img = imgRef.current;
        if (img.complete) {
          // 直接使用图片的实际显示高度
          setPlaceholderHeight(bannerRef.current.offsetHeight);
        } else {
          img.onload = () => {
            if (bannerRef.current) {
              setPlaceholderHeight(bannerRef.current.offsetHeight);
            }
          };
        }
      }
    };

    // 延迟一下确保图片已加载
    const timer = setTimeout(updateHeight, 100);
    window.addEventListener("resize", updateHeight);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      {/* 固定海报 */}
      <div 
        ref={bannerRef}
        className="fixed top-16 sm:top-[72px] left-0 right-0 z-40 w-full overflow-hidden"
      >
        <div className="w-full max-w-[1920px] mx-auto">
          <img
            ref={imgRef}
            src="/jimeng2025.jpg"
            alt="Thiên Bang Việt Nam"
            className="w-full h-auto object-cover"
            style={{ display: "block" }}
          />
        </div>
      </div>
      
      {/* 占位空间 - 精确匹配海报高度，无多余空白 */}
      <div style={{ height: `${placeholderHeight}px` }} />
    </>
  );
}

