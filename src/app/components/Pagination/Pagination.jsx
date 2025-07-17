import Link from "next/link"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function Pagination({ currentPage, totalPages }) {
  const getPageNumbers = () => {
    const pages = []
    const showPages = 5
    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2))
    const endPage = Math.min(totalPages, startPage + showPages - 1)

    if (endPage - startPage + 1 < showPages) {
      startPage = Math.max(1, endPage - showPages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  if (totalPages <= 1) return null

  return (
    <nav className="flex items-center justify-center space-x-2" aria-label="Pagination">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link
          href={`?page=${currentPage - 1}`}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
          aria-label="Go to previous page"
        >
          <FaChevronLeft className="w-4 h-4" />
          Previous
        </Link>
      ) : (
        <span className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-200 rounded-md cursor-not-allowed">
          <FaChevronLeft className="w-4 h-4" />
          Previous
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex space-x-1">
        {getPageNumbers().map((page) => (
          <Link
            key={page}
            href={`?page=${page}`}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
            }`}
            aria-label={`Go to page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </Link>
        ))}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={`?page=${currentPage + 1}`}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
          aria-label="Go to next page"
        >
          Next
          <FaChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <span className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-200 rounded-md cursor-not-allowed">
          Next
          <FaChevronRight className="w-4 h-4" />
        </span>
      )}
    </nav>
  )
}
