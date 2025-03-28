"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-12 w-12">
            <Image src="/LOGO1.png" alt="More Code Logo" fill className="object-contain" />
              </div>
              <span className={`text-lg font-bold ${isScrolled ? "text-amber-600" : "text-amber-600"}`}>MORE CODE</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="#about"
              className={`text-sm font-medium ${isScrolled ? "text-gray-700" : "text-gray-700"} hover:text-amber-600`}
            >
              Nosotros
            </Link>
            <Link
              href="#projects"
              className={`text-sm font-medium ${isScrolled ? "text-gray-700" : "text-gray-700"} hover:text-amber-600`}
            >
              Proyectos
            </Link>
            <Link
              href="#vecindapp"
              className={`text-sm font-medium ${isScrolled ? "text-gray-700" : "text-gray-700"} hover:text-amber-600`}
            >
              VecindApp
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-medium ${isScrolled ? "text-gray-700" : "text-gray-700"} hover:text-amber-600`}
            >
              Contacto
            </Link>
            <Button className="bg-amber-600 hover:bg-amber-700">Solicitar Demo</Button>
          </nav>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Abrir menú</span>
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 bg-white px-2 pb-3 pt-2 shadow-lg">
            <Link
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-amber-600"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-amber-600"
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              href="#vecindapp"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-amber-600"
              onClick={() => setIsOpen(false)}
            >
              VecindApp
            </Link>
            <Link
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-amber-600"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Solicitar Demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

