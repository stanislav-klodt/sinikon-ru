import { Button } from "@/components/ui/button";
import { Cuboid, FileText, PenTool, Headphones } from "lucide-react";

interface ProjectorsHeroProps {
  onOpenBIMModal: () => void;
}

const chips = [
  { icon: Cuboid, label: "BIM / Revit" },
  { icon: FileText, label: "Паспорта и сертификаты" },
  { icon: PenTool, label: "Узлы и чертежи" },
  { icon: Headphones, label: "Техподдержка" },
];

export function ProjectorsHero({ onOpenBIMModal }: ProjectorsHeroProps) {
  const scrollToDocuments = () => {
    document.getElementById("documents")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/30">
      <div className="container-main">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Проектировщикам
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              BIM (Revit), техническая документация и материалы по линейкам SINIKON — 
              для включения в проект и прохождения экспертизы.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" onClick={onOpenBIMModal}>
                Запросить BIM (Revit)
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToDocuments}>
                Документы по линейкам
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              {chips.map((chip, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <chip.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{chip.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}