import Link from 'next/link';
import zh from '@/data/zh.json';

export default function ClientHome() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {zh.about.subtitle}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            {zh.about.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/client/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              立即咨询
            </Link>
            <Link
              href="/client/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              了解服务
            </Link>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {zh.advantages.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zh.advantages.items.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">
                  {['🎯', '📊', '🌐', '✅', '🛡️'][index]}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {zh.services.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                🔍 {zh.services.qualitative.title}
              </h3>
              <ul className="space-y-3">
                {zh.services.qualitative.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                📋 {zh.services.recruitment.title}
              </h3>
              <ul className="space-y-3">
                {zh.services.recruitment.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {zh.coverage.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(zh.coverage.regions).map((region: any, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">{region.name}</h3>
                <p className="text-sm text-gray-600">{region.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好开启全球调研之旅了吗？</h2>
          <p className="text-blue-100 mb-8">
            无论您是需要单一市场还是多国执行，我们都能为您提供专业支持
          </p>
          <Link
            href="/client/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            立即联系
          </Link>
        </div>
      </section>
    </main>
  );
}
