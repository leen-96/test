"use client"

import { useState } from "react"
import { FaSearch, FaChevronDown, FaFilter } from "react-icons/fa"

export default function CarFilters() {
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const [selectedMake, setSelectedMake] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [priceRange, setPriceRange] = useState("Price Range")
  const [yearRange, setYearRange] = useState("Year Range")
  const [mileageRange, setMileageRange] = useState("Mileage Range")
  const [bodyTypes, setBodyTypes] = useState("Body Types")
  const [showMoreFilters, setShowMoreFilters] = useState(false)

  const cities = ["All Cities", "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"]
  const makes = ["Toyota", "BMW", "Mercedes-Benz", "Audi", "Honda", "Nissan", "Hyundai", "Ford", "Chevrolet", "Lexus"]
  const models = ["Camry", "Corolla", "X6", "C-Class", "A4", "Civic", "Altima", "Elantra", "F-150", "Cruze"]
  const priceRanges = [
    "Price Range",
    "Under AED 25,000",
    "AED 25,000 - 50,000",
    "AED 50,000 - 100,000",
    "AED 100,000 - 200,000",
    "Above AED 200,000",
  ]
  const yearRanges = ["Year Range", "2024", "2023", "2022", "2021", "2020", "2019 and older"]
  const mileageRanges = [
    "Mileage Range",
    "Under 10,000 km",
    "10,000 - 50,000 km",
    "50,000 - 100,000 km",
    "100,000 - 150,000 km",
    "Above 150,000 km",
  ]
  const bodyTypeOptions = ["Body Types", "Sedan", "SUV", "Hatchback", "Coupe", "Convertible", "Pickup", "Van", "Wagon"]

  const handleSearch = () => {
    console.log("Search with filters:", {
      city: selectedCity,
      make: selectedMake,
      model: selectedModel,
      priceRange,
      yearRange,
      mileageRange,
      bodyTypes,
    })
  }

  const clearAllFilters = () => {
    setSelectedCity("All Cities")
    setSelectedMake("")
    setSelectedModel("")
    setPriceRange("Price Range")
    setYearRange("Year Range")
    setMileageRange("Mileage Range")
    setBodyTypes("Body Types")
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
      {/* Main Search Row */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        {/* City Dropdown */}
        <div className="relative lg:w-48">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>

        {/* Make Search */}
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Select car make/brand"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            list="makes"
          />
          <datalist id="makes">
            {makes.map((make) => (
              <option key={make} value={make} />
            ))}
          </datalist>
        </div>

        {/* Model Search */}
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Select Model"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            list="models"
          />
          <datalist id="models">
            {models.map((model) => (
              <option key={model} value={model} />
            ))}
          </datalist>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:w-auto w-full"
        >
          Search
        </button>
      </div>

      {/* Additional Filters Row */}
      <div className="flex flex-wrap gap-4 items-center">
        {/* Price Range */}
        <div className="relative">
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer pr-8"
          >
            {priceRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
        </div>

        {/* Year Range */}
        <div className="relative">
          <select
            value={yearRange}
            onChange={(e) => setYearRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer pr-8"
          >
            {yearRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
        </div>

        {/* Mileage Range */}
        <div className="relative">
          <select
            value={mileageRange}
            onChange={(e) => setMileageRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer pr-8"
          >
            {mileageRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
        </div>

        {/* Body Types */}
        <div className="relative">
          <select
            value={bodyTypes}
            onChange={(e) => setBodyTypes(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer pr-8"
          >
            {bodyTypeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
        </div>

        {/* More Filters Button */}
        <button
          onClick={() => setShowMoreFilters(!showMoreFilters)}
          className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-200 rounded-md hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <FaFilter className="w-4 h-4" />
          More Filters
        </button>

        {/* Clear All */}
        <button
          onClick={clearAllFilters}
          className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium"
        >
          Clear All
        </button>
      </div>

      {/* More Filters Panel */}
      {showMoreFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Fuel Types</option>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Hybrid</option>
                <option>Electric</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Transmissions</option>
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Conditions</option>
                <option>Excellent</option>
                <option>Very Good</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Seller Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Sellers</option>
                <option>Dealer</option>
                <option>Individual</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Colors</option>
                <option>White</option>
                <option>Black</option>
                <option>Silver</option>
                <option>Blue</option>
                <option>Red</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Warranty</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Warranty Types</option>
                <option>Under Warranty</option>
                <option>No Warranty</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={() => setShowMoreFilters(false)}
              className="px-6 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleSearch()
                setShowMoreFilters(false)
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
