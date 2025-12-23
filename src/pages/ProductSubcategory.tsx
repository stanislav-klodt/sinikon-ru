import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LineDocuments } from "@/components/catalog/LineDocuments";
import { ChevronRight, Copy, Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { productSubcategoriesData } from "@/data/productSubcategories";
import { useState } from "react";
import { toast } from "sonner";

// Documents data (duplicated from ProductLine for now - will be refactored later)
const lineDocuments: Record<string, { certificates: any[]; passports: any[]; instructions: any[] }> = {
  "sinikon-standart": {
    certificates: [
      { name: "Сертификат соответствия ГОСТ 32414-2013", type: "PDF" },
      { name: "Декларация о соответствии ТР ЕАЭС", type: "PDF" },
      { name: "Пожарный сертификат", type: "PDF" },
    ],
    passports: [
      { name: "Технический паспорт SINIKON Standart", type: "PDF" },
      { name: "Паспорт качества", type: "PDF" },
    ],
    instructions: [
      { name: "Инструкция по монтажу", type: "PDF" },
      { name: "Каталог продукции Standart", type: "PDF" },
    ],
  },
};

export default function ProductSubcategory() {
  const { slug, subcategory } = useParams<{ slug: string; subcategory: string }>();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const lineData = slug ? productSubcategoriesData[slug] : null;
  const subcategoryData = lineData?.subcategories.find((s) => s.slug === subcategory);
  const docs = slug ? lineDocuments[slug] : null;

  const copyArticle = async (article: string, id: string) => {
    try {
      await navigator.clipboard.writeText(article);
      setCopiedId(id);
      toast.success("Артикул скопирован");
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      toast.error("Не удалось скопировать");
    }
  };

  const scrollToDocuments = () => {
    const docsSection = document.getElementById("line-documents");
    if (docsSection) {
      docsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!lineData || !subcategoryData) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Подкатегория не найдена</h1>
            <Link to="/catalog/" className="text-primary hover:underline">
              Вернуться в каталог
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Breadcrumbs */}
        <section className="pt-6 pb-4">
          <div className="container-main">
            <nav className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
              <Link to="/" className="hover:text-foreground transition-colors">
                Главная
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/catalog/" className="hover:text-foreground transition-colors">
                Каталог
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link to={`/catalog/${slug}/`} className="hover:text-foreground transition-colors">
                {lineData.lineName}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{subcategoryData.name}</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-8 md:py-12">
          <div className="container-main">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {subcategoryData.name}
            </h1>
            {subcategoryData.description && (
              <p className="text-lg text-muted-foreground max-w-3xl">
                {subcategoryData.description}
              </p>
            )}
          </div>
        </section>

        {/* Product Image and Drawing */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container-main">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Product Image */}
              <div className="bg-card border border-border rounded-xl p-4 md:p-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                  Внешний вид
                </h3>
                <div className="aspect-[4/3] bg-muted/50 rounded-lg flex items-center justify-center">
                  <img
                    src={subcategoryData.image}
                    alt={subcategoryData.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              </div>

              {/* Technical Drawing */}
              <div className="bg-card border border-border rounded-xl p-4 md:p-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                  Чертёж
                </h3>
                <div className="aspect-[4/3] bg-muted/50 rounded-lg flex items-center justify-center">
                  <img
                    src={subcategoryData.drawing}
                    alt={`Чертёж ${subcategoryData.name}`}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Table */}
        <section className="py-12 md:py-16">
          <div className="container-main">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Номенклатура
            </h2>

            {/* Desktop Table */}
            <div className="hidden md:block bg-card border border-border rounded-2xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    {subcategoryData.columns.map((col) => (
                      <TableHead key={col.key} className="font-semibold">
                        {col.label}
                      </TableHead>
                    ))}
                    <TableHead className="text-center">Документы</TableHead>
                    <TableHead className="w-24"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subcategoryData.items.map((item) => (
                    <TableRow key={item.id} className="hover:bg-muted/30">
                      {subcategoryData.columns.map((col) => (
                        <TableCell key={col.key}>
                          {item[col.key as keyof typeof item]}
                        </TableCell>
                      ))}
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
                          size="sm"
                          onClick={() => copyArticle(item.article, item.id)}
                          className="gap-2"
                        >
                          {copiedId === item.id ? (
                            <>
                              <Check className="w-4 h-4 text-green-500" />
                              <span className="text-green-500">Скопировано</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Копировать</span>
                            </>
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
              {subcategoryData.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-card border border-border rounded-xl p-4"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-lg font-semibold text-foreground">
                      Ø {item.diameter}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyArticle(item.article, item.id)}
                      className="gap-1"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Артикул</span>
                      <span className="font-medium">{item.article}</span>
                    </div>
                    {item.length && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Длина</span>
                        <span className="font-medium">{item.length} мм</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">В упаковке</span>
                      <span className="font-medium">{item.packaging} шт</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={scrollToDocuments}
                      className="flex-1"
                    >
                      <FileText className="w-3 h-3 mr-1" />
                      Паспорт
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={scrollToDocuments}
                      className="flex-1"
                    >
                      <FileText className="w-3 h-3 mr-1" />
                      Сертификат
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        {docs && (
          <LineDocuments
            lineName={lineData.lineName}
            certificates={docs.certificates}
            passports={docs.passports}
            instructions={docs.instructions}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
