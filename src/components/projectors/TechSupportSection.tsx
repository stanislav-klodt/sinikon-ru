import { Link } from "react-router-dom";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TechSupportSectionProps {
  onOpenModal: () => void;
}

const channels = [
  {
    icon: Mail,
    title: "Email",
    value: "office@sinikon.ru",
    href: "mailto:office@sinikon.ru",
    isLink: true,
  },
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 (499) 270-65-55",
    href: "tel:+74992706555",
    isLink: true,
  },
  {
    icon: MessageSquare,
    title: "Форма запроса",
    value: "Быстрый способ задать вопрос",
    isLink: false,
  },
];

export function TechSupportSection({ onOpenModal }: TechSupportSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container-main">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Техническая поддержка
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Поможем с подбором решений, документами и корректным применением в проекте.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl p-5"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <channel.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{channel.title}</h3>
              {channel.isLink ? (
                <a
                  href={channel.href}
                  className="text-sm text-primary hover:underline"
                >
                  {channel.value}
                </a>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground mb-4">{channel.value}</p>
                  <Button size="sm" onClick={onOpenModal}>
                    Открыть форму
                  </Button>
                </>
              )}
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          Запросы по закупке и наличию — через{" "}
          <Link to="/distributors/" className="text-primary hover:underline">
            дистрибьюторов
          </Link>
          .
        </p>
      </div>
    </section>
  );
}