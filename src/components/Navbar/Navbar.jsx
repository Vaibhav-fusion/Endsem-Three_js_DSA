import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar({ setPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page) => {
    setPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`bg-white/50 backdrop-blur-md border-b border-gray-100 p-4 flex items-center justify-between sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleNavigation("home")}
            className="text-2xl font-bold tracking-tight transition-colors group transform hover:scale-105 mx-4 md:mx-10"
            style={{ fontFamily: "logofont" }}
          >
            <span className="text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
              Dsa
            </span>
            <span className="text-gray-800 group-hover:text-orange-400 transition-colors duration-300">
              gon
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavigation("python")}
            className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm uppercase tracking-wider"
          >
            Python
          </button>
          <button
            onClick={() => handleNavigation("dsa")}
            className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm uppercase tracking-wider"
          >
            Data Structures
          </button>
          <button
            onClick={() => handleNavigation("resources")}
            className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm uppercase tracking-wider"
          >
            Resources
          </button>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
            onClick={() => handleNavigation("leetcode")}
          >
            Leetcode
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none mr-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-lg transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} pt-20`}>
        <div className="flex flex-col items-center space-y-8 p-6">
          <button
            onClick={() => handleNavigation("python")}
            className="text-gray-800 hover:text-indigo-600 font-medium text-lg transition-colors w-full py-3 border-b border-gray-100"
          >
            Python
          </button>
          <button
            onClick={() => handleNavigation("dsa")}
            className="text-gray-800 hover:text-indigo-600 font-medium text-lg transition-colors w-full py-3 border-b border-gray-100"
          >
            Data Structures
          </button>
          <button
            onClick={() => handleNavigation("resources")}
            className="text-gray-800 hover:text-indigo-600 font-medium text-lg transition-colors w-full py-3 border-b border-gray-100"
          >
            Resources
          </button>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors shadow-sm w-full"
            onClick={() => handleNavigation("leetcode")}
          >
            Leetcode
          </button>
        </div>
      </div>
    </>
  );
}