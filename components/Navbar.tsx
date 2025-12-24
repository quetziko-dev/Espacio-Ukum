'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { AIRBNB_URL } from '@/lib/constants'
import Logo from './Logo'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#galeria', label: 'Galería' },
    { href: '#reseñas', label: 'Reseñas' },
    { href: '#amenidades', label: 'Amenidades' },
    { href: '#contacto', label: 'Contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    setIsMenuOpen(false)
  }

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-darkBg/90 backdrop-blur-xl shadow-soft border-b border-white/10'
          : 'bg-darkBg/70 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div variants={linkVariants} className="flex items-center">
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, '#inicio')}
            >
              <Logo />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {menuItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToSection(e, item.href)}
                  variants={linkVariants}
                  className="text-lightBg hover:text-primary px-3 py-2 text-sm font-light transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </motion.a>
              ))}
            </div>
            <motion.a
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              variants={linkVariants}
              className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-secondary shadow-soft hover:shadow-lg transition-all duration-300"
            >
              Reservar en Airbnb
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-lightBg hover:text-primary focus:outline-none transition-colors duration-300"
              aria-label="Abrir menú"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden bg-darkBg/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {menuItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToSection(e, item.href)}
                  variants={linkVariants}
                  className="text-lightBg hover:text-primary block px-3 py-3 text-base font-light transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                variants={linkVariants}
                className="block w-full mt-4 bg-primary text-white px-4 py-3 rounded-full text-center font-medium hover:bg-secondary shadow-soft transition-all duration-300"
              >
                Reservar en Airbnb
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
