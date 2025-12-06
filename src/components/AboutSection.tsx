import Image from "next/image";

export function AboutSection() {
  const stats = [
    { value: "100+", label: "Mẫu sản phẩm" },
    { value: "30+", label: "Đại lý toàn quốc" },
    { value: "10+", label: "Năm kinh nghiệm" },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden shadow-lg relative aspect-[4/3]">
              <Image
                src="/jimeng2025.jpg"
                alt="Nhà máy sản xuất chậu rửa inox"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Về chúng tôi
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              CÔNG TY TNHH THƯƠNG MẠI QUỐC TẾ THIÊN BANG VIỆT NAM chuyên kết nối đối tác B2B tại thị trường Việt Nam với nhà máy sản xuất chậu rửa inox 304 tại Trung Quốc.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Chúng tôi cung cấp giải pháp nguồn hàng ổn định và dịch vụ chuyên nghiệp cho các đối tác cần nguồn sỉ chất lượng cao, giá cạnh tranh.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              我们专注于连接越南市场的B2B合作伙伴与中国304不锈钢水槽生产工厂，为需要高质量批发货源的合作伙伴提供稳定的货源解决方案和专业服务。
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-4 text-center shadow-md border border-slate-100"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#0A52A1] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


