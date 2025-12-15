import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const categories = [
  { id: "all", name: "Все линейки" },
  { id: "internal", name: "Внутренняя канализация" },
  { id: "silent", name: "Малошумная канализация" },
  { id: "rainflow", name: "Внутренние водостоки" },
  { id: "external", name: "Наружная канализация" },
  { id: "npvh", name: "Наружная канализация НПВХ" },
  { id: "traps", name: "Трапы" },
  { id: "tools", name: "Инструменты и монтаж" },
  { id: "heating", name: "Отопление и водоснабжение" },
];

interface CategoryChipsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryChips({ activeCategory, onCategoryChange }: CategoryChipsProps) {
  return (
    <section className="py-6 border-b border-border bg-background sticky top-16 md:top-20 z-40">
      <div className="container-main">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-2 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                  activeCategory === category.id
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
