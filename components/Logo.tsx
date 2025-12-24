import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Simple Zen Symbol SVG - Colores oficiales */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Lotus/Meditation symbol con colores oficiales */}
        <circle cx="16" cy="16" r="14" stroke="#754222" strokeWidth="1.5" fill="none"/>
        <path 
          d="M16 8C14 8 12 10 12 13C12 16 14 18 16 20C18 18 20 16 20 13C20 10 18 8 16 8Z" 
          fill="#754222"
        />
        <ellipse cx="16" cy="21" rx="6" ry="2" fill="#038182" opacity="0.6"/>
      </svg>
      
      {/* Text Logo */}
      <span 
        className="text-2xl font-light text-secondary tracking-wider hover:text-primary transition-colors duration-300 font-serif"
      >
        Espacio Uk'um
      </span>
    </div>
  )
}

export default Logo
