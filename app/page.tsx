// app/page.tsx
"use client"; // This directive makes it a Client Component

import Image from "next/image";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { SiPixiv } from "react-icons/si";

// Define the structure for a social media link
interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>; // Icon component
  color: string; // Brand color
}

// Your social media links
const socialLinks: SocialLink[] = [
  { name: "Twitter / X", url: "https://twitter.com/_0tmz4_09", icon: FaTwitter, color: "#1DA1F2" },
  { name: "GitHub", url: "https://github.com/0tu-0w0", icon: FaGithub, color: "#333" },
  { name: "Pixiv", url: "https://www.pixiv.net/users/110858681", icon: SiPixiv, color: "#0096FA" },
];

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
