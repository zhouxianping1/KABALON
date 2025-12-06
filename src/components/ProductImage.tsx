"use client";

import { useState } from "react";

type ProductImageProps = {
  src?: string;
  alt: string;
};

export function ProductImage({ src, alt }: ProductImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return <div className="mb-3 h-24 rounded-md bg-slate-100" />;
  }

  return (
    <div className="mb-3 h-24 rounded-md overflow-hidden bg-slate-100">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}



