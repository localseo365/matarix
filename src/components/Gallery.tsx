import React from 'react';

export default function Gallery() {
  const projects = [
    {
      before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
      title: "Piso en Centro Mataró"
    },
    {
      before: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800",
      title: "Local Comercial"
    },
    {
      before: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      title: "Nave Industrial"
    }
  ];

  return (
    <section id="galeria" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Proyectos Realizados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre la transformación de espacios a través de nuestro servicio profesional 
            de vaciado y limpieza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Antes</p>
                  <img 
                    src={project.before} 
                    alt={`Antes - ${project.title}`}
                    className="rounded-lg h-48 w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Después</p>
                  <img 
                    src={project.after} 
                    alt={`Después - ${project.title}`}
                    className="rounded-lg h-48 w-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}