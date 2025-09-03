"use client";
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-brand-background border-b border-gray-100 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-semibold text-brand-text">
              BareStack.
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a
                href="#suite"
                className="text-gray-600 hover:text-brand-text transition-colors duration-200"
              >
                Tools
              </a>
              <a
                href="#manifesto"
                className="text-gray-600 hover:text-brand-text transition-colors duration-200"
              >
                Manifesto
              </a>
              
            </nav>
            
            {/* CTA Button */}
            <a 
              href="https://www.linkedin.com/in/anirudhprashant/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
            >
              And so will this
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-brand-text focus:outline-none focus:text-brand-text"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsMenuOpen(false)} />
          <div className="relative bg-brand-background w-full h-full pt-16">            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-brand-text focus:outline-none focus:text-brand-text"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="px-4 py-6 space-y-6">
              <a
                href="#suite"
                onClick={handleLinkClick}
                className="block text-2xl font-medium text-gray-600 hover:text-brand-text transition-colors duration-200"
              >
                Tools
              </a>
              <a
                href="#manifesto"
                onClick={handleLinkClick}
                className="block text-2xl font-medium text-gray-600 hover:text-brand-text transition-colors duration-200"
              >
                Manifesto
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block text-2xl font-medium text-gray-600 hover:text-brand-text transition-colors duration-200"
              >
                Contact
              </a>
              <a 
                 href="https://www.linkedin.com/in/anirudhprashant/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block w-full mt-8 bg-brand-primary text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors duration-200 text-lg font-medium text-center"
               >
                 And so will this
               </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;