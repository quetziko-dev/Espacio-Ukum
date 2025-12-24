import Hero from '@/components/Hero'
import HowToBook from '@/components/HowToBook'
import Services from '@/components/Services'
import AboutAnahi from '@/components/AboutAnahi'
import Experiences from '@/components/Experiences'
import Amenities from '@/components/Amenities'
import Gallery from '@/components/Gallery'
import InstagramFeed from '@/components/InstagramFeed'
import Reviews from '@/components/Reviews'
import Map from '@/components/Map'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <HowToBook />
      <Services />
      <AboutAnahi />
      <Experiences />
      <Amenities />
      <Gallery />
      <InstagramFeed />
      <Reviews />
      <Map />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
