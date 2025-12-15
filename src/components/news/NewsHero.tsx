import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { newsCategories } from "@/data/news";

interface NewsHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function NewsHero({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}: NewsHeroProps) {
  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-muted/30">
      <div className="container-main">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Новости
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Обновления ассортимента, события и полезные материалы.
          </p>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск по новостям..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12 h-12 text-base bg-background"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {newsCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => onCategoryChange(category.value)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                  activeCategory === category.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border hover:bg-muted"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
