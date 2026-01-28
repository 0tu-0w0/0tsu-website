// app/components/Header.tsx
import Link from "next/link";

export default function Header() {
   return (
    <header className="border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-xl">My Portfolio</h1>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
