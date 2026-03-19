import Link from 'next/link';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/client" className="text-xl font-bold text-blue-600">
              Bayes Global
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/client" className="text-gray-600 hover:text-blue-600 transition-colors">
                首页
              </Link>
              <Link href="/client/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                关于我们
              </Link>
              <Link href="/client/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                服务能力
              </Link>
              <Link href="/client/coverage" className="text-gray-600 hover:text-blue-600 transition-colors">
                全球网络
              </Link>
              <Link href="/client/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                联系我们
              </Link>
            </div>
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
              返回首页
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-t px-4 py-3 flex justify-around text-sm">
        <Link href="/client" className="text-gray-600">首页</Link>
        <Link href="/client/about" className="text-gray-600">关于</Link>
        <Link href="/client/services" className="text-gray-600">服务</Link>
        <Link href="/client/contact" className="text-blue-600">联系</Link>
      </div>

      {/* Content */}
      {children}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>Copyright © 2025 Bayes Global. All rights reserved.</p>
          <p className="mt-2">griffin@bayesglobal.com</p>
        </div>
      </footer>
    </div>
  );
}
