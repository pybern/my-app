import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const newsArticles = [
  {
    category: "Music",
    categoryColor: "text-green-600",
    title: "OneRepublic is coming back to Hong Kong in February 2026",
    description: "After gracing the city with their electric presence back in 2023, pop-rock legends...",
    image: "/onerepublic-band-concert-performance.jpg",
  },
  {
    category: "Art",
    categoryColor: "text-red-600",
    title: "Asia's 3 most valuable art pieces this year were all sold in Hong Kong",
    description: "Auction houses globally are experiencing a slowdown in 2025 – declining high-end art...",
    image: "/art-auction-christies-hong-kong.jpg",
  },
  {
    category: "Things to do",
    categoryColor: "text-red-600",
    title: "Pet-friendly outdoor festival Fest is coming to Hong Kong",
    description: 'Pets are in for a treat this November with Fest, billed as Hong Kong\'s "first-ever"...',
    image: "/outdoor-festival-pets-dogs-park-colorful.jpg",
  },
]

export function NewsGrid() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">The latest Hong Kong news</h2>
            <div className="flex">
              <svg className="h-3" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 5 Q 10 0, 20 5 T 40 5 T 60 5 T 80 5 T 100 5 T 120 5 T 140 5 T 160 5 T 180 5 T 200 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-green-600"
                />
              </svg>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full bg-transparent">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-transparent">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article, index) => (
            <Card key={index} className="group cursor-pointer border-0 shadow-none overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <p className={`text-sm font-bold mb-2 ${article.categoryColor}`}>{article.category}</p>
                <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{article.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
