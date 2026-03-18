import zh from '@/data/zh.json';

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{zh.services.title}</h1>
          <p className="text-xl text-blue-100">{zh.services.subtitle}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Qualitative Research */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="text-5xl mb-6">🔍</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {zh.services.qualitative.title}
              </h2>
              <ul className="space-y-4">
                {zh.services.qualitative.items.map((item, index) => (
                  <li key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                    <span className="text-blue-600 mr-3 text-xl">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recruitment & Facilities */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <div className="text-5xl mb-6">📋</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {zh.services.recruitment.title}
              </h2>
              <ul className="space-y-4">
                {zh.services.recruitment.items.map((item, index) => (
                  <li key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                    <span className="text-indigo-600 mr-3 text-xl">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            为什么选择 Bayes Global？
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zh.advantages.items.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">
                  {['🎯', '📊', '🌐', '✅', '🛡️'][index]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {zh.industries.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {zh.industries.items.map((item, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
