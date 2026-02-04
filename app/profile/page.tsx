//app/profile/page.tsx

import Image from "next/image";

export default function ProfilePage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex flex-col sm:flex-row gap-10 items-center sm:items-start justify-between">

        {/* Left Image */}
        <div className="flex-shrink-0">
          <div className="relative w-[320px] h-[480px] rounded-[160px] bg-stone-100 overflow-hidden shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Profile illustration" //public/profile.jpgに置く
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="text-sm leading-loose text-gray-700 space-y-4 max-w-md">
          <h1 className="text-2xl tracking-wide font-semibold mb-4">
            おつ <span className="text-base ml-2">0tsu</span>
          </h1>



          <p>
            2004年9月14日生まれ、新潟県出身
          </p>

          <p>
            趣味でイラストを描いたりプログラミングの勉強をしています。
          </p>
        </div>
      </div>
    </section>
  );
}

