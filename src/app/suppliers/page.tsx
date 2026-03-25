import { Globe2, DollarSign, FileText, TrendingUp, CheckCircle, Building2, UserCheck } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function SuppliersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 供应商端导航栏 - 深色，唯一 Header */}
      <nav className="bg-[#0A192F] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/suppliers" className="flex items-center gap-3">
              <Globe2 className="w-8 h-8" />
              <span className="text-xl font-bold">Bayes Global</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#why-partner" className="text-white/90 hover:text-white font-medium transition">
                Why Partner With Us
              </a>
              <a href="#founder" className="text-white/90 hover:text-white font-medium transition">
                About
              </a>
              <a href="#requirements" className="text-white/90 hover:text-white font-medium transition">
                Requirements
              </a>
              <a href="#apply" className="text-white/90 hover:text-white font-medium transition">
                Apply
              </a>
            </div>

            <Link
              href="/"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Client Portal (中文官网)
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* 区块 1：Hero 首屏 - 深色全球商业背景图 */}
        <section className="relative py-24 text-white overflow-hidden">
          {/* 背景图 */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop')" }}
          ></div>
          {/* 深色遮罩 */}
          <div className="absolute inset-0 bg-[#0A192F]/85 z-10"></div>
          
          {/* 内容 */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Powering Global Fieldwork,<br className="hidden md:block" />
              Connecting You to China&apos;s Going-Global Wave
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Join our trusted network to execute high-quality qualitative research for China&apos;s top enterprises.
            </p>
          </div>
        </section>

        {/* 区块 2：Why Partner With Us - 3 格布局，居中对齐 */}
        <section id="why-partner" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Partner With Us?</h2>
              <p className="text-slate-600">We build partnerships, not just vendor relationships.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 卡片 1：Guaranteed & Prompt Payments - 居中对齐 */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 hover:shadow-lg transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Guaranteed & Prompt Payments</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We value your hard work. Enjoy transparent payment schedules with absolutely zero delayed settlements.
                  </p>
                </div>
              </div>

              {/* 卡片 2：Crystal Clear Briefs - 居中对齐 */}
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100 hover:shadow-lg transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Crystal Clear Briefs</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Say goodbye to endless revisions. We provide standardized, unambiguous project briefs backed by rigorous SOPs.
                  </p>
                </div>
              </div>

              {/* 卡片 3：Consistent Project Flow - 居中对齐 */}
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 border border-amber-100 hover:shadow-lg transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Consistent Project Flow</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Gain access to a steady stream of qualitative research projects from top-tier Chinese global enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 区块 3：创始人背书 - 专业图文左右排版，居中对齐 */}
        <section id="founder" className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 左侧：创始人照片 */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src="/founder-photo.png"
                      alt="Griffin Wang, Founder of Bayes Global"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 右侧：文案 */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                  A Partner with Deep Expertise
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Hello, I&apos;m Griffin Wang. After 15 years on the front lines of market research in China, we&apos;re witnessing an unprecedented wave: 1 million+ Chinese companies are going abroad, and every single one faces the same challenge—cracking local consumer behavior, navigating cultural nuances, and localizing their offerings. This is exactly why overseas market research demand is at a record peak.
                  </p>
                  <p>
                    I founded Bayes Global to be the strategic solution—a trustworthy bridge built on my experience and backed by the financial integrity of our Hong Kong operating entity. We enable exceptional agencies like yours to securely seize this historic opportunity. I am not just a middleman; I am your project partner and quality guarantor, ensuring a steady flow of high-quality projects and guaranteed payments.
                  </p>
                  <p className="font-medium text-slate-900 italic">
                    — Griffin Wang, Founder of Bayes Global
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 区块 4：高效的合作旅程 - 4 步骤流程 */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Collaborate</h2>
              <p className="text-slate-600">A streamlined partnership journey designed for efficiency and clarity.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Clear Project Briefing</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We provide unambiguous recruitment quotas and execution standards, eliminating confusion from the start.
                  </p>
                </div>
                {/* 连接线 */}
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Streamlined Recruitment</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You handle local outreach; we provide AI-assisted screening tools for efficient candidate validation.
                  </p>
                </div>
                {/* 连接线 */}
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-200"></div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 border border-amber-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Smooth Execution</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Full support throughout the project with minimal micromanagement—trust your expertise.
                  </p>
                </div>
                {/* 连接线 */}
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-200"></div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning-Fast Payment</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Immediate payment upon delivery acceptance—no delays, no excuses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 区块 5：我们的绝对承诺 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Commitment</h2>
              <p className="text-slate-600">The principles that guide every partnership.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 承诺 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Respect for Local Expertise</h3>
                <p className="text-slate-600 leading-relaxed">
                  We value your on-the-ground knowledge and never undermine your professional judgment.
                </p>
              </div>

              {/* 承诺 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Data Privacy Compliance</h3>
                <p className="text-slate-600 leading-relaxed">
                  Strict adherence to local privacy laws and international data protection standards.
                </p>
              </div>

              {/* 承诺 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Long-term Partnership</h3>
                <p className="text-slate-600 leading-relaxed">
                  We build lasting ecosystems, not one-off transactions. Your growth is our growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 区块 4：准入要求 - 两条入驻通道 */}
        <section id="requirements" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Two Partnership Tracks</h2>

              <div className="space-y-8">
                {/* Track 1: Local Fieldwork Agencies */}
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl p-8 border border-blue-100 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">Track 1: Local Fieldwork Agencies</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        For established agencies with verifiable physical offices and full-suite qualitative capabilities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Track 2: Independent Expert Network */}
                <div className="bg-gradient-to-r from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">Track 2: Independent Expert Network</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        For seasoned freelance moderators and native translators with verifiable LinkedIn credentials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 区块 5：入驻申请表单 */}
        <section id="apply" className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Partner Application</h2>
              <p className="text-slate-600">Tell us about your capabilities and we&apos;ll get back to you within 48 hours.</p>
            </div>

            <form
              action="https://formspree.io/f/your-supplier-form-id"
              method="POST"
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    placeholder="your@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">
                  Partner Type
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                >
                  <option value="">Select your track</option>
                  <option value="agency">Track 1: Local Fieldwork Agency</option>
                  <option value="consultant">Track 2: Independent Expert (Moderator/Translator)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="linkedin" className="block text-sm font-medium text-slate-700 mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Tell Us About Your Capabilities
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none"
                  placeholder="Describe your experience, coverage area, specialties..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-900/50 hover:shadow-xl"
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* 全局 Footer */}
      <Footer />
    </div>
  );
}
