'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isSupplierPage = pathname === '/suppliers';

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
            {isSupplierPage && (
              <Link href="/" className="text-sm text-slate-600 hover:text-blue-600 transition">
                中文版 / For Clients
              </Link>
            )}
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
