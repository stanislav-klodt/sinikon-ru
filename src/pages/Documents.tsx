import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocumentsHero } from "@/components/documents/DocumentsHero";
import { CertificatesSection } from "@/components/documents/CertificatesSection";
import { WarrantySection } from "@/components/documents/WarrantySection";
import { PromoSection } from "@/components/documents/PromoSection";
import { DocumentsCTA } from "@/components/documents/DocumentsCTA";

export default function Documents() {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <DocumentsHero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <CertificatesSection searchQuery={searchQuery} />
        <WarrantySection />
        <PromoSection searchQuery={searchQuery} />
        <DocumentsCTA />
      </main>

      <Footer />
    </div>
  );
}
