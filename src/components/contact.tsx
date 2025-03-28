import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section className="bg-white py-20" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-amber-600 sm:text-4xl md:text-5xl">Contáctanos</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Estamos listos para ayudarte a transformar tus ideas en soluciones digitales.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-amber-100 p-3">
                <MapPin className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Dirección</h3>
                <p className="text-gray-600">Av. Tecnológica 123, Tuxtla Gutiérrez</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-amber-100 p-3">
                <Mail className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-600">info@morecode.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-amber-100 p-3">
                <Phone className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Teléfono</h3>
                <p className="text-gray-600">+52 961 353 3655</p>
              </div>
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/mapa.png?height=300&width=500"
                alt="Mapa de ubicación"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Nombre
                  </label>
                  <Input id="name" placeholder="Ingresa tu nombre" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Asunto
                </label>
                <Input id="subject" placeholder="Asunto de tu mensaje" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mensaje
                </label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

