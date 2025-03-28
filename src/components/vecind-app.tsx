import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function VecindApp() {
  const features = [
    "Generación de códigos para visitantes",
    "Verificación en caseta de vigilancia",
    "Registro de residentes con código de vecindario",
    "Gestión de vecindarios por administradores",
    "Registro de datos de visitantes y vehículos",
    "Historial de entradas y salidas",
  ]

  return (
    <section className="bg-gradient-to-r from-amber-50 to-amber-100 py-20" id="vecindapp">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-amber-600 sm:text-4xl md:text-5xl">VecindApp</h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl">
                La solución definitiva para la gestión de accesos en residenciales, fraccionamientos y condominios.
              </p>
            </div>
            <ul className="grid gap-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 pt-4 sm:flex-row">
              <Button className="bg-amber-600 hover:bg-amber-700">Solicitar Demo</Button>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Más Información
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-video w-full max-w-[500px] overflow-hidden rounded-xl shadow-xl">
          <Image
  src="/vecindapp-mockup.png"
  alt="VecindApp - Gestión de accesos residenciales"
  width={750}
  height={500}
  className="object-cover"
/>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white">VecindApp</h3>
              <p className="text-sm text-white">Seguridad y control para su comunidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

