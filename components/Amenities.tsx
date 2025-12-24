'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AMENITIES, ROOMS, PRICES, LOCATION, GALLERY_IMAGES } from '@/lib/constants'

const Amenities = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section id="amenidades" className="py-20 bg-lightBg scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-darkBg mb-4 tracking-wide" style={{ fontFamily: 'serif' }}>
            El espacio
          </h2>
          <p className="text-lg text-darkBg/70 max-w-2xl mx-auto">
            Un refugio rodeado de naturaleza y silencio, con áreas comunes acogedoras y espacios dedicados para tus prácticas de conexión interior
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Left Column - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-soft"
          >
            <Image
              src={GALLERY_IMAGES[0]}
              alt="Espacio Ukum"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentVariants}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Description */}
            <div>
              <p className="text-darkBg/80 text-lg leading-relaxed mb-6">
                Ubicado en {LOCATION}, Espacio Ukum ofrece un lugar íntimo para retiros, 
                sesiones de sound healing y descanso profundo.
              </p>

              {/* Key Stats */}
              <div className="space-y-3">
                <div className="flex items-center text-darkBg">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span><strong>{ROOMS.quantity}</strong> habitaciones con capacidad para <strong>{ROOMS.capacity}</strong> personas</span>
                </div>
                <div className="flex items-center text-darkBg">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span><strong>{ROOMS.bathrooms}</strong> baños completos</span>
                </div>
                <div className="flex items-center text-darkBg">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Desde <strong>${PRICES.min.toLocaleString()}</strong> a <strong>${PRICES.max.toLocaleString()} {PRICES.currency}</strong> por noche</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Amenities Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-light text-darkBg mb-8 text-center md:text-left">
            Amenidades incluidas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {AMENITIES.map((amenity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-darkBg border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 shadow-soft hover:border-primary/60 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-2xl flex-shrink-0">{amenity.icon}</span>
                <span className="text-lightBg text-sm font-medium">{amenity.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Amenities
