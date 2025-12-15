import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const productLines = [
  {
    name: "SINIKON Standart",
    slug: "sinikon-standart",
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
  {
    name: "SINIKON Comfort Plus",
    slug: "sinikon-comfort-plus",
    certificates: [{ name: "Сертификат соответствия Comfort Plus", type: "PDF" }],
    passports: [{ name: "Технический паспорт Comfort Plus", type: "PDF" }],
    instructions: [{ name: "Инструкция по монтажу Comfort Plus", type: "PDF" }],
  },
  {
    name: "Rain Flow",
    slug: "rain-flow",
    certificates: [{ name: "Сертификат Rain Flow", type: "PDF" }],
    passports: [{ name: "Технический паспорт Rain Flow", type: "PDF" }],
    instructions: [{ name: "Руководство по проектированию Rain Flow", type: "PDF" }],
  },
  {
    name: "SINIKON Universal",
    slug: "sinikon-universal",
    certificates: [{ name: "Сертификат Universal", type: "PDF" }],
    passports: [{ name: "Технический паспорт Universal", type: "PDF" }],
    instructions: [{ name: "Инструкция по монтажу Universal", type: "PDF" }],
  },
  {
    name: "SINIKON НПВХ",
    slug: "sinikon-npvh",
    certificates: [{ name: "Сертификат НПВХ", type: "PDF" }],
    passports: [{ name: "Технический паспорт НПВХ", type: "PDF" }],
    instructions: [{ name: "Инструкция по монтажу НПВХ", type: "PDF" }],
  },
  {
    name: "Трапы",
    slug: "trapy",
    certificates: [{ name: "Сертификат на трапы", type: "PDF" }],
    passports: [{ name: "Технический паспорт трапов", type: "PDF" }],
    instructions: [{ name: "Инструкция по монтажу трапов", type: "PDF" }],
  },
  {
    name: "Инструменты и монтаж",
    slug: "montazh",
    certificates: [],
    passports: [],
    instructions: [{ name: "Руководство по монтажу", type: "PDF" }],
  },
  {
    name: "Отопление и водоснабжение",
    slug: "otoplenie-vodosnabzhenie",
    certificates: [{ name: "Сертификат на системы отопления", type: "PDF" }],
    passports: [{ name: "Технический паспорт", type: "PDF" }],
    instructions: [{ name: "Инструкция по монтажу", type: "PDF" }],
  },
];

interface DocumentCardProps {
  name: string;
  type: string;
}

function DocumentCard({ name, type }: DocumentCardProps) {
  return (
    <div className="flex items-center justify-between gap-4 p-3 bg-muted/30 rounded-lg">
      <div className="flex items-center gap-3 min-w-0">
        <FileText className="w-5 h-5 text-primary flex-shrink-0" />
        <span className="text-sm text-foreground truncate">{name}</span>
      </div>
      <Button variant="ghost" size="sm" className="flex-shrink-0 gap-1.5">
        <Download className="w-4 h-4" />
        <span className="hidden sm:inline">{type}</span>
      </Button>
    </div>
  );
}

interface DocumentGroupProps {
  title: string;
  documents: { name: string; type: string }[];
}

function DocumentGroup({ title, documents }: DocumentGroupProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (documents.length === 0) return null;

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 text-left"
      >
        <span className="text-sm font-medium text-foreground">{title}</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-muted-foreground transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="pb-4 space-y-2 animate-fade-in">
          {documents.map((doc, index) => (
            <DocumentCard key={index} name={doc.name} type={doc.type} />
          ))}
        </div>
      )}
    </div>
  );
}

export function LineDocumentsSection() {
  const [activeLine, setActiveLine] = useState(productLines[0].slug);
  const [searchQuery, setSearchQuery] = useState("");

  const currentLine = productLines.find((l) => l.slug === activeLine) || productLines[0];

  const filteredLines = productLines.filter((line) =>
    line.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="documents" className="py-12 md:py-16 bg-muted/30">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Документы по линейкам
            </h2>
            <p className="text-muted-foreground">
              Сертификаты, технические паспорта, инструкции — сгруппировано по системам.
            </p>
          </div>
          <Button variant="outline" asChild className="gap-2 flex-shrink-0">
            <Link to="/documents/">
              Раздел Документы
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mb-4">
          <input
            type="text"
            placeholder="Поиск по названию линейки..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Tabs - Desktop */}
          <div className="hidden lg:block space-y-1">
            {productLines.map((line) => (
              <button
                key={line.slug}
                onClick={() => setActiveLine(line.slug)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  activeLine === line.slug
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {line.name}
              </button>
            ))}
          </div>

          {/* Tabs - Mobile (horizontal scroll) */}
          <div className="lg:hidden -mx-4 px-4 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {(searchQuery ? filteredLines : productLines).map((line) => (
                <button
                  key={line.slug}
                  onClick={() => setActiveLine(line.slug)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                    activeLine === line.slug
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {line.name}
                </button>
              ))}
            </div>
          </div>

          {/* Documents content */}
          <div className="lg:col-span-3 bg-background border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {currentLine.name}
            </h3>
            <div className="space-y-0">
              <DocumentGroup
                title="Сертификаты и декларации"
                documents={currentLine.certificates}
              />
              <DocumentGroup
                title="Технические паспорта"
                documents={currentLine.passports}
              />
              <DocumentGroup
                title="Инструкции / каталоги"
                documents={currentLine.instructions}
              />
            </div>
            {currentLine.certificates.length === 0 &&
              currentLine.passports.length === 0 &&
              currentLine.instructions.length === 0 && (
                <p className="text-sm text-muted-foreground py-4">
                  Документы для этой линейки будут добавлены в ближайшее время.
                </p>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}