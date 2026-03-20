import { ShieldCheck, TrendingUp, Handshake, FileText, Rocket, Clock, Zap } from "lucide-react";

export default function SuppliersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> Grow Your Research Business
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Powering Global Fieldwork.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Accelerating Your China Market Entry.
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl">
              We are your strategic gateway to the Chinese market. Partner with us to access a steady stream of high-value research projects, backed by 100% payment security.
            </p>
            
            <a
              href="#supplier-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-emerald-900/50 hover:shadow-xl"
            >
              Apply to Join Our Network
              <Rocket className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Partner Advantage */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Partner Advantage</h2>
            <p className="text-slate-600">Why leading fieldwork teams choose to partner with Bayes Global.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">100% Payment Security</h3>
              <p className="text-slate-600 leading-relaxed">
                Never worry about chasing an invoice again. As your general contractor, we secure all project funds upfront via our Hong Kong entity. On time, every time. No more payment delays or currency complications.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Access High-Value Projects</h3>
              <p className="text-slate-600 leading-relaxed">
                Stop wasting resources on uncertain leads. We bring you a curated pipeline of pre-qualified projects from China's leading globalizing companies. Focus on what you do best – flawless execution.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                <Handshake className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Streamlined Partnership</h3>
              <p className="text-slate-600 leading-relaxed">
                We bridge cultural and language gaps, translate client needs into actionable SOWs, and act as your single expert point of contact. No more miscommunication or scope creep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Simple 3-Step Process</h2>
            <p className="text-slate-600">Clear, transparent, and efficient. That's how we work.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Receive Project Brief</h3>
                <p className="text-slate-600 leading-relaxed">
                  Clear SOW with detailed requirements, timelines, and compensation. You review and provide your quote – no hidden fees or surprises.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  <Rocket className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Execute Flawlessly</h3>
                <p className="text-slate-600 leading-relaxed">
                  You focus on fieldwork excellence. We handle client communication, provide real-time support, and resolve any issues proactively.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Get Paid On Time</h3>
                <p className="text-slate-600 leading-relaxed">
                  Prompt payment upon delivery confirmation. No invoice chasing, no payment terms longer than 30 days. Your cash flow matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplier Application Form */}
      <section id="supplier-form" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Apply to Join Our Network</h2>
            <p className="text-slate-600">Tell us about your agency. We'll review your application and get back to you within 48 hours.</p>
          </div>

          <form action="https://formspree.io/f/myknlrwq" method="POST" className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            {/* Hidden Field */}
            <input type="hidden" name="Form_Source" value="【Global Supplier-Application】" />

            {/* Company Legal Name */}
            <div className="mb-6">
              <label htmlFor="supplier-company" className="block text-sm font-medium text-slate-700 mb-2">
                Company Legal Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="supplier-company"
                name="Company_Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                placeholder="e.g., XYZ Research Ltd."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Country */}
              <div>
                <label htmlFor="supplier-country" className="block text-sm font-medium text-slate-700 mb-2">
                  Country (HQ) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="supplier-country"
                  name="Country"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                  placeholder="e.g., Brazil"
                />
              </div>

              {/* Website */}
              <div>
                <label htmlFor="supplier-website" className="block text-sm font-medium text-slate-700 mb-2">
                  Company Website <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="supplier-website"
                  name="Website"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                  placeholder="https://yourcompany.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Your Name */}
              <div>
                <label htmlFor="supplier-name" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="supplier-name"
                  name="Contact_Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                  placeholder="Your full name"
                />
              </div>

              {/* Your Email */}
              <div>
                <label htmlFor="supplier-email" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="supplier-email"
                  name="Contact_Email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                  placeholder="you@yourcompany.com"
                />
              </div>
            </div>

            {/* Specialties */}
            <div className="mb-8">
              <label htmlFor="supplier-specialties" className="block text-sm font-medium text-slate-700 mb-2">
                Your Agency's Key Specialties <span className="text-red-500">*</span>
              </label>
              <textarea
                id="supplier-specialties"
                name="Specialties"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none resize-none"
                placeholder="e.g., Qualitative research, quantitative surveys, UX research, healthcare studies, B2B recruitment, etc."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-emerald-900/30 hover:shadow-xl flex items-center justify-center gap-2"
            >
              Submit Application
              <Zap className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-slate-900 mb-4 md:mb-0">Bayes Global</div>
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} Bayes Global. Powering Fieldwork in Emerging Markets.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
