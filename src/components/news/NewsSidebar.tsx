import { Link } from "react-router-dom";
import { FileText, MapPin, Calendar } from "lucide-react";
import { newsYears } from "@/data/news";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface NewsSidebarProps {
  activeYear: string;
  onYearChange: (year: string) => void;
}

const popularTopics = [
  'Канализация',
  'Водосток',
  'Сертификаты',
  'BIM',
  'Монтаж',
];

export function NewsSidebar({ activeYear, onYearChange }: NewsSidebarProps) {
  return (
    <aside className="space-y-6">
      {/* Year filter */}
      <div className="bg-background rounded-2xl border border-border p-5">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Архив по годам
        </h3>
        <Select value={activeYear} onValueChange={onYearChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Выберите год" />
          </SelectTrigger>
          <SelectContent>
            {newsYears.map((year) => (
              <SelectItem key={year.value} value={year.value}>
                {year.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Popular topics */}
      <div className="bg-background rounded-2xl border border-border p-5">
        <h3 className="font-semibold text-foreground mb-4">
          Популярные темы
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTopics.map((topic) => (
            <span
              key={topic}
              className="px-3 py-1.5 text-sm bg-muted rounded-full text-muted-foreground"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* CTA blocks */}
      <Link
        to="/documents/"
        className="flex items-start gap-4 p-5 bg-primary/5 rounded-2xl border border-primary/20 hover:bg-primary/10 transition-colors"
      >
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <FileText className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-1">
            Нужны документы?
          </h4>
          <p className="text-sm text-muted-foreground">
            Сертификаты, декларации и каталоги
          </p>
        </div>
      </Link>

      <Link
        to="/distributors/"
        className="flex items-start gap-4 p-5 bg-muted/50 rounded-2xl border border-border hover:border-primary/30 transition-colors"
      >
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
          <MapPin className="w-5 h-5 text-muted-foreground" />
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-1">
            Где купить продукцию
          </h4>
          <p className="text-sm text-muted-foreground">
            Найти дистрибьютора в вашем регионе
          </p>
        </div>
      </Link>
    </aside>
  );
}
