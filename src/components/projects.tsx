import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/cardd"
import { BarChart3, Shield, Scissors } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Trafficlly",
      description: "Software de análisis de tránsito peatonal para tomar decisiones de marketing estratégicas.",
      icon: <BarChart3 className="h-10 w-10 text-amber-600" />,
      image: "/project-1.png?height=300&width=500",
      alt: "Trafficlly - Análisis de tránsito peatonal",
    },
    {
      id: 2,
      title: "Centinel's Eye",
      description: "Software avanzado de seguridad y alarmas para protección residencial y comercial.",
      icon: <Shield className="h-10 w-10 text-amber-600" />,
      image: "/project-2.png?height=300&width=500",
      alt: "Centinel's Eye - Software de seguridad",
    },
    {
      id: 3,
      title: "The Barber's",
      description: "Software a medida para barberías que permite gestionar barberos y agendar citas.",
      icon: <Scissors className="h-10 w-10 text-amber-600" />,
      image: "/project-3.png?height=300&width=500",
      alt: "The Barber's - Gestión de barberías",
    },
  ]

  return (
    <section className="bg-gray-50 py-20" id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-amber-600 sm:text-4xl md:text-5xl">
              Nuestros Proyectos
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Soluciones tecnológicas innovadoras diseñadas para resolver problemas reales.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="mb-2">{project.icon}</div>
                <CardTitle className="text-xl text-amber-600">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                  Conocer más
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

