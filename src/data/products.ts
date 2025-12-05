export type Product = {
  slug: string; // URL 标识，如 "ma02-82x44"
  code: string; // MÃ SỐ：如 "MÃ 02"
  nameVi: string; // 越南语产品名
  nameZh: string; // 中文产品名
  size: string; // 尺寸：例如 "82×44cm"
  color: string; // 颜色：Inox / Đen
  thickness: string; // 厚度：例如 "4.0mm"
  priceRangeVnd: string; // 价格区间描述：例如 "≈ 1.332.000đ/chiếc"
  featuresVi: string[]; // 越南语卖点列表
  featuresZh: string[]; // 中文卖点列表
  image?: string; // 产品图片 URL（可选）
};

export const products: Product[] = [
  // MÃ 07 – Inox 304, 78×48cm, màu inox, dày 4.0, giá khoảng 960.000đ
  {
    slug: "ma07-78x48-inox",
    code: "MÃ 07",
    nameVi: "Chậu rửa bát inox MÃ 07 – 78×48cm, inox 304, màu inox",
    nameZh: "不锈钢水槽 型号 07 – 78×48cm，304 不锈钢，本色",
    size: "78×48cm",
    color: "Inox",
    thickness: "4.0mm",
    priceRangeVnd: "≈ 960.000đ/chiếc (tham khảo)",
    image: "/product1.jpeg", // 第1个产品图片
    featuresVi: [
      "Sử dụng inox 304 cho độ bền và khả năng chống gỉ tốt trong môi trường bếp Việt",
      "Kích thước 78×48cm phù hợp phần lớn tủ bếp tiêu chuẩn cho nhà phố, căn hộ",
      "Độ dày 4.0mm cho cảm giác chắc chắn, hạn chế cong vênh khi sử dụng lâu dài",
      "Thiết kế lòng chậu sâu, giảm bắn nước khi rửa xoong nồi kích thước lớn",
      "Phù hợp làm model tiêu chuẩn cho dự án cần chất lượng ổn định",
    ],
    featuresZh: [
      "采用 304 不锈钢材质，在潮湿厨房环境中也能保持防锈性能",
      "78×48cm 尺寸适配大部分越南常见橱柜开孔尺寸",
      "4.0mm 面板厚度，手感扎实，长期使用不易变形",
      "槽体较深，适合清洗大锅大盘，减少水花外溅",
      "适合做工程标配款，质量稳定、交付可靠",
    ],
  },
  // MÃ 07 – 68×46cm, màu inox, dày 4.0
  {
    slug: "ma07-68x46-inox",
    code: "MÃ 07",
    nameVi: "Chậu rửa bát inox MÃ 07 – 68×46cm, màu inox",
    nameZh: "不锈钢水槽 型号 07 – 68×46cm，本色款",
    size: "68×46cm",
    color: "Inox",
    thickness: "4.0mm",
    priceRangeVnd: "Liên hệ để nhận báo giá theo số lượng",
    image: "/product2.jpeg", // 第2个产品图片
    featuresVi: [
      "Kích thước 68×46cm gọn hơn, phù hợp căn hộ nhỏ và bếp có mặt đá hạn chế",
      "Giữ nguyên thiết kế và cảm giác sử dụng của dòng MÃ 07 full size",
      "Độ dày 4.0mm giúp mặt chậu không bị rung khi lắp vòi cao hoặc dùng lâu dài",
      "Phù hợp dự án căn hộ diện tích vừa và nhỏ, cần tối ưu chi phí mặt bằng bếp",
    ],
    featuresZh: [
      "68×46cm 紧凑尺寸，适合厨房台面空间有限的户型",
      "延续 07 系列的结构设计和用水体验，只是尺寸更小",
      "4.0mm 厚度保证台面受力稳定，配高款龙头也不易晃动",
      "契合中小面积公寓项目，对厨房空间更敏感的客户群体",
    ],
  },
  // MÃ 07 – 78×48cm, màu đen, dày 4.0
  {
    slug: "ma07-78x48-den",
    code: "MÃ 07",
    nameVi: "Chậu rửa bát inox MÃ 07 – 78×48cm, màu đen",
    nameZh: "不锈钢水槽 型号 07 – 78×48cm，黑色款",
    size: "78×48cm",
    color: "Đen",
    thickness: "4.0mm",
    priceRangeVnd: "Giá tham khảo, tùy hoàn thiện bề mặt & phụ kiện",
    image: "/product3.jpeg", // 第3个产品图片
    featuresVi: [
      "Hoàn thiện màu đen hiện đại, phù hợp bếp phong cách tối giản hoặc tông tối",
      "Giữ nguyên form và kích thước 78×48cm, dễ thay thế cho bản màu inox",
      "Độ dày 4.0mm, hạn chế biến dạng trong quá trình vận chuyển và lắp đặt",
      "Tạo điểm nhấn thẩm mỹ cho khu vực chậu rửa trong các thiết kế bếp cao cấp",
    ],
    featuresZh: [
      "黑色外观，更适合现代、极简或深色系厨房设计",
      "与 78×48cm 本色版共用结构，工程替换和选型更简单",
      "4.0mm 厚度，在运输及安装过程中更不易弯曲损坏",
      "可作为高端样板房或精装项目的视觉亮点",
    ],
  },
  // MÃ 02 – 82×44cm, inox 304, dày 4.0, giá khoảng 1.332.000đ
  {
    slug: "ma02-82x44-inox",
    code: "MÃ 02",
    nameVi: "Chậu rửa bát inox MÃ 02 – 82×44cm, inox 304",
    nameZh: "不锈钢水槽 型号 02 – 82×44cm，304 不锈钢",
    size: "82×44cm",
    color: "Inox",
    thickness: "4.0mm",
    priceRangeVnd: "≈ 1.332.000đ/chiếc (tùy số lượng & cấu hình)",
    image: "/product1.jpeg", // 第4个产品图片（暂时使用 product1，后续可替换）
    featuresVi: [
      "Inox 304 dày 4.0mm, phù hợp phân khúc trung cao cấp",
      "Kích thước 82×44cm cho lòng chậu rộng, thao tác thoải mái khi rửa",
      "Giá khoảng 1.332.000đ/chiếc, cân bằng giữa chi phí và độ bền sử dụng",
      "Phù hợp làm lựa chọn chính cho dự án chú trọng hình ảnh và trải nghiệm",
    ],
    featuresZh: [
      "4.0mm 厚 304 不锈钢，用料扎实，定位中高端项目",
      "82×44cm 尺寸提供更宽的操作空间，洗涤更舒适",
      "约 1.332.000đ/台（视数量及配置），在成本与耐用度之间取得平衡",
      "适合作为强调体验与质感的精装修或样板房主推型号",
    ],
  },
  // MÃ 02 – 80×45cm, inox 304
  {
    slug: "ma02-80x45-inox",
    code: "MÃ 02",
    nameVi: "Chậu rửa bát inox MÃ 02 – 80×45cm, inox 304",
    nameZh: "不锈钢水槽 型号 02 – 80×45cm，304 不锈钢",
    size: "80×45cm",
    color: "Inox",
    thickness: "4.0mm",
    priceRangeVnd: "Giá linh hoạt theo cấu hình & phụ kiện đi kèm",
    featuresVi: [
      "Biến thể kích thước 80×45cm giúp dễ thiết kế mặt đá và tủ bếp",
      "Giữ nguyên vật liệu inox 304 cho độ bền và chống gỉ tốt",
      "Dễ kết hợp với nhiều loại vòi chậu phổ biến trên thị trường",
      "Thích hợp cho nhà phố, biệt thự và dự án cần đồng bộ nhiều căn",
    ],
    featuresZh: [
      "80×45cm 尺寸更通用，方便设计橱柜与石材台面开孔",
      "同样采用 304 不锈钢，保证耐腐蚀和使用寿命",
      "与市面主流龙头尺寸兼容性好，选配更轻松",
      "适用于联排别墅、城郊住宅等需要大量统一配置的项目",
    ],
  },
  // MÃ 03 – 75×45cm, inox 304, giá tốt hơn, phù hợp khách cần giá cạnh tranh
  {
    slug: "ma03-75x45-inox",
    code: "MÃ 03",
    nameVi: "Chậu rửa bát inox MÃ 03 – 75×45cm, inox 304, giá cạnh tranh",
    nameZh: "不锈钢水槽 型号 03 – 75×45cm，304 不锈钢，性价比款",
    size: "75×45cm",
    color: "Inox",
    thickness: "4.0mm",
    priceRangeVnd: "Tối ưu cho dự án cần giá tốt, số lượng lớn",
    featuresVi: [
      "Thiết kế 75×45cm tối ưu diện tích, vẫn đủ không gian cho sử dụng hằng ngày",
      "Giữ inox 304 nhưng tối ưu cấu hình để có giá tốt hơn MÃ 02",
      "Phù hợp khách hàng và dự án ưu tiên giá cạnh tranh trên số lượng lớn",
      "Thích hợp cho nhà ở thương mại, dự án nhà ở xã hội hoặc phân khúc trung cấp",
    ],
    featuresZh: [
      "75×45cm 提供日常使用足够空间，同时更节省台面面积",
      "仍然使用 304 不锈钢，通过配置优化来压低成本",
      "适合对单价敏感、但仍需可靠品质的批量工程项目",
      "可用于商品房、保障性住房或中端定位楼盘的大批量采购",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}



