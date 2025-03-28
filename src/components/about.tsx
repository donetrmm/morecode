import { Code, Lightbulb, Users } from "lucide-react"

export default function About() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-amber-600 sm:text-4xl md:text-5xl">
              Sobre Nosotros
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              En More Code nos especializamos en el desarrollo de soluciones tecnológicas innovadoras y personalizadas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-amber-100 p-3">
              <Lightbulb className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-amber-600">Innovación</h3>
            <p className="text-center text-gray-600">
              Creamos soluciones innovadoras que se adaptan a las necesidades cambiantes del mercado.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-amber-100 p-3">
              <Code className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-amber-600">Excelencia Técnica</h3>
            <p className="text-center text-gray-600">
              Utilizamos las mejores prácticas y tecnologías para garantizar productos de alta calidad.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-amber-100 p-3">
              <Users className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-amber-600">Enfoque al Cliente</h3>
            <p className="text-center text-gray-600">
              Trabajamos en estrecha colaboración con nuestros clientes para entender y satisfacer sus necesidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

