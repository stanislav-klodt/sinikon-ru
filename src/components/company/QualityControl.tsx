import { PackageSearch, Settings, ClipboardCheck } from "lucide-react";

const qualitySteps = [
  {
    icon: PackageSearch,
    title: "Входной контроль",
    description: "Проверка сырья и комплектующих перед запуском в производство",
  },
  {
    icon: Settings,
    title: "Контроль процессов",
    description: "Мониторинг параметров на всех производственных этапах",
  },
  {
    icon: ClipboardCheck,
    title: "Проверка продукции",
    description: "Контроль готовой продукции и стабильности каждой партии",
  },
];

export function QualityControl() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-main">
        <h2 className="heading-lg mb-8 md:mb-12">Контроль качества</h2>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {qualitySteps.map((step, index) => (
            <div key={index} className="card-service">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-body-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground border-l-2 border-primary pl-4">
          Поставщик уплотнительных колец — немецкая компания M.O.L.
        </p>
      </div>
    </section>
  );
}
