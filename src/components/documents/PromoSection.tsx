import { useMemo } from "react";
import { documents } from "@/data/documents";
import { DocumentCard } from "./DocumentCard";
import { BookOpen } from "lucide-react";

interface PromoSectionProps {
  searchQuery: string;
}

export function PromoSection({ searchQuery }: PromoSectionProps) {
  const filteredDocs = useMemo(() => {
    return documents.filter((doc) => {
      if (doc.category !== "promo") return false;
      
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = doc.title.toLowerCase().includes(query);
        const matchesTags = doc.tags.some(tag => tag.toLowerCase().includes(query));
        if (!matchesTitle && !matchesTags) return false;
      }

      return true;
    });
  }, [searchQuery]);

  const manualDocs = filteredDocs.filter(doc => doc.type === 'manual');
  const brochureDocs = filteredDocs.filter(doc => doc.type === 'brochure');
  const leafletDocs = filteredDocs.filter(doc => doc.type === 'leaflet');

  if (filteredDocs.length === 0) return null;

  return (
    <section id="promo" className="py-8 md:py-12 scroll-mt-24">
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

        {/* Brochures */}
        {brochureDocs.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Брошюры и каталоги
            </h3>
            <div className="space-y-3">
              {brochureDocs.map((doc) => (
                <DocumentCard key={doc.id} document={doc} />
              ))}
            </div>
          </div>
        )}

        {/* Leaflets */}
        {leafletDocs.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Листовки
            </h3>
            <div className="space-y-3">
              {leafletDocs.map((doc) => (
                <DocumentCard key={doc.id} document={doc} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
