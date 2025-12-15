import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { NewsItem, formatDate, getCategoryLabel, getCategoryColor } from "@/data/news";

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="group bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-colors">
      {news.coverImage && (
        <div className="aspect-video bg-muted overflow-hidden">
          <img
            src={news.coverImage}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm text-muted-foreground">
            {formatDate(news.dateISO)}
          </span>
          <Badge className={getCategoryColor(news.category)} variant="secondary">
            {getCategoryLabel(news.category)}
          </Badge>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          <Link to={`/news/${news.slug}/`}>
            {news.title}
          </Link>
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {news.excerpt}
        </p>
        
        <Link
          to={`/news/${news.slug}/`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Читать
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </article>
  );
}
