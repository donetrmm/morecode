"use client"

import { useState, useEffect } from "react"

// Datos de testimonios
const testimonials = [
  {
    text: "More Code transformó nuestra idea en una aplicación excepcional. Su equipo entendió perfectamente nuestras necesidades y entregó un producto que superó nuestras expectativas.",
    name: "Carlos Rodríguez",
    position: "CEO, TechSolutions"
  },
  {
    text: "Trabajar con More Code ha sido una experiencia excepcional. Su profesionalismo y conocimiento técnico nos permitieron lanzar nuestra plataforma en tiempo récord.",
    name: "Laura Martínez",
    position: "Directora de Marketing, InnovaShop"
  },
  {
    text: "El equipo de More Code no solo desarrolló nuestra aplicación, sino que nos asesoró en todo el proceso. Su enfoque estratégico marcó la diferencia en nuestro proyecto.",
    name: "Miguel Sánchez",
    position: "CTO, DataFlex"
  },
  {
    text: "Elegimos More Code por su experiencia en desarrollo móvil y no nos decepcionaron. La app que crearon está recibiendo excelentes críticas de nuestros clientes.",
    name: "Ana Gutiérrez",
    position: "COO, MobileSoft"
  },
  {
    text: "Su capacidad para traducir conceptos complejos en soluciones intuitivas es impresionante. More Code ha sido un socio tecnológico clave para nuestro crecimiento.",
    name: "Roberto Díaz",
    position: "Founder, StartupLab"
  }
]

export default function TestimonialsSection() {
  const [visibleTestimonials, setVisibleTestimonials] = useState(testimonials.slice(0, 3))
  const [isMobile, setIsMobile] = useState(false)
  
  // Detectar si es móvil para ajustar el número de testimonios visibles
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Verificar al cargar
    handleResize()
    
    // Agregar event listener
    window.addEventListener("resize", handleResize)
    
    // Limpiar event listener
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  
  // Actualizar testimonios visibles cuando cambie el tamaño de pantalla
  useEffect(() => {
    setVisibleTestimonials(testimonials.slice(0, isMobile ? 1 : 3))
  }, [isMobile])
  
  // Función para autorotación de testimonios
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleTestimonials((prev) => {
        const firstTestimonial = testimonials.indexOf(prev[0])
        const lastIndex = isMobile ? 0 : 2
        
        const nextIndex = (firstTestimonial + 1) % testimonials.length
        
        return testimonials.slice(
          nextIndex,
          nextIndex + lastIndex + 1
        ).concat(
          nextIndex + lastIndex >= testimonials.length
            ? testimonials.slice(0, (nextIndex + lastIndex) % testimonials.length)
            : []
        )
      })
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <section id="testimonios" className="w-full bg-black py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gold/10 px-3 py-1 text-sm text-gold">Testimonios</div>
            <h2 className="text-3xl font-bold tracking-tighter text-gold sm:text-5xl">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex flex-col space-y-4 rounded-lg border border-zinc-800 bg-zinc-950 p-6 shadow-lg hover:border-gold/50 transition-all duration-300"
            >
              <p className="text-zinc-400">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-gold/20 p-1">
                  <div className="h-10 w-10 rounded-full bg-gold/30"></div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gold">{testimonial.name}</h4>
                  <p className="text-xs text-zinc-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicadores de paginación */}
        <div className="flex justify-center space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <div 
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                visibleTestimonials.includes(testimonials[index]) 
                  ? "bg-gold" 
                  : "bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}