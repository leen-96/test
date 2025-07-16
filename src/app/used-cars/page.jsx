import { fetchUsedCars } from "@/lib/fetchUsedCars";
import CarCard from "@/app/components/CarCard/CarCard";
export const metadata = {
  title: "Used Cars for Sale in UAE",
  description:
    "Browse a wide selection of quality used cars in the UAE. Find your next car by brand, price, city, and more.",
  openGraph: {
    title: "Used Cars for Sale in UAE",
    description:
      "Explore a curated list of used cars available across the UAE. Great deals and verified listings.",
    url: "http://localhost:3000/used-cars",
    siteName: "Used Cars UAE",
    images: [
      {
        url: "http://localhost:3000/og-used-cars.jpg",
        width: 1200,
        height: 630,
        alt: "Used Cars UAE",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "http://localhost:3000/used-cars",
  },
  twitter: {
    card: "summary_large_image",
    title: "Used Cars UAE",
    description:
      "Browse affordable used cars in Dubai, Abu Dhabi, Sharjah and more.",
  },
};
export default async function UsedCarsPage() {
  const cars = await fetchUsedCars();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Used Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </main>
  );
}
