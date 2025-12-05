type ContactPageSearchParams = Promise<{
  product?: string;
}>;

type ContactPageProps = {
  searchParams: ContactPageSearchParams;
};

export default async function ContactPage(props: ContactPageProps) {
  const searchParams = await props.searchParams;
  const initialProduct = searchParams.product ?? "";

  return (
    <div className="space-y-6">
      <header className="space-y-3 border-b border-slate-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          LIÊN HỆ HỢP TÁC
        </p>
        <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          Tư vấn & Báo giá chậu rửa inox 304
        </h1>
        <p className="max-w-prose text-sm leading-relaxed text-slate-600">
          Vui lòng điền thông tin dưới đây về nhu cầu dự án của bạn (số lượng dự kiến,
          dòng sản phẩm quan tâm, tiến độ triển khai...). Đội ngũ sales kỹ thuật chuyên nghiệp 
          của Thiên Bang sẽ phản hồi trong vòng 24 giờ làm việc và cung cấp báo giá chi tiết.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <section className="rounded-lg border border-slate-200 bg-white p-4 text-xs text-slate-700">
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label
                  htmlFor="company"
                  className="text-[11px] font-medium text-slate-700"
                >
                  Tên công ty / đơn vị *
                </label>
                <input
                  id="company"
                  name="company"
                  required
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none ring-0 focus:border-slate-400 focus:bg-white"
                  placeholder="VD: Công ty TNHH Xây dựng ABC"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="contact"
                  className="text-[11px] font-medium text-slate-700"
                >
                  Người liên hệ *
                </label>
                <input
                  id="contact"
                  name="contact"
                  required
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none ring-0 focus:border-slate-400 focus:bg-white"
                  placeholder="Họ và tên"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-[11px] font-medium text-slate-700"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none ring-0 focus:border-slate-400 focus:bg-white"
                  placeholder="sales@company.vn"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="phone"
                  className="text-[11px] font-medium text-slate-700"
                >
                  Số điện thoại *
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none ring-0 focus:border-slate-400 focus:bg-white"
                  placeholder="VD: 0901 234 567"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="product"
                className="text-[11px] font-medium text-slate-700"
              >
                Mã sản phẩm quan tâm
              </label>
              <input
                id="product"
                name="product"
                defaultValue={initialProduct}
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none ring-0 focus:border-slate-400 focus:bg-white"
                placeholder="VD: SX-7843-1B (có thể nhập nhiều mã, cách nhau bởi dấu phẩy)"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-[11px] font-medium text-slate-700"
              >
                Nhu cầu dự án / ghi chú *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none ring-0 focus:border-slate-400 focus:bg-white"
                placeholder="VD: Dự án căn hộ 500 căn, cần chậu rửa 1 hố cho bếp chính, tiến độ giao hàng Q3/2025..."
              />
            </div>

            <p className="text-[11px] text-slate-500">
              * Thông tin chỉ được sử dụng để liên hệ tư vấn & gửi báo giá, không
              chia sẻ cho bên thứ ba.
            </p>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-xs font-semibold text-white transition hover:bg-slate-800"
            >
              Gửi yêu cầu tư vấn
            </button>
          </form>
        </section>

        <aside className="space-y-4 text-xs text-slate-700">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold text-slate-900">
              Thông tin liên hệ
            </h2>
            <dl className="space-y-3">
              <div>
                <dt className="mb-1 text-[11px] font-medium text-slate-500">Công ty</dt>
                <dd className="font-medium text-slate-900">
                  CÔNG TY TNHH THƯƠNG MẠI QUỐC TẾ THIÊN BANG VIỆT NAM
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-[11px] font-medium text-slate-500">Địa chỉ</dt>
                <dd className="text-slate-700">
                  19 Đường Số 1, Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-[11px] font-medium text-slate-500">Email</dt>
                <dd className="font-medium text-slate-900">
                  sales@kabalon.vn
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-[11px] font-medium text-slate-500">Hotline</dt>
                <dd className="font-medium text-slate-900">0981 675 008</dd>
              </div>
              <div>
                <dt className="mb-1 text-[11px] font-medium text-slate-500">Thời gian làm việc</dt>
                <dd className="text-slate-700">Thứ 2 – Thứ 6, 8:30 – 17:30 (GMT+7)</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">
              Dịch vụ hỗ trợ đối tác B2B
            </h2>
            <ul className="space-y-2 text-[11px] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-slate-400">•</span>
                <span>Hỗ trợ bản vẽ kỹ thuật & file CAD cho thiết kế dự án</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-slate-400">•</span>
                <span>Tư vấn lựa chọn vật liệu, độ dày inox theo ngân sách dự án</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-slate-400">•</span>
                <span>Tùy chỉnh logo, bao bì theo yêu cầu OEM cho đối tác</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-slate-400">•</span>
                <span>Hỗ trợ mẫu test và phương án logistics tối ưu</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}



