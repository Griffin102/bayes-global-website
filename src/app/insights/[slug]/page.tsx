import { insightsData } from "@/data/insights";
import { ArrowLeft, Calendar, User, Send } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightsData.map((article) => ({
    slug: article.slug,
  }));
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Parse content: convert markdown to React elements
  const parseContent = (content: string) => {
    const paragraphs = content.split("\n\n").filter((p) => p.trim());
    return paragraphs.map((paragraph, idx) => {
      // Handle horizontal rule
      if (paragraph.trim() === "---") {
        return <hr key={idx} className="my-8 border-gray-200" />;
      }
      
      // Handle headers
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            {paragraph.replace("## ", "")}
          </h2>
        );
      }
      if (paragraph.startsWith("### ")) {
        return (
          <h3 key={idx} className="text-xl font-bold text-slate-900 mt-8 mb-3">
            {paragraph.replace("### ", "")}
          </h3>
        );
      }
      
      // Handle bullet lists
      if (paragraph.startsWith("- **") || paragraph.startsWith("- ")) {
        const listItems = paragraph.split("\n").filter((line) => line.startsWith("- "));
        return (
          <ul key={idx} className="list-disc list-inside space-y-2 mb-4 ml-4">
            {listItems.map((item, i) => {
              const text = item.replace("- ", "");
              const parts = text.split(/(\*\*.*?\*\*)/g);
              return (
                <li key={i} className="text-slate-700 leading-relaxed">
                  {parts.map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={j}>{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </li>
              );
            })}
          </ul>
        );
      }
      
      // Handle table rows (simple markdown table support)
      if (paragraph.includes("|") && paragraph.trim().startsWith("|")) {
        const rows = paragraph.split("\n").filter((line) => line.trim().startsWith("|"));
        // Skip separator row (|---|---|)
        const dataRows = rows.filter((row) => !row.includes("|---"));
        
        if (dataRows.length > 0) {
          return (
            <div key={idx} className="overflow-x-auto my-6">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {dataRows[0].split("|").filter((cell) => cell.trim()).map((cell, i) => (
                      <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-b border-gray-200">
                        {cell.trim()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataRows.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      {row.split("|").filter((cell) => cell.trim()).map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-3 text-sm text-slate-700 border-b border-gray-100">
                          {cell.trim()}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
      }
      
      // Handle bold text in paragraphs
      const parts = paragraph.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={idx} className="text-slate-700 leading-relaxed mb-4">
          {parts.map((part, i) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={i}>{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="flex flex-col -mt-20">
      {/* 文章页专属导航栏 */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            返回洞察列表
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
        {/* Hero with Cover Image */}
        <section className="relative">
          <div className="absolute inset-0 h-[400px] bg-gradient-to-b from-slate-900/80 to-slate-900/40 z-10"></div>
          <div
            className="absolute inset-0 h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${article.coverImage})` }}
          ></div>
          <div className="relative z-20 max-w-4xl mx-auto px-6 pt-24 pb-12">
            <div className="flex flex-wrap gap-3 mb-6">
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-600/90 text-white text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="text-sm">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-sm">{article.publishDate}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            {/* Main Content - Chinese Only, 删除英文段落 - 增加顶部留白 */}
            <div className="prose prose-lg max-w-none space-y-6 pt-12 mt-12">
              {parseContent(article.content)}
            </div>

            {/* CTA 卡片 - 业务咨询 - 删除 LinkedIn 链接 */}
            <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white shadow-xl">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  面对新兴市场，您需要最坚实的实地防线
                </h3>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  立即与我们的创始人直接对话探讨您的项目规划。
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:Griffin@bayesglobal.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg"
                  >
                    📧 发送邮件至 Griffin@bayesglobal.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 全局 Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Bayes Global. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
