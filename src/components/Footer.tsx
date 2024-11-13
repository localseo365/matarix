import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MATARIX</h3>
            <p className="text-gray-400">
              Servicio profesional de vaciado de pisos y locales en Mataró y alrededores.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-400">
                <MapPin size={20} className="mr-2" />
                <span>Carrer Moratín, 32, 08302 Mataró, Barcelona</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={20} className="mr-2" />
                <a href="tel:690220944" className="hover:text-white">690 22 09 44</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white">Servicios</a></li>
              <li><a href="#galeria" className="text-gray-400 hover:text-white">Galería</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacidad" className="text-gray-400 hover:text-white">Política de Privacidad</a></li>
              <li><a href="/cookies" className="text-gray-400 hover:text-white">Política de Cookies</a></li>
              <li><a href="/terminos" className="text-gray-400 hover:text-white">Términos y Condiciones</a></li>
              <li><a href="/aviso-legal" className="text-gray-400 hover:text-white">Aviso Legal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MATARIX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}