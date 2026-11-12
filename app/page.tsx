import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';

export const metadata = {
  title: 'Salon Fadi Asmar | Professional Barber in Chouf',
  description: 'Experience precision grooming and traditional barber services at Salon Fadi Asmar in Chouf. Your local destination for a sharp haircut and professional beard care.',
  keywords: 'Barber in Chouf, Salon Fadi Asmar, Men\'s grooming Chouf, Haircut and beard trim Chouf, Skin fade Chouf'
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Location />
    </>
  );
}
