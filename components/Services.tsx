'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'

const Services = () => {
  // Duration labels for each service
  const serviceDurations = {
    'Sound Healing': '60-90 min',
    'Yoga': '75 min',
    'Meditación': '45-60 min',
    'Terapias Holísticas': '90 min',
  } as const

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    <section id="servicios" className="py-20 bg-section-gradient scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={headerVariants}
            className="text-4xl md:text-5xl font-light text-darkBg mb-4 tracking-wide"
            style={{ fontFamily: 'serif' }}
          >
            Sesiones y experiencias
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-lg text-darkBg/70 max-w-2xl mx-auto"
          >
            Cada sesión está diseñada con respeto y cuidado para acompañarte en tu proceso. También ofrecemos talleres y experiencias personalizadas según lo que necesites.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            const duration = serviceDurations[service.name as keyof typeof serviceDurations]
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="group bg-lightBg border border-white/10 rounded-2xl shadow-soft p-6 hover:shadow-lg hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-medium text-darkBg mb-3">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-darkBg/70 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Duration Tag */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-darkBg/80 text-xs font-medium">
                  {duration}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
