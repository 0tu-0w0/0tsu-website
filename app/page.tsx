// app/page.tsx
"use client"; // This directive makes it a Client Component

import Image from "next/image";

const images = [
  "/gallery/art1.jpg",
  "/gallery/art2.jpg",
  "/gallery/art3.jpg",
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((src) => (
        <Image key={src} src={src} width={400} height={400} alt="Artwork"/>
      ))}
    </div>
  );
}
