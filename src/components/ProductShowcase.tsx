import Link from "next/link";
import { products } from "@/data/products";

export function ProductShowcase() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Sản phẩm nổi bật
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Danh mục chậu rửa inox 304 phù hợp cho đối tác B2B, đại lý và dự án
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group rounded-xl bg-white border border-slate-200 p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 h-48 sm:h-56 rounded-lg overflow-hidden bg-slate-100 relative">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.nameVi}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <span>No Image</span>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-slate-500">
                    {product.code}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                    {product.color}
                  </span>
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 line-clamp-2 group-hover:text-[#0A52A1] transition-colors">
                  {product.nameVi}
                </h3>
                
                <p className="text-sm text-slate-600">
                  Kích thước: {product.size}
                </p>
                
                <p className="text-sm text-slate-700 font-semibold">
                  {product.priceRangeVnd}
                </p>
                
                <div className="pt-2">
                  <span className="inline-flex items-center text-sm font-medium text-[#0A52A1] group-hover:underline">
                    Xem chi tiết →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/products"
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-[#0A52A1] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Xem toàn bộ danh sách
          </Link>
        </div>
      </div>
    </section>
  );
}

