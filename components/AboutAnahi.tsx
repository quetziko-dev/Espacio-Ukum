'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/constants'

const AboutAnahi = () => {
  const whatsappMessage = encodeURIComponent('Hola Anahí, me gustaría saber más sobre ti y tus retiros')
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${whatsappMessage}`

  const strengths = [
    'Escucha atenta y presencia genuina',
    'Diseño personalizado de retiros y experiencias',
    'Ambiente seguro y respetuoso para el descanso',
    'Conexión con la naturaleza y el silencio'
  ]

  return (
    <section id="sobre-anahi" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[3/4] lg:aspect-square rounded-2xl overflow-hidden shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                alt="Anahí Serrano Bandala - Anfitriona de Espacio Ukum"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Title */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-primary mb-3 tracking-wide" style={{ fontFamily: 'serif' }}>
                Conoce a Anahí
              </h2>
              <p className="text-xl text-darkBg/70 font-light">
                Anfitriona y facilitadora de experiencias transformadoras
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-darkBg/80 leading-relaxed">
              <p>
                Anahí Serrano Bandala es facilitadora de sound healing, instructora de yoga y terapeuta holística 
                con más de 10 años de experiencia en acompañamiento espiritual. Su trabajo se centra en crear 
                espacios seguros donde las personas puedan reconectarse consigo mismas, soltar lo que ya no les 
                sirve y encontrar claridad en medio del silencio.
              </p>
              <p>
                Formada en diversas técnicas de sanación vibracional, mindfulness y trabajo corporal, Anahí ha 
                acompañado a cientos de personas en procesos de transformación personal. Su enfoque es siempre 
                respetuoso, intuitivo y profundamente humano, honrando los tiempos y necesidades únicas de cada 
                persona.
              </p>
              <p>
                Espacio Ukum nace de su visión de ofrecer un refugio donde naturaleza, silencio y prácticas 
                ancestrales se unan para facilitar el descanso profundo y la reconexión interior. Un lugar donde 
                puedes simplemente ser, sin prisa ni expectativas.
              </p>
            </div>

            {/* Strengths List */}
            <div className="space-y-3 pt-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-darkBg">{strength}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white rounded-full px-6 py-3 shadow-soft hover:bg-secondary transition-all duration-300 hover:scale-105"
              >
                Escribir a Anahí por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutAnahi
