import Link from 'next/link';

export default function SupplierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/supplier" className="text-xl font-bold text-indigo-600">
              Bayes Global
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/supplier" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Home
              </Link>
              <Link href="/supplier/partner" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Partner Advantage
              </Link>
              <Link href="/supplier/requirements" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Requirements
              </Link>
              <Link href="/supplier/apply" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Apply Now
              </Link>
            </div>
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
              ← Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-t px-4 py-3 flex justify-around text-sm">
        <Link href="/supplier" className="text-gray-600">Home</Link>
        <Link href="/supplier/partner" className="text-gray-600">Advantage</Link>
        <Link href="/supplier/apply" className="text-indigo-600">Apply</Link>
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
