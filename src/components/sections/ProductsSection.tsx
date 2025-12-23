import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import iconStandart from "@/assets/icons/icon-standart.png";
import iconComfort from "@/assets/icons/icon-comfort.png";
import iconRainflow from "@/assets/icons/icon-rainflow.png";
import iconUniversal from "@/assets/icons/icon-universal.png";
import iconNpvh from "@/assets/icons/icon-npvh.png";
import iconTraps from "@/assets/icons/icon-traps.png";
import iconTools from "@/assets/icons/icon-tools.png";
import iconHeating from "@/assets/icons/icon-heating.png";

const products = [
  {
    name: "SINIKON Standart",
    description: "Внутренняя канализация",
    link: "/catalog/sinikon-standart/",
    icon: iconStandart,
  },
  {
    name: "Sinikon Comfort Plus",
    description: "Пониженный уровень шума",
    link: "/catalog/sinikon-comfort-plus/",
    icon: iconComfort,
  },
  {
    name: "Rain Flow",
    description: "Внутренние водостоки",
    link: "/catalog/rain-flow/",
    icon: iconRainflow,
  },
  {
    name: "SINIKON Universal",
    description: "Наружная канализация",
    link: "/catalog/sinikon-universal/",
    icon: iconUniversal,
  },
  {
    name: "SINIKON НПВХ",
    description: "Наружная канализация НПВХ",
    link: "/catalog/sinikon-npvh/",
    icon: iconNpvh,
  },
  {
    name: "Трапы",
    description: "Для канализационных систем",
    link: "/catalog/trapy/",
    icon: iconTraps,
  },
  {
    name: "Инструменты и монтаж",
    description: "Крепёж, смазка, инструмент",
    link: "/catalog/montazh/",
    icon: iconTools,
  },
  {
    name: "Отопление и водоснабжение",
    description: "PE-RT / PE-X / фитинги",
    link: "/catalog/otoplenie-vodosnabzhenie/",
    icon: iconHeating,
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28 lg:py-32">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="section-number mb-4 block">01</span>
          <h2 className="heading-lg mb-4">Продукция SINIKON</h2>
          <p className="text-body max-w-2xl">
            Линейки систем — для внутренних и наружных сетей, водостоков,
            водоснабжения и отопления.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {products.map((product, index) => (
            <Link
              key={product.name}
              to={product.link}
              className="card-product group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img 
                  src={product.icon} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {product.description}
              </p>
              <span className="link-arrow text-sm">
                Открыть
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* Search and CTA */}
        <div className="bg-muted/50 border border-border rounded-2xl p-6 md:p-8">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Поиск по названию или артикулу"
                  className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link to="/catalog/" className="btn-primary">
                Открыть каталог
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/documents/" className="btn-ghost">
                Скачать каталог PDF
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
