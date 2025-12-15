import { ArrowRight, Search } from "lucide-react";

const products = [
  {
    name: "SINIKON Standart",
    description: "Внутренняя канализация",
    link: "/catalog/vnutrennyaya-kanalizatsiya-sinikon-standart/",
  },
  {
    name: "Sinikon Comfort Plus",
    description: "Пониженный уровень шума",
    link: "/catalog/kanalizatsiya-s-ponizhennym-urovnem-shuma-sinikon-comfort-plus/",
  },
  {
    name: "Rain Flow",
    description: "Внутренние водостоки",
    link: "/catalog/vnutrennie-vodostoki-rain-flow/",
  },
  {
    name: "SINIKON Universal",
    description: "Наружная канализация",
    link: "/catalog/naruzhnaya-kanalizatsiya-sinikon-universal/",
  },
  {
    name: "SINIKON НПВХ",
    description: "Наружная канализация НПВХ",
    link: "/catalog/naruzhnaya-kanalizatsiya-sinikon-npvkh/",
  },
  {
    name: "Трапы",
    description: "Для канализационных систем",
    link: "/catalog/trapy-dlya-kanalizatsionnykh-sistem/",
  },
  {
    name: "Инструменты и монтаж",
    description: "Крепёж, смазка, инструмент",
    link: "/catalog/instrumenty-krepyezh-i-smazka/",
  },
  {
    name: "Отопление и водоснабжение",
    description: "PE-RT / PE-X / фитинги",
    link: "/catalog/thermoline-pe-xb-evoh/",
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
            <a
              key={product.name}
              href={product.link}
              className="card-product group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
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
            </a>
          ))}
        </div>

        {/* Search and CTA */}
        <div className="bg-muted/50 border border-border rounded-2xl p-6 md:p-8">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Поиск по артикулу"
                  className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>В каталоге смотрят: артикул и кол-во в упаковке.</p>
                <p>Для каждой линейки — быстрые ссылки на документы.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <a href="/catalog/" className="btn-primary">
                Открыть каталог
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/catalog/pdf/" className="btn-ghost">
                Скачать каталог PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
