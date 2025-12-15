import { FileText, Book, Presentation, Wrench, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const materials = [
  {
    icon: Book,
    title: "Альбом типовых узлов",
    description: "Типовые решения для проектирования",
    type: "PDF",
    placeholder: true,
  },
  {
    icon: FileText,
    title: "Технические схемы и рекомендации",
    description: "Схемы подключения и монтажа",
    type: "PDF",
    placeholder: true,
  },
  {
    icon: Presentation,
    title: "Каталоги и презентации",
    description: "Обзорные материалы по продукции",
    link: "/documents/",
    placeholder: false,
  },
  {
    icon: Wrench,
    title: "Инструкции по монтажу",
    description: "Пошаговые руководства",
    type: "PDF",
    placeholder: true,
  },
];

export function MaterialsSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Узлы и материалы для проекта
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {materials.map((item, index) => (
            <div
              key={index}
              className="bg-muted/30 border border-border rounded-xl p-5 flex flex-col"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {item.description}
              </p>
              {item.link ? (
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={item.link}>Перейти</a>
                </Button>
              ) : (
                <Button variant="outline" size="sm" className="w-full gap-2" disabled={item.placeholder}>
                  <Download className="w-4 h-4" />
                  {item.placeholder ? "Скоро" : item.type}
                </Button>
              )}
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          Если не нашли нужный документ — напишите в техподдержку, укажите линейку и артикул.
        </p>
      </div>
    </section>
  );
}