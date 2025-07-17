"use client"

import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes, FaChevronDown, FaUser } from "react-icons/fa"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [countryDropdown, setCountryDropdown] = useState(false)
  const [userDropdown, setUserDropdown] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto  mx-auto px-8 md:px-16 lg:px-16 sm:px-6 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Country/Language */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <span className="text-xl font-bold text-gray-900">YallaMotor</span>
            </Link>

            {/* Country and Language Selector */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setCountryDropdown(!countryDropdown)}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <div className="w-5 h-3 bg-gradient-to-b from-green-500 via-white to-red-500 rounded-sm border border-gray-300"></div>
                  <span>UAE</span>
                  <FaChevronDown className="w-3 h-3" />
                </button>

                {countryDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-32">
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">UAE</button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">KSA</button>
                  </div>
                )}
              </div>

              <Link href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">
                العربية
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <Link
                href="/used-cars"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Offers
              </Link>
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                New
              </span>
            </div>

            <Link
              href="/used-cars"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              New
            </Link>

            <Link
              href="/used-cars"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Used
            </Link>

            <Link
              href="/used-cars"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Electric
            </Link>

            <div className="relative">
              <Link
                href="/used-cars"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Chinese
              </Link>
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                New
              </span>
            </div>

            <Link href="/used-cars" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Blog
            </Link>

            <Link
              href="/used-cars"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Services
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/used-cars"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 text-sm"
            >
              Sell My Car
            </Link>

            {/* User Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setUserDropdown(!userDropdown)}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <FaUser className="w-4 h-4" />
                <FaChevronDown className="w-3 h-3" />
              </button>

              {userDropdown && (
                <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-48">
                  <Link href="/used-cars" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Sign In
                  </Link>
                  <Link href="/used-cars" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Register
                  </Link>
                  <hr className="my-2" />
                  <Link href="/used-cars" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    My Account
                  </Link>
                  <Link href="/used-cars" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Favorites
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                <div className="w-5 h-3 bg-gradient-to-b from-green-500 via-white to-red-500 rounded-sm border border-gray-300"></div>
                <span className="text-sm">UAE</span>
                <Link href="#" className="text-sm text-gray-700">
                  العربية
                </Link>
              </div>

              <Link href="/used-cars" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
                Offers <span className="text-xs bg-red-500 text-white px-1 py-0.5 rounded">New</span>
              </Link>
              <Link href="/used-cars" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
                New
              </Link>
              <Link href="/used-cars" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
                Used
              </Link>
              <Link href="/used-cars" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
                Electric
              </Link>
              <Link href="/used-cars" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
                Chinese <span className="text-xs bg-red-500 text-white px-1 py-0.5 rounded">New</span>
              </Link>
              <Link href="/used-cars" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/used-cars" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
                Services
              </Link>

              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link href="/used-cars" className="block text-gray-700" onClick={() => setMenuOpen(false)}>
                  Sign In
                </Link>
                <Link href="/used-cars" className="block text-gray-700" onClick={() => setMenuOpen(false)}>
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
