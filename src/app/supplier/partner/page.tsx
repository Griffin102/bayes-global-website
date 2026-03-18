import Link from 'next/link';
import en from '@/data/en.json';

export default function PartnerPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{en.partner.title}</h1>
          <p className="text-xl text-indigo-100">{en.partner.subtitle}</p>
        </div>
      </section>

      {/* Partner Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {en.partner.items.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8">
                <div className="text-5xl mb-6">
                  {['🔒', '💼', '🤝'][index]}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h2>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {en.process.title}
          </h2>
          <div className="space-y-8">
            {en.process.steps.map((step) => (
              <div key={step.num} className="flex items-start bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 mr-6">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Security Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">💰</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Never Chase an Invoice Again
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            All project funds are secured upfront via our Hong Kong entity. 
            You receive prompt payment directly from us upon milestone completion, 
            eliminating currency exchange risks and payment delays.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Interested in partnering with us?</p>
          <Link
            href="/supplier/apply"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  );
}
