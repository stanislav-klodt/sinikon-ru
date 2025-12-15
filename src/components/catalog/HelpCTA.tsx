import { Ruler, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BIMModal } from "@/components/BIMModal";
import { useState } from "react";

export function HelpCTA() {
  const [isBIMModalOpen, setIsBIMModalOpen] = useState(false);

  return (
    <section className="py-12 md:py-16">
      <div className="container-main">
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            Нужна помощь с подбором?
          </h2>
          <p className="text-muted-foreground mb-6">
            Поможем с проектированием и ответим на технические вопросы
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={() => setIsBIMModalOpen(true)} className="gap-2">
              <Ruler className="w-4 h-4" />
              Проектировщикам: BIM (Revit)
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <a href="/contacts/">
                <MessageSquare className="w-4 h-4" />
                Технический вопрос
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <BIMModal isOpen={isBIMModalOpen} onClose={() => setIsBIMModalOpen(false)} />
    </section>
  );
}
