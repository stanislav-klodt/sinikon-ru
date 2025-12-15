import { Phone, Mail, MapPin, Copy, ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export function ContactsInfo() {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} скопирован`);
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Office */}
          <div className="bg-background rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Центральный офис
            </h2>

            {/* Email */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Mail className="w-4 h-4" />
                Email
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="mailto:office@sinikon.ru"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  office@sinikon.ru
                </a>
                <button
                  onClick={() => copyToClipboard("office@sinikon.ru", "Email")}
                  className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                  title="Скопировать"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Phones */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Phone className="w-4 h-4" />
                Телефоны
              </div>
              <div className="space-y-2">
                {[
                  { number: "+7 (499) 270-65-55", note: "многоканальный" },
                  { number: "+7 (499) 840-65-20", note: null },
                  { number: "+7 (499) 840-65-21", note: null },
                ].map((phone, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <a
                      href={`tel:${phone.number.replace(/[^\d+]/g, "")}`}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {phone.number}
                    </a>
                    {phone.note && (
                      <span className="text-xs text-muted-foreground">
                        ({phone.note})
                      </span>
                    )}
                    <button
                      onClick={() => copyToClipboard(phone.number, "Телефон")}
                      className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      title="Скопировать"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Clock className="w-4 h-4" />
                Часы работы
              </div>
              <p className="text-foreground">Пн–Пт: 9:00–18:00</p>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Написать сообщение
            </Button>
          </div>

          {/* Address */}
          <div className="bg-background rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Адрес
            </h2>

            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                Местоположение
              </div>
              <p className="text-lg text-foreground mb-3">
                108841, Россия, г. Москва, г. Троицк, ул. Промышленная, 11
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    copyToClipboard(
                      "108841, Россия, г. Москва, г. Троицк, ул. Промышленная, 11",
                      "Адрес"
                    )
                  }
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Скопировать
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://yandex.ru/maps/?text=108841,+Россия,+г.+Москва,+г.+Троицк,+ул.+Промышленная,+11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Открыть в картах
                  </a>
                </Button>
              </div>
            </div>

            {/* Distributors note */}
            <div className="bg-muted/50 rounded-xl p-4 mt-6">
              <p className="text-sm text-muted-foreground mb-3">
                Поставки осуществляются через сеть дистрибьюторов. Для закупки продукции используйте раздел «Где купить».
              </p>
              <Button asChild variant="secondary" size="sm">
                <Link to="/distributors/">
                  Где купить
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
