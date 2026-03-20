// src/app/page.tsx
import { Globe2, Users, ShieldCheck, ArrowRight, MapPin, Zap, Target, LineChart } from "lucide-react";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. 导航栏 (极简风格) */}
      <header className="absolute top-0 w-full z-50 px-6 py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-tight">Bayes Global.</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-white/80">
            <Link href="#clients" className="hover:text-white transition">For Clients</Link>
            <Link href="#suppliers" className="hover:text-white transition">For Suppliers</Link>
            <Link href="#markets" className="hover:text-white transition">Global Markets</Link>
          </nav>
        </div>
      </header>

      {/* 2. 英雄区域 (Hero Section) - Trust Blue 质感 */}
      <section className="relative pt-40 pb-32 bg-[#0A192F] overflow-hidden">
        {/* 背景装饰图案 */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" /> Pure-play Fieldwork Specialists
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mb-6">
            Flawless Execution in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Emerging Markets
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
            我们只做最硬核的实地执行与招募。为出海企业找到最真实的本地声音，为全球优质供应商提供稳定的项目桥梁。
          </p>

          {/* 双通道 CTA (Call to Action) */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link href="#clients" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium flex items-center justify-center transition-all shadow-lg shadow-blue-900/50 group">
              我是出海客户 (For Clients) 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#suppliers" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-xl font-medium flex items-center justify-center transition-all backdrop-blur-sm">
              我是实地供应商 (For Suppliers)
            </Link>
          </div>
        </div>
      </section>

      {/* 3. 数据条 (Stats) */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-sm text-slate-500 font-medium">Emerging Markets</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-sm text-slate-500 font-medium">Native QC Review</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">B2B & B2C</div>
              <div className="text-sm text-slate-500 font-medium">Hard-to-reach Profiles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">0</div>
              <div className="text-sm text-slate-500 font-medium">Consulting BS</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 双边价值主张 (Dual Value Proposition) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">连接真实需求与卓越执行</h2>
            <p className="text-slate-600">无论你是寻找高质量数据的调研机构，还是拥有本地招募能力的实地团队，Bayes Global 都是你的枢纽。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 客户卡片 */}
            <div id="clients" className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">For Clients / 调研机构 & 大厂</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                无需对接无数个黑盒外包。我们提供从拉美到中东的统一质量标准。严格的录音抽查、100% 回访验证，确保每一个 Insight 都源自真实的 Authentic Voices。
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-slate-700 font-medium">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 mr-3" /> 多重质控审核机制 (Multi-layer QC)
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <LineChart className="w-5 h-5 text-emerald-500 mr-3" /> 极速招募 B2B/医疗等难触达人群
                </li>
              </ul>
              <Link href="/contact" className="text-blue-600 font-semibold flex items-center hover:text-blue-700">
                提交项目需求 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* 供应商卡片 */}
            <div id="suppliers" className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
                <Users className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">For Suppliers / 实地与招募团队</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                成为 Bayes Global 的认证执行网络。我们为你对接中国及全球顶尖出海企业的海量项目，提供清晰的项目简报 (Briefing) 和可靠的付款周期。
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-slate-700 font-medium">
                  <Globe2 className="w-5 h-5 text-blue-500 mr-3" /> 对接全球优质客户资源
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <Zap className="w-5 h-5 text-blue-500 mr-3" /> 规范化的作业流程与按时结算
                </li>
              </ul>
              <Link href="/contact-supplier" className="text-emerald-600 font-semibold flex items-center hover:text-emerald-700">
                申请成为供应商 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 覆盖区域展示 (Global Footprint) */}
      <section id="markets" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Emerging Markets Coverage</h2>
              <p className="text-slate-600 max-w-xl">我们专注于增长最快、但也最需要本地资源落地的新兴市场。</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {['Latin America (拉美)', 'APAC (亚太)', 'Middle East & Africa (中东非)'].map((region, idx) => (
              <div key={idx} className="group relative h-64 rounded-2xl overflow-hidden bg-slate-900">
                {/* 占位背景图 - 之后可以替换为真实人文照片 */}
                <div className="absolute inset-0 bg-slate-800 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6">
                  <MapPin className="w-6 h-6 text-white mb-2" />
                  <h4 className="text-xl font-bold text-white">{region}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-[#0A192F] text-slate-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-white mb-4 md:mb-0">Bayes Global.</div>
          <div className="text-sm">
            © {new Date().getFullYear()} Bayes Global. Specialized Qualitative Fieldwork.
          </div>
        </div>
      </footer>
    </main>
  );
}
