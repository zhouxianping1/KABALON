import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Thiên Bang Việt Nam</h3>
            <p className="text-base text-slate-300 leading-relaxed">
              CÔNG TY TNHH THƯƠNG MẠI QUỐC TẾ THIÊN BANG VIỆT NAM
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              Nguồn sỉ chậu rửa bát inox 304 cho thị trường Việt Nam
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Liên hệ</h3>
            <div className="space-y-2 text-base text-slate-300">
              <p>
                <span className="font-medium">Địa chỉ:</span> 19 Đường Số 1,
                Phường Phú Thuận, Quận 7, TP. Hồ Chí Minh
              </p>
              <p>
                <span className="font-medium">Hotline:</span>{" "}
                <a
                  href="tel:0981675008"
                  className="hover:text-white transition-colors"
                >
                  0981 675 008
                </a>
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:sales@kabalon.vn"
                  className="hover:text-white transition-colors"
                >
                  sales@kabalon.vn
                </a>
              </p>
              <p>
                <span className="font-medium">Zalo:</span>{" "}
                <a
                  href="https://zalo.me/0981675008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  0981 675 008
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Thiên Bang Việt Nam. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


