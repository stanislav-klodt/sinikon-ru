import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CatalogHero } from "@/components/catalog/CatalogHero";
import { CategoryChips } from "@/components/catalog/CategoryChips";
import { ProductLineCards } from "@/components/catalog/ProductLineCards";
import { HowToUse } from "@/components/catalog/HowToUse";
import { HelpCTA } from "@/components/catalog/HelpCTA";

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CatalogHero 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />
        <CategoryChips 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        <ProductLineCards 
          activeCategory={activeCategory}
          searchQuery={searchQuery}
        />
        <HowToUse />
        <HelpCTA />
      </main>
      <Footer />
    </div>
  );
}
