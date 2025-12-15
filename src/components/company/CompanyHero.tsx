import { ArrowDown, Play, Factory, MapPin, Award, ShieldCheck } from "lucide-react";
import factoryImage from "@/assets/factory.jpg";

const facts = [
  { icon: Factory, label: "Основаны", value: "1996" },
  { icon: MapPin, label: "Производство", value: "Москва, Троицк" },
  { icon: Award, label: "СМК", value: "ISO 9001:2015" },
  { icon: ShieldCheck, label: "Инспекции", value: "Bureau Veritas" },
];

export function CompanyHero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${factoryImage})` }}
      />

      <div className="container-main relative z-20 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="animate-fade-up">
            <h1 className="heading-lg text-background mb-4">
              Производство SINIKON
            </h1>
            <p className="text-lg text-background/80 mb-8 max-w-lg">
              Современное оборудование, многоступенчатый контроль качества 
              и&nbsp;соответствие российским и&nbsp;европейским стандартам.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollToSection("production-gallery")}
                className="btn-primary"
              >
                Фото производства
                <ArrowDown className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection("video-section")}
                className="btn-ghost bg-background/10 border-background/30 text-background hover:bg-background/20"
              >
                Видео о заводе
                <Play className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: Facts */}
          <div className="grid grid-cols-2 gap-3 animate-fade-up delay-200">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-xl p-4"
              >
                <fact.icon className="w-5 h-5 text-background/60 mb-2" />
                <p className="text-sm text-background/60">{fact.label}</p>
                <p className="text-base font-semibold text-background">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
