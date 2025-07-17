"use client"

import React, { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  FaMapMarkerAlt,
  FaTachometerAlt,
  FaCarAlt,
  FaGasPump,
  FaGlobe,
  FaPhoneAlt,
  FaWhatsapp,
  FaHeart,
  FaCamera,
  FaCheck,
} from "react-icons/fa"

const CarCard = React.memo(function CarCard({ car, priority = false }) {
  const {
    id,
    title,
    price,
    city_name,
    year,
    km_driven,
    fuel_type,
    thumb_picture,
    auto_company_logo,
    auto_company_name,
    show_whatsapp_access,
    whatsapp_number,
    make_title,
    model_title,
    description,
    emi_price,
  } = car

  const [showPhoneNumber, setShowPhoneNumber] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const plainDescription = useMemo(() => {
    if (!description) return ""
    return description.replace(/<[^>]+>/g, "").slice(0, 150) + "..."
  }, [description])

  const formattedTitle = title || `Used ${make_title} ${model_title} ${year}`

  return (
    <article className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="relative lg:w-80 w-full flex-shrink-0">
          <Link
            href={`/used-cars/${id}`}
            className="block relative group"
            aria-label={`View details for ${formattedTitle}`}
          >
            <div className={`relative bg-gray-100 ${!imageLoaded ? "animate-pulse" : ""}`}>
              <Image
                src={thumb_picture || "/placeholder.svg"}
                alt={`${formattedTitle} - Car image`}
                width={320}
                height={240}
                className="w-full h-60 lg:h-48 object-cover transition-transform duration-200 group-hover:scale-105"
                priority={priority}
                onLoad={() => setImageLoaded(true)}
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </div>

            {/* Badges */}
            <div className="absolute top-3 left-3">
              <span className="bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
                FEATURED
              </span>
            </div>

            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <span className="bg-black/75 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                <FaCamera className="w-3 h-3" />
                10
              </span>
            </div>

            <button
              className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-colors duration-200"
              aria-label="Add to favorites"
            >
              <FaHeart className="w-4 h-4 text-gray-600 hover:text-red-500" />
            </button>
          </Link>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 lg:p-6">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
            {/* Main Content */}
            <div className="flex-1 space-y-3">
              {/* Price Section */}
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-2xl font-bold text-gray-900">AED {price.toLocaleString()}</h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Great Deal
                </span>
              </div>

              {emi_price && (
                <p className="text-orange-600 text-sm font-medium">AED {emi_price.toLocaleString()} Per month</p>
              )}

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">{formattedTitle}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{plainDescription}</p>

              {/* Specifications */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
                <span className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
                  {city_name}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaTachometerAlt className="w-4 h-4 text-gray-400" />
                  {km_driven.toLocaleString()} km
                </span>
                <span className="flex items-center gap-1.5">
                  <FaCarAlt className="w-4 h-4 text-gray-400" />
                  {year}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaGasPump className="w-4 h-4 text-gray-400" />
                  {fuel_type}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaGlobe className="w-4 h-4 text-gray-400" />
                  GCC Specs
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                  Can be exported
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
                  Urgent
                </span>
              </div>
            </div>

            {/* Action Section */}
            <div className="flex lg:flex-col gap-3 lg:w-40 lg:items-center">
              <div className="flex flex-col gap-2 flex-1 lg:w-full">
                <button
                  onClick={() => setShowPhoneNumber(true)}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Show phone number"
                >
                  <FaPhoneAlt className="w-4 h-4" />
                  {showPhoneNumber && whatsapp_number ? whatsapp_number : "Show Number"}
                </button>

                {show_whatsapp_access && whatsapp_number && (
                  <Link
                    href={`https://wa.me/${whatsapp_number.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2.5 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    aria-label="Contact via WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    WhatsApp
                  </Link>
                )}
              </div>

              {/* Company Logo */}
              {auto_company_logo && (
                <div className="flex-shrink-0 lg:mt-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg p-2 border">
                    <Image
                      src={auto_company_logo || "/placeholder.svg"}
                      alt={`${auto_company_name} logo`}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 px-4 lg:px-6 py-3 bg-gray-50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <label className="relative flex items-center gap-2 text-sm text-gray-700 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="sr-only peer" aria-label="Compare this car" />
                <div className="w-5 h-5 bg-white border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2 transition-all duration-200 flex items-center justify-center group-hover:border-blue-400">
                  <FaCheck className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
                </div>
              </div>
              <span className="select-none group-hover:text-gray-900 transition-colors duration-200">Compare</span>
            </label>

             <div className="hidden group-has-[:checked]:flex items-center gap-1 text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              <span>2 selected</span>
            </div>
          </div>

          <Link
            href={`/sell-car?make=${make_title}&model=${model_title}&city=${city_name}`}
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
          >
            Do you have a similar {make_title} {model_title} to sell in {city_name}? Sell it yourself!
          </Link>
        </div>
      </div>
    </article>
  )
})

export default CarCard
