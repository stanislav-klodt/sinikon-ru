import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Document, getLineLabel, getTypeLabel } from "@/data/documents";
import { toast } from "sonner";

interface DocumentCardProps {
  document: Document;
}

export function DocumentCard({ document }: DocumentCardProps) {
  const handleDownload = () => {
    if (document.fileUrl) {
      window.open(document.fileUrl, '_blank');
    } else {
      toast.info("Документ будет добавлен в ближайшее время");
    }
  };

  const handleOpen = () => {
    if (document.fileUrl) {
      window.open(document.fileUrl, '_blank');
    } else {
      toast.info("Документ будет добавлен в ближайшее время");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-muted/50 rounded-xl border border-border/50 hover:border-border transition-colors">
      <div className="flex items-start gap-4 flex-1 min-w-0">
        <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6 text-muted-foreground" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-medium text-foreground text-sm md:text-base mb-1.5 line-clamp-2">
            {document.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2">
            {document.line && document.line !== 'general' && (
              <Badge variant="secondary" className="text-xs">
                {getLineLabel(document.line)}
              </Badge>
            )}
            <Badge variant="outline" className="text-xs">
              {getTypeLabel(document.type)}
            </Badge>
            {document.year && (
              <span className="text-xs text-muted-foreground">{document.year}</span>
            )}
            {document.fileSize && (
              <span className="text-xs text-muted-foreground">• {document.fileSize}</span>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Button
          variant="outline"
          size="sm"
          onClick={handleOpen}
          className="flex-1 sm:flex-initial"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Открыть
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={handleDownload}
          className="flex-1 sm:flex-initial"
        >
          <Download className="w-4 h-4 mr-2" />
          Скачать
        </Button>
      </div>
    </div>
  );
}
