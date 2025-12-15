import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactsHero() {
  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-muted/30">
      <div className="container-main">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Контакты
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Свяжитесь с нами по вопросам документации, технической поддержки и сотрудничества.
          </p>

          {/* Quick actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="tel:+74992706555">
                <Phone className="w-4 h-4 mr-2" />
                Позвонить
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="mailto:office@sinikon.ru">
                <Mail className="w-4 h-4 mr-2" />
                Написать на почту
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a
                href="https://yandex.ru/maps/?text=108841,+Россия,+г.+Москва,+г.+Троицк,+ул.+Промышленная,+11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Проложить маршрут
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
