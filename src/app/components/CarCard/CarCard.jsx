import Link from 'next/link';
import Image from 'next/image';

export default function CarCard({ car }) {
  return (
    <Link href={`/used-cars/${car.id}`}>
      <article className="flex flex-col h-full border p-4 rounded-lg hover:shadow-lg transition bg-white">
        <Image
          src={car.thumb_picture}
          alt={car.title}
          width={400}
          height={300}
          className="rounded w-full h-40 md:h-48 object-cover"
       loading="lazy"
        />
        <div className="flex-grow mt-2">
          <h2 className="text-lg font-bold">{car.title}</h2>
          <p className="text-sm text-gray-500">{car.city_name}</p>
        </div>
        <div className="mt-2">
          <p className="text-primary font-semibold">AED {car.price}</p>
          <p className="text-xs">{car.year} • {car.make_name} {car.model_name}</p>
        </div>
      </article>
    </Link>
  );
}
