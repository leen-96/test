import { fetchCarById } from '@/lib/fetchUsedCars';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Head from 'next/head';

 
export async function generateMetadata({ params }) {
  const car = await fetchCarById(params.id);
  if (!car) return {};

  const plainDescription = car.description.replace(/<[^>]+>/g, '').slice(0, 150);

  return {
    title: car.title,
    description: plainDescription,
    openGraph: {
      title: car.title,
      description: plainDescription,
      images: [car.slideshow_picture],
    },
    alternates: {
      canonical: `https://example.com/used-cars/${car.id}`,
    },
  };
}

 
export default async function CarDetailPage({ params }) {
  const car = await fetchCarById(params.id);
  if (!car) return notFound();

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <article>
        <header className="mb-4">
          <h1 className="text-3xl font-bold">{car.title}</h1>
          <p className="text-gray-600">
            {car.year} · {car.make_title} {car.model_title} · {car.city_name} · AED {car.price}
          </p>
        </header>

      
        <Image
          src={car.slideshow_picture}
          alt={car.title}
          width={800}
          height={500}
          className="rounded"
          priority
          layout="responsive"
        />

     
        <div className="grid grid-cols-4 gap-2 mt-4">
          {car.pictures?.slice(0, 8).map((pic, i) => (
            <Image
              key={i}
              src={pic}
              alt={`${car.title} - ${i}`}
              width={200}
              height={120}
              className="rounded"
              layout="responsive"
            />
          ))}
        </div>

     
        <section
          className="prose mt-6"
          dangerouslySetInnerHTML={{ __html: car.description }}
        />

        {/* WhatsApp Button */}
        {car.whatsapp_number && (
          <a
            href={`https://wa.me/${car.whatsapp_number.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Contact via WhatsApp
          </a>
        )}
      </article>
    </main>
  );
}