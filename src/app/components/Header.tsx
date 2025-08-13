'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-parchment/95 backdrop-blur-sm border-b border-loam/10">
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-terracotta rounded flex items-center justify-center">
              <span className="text-parchment font-bold text-sm">BS</span>
            </div>
            <span className="font-bold text-xl text-loam">BareStack</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-loam hover:text-terracotta transition-colors">
              Features
            </a>
            <a href="#calculator" className="text-loam hover:text-terracotta transition-colors">
              Calculator
            </a>
            <a href="#products" className="text-loam hover:text-terracotta transition-colors">
              Products
            </a>
            <a href="#waitlist" className="btn-primary">
              Join Waitlist
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-loam transition-transform ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`} />
              <span className={`block h-0.5 bg-loam transition-opacity ${
                isMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block h-0.5 bg-loam transition-transform ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-loam/10"
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-loam hover:text-terracotta transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#calculator"
                className="text-loam hover:text-terracotta transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculator
              </a>
              <a
                href="#products"
                className="text-loam hover:text-terracotta transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#waitlist"
                className="btn-primary inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}