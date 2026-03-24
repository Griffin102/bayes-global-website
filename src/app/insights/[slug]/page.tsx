import { insightsData } from "@/data/insights";
import { ArrowLeft, Calendar, User } from "lucide-react";
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
    <div className="min-h-screen flex flex-col">
      {/* Back Button - 汉化 */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            返回洞察列表
          </Link>
        </div>
      </div>

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
            {/* Main Content - Chinese Only, 删除英文段落 */}
            <div className="prose prose-lg max-w-none space-y-6 pt-12">
              {parseContent(article.content)}
            </div>

            {/* CTA 卡片 - 业务咨询 */}
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
                  <a
                    href="https://www.linkedin.com/in/griffin-wang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500/30 hover:bg-blue-500/50 text-white rounded-xl font-medium transition-all backdrop-blur-sm border border-white/20"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn 联系
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
