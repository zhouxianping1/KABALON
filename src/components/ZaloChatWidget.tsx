"use client";

import { useEffect } from "react";

export default function ZaloChatWidget() {
  useEffect(() => {
    // 最简实现：只加载 SDK，完全依赖 CSS 控制样式
    // 这样可以最大程度减少触发 SDK 内部序列化逻辑
    
    // 检查脚本是否已存在
    if (document.querySelector('script[src="https://sp.zalo.me/plugins/sdk.js"]')) {
      return; // 如果已加载，直接返回，不做任何操作
    }

    // 只加载 SDK，不做任何其他操作
    const script = document.createElement("script");
    script.src = "https://sp.zalo.me/plugins/sdk.js";
    script.async = true;
    
    // 不设置 onload 回调，让 SDK 完全自己管理
    document.body.appendChild(script);

    // 不返回清理函数，避免任何操作
  }, []);

  return (
    <div
      className="zalo-chat-widget"
      data-oaid="2104609680390170248"
      data-welcome-message="Rất vui khi được hỗ trợ bạn!"
      data-autopopup="0"
      data-width="350"
      data-height="420"
    ></div>
  );
}
