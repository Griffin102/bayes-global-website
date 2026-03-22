import { Globe2, DollarSign, FileText, TrendingUp, UserCheck, ShieldCheck, CheckCircle, Building2 } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function SuppliersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 供应商端导航栏 */}
      <nav className="bg-[#0A192F] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/suppliers" className="flex items-center gap-3">
              <Globe2 className="w-8 h-8" />
              <span className="text-xl font-bold">Bayes Global</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#why-partner" className="text-white/90 hover:text-white font-medium transition">
                Why Partner
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
              Client Portal
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* 区块 1：Hero 首屏 */}
        <section className="relative py-24 bg-gradient-to-br from-[#0A192F] to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px"
            }}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Become a Local Partner with Bayes Global
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Join our elite network of fieldwork agencies and independent consultants across LATAM, APAC, and MENA.
            </p>
          </div>
        </section>

        {/* 区块 2：Why Partner With Us? - 3 格布局 */}
        <section id="why-partner" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Partner With Us?</h2>
              <p className="text-slate-600">We build partnerships, not just vendor relationships.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 卡片 1：Guaranteed & Prompt Payments */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Guaranteed & Prompt Payments</h3>
                <p className="text-slate-600 leading-relaxed">
                  We value your hard work. Enjoy transparent payment schedules with absolutely zero delayed settlements.
                </p>
              </div>

              {/* 卡片 2：Crystal Clear Briefs */}
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Crystal Clear Briefs</h3>
                <p className="text-slate-600 leading-relaxed">
                  Say goodbye to endless revisions. We provide standardized, unambiguous project briefs backed by rigorous SOPs.
                </p>
              </div>

              {/* 卡片 3：Consistent Project Flow */}
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 border border-amber-100 hover:shadow-lg transition-all">
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
        </section>

        {/* 区块 3：创始人与技术基建 - 图文左右排版 */}
        <section id="founder" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 图片占位符 */}
              <div className="relative">
                <div className="aspect-[4/5] bg-gray-300 rounded-3xl overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto bg-gray-400 rounded-full mb-6 flex items-center justify-center">
                      <UserCheck className="w-16 h-16 text-gray-500" />
                    </div>
                    <p className="text-gray-600 text-sm">
                      Founder Photo Placeholder<br />
                      (A稳重可靠的商务男士，四十多岁)
                    </p>
                  </div>
                </div>
              </div>

              {/* 文字内容 */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                  Driven by Technology, Anchored in Trust
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Bayes Global is founded by data and technology veterans from China. We leverage cutting-edge AI tools like DeepSeek and highly structured SOPs to manage cross-border collaboration. We don&apos;t just pass messages; we streamline workflows, eliminate communication friction, and build long-term, mutually beneficial partnerships with top local executors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 区块 4：What We Look For */}
        <section id="requirements" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What We Look For in a Partner</h2>

              <div className="space-y-8">
                {/* 列表 1：Local Fieldwork Agencies */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Local Fieldwork Agencies</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Must have a verifiable physical office address and localized operational capability.
                    </p>
                  </div>
                </div>

                {/* 列表 2：Independent Consultants */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Independent Consultants (Moderators/Translators)</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Must provide a verifiable LinkedIn profile and relevant industry credentials.
                    </p>
                  </div>
                </div>

                {/* 列表 3：Shared Commitment */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Shared Commitment</h3>
                    <p className="text-slate-600 leading-relaxed">
                      All partners must be willing to undergo our Rigorous Quality Pilot and adhere to our daily check-in protocols to ensure the highest standards.
                    </p>
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
                  <option value="">Select your type</option>
                  <option value="agency">Local Fieldwork Agency</option>
                  <option value="consultant">Independent Consultant (Moderator/Translator)</option>
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
