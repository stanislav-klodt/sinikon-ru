import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function DocumentsCTA() {
  return (
    <section className="py-8 md:py-12 bg-muted/30 border-t border-border">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-background rounded-2xl border border-border">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                Не нашли нужный документ?
              </h3>
              <p className="text-sm text-muted-foreground">
                Напишите нам — укажите линейку и артикул, мы подберём документы.
              </p>
            </div>
          </div>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link to="/contacts/">
              Написать в поддержку
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
