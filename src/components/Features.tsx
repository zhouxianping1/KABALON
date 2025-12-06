/* eslint-disable @next/next/no-img-element */
export function Features() {
  const features = [
    {
      icon: "/房子.svg",
      title: "Giá tốt từ nhà máy",
      description: "Kết nối trực tiếp với nhà máy sản xuất tại Trung Quốc, giá sỉ cạnh tranh, không qua trung gian.",
    },
    {
      icon: "/生产制造.svg",
      title: "Inox 304 chuẩn quốc tế",
      description: "Sản phẩm đạt tiêu chuẩn inox 304, độ bền cao, chống gỉ tốt, phù hợp môi trường bếp Việt Nam.",
    },
    {
      icon: "/代理.svg",
      title: "Hỗ trợ đại lý toàn quốc",
      description: "Dịch vụ chuyên nghiệp B2B, hỗ trợ đại lý trên toàn quốc với logistics tối ưu và mix mẫu linh hoạt.",
    },
    {
      icon: "/照相机.svg",
      title: "Cung cấp video + hình ảnh bán hàng",
      description: "Hỗ trợ marketing: video sản phẩm, hình ảnh chất lượng cao, file CAD, bản vẽ kỹ thuật cho đối tác.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100"
            >
              <div className="mb-4 h-12 w-12 rounded-xl bg-[#0A52A1]/10 flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

