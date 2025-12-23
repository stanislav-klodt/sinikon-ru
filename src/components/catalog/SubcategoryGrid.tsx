import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Subcategory } from "@/data/productSubcategories";

interface SubcategoryGridProps {
  subcategories: Subcategory[];
  lineSlug: string;
}

export function SubcategoryGrid({ subcategories, lineSlug }: SubcategoryGridProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Номенклатура
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {subcategories.map((subcategory) => (
            <Link
              key={subcategory.slug}
              to={`/catalog/${lineSlug}/${subcategory.slug}/`}
              className="group bg-card border border-border rounded-2xl p-4 md:p-5 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square bg-muted/50 rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src={subcategory.image}
                  alt={subcategory.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-2 line-clamp-2 min-h-[2.5rem]">
                {subcategory.name}
              </h3>
              
              <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                <span>Подробнее</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
