import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsList } from "@/components/news/NewsList";
import { NewsSidebar } from "@/components/news/NewsSidebar";

export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeYear, setActiveYear] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <NewsHero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <section className="py-8 md:py-12">
          <div className="container-main">
            <div className="grid lg:grid-cols-[1fr_320px] gap-8">
              <NewsList
                searchQuery={searchQuery}
                activeCategory={activeCategory}
                activeYear={activeYear}
              />
              <div className="lg:block hidden">
                <div className="sticky top-24">
                  <NewsSidebar
                    activeYear={activeYear}
                    onYearChange={setActiveYear}
                  />
                </div>
              </div>
            </div>

            {/* Mobile sidebar */}
            <div className="lg:hidden mt-8">
              <NewsSidebar
                activeYear={activeYear}
                onYearChange={setActiveYear}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
