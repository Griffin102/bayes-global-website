import Link from 'next/link';
import Image from 'next/image';
import zh from '@/data/zh.json';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Professional Gradient */}
      <section className="section-pro-lg bg-gradient-to-br from-[#1E3A8A] via-[#1E4A8F] to-[#2563EB] text-white">
        <div className="container-pro">
          <div className="text-center max-w-5xl mx-auto px-4">
            {/* Logo */}
            <div className="flex justify-center mb-10">
              <Image
                src="/logo.png"
                alt="Bayes Global Logo"
                width={180}
                height={180}
                className="object-contain"
                priority
              />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              {zh.home.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-light">
              {zh.home.subtitle}
            </p>
            
            {/* Slogan & Tagline */}
            <div className="flex items-center justify-center gap-6 text-lg text-blue-200 mb-4">
              <span className="font-medium">{zh.home.slogan}</span>
              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span>
              <span className="italic font-light">{zh.home.tagline}</span>
            </div>
            
            {/* Regions */}
            <p className="text-base text-blue-300 font-light tracking-wide">
              {zh.home.regions}
            </p>
            
            {/* Divider */}
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto my-12 opacity-60"></div>
            
            {/* CTA Buttons - Generous Spacing */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              {/* Client Portal */}
              <Link
                href="/client"
                className="group relative px-10 py-5 bg-white text-[#1E3A8A] rounded-xl font-semibold 
                         hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl
                         min-w-[300px] text-center"
              >
                <div className="text-3xl mb-2">🏢</div>
                <div className="text-lg font-bold">{zh.home.clientButton}</div>
                <div className="text-sm text-slate-600 font-light mt-1">
                  了解我们的服务与能力
                </div>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <svg className="w-5 h-5 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Supplier Portal */}
              <Link
                href="/supplier"
                className="group relative px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-semibold 
                         hover:bg-white hover:text-[#1E3A8A] transition-all duration-300 shadow-lg hover:shadow-xl
                         min-w-[300px] text-center"
              >
                <div className="text-3xl mb-2">🤝</div>
                <div className="text-lg font-bold">{zh.home.supplierButton}</div>
                <div className="text-sm text-blue-100 font-light mt-1">
                  Become Our Partner
                </div>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section - Clean White Space */}
      <section className="section-pro bg-white">
        <div className="container-pro">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {/* Indicator 1 */}
            <div className="card-pro p-8 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Emerging Markets Focus</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Deep expertise in LATAM, SEA, MEA, and Africa
              </p>
            </div>
            
            {/* Indicator 2 */}
            <div className="card-pro p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">100% Authentic Voices</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Rigorous quality control for genuine insights
              </p>
            </div>
            
            {/* Indicator 3 */}
            <div className="card-pro p-8 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Global Compliance</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                LGPD, GDPR compliant operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container-pro">
          <div className="text-center text-slate-500 text-sm">
            <p>{zh.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
