'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  // 不在 /suppliers 页面渲染（该页面有自己的内联导航栏）
  // 也不在 /supplier/* 路径渲染（旧的供应商路由）
  if (pathname === '/suppliers' || pathname.startsWith('/supplier')) {
    return null;
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <Link href="/" className="text-2xl font-bold text-slate-900 tracking-tight hover:text-blue-600 transition">
            Bayes Global
          </Link>

          {/* Right: Navigation + CTA */}
          <div className="flex items-center gap-6">
            <Link
              href="/suppliers"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Become a Partner (EN)
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
