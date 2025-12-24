'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AlertCircle, Home } from 'lucide-react'

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="min-h-screen bg-section-gradient flex items-center justify-center px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center max-w-2xl"
      >
        {/* Icon */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <AlertCircle className="w-20 h-20 text-primary" strokeWidth={1.5} />
        </motion.div>

        {/* 404 Number */}
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <h1 className="text-8xl md:text-9xl font-light text-primary mb-2" style={{ fontFamily: 'serif' }}>
            404
          </h1>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-light text-darkBg mb-4 tracking-wide"
          style={{ fontFamily: 'serif' }}
        >
          Parece que este sendero no lleva a ningún lugar...
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-darkBg/70 mb-10 leading-relaxed"
        >
          La página que buscas no existe o fue movida. Pero no te preocupes, siempre puedes volver al inicio y encontrar tu camino.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-8 py-4 text-lg shadow-soft hover:bg-secondary transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Home className="w-5 h-5" />
            Volver al inicio
          </Link>
        </motion.div>

        {/* Decorative text */}
        <motion.p
          variants={itemVariants}
          className="mt-12 text-sm text-darkBg/50 italic"
        >
          "El camino no es siempre recto, pero siempre lleva a donde necesitas estar."
        </motion.p>
      </motion.div>
    </div>
  )
}
