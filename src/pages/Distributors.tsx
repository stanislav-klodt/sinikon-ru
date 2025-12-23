import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DistributorsHero } from '@/components/distributors/DistributorsHero';
import { DistributorsMap } from '@/components/distributors/DistributorsMap';
import { DistributorsFilters } from '@/components/distributors/DistributorsFilters';
import { DistributorsList } from '@/components/distributors/DistributorsList';
import { HowToBuy } from '@/components/distributors/HowToBuy';
import { DistributorsFAQ } from '@/components/distributors/DistributorsFAQ';
import { DistributorsCTA } from '@/components/distributors/DistributorsCTA';
import { ScrollToTop } from '@/components/distributors/ScrollToTop';
import { distributors as allDistributors } from '@/data/distributors';

interface FiltersState {
  federalDistrict: string;
  region: string;
  types: string[];
}

export default function Distributors() {
  const [searchQuery, setSearchQuery] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [filters, setFilters] = useState<FiltersState>({
    federalDistrict: '',
    region: '',
    types: []
  });

  const filteredDistributors = useMemo(() => {
    return allDistributors.filter(d => {
      // Search filter
      if (appliedSearch) {
        const query = appliedSearch.toLowerCase();
        const matchesSearch = 
          d.city.toLowerCase().includes(query) ||
          d.region.toLowerCase().includes(query) ||
          d.companyName.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Federal district filter
      if (filters.federalDistrict && d.federalDistrict !== filters.federalDistrict) {
        return false;
      }

      // Region filter
      if (filters.region && d.region !== filters.region) {
        return false;
      }

      // Type filter
      if (filters.types.length > 0 && !filters.types.includes(d.type)) {
        return false;
      }

      return true;
    });
  }, [appliedSearch, filters]);

  const handleSearch = () => {
    setAppliedSearch(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setAppliedSearch('');
  };

  const handleMarkerClick = (id: string) => {
    const element = document.getElementById(`distributor-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <DistributorsHero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSearch={handleSearch}
          onClearSearch={handleClearSearch}
        />

        <DistributorsMap
          distributors={filteredDistributors}
          onMarkerClick={handleMarkerClick}
        />

        <section className="py-8 md:py-12">
          <div className="container-main">
            <div className="grid md:grid-cols-[280px_1fr] gap-6 lg:gap-8">
              <aside>
                <DistributorsFilters
                  filters={filters}
                  onFiltersChange={setFilters}
                  resultCount={filteredDistributors.length}
                />
              </aside>
              <div>
                <DistributorsList
                  distributors={filteredDistributors}
                  searchQuery={appliedSearch}
                />
              </div>
            </div>
          </div>
        </section>

        <HowToBuy />
        <DistributorsCTA />
        <DistributorsFAQ />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
