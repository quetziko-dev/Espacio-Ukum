import { Music2, Heart, Brain, Sparkles } from 'lucide-react'

export const WHATSAPP_NUMBER = '+525514692613'

export const INSTAGRAM_URL = 'https://www.instagram.com/espacio_ukum/'

export const AIRBNB_URL = 'https://www.airbnb.mx/rooms/1306713774253837981?guests=1&adults=1&s=67&unique_share_id=4a960f0f-4089-4976-a0b5-704a537dd797'

export const EMAIL = 'anahiserrano.ukum@gmail.com'

export const LOCATION = 'Cuernavaca, Morelos, México'

export const OWNER_NAME = 'Anahí Serrano Bandala'

export const SERVICES = [
  {
    name: 'Sound Healing',
    description: 'Viajes sonoros con cuencos tibetanos, gongs y otros instrumentos que te ayudan a soltar tensiones profundas. Anahí te guía en una experiencia de relajación y reconexión con tu cuerpo, permitiendo que las frecuencias vibratorias armonicen tu energía.',
    icon: Music2,
  },
  {
    name: 'Yoga',
    description: 'Prácticas suaves de yoga adaptadas a todos los niveles, en espacios rodeados de naturaleza. Ya sea que quieras despertar tu cuerpo con el sol o relajarte al atardecer, estas sesiones te ayudan a centrarte y renovarte.',
    icon: Heart,
  },
  {
    name: 'Meditación',
    description: 'Momentos de quietud guiada para calmar la mente y conectar contigo. Estas sesiones te invitan a explorar tu mundo interior, cultivar presencia y encontrar claridad en medio del silencio.',
    icon: Brain,
  },
  {
    name: 'Terapias Holísticas',
    description: 'Acompañamiento personalizado que integra diferentes técnicas de sanación según lo que necesites. Anahí escucha tu proceso y diseña sesiones a tu medida, combinando masajes, trabajo energético y prácticas de liberación emocional.',
    icon: Sparkles,
  },
]

export const REVIEWS = [
  {
    name: 'Claudia R.',
    rating: 5,
    text: 'Pasé un fin de semana increíble. Anahí es súper atenta y el espacio tiene todo lo que necesitas para descansar de verdad. La sesión de sound healing fue profunda, nunca había experimentado algo así. La casa está hermosa y la alberca tiene una vista espectacular.',
    country: 'Ciudad de México',
  },
  {
    name: 'Jennifer M.',
    rating: 5,
    text: 'Such a peaceful place! Anahí made me feel so welcome from the moment I arrived. The yoga session in the morning was beautiful, and I loved how quiet and surrounded by nature everything is. Perfect for disconnecting and recharging.',
    country: 'USA',
  },
  {
    name: 'Roberto S.',
    rating: 5,
    text: 'Llegué con mucho estrés y salí renovado. El espacio está diseñado para que realmente puedas soltar y conectar contigo. Anahí te hace sentir como en casa y las terapias son muy profesionales. El clima de Cuernavaca es perfecto. Volveré pronto.',
    country: 'Guadalajara',
  },
  {
    name: 'Marianne D.',
    rating: 5,
    text: 'Un endroit magnifique pour se ressourcer. Anahí est une hôte attentionnée et les séances sont adaptées à ce dont tu as besoin. J\'ai adoré les espaces communs, le jardin et surtout le silence. Merci pour cette belle expérience.',
    country: 'Francia',
  },
  {
    name: 'Ana L.',
    rating: 5,
    text: 'Fui para mi cumpleaños y fue el mejor regalo. Anahí te recibe con mucho cariño y las sesiones son transformadoras. Todo está limpio, cómodo y la energía del lugar es hermosa. Si buscas paz y reconexión, este es el lugar indicado.',
    country: 'Puebla',
  },
  {
    name: 'David K.',
    rating: 5,
    text: 'Needed a break from the city and this was exactly what I needed. The house is beautiful, well-equipped, and Anahí is an amazing host. The sound healing session helped me release a lot of tension. Highly recommend for anyone looking for a real retreat experience.',
    country: 'USA',
  },
]

export const AMENITIES = [
  { name: 'WiFi de alta velocidad', icon: '📶' },
  { name: 'Piscina con vista panorámica', icon: '🏊‍♀️' },
  { name: 'Yoga mats y props', icon: '🧘' },
  { name: 'Fogata nocturna', icon: '🔥' },
  { name: 'Cocina equipada', icon: '👨‍🍳' },
  { name: 'Jardín zen', icon: '🌿' },
  { name: 'Espacio de meditación', icon: '☮️' },
  { name: 'Hamacas', icon: '🏖️' },
  { name: 'Biblioteca de bienestar', icon: '📚' },
  { name: 'Té y café orgánico', icon: '☕' },
  { name: 'Estacionamiento privado', icon: '🚗' },
  { name: 'Terraza con vista', icon: '🌅' },
]

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800',
  'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800',
  'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
  'https://images.unsplash.com/photo-1559595500-e15296bdbb4c?w=800',
  'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800',
]

export const PRICES = {
  min: 2100,
  max: 10000,
  currency: 'MXN',
}

export const ROOMS = {
  quantity: 5,
  capacity: 5,
  bathrooms: 3,
}

export const CONTACT_INFO = {
  email: EMAIL,
  phone: WHATSAPP_NUMBER,
  address: 'Cuernavaca, Morelos, México',
  hours: {
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    reception: 'Disponible 24/7 por WhatsApp',
  },
}

export const SITE_INFO = {
  name: "Espacio Uk'um",
  description: 'Retiro espiritual y centro de bienestar integral en Cuernavaca, Morelos',
  tagline: 'Tu santuario de paz y renovación',
  owner: OWNER_NAME,
}

export const META_TAGS = {
  title: "Espacio Uk'um - Retiro Espiritual en Cuernavaca | Sound Healing, Yoga & Meditación",
  description: "Descubre Espacio Uk'um, tu retiro de bienestar en Cuernavaca. Sound healing, yoga, meditación y terapias holísticas en un entorno natural único. Reserva tu experiencia transformadora.",
  keywords: 'espacio ukum, retiro espiritual cuernavaca, sound healing mexico, yoga cuernavaca, meditación morelos, terapia holística, retiro bienestar, anahí serrano',
  author: OWNER_NAME,
  ogImage: GALLERY_IMAGES[0],
}
