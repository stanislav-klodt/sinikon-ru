import { useState } from "react";
import { Header } from "@/components/Header";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { Footer } from "@/components/Footer";
import { BIMModal } from "@/components/BIMModal";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { DocsSection } from "@/components/sections/DocsSection";
import { DesignersSection } from "@/components/sections/DesignersSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { BuySection } from "@/components/sections/BuySection";
import { AboutSection } from "@/components/sections/AboutSection";

const Index = () => {
  const [isBIMOpen, setIsBIMOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ProductsSection />
        <ProjectsSection />
        <DocsSection />
        <DesignersSection onOpenBIM={() => setIsBIMOpen(true)} />
        <NewsSection />
        <BuySection />
        <AboutSection />
      </main>

      <Footer />
      <MobileBottomBar />
      
      <BIMModal isOpen={isBIMOpen} onClose={() => setIsBIMOpen(false)} />
    </div>
  );
};

export default Index;
