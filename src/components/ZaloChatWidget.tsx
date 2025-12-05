"use client";

import { useEffect } from "react";

// 定义 Zalo Social SDK 的类型接口
interface ZaloSocialSDK {
  init: () => void;
}

declare global {
  interface Window {
    ZaloSocialSDK?: ZaloSocialSDK;
  }
}

export default function ZaloChatWidget() {
  useEffect(() => {
    // 简化：只删除真正重复的 Widget，确保主 Widget 始终显示
    const removeDuplicateZaloWidgets = () => {
      // 查找所有的 Zalo Widget 容器
      const allWidgets = document.querySelectorAll('.zalo-chat-widget');
      
      // 如果找到多个，只保留第一个，移除其他的
      if (allWidgets.length > 1) {
        // 确保第一个 Widget 始终可见
        const firstWidget = allWidgets[0] as HTMLElement;
        firstWidget.style.display = 'block';
        firstWidget.style.visibility = 'visible';
        
        // 移除其他的 Widget
        for (let i = 1; i < allWidgets.length; i++) {
          allWidgets[i].remove();
        }
      }
    };

    // 强制设置 Zalo Widget 位置的函数
    const setZaloPosition = () => {
      const widget = document.querySelector('.zalo-chat-widget');
      if (widget) {
        const isDesktop = window.innerWidth >= 640;
        const bottom = isDesktop ? '24px' : '20px';
        const right = isDesktop ? '24px' : '20px';
        
        const widgetElement = widget as HTMLElement;
        
        // 确保 Widget 可见
        widgetElement.style.position = 'fixed';
        widgetElement.style.bottom = bottom;
        widgetElement.style.right = right;
        widgetElement.style.left = 'auto';
        widgetElement.style.top = 'auto';
        widgetElement.style.zIndex = '9999';
        widgetElement.style.margin = '0';
        widgetElement.style.display = 'block';
        widgetElement.style.visibility = 'visible';
        widgetElement.style.opacity = '1';
        
        console.log('Zalo Widget positioned at:', { bottom, right });
      } else {
        console.warn('Zalo Widget container not found');
      }
      
      // 删除重复的 Widget（但不影响主 Widget）
      removeDuplicateZaloWidgets();
    };

    // 如果脚本已存在，立即设置位置并设置监听器
    if (document.querySelector('script[src="https://sp.zalo.me/plugins/sdk.js"]')) {
      removeDuplicateZaloWidgets();
      setZaloPosition();
      const interval = setInterval(() => {
        removeDuplicateZaloWidgets();
        setZaloPosition();
      }, 300);
      
      const resizeHandler = () => {
        removeDuplicateZaloWidgets();
        setZaloPosition();
      };
      window.addEventListener('resize', resizeHandler);
      
      setTimeout(() => clearInterval(interval), 10000);
      
      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', resizeHandler);
      };
    }

    const script = document.createElement("script");
    script.src = "https://sp.zalo.me/plugins/sdk.js";
    script.async = true;
    
    script.onload = () => {
      console.log("Zalo SDK loaded successfully");
      
      // Widget 会自动初始化，但我们手动触发一下
      setTimeout(() => {
        if (window.ZaloSocialSDK && typeof window.ZaloSocialSDK.init === 'function') {
          window.ZaloSocialSDK.init();
          console.log("Zalo Widget initialized");
        }
        
        // 确保 Widget 可见
        setZaloPosition();
      }, 1000);
      
      // 持续检查并设置位置，直到 Widget 出现
      const positionInterval = setInterval(() => {
        setZaloPosition();
        
        // 检查 Widget 是否已经显示
        const widget = document.querySelector('.zalo-chat-widget');
        if (widget) {
          const hasContent = widget.children.length > 0 || widget.innerHTML.trim().length > 0;
          if (hasContent) {
            console.log("Zalo Widget is visible with content");
            clearInterval(positionInterval);
          }
        }
      }, 500);
      
      // 10秒后停止检查
      setTimeout(() => {
        clearInterval(positionInterval);
        setZaloPosition();
      }, 10000);
    };

    script.onerror = () => {
      console.error("Failed to load Zalo SDK");
    };

    document.body.appendChild(script);

    // 响应窗口大小变化
    const resizeHandler = () => {
      setZaloPosition();
    };
    window.addEventListener('resize', resizeHandler);

    // 使用 MutationObserver 监听 DOM 变化，删除重复 Widget
    const observer = new MutationObserver(() => {
      removeDuplicateZaloWidgets();
      setZaloPosition();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class'],
    });

    return () => {
      window.removeEventListener('resize', resizeHandler);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="zalo-chat-widget"
      data-oaid="2104609680390170248"
      data-welcome-message="Rất vui khi được hỗ trợ bạn!"
      data-autopopup="0"
      data-width="350"
      data-height="420"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        display: 'block',
        visibility: 'visible',
        opacity: '1',
      }}
    ></div>
  );
}

