"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useMemo } from "react"
import { Calendar, MapPin, Clock } from "lucide-react"

const filters = ["Today", "This week", "This weekend", "This month"]

interface Event {
  id: number
  title: string
  date: Date
  time: string
  location: string
  category: string
  image: string
  price: string
  description: string
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Jazz Night at The Fringe Club",
    date: new Date(2025, 9, 24), // October 24, 2025
    time: "8:00 PM",
    location: "Central",
    category: "Music",
    image: "/jazz-night-live-music.jpg",
    price: "HK$200",
    description: "An intimate evening of jazz featuring local and international artists."
  },
  {
    id: 2,
    title: "Street Food Festival",
    date: new Date(2025, 9, 24), // October 24, 2025
    time: "12:00 PM",
    location: "West Kowloon",
    category: "Food & Drink",
    image: "/street-food-festival.jpg",
    price: "Free Entry",
    description: "Sample the best street food from around Asia in one location."
  },
  {
    id: 3,
    title: "Contemporary Art Exhibition Opening",
    date: new Date(2025, 9, 25), // October 25, 2025
    time: "6:00 PM",
    location: "H Queen's, Central",
    category: "Art",
    image: "/contemporary-art-exhibition.jpg",
    price: "Free",
    description: "Discover emerging artists in this curated exhibition of contemporary works."
  },
  {
    id: 4,
    title: "Dragon's Back Sunrise Hike",
    date: new Date(2025, 9, 26), // October 26, 2025
    time: "5:30 AM",
    location: "Shek O",
    category: "Outdoors",
    image: "/dragons-back-hiking-trail.jpg",
    price: "Free",
    description: "Join us for a breathtaking sunrise hike along Hong Kong's most scenic trail."
  },
  {
    id: 5,
    title: "Wine Tasting Workshop",
    date: new Date(2025, 9, 26), // October 26, 2025
    time: "7:00 PM",
    location: "Soho",
    category: "Food & Drink",
    image: "/wine-tasting-event.jpg",
    price: "HK$450",
    description: "Learn about fine wines from around the world with our expert sommelier."
  },
  {
    id: 6,
    title: "Stand-Up Comedy Night",
    date: new Date(2025, 9, 27), // October 27, 2025
    time: "9:00 PM",
    location: "TakeOut Comedy Club",
    category: "Comedy",
    image: "/standup-comedy-show.jpg",
    price: "HK$150",
    description: "Laugh the night away with Hong Kong's funniest comedians."
  },
  {
    id: 7,
    title: "Yoga in the Park",
    date: new Date(2025, 9, 27), // October 27, 2025
    time: "8:00 AM",
    location: "Victoria Park",
    category: "Wellness",
    image: "/yoga-park-wellness.jpg",
    price: "Free",
    description: "Start your Sunday with a peaceful outdoor yoga session."
  },
  {
    id: 8,
    title: "Craft Beer Festival",
    date: new Date(2025, 9, 28), // October 28, 2025
    time: "5:00 PM",
    location: "Central Harbourfront",
    category: "Food & Drink",
    image: "/craft-beer-festival.jpg",
    price: "HK$300",
    description: "Sample over 100 craft beers from local and international breweries."
  },
  {
    id: 9,
    title: "Live Music: Indie Rock Showcase",
    date: new Date(2025, 9, 29), // October 29, 2025
    time: "8:30 PM",
    location: "Hidden Agenda",
    category: "Music",
    image: "/indie-rock-concert.jpg",
    price: "HK$180",
    description: "Experience the best of Hong Kong's underground indie rock scene."
  },
  {
    id: 10,
    title: "Cooking Class: Dim Sum Masterclass",
    date: new Date(2025, 9, 30), // October 30, 2025
    time: "2:00 PM",
    location: "Sheung Wan",
    category: "Food & Drink",
    image: "/dim-sum-cooking-class.jpg",
    price: "HK$550",
    description: "Learn to make authentic Cantonese dim sum from a master chef."
  },
  {
    id: 11,
    title: "Film Screening: Hong Kong Cinema Classics",
    date: new Date(2025, 10, 1), // November 1, 2025
    time: "7:30 PM",
    location: "Broadway Cinematheque",
    category: "Film",
    image: "/cinema-film-screening.jpg",
    price: "HK$100",
    description: "Revisit classic Hong Kong films on the big screen."
  },
  {
    id: 12,
    title: "Night Market Experience",
    date: new Date(2025, 10, 2), // November 2, 2025
    time: "6:00 PM",
    location: "Temple Street",
    category: "Culture",
    image: "/temple-street-night-market.jpg",
    price: "Free Entry",
    description: "Explore the vibrant atmosphere of Hong Kong's famous night markets."
  }
]

function getFilteredEvents(filter: string, events: Event[]): Event[] {
  const today = new Date(2025, 9, 24) // October 24, 2025 (current simulated date)
  today.setHours(0, 0, 0, 0)

  switch (filter) {
    case "Today":
      return events.filter(event => {
        const eventDate = new Date(event.date)
        eventDate.setHours(0, 0, 0, 0)
        return eventDate.getTime() === today.getTime()
      })
    
    case "This week":
      const weekEnd = new Date(today)
      weekEnd.setDate(today.getDate() + 7)
      return events.filter(event => {
        const eventDate = new Date(event.date)
        return eventDate >= today && eventDate < weekEnd
      })
    
    case "This weekend":
      // Assuming weekend is Saturday (26th) and Sunday (27th)
      const saturday = new Date(2025, 9, 26)
      const sunday = new Date(2025, 9, 27)
      saturday.setHours(0, 0, 0, 0)
      sunday.setHours(23, 59, 59, 999)
      return events.filter(event => {
        const eventDate = new Date(event.date)
        return eventDate >= saturday && eventDate <= sunday
      })
    
    case "This month":
      const monthEnd = new Date(today)
      monthEnd.setMonth(today.getMonth() + 1)
      return events.filter(event => {
        const eventDate = new Date(event.date)
        return eventDate >= today && eventDate < monthEnd
      })
    
    default:
      return events
  }
}

export function EventsFilter() {
  const [activeFilter, setActiveFilter] = useState("Today")

  const filteredEvents = useMemo(() => {
    return getFilteredEvents(activeFilter, mockEvents)
  }, [activeFilter])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 text-balance">Find out what's happening in Hong Kong</h2>
        <div className="flex justify-center mb-4">
          <svg className="h-3" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 5 Q 10 0, 20 5 T 40 5 T 60 5 T 80 5 T 100 5 T 120 5 T 140 5 T 160 5 T 180 5 T 200 5"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-primary"
            />
          </svg>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`rounded-full px-8 py-6 text-base font-semibold ${
                activeFilter === filter
                  ? ""
                  : ""
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="mt-8">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <div className="bg-white text-foreground text-center p-2 rounded-lg shadow-md">
                        <div className="text-xs font-semibold">
                          {event.date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                        </div>
                        <div className="text-2xl font-bold">
                          {event.date.getDate()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <span className="font-semibold text-primary">{event.price}</span>
                      <Button size="sm" variant="outline">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No events found for {activeFilter.toLowerCase()}.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
