import { Scissors, Clock, Star } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 p-6">
            <Scissors className="h-12 w-12 text-barber-gold mb-4" />
            <h3 className="font-heading text-xl mb-2">Classic Haircut</h3>
            <p className="text-muted">Tailored precision cuts to suit your individual style.</p>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <Clock className="h-12 w-12 text-barber-gold mb-4" />
            <h3 className="font-heading text-xl mb-2">Beard Trim & Shaping</h3>
            <p className="text-muted">Expert grooming to keep your beard looking sharp and clean.</p>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <Star className="h-12 w-12 text-barber-gold mb-4" />
            <h3 className="font-heading text-xl mb-2">Hot Towel Shave</h3>
            <p className="text-muted">A traditional, relaxing shave experience for the smoothest finish.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
