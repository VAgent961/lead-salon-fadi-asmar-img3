export default function About() {
  return (
    <section id="about" className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl mb-8 text-center">Welcome to Salon Fadi Asmar</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg text-muted">We take pride in serving the Chouf community with dedication and skill. Whether you are looking for a classic cut, a modern fade, or a precise beard trim, we provide a welcoming atmosphere and professional care for every client.</p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-barber-gold h-64 w-full rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
