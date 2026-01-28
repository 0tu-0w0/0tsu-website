// app/page.tsx
"use client"; // This directive makes it a Client Component

import Image from "next/image";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { SiPixiv } from "react-icons/si";

export default function Home() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">About Me</h2>
      <p className="leading-relaxed">
        〇〇大学で△△を学んでいます。  
        主に◯◯の制作・研究を行っています。
      </p>
    </section>
  );
}
