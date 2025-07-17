import { fetchUsedCars } from "@/lib/fetchUsedCars"
import CarCard from "@/app/components/CarCard/CarCard"
import Pagination from "@/app/components/Pagination/Pagination"
import { notFound } from "next/navigation"
import { Suspense } from "react"

export const metadata = {
  title: "Used Cars for Sale in UAE | Find Your Perfect Car",
  description:
    "Browse a wide selection of quality used cars in the UAE. Find your next car by brand, price, city, and more. Verified listings with great deals.",
  openGraph: {
    title: "Used Cars for Sale in UAE",
    description: "Explore a curated list of used cars available across the UAE. Great deals and verified listings.",
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
    description: "Browse affordable used cars in Dubai, Abu Dhabi, Sharjah and more.",
  },
}

export const revalidate = 60

const CARS_PER_PAGE = 4

// Loading component for better UX
function CarListingSkeleton() {
  return (
    <div className="space-y-6">
      {Array.from({ length: CARS_PER_PAGE }).map((_, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-pulse">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-80 w-full h-60 lg:h-48 bg-gray-200"></div>
            <div className="flex-1 p-6 space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
              <div className="h-6 bg-gray-200 rounded w-2/3"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="flex gap-4">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default async function UsedCarsPage({ searchParams }) {
  const page = Number.parseInt(searchParams?.page || "1")
  const cars = await fetchUsedCars()
  const totalPages = Math.ceil(cars.length / CARS_PER_PAGE)

  if (page < 1 || page > totalPages) notFound()

  const paginatedCars = cars.slice((page - 1) * CARS_PER_PAGE, page * CARS_PER_PAGE)

  return (
    <main className="min-h-screen bg-gray-50 ">
      <div className="mx-auto  mx-auto px-8 md:px-16 lg:px-16 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Used cars for sale in UAE</h1>
            <p className="text-gray-600 mt-1">
              Showing {(page - 1) * CARS_PER_PAGE + 1}-{Math.min(page * CARS_PER_PAGE, cars.length)} of{" "}
              {cars.length.toLocaleString()} cars
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Create Alert
          </button>
        </div>

        <div className="flex flex-col xl:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Suspense fallback={<CarListingSkeleton />}>
              <div className="space-y-6">
                {paginatedCars.map((car, index) => (
                  <CarCard key={car.id} car={car} priority={index < 2} />
                ))}
              </div>
            </Suspense>

            {/* Pagination */}
            <div className="mt-8">
              <Pagination currentPage={page} totalPages={totalPages} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="xl:w-80 space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Sponsored</h2>
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Advertisement</span>
                </div>
                <p className="text-sm text-gray-600">
                  Find the best car deals and financing options. Get pre-approved today!
                </p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Filters</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200">
                  Cars under AED 50,000
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200">
                  Low Mileage Cars
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200">
                  Recently Added
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
