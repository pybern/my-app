import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Restaurant {
  id: number
  rank: number
  name: string
  cuisine: string
  rating: number
  priceRange: string
  location: string
  description: string
  reviewCount: number
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    rank: 1,
    name: "La Belle Époque",
    cuisine: "French Fine Dining",
    rating: 4.9,
    priceRange: "$$$$",
    location: "Downtown",
    description: "An exquisite French dining experience with seasonal ingredients and classic techniques.",
    reviewCount: 1247
  },
  {
    id: 2,
    rank: 2,
    name: "Sakura Sushi House",
    cuisine: "Japanese",
    rating: 4.8,
    priceRange: "$$$",
    location: "Midtown",
    description: "Authentic Japanese cuisine featuring fresh sushi and traditional dishes.",
    reviewCount: 982
  },
  {
    id: 3,
    rank: 3,
    name: "Mama's Trattoria",
    cuisine: "Italian",
    rating: 4.8,
    priceRange: "$$",
    location: "Little Italy",
    description: "Family-owned Italian restaurant serving homemade pasta and wood-fired pizza.",
    reviewCount: 1543
  },
  {
    id: 4,
    rank: 4,
    name: "Spice Route",
    cuisine: "Indian",
    rating: 4.7,
    priceRange: "$$",
    location: "East Side",
    description: "Vibrant Indian flavors with a modern twist on traditional recipes.",
    reviewCount: 876
  },
  {
    id: 5,
    rank: 5,
    name: "The Steakhouse",
    cuisine: "American Steakhouse",
    rating: 4.7,
    priceRange: "$$$$",
    location: "Financial District",
    description: "Premium cuts of beef, aged to perfection and grilled to order.",
    reviewCount: 1102
  },
  {
    id: 6,
    rank: 6,
    name: "Green Garden Bistro",
    cuisine: "Vegetarian/Vegan",
    rating: 4.6,
    priceRange: "$",
    location: "Arts Quarter",
    description: "Plant-based cuisine that's creative, colorful, and incredibly delicious.",
    reviewCount: 654
  },
  {
    id: 7,
    rank: 7,
    name: "Tacos El Rey",
    cuisine: "Mexican",
    rating: 4.6,
    priceRange: "$",
    location: "Mission District",
    description: "Street-style tacos with authentic flavors and house-made salsas.",
    reviewCount: 2103
  },
  {
    id: 8,
    rank: 8,
    name: "Dim Sum Palace",
    cuisine: "Chinese",
    rating: 4.5,
    priceRange: "$$",
    location: "Chinatown",
    description: "Traditional Cantonese dim sum served all day in a bustling atmosphere.",
    reviewCount: 789
  }
]

function getRankColor(rank: number) {
  if (rank === 1) return "bg-yellow-500 text-white"
  if (rank === 2) return "bg-gray-400 text-white"
  if (rank === 3) return "bg-orange-600 text-white"
  return "bg-muted text-muted-foreground"
}

function getRatingStars(rating: number) {
  return "★".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "☆" : "")
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Top Restaurants 2025
          </h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Discover the city's finest dining experiences, ranked by food critics and thousands of customer reviews.
          </p>
        </div>
      </div>

      {/* Filter/Sort Section */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-3">
            <Button variant="default" size="sm">All Cuisines</Button>
            <Button variant="outline" size="sm">Italian</Button>
            <Button variant="outline" size="sm">Japanese</Button>
            <Button variant="outline" size="sm">French</Button>
            <Button variant="outline" size="sm">Mexican</Button>
            <Button variant="outline" size="sm">Indian</Button>
          </div>
        </div>
      </div>

      {/* Rankings Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg ${getRankColor(restaurant.rank)}`}>
                        #{restaurant.rank}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{restaurant.name}</CardTitle>
                        <div className="text-sm text-muted-foreground mt-1">
                          {restaurant.cuisine}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  {restaurant.description}
                </CardDescription>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 text-lg">
                      {getRatingStars(restaurant.rating)}
                    </span>
                    <span className="font-semibold ml-1">{restaurant.rating}</span>
                  </div>
                  <div className="text-muted-foreground">
                    ({restaurant.reviewCount.toLocaleString()} reviews)
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-medium text-foreground">
                      {restaurant.priceRange}
                    </span>
                    <span className="text-muted-foreground">
                      📍 {restaurant.location}
                    </span>
                  </div>
                </div>

                <Button variant="default" className="w-full mt-2">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-muted py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Can't decide? Let us help!
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Answer a few questions and we'll recommend the perfect restaurant for your occasion.
          </p>
          <Button variant="default" size="lg">
            Take the Quiz
          </Button>
        </div>
      </div>
    </div>
  )
}