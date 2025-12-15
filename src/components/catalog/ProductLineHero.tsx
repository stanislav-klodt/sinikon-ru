import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ProductLineHeroProps {
  name: string;
  slug: string;
  purpose: string;
  description: string;
  facts: { label: string; value: string }[];
}

// Category hero images - composites showing product range
const categoryImages: Record<string, string[]> = {
  "sinikon-standart": [
    "https://www.sinikon.ru/upload/iblock/689/689f0628a946aa86745646a9c59526cc.png", // труба
    "https://www.sinikon.ru/upload/iblock/044/044454c1cdae9f3a539d6c1ce530de01.png", // отвод 45
    "https://www.sinikon.ru/upload/iblock/2c5/2c51ca637f8b30fa7022fdb9a58b5d18.png", // тройник
    "https://www.sinikon.ru/upload/iblock/9ca/9ca1a2f932226de093d9227f46baddd4.png", // крестовина
  ],
  "sinikon-comfort-plus": [
    "https://www.sinikon.ru/upload/iblock/689/689f0628a946aa86745646a9c59526cc.png",
    "https://www.sinikon.ru/upload/iblock/044/044454c1cdae9f3a539d6c1ce530de01.png",
    "https://www.sinikon.ru/upload/iblock/2c5/2c51ca637f8b30fa7022fdb9a58b5d18.png",
  ],
  "rain-flow": [
    "https://www.sinikon.ru/upload/iblock/689/689f0628a946aa86745646a9c59526cc.png",
    "https://www.sinikon.ru/upload/iblock/044/044454c1cdae9f3a539d6c1ce530de01.png",
  ],
  "sinikon-universal": [
    "https://www.sinikon.ru/upload/iblock/689/689f0628a946aa86745646a9c59526cc.png",
    "https://www.sinikon.ru/upload/iblock/2c5/2c51ca637f8b30fa7022fdb9a58b5d18.png",
  ],
};

export function ProductLineHero({ name, slug, purpose, description, facts }: ProductLineHeroProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const images = categoryImages[slug] || categoryImages["sinikon-standart"];

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/30 overflow-hidden">
      <div className="container-main">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/catalog/">Продукция</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero Banner with Category Image */}
        <div className="relative bg-gradient-to-r from-muted to-muted/50 rounded-2xl mb-8 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Text Content */}
            <div className="p-6 md:p-8 lg:p-10">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {purpose}
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                {name}
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                {description}
              </p>
            </div>

            {/* Product Images Composition */}
            <div className="relative h-48 md:h-64 lg:h-auto flex items-center justify-center p-4 lg:p-8">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Main product - large */}
                <img 
                  src={images[0]} 
                  alt={name}
                  className="absolute w-24 md:w-32 lg:w-40 h-auto object-contain z-10 -rotate-12 left-1/4 top-1/2 -translate-y-1/2"
                  loading="eager"
                />
                {/* Secondary products */}
                {images[1] && (
                  <img 
                    src={images[1]} 
                    alt=""
                    className="absolute w-20 md:w-28 lg:w-36 h-auto object-contain z-20 rotate-6 right-1/4 top-1/3"
                    loading="eager"
                  />
                )}
                {images[2] && (
                  <img 
                    src={images[2]} 
                    alt=""
                    className="absolute w-16 md:w-24 lg:w-32 h-auto object-contain z-30 -rotate-6 right-1/3 bottom-4"
                    loading="eager"
                  />
                )}
                {images[3] && (
                  <img 
                    src={images[3]} 
                    alt=""
                    className="absolute w-14 md:w-20 lg:w-28 h-auto object-contain z-5 rotate-12 left-1/3 bottom-2"
                    loading="eager"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons and Facts */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={() => scrollToSection("nomenclature")}>
                Перейти к номенклатуре
              </Button>
              <Button variant="outline" onClick={() => scrollToSection("documents")}>
                Документы по линейке
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl px-4 py-3 flex-1 min-w-[140px]"
              >
                <p className="text-xs text-muted-foreground mb-0.5">{fact.label}</p>
                <p className="text-sm font-medium text-foreground">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
