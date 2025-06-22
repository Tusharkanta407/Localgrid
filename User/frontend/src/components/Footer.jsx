const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-4 block"
            >
              LocalGrid
            </a>
            <p className="text-gray-600 mb-4">Empowering India's local workforce with trusted service connections.</p>
            <div className="flex space-x-4">
              <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-2 rounded-lg hover:shadow-lg hover:shadow-sky-500/25 transition-all cursor-pointer">
                📱
              </div>
              <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-2 rounded-lg hover:shadow-lg hover:shadow-sky-500/25 transition-all cursor-pointer">
                📧
              </div>
              <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-2 rounded-lg hover:shadow-lg hover:shadow-sky-500/25 transition-all cursor-pointer">
                🐦
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  Anti-Discrimination Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  ESG Impact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">For Customers</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  UC Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  Categories Near You
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  Safety
                </a>
              </li>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">For Partners</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  Register as Professional
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  Partner Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-600 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} LocalGrid. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-sky-600 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-sky-600 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-sky-600 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
