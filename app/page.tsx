import { Header } from "@/components/header"
import { CategoryNav } from "@/components/category-nav"
import { HeroSection } from "@/components/hero-section"
import { EventsFilter } from "@/components/events-filter"
import { NewsGrid } from "@/components/news-grid"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <CategoryNav />
      <HeroSection />
      <EventsFilter />
      <NewsGrid />
    </div>
  )
}
