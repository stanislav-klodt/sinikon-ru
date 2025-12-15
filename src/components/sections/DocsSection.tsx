import { Link } from "react-router-dom";
import { ArrowRight, FileCheck, Sparkles, FolderDown } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Сертификаты и паспорта",
    description: "Документы по линейкам и артикулам.",
    cta: "Открыть сертификаты",
    link: "/certificates/",
  },
  {
    icon: Sparkles,
    title: "Характеристики и преимущества",
    description: "Ключевые свойства материалов и систем.",
    cta: "Смотреть характеристики",
    link: "/information/advantages/",
  },
  {
    icon: FolderDown,
    title: "Информационные материалы",
    description: "Каталоги, презентации, инструкции.",
    cta: "Скачать материалы",
    link: "/information/materials/",
  },
];

export function DocsSection() {
  return (
    <section id="docs" className="py-20 md:py-28 lg:py-32 bg-muted/30">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="section-number mb-4 block">03</span>
          <h2 className="heading-lg mb-4">Документы и техническая поддержка</h2>
          <p className="text-body max-w-2xl">
            Сертификаты, технические паспорта и материалы — чтобы быстро
            подобрать и согласовать решения.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-body-sm flex-grow mb-6">{service.description}</p>
              <Link to={service.link} className="link-arrow text-sm mt-auto">
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
