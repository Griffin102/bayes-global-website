import { insightsData } from "@/data/insights";
import { ArrowRight, Calendar, Home, Send } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InsightsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 洞察页专属导航栏 - 删除双重 Header，只保留此导航 */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#insights"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
          >
            <Home className="w-5 h-5" />
            返回首页
          </Link>
          <Link
            href="/#client-form"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
          >
            <Send className="w-4 h-4" />
            提交项目需求
          </Link>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-extrabold mb-6">
                实地洞察
                <span className="block text-3xl font-bold text-blue-300 mt-2">
                  Market Insights
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                来自新兴市场一线的真实洞察。我们分享在拉美、亚太、中东非执行项目中的发现与思考。
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid - 排序：印尼 -> 中东 -> 拉美 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insightsData
                .sort((a, b) => {
                  const order = ['indonesia', 'mena', 'latam'];
                  return order.indexOf(a.slug.split('-')[0]) - order.indexOf(b.slug.split('-')[0]);
                })
                .map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 block"
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
                    <h2 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
                      {article.title}
                    </h2>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{article.publishDate}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                        阅读全文
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 全局 Footer */}
      <Footer />
    </div>
  );
}
