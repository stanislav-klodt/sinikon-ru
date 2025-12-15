import { Link } from "react-router-dom";
import { Search, Package, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    title: "Найдите номенклатуру",
    description: "по артикулу или диаметру",
  },
  {
    icon: Package,
    title: "Смотрите упаковку",
    description: "отгрузка кратно упаковкам",
  },
  {
    icon: FileText,
    title: "Документы по линейкам",
    description: "сертификаты, паспорта, инструкции",
  },
];

export function HowToUse() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container-main">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8">
          Как пользоваться каталогом
        </h2>
        
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center flex-shrink-0">
                <step.icon className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <Button variant="outline" asChild>
          <Link to="/documents/">Открыть документы</Link>
        </Button>
      </div>
    </section>
  );
}
