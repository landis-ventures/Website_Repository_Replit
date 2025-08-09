import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Layers, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first then scroll
    if (location !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950/50 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Layers className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold text-white">Landis Ventures</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('process')}
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Our Process
          </button>
          <Link 
            href="/about"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            About
          </Link>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
          >
            Get a Quote
          </button>
        </nav>
        
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-0 right-0 w-64 h-full bg-gray-900 shadow-lg md:hidden z-50 ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="p-6">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-white mb-8"
          >
            <X className="w-6 h-6" />
          </button>
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-blue-400 transition text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-gray-300 hover:text-blue-400 transition text-left"
            >
              Our Process
            </button>
            <Link 
              href="/about"
              className="text-gray-300 hover:text-blue-400 transition text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition inline-block text-center"
            >
              Get a Quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
