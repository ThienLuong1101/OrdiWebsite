import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a192f] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="w-7 h-7 text-purple-500" />
              <span className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Ordi
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Revolutionizing business communication with our AI agent that handles phone calls with human-like precision.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://twitter.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Ordi AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/" className="text-xs text-gray-500 hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="text-xs text-gray-500 hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-xs text-gray-500 hover:text-purple-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;