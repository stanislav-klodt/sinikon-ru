import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const news = [
  {
    date: "04.12.2025",
    title: "Новые радиусные компрессионные фитинги собственного производства",
    excerpt: "Расширение ассортимента для систем водоснабжения и отопления.",
    link: "/news/new-fittings/",
  },
  {
    date: "10.10.2025",
    title: "Новая крестовина Универсал 110х110х100х45",
    excerpt: "Оптимизированная конструкция для наружных сетей канализации.",
    link: "/news/new-cross/",
  },
  {
    date: "25.11.2024",
    title: "Лучше один раз увидеть",
    excerpt: "Экскурсия на производство для партнёров и проектировщиков.",
    link: "/news/factory-tour/",
  },
  {
    date: "08.07.2024",
    title: "Аккредитация испытательной лаборатории",
    excerpt: "Подтверждение высоких стандартов контроля качества продукции.",
    link: "/news/lab-accreditation/",
  },
];

export function NewsSection() {
  return (
    <section id="news" className="py-20 md:py-28 lg:py-32">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="section-number mb-4 block">05</span>
          <h2 className="heading-lg mb-4">Новости</h2>
        </div>

        {/* News grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-10">
          {news.map((item, index) => (
            <Link
              key={item.title}
              to={item.link}
              className="card-product group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <time className="text-sm text-muted-foreground">{item.date}</time>
              <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-body-sm mb-4">{item.excerpt}</p>
              <span className="link-arrow text-sm">
                Читать
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/news/" className="btn-ghost">
            Все новости
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
