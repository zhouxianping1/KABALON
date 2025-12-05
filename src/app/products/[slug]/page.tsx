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
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          PRODUCT DETAIL
        </p>
        <h1 className="text-xl font-semibold text-slate-900">
          {product.nameVi}
        </h1>
        <p className="max-w-prose text-xs text-slate-600">
          Mã sản phẩm: <span className="font-semibold">{product.code}</span> •{" "}
          Kích thước:{" "}
          <span className="font-semibold">{product.size}</span> • Màu sắc:{" "}
          <span className="font-semibold">{product.color}</span>
        </p>
        {product.priceRangeVnd && (
          <p className="text-sm font-semibold text-slate-900">
            {product.priceRangeVnd}
          </p>
        )}
      </header>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-4">
          {product.image ? (
            <div className="mb-4 h-56 w-full overflow-hidden rounded-md bg-slate-100">
              <img
                src={product.image}
                alt={product.nameVi}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="mb-2 h-56 rounded-md bg-slate-100" />
          )}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">
              Mô tả sản phẩm
            </h3>
            <p className="text-xs text-slate-600">{product.nameVi}</p>
            {product.nameZh && (
              <p className="text-xs text-slate-500">{product.nameZh}</p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-xs">
            <h2 className="mb-2 text-sm font-semibold text-slate-900">
              Thông số kỹ thuật
            </h2>
            <dl className="grid grid-cols-2 gap-2 text-slate-600">
              <div>
                <dt className="text-slate-500">Kích thước</dt>
                <dd className="font-medium">{product.size}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Mã sản phẩm</dt>
                <dd className="font-medium">{product.code}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Độ dày inox</dt>
                <dd className="font-medium">{product.thickness}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Màu sắc</dt>
                <dd className="font-medium">{product.color}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Vật liệu</dt>
                <dd className="font-medium">Inox 304</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h2 className="mb-2 text-sm font-semibold text-slate-900">
              Điểm nổi bật
            </h2>
            <ul className="space-y-1 text-xs text-slate-600">
              {product.featuresVi.map((feature, index) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-xs text-slate-700">
            <p className="mb-2 font-semibold text-slate-900">
              Cần bản vẽ kỹ thuật hoặc báo giá cho model này?
            </p>
            <p>
              Vui lòng gửi yêu cầu qua{" "}
              <a
                href={`mailto:sales@kabalon.vn?subject=Bao%20gia%20${encodeURIComponent(
                  product.code,
                )}`}
                className="font-semibold text-slate-900 underline underline-offset-2"
              >
                sales@kabalon.vn
              </a>{" "}
              hoặc để lại thông tin tại trang{" "}
              <a
                href={`/contact?product=${encodeURIComponent(product.code)}`}
                className="font-semibold text-slate-900 underline underline-offset-2"
              >
                Liên hệ
              </a>
              . Đội ngũ sales kỹ thuật của Kabalon sẽ phản hồi trong vòng 24 giờ
              làm việc.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}



