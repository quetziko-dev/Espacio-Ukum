# Guía de Personalización - Espacio Ukum

## 1. Introducción

Este documento te guiará para actualizar textos, fotos y datos del sitio web de Espacio Ukum sin necesidad de conocimientos de programación. Aquí encontrarás instrucciones claras sobre qué archivos editar y cómo hacerlo de forma segura.

**Importante:** Cuando edites archivos, solo cambia los textos que están entre comillas `" "` o dentro de etiquetas como `<p>`. No modifiques código, imports ni palabras clave como `const`, `function`, `className`, etc.

---

## 2. Cambiar Textos Principales

### Hero (Sección Principal)
**Archivo:** `components/Hero.tsx`

**Qué puedes cambiar:**
- **Título principal:** Busca `"Espacio Ukum"` (línea ~75)
- **Subtítulo:** Busca `"Retiro de descanso y conexión en Cuernavaca, Morelos"` (línea ~83)
- **Texto de Anahí:** Busca `"Con Anahí Serrano Bandala, tu anfitriona en este espacio de sanación"` (línea ~90)
- **Servicios listados:** En el array `services` (líneas 42-47):
  ```javascript
  'Sound Healing',
  'Yoga',
  'Meditación',
  'Terapias holísticas'
  ```
- **Textos de botones:** 
  - `"Explorar"` (línea ~109)
  - `"Reservar en Airbnb"` (línea ~117)

### Services (Servicios)
**Archivo:** `components/Services.tsx`

**Qué puedes cambiar:**
- **Título:** Busca `"Sesiones y experiencias"` (línea ~69)
- **Subtítulo:** El texto que empieza con `"Cada sesión está diseñada..."` (líneas 74-75)
- **Descripciones de servicios:** Estos están en `lib/constants.ts` (ver sección 3)

### Amenities (Amenidades)
**Archivo:** `components/Amenities.tsx`

**Qué puedes cambiar:**
- **Título:** Busca `"El espacio"` (línea ~58)
- **Subtítulo:** El texto que empieza con `"Un refugio rodeado..."` (líneas 60-61)
- **Título de amenidades:** Busca `"Amenidades incluidas"` (línea ~126)

### HowToBook (Cómo Reservar)
**Archivo:** `components/HowToBook.tsx`

**Qué puedes cambiar:**
- **Título:** Busca `"¿Cómo reservar en Espacio Ukum?"` (línea ~65)
- **Subtítulo:** El texto `"Un proceso sencillo de 3 pasos..."` (líneas 67-68)
- **Los 3 pasos:** En el array `steps` (líneas 10-24), puedes editar:
  - `title`: El título de cada paso
  - `description`: La descripción de cada paso
- **Texto del botón:** Busca `"Ver anuncio en Airbnb"` (línea ~118)

### FAQ (Preguntas Frecuentes)
**Archivo:** `components/FAQ.tsx`

**Qué puedes cambiar:**
- **Título:** Busca `"Preguntas frecuentes"` (línea ~82)
- **Subtítulo:** El texto `"Resolvemos las dudas..."` (línea ~85)
- **Preguntas y respuestas:** En el array `faqs` (líneas 11-68), cada item tiene:
  - `question`: La pregunta
  - `answer`: La respuesta
  
  Puedes agregar, quitar o modificar preguntas siguiendo el mismo formato.

### Contact (Contacto)
**Archivo:** `components/Contact.tsx`

**Qué puedes cambiar:**
- **Título:** Busca `"Escríbele a Anahí"` (línea ~42)
- **Subtítulo:** El texto que empieza con `"Cada persona es diferente..."` (líneas 43-44)
- **Textos de WhatsApp:** 
  - `"¿Prefieres WhatsApp?"` (línea ~257)
  - El texto descriptivo en líneas 258-259
  - `"Abrir WhatsApp"` (línea ~262)

---

## 3. Cambiar Datos Globales

**Archivo:** `lib/constants.ts`

Este archivo contiene información que se usa en múltiples partes del sitio. Cambiar aquí actualiza automáticamente todo el sitio.

### Contacto
```javascript
export const WHATSAPP_NUMBER = '+525514692613'  // Cambia el número aquí
export const EMAIL = 'anahiserrano.ukum@gmail.com'  // Cambia el email aquí
```

### Redes Sociales
```javascript
export const INSTAGRAM_URL = 'https://www.instagram.com/espacio_ukum/'  // URL de Instagram
export const AIRBNB_URL = 'https://www.airbnb.mx/rooms/...'  // URL del anuncio de Airbnb
```

### Ubicación
```javascript
export const LOCATION = 'Cuernavaca, Morelos, México'  // Ubicación del lugar
export const OWNER_NAME = 'Anahí Serrano Bandala'  // Nombre de la anfitriona
```

### Servicios
En el array `SERVICES`, puedes editar:
- `name`: Nombre del servicio
- `description`: Descripción completa del servicio
- `icon`: No tocar (son componentes de iconos)

### Reseñas
En el array `REVIEWS`, puedes editar:
- `name`: Nombre del huésped
- `rating`: Calificación (1-5)
- `text`: Texto de la reseña
- `country`: País o ciudad del huésped

Puedes agregar nuevas reseñas copiando el formato:
```javascript
{
  name: 'Nombre A.',
  rating: 5,
  text: 'Texto de la reseña...',
  country: 'Ciudad',
},
```

### Amenidades
En el array `AMENITIES`, cada amenidad tiene:
- `name`: Nombre de la amenidad
- `icon`: Emoji que la representa

### Habitaciones y Precios
```javascript
export const ROOMS = {
  quantity: 3,        // Número de habitaciones
  capacity: 8,        // Capacidad de personas
  bathrooms: 2,       // Número de baños
}

export const PRICES = {
  min: 3500,          // Precio mínimo por noche
  max: 6500,          // Precio máximo por noche
  currency: 'MXN',    // Moneda
}
```

---

## 4. Cambiar Imágenes

### Galería de Fotos
**Archivo:** `lib/constants.ts`

En el array `GALLERY_IMAGES`, puedes:
- **Agregar fotos:** Copia una entrada existente y cambia la URL
- **Quitar fotos:** Elimina la entrada completa (incluye las llaves `{ }`)
- **Cambiar fotos:** Modifica el valor de `url`

```javascript
export const GALLERY_IMAGES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/...',  // Cambia esta URL
    alt: 'Descripción de la foto'            // Cambia la descripción
  },
  // ... más fotos
]
```

**Recomendaciones:**
- Usa fotos de buena calidad (mínimo 1200px de ancho)
- Prefiere orientación horizontal o cuadrada
- Puedes usar servicios como Unsplash o subir tus propias fotos

### Usar tus propias fotos

1. **Guarda tu foto** en la carpeta `public/` con un nombre simple (sin espacios ni caracteres especiales)
   - Ejemplo: `alberca-vista.jpg`

2. **Usa la foto** en el código con `/nombre-de-archivo.jpg`:
   ```javascript
   url: '/alberca-vista.jpg'
   ```

### Cambiar foto del Hero
**Archivo:** `components/Hero.tsx`

Busca la línea que dice `backgroundImage: 'url("https://images.unsplash.com/...")'` (línea ~56)

Cambia la URL por tu propia imagen:
```javascript
backgroundImage: 'url("/mi-foto-hero.jpg")'
```

### Cambiar fotos de Instagram
**Archivo:** `components/InstagramFeed.tsx`

En el array `instagramPosts` (líneas 14-41), puedes cambiar las URLs de las fotos preview.

---

## 5. Cambiar Colores y Estilo General

**Archivo:** `tailwind.config.ts`

Los colores principales del sitio están definidos aquí. Busca la sección `colors:` (línea ~18):

```javascript
colors: {
  primary: '#8B7355',      // Color principal (marrón tierra)
  secondary: '#6B5B4F',    // Color secundario (marrón oscuro)
  accent: '#C9A66B',       // Color de acento (dorado)
  darkBg: '#2C2416',       // Fondo oscuro
  lightBg: '#FAF8F3',      // Fondo claro
}
```

**Cómo cambiar un color:**
1. Los colores usan formato hexadecimal (`#` seguido de 6 caracteres)
2. Puedes usar herramientas como [Google Color Picker](https://g.co/kgs/color-picker) para elegir colores
3. Copia el código hex y reemplázalo

**Importante:** Los cambios de color afectarán:
- Botones
- Textos destacados
- Bordes
- Fondos de secciones

Recomendación: Haz un cambio a la vez y revisa cómo se ve.

---

## 6. Ver los Cambios

### En tu computadora (desarrollo local)

1. **Asegúrate de tener el servidor corriendo:**
   - Abre la terminal en la carpeta del proyecto
   - Si no está corriendo, escribe: `npm run dev`
   - Deberías ver un mensaje como "Local: http://localhost:3000"

2. **Edita los archivos:**
   - Abre el archivo que quieres cambiar con tu editor de código
   - Haz los cambios en los textos entre comillas
   - Guarda el archivo (Ctrl+S o Cmd+S)

3. **Ve los cambios:**
   - Abre tu navegador en http://localhost:3000
   - La mayoría de cambios se verán automáticamente
   - Si no ves el cambio, recarga la página (F5 o Ctrl+R)

### En producción (sitio en vivo)

Si tu sitio está desplegado en Vercel o similar:

1. **Haz tus cambios** en los archivos localmente
2. **Guarda todo** (Ctrl+S en cada archivo editado)
3. **Sube los cambios** a GitHub:
   - Usa GitHub Desktop, o
   - Desde terminal: `git add .`, `git commit -m "Actualización de textos"`, `git push`
4. **Espera el despliegue:**
   - Vercel detectará los cambios automáticamente
   - En 1-3 minutos, los cambios estarán en vivo
   - Revisa tu sitio para confirmar

---

## Consejos Finales

✅ **Haz cambios pequeños:** Edita una cosa a la vez y prueba antes de continuar.

✅ **Guarda copias de respaldo:** Antes de hacer cambios grandes, copia el contenido original a un archivo de texto.

✅ **No toques el código:** Solo edita textos entre comillas. Si algo empieza con `const`, `function`, `className`, `import`, etc., no lo toques.

✅ **Usa comillas correctas:** Cuando edites texto, mantén las comillas simples `'` o dobles `"` que ya están ahí.

✅ **Prueba en local primero:** Siempre revisa los cambios en tu computadora antes de subirlos al sitio en vivo.

❌ **No elimines comas:** Entre elementos de listas, siempre hay una coma `,`. No las borres.

❌ **No cambies nombres de archivos:** Los componentes deben mantener sus nombres exactos.

---

## ¿Necesitas Ayuda?

Si algo no funciona o tienes dudas:
1. Revisa que no hayas borrado comillas, comas o llaves `{ }`
2. Verifica que guardaste el archivo después de editarlo
3. Intenta deshacer el cambio (Ctrl+Z) y vuelve a intentar
4. Si el sitio no carga, revisa la terminal/consola en busca de mensajes de error en rojo

**Contacto técnico:** Si necesitas ayuda adicional, contacta a la persona que configuró el sitio o consulta con un desarrollador.
