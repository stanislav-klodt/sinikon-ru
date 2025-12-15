import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactsMap() {
  return (
    <section className="py-8 md:py-12">
      <div className="container-main">
        <div className="bg-background rounded-2xl border border-border overflow-hidden">
          {/* Map placeholder */}
          <div className="relative h-[400px] md:h-[500px] bg-muted">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <p className="text-lg font-medium text-foreground mb-1">
                SINIKON, Троицк
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                ул. Промышленная, 11
              </p>
              <p className="text-xs text-muted-foreground">
                Карта загружается...
              </p>
            </div>

            {/* Iframe placeholder for real map */}
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.303673%2C55.483139&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk0MDM5NjI2ODYSQ9Cg0L7RgdGB0LjRjywg0JzQvtGB0LrQstCwLCDQotGA0L7QuNGG0LosINGD0LsuINCf0YDQvtC80YvRiNC70LXQvdC90LDRjywgMTE&z=16"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Карта офиса SINIKON"
            />
          </div>

          {/* Map actions */}
          <div className="p-4 flex flex-col sm:flex-row gap-3 border-t border-border">
            <Button asChild className="flex-1">
              <a
                href="https://yandex.ru/maps/?rtext=~55.483139,37.303673"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Проложить маршрут
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a
                href="https://yandex.ru/maps/?text=108841,+Россия,+г.+Москва,+г.+Троицк,+ул.+Промышленная,+11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Открыть в Яндекс.Картах
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
