import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DistributorCard } from './DistributorCard';
import type { Distributor } from '@/data/distributors';

interface DistributorsListProps {
  distributors: Distributor[];
  searchQuery: string;
}

export function DistributorsList({ distributors, searchQuery }: DistributorsListProps) {
  const [visibleCount, setVisibleCount] = useState(10);

  const showMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  const scrollToMap = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (distributors.length === 0) {
    return (
      <div className="bg-muted/30 rounded-xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
          <MapPin className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium mb-2">
          {searchQuery 
            ? `В регионе "${searchQuery}" не найдено дистрибьюторов`
            : 'Дистрибьюторы не найдены'
          }
        </h3>
        <p className="text-muted-foreground mb-4">
          Выберите ближайший город или напишите нам — подскажем, где купить.
        </p>
        <Button asChild variant="outline">
          <Link to="/contacts/">Написать в техподдержку</Link>
        </Button>
      </div>
    );
  }

  const visibleDistributors = distributors.slice(0, visibleCount);
  const hasMore = distributors.length > visibleCount;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          Дистрибьюторы
          <span className="text-muted-foreground font-normal ml-2">
            ({distributors.length})
          </span>
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToMap}
          className="md:hidden"
        >
          <MapPin className="w-4 h-4 mr-1" />
          На карте
        </Button>
      </div>

      <div className="grid gap-4">
        {visibleDistributors.map((distributor) => (
          <DistributorCard key={distributor.id} distributor={distributor} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-6 text-center">
          <Button variant="outline" onClick={showMore}>
            Показать ещё ({distributors.length - visibleCount})
          </Button>
        </div>
      )}
    </div>
  );
}
