'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
 
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar  mx-auto  mx-auto px-8 md:px-16 py-8 bg-gray-50 bg-white shadow-md   flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-blue-700">YallaMotor</Link>

      <div className="hidden md:flex items-center space-x-6">
        <Link href="/used-cars" className="hover:text-blue-600 font-medium">Used</Link>
        <Link href="/used-cars" className="hover:text-blue-600 font-medium">New</Link>
        <Link href="/used-cars" className="hover:text-blue-600 font-medium">Electric</Link>
        <Link href="/used-cars" className="hover:text-blue-600 font-medium">Sell My Car</Link>
      </div>

      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-start px-6 py-4 shadow-md space-y-3">
          <Link href="/used-cars" onClick={() => setMenuOpen(false)}>Used</Link>
          <Link href="/used-cars" onClick={() => setMenuOpen(false)}>New</Link>
          <Link href="/used-cars" onClick={() => setMenuOpen(false)}>Electric</Link>
          <Link href="/used-cars" onClick={() => setMenuOpen(false)}>Sell My Car</Link>
        </div>
      )}
    </nav>
  )
}
