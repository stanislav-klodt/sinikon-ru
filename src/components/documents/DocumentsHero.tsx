import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

interface DocumentsHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onQuickFilter: (category: string) => void;
}

const quickFilters = [
  { label: "Сертификаты", category: "certificates" },
  { label: "Гарантия", category: "warranty" },
  { label: "Промо-материалы", category: "promo" },
];

export function DocumentsHero({ searchQuery, onSearchChange, onQuickFilter }: DocumentsHeroProps) {
  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-muted/30">
      <div className="container-main">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Документы
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Сертификаты, гарантия и материалы по линейкам продукции SINIKON.
          </p>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск по названию документа (ISO, Standart, паспорт...)"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12 h-12 text-base bg-background"
            />
          </div>

          {/* Quick filters */}
          <div className="flex flex-wrap gap-2">
            {quickFilters.map((filter) => (
              <button
                key={filter.category}
                onClick={() => onQuickFilter(filter.category)}
                className="px-4 py-2 text-sm font-medium bg-background border border-border rounded-full hover:bg-muted transition-colors"
              >
                {filter.label}
              </button>
            ))}
            <Link
              to="/projectors/"
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Для проектировщиков
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
