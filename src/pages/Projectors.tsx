import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectorsHero } from "@/components/projectors/ProjectorsHero";
import { BIMSection } from "@/components/projectors/BIMSection";
import { LineDocumentsSection } from "@/components/projectors/LineDocumentsSection";
import { MaterialsSection } from "@/components/projectors/MaterialsSection";
import { TechSupportSection } from "@/components/projectors/TechSupportSection";
import { TrainingSection } from "@/components/projectors/TrainingSection";
import { ProjectorsFAQ } from "@/components/projectors/ProjectorsFAQ";
import { ProjectorsCTA } from "@/components/projectors/ProjectorsCTA";
import { ProjectorsRequestModal } from "@/components/projectors/ProjectorsRequestModal";

export default function Projectors() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRequestType, setModalRequestType] = useState("bim");

  const openBIMModal = () => {
    setModalRequestType("bim");
    setIsModalOpen(true);
  };

  const openTechModal = () => {
    setModalRequestType("tech");
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProjectorsHero onOpenBIMModal={openBIMModal} />
        <BIMSection onOpenBIMModal={openBIMModal} />
        <LineDocumentsSection />
        <MaterialsSection />
        <TechSupportSection onOpenModal={openTechModal} />
        <TrainingSection onOpenModal={openTechModal} />
        <ProjectorsFAQ />
        <ProjectorsCTA onOpenBIMModal={openBIMModal} />
      </main>
      <Footer />
      <ProjectorsRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultRequestType={modalRequestType}
      />
    </div>
  );
}