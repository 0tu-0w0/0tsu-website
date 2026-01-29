// app/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-5xl mx-auto h-16 flex items-center justify-center">
        <nav className="text-sm tracking-widest">
          <Link href="/" className="hover:text-gray-500 transition">
            home
          </Link>

          <span className="mx-3 text-gray-400">|</span>

          <Link href="/profile" className="hover:text-gray-500 transition">
            profile
          </Link>

          <span className="mx-3 text-gray-400">|</span>

          <Link href="/gallery" className="hover:text-gray-500 transition">
            gallery
          </Link>

          <span className="mx-3 text-gray-400">|</span>

          <Link href="/works" className="hover:text-gray-500 transition">
            works
          </Link>

          <span className="mx-3 text-gray-400">|</span>

          <Link href="/contact" className="hover:text-gray-500 transition">
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
