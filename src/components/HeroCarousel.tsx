"use client";

import { useEffect, useState } from "react";

type Slide = {
  id: number;
  badge: string;
  titleVi: string;
  titleZh: string;
  descVi: string;
  descZh: string;
  image?: string;
};

const slides: Slide[] = [
  {
    id: 1,
    badge: "Nhà máy Trung Quốc · Hợp tác B2B chuyên nghiệp",
    titleVi: "Công ty TNHH TMQT Thiên Bang Việt Nam - Đối tác tin cậy cho nguồn hàng chậu inox 304",
    titleZh: "天邦越南国际贸易有限公司 - 专业的不锈钢水槽B2B合作伙伴",
    descVi:
      "Kết nối trực tiếp với nhà máy sản xuất tại Trung Quốc, cung cấp giải pháp nguồn hàng ổn định cho đối tác B2B tại thị trường Việt Nam.",
    descZh:
      "直接对接中国工厂，为越南市场B2B合作伙伴提供稳定的货源解决方案，支持从试单到批量生产的全流程服务。",
    image: "https://drive.google.com/thumbnail?id=1PAgzBIy92bYK-xeNKTE-AFvNYHlr27WU&sz=w1000",
  },
  {
    id: 2,
    badge: "Chất lượng Inox 304 · Đa dạng quy cách",
    titleVi: "Sản phẩm đạt tiêu chuẩn, quy cách phong phú phù hợp thị trường Việt Nam",
    titleZh: "符合标准的产品，丰富的规格适配越南市场需求",
    descVi:
      "Chuyên cung cấp chậu rửa inox 304 với nhiều kích thước từ 68×46 đến 82×44, hỗ trợ tư vấn kỹ thuật và lựa chọn phù hợp từng dự án.",
    descZh:
      "专业提供304不锈钢水槽，尺寸从68×46到82×44，支持技术咨询和项目选型，确保产品适配越南常见厨房结构。",
  },
  {
    id: 3,
    badge: "Dịch vụ chuyên nghiệp · Hỗ trợ toàn diện",
    titleVi: "Đội ngũ kỹ thuật chuyên nghiệp, hỗ trợ từ tư vấn đến giao hàng",
    titleZh: "专业技术团队，从咨询到交付的全方位支持",
    descVi:
      "Cung cấp bản vẽ kỹ thuật, file CAD, hình ảnh/video sản phẩm, hỗ trợ tùy chỉnh OEM và phương án logistics tối ưu cho đối tác B2B.",
    descZh:
      "提供技术图纸、CAD文件、产品图片/视频，支持OEM定制和优化的物流方案，为B2B合作伙伴提供全方位专业服务。",
  },
];

const AUTO_PLAY_INTERVAL = 5000;

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[activeIndex];

  return (
    <div
      className="mt-6 mb-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white shadow-xl">
        <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,0.8fr)] md:p-8 items-center">
          {/* Left: text content */}
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-md bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-semibold tracking-wide">
              {activeSlide.badge}
            </span>
            <h2 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              {activeSlide.titleVi}
            </h2>
            <p className="text-sm text-slate-200 md:text-base">
              {activeSlide.titleZh}
            </p>
            <div className="space-y-2 text-sm leading-relaxed md:text-sm">
              <p className="text-slate-100">{activeSlide.descVi}</p>
              <p className="text-slate-200/90">{activeSlide.descZh}</p>
            </div>
          </div>

          {/* Right: image or decorative block */}
          <div className="relative hidden h-64 md:block md:h-80">
            {activeSlide.image ? (
              <div className="relative h-full w-full rounded-xl overflow-hidden bg-slate-700/50">
                <img
                  src={activeSlide.image}
                  alt={activeSlide.titleVi}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />
              </div>
            ) : (
              <div className="relative h-full">
                <div className="absolute inset-4 rounded-xl bg-white/5" />
                <div className="absolute -right-6 top-4 h-24 w-24 rounded-full bg-white/10 blur-xl" />
                <div className="absolute bottom-0 left-4 h-20 w-20 rounded-full bg-white/5 blur-xl" />
                <div className="absolute inset-6 rounded-xl border border-white/10" />
              </div>
            )}
          </div>
        </div>

        {/* Controls & dots */}
        <div className="flex items-center justify-between gap-4 px-6 pb-4 md:px-8 md:pb-5">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Chuyển tới slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition ${
                  index === activeIndex
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Slide trước"
              onClick={handlePrev}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-white/10 text-xs backdrop-blur-sm hover:bg-white/20 transition"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Slide tiếp theo"
              onClick={handleNext}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-white/10 text-xs backdrop-blur-sm hover:bg-white/20 transition"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
