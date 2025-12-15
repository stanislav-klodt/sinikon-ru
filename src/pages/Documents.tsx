import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocumentsHero } from "@/components/documents/DocumentsHero";
import { DocumentsNav } from "@/components/documents/DocumentsNav";
import { CertificatesSection } from "@/components/documents/CertificatesSection";
import { WarrantySection } from "@/components/documents/WarrantySection";
import { PromoSection } from "@/components/documents/PromoSection";
import { DocumentsCTA } from "@/components/documents/DocumentsCTA";

export default function Documents() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("certificates");

  // Handle URL parameters
  useEffect(() => {
    const type = searchParams.get("type");
    const line = searchParams.get("line");
    
    if (type === "warranty") {
      setActiveSection("warranty");
    } else if (type === "promo" || type === "promotional") {
      setActiveSection("promo");
    } else if (type === "certificates" || line) {
      setActiveSection("certificates");
    }
  }, [searchParams]);

  const handleQuickFilter = (category: string) => {
    setActiveSection(category);
    setSearchParams({ type: category });
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setSearchParams({ type: section });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <DocumentsHero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onQuickFilter={handleQuickFilter}
        />
        
        <DocumentsNav
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />

        {activeSection === "certificates" && (
          <CertificatesSection searchQuery={searchQuery} />
        )}

        {activeSection === "warranty" && (
          <WarrantySection />
        )}

        {activeSection === "promo" && (
          <PromoSection searchQuery={searchQuery} />
        )}

        <DocumentsCTA />
      </main>

      <Footer />
    </div>
  );
}
