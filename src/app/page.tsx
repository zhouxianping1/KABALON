import Link from "next/link";
import { products } from "@/data/products";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductImage } from "@/components/ProductImage";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-10">
      <HeroCarousel />
      
      {/* 公司介绍 */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
            Về Công ty TNHH TMQT Thiên Bang Việt Nam
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            CÔNG TY TNHH THƯƠNG MẠI QUỐC TẾ THIÊN BANG VIỆT NAM
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3 text-xs text-slate-700">
            <p className="leading-relaxed">
              Chúng tôi chuyên kết nối đối tác B2B tại thị trường Việt Nam với nhà máy sản xuất 
              chậu rửa inox 304 tại Trung Quốc, cung cấp giải pháp nguồn hàng ổn định và dịch vụ 
              chuyên nghiệp cho các đối tác cần nguồn sỉ chất lượng cao.
          </p>
            <p className="leading-relaxed text-slate-600">
              我们专注于连接越南市场的B2B合作伙伴与中国304不锈钢水槽生产工厂，为需要高质量批发货源的合作伙伴提供稳定的货源解决方案和专业服务。
            </p>
          </div>
          <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs">
            <h3 className="font-semibold text-slate-900">Thông tin công ty</h3>
            <dl className="space-y-2 text-slate-700">
              <div>
                <dt className="text-[11px] text-slate-500">Địa chỉ</dt>
                <dd>19 Đường Số 1, Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh</dd>
              </div>
              <div>
                <dt className="text-[11px] text-slate-500">Hotline</dt>
                <dd className="font-medium">0981 675 008</dd>
              </div>
              <div>
                <dt className="text-[11px] text-slate-500">Email</dt>
                <dd className="font-medium">sales@kabalon.vn</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 核心优势 */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
            Lý do chọn hợp tác cùng Thiên Bang
          </h2>
          <p className="mt-1 text-xs text-slate-600">
            Đối tác tin cậy cho các doanh nghiệp B2B cần nguồn hàng chậu rửa inox 304 ổn định, chất lượng cao
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
              <span className="text-lg">🏭</span>
            </div>
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Kết nối trực tiếp nhà máy
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-600">
              直接对接中国工厂，减少中间环节，确保价格优势和货源稳定。Giá sỉ từ xưởng, 
              nguồn hàng ổn định, không qua trung gian.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
              <span className="text-lg">✓</span>
            </div>
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Chất lượng Inox 304 đạt chuẩn
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-600">
              304不锈钢标准质量，多尺寸适配越南市场。Sản phẩm đạt tiêu chuẩn, 
              quy cách đa dạng phù hợp thị trường Việt Nam.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
              <span className="text-lg">🎯</span>
            </div>
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Dịch vụ chuyên nghiệp B2B
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-600">
              专业B2B服务：技术图纸、CAD文件、OEM定制支持。Hỗ trợ bản vẽ kỹ thuật, 
              file CAD, tùy chỉnh OEM theo yêu cầu.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
              <span className="text-lg">📦</span>
            </div>
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Hỗ trợ logistics tối ưu
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-600">
              优化物流方案，支持混批出货，降低压货风险。Phương án vận chuyển tối ưu, 
              hỗ trợ mix mẫu linh hoạt cho đối tác.
            </p>
          </div>
        </div>
      </section>

      {/* 目标客户 */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
            Đối tác phù hợp
          </h2>
          <p className="mt-1 text-xs text-slate-600">
            Chúng tôi phục vụ các đối tác B2B cần nguồn hàng chậu rửa inox 304 chuyên nghiệp
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-xs">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Nhà phân phối & Đại lý
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-600">
              Nhà bán sỉ, đại lý thiết bị bếp, vật liệu xây dựng tại Việt Nam cần nguồn hàng ổn định.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 text-xs">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Doanh nghiệp dự án
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-600">
              Chủ đầu tư, nhà thầu, công ty nội thất cần nguồn hàng cho dự án căn hộ, khách sạn, nhà hàng.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 text-xs">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Kênh bán hàng online
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-600">
              TikTok Shop, sàn thương mại điện tử, shop online cần nguồn hàng chất lượng với hỗ trợ marketing.
            </p>
          </div>
        </div>
      </section>

      {/* 主推产品 */}
      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              Sản phẩm tiêu biểu
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Danh mục chậu rửa inox 304 phù hợp cho đối tác B2B, đại lý và dự án
            </p>
          </div>

          <Link
            href="/products"
            className="text-xs font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700"
          >
            Xem toàn bộ danh sách →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="flex flex-col rounded-lg border border-slate-200 bg-white p-4 text-xs shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <ProductImage src={product.image} alt={product.nameVi} />
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold text-slate-500">
                  {product.code}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-700">
                  {product.color}
                </span>
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-900 line-clamp-2">
                {product.nameVi}
              </h3>
              <p className="mb-1 text-[11px] text-slate-600">
                Kích thước: {product.size}
              </p>
              <p className="mb-2 text-[11px] text-slate-600">
                Giá tham khảo:{" "}
                <span className="font-semibold">{product.priceRangeVnd}</span>
              </p>
              <span className="mt-auto inline-flex w-fit rounded-full bg-slate-900 px-2 py-1 text-[10px] font-medium text-white">
                Xem chi tiết
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 合作流程 */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
            Quy trình hợp tác
          </h2>
          <p className="mt-1 text-xs text-slate-600">
            Quy trình chuyên nghiệp, rõ ràng, hỗ trợ đối tác từ tư vấn đến giao hàng
          </p>
        </div>

        <ol className="grid gap-4 md:grid-cols-4 text-xs">
          <li className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="mb-1 text-[11px] font-semibold text-slate-500">
              Bước 1
            </p>
            <p className="font-semibold text-slate-900">
              Khách gửi nhu cầu & số lượng
            </p>
            <p className="mt-1 text-[11px] text-slate-600">
              Mô tả sơ bộ kênh bán, phân khúc khách, kích thước mong muốn và
              số lượng dự kiến.
            </p>
          </li>
          <li className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="mb-1 text-[11px] font-semibold text-slate-500">
              Bước 2
            </p>
            <p className="font-semibold text-slate-900">
              Gửi bảng giá & mẫu phù hợp
            </p>
            <p className="mt-1 text-[11px] text-slate-600">
              Đề xuất vài model chính, kèm giá sỉ, hình ảnh và video hỗ trợ
              bán hàng.
            </p>
          </li>
          <li className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="mb-1 text-[11px] font-semibold text-slate-500">
              Bước 3
            </p>
            <p className="font-semibold text-slate-900">
              Xác nhận đơn & sản xuất/đóng gói
            </p>
            <p className="mt-1 text-[11px] text-slate-600">
              Chốt số lượng, mix mẫu, cấu hình packing; tiến hành sản xuất /
              chuẩn bị hàng.
            </p>
          </li>
          <li className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="mb-1 text-[11px] font-semibold text-slate-500">
              Bước 4
            </p>
            <p className="font-semibold text-slate-900">
              Giao hàng về kho Việt Nam / kho khách
            </p>
            <p className="mt-1 text-[11px] text-slate-600">
              Hỗ trợ phương án vận chuyển tối ưu chi phí; giao về kho Việt Nam
              hoặc kho chỉ định.
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}
