import React from 'react';
import { Home, Sparkles, Calculator, Clock, Recycle, Trophy } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-emerald-600" />,
      title: "Vaciado de pisos en Mataró",
      description: "¿Necesitas vaciar un piso en Mataró? En Matarix somos especialistas en el vaciado de pisos de cualquier tamaño. Nuestro servicio incluye la retirada de muebles, electrodomésticos, enseres personales y cualquier tipo de residuo acumulado. Nos encargamos de dejar el espacio completamente libre para que puedas disponer de él como necesites, ya sea para venderlo, alquilarlo o realizar una renovación."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-emerald-600" />,
      title: "Vaciado de locales comerciales en Mataró",
      description: "Si necesitas vaciar un local comercial en Mataró, confía en Matarix para realizar un trabajo rápido y profesional. Nos encargamos de desmontar y retirar mobiliario comercial, estanterías, equipos electrónicos, decoración y cualquier otro elemento que ya no necesites en tu local. Garantizamos que el proceso es ágil y seguro para minimizar el tiempo de inactividad de tu negocio."
    },
    {
      icon: <Calculator className="w-8 h-8 text-emerald-600" />,
      title: "Limpieza de espacios después del vaciado",
      description: "En Matarix, no solo realizamos el vaciado, sino que también ofrecemos un servicio de limpieza posterior para dejar el espacio en perfecto estado. Nos aseguramos de que cada rincón quede limpio y preparado para su próximo uso. Esta opción es ideal si deseas que el espacio esté listo para un nuevo inquilino, para su venta o simplemente para su mantenimiento."
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      title: "Gestión de residuos y reciclaje en Mataró",
      description: "Comprometidos con el medio ambiente, en Matarix gestionamos los residuos de forma sostenible. Nos ocupamos de separar y reciclar adecuadamente todos los materiales retirados, como muebles, aparatos electrónicos y otros objetos que puedan tener un impacto ambiental. Gracias a nuestras colaboraciones con centros de reciclaje locales, contribuimos a reducir el volumen de residuos y apoyamos un modelo de economía circular."
    },
    {
      icon: <Recycle className="w-8 h-8 text-emerald-600" />,
      title: "Vaciado por síndrome de Diógenes",
      description: "En Matarix contamos con la experiencia y el equipo necesario para realizar vaciados de pisos afectados por el síndrome de Diógenes en Mataró. Este servicio es especialmente delicado y requiere una intervención profesional para retirar gran cantidad de objetos acumulados, siempre respetando la privacidad y con una limpieza exhaustiva posterior."
    },
    {
      icon: <Trophy className="w-8 h-8 text-emerald-600" />,
      title: "Vaciado por fallecimiento",
      description: "Ofrecemos un servicio de vaciado discreto y respetuoso en situaciones de fallecimiento. En Matarix, entendemos la importancia de realizar el vaciado de estos espacios con sensibilidad y profesionalismo, gestionando pertenencias y efectos personales con el máximo respeto y cuidado."
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros servicios de vaciado de pisos y locales en Mataró</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En Matarix, ofrecemos una gama completa de servicios de vaciado de pisos, locales comerciales y otros espacios en Mataró. 
            Nuestro equipo de profesionales se encarga de todo, desde la retirada de muebles y objetos hasta la limpieza final del espacio, 
            garantizando un servicio rápido, seguro y respetuoso con el medio ambiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}