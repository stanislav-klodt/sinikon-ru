import { Download, FileSpreadsheet } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DistributorsCTA() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-main">
        <div className="bg-primary/5 rounded-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Скачать полный список дистрибьюторов
              </h2>
              <p className="text-muted-foreground">
                Актуальные контакты партнёров во всех регионах России
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                PDF
              </Button>
              <Button variant="outline" className="gap-2">
                <FileSpreadsheet className="w-4 h-4" />
                Excel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
