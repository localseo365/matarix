import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "María Valls",
      role: "Propietaria de Local",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5,
      text: "Excelente servicio de vaciado. El equipo de Matarix fue muy profesional y eficiente. Vaciaron mi local comercial en tiempo récord y dejaron todo impecable. Muy recomendable."
    },
    {
      name: "Carlos Martínez",
      role: "Particular",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5,
      text: "Necesitaba vaciar el piso de mi madre con urgencia y Matarix respondió de inmediato. Trabajo rápido, limpio y muy respetuoso. El precio se ajustó al presupuesto inicial."
    },
    {
      name: "Anna Roma",
      role: "Agente Inmobiliario",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5,
      text: "Como agente inmobiliario, he trabajado con varios servicios de vaciado, pero Matarix destaca por su profesionalidad y eficiencia. Son mi primera opción para recomendar a mis clientes."
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Lo que nuestros clientes dicen de Matarix</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}