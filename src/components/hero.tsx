import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-amber-600 sm:text-5xl xl:text-6xl/none">
                Transformamos Ideas en Soluciones Digitales
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Desarrollo de software a medida para potenciar su negocio con tecnología de vanguardia.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-amber-600 hover:bg-amber-700">Contáctanos</Button>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Nuestros Proyectos
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px]">
              <img src="/LOGO2.png" alt="More Code Logo" className="object-contain w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}