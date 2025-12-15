import { Button } from "@/components/ui/button";
import { Cuboid, Tag, Headphones, ArrowRight } from "lucide-react";

interface BIMSectionProps {
  onOpenBIMModal: () => void;
}

const features = [
  {
    icon: Cuboid,
    title: "Готовые семейства и типоразмеры",
    description: "Полный набор элементов для систем канализации и водоотведения",
  },
  {
    icon: Tag,
    title: "Понятные наименования и параметры",
    description: "Соответствие артикулам и техническим характеристикам продукции",
  },
  {
    icon: Headphones,
    title: "Поддержка по применению в проекте",
    description: "Консультации по корректному использованию семейств в модели",
  },
];

export function BIMSection({ onOpenBIMModal }: BIMSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-main">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            BIM (Revit) библиотека SINIKON
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Семейства для быстрого включения в модель и корректной спецификации.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Feature cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-muted/30 border border-border rounded-xl p-5"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="bg-primary rounded-xl p-6 flex flex-col justify-between">
            <div>
              <Cuboid className="w-10 h-10 text-primary-foreground mb-4" />
              <h3 className="text-lg font-bold text-primary-foreground mb-2">
                Получить BIM-библиотеку
              </h3>
              <p className="text-sm text-primary-foreground/80 mb-6">
                Оставьте заявку, мы отправим ссылку на скачивание
              </p>
            </div>
            <Button
              variant="secondary"
              className="w-full gap-2"
              onClick={onOpenBIMModal}
            >
              Запросить BIM (Revit)
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}