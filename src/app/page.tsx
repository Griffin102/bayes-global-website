import { ShieldCheck, Users, Globe, Zap, CheckCircle, Brain, Lock, ArrowRight, Target, FileCheck, UserCheck, Mic, Headphones, Video, Building2 } from "lucide-react";
import { insightsData } from "@/data/insights";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 全局导航栏 */}
      <Navbar />

      <main className="flex-grow">
        {/* 区块 1：Hero 首屏 - 删除小标签，增加行距，更换背景视频 */}
        <section className="relative h-screen min-h-[800px] text-white overflow-hidden">
          {/* 深色动态代码网络视频背景 */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>

          {/* 深色遮罩 */}
          <div className="absolute inset-0 bg-[#0A192F]/80 z-10"></div>

          {/* 内容 - 绝对居中 */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center justify-center">
            <div className="max-w-5xl text-center">
              {/* 删除了小标签 "Emerging Markets Specialists" */}

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.3] mb-8 animate-fade-in-up">
                赋能中国企业出海<br className="md:hidden" />
                <span className="md:block md:mt-4"></span>
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
                  href="#pm"
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

        {/* 区块 2：专属跨国项目枢纽 - 纯白背景 */}
        <section id="pm" className="py-24 bg-white">
          {/* 内容 */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">
                您的专属跨国项目枢纽
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                告别跨国时差与语言障碍。您的专属对接团队立足中国，无缝沟通业务需求；同时我们通过严格的标准化 SOP 与 AI 辅助系统，精准指挥拉美、亚太及中东非的本土执行网络。您只需对接我们，我们将世界带给您。
              </p>
            </div>
          </div>
        </section>

        {/* 区块 3：覆盖全链路的实地执行服务 - 深色商务背景图 + 遮罩 */}
        <section className="relative py-24 overflow-hidden">
          {/* 背景图 + 深色遮罩 */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop')" }}
          ></div>
          <div className="absolute inset-0 bg-[#0A192F]/85 z-10"></div>
          
          {/* 内容 */}
          <div className="relative z-20 max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">覆盖全链路的实地执行服务</h2>
              <p className="text-slate-300">从招募到交付，一站式完成。</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 卡片 1：精准招募 - 居中对齐 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">精准招募</h3>
                  <p className="text-slate-300 leading-relaxed">
                    结合本土资源网络与定制化寻访策略，精准触达目标人群。
                  </p>
                </div>
              </div>

              {/* 卡片 2：本地主持 - 居中对齐 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                    <Mic className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">本地主持</h3>
                  <p className="text-slate-300 leading-relaxed">
                    派遣深谙本地文化与商业语境的资深主持人，挖掘深层洞察。
                  </p>
                </div>
              </div>

              {/* 卡片 3：同传与转录 - 居中对齐 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <Headphones className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">同传与转录</h3>
                  <p className="text-slate-300 leading-relaxed">
                    提供实时多语种同声传译与高质量的本土语言转录记录。
                  </p>
                </div>
              </div>

              {/* 卡片 4：场地与设施 - 居中对齐 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <Video className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">场地与设施</h3>
                  <p className="text-slate-300 leading-relaxed">
                    协调符合国际标准的单透镜会议室或高稳定性的线上访谈平台。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 区块 4：受众触达能力 - 调整顺序，核心消费者移到最左 */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">穿透壁垒的定制化寻访能力</h2>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8 text-center">
                我们不依赖泛滥的静态样本库，而是凭借深度的本土触角，为您提供高度定制化的寻访网络：
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {/* 核心消费者群体 - 移到最左，居中对齐 */}
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">核心消费者群体</h3>
                    <p className="text-slate-600 text-sm">
                      下沉市场受众、Z 世代、特定应用重度用户
                    </p>
                  </div>
                </div>

                {/* B2B 决策者与高管 - 居中对齐 */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">B2B 决策者与高管</h3>
                    <p className="text-slate-600 text-sm">
                      企业 IT、金融、制造业决策链核心人物
                    </p>
                  </div>
                </div>

                {/* 医疗健康专业人士 - 居中对齐 */}
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border border-emerald-200">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                      <UserCheck className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">医疗健康专业人士</h3>
                    <p className="text-slate-600 text-sm">
                      KOL、专科医生及特定病患群体
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 区块 5：调研方法 - 添加商务图片 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 左侧：调研方法标签 */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">全场景定性调研支持</h2>
                
                <div className="flex flex-wrap gap-4">
                  <span className="px-6 py-3 bg-white rounded-full border border-gray-200 text-slate-700 font-medium shadow-sm">
                    焦点小组座谈会 (FGD)
                  </span>
                  <span className="px-6 py-3 bg-white rounded-full border border-gray-200 text-slate-700 font-medium shadow-sm">
                    深度访谈 (IDI)
                  </span>
                  <span className="px-6 py-3 bg-white rounded-full border border-gray-200 text-slate-700 font-medium shadow-sm">
                    人类学伴随访问 (Ethnography)
                  </span>
                  <span className="px-6 py-3 bg-white rounded-full border border-gray-200 text-slate-700 font-medium shadow-sm">
                    在线社区 (Online Communities)
                  </span>
                </div>
              </div>
              
              {/* 右侧：调研方法配图 - 本地图片 */}
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/methodology-fgd.jpg"
                    alt="焦点小组座谈会场景"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 区块 6：三重风控与质控体系 - 删除小标签，修改标题 */}
        <section id="qc" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                {/* 删除了 "Triple Anti-Fraud SOP" 小标签 */}
                <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                  机器般的纪律：三重风控与质控体系
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  在复杂的海外新兴市场，数据真实性是定性研究的生命线。我们摒弃盲目信任，采用极致严密的标准化风控流程管理全球供应商：
                </p>
              </div>

              <div className="space-y-8">
                {/* 卡片 1：招募防骗测试 */}
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl p-8 border border-blue-100 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">招募防骗测试 (Pre-screening Traps)</h3>
                      <p className="text-slate-600 leading-relaxed">
                        在正式招募前，通过植入本土业务常识的陷阱题进行小额测试，严格淘汰作弊与外行团队。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 卡片 2：每日心跳打卡机制 */}
                <div className="bg-gradient-to-r from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">每日心跳打卡机制 (Daily Heartbeat Sync)</h3>
                      <p className="text-slate-600 leading-relaxed">
                        执行期间强制要求带有时间戳与地理位置水印的现场照片打卡，防范转包与失联风险。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 卡片 3：多源交叉验证 */}
                <div className="bg-gradient-to-r from-amber-50 to-white rounded-3xl p-8 border border-amber-100 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">多源交叉验证 (Cross-Validation)</h3>
                      <p className="text-slate-600 leading-relaxed">
                        结合访谈录像、场地方签到记录与随机电话回访，确保每一位受访者的绝对真实。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 区块 7：全球执行网络 - 恢复被删除的区块 */}
        <section id="network" className="relative py-24 text-white overflow-hidden">
          {/* 背景图：深色世界地图风格 */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/map-bg.jpg')" }}
          ></div>
          {/* 深色遮罩 */}
          <div className="absolute inset-0 bg-[#0A192F]/85 z-10"></div>
          
          {/* 内容 */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              跨越时区的全球触达
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
              核心覆盖：<span className="text-emerald-400 font-semibold">亚太地区 (APAC)</span> | <span className="text-amber-400 font-semibold">中东与非洲 (MENA)</span> | <span className="text-blue-400 font-semibold">拉丁美洲 (LATAM)</span>
            </p>
          </div>
        </section>

        {/* 市场洞察 - 排序：APAC -> MENA -> LATAM */}
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
              {/* 排序后的洞察数据：APAC -> MENA -> LATAM */}
              {insightsData
                .sort((a, b) => {
                  const order = ['indonesia', 'mena', 'latam'];
                  return order.indexOf(a.slug.split('-')[0]) - order.indexOf(b.slug.split('-')[0]);
                })
                .slice(0, 3)
                .map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
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

        {/* 客户表单 */}
        <section id="client-form" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">提交项目需求</h2>
              <p className="text-slate-600">告诉我们您的需求，我们将在 24 小时内回复。</p>
            </div>

            <form
              action="https://formspree.io/f/mqazvoan"
              method="POST"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    邮箱
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

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  公司
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  placeholder="公司名称"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  项目需求
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none"
                  placeholder="请描述您的项目需求、目标市场、时间线等..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-900/50 hover:shadow-xl"
              >
                提交需求
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
