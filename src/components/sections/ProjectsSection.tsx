import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Novosibirsk Marriott Hotel",
    image: "https://www.sinikon.ru/upload/iblock/bd0/bd0fc836a057ea4fc4bd74af3bc1490a.jpg",
  },
  {
    name: "Аэропорт «Кневичи»",
    image: "https://www.sinikon.ru/upload/iblock/9cb/9cbcded569950767e242078e9ff6ed5b.jpg",
  },
  {
    name: "Новосибирск Галерея",
    image: "https://www.sinikon.ru/upload/iblock/c6c/c6c0e8fea43399e0a2627a6f2fb50432.jpg",
  },
  {
    name: "Открытие Арена",
    image: "https://www.sinikon.ru/upload/iblock/6ea/6ea04247b683c46ba7099c9612596a3e.jpg",
  },
  {
    name: "Приморский театр оперы и балета",
    image: "https://www.sinikon.ru/upload/iblock/32f/32fd152bc127571a733f25c61ee1b6ae.jpg",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 lg:py-32 bg-muted/30">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="section-number mb-4 block">06</span>
          <h2 className="heading-lg mb-4">Наши объекты</h2>
          <p className="text-body max-w-2xl">
            Примеры применения систем SINIKON на крупных объектах.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
          {projects.map((project, index) => (
            <Link
              key={project.name}
              to="/objects/"
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-lg font-semibold text-background mb-2">
                  {project.name}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm text-background/80 group-hover:text-background transition-colors">
                  Смотреть объект
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/objects/" className="btn-ghost">
            Все объекты
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
