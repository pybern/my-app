import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <div className="text-4xl font-bold tracking-tight">
              <span className="inline-block border-4 border-primary-foreground px-3 py-1 rounded-md">Time Out</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-sm font-medium hover:opacity-80 transition-opacity">EXPLORE CITIES</button>
            <button className="text-sm font-medium hover:opacity-80 transition-opacity">TIME OUT MARKETS</button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Subscribe
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
