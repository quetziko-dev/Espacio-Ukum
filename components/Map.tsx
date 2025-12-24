'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Trees } from 'lucide-react'
import { LOCATION } from '@/lib/constants'

const Map = () => {
  const googleMapsUrl = 'https://maps.app.goo.gl/hVjPP689853bEWdu5'

  return (
    <section id="ubicacion" className="py-16 bg-section-gradient scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-darkBg mb-4 tracking-wide" style={{ fontFamily: 'serif' }}>
            Ubicación
          </h2>
          <p className="text-lg text-darkBg/70 max-w-2xl mx-auto">
            A pocos minutos de Cuernavaca, rodeado de naturaleza y silencio
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Location */}
            <div>
              <h3 className="text-2xl font-light text-darkBg mb-4">
                {LOCATION}
              </h3>
              <p className="text-darkBg/80 leading-relaxed mb-6">
                Espacio Uk'um se encuentra en una zona residencial tranquila, perfecta para desconectarse del ritmo 
                acelerado de la ciudad. Rodeado de vegetación y con un clima primaveral durante todo el año, 
                es el lugar ideal para tu retiro de descanso y sanación.
              </p>
            </div>

            {/* Info List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-darkBg font-medium">A ~1 hr 30 min de la CDMX</p>
                  <p className="text-darkBg/60 text-sm">Fácil acceso por autopista</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Trees className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-darkBg font-medium">Zona residencial tranquila</p>
                  <p className="text-darkBg/60 text-sm">Rodeada de vegetación y naturaleza</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-darkBg font-medium">Centro de Cuernavaca</p>
                  <p className="text-darkBg/60 text-sm">A pocos minutos del centro histórico</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-5 py-3 shadow-soft hover:bg-secondary transition-all duration-300 hover:scale-105"
              >
                <MapPin size={20} />
                Abrir en Google Maps
              </a>
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-soft hover:ring-2 hover:ring-primary/40 transition-all duration-300"
          >
            <div className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.4557895849573!2d-99.2336773!3d18.9372222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddefa6b91d2f5%3A0x7c0e0e0e0e0e0e0e!2sEspacio%20Ukum!5e0!3m2!1ses!2smx!4v1703515200000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación de Espacio Uk'um"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Map
