import { ShieldCheck, Users, Globe2, Zap, CheckCircle, AlertTriangle, Brain, Lock, ArrowRight, Calendar } from "lucide-react";
import { insightsData } from "@/data/insights";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Video Background */}
      <section className="relative h-screen min-h-[800px] text-white overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0A192F]/70 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm animate-fade-in">
              <Globe2 className="w-4 h-4" /> Emerging Markets Specialists
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 animate-fade-in-up">
              赋能中国企业出海<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                深潜新兴市场
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl animate-fade-in-up animation-delay-200">
              我们专注于拉美、亚太、中东与非洲的定性研究招募与实地执行。跨越语言与文化鸿沟，为您提供一站式、高合规、100% 保真的真实用户声音 (Authentic Voices)。
            </p>

            <a
              href="#client-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-900/50 hover:shadow-xl group animate-fade-in-up animation-delay-400"
            >
              提交项目需求
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">15+</div>
              <div className="text-sm text-slate-500 font-medium">新兴市场深度覆盖</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">100%</div>
              <div className="text-sm text-slate-500 font-medium">真实回访与本土核验</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">3 层</div>
              <div className="text-sm text-slate-500 font-medium">极其严苛的防欺诈质控</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">0</div>
              <div className="text-sm text-slate-500 font-medium">文化盲区与合规风险</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points - Alternating Layout */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">为什么选择 Bayes Global</h2>
            <p className="text-slate-600">我们理解中国出海企业在新兴市场面临的核心挑战，并提供经过验证的解决方案。</p>
          </div>

          <div className="space-y-16">
            {/* Pain Point 1 - Left Text, Right Image */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">招募极难 & 高爽约</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  新兴市场 B2B/医疗等稀缺人群触达困难，传统供应商储备不足导致高爽约率。我们的 N+50% 冗余储备策略确保每个项目都能按时完成。
                </p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="font-semibold text-emerald-900">Bayes 方案</span>
                  </div>
                  <p className="text-emerald-800">
                    N+50% 冗余储备，三级提醒 SOP，专业的多语种/稀缺人群触达能力。
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000)" }}
                  ></div>
                  <div className="relative h-80 bg-slate-800/50"></div>
                </div>
              </div>
            </div>

            {/* Pain Point 2 - Left Image, Right Text */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000)" }}
                  ></div>
                  <div className="relative h-80 bg-slate-800/50"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">黑盒盲招 & 质量失控</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  供应商执行过程不透明，无法实时追踪进度，交付质量难以把控。我们的透明化看板让您随时掌握项目进展。
                </p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="font-semibold text-emerald-900">Bayes 方案</span>
                  </div>
                  <p className="text-emerald-800">
                    全流程透明化看板 (Live Status Dashboard)，背景资料实时更新，随时可查。
                  </p>
                </div>
              </div>
            </div>

            {/* Pain Point 3 - Left Text, Right Image */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">合规严苛 & 文化雷区</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  各国数据隐私法规复杂，文化差异导致调研设计出现政治/宗教敏感问题。我们的本地团队帮您避开所有雷区。
                </p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="font-semibold text-emerald-900">Bayes 方案</span>
                  </div>
                  <p className="text-emerald-800">
                    严格遵循 LGPD 等数据隐私法规，Kick-off 阶段本地化预警，政治红线审查。
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2000)" }}
                  ></div>
                  <div className="relative h-80 bg-slate-800/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Triple QA System */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">三重质控体系 (Multi-Layered QA)</h2>
            <p className="text-slate-600">每一层都有独立的验证机制，确保样本质量 100% 可靠。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* QA Layer 1 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                1
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">人工核实</h3>
                <p className="text-slate-600 leading-relaxed">
                  社交轨迹调查，访前验真与语言测试。我们的本地团队会验证受访者的社交媒体真实性，并进行预访谈确保语言能力达标。
                </p>
              </div>
            </div>

            {/* QA Layer 2 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                2
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition">
                  <Brain className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">技术排查</h3>
                <p className="text-slate-600 leading-relaxed">
                  AI 声纹/人脸防欺诈，语义冲突检测，杜绝职业受访者。我们使用先进的 AI 工具识别异常模式，确保每个样本都是真实用户。
                </p>
              </div>
            </div>

            {/* QA Layer 3 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                3
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition">
                  <ShieldCheck className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">最终兜底</h3>
                <p className="text-slate-600 leading-relaxed">
                  不合格样本免费重招，信用扣分机制。如果任何样本在客户审核阶段被发现不合格，我们免费重新招募并承担全部责任。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">全球执行网络 (Global Reach)</h2>
            <p className="text-slate-400">我们专注于增长最快、但也最需要本地资源落地的新兴市场。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <Globe2 className="w-8 h-8 text-white mb-3" />
                <h4 className="text-2xl font-bold mb-2">拉美 (Latin America)</h4>
                <p className="text-slate-300 text-sm">巴西、墨西哥、阿根廷、智利、哥伦比亚</p>
              </div>
            </div>

            <div className="group relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-800">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <Globe2 className="w-8 h-8 text-white mb-3" />
                <h4 className="text-2xl font-bold mb-2">亚太 (APAC)</h4>
                <p className="text-slate-300 text-sm">印尼、泰国、越南、菲律宾、马来西亚</p>
              </div>
            </div>

            <div className="group relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-600 to-amber-800">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <Globe2 className="w-8 h-8 text-white mb-3" />
                <h4 className="text-2xl font-bold mb-2">中东非 (MEA)</h4>
                <p className="text-slate-300 text-sm">沙特、阿联酋、南非、尼日利亚、肯尼亚</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section id="insights" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">新兴市场洞察</h2>
              <p className="text-slate-600 max-w-xl">来自一线的真实洞察与实战经验。</p>
              <p className="text-slate-500 text-sm mt-2">Real insights from the frontlines of emerging markets.</p>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition mt-4 md:mt-0 group"
            >
              View All Insights
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insightsData.slice(0, 3).map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${article.coverImage})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {article.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/90 text-slate-900 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{article.publishDate}</span>
                    </div>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Client Contact Form */}
      <section id="client-form" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">提交项目需求</h2>
            <p className="text-slate-600">告诉我们您的研究需求，我们会在 24 小时内与您联系。</p>
          </div>

          <form action="https://formspree.io/f/myknlrwq" method="POST" className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <input type="hidden" name="Form_Source" value="【中国出海客户 - 项目需求】" />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="client-name" className="block text-sm font-medium text-slate-700 mb-2">
                  姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="client-name"
                  name="Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label htmlFor="client-company" className="block text-sm font-medium text-slate-700 mb-2">
                  公司名称 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="client-company"
                  name="Company"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="请输入公司名称"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="client-email" className="block text-sm font-medium text-slate-700 mb-2">
                工作邮箱 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="client-email"
                name="Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                placeholder="name@company.com"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="client-message" className="block text-sm font-medium text-slate-700 mb-2">
                项目需求简述 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="client-message"
                name="Message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                placeholder="请简要描述您的研究目标、目标市场、样本需求等信息..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-900/30 hover:shadow-xl flex items-center justify-center gap-2"
            >
              发送项目需求
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
              © {new Date().getFullYear()} Bayes Global. 专注海外新兴市场定性招募与实地执行。
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
