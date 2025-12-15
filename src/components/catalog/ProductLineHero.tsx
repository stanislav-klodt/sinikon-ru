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
  purpose: string;
  description: string;
  facts: { label: string; value: string }[];
}

export function ProductLineHero({ name, purpose, description, facts }: ProductLineHeroProps) {
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

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              {purpose}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {name}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={() => scrollToSection("nomenclature")}>
                Перейти к номенклатуре
              </Button>
              <Button variant="outline" onClick={() => scrollToSection("documents")}>
                Документы по линейке
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-4"
              >
                <p className="text-xs text-muted-foreground mb-1">{fact.label}</p>
                <p className="text-sm font-medium text-foreground">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
