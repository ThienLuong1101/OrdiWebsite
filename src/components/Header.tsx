import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Layers } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a192f]/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <Layers className="w-8 h-8 text-purple-500 group-hover:text-purple-400 transition-colors" />
            <span className="text-xl md:text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Ordi
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-purple-400 ${isActive ? 'text-purple-500' : 'text-gray-200'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-purple-400 ${isActive ? 'text-purple-500' : 'text-gray-200'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/features" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-purple-400 ${isActive ? 'text-purple-500' : 'text-gray-200'}`
              }
            >
              Features
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-purple-400 ${isActive ? 'text-purple-500' : 'text-gray-200'}`
              }
            >
              Contact
            </NavLink>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a192f]/95 backdrop-blur-md absolute top-full left-0 w-full p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                `text-base font-medium p-2 transition-colors ${isActive ? 'text-purple-500' : 'text-gray-200'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                `text-base font-medium p-2 transition-colors ${isActive ? 'text-purple-500' : 'text-gray-200'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/features" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                `text-base font-medium p-2 transition-colors ${isActive ? 'text-purple-500' : 'text-gray-200'}`
              }
            >
              Features
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                `text-base font-medium p-2 transition-colors ${isActive ? 'text-purple-500' : 'text-gray-200'}`
              }
            >
              Contact
            </NavLink>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-md">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;