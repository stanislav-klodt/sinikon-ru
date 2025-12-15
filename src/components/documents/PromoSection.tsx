import { useState, useMemo } from "react";
import { documents, promoTypes } from "@/data/documents";
import { DocumentCard } from "./DocumentCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen } from "lucide-react";

interface PromoSectionProps {
  searchQuery: string;
}

export function PromoSection({ searchQuery }: PromoSectionProps) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredDocs = useMemo(() => {
    return documents.filter((doc) => {
      if (doc.category !== "promo") return false;
      
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = doc.title.toLowerCase().includes(query);
        const matchesTags = doc.tags.some(tag => tag.toLowerCase().includes(query));
        if (!matchesTitle && !matchesTags) return false;
      }

      if (activeTab !== "all" && doc.type !== activeTab) return false;

      return true;
    });
  }, [searchQuery, activeTab]);

  const manualDocs = filteredDocs.filter(doc => doc.type === 'manual');
  const otherDocs = filteredDocs.filter(doc => doc.type !== 'manual');

  return (
    <section className="py-8 md:py-12">
      <div className="container-main">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Промо-материалы
          </h2>
          <p className="text-muted-foreground">
            Каталоги, брошюры и листовки — для презентаций и работы партнёров.
          </p>
        </div>

        {/* Featured: Manual for projectors */}
        {manualDocs.length > 0 && (
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Пособия для проектировщиков
              </h3>
            </div>
            <div className="space-y-3">
              {manualDocs.map((doc) => (
                <DocumentCard key={doc.id} document={doc} />
              ))}
            </div>
          </div>
        )}

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="brochure">Брошюры</TabsTrigger>
            <TabsTrigger value="leaflet">Листовки</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            {otherDocs.length > 0 ? (
              <div className="space-y-3">
                {otherDocs.map((doc) => (
                  <DocumentCard key={doc.id} document={doc} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Документы не найдены. Попробуйте изменить параметры поиска.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
