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
          {product.name}
        </h1>
        <p className="max-w-prose text-xs text-slate-600">
          Mã sản phẩm: <span className="font-semibold">{product.code}</span> •{" "}
          Kích thước:{" "}
          <span className="font-semibold">{product.size}</span> • Vật liệu:{" "}
          <span className="font-semibold">{product.material}</span>
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-4">
          <div className="mb-2 h-56 rounded-md bg-slate-100" />
          <p className="text-xs text-slate-600">{product.shortDescription}</p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-xs">
            <h2 className="mb-2 text-sm font-semibold text-slate-900">
              Thông số kỹ thuật
            </h2>
            <dl className="grid grid-cols-2 gap-2 text-slate-600">
              <div>
                <dt className="text-slate-500">Kích thước tổng thể</dt>
                <dd className="font-medium">
                  {product.specs.lengthMm} x {product.specs.widthMm} mm
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Độ sâu hố</dt>
                <dd className="font-medium">{product.specs.depthMm} mm</dd>
              </div>
              <div>
                <dt className="text-slate-500">Độ dày inox</dt>
                <dd className="font-medium">{product.thickness}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Số hố</dt>
                <dd className="font-medium">{product.bowlCount} hố</dd>
              </div>
              <div>
                <dt className="text-slate-500">Bề mặt</dt>
                <dd className="font-medium">{product.surface}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Kiểu lắp đặt</dt>
                <dd className="font-medium">{product.installation}</dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-4 text-xs md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h2 className="mb-2 text-sm font-semibold text-slate-900">
                Điểm nổi bật
              </h2>
              <ul className="space-y-1 text-slate-600">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h2 className="mb-2 text-sm font-semibold text-slate-900">
                Ứng dụng đề xuất
              </h2>
              <ul className="space-y-1 text-slate-600">
                {product.applications.map((application) => (
                  <li key={application} className="flex gap-2">
                    <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>
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



