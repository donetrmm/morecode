import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-12 w-12">
                <Image src="/logo1.png" alt="More Code Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold text-amber-500">MORE CODE</span>
            </div>
            <p className="text-sm">
              Desarrollo de software a medida para potenciar su negocio con tecnología de vanguardia.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-amber-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Soluciones</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-amber-500">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500">
                  Aplicaciones Móviles
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500">
                  Software a Medida
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500">
                  Consultoría IT
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Proyectos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-amber-500">
                  Trafficlly
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500">
                  Centinel's Eye
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500">
                  The Barber's
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500">
                  VecindApp
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>Av. Tecnológica 123, Tuxtla Gutiérrez</li>
              <li>info@morecode.com</li>
              <li>+52 961 353 3655</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} More Code. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

