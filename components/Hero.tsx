'use client'

import { motion } from 'framer-motion'
import { AIRBNB_URL } from '@/lib/constants'

const Hero = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const services = [
    'Sound Healing',
    'Yoga',
    'Meditación',
    'Terapias holísticas'
  ]

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920")'
          }}
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto"
      >
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl font-light text-lightBg mb-6 tracking-wider"
          style={{ fontFamily: 'serif' }}
        >
          Espacio Uk'um
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl sm:text-2xl text-lightBg/90 mb-4 font-light leading-relaxed"
        >
          Retiro de descanso y conexión en Cuernavaca, Morelos
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg text-lightBg/80 mb-8 font-light"
        >
          Con Anahí Serrano Bandala, tu anfitriona en este espacio de sanación
        </motion.p>
        
        {/* Services List */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12"
        >
          {services.map((service, index) => (
            <div key={index} className="flex items-center text-primary">
              <span className="text-lg mr-2">•</span>
              <span className="text-lightBg/80 font-light">{service}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#servicios"
            onClick={(e) => scrollToSection(e, '#servicios')}
            className="inline-block bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-soft"
          >
            Explorar
          </a>
          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-lightBg text-lightBg hover:bg-lightBg/10 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
          >
            Reservar en Airbnb
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a 
          href="#servicios"
          onClick={(e) => scrollToSection(e, '#servicios')}
          className="block text-lightBg/60 hover:text-lightBg transition-colors duration-300"
        >
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
