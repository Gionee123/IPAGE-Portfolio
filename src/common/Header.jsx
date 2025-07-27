import React, { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-r from-purple-900 to-purple-800 shadow-lg">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo/Title */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold text-white transition-colors duration-300 md:text-3xl hover:text-purple-200"
            >
              My Portfolio
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden items-center space-x-8 md:flex">
            <button
              onClick={() => scrollToSection("home")}
              className="font-medium text-white transition-colors duration-300 hover:text-purple-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-medium text-white transition-colors duration-300 hover:text-purple-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="font-medium text-white transition-colors duration-300 hover:text-purple-200"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-medium text-white transition-colors duration-300 hover:text-purple-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white transition-colors duration-300 hover:text-purple-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-opacity-50 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-purple-900 to-purple-800 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMobileMenu}
              className="text-white transition-colors duration-300 hover:text-purple-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col flex-1 px-6 py-8">
            <button
              onClick={() => scrollToSection("home")}
              className="py-4 text-lg font-medium text-white border-b border-purple-700 transition-colors duration-300 hover:text-purple-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="py-4 text-lg font-medium text-white border-b border-purple-700 transition-colors duration-300 hover:text-purple-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="py-4 text-lg font-medium text-white border-b border-purple-700 transition-colors duration-300 hover:text-purple-200"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="py-4 text-lg font-medium text-white border-b border-purple-700 transition-colors duration-300 hover:text-purple-200"
            >
              Contact
            </button>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-purple-700">
            <p className="text-sm text-center text-purple-200">
              © 2024 My Portfolio
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
