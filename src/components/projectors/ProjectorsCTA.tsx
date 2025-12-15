import { Button } from "@/components/ui/button";

interface ProjectorsCTAProps {
  onOpenBIMModal: () => void;
}

export function ProjectorsCTA({ onOpenBIMModal }: ProjectorsCTAProps) {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-main">
        <div className="bg-muted/30 border border-border rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Нужны документы для проекта или консультация?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Получите BIM-библиотеку, техническую документацию или помощь специалистов SINIKON
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" onClick={onOpenBIMModal}>
              Запросить BIM (Revit)
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/documents/">Документы</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/distributors/">Где купить</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}