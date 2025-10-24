"use client"

import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

const categories = [
  "News",
  "Things to Do",
  "Food & Drink",
  "Culture",
  "Travel",
  "Shopping & Style",
  "Video",
  "Wellness",
  "Restaurants",
  "Bars",
  "Music",
]

export function CategoryNav() {
  const [selectedCity, setSelectedCity] = useState("Hong Kong")

  return (
    <nav className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 overflow-x-auto py-3">
          <button className="flex items-center gap-1 text-sm font-medium whitespace-nowrap hover:opacity-80 transition-opacity">
            {selectedCity}
            <ChevronDown className="h-4 w-4" />
          </button>

          {categories.map((category, index) => (
            <button
              key={category}
              className="text-sm font-medium whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {category}
            </button>
          ))}

          <button className="ml-auto">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}
