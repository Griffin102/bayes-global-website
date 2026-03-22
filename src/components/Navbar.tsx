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
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - 点击返回首页 */}
          <Link href="/" className="flex items-center gap-3">
            <Globe2 className={`w-8 h-8 transition ${isScrolled ? "text-slate-900" : "text-white"}`} />
            <span className={`text-xl font-bold transition ${isScrolled ? "text-slate-900" : "text-white"}`}>
              Bayes Global
            </span>
          </Link>

          {/* Navigation Links - 修复锚点 */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className={`font-medium transition ${isScrolled ? "text-slate-700 hover:text-slate-900" : "text-white/90 hover:text-white"}`}>
              首页
            </a>
            <a href="#pm" className={`font-medium transition ${isScrolled ? "text-slate-700 hover:text-slate-900" : "text-white/90 hover:text-white"}`}>
              核心方案
            </a>
            <a href="#qa" className={`font-medium transition ${isScrolled ? "text-slate-700 hover:text-slate-900" : "text-white/90 hover:text-white"}`}>
              质控与合规
            </a>
            <a href="#network" className={`font-medium transition ${isScrolled ? "text-slate-700 hover:text-slate-900" : "text-white/90 hover:text-white"}`}>
              全球网络
            </a>
            <a href="#insights" className={`font-medium transition ${isScrolled ? "text-slate-700 hover:text-slate-900" : "text-white/90 hover:text-white"}`}>
              市场洞察
            </a>
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
