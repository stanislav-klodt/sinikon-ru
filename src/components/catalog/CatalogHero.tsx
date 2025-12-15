import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CatalogHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function CatalogHero({ searchQuery, onSearchChange }: CatalogHeroProps) {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/30">
      <div className="container-main">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Продукция SINIKON
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Линейки систем канализации и инженерных решений. Быстрый поиск по артикулу и документации.
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск по артикулу или названию"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-12 h-12 text-base bg-background"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Например: 110х50 отвод / крестовина / DN110
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild>
              <a href="/documents/">Скачать материалы</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#buy">Где купить</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
