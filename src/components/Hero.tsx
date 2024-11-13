import React from 'react';
import { ArrowRight, Clock, Truck, CheckCircle, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Vaciado de pisos y locales en Mataró – Rápido, Seguro y Ecológico
            </h1>
            <p className="text-xl text-gray-600">
              Especialistas en vaciado de pisos y locales comerciales en Mataró. Servicio rápido, eficiente y comprometido con el medio ambiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.link/jgf83y" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <span>Solicitar Presupuesto</span>
                <ArrowRight size={20} />
              </a>
              <a 
                href="https://wa.link/jgf83y"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <span>Contactar por WhatsApp</span>
                <Phone size={20} />
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1652190455129-6d97f8d7a75b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Servicio de vaciado de pisos en Mataró"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="flex items-start space-x-4">
            <Clock className="text-emerald-600 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-lg">Servicio 24/7</h3>
              <p className="text-gray-600">Disponibles para emergencias todos los días del año</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Truck className="text-emerald-600 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-lg">Transporte Incluido</h3>
              <p className="text-gray-600">Nos encargamos de todo el proceso</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="text-emerald-600 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-lg">Gestión Certificada</h3>
              <p className="text-gray-600">Reciclaje y tratamiento responsable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}