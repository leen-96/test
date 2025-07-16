'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
           <Link href="/" className="navbar-logo">Test Platform</Link>
          </div>

     
        <div className="navbar-links">
          <Link href="/used-cars" className="navbar-link">Cars List </Link>
      
        </div>

        {/* Hamburger Icon */}
        <div className="navbar-toggle" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>
      </div>

     
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </div>
        <Link href="/used-cars" className="navbar-link" onClick={() => setMenuOpen(false)}>Cars List</Link>
 
      </div>

    
      {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />}
    </nav>
  )
}
