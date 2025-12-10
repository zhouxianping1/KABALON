"use client";

import Image from "next/image";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function ContactForm() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get("product") ?? "";

  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    product: initialProduct,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // 准备发送的数据
      const submitData = {
        company: formData.company,
        contact: formData.contact,
        email: formData.email,
        phone: formData.phone,
        product: formData.product || "",
        message: formData.message,
      };

      // 调试日志（开发环境）
      if (process.env.NODE_ENV === "development") {
        console.log("Submitting form data:", submitData);
      }

      // 通过 Next.js API Route 发送数据（避免 CORS 问题）
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // 成功
        setSubmitStatus({
          type: "success",
          message: "Cảm ơn bạn! Chúng tôi đã nhận được yêu cầu và sẽ liên hệ trong vòng 24 giờ làm việc.",
        });
        // 清空表单
        setFormData({
          company: "",
          contact: "",
          email: "",
          phone: "",
          product: initialProduct,
          message: "",
        });
        // 滚动到顶部显示成功消息
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // 服务器错误
        throw new Error(data.error || `Server error: ${response.status}`);
      }
    } catch (error) {
      // 网络错误或其他错误
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại hoặc liên hệ trực tiếp qua email: sales@kabalon.vn",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar alwaysOpaque />
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8 sm:mb-12 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#0A52A1] mb-2">
            LIÊN HỆ HỢP TÁC
        </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Tư vấn & Báo giá chậu rửa inox 304
        </h1>
          <p className="text-base text-slate-600 max-w-3xl mx-auto sm:mx-0">
            Vui lòng điền thông tin dưới đây về nhu cầu dự án của bạn (số lượng dự kiến,
            dòng sản phẩm quan tâm, tiến độ triển khai...). Đội ngũ sales kỹ thuật chuyên nghiệp 
            của Thiên Bang sẽ phản hồi trong vòng 24 giờ làm việc và cung cấp báo giá chi tiết.
        </p>
      </header>

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

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: Contact Form */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Gửi yêu cầu tư vấn
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                <label
                  htmlFor="company"
                    className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Tên công ty / đơn vị *
                </label>
                <input
                  id="company"
                  name="company"
                    type="text"
                    autoComplete="organization"
                  required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-[#0A52A1] focus:ring-2 focus:ring-[#0A52A1]/20 outline-none transition-all text-base"
                  placeholder="VD: Công ty TNHH Xây dựng ABC"
                />
              </div>
                <div>
                <label
                  htmlFor="contact"
                    className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Người liên hệ *
                </label>
                <input
                  id="contact"
                  name="contact"
                    type="text"
                    autoComplete="name"
                  required
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-[#0A52A1] focus:ring-2 focus:ring-[#0A52A1]/20 outline-none transition-all text-base"
                  placeholder="Họ và tên"
                />
              </div>
            </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                <label
                  htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                    autoComplete="email"
                  required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-[#0A52A1] focus:ring-2 focus:ring-[#0A52A1]/20 outline-none transition-all text-base"
                  placeholder="sales@company.vn"
                />
              </div>
                <div>
                <label
                  htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Số điện thoại *
                </label>
                <input
                  id="phone"
                  name="phone"
                    type="tel"
                    autoComplete="tel"
                  required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-[#0A52A1] focus:ring-2 focus:ring-[#0A52A1]/20 outline-none transition-all text-base"
                  placeholder="VD: 0901 234 567"
                />
              </div>
            </div>

              <div>
              <label
                htmlFor="product"
                  className="block text-sm font-medium text-slate-700 mb-2"
              >
                Mã sản phẩm quan tâm
              </label>
              <input
                id="product"
                name="product"
                  type="text"
                  autoComplete="off"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-[#0A52A1] focus:ring-2 focus:ring-[#0A52A1]/20 outline-none transition-all text-base"
                  placeholder="VD: MÃ 07 (có thể nhập nhiều mã, cách nhau bởi dấu phẩy)"
              />
            </div>

              <div>
              <label
                htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
              >
                Nhu cầu dự án / ghi chú *
              </label>
              <textarea
                id="message"
                name="message"
                  autoComplete="off"
                required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0A52A1] focus:ring-2 focus:ring-[#0A52A1]/20 outline-none transition-all text-base resize-none"
                placeholder="VD: Dự án căn hộ 500 căn, cần chậu rửa 1 hố cho bếp chính, tiến độ giao hàng Q3/2025..."
              />
            </div>

              <p className="text-xs text-slate-500">
              * Thông tin chỉ được sử dụng để liên hệ tư vấn & gửi báo giá, không
              chia sẻ cho bên thứ ba.
            </p>

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
                  "Gửi yêu cầu tư vấn"
                )}
            </button>
          </form>
        </section>

          {/* Right: Contact Info & Services */}
          <aside className="space-y-6">
            {/* Contact Information Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md">
              <h2 className="text-xl font-semibold text-slate-900 mb-5">
                Thông tin liên hệ
            </h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-medium text-slate-500 mb-1">Công ty</dt>
                  <dd className="text-sm font-semibold text-slate-900">
                    CÔNG TY TNHH THƯƠNG MẠI QUỐC TẾ THIÊN BANG VIỆT NAM
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-slate-500 mb-1">Địa chỉ</dt>
                  <dd className="text-sm text-slate-700">
                    19 Đường Số 1, Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh
                  </dd>
                </div>
              <div>
                  <dt className="text-xs font-medium text-slate-500 mb-1">Email</dt>
                  <dd className="text-sm">
                    <a
                      href="mailto:sales@kabalon.vn"
                      className="font-semibold text-[#0A52A1] hover:underline"
                    >
                  sales@kabalon.vn
                    </a>
                </dd>
              </div>
              <div>
                  <dt className="text-xs font-medium text-slate-500 mb-1">Hotline</dt>
                  <dd className="text-sm">
                    <a
                      href="tel:0981675008"
                      className="font-semibold text-[#0A52A1] hover:underline"
                    >
                      0981 675 008
                    </a>
                  </dd>
              </div>
              <div>
                  <dt className="text-xs font-medium text-slate-500 mb-1">Thời gian làm việc</dt>
                  <dd className="text-sm text-slate-700">
                    Thứ 2 – Thứ 6, 8:30 – 17:30 (GMT+7)
                  </dd>
              </div>
            </dl>
          </div>

            {/* Zalo QR Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md text-center">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Liên hệ qua Zalo
              </h2>
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
              <p className="text-sm font-semibold text-slate-900 mb-4">0981 675 008</p>
              <a
                href="https://zalo.me/0981675008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full h-12 rounded-xl bg-[#0A52A1] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Mở Zalo ngay
              </a>
            </div>

            {/* B2B Services Card */}
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 shadow-md">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Dịch vụ hỗ trợ đối tác B2B
            </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#0A52A1]" />
                  <span>Hỗ trợ bản vẽ kỹ thuật & file CAD cho thiết kế dự án</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#0A52A1]" />
                  <span>Tư vấn lựa chọn vật liệu, độ dày inox theo ngân sách dự án</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#0A52A1]" />
                  <span>Tùy chỉnh logo, bao bì theo yêu cầu OEM cho đối tác</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#0A52A1]" />
                  <span>Hỗ trợ mẫu test và phương án logistics tối ưu</span>
                </li>
            </ul>
          </div>
        </aside>
      </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">Đang tải...</div>
        </div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}

