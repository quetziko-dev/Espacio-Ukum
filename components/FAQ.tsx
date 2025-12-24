'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '¿Cuáles son los horarios de check-in y check-out?',
      answer: 'El check-in es a partir de las 3:00 PM y el check-out es hasta las 12:00 PM. Si necesitas horarios flexibles, escríbele a Anahí con anticipación para ver si es posible ajustarlos según disponibilidad.'
    },
    {
      question: '¿Hay estacionamiento disponible?',
      answer: 'Sí, el espacio cuenta con estacionamiento privado y seguro dentro de la propiedad. Hay espacio para 2-3 vehículos sin costo adicional.'
    },
    {
      question: '¿Se permiten mascotas?',
      answer: 'Por el momento no recibimos mascotas en Espacio Ukum. Esto nos permite mantener el espacio tranquilo y libre de alérgenos para todos los huéspedes.'
    },
    {
      question: '¿Qué incluye la estancia?',
      answer: 'La estancia incluye ropa de cama, toallas, acceso a todas las áreas comunes (sala, cocina, jardín, alberca), WiFi, y artículos básicos de baño. La cocina está totalmente equipada si deseas preparar tus propios alimentos.'
    },
    {
      question: '¿Cuál es la política de cancelación?',
      answer: 'La reserva se realiza a través de Airbnb, por lo que aplican las políticas de cancelación de la plataforma. Te recomendamos revisar los términos específicos al momento de reservar. Para cambios o consultas, contacta directamente a Anahí.'
    },
    {
      question: '¿Se pueden organizar retiros o eventos privados?',
      answer: 'Sí, Espacio Ukum es ideal para retiros personales, de parejas o grupos pequeños. También podemos diseñar experiencias grupales con talleres y sesiones. Escríbele a Anahí para platicar sobre tu visión y armar algo especial.'
    },
    {
      question: '¿Las sesiones de sound healing, yoga y terapias tienen costo adicional?',
      answer: 'Las sesiones tienen un costo adicional al hospedaje, ya que son experiencias personalizadas. Los precios varían según el tipo de sesión y duración. Anahí te compartirá los detalles cuando diseñen tu experiencia.'
    },
    {
      question: '¿Qué tan lejos está de la Ciudad de México?',
      answer: 'Espacio Ukum está aproximadamente a 1 hora 30 minutos de la CDMX por autopista. Es un trayecto cómodo y directo, perfecto para escapadas de fin de semana sin complicaciones.'
    }
  ]

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-darkBg scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Decorative Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <Sparkles className="w-8 h-8 text-primary/60" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide" style={{ fontFamily: 'serif' }}>
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-white/70">
            Resolvemos las dudas más comunes antes de tu estancia
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-white/20 bg-white/5 overflow-hidden shadow-soft hover:shadow-lg hover:bg-white/15 hover:border-primary/60 transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left transition-colors duration-300"
              >
                <span className="font-medium text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary/80" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 pt-2">
                      <p className="text-white/90 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
