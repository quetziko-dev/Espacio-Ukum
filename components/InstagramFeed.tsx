'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Instagram } from 'lucide-react'
import { INSTAGRAM_URL } from '@/lib/constants'

const InstagramFeed = () => {
  // Preview images for Instagram feed
  // TODO: In the future, replace this static array with:
  // - Instagram Basic Display API integration
  // - Instagram oEmbed widget
  // - Or a third-party service like EmbedSocial, Flockler, etc.
  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80',
      alt: 'Sound healing session at Espacio Ukum'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
      alt: 'Yoga practice in nature'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1599447292171-49c39dd36587?w=600&q=80',
      alt: 'Meditation space'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
      alt: 'Swimming pool with mountain view'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&q=80',
      alt: 'Tibetan singing bowls'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
      alt: 'Beautiful garden at Espacio Ukum'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  }

  return (
    <section id="instagram" className="py-20 bg-section-gradient scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-darkBg mb-4 tracking-wide" style={{ fontFamily: 'serif' }}>
            Desde nuestro Instagram
          </h2>
          <p className="text-lg text-darkBg/70 max-w-2xl mx-auto">
            Síguenos en @espacio_ukum para ver fotos recientes, talleres, experiencias y momentos especiales en el espacio
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10"
        >
          {instagramPosts.map((post) => (
            <motion.a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-darkBg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-10 h-10 text-white" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-6 py-3 shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            Ver más en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default InstagramFeed
