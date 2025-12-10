"use client";

import { useEffect } from "react";

export default function ZaloChatWidget() {
  useEffect(() => {
    // 如果 SDK 已经加载，就不要重复加载
    if (document.querySelector('script[src="https://sp.zalo.me/plugins/sdk.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://sp.zalo.me/plugins/sdk.js";
    script.async = true;
    document.body.appendChild(script);

    // 不要随便移除脚本，避免其它页面还要用
  }, []);

  return (
    // 现在 Zalo 聊天窗口的位置是由外层这个 div 容器控制的
    // 使用响应式 Tailwind 类：移动端 bottom-4 right-4 (16px)，桌面端 bottom-6 right-6 (24px)
    // 与电话按钮对齐：移动端 16px，桌面端 24px
    // z-[9999] 确保浮层在最上层，同时允许聊天窗口正常弹出
    // 外层容器不限制 overflow，让 SDK 创建的聊天窗口可以完整显示，不会被裁剪
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
      {/* 里面这个才是 Zalo 官方需要的挂载点，样式交给 SDK 自己控制 */}
      {/* 不添加任何强制样式覆盖，让 SDK 完全控制聊天窗口的位置和大小 */}
      {/* 为什么不会再被裁剪：
          1. 外层容器使用 fixed 定位，不会限制子元素的溢出
          2. 没有设置 overflow: hidden，聊天窗口可以超出容器显示
          3. SDK 创建的聊天窗口使用 fixed 定位，直接相对于视口定位，不受外层容器限制
          4. 移除了所有强制修改样式的代码，SDK 可以正常计算和设置窗口位置
      */}
      <div
        className="zalo-chat-widget"
        data-oaid="2104609680390170248"
        data-welcome-message="Rất vui khi được hỗ trợ bạn!"
        data-autopopup="0"
        data-width="350"
        data-height="420"
      />
    </div>
  );
}
