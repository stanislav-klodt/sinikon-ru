import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { CompanyHero } from "@/components/company/CompanyHero";
import { ProductionGallery } from "@/components/company/ProductionGallery";
import { AboutCompany } from "@/components/company/AboutCompany";
import { CertificationTimeline } from "@/components/company/CertificationTimeline";
import { QualityControl } from "@/components/company/QualityControl";
import { TrainingSupport } from "@/components/company/TrainingSupport";
import { VideoSection } from "@/components/company/VideoSection";
import { CompanyCTA } from "@/components/company/CompanyCTA";

export default function Company() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <CompanyHero />
        <ProductionGallery />
        <AboutCompany />
        <CertificationTimeline />
        <QualityControl />
        <TrainingSupport />
        <VideoSection />
        <CompanyCTA />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
