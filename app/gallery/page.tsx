// app/gallery/page.tsx
import Gallery from "../components/Gallery";

export default function GalleryPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Gallery</h2>
      <Gallery />
    </section>
  );
}
