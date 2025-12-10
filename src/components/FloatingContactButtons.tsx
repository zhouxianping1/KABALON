"use client";

export function FloatingContactButtons() {
  return (
    <>
      {/* 电话按钮 - 左下角 - 使用内联样式确保在移动端可见 */}
      <a
        href="tel:0981675008"
        aria-label="Gọi ngay 0981 675 008"
        id="floating-phone-button"
        className="floating-phone-button"
        style={{
          position: 'fixed',
          bottom: '16px',
          left: '16px',
          zIndex: 99998,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'transparent',
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
          visibility: 'visible',
          opacity: 1,
        }}
      >
        {/* 圆形电话图标按钮 - 移动端至少 48x48px 以确保触摸友好 */}
        <div
          className="phone-button-icon-wrapper"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            minWidth: '56px',
            minHeight: '56px',
            borderRadius: '50%',
            backgroundColor: '#ef4444',
            color: 'white',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
            border: '2px solid white',
            flexShrink: 0,
            overflow: 'visible',
          }}
        >
          {/* 波纹效果层 */}
          <span className="phone-ripple phone-ripple-1"></span>
          <span className="phone-ripple phone-ripple-2"></span>
          <span className="phone-ripple phone-ripple-3"></span>
          
          <svg
            className="phone-icon-shake"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '28px', height: '28px', flexShrink: 0, position: 'relative', zIndex: 1 }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        
        {/* 电话号码显示条 - 桌面端显示 */}
        <div className="hidden sm:flex items-center rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-600 whitespace-nowrap">
          0981 675 008
        </div>
      </a>
    </>
  );
}

