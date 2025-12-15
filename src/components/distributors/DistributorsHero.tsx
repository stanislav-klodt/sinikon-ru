import { useState } from 'react';
import { Search, X, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { popularCities } from '@/data/distributors';

interface DistributorsHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearch: () => void;
  onClearSearch: () => void;
}

export function DistributorsHero({
  searchQuery,
  onSearchChange,
  onSearch,
  onClearSearch
}: DistributorsHeroProps) {
  const [detectedCity] = useState<string | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/30">
      <div className="container-main">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Где купить продукцию SINIKON
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Поставки осуществляются через сеть дистрибьюторов по регионам.
          </p>

          {/* Search Panel */}
          <div className="bg-background rounded-xl border border-border p-4 md:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Например: Москва, Екатеринбург, Новосибирск"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="pl-10 h-12 text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <Button onClick={onSearch} size="lg" className="h-12 px-8">
                Найти
              </Button>
              {searchQuery && (
                <Button
                  variant="outline"
                  onClick={onClearSearch}
                  size="lg"
                  className="h-12"
                >
                  Показать все
                </Button>
              )}
            </div>

            {/* Detected City */}
            {detectedCity && (
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Ваш регион: <strong className="text-foreground">{detectedCity}</strong></span>
                <button className="text-primary hover:underline">Изменить</button>
              </div>
            )}

            {/* Popular Cities */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Популярные:</span>
              {popularCities.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    onSearchChange(city);
                    onSearch();
                  }}
                  className="text-sm px-3 py-1 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
