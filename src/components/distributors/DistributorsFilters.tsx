import { useState, useMemo } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { federalDistricts, distributors } from '@/data/distributors';

interface FiltersState {
  federalDistrict: string;
  region: string;
  types: string[];
}

interface DistributorsFiltersProps {
  filters: FiltersState;
  onFiltersChange: (filters: FiltersState) => void;
  resultCount: number;
}

const distributorTypes = [
  { value: 'wholesale', label: 'Оптовые продажи' },
  { value: 'retail', label: 'Розничные продажи' }
];

export function DistributorsFilters({ filters, onFiltersChange, resultCount }: DistributorsFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Get unique regions, filtered by selected federal district
  const availableRegions = useMemo(() => {
    const regions = distributors
      .filter(d => !filters.federalDistrict || d.federalDistrict === filters.federalDistrict)
      .map(d => d.region);
    return [...new Set(regions)].sort();
  }, [filters.federalDistrict]);

  const handleDistrictChange = (value: string) => {
    onFiltersChange({ 
      ...filters, 
      federalDistrict: value === 'all' ? '' : value,
      region: '' // Reset region when district changes
    });
  };

  const handleRegionChange = (value: string) => {
    onFiltersChange({ ...filters, region: value === 'all' ? '' : value });
  };

  const handleTypeToggle = (type: string) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter(t => t !== type)
      : [...filters.types, type];
    onFiltersChange({ ...filters, types: newTypes });
  };

  const clearFilters = () => {
    onFiltersChange({ federalDistrict: '', region: '', types: [] });
  };

  const hasActiveFilters = filters.federalDistrict || filters.region || filters.types.length > 0;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Federal District */}
      <div>
        <label className="block text-sm font-medium mb-2">Федеральный округ</label>
        <Select
          value={filters.federalDistrict || 'all'}
          onValueChange={handleDistrictChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Все округа" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все округа</SelectItem>
            {federalDistricts.map((district) => (
              <SelectItem key={district} value={district}>
                {district}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Region */}
      <div>
        <label className="block text-sm font-medium mb-2">Область</label>
        <Select
          value={filters.region || 'all'}
          onValueChange={handleRegionChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Все области" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все области</SelectItem>
            {availableRegions.map((region) => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Distributor Types */}
      <div>
        <label className="block text-sm font-medium mb-3">Тип точки</label>
        <div className="space-y-3">
          {distributorTypes.map((type) => (
            <label key={type.value} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={filters.types.includes(type.value)}
                onCheckedChange={() => handleTypeToggle(type.value)}
              />
              <span className="text-sm">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full"
        >
          <X className="w-4 h-4 mr-2" />
          Сбросить фильтры
        </Button>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden md:block">
        <div className="bg-background rounded-xl border border-border p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Фильтры
            </h3>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Сбросить
              </button>
            )}
          </div>
          <FilterContent />
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="w-4 h-4 mr-2" />
              Фильтры
              {hasActiveFilters && (
                <span className="ml-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {(filters.types.length || 0) + (filters.federalDistrict ? 1 : 0) + (filters.region ? 1 : 0)}
                </span>
              )}
              <ChevronDown className="w-4 h-4 ml-auto" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] rounded-t-2xl">
            <SheetHeader>
              <SheetTitle>Фильтры</SheetTitle>
            </SheetHeader>
            <div className="mt-6 pb-6">
              <FilterContent />
              <Button
                onClick={() => setIsOpen(false)}
                className="w-full mt-6"
              >
                Показать {resultCount} результатов
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
