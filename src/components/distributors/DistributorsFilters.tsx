import { useState } from 'react';
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
import { Switch } from '@/components/ui/switch';
import { federalDistricts } from '@/data/distributors';

interface FiltersState {
  federalDistrict: string;
  types: string[];
  pickupOnly: boolean;
}

interface DistributorsFiltersProps {
  filters: FiltersState;
  onFiltersChange: (filters: FiltersState) => void;
  resultCount: number;
}

const distributorTypes = [
  { value: 'wholesale', label: 'Опт / Дистрибьютор' },
  { value: 'retail', label: 'Розница' },
  { value: 'warehouse', label: 'Склад' }
];

export function DistributorsFilters({ filters, onFiltersChange, resultCount }: DistributorsFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDistrictChange = (value: string) => {
    onFiltersChange({ ...filters, federalDistrict: value === 'all' ? '' : value });
  };

  const handleTypeToggle = (type: string) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter(t => t !== type)
      : [...filters.types, type];
    onFiltersChange({ ...filters, types: newTypes });
  };

  const handlePickupChange = (checked: boolean) => {
    onFiltersChange({ ...filters, pickupOnly: checked });
  };

  const clearFilters = () => {
    onFiltersChange({ federalDistrict: '', types: [], pickupOnly: false });
  };

  const hasActiveFilters = filters.federalDistrict || filters.types.length > 0 || filters.pickupOnly;

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

      {/* Pickup Toggle */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Есть самовывоз</label>
        <Switch
          checked={filters.pickupOnly}
          onCheckedChange={handlePickupChange}
        />
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
                  {(filters.types.length || 0) + (filters.federalDistrict ? 1 : 0) + (filters.pickupOnly ? 1 : 0)}
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
