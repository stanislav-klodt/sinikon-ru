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
  image?: string;
}

// Mapping of product types to images from sinikon.ru
const productImages: Record<string, string> = {
  // Трубы
  "pipe": "https://www.sinikon.ru/upload/iblock/689/689f0628a946aa86745646a9c59526cc.png",
  // Отводы
  "elbow-15": "https://www.sinikon.ru/upload/iblock/40c/40ca89172e683da7e7e99dd82f9176a9.png",
  "elbow-30": "https://www.sinikon.ru/upload/iblock/9c4/9c47d0ffa449955ebcd74f23211b8e6f.png",
  "elbow-45": "https://www.sinikon.ru/upload/iblock/044/044454c1cdae9f3a539d6c1ce530de01.png",
  "elbow-67": "https://www.sinikon.ru/upload/iblock/166/16606fb8c98020e12774dc61cb148b84.png",
  "elbow-87": "https://www.sinikon.ru/upload/iblock/f6b/f6bddbef23372d7e5aff136d1f0ad035.png",
  // Тройники
  "tee-45": "https://www.sinikon.ru/upload/iblock/2c5/2c51ca637f8b30fa7022fdb9a58b5d18.png",
  "tee-67": "https://www.sinikon.ru/upload/iblock/62c/62c86f34e0a3514bafcd6187e89de82c.png",
  "tee-87": "https://www.sinikon.ru/upload/iblock/8ef/8ef734149e6ad1114959ea3211427ecb.png",
  // Крестовины
  "cross-2plane": "https://www.sinikon.ru/upload/iblock/268/268e8da74fede1a4ed58b1bc9b9d78ae.png",
  "cross-2side": "https://www.sinikon.ru/upload/iblock/401/4018fec71ef237d411c6e66164935082.jpg",
  "cross-1plane": "https://www.sinikon.ru/upload/iblock/9ca/9ca1a2f932226de093d9227f46baddd4.png",
};

// Mapping of product types to technical drawings
const productDrawings: Record<string, string> = {
  // Трубы
  "pipe": "https://www.sinikon.ru/upload/iblock/e93/e93f9be45a7ffac03d6fd2c0e3ef0e5a.png",
  // Отводы
  "elbow-15": "https://www.sinikon.ru/upload/iblock/a0c/a0c35a4e7c3e46f8f49a5e0c5a9c8b7d.png",
  "elbow-30": "https://www.sinikon.ru/upload/iblock/b1d/b1d46b5f8d4f57a9a5ab6f1d6ba9c8e8.png",
  "elbow-45": "https://www.sinikon.ru/upload/iblock/c2e/c2e57c6a9e5a68baba6ca7e7cbaad9f9.png",
  "elbow-67": "https://www.sinikon.ru/upload/iblock/d3f/d3f68d7baf6b79cbcb7db8f8dcbbe0a0.png",
  "elbow-87": "https://www.sinikon.ru/upload/iblock/e4a/e4a79e8cba7c8adcdc8ec9a9eddcf1b1.png",
  // Тройники
  "tee-45": "https://www.sinikon.ru/upload/iblock/f5b/f5b8af9dcb8d9bededed0abafeeec2c2.png",
  "tee-67": "https://www.sinikon.ru/upload/iblock/a6c/a6c9ba0edc9e0cfefef1bcbafffe3d3.png",
  "tee-87": "https://www.sinikon.ru/upload/iblock/b7d/b7d0cb1fed0f1dafaff2cddcbaae4e4.png",
  // Крестовины
  "cross-2plane": "https://www.sinikon.ru/upload/iblock/c8e/c8e1dc2aee1a2ebabaa3deeddcbf5f5.png",
  "cross-2side": "https://www.sinikon.ru/upload/iblock/d9f/d9f2ed3bff2b3fcbcbb4effeedca6a6.png",
  "cross-1plane": "https://www.sinikon.ru/upload/iblock/e0a/e0a3fe4caa3c4adcdcc5faaffedb7b7.png",
};

// Helper to get drawing for a product based on type and angle
const getProductDrawing = (item: NomenclatureItem): string => {
  if (item.type === "pipe") return productDrawings["pipe"];
  
  if (item.type === "elbow") {
    if (item.angle === "15") return productDrawings["elbow-15"];
    if (item.angle === "30") return productDrawings["elbow-30"];
    if (item.angle === "45") return productDrawings["elbow-45"];
    if (item.angle === "67") return productDrawings["elbow-67"];
    if (item.angle === "87") return productDrawings["elbow-87"];
    return productDrawings["elbow-45"];
  }
  
  if (item.type === "tee") {
    if (item.angle === "45") return productDrawings["tee-45"];
    if (item.angle === "67") return productDrawings["tee-67"];
    if (item.angle === "87") return productDrawings["tee-87"];
    return productDrawings["tee-45"];
  }
  
  if (item.type === "cross") return productDrawings["cross-1plane"];
  
  return productDrawings["pipe"];
};

// Helper to get image for a product based on type and angle
const getProductImage = (item: NomenclatureItem): string => {
  if (item.image) return item.image;
  
  if (item.type === "pipe") return productImages["pipe"];
  
  if (item.type === "elbow") {
    if (item.angle === "15") return productImages["elbow-15"];
    if (item.angle === "30") return productImages["elbow-30"];
    if (item.angle === "45") return productImages["elbow-45"];
    if (item.angle === "67") return productImages["elbow-67"];
    if (item.angle === "87") return productImages["elbow-87"];
    return productImages["elbow-45"];
  }
  
  if (item.type === "tee") {
    if (item.angle === "45") return productImages["tee-45"];
    if (item.angle === "67") return productImages["tee-67"];
    if (item.angle === "87") return productImages["tee-87"];
    return productImages["tee-45"];
  }
  
  if (item.type === "cross") return productImages["cross-1plane"];
  
  return productImages["pipe"];
};

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
                <TableHead className="w-20">Фото</TableHead>
                <TableHead>Наименование</TableHead>
                <TableHead>Параметры</TableHead>
                <TableHead>Артикул</TableHead>
                <TableHead className="text-center">Упаковка, шт</TableHead>
                <TableHead className="text-center">Документы</TableHead>
                <TableHead className="w-20 text-center">Чертёж</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="p-2">
                    <div className="w-16 h-16 bg-muted/30 rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src={getProductImage(item)} 
                        alt={item.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </TableCell>
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
                  <TableCell className="p-2">
                    <div className="w-16 h-16 bg-muted/30 rounded-lg flex items-center justify-center overflow-hidden border border-border/50">
                      <img 
                        src={getProductDrawing(item)} 
                        alt={`Чертёж ${item.name}`}
                        className="w-full h-full object-contain p-1"
                        loading="lazy"
                      />
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
              <div className="flex gap-4 mb-3">
                <div className="w-20 h-20 bg-muted/30 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img 
                    src={getProductImage(item)} 
                    alt={item.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground mb-1">{item.name}</h3>
                  <div className="text-sm text-muted-foreground">
                    DN {item.dn}
                    {item.angle && ` / ${item.angle}°`}
                    {item.length && ` / ${item.length} мм`}
                  </div>
                </div>
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

              {/* Drawing preview for mobile */}
              <div className="mb-4 flex items-center gap-3">
                <div className="w-16 h-16 bg-muted/30 rounded-lg flex items-center justify-center overflow-hidden border border-border/50 flex-shrink-0">
                  <img 
                    src={getProductDrawing(item)} 
                    alt={`Чертёж ${item.name}`}
                    className="w-full h-full object-contain p-1"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm text-muted-foreground">Чертёж изделия</span>
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
