import { insightsData } from "@/data/insights";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
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
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/#insights"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Insights
          </Link>
        </div>
      </div>

      {/* Hero with Cover Image - 减少 padding-top */}
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
          <p className="text-xl text-slate-300 mb-8">{article.titleEn}</p>
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
          {/* Excerpt - 仅显示一次，不重复 */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-12">
            <p className="text-lg text-slate-800 font-medium mb-2">
              {article.excerpt}
            </p>
            <p className="text-slate-600 text-sm">{article.excerptEn}</p>
          </div>

          {/* Main Content - Chinese */}
          <div className="prose prose-lg max-w-none">
            {parseContent(article.content)}
          </div>

          {/* Divider */}
          <hr className="my-12 border-gray-200" />

          {/* English Version */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              English Version
            </h2>
            {parseContent(article.contentEn)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Bayes Global. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
