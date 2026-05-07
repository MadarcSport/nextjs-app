'use client';

import Image from 'next/image';
import { useState } from 'react';

type ProductImage = {
  src: string;
  alt: string;
};

export type ProductGalleryCardProps = {
  title: string;
  price: string;
  ratingLabel: string;
  images: ProductImage[];
  onAddToCart?: () => void;
  buttonLabel?: string;
};

export default function ProductGalleryCard({
  title,
  price,
  ratingLabel,
  images,
  onAddToCart,
  buttonLabel = 'Add to cart',
}: ProductGalleryCardProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]?.src ?? '');
  const activeImage = images.find((image) => image.src === selectedImage) ?? images[0];

  return (
    <article className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-[2rem] border border-stone-200 bg-gradient-to-b from-[#fffaf3] to-white p-6 shadow-[0_24px_70px_-35px_rgba(68,39,18,0.45)]">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-stone-200 bg-[#f3ebdd]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_55%)]" />
        <div className="relative aspect-[4/5] w-full">
          {activeImage ? (
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 32rem"
              className="object-cover"
            />
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {images.map((image) => {
          const isActive = image.src === selectedImage;

          return (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image.src)}
              className={[
                'relative overflow-hidden rounded-2xl border bg-[#f3ebdd] transition',
                isActive
                  ? 'border-[#9f6a35] ring-2 ring-[#e7cfa6]'
                  : 'border-stone-200 hover:border-stone-400',
              ].join(' ')}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="8rem"
                  className="object-cover"
                />
              </div>
            </button>
          );
        })}
      </div>

      <div className="space-y-2 rounded-[1.5rem] bg-white/80 p-4 shadow-inner shadow-stone-200/50">
        <p className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">{title}</p>
        <p className="text-lg font-medium text-[#9f6a35]">{price}</p>
        <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{ratingLabel}</p>
      </div>

      <button
        type="button"
        onClick={onAddToCart}
        className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#6e4422] bg-[linear-gradient(180deg,#9d6b39_0%,#7c4c26_48%,#643717_100%)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#fff7eb] shadow-[inset_0_2px_0_rgba(255,255,255,0.25),0_12px_18px_-10px_rgba(84,46,18,0.6)] transition hover:-translate-y-0.5 hover:brightness-110"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 transition group-hover:scale-105"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
          <path d="M3 4h2l2.2 10.4a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 8H7" />
        </svg>
        <span>{buttonLabel}</span>
      </button>
    </div>
  );
}