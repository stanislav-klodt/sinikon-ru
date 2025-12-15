import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DocumentsHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function DocumentsHero({ searchQuery, onSearchChange }: DocumentsHeroProps) {
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
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск по названию документа (ISO, Standart, паспорт...)"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12 h-12 text-base bg-background"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
