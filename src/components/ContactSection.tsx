"use client";

import Image from "next/image";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // 清除之前的错误/成功消息
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  // 格式化消息内容
  const formatMessage = (): string => {
    let message = "Xin chào! Tôi quan tâm đến sản phẩm của bạn.\n\n";
    message += "Thông tin liên hệ:\n";
    message += `- Họ và tên: ${formData.name}\n`;
    message += `- Số điện thoại: ${formData.phone}\n`;
    if (formData.message.trim()) {
      message += `\nNội dung: ${formData.message}`;
    }
    return message;
  };

  // 检测是否为移动设备
  const isMobileDevice = (): boolean => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768;
  };

  // 自动填写并发送 Zalo 消息
  const sendToZalo = async (message: string) => {
    const zaloPhone = "0981675008";
    
    try {
      // 先复制消息到剪贴板（作为备用方案）
      await navigator.clipboard.writeText(message);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }

    // 检测设备类型并打开 Zalo
    if (isMobileDevice()) {
      // 移动端：使用 Zalo 应用深层链接，尝试自动填写消息
      // 注意：Zalo 应用可能不支持自动填写，但会尝试打开聊天窗口
      const encodedMessage = encodeURIComponent(message);
      
      // 方法1：尝试使用 zalo:// scheme（如果支持）
      try {
        // 尝试打开 Zalo 应用并传递消息
        window.location.href = `zalo://chat?phone=${zaloPhone}&message=${encodedMessage}`;
        
        // 备用：如果应用未安装或打开失败，2秒后打开网页版
        setTimeout(() => {
          // 网页版 Zalo：打开聊天页面，消息已在剪贴板中
          window.open(`https://zalo.me/${zaloPhone}`, '_blank');
        }, 2000);
      } catch (error) {
        console.error("Failed to submit contact form:", error);
        // 如果深层链接失败，打开网页版
        window.open(`https://zalo.me/${zaloPhone}`, '_blank');
      }
    } else {
      // 桌面端：打开 Zalo 网页版
      // 使用 Zalo 网页版的 URL 参数（如果支持）
      const encodedMessage = encodeURIComponent(message);
      const zaloUrl = `https://zalo.me/${zaloPhone}?message=${encodedMessage}`;
      
      // 打开新窗口
      const zaloWindow = window.open(zaloUrl, '_blank', 'noopener,noreferrer');
      
      // 等待 Zalo 页面加载后，尝试自动填写
      if (zaloWindow) {
        // 注意：由于跨域限制，无法直接操作 Zalo 页面的 DOM
        // 但消息已在剪贴板中，用户可以粘贴
        
        // 尝试在页面加载后发送键盘事件（如果可能）
        setTimeout(() => {
          try {
            // 由于跨域限制，这通常不会工作
            // 但我们可以尝试通过 postMessage 或其他方法
            console.log("Zalo window opened, message is in clipboard");
          } catch (error) {
            console.error("Cannot interact with Zalo window due to CORS:", error);
          }
        }, 1000);
      }
    }
    
    // 返回提示信息
    return {
      success: true,
      message: "Đã mở Zalo! Tin nhắn đã được sao chép vào bộ nhớ tạm. Vui lòng dán tin nhắn vào Zalo (Ctrl+V / Cmd+V) và gửi đi.",
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证必填字段
    if (!formData.name.trim() || !formData.phone.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Vui lòng điền đầy đủ họ tên và số điện thoại.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // 格式化消息内容
      const formattedMessage = formatMessage();
      
      // 发送到 Zalo（自动填写并打开）
      const result = await sendToZalo(formattedMessage);
      
      if (result.success) {
        // 显示成功提示
        setSubmitStatus({
          type: "success",
          message: result.message || "Đã mở Zalo! Tin nhắn đã được sao chép. Vui lòng dán tin nhắn vào Zalo (Ctrl+V / Cmd+V) và gửi đi.",
        });
        
        // 清空表单
        setFormData({
          name: "",
          phone: "",
          message: "",
        });
        
        // 滚动到顶部显示成功消息
        const section = document.getElementById("contact");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        throw new Error("Failed to open Zalo");
      }
    } catch (error) {
      // 错误处理
      console.error("Error sending to Zalo:", error);
      setSubmitStatus({
        type: "error",
        message: "Không thể mở Zalo. Vui lòng thử lại hoặc liên hệ trực tiếp: https://zalo.me/0981675008",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Hãy gửi thông tin để chúng tôi tư vấn và báo giá tốt nhất cho bạn
          </p>
        </div>

        {/* Success/Error Message */}
        {submitStatus.type && (
          <div
            className={`mb-6 rounded-xl border p-4 shadow-md ${
              submitStatus.type === "success"
                ? "border-green-200 bg-green-50 text-green-800"
                : "border-red-200 bg-red-50 text-red-800"
            }`}
          >
            <div className="flex items-start gap-3">
              {submitStatus.type === "success" ? (
                <svg
                  className="h-5 w-5 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Form */}
          <div className="rounded-xl bg-slate-50 p-6 sm:p-8 shadow-md border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Họ và tên *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-[#0A52A1] focus:ring-2 focus:ring-[#0A52A1]/20 outline-none transition-all text-base"
                  placeholder="Nhập họ và tên"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  autoComplete="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-[#0A52A1] focus:ring-2 focus:ring-[#0A52A1]/20 outline-none transition-all text-base"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Nội dung tin nhắn
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  autoComplete="off"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0A52A1] focus:ring-2 focus:ring-[#0A52A1]/20 outline-none transition-all text-base resize-none"
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl bg-[#0A52A1] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Đang gửi...</span>
                  </>
                ) : (
                  "Gửi tin nhắn"
                )}
              </button>
            </form>
          </div>

          {/* Right: Zalo QR & Contact Info */}
          <div className="space-y-6">
            {/* Zalo QR */}
            <div className="rounded-xl bg-slate-50 p-6 sm:p-8 shadow-md border border-slate-200 text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Liên hệ qua Zalo
              </h3>
              <div className="mb-4 flex justify-center">
                <div className="w-48 h-48 rounded-xl bg-white p-4 shadow-sm border border-slate-200 flex items-center justify-center overflow-hidden relative">
                  <Image
                    src="/0fe857a444e1adbff4f0.jpg"
                    alt="Zalo QR Code - 0981 675 008"
                    fill
                    className="object-contain"
                    sizes="192px"
                  />
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">0981 675 008</p>
              <a
                href="https://zalo.me/0981675008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-[#0A52A1] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Mở Zalo ngay
              </a>
            </div>

            {/* Contact Info */}
            <div className="rounded-xl bg-slate-50 p-6 sm:p-8 shadow-md border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Thông tin liên hệ
              </h3>
              <div className="space-y-3 text-base text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-[#0A52A1]">📍</span>
                  <span>
                    19 Đường Số 1, Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#0A52A1]">📞</span>
                  <a
                    href="tel:0981675008"
                    className="font-semibold hover:text-[#0A52A1] transition-colors"
                  >
                    0981 675 008
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#0A52A1]">✉️</span>
                  <a
                    href="mailto:sales@kabalon.vn"
                    className="font-semibold hover:text-[#0A52A1] transition-colors"
                  >
                    sales@kabalon.vn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

