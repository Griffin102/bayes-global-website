import { ShieldCheck, Users, Globe2, Zap, CheckCircle, AlertTriangle, Brain, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium mb-6">
              <Globe2 className="w-4 h-4" /> Emerging Markets Specialists
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              赋能中国企业出海<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                深潜新兴市场
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl">
              我们专注于拉美、亚太、中东与非洲的定性研究招募与实地执行。跨越语言与文化鸿沟，为您提供一站式、高合规、100% 保真的真实用户声音 (Authentic Voices)。
            </p>
            
            <a
              href="#client-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-900/50 hover:shadow-xl"
            >
              提交项目需求
              <Zap className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-sm text-slate-500 font-medium">新兴市场深度覆盖</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-sm text-slate-500 font-medium">真实回访与本土核验</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">3 层</div>
              <div className="text-sm text-slate-500 font-medium">极其严苛的防欺诈质控</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">0</div>
              <div className="text-sm text-slate-500 font-medium">文化盲区与合规风险</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points vs Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">为什么选择 Bayes Global</h2>
            <p className="text-slate-600">我们理解中国出海企业在新兴市场面临的核心挑战，并提供经过验证的解决方案。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pain Point 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">招募极难 & 高爽约</h3>
              </div>
              <p className="text-slate-600 mb-6 text-sm">
                新兴市场 B2B/医疗等稀缺人群触达困难，传统供应商储备不足导致高爽约率。
              </p>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-emerald-900 text-sm">Bayes 方案</span>
                </div>
                <p className="text-emerald-800 text-sm">
                  N+50% 冗余储备，三级提醒 SOP，专业的多语种/稀缺人群触达能力。
                </p>
              </div>
            </div>

            {/* Pain Point 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">黑盒盲招 & 质量失控</h3>
              </div>
              <p className="text-slate-600 mb-6 text-sm">
                供应商执行过程不透明，无法实时追踪进度，交付质量难以把控。
              </p>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-emerald-900 text-sm">Bayes 方案</span>
                </div>
                <p className="text-emerald-800 text-sm">
                  全流程透明化看板 (Live Status Dashboard)，背景资料实时更新，随时可查。
                </p>
              </div>
            </div>

            {/* Pain Point 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">合规严苛 & 文化雷区</h3>
              </div>
              <p className="text-slate-600 mb-6 text-sm">
                各国数据隐私法规复杂，文化差异导致调研设计出现政治/宗教敏感问题。
              </p>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-emerald-900 text-sm">Bayes 方案</span>
                </div>
                <p className="text-emerald-800 text-sm">
                  严格遵循 LGPD 等数据隐私法规，Kick-off 阶段本地化预警，政治红线审查。
                </p>
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
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">人工核实</h3>
                <p className="text-slate-600 leading-relaxed">
                  社交轨迹调查，访前验真与语言测试。我们的本地团队会验证受访者的社交媒体真实性，并进行预访谈确保语言能力达标。
                </p>
              </div>
            </div>

            {/* QA Layer 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">技术排查</h3>
                <p className="text-slate-600 leading-relaxed">
                  AI 声纹/人脸防欺诈，语义冲突检测，杜绝职业受访者。我们使用先进的 AI 工具识别异常模式，确保每个样本都是真实用户。
                </p>
              </div>
            </div>

            {/* QA Layer 3 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
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

      {/* Client Contact Form */}
      <section id="client-form" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">提交项目需求</h2>
            <p className="text-slate-600">告诉我们您的研究需求，我们会在 24 小时内与您联系。</p>
          </div>

          <form action="https://formspree.io/f/myknlrwq" method="POST" className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            {/* Hidden Field */}
            <input type="hidden" name="Form_Source" value="【中国出海客户 - 项目需求】" />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
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

              {/* Company */}
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

            {/* Email */}
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

            {/* Project Description */}
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

            {/* Submit Button */}
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
