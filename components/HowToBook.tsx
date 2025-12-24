'use client'

import { motion } from 'framer-motion'
import { AIRBNB_URL } from '@/lib/constants'

const HowToBook = () => {
  const steps = [
    {
      number: '01',
      title: 'Cuéntanos qué buscas',
      description: 'Escríbele a Anahí por WhatsApp o completa el formulario de contacto. Cuéntale sobre tus intenciones, fechas aproximadas y qué tipo de experiencia te gustaría vivir.'
    },
    {
      number: '02',
      title: 'Diseñamos tu experiencia',
      description: 'Anahí se comunica contigo para ajustar fechas, tipo de sesiones, necesidades especiales y armar un retiro personalizado que se adapte a lo que necesitas.'
    },
    {
      number: '03',
      title: 'Reserva segura por Airbnb',
      description: 'Una vez que tengas claridad de tu experiencia, completas la reserva de forma segura a través de nuestro anuncio oficial en Airbnb con todas las garantías de la plataforma.'
    }
  ]

  return (
    <section id="como-reservar" className="py-20 bg-section-gradient scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-darkBg mb-4 tracking-wide" style={{ fontFamily: 'serif' }}>
            ¿Cómo reservar en Espacio Ukum?
          </h2>
          <p className="text-lg text-darkBg/70 max-w-2xl mx-auto">
            Un proceso sencillo de 3 pasos para que tu experiencia sea exactamente lo que necesitas
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-lightBg rounded-2xl shadow-soft p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Number */}
              <div className="text-6xl font-light text-primary mb-4" style={{ fontFamily: 'serif' }}>
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium text-darkBg mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-darkBg/70 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white rounded-full px-6 py-3 shadow-soft hover:bg-secondary transition-all duration-300 hover:scale-105"
          >
            Ver anuncio en Airbnb
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowToBook
