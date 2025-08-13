'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg shadow-black/5' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="absolute inset-0 bg-terracotta/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <div>
              <span className="font-bold tracking-tight text-loam text-2xl" style={{ fontFamily: 'Varela Round, Inter, sans-serif' }}>
                barestack.
              </span>
              <div className="text-xs font-medium text-loam/70">
                Barebones. Bare Necessities.
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="#hero">home</NavLink>
            <NavLink href="#problem">problem</NavLink>
            <NavLink href="#calculator">calculator</NavLink>
            <NavLink href="#products">products</NavLink>
            <motion.button
              className="ml-4 px-6 py-2 bg-gradient-to-r from-terracotta to-loam text-white rounded-full font-medium text-sm hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              join waitlist
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <motion.button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm rounded-lg hover:bg-gray-50 transition-all duration-200 capitalize"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}