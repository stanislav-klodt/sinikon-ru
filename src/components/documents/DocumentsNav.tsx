import { cn } from "@/lib/utils";

interface DocumentsNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "certificates", label: "Сертификаты и декларации" },
  { id: "warranty", label: "Гарантия" },
  { id: "promo", label: "Промо-материалы" },
];

export function DocumentsNav({ activeSection, onSectionChange }: DocumentsNavProps) {
  return (
    <nav className="sticky top-16 md:top-20 z-40 bg-background border-b border-border">
      <div className="container-main">
        <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={cn(
                "flex-shrink-0 px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                activeSection === section.id
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
