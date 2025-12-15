import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RelatedProduct {
  name: string;
  purpose: string;
  link: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Сопутствующие линейки
        </h2>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              className="group bg-background border border-border rounded-xl p-6 hover:border-foreground/20 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-1 group-hover:underline">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">{product.purpose}</p>
              <ArrowRight className="w-4 h-4 text-muted-foreground mt-4 group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>

        <Button variant="outline" asChild>
          <a href="/catalog/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Вернуться в каталог
          </a>
        </Button>
      </div>
    </section>
  );
}
