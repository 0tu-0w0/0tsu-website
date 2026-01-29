// app/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* ロゴ / サイト名 */}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          My Portfolio
        </Link>

        {/* ナビゲーション */}
        <nav className="flex gap-6 text-sm">
          <Link
            href="/"
            className="hover:text-gray-500 transition"
          >
            Home
          </Link>
          <Link
            href="/gallery"
            className="hover:text-gray-500 transition"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-500 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

