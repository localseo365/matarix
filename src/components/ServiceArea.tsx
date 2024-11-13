import React from 'react';
import { MapPin, Recycle, Clock, Shield } from 'lucide-react';

export default function ServiceArea() {
  const locations = [
    {
      city: "Argentona",
      service: "Vaciado de pisos en Argentona",
      description: "Ofrecemos servicio de vaciado de pisos en Argentona, ideal para quienes desean deshacerse de muebles antiguos, limpiar un inmueble o despejar un espacio para renovaciones. Nuestro equipo garantiza una gestión responsable de todos los residuos."
    },
    {
      city: "Vilassar de Mar",
      service: "Vaciado de locales en Vilassar de Mar",
      description: "En Vilassar de Mar, realizamos el vaciado de locales comerciales para empresas que necesitan liberar su espacio. Nos ocupamos de retirar mobiliario, estanterías y cualquier material no deseado, dejando el local listo para su nuevo uso o reforma."
    },
    {
      city: "Cabrera de Mar",
      service: "Servicios de vaciado en Cabrera de Mar",
      description: "Contamos con un equipo especializado en vaciado de inmuebles en Cabrera de Mar, incluyendo viviendas, trasteros y garajes. Nos aseguramos de que cada objeto sea retirado con cuidado y reciclado adecuadamente, contribuyendo a un entorno más limpio."
    },
    {
      city: "Premià de Mar",
      service: "Vaciado urgente de pisos en Premià de Mar",
      description: "Si necesitas un vaciado urgente en Premià de Mar, estamos disponibles para responder rápidamente a tu solicitud. Gestionamos situaciones de vaciado por herencias, alquileres finalizados o casos de emergencia, ofreciendo un servicio eficiente y profesional."
    },
    {
      city: "El Masnou",
      service: "Vaciado ecológico en El Masnou",
      description: "Comprometidos con el medio ambiente, en El Masnou proporcionamos un vaciado ecológico de pisos y locales, priorizando el reciclaje de los objetos y materiales retirados. Nuestro equipo se encarga de cada detalle para asegurar que el proceso sea respetuoso con el entorno."
    }
  ];

  const benefits = [
    {
      icon: <MapPin className="w-12 h-12 text-emerald-600" />,
      title: "Cobertura amplia en el Maresme",
      description: "Atendemos toda el área de Mataró y municipios colindantes, asegurando una respuesta rápida y efectiva. Nuestro equipo conoce bien la región y puede adaptarse a las normativas locales de cada municipio para un servicio eficiente y sin complicaciones."
    },
    {
      icon: <Shield className="w-12 h-12 text-emerald-600" />,
      title: "Equipo local y experto",
      description: "Contamos con un equipo cercano a la zona de Mataró, que entiende las necesidades y expectativas de los vecinos de esta región. Esta proximidad nos permite atender las solicitudes en menor tiempo y con un enfoque personalizado para cada cliente."
    },
    {
      icon: <Recycle className="w-12 h-12 text-emerald-600" />,
      title: "Vaciado con compromiso medioambiental",
      description: "Nos preocupamos por reducir el impacto ambiental en cada servicio de vaciado. Matarix aplica prácticas de reciclaje y correcta gestión de residuos en todos sus trabajos, promoviendo un entorno más limpio para Mataró y el Maresme."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Vaciado de pisos y locales en Mataró y áreas cercanas
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            En Matarix, nos especializamos en el vaciado de pisos y locales comerciales en Mataró y extendemos nuestros servicios a las localidades vecinas. Entendemos que cada municipio tiene sus necesidades específicas, y nuestro equipo está preparado para ofrecer un servicio rápido, seguro y ecológico en toda la región del Maresme. Si estás buscando un servicio de vaciado profesional en Mataró o alrededores, nuestro equipo está listo para ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-emerald-600 mr-2" />
                <h3 className="text-xl font-semibold">{location.city}</h3>
              </div>
              <h4 className="text-lg font-medium text-emerald-600 mb-2">
                {location.service}
              </h4>
              <p className="text-gray-600">
                {location.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">
            Beneficios de contratar a Matarix para el vaciado en Mataró y zonas cercanas
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}