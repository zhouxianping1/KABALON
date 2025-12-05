"use client";

export function FloatingContactButtons() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      {/* 电话按钮 - 左下角 */}
      <a
        href="tel:0981675008"
        aria-label="Gọi ngay 0981 675 008"
        className="pointer-events-auto fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-[101] flex items-center gap-2 group"
      >
        {/* 圆形电话图标按钮 */}
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-all duration-300 hover:bg-red-600 hover:scale-110 group-hover:shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        
        {/* 电话号码显示条 - 桌面端显示 */}
        <div className="hidden sm:flex items-center rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-600 group-hover:shadow-xl whitespace-nowrap">
          0981 675 008
        </div>
      </a>
    </div>
  );
}

