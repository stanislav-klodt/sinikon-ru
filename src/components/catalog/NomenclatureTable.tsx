import { useState } from "react";
import { Copy, FileText, Check, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface NomenclatureItem {
  id: string;
  name: string;
  type: string;
  dn: string;
  angle?: string;
  length?: string;
  article: string;
  packaging: number;
}

interface NomenclatureTableProps {
  items: NomenclatureItem[];
  lineName: string;
}

const typeOptions = [
  { value: "all", label: "Все типы" },
  { value: "pipe", label: "Трубы" },
  { value: "elbow", label: "Отводы" },
  { value: "tee", label: "Тройники" },
  { value: "cross", label: "Крестовины" },
  { value: "revision", label: "Ревизии" },
  { value: "reducer", label: "Переходы" },
  { value: "other", label: "Прочее" },
];

const dnOptions = [
  { value: "all", label: "Все DN" },
  { value: "50", label: "DN 50" },
  { value: "110", label: "DN 110" },
  { value: "160", label: "DN 160" },
];

export function NomenclatureTable({ items, lineName }: NomenclatureTableProps) {
  const [typeFilter, setTypeFilter] = useState("all");
  const [dnFilter, setDnFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredItems = items.filter((item) => {
    const matchesType = typeFilter === "all" || item.type === typeFilter;
    const matchesDn = dnFilter === "all" || item.dn === dnFilter;
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.article.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesDn && matchesSearch;
  });

  const copyArticle = async (article: string, id: string) => {
    await navigator.clipboard.writeText(article);
    setCopiedId(id);
    toast.success("Артикул скопирован");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const scrollToDocuments = () => {
    document.getElementById("documents")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="nomenclature" className="py-12 md:py-16 bg-muted/30">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Номенклатура
        </h2>

        {/* Desktop Filters */}
        <div className="hidden md:flex gap-4 mb-6">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-48 bg-background">
              <SelectValue placeholder="Тип элемента" />
            </SelectTrigger>
            <SelectContent>
              {typeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={dnFilter} onValueChange={setDnFilter}>
            <SelectTrigger className="w-40 bg-background">
              <SelectValue placeholder="Диаметр" />
            </SelectTrigger>
            <SelectContent>
              {dnOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="text"
            placeholder="Поиск по артикулу"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 bg-background"
          />
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <Button
            variant="outline"
            onClick={() => setShowMobileFilters(true)}
            className="w-full gap-2"
          >
            <Filter className="w-4 h-4" />
            Фильтры
          </Button>
        </div>

        {/* Mobile Filters Panel */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setShowMobileFilters(false)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-background border-t border-border rounded-t-2xl p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Фильтры</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowMobileFilters(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Тип элемента
                  </label>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {typeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Диаметр
                  </label>
                  <Select value={dnFilter} onValueChange={setDnFilter}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {dnOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Поиск по артикулу
                  </label>
                  <Input
                    type="text"
                    placeholder="Введите артикул"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <Button
                  className="w-full mt-4"
                  onClick={() => setShowMobileFilters(false)}
                >
                  Применить
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Table */}
        <div className="hidden md:block bg-background border border-border rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Наименование</TableHead>
                <TableHead>Параметры</TableHead>
                <TableHead>Артикул</TableHead>
                <TableHead className="text-center">Упаковка, шт</TableHead>
                <TableHead className="text-center">Документы</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-muted-foreground">
                    DN {item.dn}
                    {item.angle && ` / ${item.angle}°`}
                    {item.length && ` / ${item.length} мм`}
                  </TableCell>
                  <TableCell className="font-mono text-sm">{item.article}</TableCell>
                  <TableCell className="text-center">{item.packaging}</TableCell>
                  <TableCell>
                    <div className="flex justify-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={scrollToDocuments}
                        className="text-xs"
                      >
                        <FileText className="w-3 h-3 mr-1" />
                        Паспорт
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={scrollToDocuments}
                        className="text-xs"
                      >
                        <FileText className="w-3 h-3 mr-1" />
                        Сертификат
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyArticle(item.article, item.id)}
                      title="Скопировать артикул"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-background border border-border rounded-xl p-4"
            >
              <h3 className="font-medium text-foreground mb-2">{item.name}</h3>
              <div className="text-sm text-muted-foreground mb-3">
                DN {item.dn}
                {item.angle && ` / ${item.angle}°`}
                {item.length && ` / ${item.length} мм`}
              </div>

              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-xs text-muted-foreground">Артикул: </span>
                  <span className="font-mono text-sm">{item.article}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyArticle(item.article, item.id)}
                  className="h-8 px-2"
                >
                  {copiedId === item.id ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>

              <div className="text-sm mb-4">
                <span className="text-muted-foreground">Упаковка: </span>
                <span className="font-medium">{item.packaging} шт</span>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollToDocuments}
                  className="flex-1"
                >
                  Паспорт
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollToDocuments}
                  className="flex-1"
                >
                  Сертификат
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Ничего не найдено. Попробуйте изменить фильтры.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
