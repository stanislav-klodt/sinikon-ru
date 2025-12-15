import { ArrowRight, GraduationCap, Users, Presentation } from "lucide-react";

const trainingCards = [
  {
    icon: GraduationCap,
    title: "Лекции и мастер-классы",
    description: "Обучение для специалистов по монтажу и проектированию",
  },
  {
    icon: Presentation,
    title: "Выездные семинары",
    description: "Семинары для проектировщиков совместно с дистрибьюторами",
  },
  {
    icon: Users,
    title: "Тренинги для партнёров",
    description: "Обучение коммерческих команд дистрибьюторов",
  },
];

export function TrainingSupport() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-main">
        <div className="mb-8 md:mb-12">
          <h2 className="heading-lg mb-3">Обучение и поддержка</h2>
          <p className="text-body max-w-2xl">
            Учебный центр SINIKON и выездные семинары совместно с дистрибьюторами.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {trainingCards.map((card, index) => (
            <div key={index} className="card-service">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-body-sm">{card.description}</p>
            </div>
          ))}
        </div>

        <a href="#designers" className="link-arrow">
          Проектировщикам: BIM (Revit) и документы
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
