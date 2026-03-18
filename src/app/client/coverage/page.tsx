import zh from '@/data/zh.json';

export default function CoveragePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{zh.coverage.title}</h1>
          <p className="text-xl text-blue-100">全球执行网络，本地专业团队</p>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(zh.coverage.regions).map(([key, region]: [string, any]) => (
              <div
                key={key}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {region.name}
                </h3>
                <p className="text-gray-600">{region.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              全球覆盖，本地执行
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们在每个目标市场都拥有经过严格筛选的本地合作伙伴，确保项目执行的专业性和文化适应性。
              无论是东南亚的热带雨林，还是拉美的繁华都市，我们都能为您提供高质量的实地执行服务。
            </p>
          </div>
        </div>
      </section>

      {/* On-demand Support */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            需要其他市场支持？
          </h2>
          <p className="text-gray-600 mb-6">
            除了上述核心市场，我们还可以根据您的需求提供北美、欧洲、日韩等地的执行支持。
          </p>
          <a
            href="/client/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            咨询其他市场
          </a>
        </div>
      </section>
    </main>
  );
}
