import en from '@/data/en.json';

export default function RequirementsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{en.requirements.title}</h1>
          <p className="text-xl text-indigo-100">{en.requirements.subtitle}</p>
        </div>
      </section>

      {/* Requirements Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {en.requirements.items.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                    {index + 1}
                  </span>
                  {item.title}
                </h2>
                <ul className="space-y-3">
                  {item.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start">
                      <span className="text-indigo-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Vetting Process
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Paperwork Audit</h3>
              <p className="text-sm text-gray-600">Company registration, ESOMAR membership, background checks</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Capability Interview</h3>
              <p className="text-sm text-gray-600">Video call to assess expertise, responsiveness, and problem-solving</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Pilot Project</h3>
              <p className="text-sm text-gray-600">Small-scale test project to evaluate actual performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Do you meet these requirements?</p>
          <a
            href="/supplier/apply"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start Your Application
          </a>
        </div>
      </section>
    </main>
  );
}
