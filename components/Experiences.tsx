'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Heart, Sparkles } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/constants'

const Experiences = () => {
  const experiences = [
    {
      icon: Calendar,
      title: 'Escapada de fin de semana',
      duration: '2–3 noches',
      includes: 'Alojamiento completo, comidas, una sesión de sound healing y acceso a todas las áreas comunes (jardín, alberca, espacios de meditación).',
      forWho: 'Personas que buscan desconectar rápido del ritmo de la ciudad y recargar energía en un ambiente tranquilo.',
      whatsappMessage: 'Me interesa la Escapada de fin de semana, ¿me pueden dar más información?'
    },
    {
      icon: Heart,
      title: 'Retiro entre semana',
      duration: '3–5 noches',
      includes: 'Todo lo anterior, más sesiones personalizadas de yoga, meditación guiada y acompañamiento terapéutico según tus necesidades.',
      forWho: 'Trabajadores remotos, freelancers o personas que pueden pausar unos días para una inmersión más profunda en su proceso personal.',
      whatsappMessage: 'Me interesa el Retiro entre semana, ¿me pueden dar más información?'
    },
    {
      icon: Sparkles,
      title: 'Sesión individual',
      duration: '1–2 horas',
      includes: 'Consulta inicial, sesión personalizada de sound healing, terapia holística o trabajo energético enfocado en lo que necesites soltar o sanar.',
      forWho: 'Personas que buscan una experiencia enfocada y transformadora sin necesidad de hospedaje, ideal para quienes viven cerca.',
      whatsappMessage: 'Me interesa una Sesión individual, ¿me pueden dar más información?'
    },
    {
      icon: Users,
      title: 'Retiro para grupos pequeños',
      duration: 'A medida',
      includes: 'Diseño completo de retiro grupal, facilitación de talleres, sesiones colectivas, uso exclusivo del espacio y menú personalizado.',
      forWho: 'Equipos de trabajo, grupos de amigos o familias que buscan conectar en profundidad, celebrar algo especial o co-crear una experiencia única.',
      whatsappMessage: 'Me interesa un Retiro para grupos pequeños, ¿me pueden dar más información?'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="experiencias" className="py-20 bg-section-gradient scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-darkBg mb-4 tracking-wide" style={{ fontFamily: 'serif' }}>
            Tipos de experiencias
          </h2>
          <p className="text-lg text-darkBg/70 max-w-3xl mx-auto">
            Diseña tu estancia ideal: desde escapadas cortas hasta retiros transformadores
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {experiences.map((experience, index) => {
            const Icon = experience.icon
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(experience.whatsappMessage)}`

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -4,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-lightBg rounded-2xl shadow-soft p-6 hover:shadow-lg hover:border hover:border-primary/60 transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-darkBg mb-2">
                  {experience.title}
                </h3>

                {/* Duration */}
                <p className="text-sm text-primary font-medium mb-4">
                  {experience.duration}
                </p>

                {/* Includes */}
                <div className="mb-4 flex-grow">
                  <p className="text-darkBg/70 text-sm leading-relaxed mb-3">
                    <strong className="text-darkBg">Incluye:</strong> {experience.includes}
                  </p>
                  <p className="text-darkBg/70 text-sm leading-relaxed">
                    <strong className="text-darkBg">Para quién:</strong> {experience.forWho}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-primary text-white rounded-full px-4 py-2 text-sm shadow-soft hover:bg-secondary transition-all duration-300 hover:scale-105"
                >
                  Consultar
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Experiences
