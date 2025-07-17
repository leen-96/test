import Link from "next/link"
import { FaChevronRight } from "react-icons/fa"

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-blue-600 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <FaChevronRight className="w-3 h-3 text-gray-400 mx-2" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-blue-800 transition-colors duration-200">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-600">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
