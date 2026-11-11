"use client";

import Image from "next/image";
import { useState } from "react";
import { MediaFallback } from "@/components/MediaFallback";

type FillImageProps = {
  src: string;
  alt: string;
  sizes: string;
  preload?: boolean;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  className?: string;
};

export function FillImage({
  src,
  alt,
  sizes,
  preload = false,
  loading,
  fetchPriority,
  className = "object-cover",
}: FillImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <MediaFallback label={alt} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      preload={preload}
      loading={preload ? undefined : loading}
      fetchPriority={preload ? undefined : fetchPriority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
