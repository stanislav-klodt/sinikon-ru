import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Novosibirsk Marriotte Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    link: "/company/objects/",
  },
  {
    name: 'Аэропорт "Кневичи"',
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    link: "/company/objects/",
  },
  {
    name: "Галерея Новосибирск",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
    link: "/company/objects/",
  },
  {
    name: "Открытие Арена",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=800&q=80",
    link: "/company/objects/",
  },
  {
    name: "Приморский театр оперы и балета",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80",
    link: "/company/objects/",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 lg:py-32 bg-muted/30">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="section-number mb-4 block">04</span>
          <h2 className="heading-lg mb-4">Наши объекты</h2>
          <p className="text-body max-w-2xl">
            Примеры применения систем SINIKON на крупных объектах.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.link}
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
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/company/objects/" className="btn-ghost">
            Все объекты
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
