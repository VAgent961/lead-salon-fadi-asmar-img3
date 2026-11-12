export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl mb-8 text-center">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <img
              src="/images/photo-1.jpg"
              alt="Collection of professional haircuts and grooming results at Salon Fadi Asmar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/stock-1.jpg"
              alt="Barber shop atmosphere at Salon Fadi Asmar"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/stock-2.jpg"
              alt="Barber shop atmosphere at Salon Fadi Asmar"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/stock-3.jpg"
              alt="Barber shop atmosphere at Salon Fadi Asmar"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/stock-4.jpg"
              alt="Barber shop atmosphere at Salon Fadi Asmar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
