'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { REVIEWS } from '@/lib/constants'

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1))
  }

  const goToReview = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-accent fill-accent' : 'text-darkBg/20'}`}
        />
      ))
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="reseñas" className="py-20 bg-section-gradient scroll-mt-20">
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
            Lo que dicen nuestros huéspedes
          </h2>
          <p className="text-lg text-darkBg/70 max-w-2xl mx-auto">
            Experiencias reales de personas que han descansado en Espacio Ukum
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Review Card */}
          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                whileHover={{ scale: 1.01 }}
                className="absolute w-full"
              >
                <div className="bg-lightBg rounded-2xl shadow-soft p-8 mx-4 sm:mx-0">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {renderStars(REVIEWS[currentIndex].rating)}
                  </div>

                  {/* Review Text */}
                  <p className="text-darkBg/80 text-lg leading-relaxed text-center mb-8 italic">
                    &ldquo;{REVIEWS[currentIndex].text}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="text-center">
                    <p className="text-darkBg font-medium text-xl mb-1">
                      {REVIEWS[currentIndex].name}
                    </p>
                    <p className="text-darkBg/60 text-sm">
                      {REVIEWS[currentIndex].country}
                    </p>
                  </div>

                  {/* Optional Tag */}
                  <div className="flex justify-center mt-6">
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Estancia en 2024
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-0 sm:-mx-12 pointer-events-none">
            <button
              onClick={handlePrevious}
              className="pointer-events-auto bg-primary hover:bg-secondary text-white p-3 rounded-full shadow-soft hover:scale-110 transition-all duration-300"
              aria-label="Ver reseña anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto bg-primary hover:bg-secondary text-white p-3 rounded-full shadow-soft hover:scale-110 transition-all duration-300"
              aria-label="Ver siguiente reseña"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {REVIEWS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 h-3 bg-primary'
                  : 'w-3 h-3 bg-darkBg/30 hover:bg-darkBg/50'
              }`}
              aria-label={`Ir a reseña ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
