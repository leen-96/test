import { fetchCarById } from "@/lib/fetchUsedCars";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const car = await fetchCarById(params.id);
  if (!car) return {};

  const plainDescription = car.description
    .replace(/<[^>]+>/g, "")
    .slice(0, 150);

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
    <main className="mx-auto px-8 md:px-16 py-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-3/4">
          <article className="bg-white border p-4 ">
            <header className="mb-4">
              <h1 className="text-3xl font-bold">{car.title}</h1>
            </header>

            <Image
              src={car.slideshow_picture}
              alt={car.title}
              width={500}
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
          </article>
        </div>

        <div className="w-full lg:w-1/4 space-y-4">
          <div className="bg-white border p-4 rounded shadow-sm text-center">
            <span className="inline-block text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded mb-2 font-semibold">
             Good Deal
            </span>

            <p className="text-3xl font-bold text-gray-800">
              AED {car.price.toLocaleString()}
            </p>

            <p className="text-orange-500 font-medium text-sm">
              AED {Math.round(car.price / 60).toLocaleString()} Per month
            
            </p>
             <p className="text-gray-600">
                {car.year} - {car.make_title} {car.model_title} - 
                {car.city_name}  
              </p>
            
            <button className="mt-4 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 5h2l3.6 7.59-1.35 2.45A1 1 0 008 17h12a1 1 0 000-2H9l1.1-2h7.45a1 1 0 00.95-.68l3-9a1 1 0 00-.95-1.32H5.21l-.94-2H1a1 1 0 000 2h2l3.6 7.59L5.25 13.04 3 9H1a1 1 0 000 2h2.34l1.52 2.69A2 2 0 008 15h12a2 2 0 002-2v-1a1 1 0 10-2 0v1H8.42l.95-1.73L5.21 4H3z"></path>
              </svg>
              Show Number
            </button>

            {car.whatsapp_number && (
              <Link
                href={`https://wa.me/${car.whatsapp_number.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full block bg-green-500 hover:bg-green-600 text-white py-2 rounded text-center"
              >
                <svg
                  className="inline mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.38 0 0 5.38 0 12a11.94 11.94 0 001.66 6.12L0 24l6.1-1.64A11.94 11.94 0 0012 24c6.62 0 12-5.38 12-12a11.93 11.93 0 00-3.48-8.52zM12 22c-1.61 0-3.17-.38-4.58-1.1l-.32-.17-3.62.97.97-3.52-.21-.34A9.92 9.92 0 012 12c0-5.51 4.49-10 10-10s10 4.49 10 10-4.49 10-10 10zm5.16-7.34c-.28-.14-1.66-.82-1.91-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.89 1.1-.17.19-.33.21-.61.07-.28-.14-1.17-.43-2.24-1.37-.83-.74-1.39-1.65-1.56-1.92-.17-.28-.02-.43.13-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.48h-.55c-.19 0-.5.07-.76.36s-1 1-.99 2.43c.01 1.43 1.03 2.81 1.17 3 .14.19 2.01 3.07 4.87 4.3.68.3 1.21.48 1.63.61.68.21 1.3.18 1.79.11.55-.08 1.66-.68 1.89-1.34.23-.66.23-1.23.16-1.34-.07-.11-.26-.17-.55-.31z" />
                </svg>
                Whatsapp
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
