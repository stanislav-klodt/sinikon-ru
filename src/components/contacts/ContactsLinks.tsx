import { Link } from "react-router-dom";
import { FileText, Package } from "lucide-react";

export function ContactsLinks() {
  return (
    <section className="py-8 md:py-12">
      <div className="container-main">
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Link
            to="/projectors/"
            className="flex items-start gap-4 p-5 bg-primary/5 rounded-xl border border-primary/20 hover:bg-primary/10 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                Проектировщикам
              </h3>
              <p className="text-sm text-muted-foreground">
                BIM (Revit) и материалы
              </p>
            </div>
          </Link>

          <Link
            to="/documents/"
            className="flex items-start gap-4 p-5 bg-muted/50 rounded-xl border border-border hover:border-primary/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                Документы
              </h3>
              <p className="text-sm text-muted-foreground">
                Сертификаты, гарантия, промо
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
