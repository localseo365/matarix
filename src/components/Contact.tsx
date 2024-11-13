import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log(formData);
  };

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contacta con Nosotros</h2>
            <p className="text-gray-600 mb-8">
              Estamos aquí para ayudarte. Contáctanos para obtener un presupuesto gratuito 
              o resolver cualquier duda sobre nuestros servicios.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="text-emerald-600" />
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <a href="tel:690220944" className="text-gray-600 hover:text-emerald-600">
                    690 22 09 44
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-emerald-600" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:info@matarix.es" className="text-gray-600 hover:text-emerald-600">
                    info@matarix.es
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="text-emerald-600" />
                <div>
                  <h3 className="font-semibold">Ubicación</h3>
                  <p className="text-gray-600">Mataró, Barcelona</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.nombre}
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.telefono}
                onChange={(e) => setFormData({...formData, telefono: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.mensaje}
                onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <span>Enviar Mensaje</span>
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}