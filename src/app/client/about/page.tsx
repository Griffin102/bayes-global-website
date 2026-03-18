import zh from '@/data/zh.json';

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{zh.about.title}</h1>
          <p className="text-xl text-blue-100">{zh.about.subtitle}</p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {zh.about.description}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {zh.about.mission}
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {zh.leadership.title}
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl text-white font-bold">
                王
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{zh.leadership.name}</h3>
              <p className="text-gray-600">{zh.leadership.role}</p>
            </div>
            <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50 rounded-r-lg">
              <p className="text-gray-700 italic text-lg">"{zh.leadership.quote}"</p>
            </blockquote>
            <div className="space-y-4">
              {zh.leadership.background.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">→</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">想要了解更多？</p>
          <a
            href="mailto:griffin@bayesglobal.com"
            className="text-blue-600 hover:underline text-lg font-semibold"
          >
            griffin@bayesglobal.com
          </a>
          <p className="text-gray-500 mt-2">+86 186 0075 4056</p>
        </div>
      </section>
    </main>
  );
}
