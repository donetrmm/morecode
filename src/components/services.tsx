import { Code, Database, Globe, Layers, MessageSquare, Users } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Sitios web y aplicaciones web responsivas, rápidas y modernas con las últimas tecnologías."
  },
  {
    icon: Layers,
    title: "Aplicaciones Móviles",
    description: "Apps nativas y multiplataforma para iOS y Android que destacan en el mercado."
  },
  {
    icon: Database,
    title: "Bases de Datos",
    description: "Diseño e implementación de bases de datos optimizadas para tus necesidades."
  },
  {
    icon: Globe,
    title: "E-commerce",
    description: "Tiendas online completas con pasarelas de pago y gestión de inventario."
  },
  {
    icon: Users,
    title: "Consultoría IT",
    description: "Asesoramiento tecnológico para optimizar tus procesos y sistemas."
  },
  {
    icon: MessageSquare,
    title: "Soporte Técnico",
    description: "Mantenimiento y soporte continuo para tus aplicaciones y sistemas."
  }
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="w-full bg-zinc-950 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gold/10 px-3 py-1 text-sm text-gold">
              Nuestros Servicios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-gold sm:text-5xl">
              Soluciones Tecnológicas Completas
            </h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos servicios integrales de desarrollo de software para satisfacer todas tus necesidades
              digitales.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 bg-zinc-950 p-6 shadow-lg hover:border-gold/50 transition-all duration-300"
            >
              <div className="rounded-full bg-gold/10 p-4">
                <service.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-gold">{service.title}</h3>
              <p className="text-center text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}