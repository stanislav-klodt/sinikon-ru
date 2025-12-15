import { GraduationCap, MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TrainingSectionProps {
  onOpenModal: () => void;
}

const trainings = [
  {
    icon: GraduationCap,
    title: "Лекции и мастер-классы",
    description: "Обучение в учебном центре SINIKON для специалистов",
  },
  {
    icon: MapPin,
    title: "Выездные семинары в регионах",
    description: "Совместно с дистрибьюторами для проектировщиков",
  },
  {
    icon: BookOpen,
    title: "Методические материалы",
    description: "Пособия и руководства для самостоятельного изучения",
  },
];

export function TrainingSection({ onOpenModal }: TrainingSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-main">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Обучение и семинары
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Лекции, мастер-классы и выездные семинары для проектировщиков и специалистов.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {trainings.map((item, index) => (
            <div
              key={index}
              className="bg-muted/30 border border-border rounded-xl p-5"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <Button onClick={onOpenModal}>
          Запросить программу / условия
        </Button>
      </div>
    </section>
  );
}