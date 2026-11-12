export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-barber-charcoal">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4">Precision Grooming in the Heart of Chouf</h1>
        <p className="text-xl md:text-2xl text-white mb-8">Expert haircuts and traditional barber services tailored to your style.</p>
        <a href="#location" className="bg-barber-gold text-white font-bold py-3 px-6 hover:bg-opacity-90 transition-all">Visit us in Chouf</a>
      </div>
      <img
        src="/images/photo-1.jpg"
        alt="Professional barber performing a haircut at Salon Fadi Asmar"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
}
