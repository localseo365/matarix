import React from 'react';
import { PhoneCall, Calculator, Truck, Recycle, CheckSquare } from 'lucide-react';

export default function WorkProcess() {
  const steps = [
    {
      icon: <PhoneCall className="w-12 h-12 text-emerald-600" />,
      title: "Contacta con nosotros",
      description: "Rellena el formulario o llámanos."
    },
    {
      icon: <Calculator className="w-12 h-12 text-emerald-600" />,
      title: "Presupuesto a medida",
      description: "Te ofrecemos un presupuesto gratuito y sin compromiso."
    },
    {
      icon: <Truck className="w-12 h-12 text-emerald-600" />,
      title: "Vaciado rápido y seguro",
      description: "Nuestro equipo realiza el trabajo con seguridad y rapidez."
    },
    {
      icon: <Recycle className="w-12 h-12 text-emerald-600" />,
      title: "Gestión de residuos",
      description: "Reciclamos y gestionamos los residuos de forma ecológica."
    },
    {
      icon: <CheckSquare className="w-12 h-12 text-emerald-600" />,
      title: "Espacio listo para usar",
      description: "Entregamos el espacio limpio y vacío."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Cómo trabajamos en Matarix?</h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-white rounded-full shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}