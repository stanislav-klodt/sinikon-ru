import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

import iconStandart from "@/assets/icons/icon-standart.png";
import iconComfort from "@/assets/icons/icon-comfort.png";
import iconRainflow from "@/assets/icons/icon-rainflow.png";
import iconUniversal from "@/assets/icons/icon-universal.png";
import iconNpvh from "@/assets/icons/icon-npvh.png";
import iconTraps from "@/assets/icons/icon-traps.png";
import iconTools from "@/assets/icons/icon-tools.png";
import iconHeating from "@/assets/icons/icon-heating.png";

const productLines = [
  {
    id: "sinikon-standart",
    name: "SINIKON Standart",
    category: "internal",
    purpose: "Внутренняя канализация",
    features: ["Материал PP", "Раструбное соединение", "Для жилых и общественных зданий"],
    link: "/catalog/sinikon-standart/",
    icon: iconStandart,
  },
  {
    id: "sinikon-comfort-plus",
    name: "SINIKON Comfort Plus",
    category: "silent",
    purpose: "Малошумная канализация",
    features: ["Трёхслойная структура", "Снижение шума до 14 дБ", "Премиальные объекты"],
    link: "/catalog/sinikon-comfort-plus/",
    icon: iconComfort,
  },
  {
    id: "rain-flow",
    name: "Rain Flow",
    category: "rainflow",
    purpose: "Внутренние водостоки",
    features: ["Система сифонно-вакуумного водоотведения", "Плоские кровли", "Промышленные объекты"],
    link: "/catalog/rain-flow/",
    icon: iconRainflow,
  },
  {
    id: "sinikon-universal",
    name: "SINIKON Universal",
    category: "external",
    purpose: "Наружная канализация",
    features: ["Кольцевая жёсткость SN4", "Подземная прокладка", "Коттеджи и малоэтажное строительство"],
    link: "/catalog/sinikon-universal/",
    icon: iconUniversal,
  },
  {
    id: "sinikon-npvh",
    name: "SINIKON НПВХ",
    category: "npvh",
    purpose: "Наружная канализация НПВХ",
    features: ["Материал НПВХ", "Высокая химстойкость", "Промышленные стоки"],
    link: "/catalog/sinikon-npvh/",
    icon: iconNpvh,
  },
  {
    id: "trapy",
    name: "Трапы",
    category: "traps",
    purpose: "Трапы и дренаж",
    features: ["Напольные трапы", "Гидрозатвор", "Санузлы и душевые"],
    link: "/catalog/trapy/",
    icon: iconTraps,
  },
  {
    id: "montazh",
    name: "Инструменты и монтаж",
    category: "tools",
    purpose: "Монтажное оборудование",
    features: ["Труборезы", "Калибраторы", "Расходные материалы"],
    link: "/catalog/montazh/",
    icon: iconTools,
  },
  {
    id: "otoplenie-vodosnabzhenie",
    name: "Отопление и водоснабжение",
    category: "heating",
    purpose: "Инженерные системы",
    features: ["Трубы и фитинги", "Радиаторное отопление", "Водоснабжение"],
    link: "/catalog/otoplenie-vodosnabzhenie/",
    icon: iconHeating,
  },
];

interface ProductLineCardsProps {
  activeCategory: string;
  searchQuery: string;
}

export function ProductLineCards({ activeCategory, searchQuery }: ProductLineCardsProps) {
  const filteredProducts = productLines.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.purpose.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 md:py-16">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Линейки продукции
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-background border border-border rounded-2xl p-6 hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <img 
                    src={product.icon} 
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.purpose}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild className="flex-1">
                  <a href={product.link}>
                    Открыть линейку
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={`/documents/?line=${product.id}`} title="Документы">
                    <FileText className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Ничего не найдено. Попробуйте изменить параметры поиска.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
