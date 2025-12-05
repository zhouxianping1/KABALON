import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          PRODUCT CATALOG
        </p>
        <h1 className="text-xl font-semibold text-slate-900">
          Danh mục chậu rửa bát inox
        </h1>
        <p className="max-w-prose text-xs text-slate-600">
          Danh sách các model chậu rửa bát inox đang được Kabalon cung cấp cho
          thị trường Việt Nam. Phù hợp cho nhà thầu, OEM và đối tác phân phối
          cần catalog rõ ràng, thông số kỹ thuật đầy đủ.
        </p>
      </header>

      <div className="rounded-lg border border-slate-200 bg-white p-3 text-[11px] text-slate-600">
        Lưu ý: Hình ảnh sản phẩm trong website mang tính chất minh họa. Thông
        số kỹ thuật và lựa chọn vật liệu (Inox 201/304, độ dày, bề mặt xử lý)
        có thể tùy chỉnh theo yêu cầu dự án.
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.slug}
            className="flex flex-col rounded-lg border border-slate-200 bg-white p-4 text-xs shadow-sm"
          >
            {product.image ? (
              <div className="mb-3 h-32 w-full overflow-hidden rounded-md bg-slate-100">
                <img
                  src={product.image}
                  alt={product.nameVi}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="mb-3 h-32 rounded-md bg-slate-100" />
            )}
            <div className="mb-2 flex items-start justify-between gap-2">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  {product.nameVi}
                </h2>
                <p className="text-[11px] text-slate-500">
                  Mã: {product.code} • Kích thước: {product.size}
                </p>
              </div>
            </div>
            <p className="mb-3 line-clamp-2 text-[11px] text-slate-600">
              {product.nameVi}
            </p>
            <dl className="mb-4 grid grid-cols-2 gap-2 text-[11px]">
              <div>
                <dt className="text-slate-500">Vật liệu</dt>
                <dd className="font-medium text-slate-800">Inox 304</dd>
              </div>
              <div>
                <dt className="text-slate-500">Độ dày</dt>
                <dd className="font-medium text-slate-800">
                  {product.thickness}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Màu sắc</dt>
                <dd className="font-medium text-slate-800">{product.color}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Kích thước</dt>
                <dd className="font-medium text-slate-800">{product.size}</dd>
              </div>
            </dl>

            <div className="mt-auto flex items-center justify-between gap-2 pt-2">
              <Link
                href={`/products/${product.slug}`}
                className="text-[11px] font-semibold text-slate-900 underline underline-offset-4"
              >
                Xem chi tiết
              </Link>
              <a
                href={`/contact?product=${encodeURIComponent(product.code)}`}
                className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-medium text-white hover:bg-slate-800"
              >
                Yêu cầu báo giá
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}



