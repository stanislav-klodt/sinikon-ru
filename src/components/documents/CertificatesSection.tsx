import { useState, useMemo } from "react";
import { Document, documents, documentLines, documentTypes } from "@/data/documents";
import { DocumentCard } from "./DocumentCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Award } from "lucide-react";

interface CertificatesSectionProps {
  searchQuery: string;
}

export function CertificatesSection({ searchQuery }: CertificatesSectionProps) {
  const [lineFilter, setLineFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredDocs = useMemo(() => {
    return documents.filter((doc) => {
      if (doc.category !== "certificates") return false;
      
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = doc.title.toLowerCase().includes(query);
        const matchesTags = doc.tags.some(tag => tag.toLowerCase().includes(query));
        if (!matchesTitle && !matchesTags) return false;
      }

      if (lineFilter !== "all" && doc.line !== lineFilter) return false;
      if (typeFilter !== "all" && doc.type !== typeFilter) return false;

      return true;
    });
  }, [searchQuery, lineFilter, typeFilter]);

  const isoDocs = filteredDocs.filter(doc => doc.type === 'iso' || doc.id === 'made-in-russia');
  const declarationDocs = filteredDocs.filter(doc => doc.type === 'declaration' || (doc.type === 'certificate' && doc.id !== 'made-in-russia'));

  return (
    <section className="py-8 md:py-12">
      <div className="container-main">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Сертификаты и декларации
          </h2>
          <p className="text-muted-foreground">
            Документы соответствия по основным линейкам.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <Select value={lineFilter} onValueChange={setLineFilter}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Линейка" />
            </SelectTrigger>
            <SelectContent>
              {documentLines.map((line) => (
                <SelectItem key={line.value} value={line.value}>
                  {line.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Тип документа" />
            </SelectTrigger>
            <SelectContent>
              {documentTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Declarations */}
        {declarationDocs.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Декларации и сертификаты продукции
            </h3>
            <div className="space-y-3">
              {declarationDocs.map((doc) => (
                <DocumentCard key={doc.id} document={doc} />
              ))}
            </div>
          </div>
        )}

        {/* ISO / Quality Management */}
        {isoDocs.length > 0 && (
          <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Система менеджмента качества
              </h3>
            </div>
            <div className="space-y-3">
              {isoDocs.map((doc) => (
                <DocumentCard key={doc.id} document={doc} />
              ))}
            </div>
          </div>
        )}

        {filteredDocs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Документы не найдены. Попробуйте изменить параметры поиска.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
