/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8 sm:mb-12 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#0A52A1] mb-2">
            PRODUCT CATALOG
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Danh mục chậu rửa bát inox
          </h1>
          <p className="text-base text-slate-600 max-w-3xl mx-auto sm:mx-0">
            Danh sách các model chậu rửa bát inox đang được Kabalon cung cấp cho
            thị trường Việt Nam. Phù hợp cho nhà thầu, OEM và đối tác phân phối
            cần catalog rõ ràng, thông số kỹ thuật đầy đủ.
          </p>
        </header>

        {/* Notice */}
        <div className="mb-8 sm:mb-12 rounded-xl bg-blue-50 border border-blue-100 p-4 sm:p-6 text-sm text-slate-700">
          <div className="flex items-center gap-2 mb-1">
            <img
              src="/须知.svg"
              alt="Lưu ý"
              className="w-5 h-5 flex-shrink-0"
            />
            <p className="font-medium text-slate-900">Lưu ý:</p>
          </div>
          <p>
            Hình ảnh sản phẩm trong website mang tính chất minh họa. Thông
            số kỹ thuật và lựa chọn vật liệu (Inox 201/304, độ dày, bề mặt xử lý)
            có thể tùy chỉnh theo yêu cầu dự án.
          </p>
        </div>

        {/* Products Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.slug}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              {product.image ? (
                <Link
                  href={`/products/${product.slug}`}
                  className="mb-4 h-48 sm:h-56 w-full overflow-hidden rounded-lg bg-slate-100 group-hover:opacity-90 transition-opacity relative"
                >
                  <Image
                    src={product.image}
                    alt={product.nameVi}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </Link>
              ) : (
                <div className="mb-4 h-48 sm:h-56 rounded-lg bg-slate-100 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">No Image</span>
                </div>
              )}

              {/* Product Info */}
              <div className="flex-1 space-y-3">
                {/* Code Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-full bg-[#0A52A1]/10 px-3 py-1 text-xs font-semibold text-[#0A52A1]">
                    {product.code}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {product.color}
                  </span>
                </div>

                {/* Product Name */}
                <Link href={`/products/${product.slug}`}>
                  <h2 className="text-base sm:text-lg font-semibold text-slate-900 line-clamp-2 group-hover:text-[#0A52A1] transition-colors">
                    {product.nameVi}
                  </h2>
                </Link>

                {/* Specifications Grid */}
                <dl className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-slate-50 p-2">
                    <dt className="text-xs text-slate-500 mb-1">Kích thước</dt>
                    <dd className="font-semibold text-slate-900">{product.size}</dd>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2">
                    <dt className="text-xs text-slate-500 mb-1">Độ dày</dt>
                    <dd className="font-semibold text-slate-900">{product.thickness}</dd>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2">
                    <dt className="text-xs text-slate-500 mb-1">Vật liệu</dt>
                    <dd className="font-semibold text-slate-900">Inox 304</dd>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2">
                    <dt className="text-xs text-slate-500 mb-1">Màu sắc</dt>
                    <dd className="font-semibold text-slate-900">{product.color}</dd>
                  </div>
                </dl>

                {/* Price */}
                <div className="pt-2">
                  <p className="text-sm font-semibold text-slate-900">
                    {product.priceRangeVnd}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/products/${product.slug}`}
                  className="flex-1 inline-flex items-center justify-center h-12 rounded-xl bg-[#0A52A1] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Xem chi tiết
                </Link>
                <a
                  href={`/contact?product=${encodeURIComponent(product.code)}`}
                  className="flex-1 inline-flex items-center justify-center h-12 rounded-xl border-2 border-[#0A52A1] text-[#0A52A1] font-semibold text-sm hover:bg-[#0A52A1] hover:text-white transition-all duration-300"
                >
                  Báo giá
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}



