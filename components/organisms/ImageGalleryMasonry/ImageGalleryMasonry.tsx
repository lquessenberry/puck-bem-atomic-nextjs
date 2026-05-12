"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ImageGalleryMasonry.module.scss";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: "1-1" | "4-3" | "3-4" | "16-9";
}

export interface ImageGalleryMasonryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

const aspectRatioMap = {
  "1-1": "1 / 1",
  "4-3": "4 / 3",
  "3-4": "3 / 4",
  "16-9": "16 / 9",
};

export function ImageGalleryMasonry({
  images,
  columns = 3,
}: ImageGalleryMasonryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div
        className={[
          styles.imageGallery,
          styles[`imageGallery--cols-${columns}`],
        ].join(" ")}
      >
        {images.map((image) => (
          <button
            key={image.id}
            type="button"
            className={styles.imageGallery__item}
            onClick={() => setSelectedImage(image)}
            style={
              {
                "--aspect-ratio": aspectRatioMap[image.aspectRatio],
              } as React.CSSProperties
            }
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={styles.imageGallery__image}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className={styles.imageGallery__overlay}>
              <svg
                className={styles.imageGallery__icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className={styles.lightbox__close}
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div className={styles.lightbox__content}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className={styles.lightbox__image}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGalleryMasonry;
