"use client"

import { Button } from "./ui/button"
import { Home, GraduationCap, Scissors, Wrench, PaintBucket, X } from "lucide-react"

const MobileMenu = ({ isMobileMenuOpen, closeMobileMenu }) => {
  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden" onClick={closeMobileMenu} />
      )}

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden border-l border-gray-200 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <a
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent"
              onClick={closeMobileMenu}
            >
              LocalGrid
            </a>
            <Button variant="ghost" size="sm" onClick={closeMobileMenu} className="text-gray-700 hover:bg-gray-100">
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Navigation Links */}
            <div className="px-4 py-6 space-y-4">
              <a
                href="#"
                className="block text-lg font-medium text-gray-700 hover:text-sky-600 py-2 transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <a
                href="#"
                className="block text-lg font-medium text-gray-700 hover:text-sky-600 py-2 transition-colors"
                onClick={closeMobileMenu}
              >
                Services
              </a>
              <a
                href="#"
                className="block text-lg font-medium text-gray-700 hover:text-sky-600 py-2 transition-colors"
                onClick={closeMobileMenu}
              >
                FAQ
              </a>
              <a
                href="#"
                className="block text-lg font-medium text-gray-700 hover:text-sky-600 py-2 transition-colors"
                onClick={closeMobileMenu}
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-lg font-medium text-gray-700 hover:text-sky-600 py-2 transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </div>

            {/* Service Categories in Mobile Menu */}
            <div className="px-4 py-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Popular Services</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-700 hover:text-sky-600 py-2 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-sky-500 rounded-full p-2">
                    <Home className="h-4 w-4 text-white" />
                  </div>
                  <span>Household Help</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-700 hover:text-sky-600 py-2 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                  <span>Tuition Classes</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-700 hover:text-sky-600 py-2 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-2">
                    <Scissors className="h-4 w-4 text-white" />
                  </div>
                  <span>Salon & Spa at Home</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-700 hover:text-sky-600 py-2 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-2">
                    <Wrench className="h-4 w-4 text-white" />
                  </div>
                  <span>AC/Electrical Repair</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-700 hover:text-sky-600 py-2 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-2">
                    <PaintBucket className="h-4 w-4 text-white" />
                  </div>
                  <span>Kitchen & Home Painting</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-gray-200 space-y-3">
            <Button
              className="w-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white shadow-lg"
              onClick={closeMobileMenu}
            >
              Become a Tasker
            </Button>
            <Button
              className="w-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white shadow-lg"
              onClick={closeMobileMenu}
            >
              Login / Sign Up
            </Button>

            {/* Quick Contact Info */}
            <div className="pt-4 text-center text-sm text-gray-600">
              <p>Need help? Call us</p>
              <p className="font-semibold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                1800-123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
