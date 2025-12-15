import { useMemo, useState } from "react";
import { NewsItem, newsItems } from "@/data/news";
import { NewsCard } from "./NewsCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NewsListProps {
  searchQuery: string;
  activeCategory: string;
  activeYear: string;
}

const ITEMS_PER_PAGE = 9;

export function NewsList({ searchQuery, activeCategory, activeYear }: NewsListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const filteredNews = useMemo(() => {
    return newsItems.filter((item) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !item.title.toLowerCase().includes(query) &&
          !item.excerpt.toLowerCase().includes(query)
        ) {
          return false;
        }
      }

      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      if (activeYear !== 'all') {
        const itemYear = new Date(item.dateISO).getFullYear().toString();
        if (itemYear !== activeYear) return false;
      }

      return true;
    });
  }, [searchQuery, activeCategory, activeYear]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  
  const displayedNews = useMemo(() => {
    if (showAll) return filteredNews;
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredNews.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredNews, currentPage, showAll]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  if (filteredNews.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-muted-foreground mb-4">
          Ничего не найдено
        </p>
        <Button
          variant="outline"
          onClick={() => window.location.reload()}
        >
          Сбросить фильтры
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {displayedNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

      {/* Desktop pagination */}
      {!showAll && totalPages > 1 && (
        <div className="hidden md:flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          ))}
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Mobile "show more" */}
      {!showAll && filteredNews.length > ITEMS_PER_PAGE && (
        <div className="md:hidden text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(true)}
            className="w-full"
          >
            Показать ещё ({filteredNews.length - displayedNews.length})
          </Button>
        </div>
      )}
    </div>
  );
}
