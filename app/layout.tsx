import type { Metadata } from "next";
import { Roboto, Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

// Fuente editorial para texto del cuerpo
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Fuente primaria para títulos
const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Fuente secundaria para énfasis
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Espacio Uk'um - Retiro de Descanso y Conexión en Cuernavaca",
  description: "Descubre Espacio Uk'um, tu retiro de bienestar en Cuernavaca. Sound healing, yoga, meditación y terapias holísticas con Anahí Serrano Bandala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${roboto.variable} ${libreBaskerville.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-screen bg-lightBg text-darkBg">
          {children}
        </main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
