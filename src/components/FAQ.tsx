import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cuánto tiempo se tarda en vaciar un piso o local en Mataró?",
      answer: "El tiempo necesario para vaciar un piso o local en Mataró depende de la cantidad de muebles y objetos que debamos retirar, así como del tamaño del espacio. En la mayoría de los casos, el vaciado completo de un piso estándar puede realizarse en un solo día. Para locales comerciales o espacios más grandes, ofrecemos un presupuesto personalizado que incluye la duración estimada. Nuestro objetivo es finalizar el trabajo de forma rápida, segura y eficiente, minimizando las molestias para el cliente."
    },
    {
      question: "¿Qué ocurre con los objetos y muebles que se retiran del inmueble?",
      answer: "En Matarix, nos ocupamos de la gestión responsable de todos los objetos retirados durante el vaciado de pisos y locales en Mataró. Esto incluye el reciclaje de materiales y la correcta disposición de residuos según la normativa local. Aquellos muebles o enseres que puedan ser donados a organizaciones benéficas también se destinan a ese fin, siempre que el cliente esté de acuerdo. Garantizamos un proceso ecológico y comprometido con el medio ambiente en cada servicio."
    },
    {
      question: "¿Ofrecen servicio de vaciado de pisos urgente en Mataró?",
      answer: "Sí, en Matarix ofrecemos servicios de vaciado urgente de pisos y locales en Mataró y alrededores. Sabemos que en ocasiones es necesario liberar un espacio de forma rápida, ya sea por cambio de propiedad, venta o alquiler, y estamos preparados para responder con agilidad. Contáctanos y te ofreceremos una solución rápida y ajustada a tus necesidades."
    },
    {
      question: "¿Se encargan de la limpieza del espacio después del vaciado?",
      answer: "Sí, en Matarix realizamos una limpieza completa del espacio una vez finalizado el vaciado. Dejamos el piso o local listo para ser utilizado, con el suelo y las superficies despejadas y limpias. Este servicio es especialmente útil en casos de vaciado por síndrome de Diógenes o después de un fallecimiento, donde el estado de limpieza del lugar puede requerir atención especial."
    },
    {
      question: "¿Hay costes adicionales en el servicio de vaciado de pisos en Mataró?",
      answer: "En Matarix, te ofrecemos un presupuesto detallado y sin compromiso desde el inicio, donde especificamos todos los costes asociados al vaciado de tu piso o local en Mataró. No añadimos cargos ocultos ni costes sorpresa. Nuestro equipo realiza una evaluación previa para asegurarnos de ofrecer un precio justo y transparente, adaptado a las características del trabajo."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-emerald-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-emerald-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border border-gray-200 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}