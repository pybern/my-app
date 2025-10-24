"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Star, ThumbsUp, MessageSquare } from "lucide-react"

interface Review {
  id: number
  author: string
  rating: number
  date: string
  title: string
  content: string
  category: string
  placeName: string
  location: string
  helpful: number
  avatar: string
}

const mockReviews: Review[] = [
  {
    id: 1,
    author: "Sarah Chen",
    rating: 5,
    date: "2 days ago",
    title: "Absolutely incredible dining experience!",
    content: "La Belle Époque exceeded all expectations. The service was impeccable, the ambiance romantic, and every dish was a masterpiece. The duck confit was perfectly cooked and the wine pairing suggestions were spot on. Will definitely return for special occasions.",
    category: "Restaurant",
    placeName: "La Belle Époque",
    location: "Central",
    helpful: 24,
    avatar: "SC"
  },
  {
    id: 2,
    author: "James Wong",
    rating: 4,
    date: "5 days ago",
    title: "Great vibes and fantastic cocktails",
    content: "The rooftop bar has stunning views of Victoria Harbour. Cocktails are creative and well-crafted, though a bit pricey. The sunset view is worth it alone. Can get crowded on weekends, so book ahead!",
    category: "Bar",
    placeName: "Sky Lounge",
    location: "Tsim Sha Tsui",
    helpful: 18,
    avatar: "JW"
  },
  {
    id: 3,
    author: "Emily Park",
    rating: 5,
    date: "1 week ago",
    title: "Best dim sum in Hong Kong!",
    content: "Authentic Cantonese dim sum at its finest. The har gow (shrimp dumplings) were perfectly translucent and the char siu bao melted in your mouth. Service is quick and efficient. Get there early to avoid the queues!",
    category: "Restaurant",
    placeName: "Dim Sum Palace",
    location: "Mong Kok",
    helpful: 42,
    avatar: "EP"
  },
  {
    id: 4,
    author: "David Lee",
    rating: 4,
    date: "1 week ago",
    title: "Memorable jazz performance",
    content: "The Fringe Club never disappoints. Intimate venue with excellent acoustics. The jazz trio last Friday was phenomenal. Drinks are reasonably priced and the crowd is always appreciative of good music.",
    category: "Event",
    placeName: "The Fringe Club",
    location: "Central",
    helpful: 15,
    avatar: "DL"
  },
  {
    id: 5,
    author: "Michelle Tan",
    rating: 5,
    date: "2 weeks ago",
    title: "Hidden gem for coffee lovers",
    content: "This specialty coffee shop is tucked away in Sheung Wan and serves some of the best pour-over coffee in the city. The baristas are knowledgeable and passionate. Perfect spot for remote work with great wifi and comfortable seating.",
    category: "Cafe",
    placeName: "Brew & Co.",
    location: "Sheung Wan",
    helpful: 31,
    avatar: "MT"
  },
  {
    id: 6,
    author: "Alex Kumar",
    rating: 3,
    date: "2 weeks ago",
    title: "Decent but overpriced",
    content: "The food was good but nothing extraordinary considering the price point. Service was a bit slow despite the restaurant not being full. The location and ambiance are nice, but I expected more for the money.",
    category: "Restaurant",
    placeName: "The Steakhouse",
    location: "Central",
    helpful: 9,
    avatar: "AK"
  },
  {
    id: 7,
    author: "Lisa Cheung",
    rating: 5,
    date: "3 weeks ago",
    title: "Perfect spot for a date night",
    content: "The speakeasy atmosphere is romantic and mysterious. Cocktails are expertly crafted and the bartenders really know their stuff. Loved the truffle pasta appetizer. Definitely making this our regular spot!",
    category: "Bar",
    placeName: "Hidden Door",
    location: "Soho",
    helpful: 27,
    avatar: "LC"
  },
  {
    id: 8,
    author: "Ryan Ng",
    rating: 4,
    date: "3 weeks ago",
    title: "Great workout and friendly community",
    content: "The yoga classes here are challenging but accessible for all levels. Instructors are experienced and attentive. The studio is clean and well-equipped. Only downside is it can get quite crowded during peak hours.",
    category: "Wellness",
    placeName: "Zen Yoga Studio",
    location: "Wan Chai",
    helpful: 12,
    avatar: "RN"
  }
]

const categories = ["All", "Restaurant", "Bar", "Cafe", "Event", "Wellness"]

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const sizeClass = size === "lg" ? "h-6 w-6" : "h-4 w-4"
  
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClass} ${
            star <= rating
              ? "fill-yellow-500 text-yellow-500"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  )
}

export default function ReviewPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showWriteReview, setShowWriteReview] = useState(false)

  const filteredReviews = selectedCategory === "All" 
    ? mockReviews 
    : mockReviews.filter(review => review.category === selectedCategory)

  const averageRating = (
    mockReviews.reduce((sum, review) => sum + review.rating, 0) / mockReviews.length
  ).toFixed(1)

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Reviews & Ratings
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mb-6">
            Real reviews from real people. Share your experiences and help others discover the best of Hong Kong.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            onClick={() => setShowWriteReview(!showWriteReview)}
          >
            {showWriteReview ? "Cancel" : "Write a Review"}
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">{mockReviews.length}</div>
              <div className="text-muted-foreground">Total Reviews</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">{averageRating}</span>
                <StarRating rating={Math.round(parseFloat(averageRating))} size="lg" />
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {mockReviews.reduce((sum, review) => sum + review.helpful, 0)}
              </div>
              <div className="text-muted-foreground">Helpful Votes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Write Review Form */}
      {showWriteReview && (
        <div className="border-b bg-muted/30">
          <div className="container mx-auto px-4 py-8">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Write Your Review</CardTitle>
                <CardDescription>Share your experience with the community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Place Name</label>
                  <input
                    type="text"
                    placeholder="e.g., La Belle Époque"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Restaurant</option>
                    <option>Bar</option>
                    <option>Cafe</option>
                    <option>Event</option>
                    <option>Wellness</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Your Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} className="hover:scale-110 transition-transform">
                        <Star className="h-8 w-8 fill-gray-200 text-gray-200 hover:fill-yellow-500 hover:text-yellow-500" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Review Title</label>
                  <input
                    type="text"
                    placeholder="Sum up your experience"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Your Review</label>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your experience..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <Button variant="default" size="lg" className="flex-1">
                    Submit Review
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setShowWriteReview(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Reviews List */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {review.avatar}
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-semibold text-lg">{review.author}</div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{review.date}</span>
                          <span>•</span>
                          <span className="text-primary font-medium">{review.category}</span>
                        </div>
                      </div>
                      <StarRating rating={review.rating} />
                    </div>

                    {/* Place Info */}
                    <div className="mb-3">
                      <div className="font-bold text-foreground">{review.placeName}</div>
                      <div className="text-sm text-muted-foreground">📍 {review.location}</div>
                    </div>

                    {/* Review Title & Content */}
                    <h3 className="font-bold text-xl mb-2">{review.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {review.content}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ThumbsUp className="h-4 w-4" />
                        Helpful ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Comment
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Reviews
          </Button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Have you tried something amazing?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Your review can help others discover great experiences. Share your thoughts today!
          </p>
          <Button 
            variant="default" 
            size="lg"
            onClick={() => setShowWriteReview(true)}
          >
            Write Your First Review
          </Button>
        </div>
      </div>
    </div>
  )
}

