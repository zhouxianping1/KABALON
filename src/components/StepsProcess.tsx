export function StepsProcess() {
  const steps = [
    {
      number: "1",
      title: "Gửi yêu cầu",
      description: "Khách hàng gửi nhu cầu về sản phẩm, số lượng và yêu cầu cụ thể. Chúng tôi sẽ tiếp nhận và phân tích nhu cầu của bạn.",
    },
    {
      number: "2",
      title: "Tư vấn – báo giá",
      description: "Đội ngũ chuyên nghiệp sẽ tư vấn và gửi bảng giá phù hợp, kèm hình ảnh, video và tài liệu hỗ trợ bán hàng.",
    },
    {
      number: "3",
      title: "Giao hàng nhanh",
      description: "Sau khi xác nhận đơn hàng, chúng tôi sẽ sản xuất và giao hàng về kho Việt Nam hoặc kho chỉ định của bạn.",
    },
  ];

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Quy trình hợp tác
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Quy trình chuyên nghiệp, rõ ràng, hỗ trợ đối tác từ tư vấn đến giao hàng
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-xl bg-white p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-[#0A52A1] text-white flex items-center justify-center text-xl font-bold shadow-lg">
                {step.number}
              </div>

              <div className="pt-4 space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-4 lg:-right-6 transform -translate-y-1/2">
                  <svg
                    className="w-8 h-8 text-[#0A52A1]/30"
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
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


