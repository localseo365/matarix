import React from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-emerald-50 shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <a href="#inicio" className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
              MATARIX
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-emerald-600">Inicio</a>
            <a href="#servicios" className="text-gray-600 hover:text-emerald-600">Servicios</a>
            <a href="#galeria" className="text-gray-600 hover:text-emerald-600">Galería</a>
            <a href="#contacto" className="text-gray-600 hover:text-emerald-600">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:690220944" className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              <Phone size={20} />
              <span>690 22 09 44</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#inicio" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Inicio</a>
              <a href="#servicios" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Servicios</a>
              <a href="#galeria" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Galería</a>
              <a href="#contacto" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Contacto</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}