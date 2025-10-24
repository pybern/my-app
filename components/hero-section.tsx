"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const featuredArticles = [
  {
    title: "ADULT NAMAGAKI oysters take over with installations and exclusive...",
    image: "/oysters-restaurant-installation.jpg",
    category: "Food & Drink"
  },
  {
    title: "Hong Kong's most haunted locations that will probably send you...",
    image: "/haunted-spooky-hong-kong-building.jpg",
    category: "Culture"
  },
  {
    title: "18 hotels in Hong Kong and Macau have been awarded 2025 Michelin...",
    image: "/luxury-hotel-michelin-star.jpg",
    category: "Hotels"
  },
  {
    title: "The best things to do in Hong Kong this weekend (October 24-26)",
    image: "/hong-kong-weekend-activities-skyline.jpg",
    category: "Things to Do"
  },
  {
    title: "Best rooftop bars with stunning views of Victoria Harbour",
    image: "/rooftop-bar-victoria-harbour.jpg",
    category: "Nightlife"
  },
  {
    title: "Hidden gems: Secret speakeasies you need to discover",
    image: "/secret-speakeasy-bar.jpg",
    category: "Nightlife"
  },
  {
    title: "A complete guide to Hong Kong's best dim sum restaurants",
    image: "/dim-sum-traditional-restaurant.jpg",
    category: "Food & Drink"
  },
  {
    title: "Upcoming concerts and live music events not to miss",
    image: "/live-concert-music-venue.jpg",
    category: "Music"
  },
  {
    title: "Art exhibitions opening this month across the city",
    image: "/art-gallery-exhibition.jpg",
    category: "Art"
  },
  {
    title: "The best hiking trails for stunning city views",
    image: "/hiking-trail-mountain-view.jpg",
    category: "Outdoors"
  },
  {
    title: "New restaurant openings you should book right now",
    image: "/new-restaurant-opening.jpg",
    category: "Food & Drink"
  },
  {
    title: "Wellness retreats and spas for the ultimate relaxation",
    image: "/luxury-spa-wellness.jpg",
    category: "Wellness"
  }
]

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return
    
    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(autoplay)
  }, [emblaApi])

  return (
    <section className="bg-[#1a1a1a] py-8">
      <div className="container mx-auto px-4">
        <div className="relative group">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {featuredArticles.map((article, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]">
                  <Card className="group/card relative overflow-hidden bg-transparent border-0 cursor-pointer h-full">
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="object-cover w-full h-full group-hover/card:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white text-lg font-bold leading-tight">{article.title}</h3>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex 
                  ? "bg-primary w-8" 
                  : "bg-white/30 w-2 hover:bg-white/50"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
