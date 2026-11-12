import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl mb-8 text-center">Visit Us in Chouf</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg text-muted mb-4">We look forward to welcoming you to our shop. Stop by for your next grooming session.</p>
            <a href="#location" className="bg-barber-gold text-white font-bold py-3 px-6 hover:bg-opacity-90 transition-all inline-flex items-center">
              <MapPin className="mr-2" /> Open in Google Maps
            </a>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-200 h-64 w-full rounded-sm flex items-center justify-center">
              <p className="text-muted">Map will be embedded here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
