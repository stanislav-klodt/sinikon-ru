import { Shield, Clock, FileCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const warrantyPoints = [
  {
    icon: Shield,
    title: "20 лет гарантии",
    description: "Гарантия на заводские дефекты — 20 лет с даты производства, указанной на изделии.",
  },
  {
    icon: Clock,
    title: "15 лет от даты покупки",
    description: "Если дату производства установить невозможно — 15 лет от даты приобретения (требуется подтверждение документами).",
  },
  {
    icon: FileCheck,
    title: "Условия применения",
    description: "Гарантия действует при соблюдении условий монтажа и эксплуатации согласно инструкциям производителя.",
  },
  {
    icon: Phone,
    title: "Обращение по гарантии",
    description: "Для обращения подготовьте данные о продукции: артикул, дату покупки, описание дефекта и фото.",
  },
];

const fullWarrantyText = `
## Гарантийные обязательства SINIKON

### 1. Срок гарантии
Срок гарантии на продукцию SINIKON составляет 20 (двадцать) лет с даты производства, указанной на изделии. В случае, если дату производства установить невозможно, гарантийный срок составляет 15 (пятнадцать) лет с даты приобретения продукции, подтверждённой документами (чек, накладная, договор).

### 2. Условия гарантии
Гарантия распространяется на заводские дефекты материала и изготовления при условии соблюдения:
- Правил транспортировки и хранения продукции
- Инструкций по монтажу и эксплуатации
- Рекомендованных условий применения

### 3. Гарантия не распространяется на:
- Повреждения, возникшие вследствие механического воздействия
- Дефекты, вызванные нарушением правил монтажа или эксплуатации
- Естественный износ изделий
- Повреждения, возникшие в результате воздействия агрессивных сред, не предусмотренных техническими условиями

### 4. Порядок обращения
Для обращения по гарантии необходимо:
1. Связаться с технической поддержкой SINIKON
2. Предоставить информацию о продукции (артикул, дата производства/покупки)
3. Описать выявленный дефект
4. Приложить фотографии дефекта

### 5. Контакты
По всем вопросам, связанным с гарантийными обязательствами, обращайтесь в службу технической поддержки SINIKON.
`;

export function WarrantySection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container-main">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Гарантия
          </h2>
          <p className="text-muted-foreground">
            Гарантийные обязательства производителя на продукцию SINIKON.
          </p>
        </div>

        {/* Key points */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {warrantyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-5 bg-muted/50 rounded-xl border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full warranty text */}
        <div className="bg-muted/30 rounded-2xl border border-border/50 mb-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="full-text" className="border-0">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-base font-semibold">
                  Полный текст гарантийных условий
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">1. Срок гарантии</h4>
                      <p>Срок гарантии на продукцию SINIKON составляет 20 (двадцать) лет с даты производства, указанной на изделии. В случае, если дату производства установить невозможно, гарантийный срок составляет 15 (пятнадцать) лет с даты приобретения продукции, подтверждённой документами (чек, накладная, договор).</p>
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">2. Условия гарантии</h4>
                      <p>Гарантия распространяется на заводские дефекты материала и изготовления при условии соблюдения:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Правил транспортировки и хранения продукции</li>
                        <li>Инструкций по монтажу и эксплуатации</li>
                        <li>Рекомендованных условий применения</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">3. Гарантия не распространяется на:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Повреждения, возникшие вследствие механического воздействия</li>
                        <li>Дефекты, вызванные нарушением правил монтажа или эксплуатации</li>
                        <li>Естественный износ изделий</li>
                        <li>Повреждения, возникшие в результате воздействия агрессивных сред</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">4. Порядок обращения</h4>
                      <p>Для обращения по гарантии необходимо:</p>
                      <ol className="list-decimal pl-5 mt-2 space-y-1">
                        <li>Связаться с технической поддержкой SINIKON</li>
                        <li>Предоставить информацию о продукции (артикул, дата производства/покупки)</li>
                        <li>Описать выявленный дефект</li>
                        <li>Приложить фотографии дефекта</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <Link to="/contacts/">
              Контакты по гарантийным вопросам
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
