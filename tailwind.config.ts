import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Espacio Uk'um
        primary: '#754222',           // Marrón oficial
        primaryDark: '#3D1A0C',       // Marrón oscuro
        primaryLight: '#AD765C',      // Marrón medio
        secondary: '#E09D82',         // Durazno oficial
        secondaryLight: '#EBBEAC',    // Durazno medio
        secondaryLighter: '#F2D9CE',  // Durazno claro
        accent: '#038182',            // Turquesa oficial
        accentLight: '#05ADAB',       // Turquesa claro
        accentBright: '#07E3E0',      // Turquesa vibrante
        bg: '#F0E6DA',                // Arena oficial (fondo)
        bgLight: '#F2EFEB',           // Arena claro
        bgDark: '#F0D4B4',            // Arena oscuro
        // Mantener compatibilidad
        darkBg: '#3D1A0C',            // Usar marrón oscuro
        lightBg: '#F0E6DA',           // Usar arena oficial
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],           // Editorial (body text)
        serif: ['Libre Baskerville', 'serif'],    // Primaria (títulos)
        display: ['Montserrat', 'sans-serif'],    // Secundaria (énfasis)
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(61, 26, 12, 0.65), rgba(61, 26, 12, 0.85))',
        'section-gradient': 'linear-gradient(to bottom, #F0E6DA, #F2D9CE)',
      },
      boxShadow: {
        'soft': '0 18px 45px rgba(15, 23, 42, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'pulse-slow': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.9',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(16px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
