"use client";

import { useState, useEffect } from "react";
import { Globe2 } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A192F]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Globe2 className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">Bayes Global</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/90 hover:text-white font-medium transition">
              首页
            </a>
            <a href="#solutions" className="text-white/90 hover:text-white font-medium transition">
              核心方案
            </a>
            <a href="#qa" className="text-white/90 hover:text-white font-medium transition">
              质控与合规
            </a>
            <a href="#network" className="text-white/90 hover:text-white font-medium transition">
              全球网络
            </a>
            <Link href="/insights" className="text-white/90 hover:text-white font-medium transition">
              市场洞察
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/suppliers"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </nav>
  );
}
