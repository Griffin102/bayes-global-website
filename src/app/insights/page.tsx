import { insightsData } from "@/data/insights";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";

export default function InsightsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold mb-6">
              实地洞察
              <span className="block text-3xl font-bold text-blue-300 mt-2">
                Market Insights
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              来自新兴markets 一线的真实洞察。我们分享在拉美、亚太、中东非执行项目中的发现与思考。
            </p>
            <p className="text-lg text-slate-400 mt-4">
              Real insights from the frontlines of emerging markets. Our findings and reflections from executing projects across LatAm, APAC, and MENA.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insightsData.map((article) => (
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

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Bayes Global. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
