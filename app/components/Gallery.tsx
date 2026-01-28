// app/components/Gallery.tsx
import Image from "next/image";

const works = [
  "/gallery/work1.jpg",
  "/gallery/work2.jpg",
  "/gallery/work3.jpg",
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {works.map((src) => (
        <div key={src} className="border">
          <Image
            src={src}
            alt="work"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
