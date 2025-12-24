import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Simple Zen Symbol SVG */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Lotus/Meditation symbol */}
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" className="text-primary" fill="none"/>
        <path 
          d="M16 8C14 8 12 10 12 13C12 16 14 18 16 20C18 18 20 16 20 13C20 10 18 8 16 8Z" 
          className="text-primary"
          fill="currentColor"
        />
        <ellipse cx="16" cy="21" rx="6" ry="2" className="text-primary" fill="currentColor" opacity="0.4"/>
      </svg>
      
      {/* Text Logo */}
      <span 
        className="text-2xl font-light text-primary tracking-wider hover:text-secondary transition-colors duration-300" 
        style={{ fontFamily: 'serif' }}
      >
        Espacio Ukum
      </span>
    </div>
  )
}

export default Logo
