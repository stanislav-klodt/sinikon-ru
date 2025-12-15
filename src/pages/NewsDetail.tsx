import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, FileText, MapPin, Package } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/news/NewsCard";
import {
  getNewsItem,
  getRelatedNews,
  formatDate,
  getCategoryLabel,
  getCategoryColor,
  calculateReadTime,
  NewsContentBlock,
} from "@/data/news";

function ContentBlock({ block }: { block: NewsContentBlock }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4">
          {block.heading}
        </h2>
      );
    case 'text':
      return (
        <p className="text-muted-foreground leading-relaxed mb-4">
          {block.content}
        </p>
      );
    case 'list':
      return (
        <ul className="space-y-2 mb-6">
          {block.items?.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>();
  const news = slug ? getNewsItem(slug) : undefined;

  if (!news) {
    return <Navigate to="/news/" replace />;
  }

  const relatedNews = getRelatedNews(news.id, 3);
  const readTime = calculateReadTime(news.content);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Breadcrumbs */}
        <div className="pt-24 md:pt-28 bg-muted/30">
          <div className="container-main">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground transition-colors">
                Главная
              </Link>
              <span>/</span>
              <Link to="/news/" className="hover:text-foreground transition-colors">
                Новости
              </Link>
              <span>/</span>
              <span className="text-foreground line-clamp-1">{news.title}</span>
            </nav>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {formatDate(news.dateISO)}
              </span>
              <Badge className={getCategoryColor(news.category)} variant="secondary">
                {getCategoryLabel(news.category)}
              </Badge>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {readTime} мин чтения
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 max-w-4xl">
              {news.title}
            </h1>

            {/* Lead */}
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              {news.excerpt}
            </p>
          </div>
        </div>

        {/* Content */}
        <article className="py-8 md:py-12">
          <div className="container-main">
            <div className="max-w-3xl">
              {/* Cover image placeholder */}
              <div className="aspect-video bg-muted rounded-2xl mb-8 flex items-center justify-center">
                <span className="text-muted-foreground">Изображение</span>
              </div>

              {/* Content blocks */}
              {news.content?.map((block, index) => (
                <ContentBlock key={index} block={block} />
              ))}

              {/* CTA cards */}
              <div className="grid sm:grid-cols-2 gap-4 my-8">
                <Link
                  to="/documents/"
                  className="flex items-start gap-4 p-5 bg-primary/5 rounded-xl border border-primary/20 hover:bg-primary/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Документы и материалы
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Сертификаты, каталоги и инструкции
                    </p>
                  </div>
                </Link>

                <Link
                  to="/catalog/"
                  className="flex items-start gap-4 p-5 bg-muted/50 rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Каталог продукции
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Все линейки и артикулы
                    </p>
                  </div>
                </Link>
              </div>

              {/* How to buy */}
              <div className="bg-muted/30 rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Как купить
                </h3>
                <p className="text-muted-foreground mb-4">
                  Поставки осуществляются через сеть дистрибьюторов. Для подбора ближайшего партнёра используйте раздел «Где купить».
                </p>
                <Button asChild>
                  <Link to="/distributors/">
                    <MapPin className="w-4 h-4 mr-2" />
                    Найти дистрибьютора
                  </Link>
                </Button>
              </div>

              {/* Back link */}
              <div className="mt-8 pt-8 border-t border-border">
                <Link
                  to="/news/"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Назад к новостям
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related materials */}
        <section className="py-8 md:py-12 bg-muted/30 border-t border-border">
          <div className="container-main">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Связанные материалы
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                to="/documents/"
                className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <FileText className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium text-foreground">Документы</span>
              </Link>
              <Link
                to="/projectors/"
                className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <Package className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium text-foreground">Проектировщикам</span>
              </Link>
              <Link
                to="/catalog/"
                className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <Package className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium text-foreground">Каталог продукции</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related news */}
        {relatedNews.length > 0 && (
          <section className="py-8 md:py-12">
            <div className="container-main">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                Похожие новости
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedNews.map((item) => (
                  <NewsCard key={item.id} news={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
