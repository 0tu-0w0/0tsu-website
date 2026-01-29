// app/components/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b relative">
      <div className="max-w-5xl mx-auto px-6 py-40 h-16 flex flex-col items-center justify-center gap-3">

        {/* 画像ロゴ(リンク付き) */}
        <Link href="/" className="mb-6">
          <Image
            src="public/next.svg"   // ここにロゴ画像のパスを指定
            alt="Site Logo"
            width={140}
            height={70}
            className="hover:opacity-80 transition"
          />
        </Link>

        {/* テキストナビゲーションメニュー */}
        <nav className="absolute bottom-3 left-1/2 -translate-x-1/2 text-sm tracking-widest">
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
