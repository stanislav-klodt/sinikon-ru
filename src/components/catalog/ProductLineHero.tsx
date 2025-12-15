import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import catalogHeroStandart from "@/assets/catalog-hero-standart.png";

interface ProductLineHeroProps {
  name: string;
  slug: string;
  purpose: string;
  description: string;
  facts: { label: string; value: string }[];
}

export function ProductLineHero({ name, slug, purpose, description, facts }: ProductLineHeroProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/30">
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

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-muted to-muted/40 rounded-2xl mb-8 overflow-hidden">
          <div className="grid md:grid-cols-5 items-center">
            {/* Text Content */}
            <div className="md:col-span-3 p-6 md:p-8 lg:p-10">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {purpose}
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                {name}
              </h1>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                {description}
              </p>
              
              {/* CTA Buttons inside banner */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={() => scrollToSection("nomenclature")}>
                  Перейти к номенклатуре
                </Button>
                <Button variant="outline" onClick={() => scrollToSection("documents")}>
                  Документы по линейке
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:col-span-2 flex items-center justify-center p-4 md:p-6">
              <img 
                src={catalogHeroStandart} 
                alt={`${name} - продукция SINIKON`}
                className="w-full max-w-xs md:max-w-sm h-auto object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Facts Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl px-4 py-3"
            >
              <p className="text-xs text-muted-foreground mb-0.5">{fact.label}</p>
              <p className="text-sm font-medium text-foreground">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}