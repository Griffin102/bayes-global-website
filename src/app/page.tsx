import Link from 'next/link';
import Image from 'next/image';
import zh from '@/data/zh.json';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="text-center px-4 py-16 max-w-4xl mx-auto">
        {/* Logo / Brand */}
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="Bayes Global Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {zh.home.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            {zh.home.subtitle}
          </p>
          <div className="flex items-center justify-center gap-4 text-lg text-gray-500">
            <span>{zh.home.slogan}</span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="italic">{zh.home.tagline}</span>
          </div>
          <p className="text-md text-gray-500 mt-4">{zh.home.regions}</p>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-12"></div>

        {/* Language/Role Selection */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* Client Portal Button */}
          <Link
            href="/client"
            className="group relative px-8 py-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 min-w-[280px]"
          >
            <div className="text-4xl mb-3">🏢</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {zh.home.clientButton}
            </h2>
            <p className="text-sm text-gray-500">
              了解我们的服务与能力
            </p>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Supplier Portal Button */}
          <Link
            href="/supplier"
            className="group relative px-8 py-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-500 min-w-[280px]"
          >
            <div className="text-4xl mb-3">🤝</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {zh.home.supplierButton}
            </h2>
            <p className="text-sm text-gray-500">
              Become Our Partner
            </p>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-sm text-gray-500">
          <p>{zh.footer.copyright}</p>
        </div>
      </div>
    </main>
  );
}
