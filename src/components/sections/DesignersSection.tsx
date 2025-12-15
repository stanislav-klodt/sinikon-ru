import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Семейства для быстрого включения в проект",
  "Актуальные спецификации и обозначения",
  "Поддержка по подбору решений",
];

interface DesignersSectionProps {
  onOpenBIM: () => void;
}

export function DesignersSection({ onOpenBIM }: DesignersSectionProps) {
  return (
    <section id="designers" className="py-20 md:py-28 lg:py-32">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="section-number mb-4 block">03</span>
          <h2 className="heading-lg mb-4">Проектировщикам</h2>
          <p className="text-body max-w-2xl">
            BIM-библиотека семейств SINIKON для Autodesk Revit + консультация
            по применению.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - benefits */}
          <div>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - CTA card */}
          <div className="bg-foreground text-background rounded-2xl p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Получите BIM-библиотеку
            </h3>
            <p className="text-background/70 mb-6">
              Семейства продукции SINIKON для Autodesk Revit — бесплатно для
              проектировщиков.
            </p>
            <button
              onClick={onOpenBIM}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:bg-primary-hover active:scale-[0.98]"
            >
              Запросить BIM/Revit
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
