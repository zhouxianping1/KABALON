import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage(props: ProductDetailPageProps) {
  const params = await props.params;
  const product = getProductBySlug(params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 sm:mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-600"
        >
          <Link
            href="/"
            className="hover:text-[#0A52A1] transition-colors"
          >
            Trang chủ
          </Link>
          <span className="text-slate-400">/</span>
          <Link
            href="/products"
            className="hover:text-[#0A52A1] transition-colors"
          >
            Sản phẩm
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-900 font-medium">{product.nameVi}</span>
        </nav>

        {/* Header Section */}
        <header className="mb-8 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#0A52A1] mb-2">
            PRODUCT DETAIL
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {product.nameVi}
          </h1>
          {product.nameZh && (
            <p className="text-base text-slate-600 mb-4">{product.nameZh}</p>
          )}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-500">Mã sản phẩm:</span>
              <span className="inline-flex items-center rounded-full bg-[#0A52A1]/10 px-3 py-1 text-xs font-semibold text-[#0A52A1]">
                {product.code}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-500">Kích thước:</span>
              <span className="font-semibold text-slate-900">{product.size}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-500">Màu sắc:</span>
              <span className="font-semibold text-slate-900">{product.color}</span>
            </div>
          </div>
          {product.priceRangeVnd && (
            <div className="mt-4">
              <p className="text-lg sm:text-xl font-bold text-[#0A52A1]">
                {product.priceRangeVnd}
              </p>
            </div>
          )}
        </header>

        {/* Main Content Grid */}
        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr] items-start">
          {/* Product Image Section */}
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-md">
              {product.image ? (
                <div className="w-full overflow-hidden rounded-lg bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.nameVi}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-64 sm:h-96 rounded-lg bg-slate-100 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">No Image</span>
                </div>
              )}
            </div>

            {/* Product Description */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-md">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Mô tả sản phẩm
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {product.nameVi}
              </p>
            </div>
          </div>

          {/* Product Info Sidebar */}
          <div className="space-y-6">
            {/* Technical Specifications */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-md">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Thông số kỹ thuật
              </h2>
              <dl className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="text-xs text-slate-500 mb-1">Kích thước</dt>
                  <dd className="font-semibold text-slate-900">{product.size}</dd>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="text-xs text-slate-500 mb-1">Mã sản phẩm</dt>
                  <dd className="font-semibold text-slate-900">{product.code}</dd>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="text-xs text-slate-500 mb-1">Độ dày inox</dt>
                  <dd className="font-semibold text-slate-900">{product.thickness}</dd>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="text-xs text-slate-500 mb-1">Màu sắc</dt>
                  <dd className="font-semibold text-slate-900">{product.color}</dd>
                </div>
                <div className="rounded-lg bg-slate-50 p-3 col-span-2">
                  <dt className="text-xs text-slate-500 mb-1">Vật liệu</dt>
                  <dd className="font-semibold text-slate-900">Inox 304</dd>
                </div>
              </dl>
            </div>

            {/* Features */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-md">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Điểm nổi bật
              </h2>
              <ul className="space-y-3">
                {product.featuresVi.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#0A52A1]" />
                    <span className="text-sm text-slate-600 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Card */}
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 sm:p-6 shadow-md">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">
                Cần báo giá hoặc bản vẽ kỹ thuật?
              </h2>
              <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                Vui lòng gửi yêu cầu qua email hoặc để lại thông tin tại trang liên hệ.
                Đội ngũ sales kỹ thuật của Kabalon sẽ phản hồi trong vòng 24 giờ làm việc.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`/contact?product=${encodeURIComponent(product.code)}`}
                  className="flex-1 inline-flex items-center justify-center h-12 rounded-xl bg-[#0A52A1] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Liên hệ ngay
                </a>
                <a
                  href={`mailto:sales@kabalon.vn?subject=Bao%20gia%20${encodeURIComponent(
                    product.code,
                  )}`}
                  className="flex-1 inline-flex items-center justify-center h-12 rounded-xl border-2 border-[#0A52A1] text-[#0A52A1] font-semibold text-sm hover:bg-[#0A52A1] hover:text-white transition-all duration-300"
                >
                  Gửi email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Products Button */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Quay lại danh sách sản phẩm
          </Link>
        </div>
      </div>
    </div>
  );
}



