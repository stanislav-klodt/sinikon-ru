import { ArrowRight, FileText, Phone, MapPin } from "lucide-react";

const ctaLinks = [
  {
    icon: FileText,
    label: "Документы",
    href: "/documents/",
    variant: "primary" as const,
  },
  {
    icon: Phone,
    label: "Контакты",
    href: "/contacts/",
    variant: "ghost" as const,
  },
  {
    icon: MapPin,
    label: "Где купить",
    href: "#buy",
    variant: "ghost" as const,
  },
];

export function CompanyCTA() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-main">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="heading-md mb-6">Нужны документы или консультация?</h2>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {ctaLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={link.variant === "primary" ? "btn-primary" : "btn-ghost"}
              >
                <link.icon className="w-5 h-5" />
                {link.label}
                <ArrowRight className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
