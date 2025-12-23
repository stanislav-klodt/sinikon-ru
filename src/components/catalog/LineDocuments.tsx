import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Document {
  name: string;
  type: string;
  url?: string;
}

interface LineDocumentsProps {
  lineName: string;
  certificates: Document[];
  passports: Document[];
  instructions: Document[];
}

function DocumentCard({ doc }: { doc: Document }) {
  return (
    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center">
          <FileText className="w-5 h-5 text-muted-foreground" />
        </div>
        <div>
          <p className="font-medium text-foreground text-sm">{doc.name}</p>
          <p className="text-xs text-muted-foreground">{doc.type}</p>
        </div>
      </div>
      <Button variant="ghost" size="sm" disabled={!doc.url}>
        <Download className="w-4 h-4 mr-2" />
        {doc.url ? "Скачать" : "Скоро"}
      </Button>
    </div>
  );
}

export function LineDocuments({
  lineName,
  certificates,
  passports,
  instructions,
}: LineDocumentsProps) {
  return (
    <section id="line-documents" className="py-12 md:py-16">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Документы по линейке {lineName}
        </h2>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <Tabs defaultValue="certificates">
            <TabsList className="mb-6">
              <TabsTrigger value="certificates">
                Сертификаты и декларации
              </TabsTrigger>
              <TabsTrigger value="passports">Технические паспорта</TabsTrigger>
              <TabsTrigger value="instructions">Инструкции / каталоги</TabsTrigger>
            </TabsList>

            <TabsContent value="certificates" className="space-y-3">
              {certificates.map((doc, index) => (
                <DocumentCard key={index} doc={doc} />
              ))}
            </TabsContent>

            <TabsContent value="passports" className="space-y-3">
              {passports.map((doc, index) => (
                <DocumentCard key={index} doc={doc} />
              ))}
            </TabsContent>

            <TabsContent value="instructions" className="space-y-3">
              {instructions.map((doc, index) => (
                <DocumentCard key={index} doc={doc} />
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="certificates" className="border rounded-xl px-4">
              <AccordionTrigger className="text-sm font-medium">
                Сертификаты и декларации ({certificates.length})
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pb-4">
                {certificates.map((doc, index) => (
                  <DocumentCard key={index} doc={doc} />
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="passports" className="border rounded-xl px-4">
              <AccordionTrigger className="text-sm font-medium">
                Технические паспорта ({passports.length})
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pb-4">
                {passports.map((doc, index) => (
                  <DocumentCard key={index} doc={doc} />
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="instructions" className="border rounded-xl px-4">
              <AccordionTrigger className="text-sm font-medium">
                Инструкции / каталоги ({instructions.length})
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pb-4">
                {instructions.map((doc, index) => (
                  <DocumentCard key={index} doc={doc} />
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
