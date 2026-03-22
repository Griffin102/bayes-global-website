import { ShieldCheck, Users, Globe2, Zap, CheckCircle, Brain, Lock, ArrowRight, Target, FileCheck, UserCheck } from "lucide-react";
import { insightsData } from "@/data/insights";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 模块 1: 全局吸顶导航栏 */}
      <Navbar />

      {/* 模块 2: 首屏 (Hero Section) 气场重构 - 绝对居中 */}
      <section className="relative h-screen min-h-[800px] text-white overflow-hidden">
        {/* 背景视频 - 真实海外街头场景 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/5532776/5532776-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>

        {/* 深色遮罩 */}
        <div className="absolute inset-0 bg-[#0A192F]/70 z-10"></div>

        {/* 内容 - 绝对居中 */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center justify-center">
          <div className="max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in">
              <Globe2 className="w-4 h-4" /> Emerging Markets Specialists
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-8 animate-fade-in-up">
              赋能中国企业出海<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                深潜新兴市场
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
              我们专注于拉美、亚太、中东与非洲的定性研究招募与实地执行。<br className="hidden md:block" />
              跨越语言与文化鸿沟，为您提供一站式、高合规、100% 保真的真实用户声音。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
              <a
                href="#client-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-900/50 hover:shadow-xl group"
              >
                提交项目需求
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all backdrop-blur-sm border border-white/20"
              >
                了解核心方案
              </a>
            </div>
          </div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* 数据条 */}
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

      {/* 模块 3: 痛点与方案区 - 图标与排版重做（细线描边图标 + Bento Box 布局） */}
      <section id="solutions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">为什么选择 Bayes Global</h2>
            <p className="text-slate-600">我们理解中国出海企业在新兴市场面临的核心挑战，并提供经过验证的解决方案。</p>
          </div>

          {/* Bento Box 布局 */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* 痛点 1 - 招募难 */}
            <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">招募极难 & 高爽约</h3>
                  <p className="text-slate-600 leading-relaxed">
                    新兴市场 B2B/医疗等稀缺人群触达困难，传统供应商储备不足导致高爽约率。
                  </p>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000"
                  alt="海外街头人群"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
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

            {/* 痛点 2 - 黑盒盲招 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">黑盒盲招 & 质量失控</h3>
                </div>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000"
                  alt="数据网络"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-emerald-900">Bayes 方案</span>
                </div>
                <p className="text-emerald-800 text-sm">
                  全流程透明化看板，背景资料实时更新，随时可查。
                </p>
              </div>
            </div>

            {/* 痛点 3 - 合规严苛 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">合规严苛 & 文化雷区</h3>
                </div>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000"
                  alt="商务合同签署"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-emerald-900">Bayes 方案</span>
                </div>
                <p className="text-emerald-800 text-sm">
                  严格遵循 LGPD 等数据隐私法规，Kick-off 阶段本地化预警，政治红线审查。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 模块 4: 三重质控体系 - 文案风控修改 */}
      <section id="qa" className="py-24 bg-white">
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
                  <UserCheck className="w-7 h-7 text-blue-600" />
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

            {/* QA Layer 3 - 文案风控修改 */}
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
                  <span className="font-semibold text-emerald-700">欺诈与不符配额样本 100% 免费重补。</span>
                  如果任何样本在客户审核阶段被发现不合格，我们免费重新招募并承担全部责任。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 模块 5: 全球执行网络 - 地图可视化 */}
      <section id="network" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">全球执行网络 (Global Reach)</h2>
            <p className="text-slate-400">我们专注于增长最快、但也最需要本地资源落地的新兴市场。</p>
          </div>

          {/* 世界地图可视化 */}
          <div className="relative mb-12">
            <div className="aspect-[2/1] bg-slate-800 rounded-3xl overflow-hidden relative">
              {/* 简化世界地图 SVG */}
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                {/* 世界地图背景 */}
                <rect fill="#1E293B" width="1000" height="500"/>
                
                {/* 简化的大陆轮廓（示意） */}
                <g fill="#475569" opacity="0.5">
                  {/* 北美洲 */}
                  <path d="M150,80 L250,60 L280,120 L220,150 L180,130 Z"/>
                  {/* 南美洲 */}
                  <path d="M220,180 L280,170 L300,250 L260,350 L230,280 Z"/>
                  {/* 欧洲 */}
                  <path d="M480,70 L550,60 L560,100 L520,110 Z"/>
                  {/* 非洲 */}
                  <path d="M470,150 L560,140 L580,220 L540,320 L480,250 Z"/>
                  {/* 亚洲 */}
                  <path d="M580,70 L750,60 L800,120 L750,200 L650,180 Z"/>
                  {/* 大洋洲 */}
                  <path d="M780,280 L850,270 L860,330 L800,340 Z"/>
                </g>

                {/* 高亮标记 - 拉美 */}
                <g className="animate-pulse">
                  <circle cx="250" cy="220" r="8" fill="#3B82F6"/>
                  <circle cx="250" cy="220" r="15" fill="#3B82F6" opacity="0.3"/>
                </g>

                {/* 高亮标记 - 亚太 */}
                <g className="animate-pulse" style={{animationDelay: '0.5s'}}>
                  <circle cx="720" cy="180" r="8" fill="#10B981"/>
                  <circle cx="720" cy="180" r="15" fill="#10B981" opacity="0.3"/>
                </g>

                {/* 高亮标记 - 中东非 */}
                <g className="animate-pulse" style={{animationDelay: '1s'}}>
                  <circle cx="580" cy="200" r="8" fill="#F59E0B"/>
                  <circle cx="580" cy="200" r="15" fill="#F59E0B" opacity="0.3"/>
                </g>
              </svg>

              {/* 图例 */}
              <div className="absolute bottom-4 left-4 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>拉美</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span>亚太</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <span>中东非</span>
                </div>
              </div>
            </div>
          </div>

          {/* 区域卡片 */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <Globe2 className="w-8 h-8 text-white mb-3" />
                <h4 className="text-2xl font-bold mb-2">拉美 (Latin America)</h4>
                <p className="text-slate-300 text-sm">巴西、墨西哥、阿根廷、智利、哥伦比亚</p>
              </div>
            </div>

            <div className="group relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-800">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <Globe2 className="w-8 h-8 text-white mb-3" />
                <h4 className="text-2xl font-bold mb-2">亚太 (APAC)</h4>
                <p className="text-slate-300 text-sm">印尼、泰国、越南、菲律宾、马来西亚</p>
              </div>
            </div>

            <div className="group relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-600 to-amber-800">
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

      {/* 模块 6: 市场洞察 - 路由升级 */}
      <section id="insights" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">新兴市场洞察</h2>
              <p className="text-slate-600 max-w-xl">来自一线的真实洞察与实战经验。</p>
            </div>
            <Link
              href="/insights"
              className="hidden md:inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-4 md:mt-0"
            >
              查看全部
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insightsData.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{article.author}</span>
                    <span>{article.publishDate}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              查看全部
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Globe2 className="w-6 h-6 text-white" />
              <span className="text-lg font-bold text-white">Bayes Global</span>
            </div>
            <p className="text-sm">© 2026 Bayes Global. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
