import { ArrowRight } from "lucide-react";

const anchors = [
  { num: "01", label: "Продукция", href: "#products" },
  { num: "02", label: "Документы", href: "#docs" },
  { num: "03", label: "Проектировщикам", href: "#designers" },
  { num: "04", label: "Где купить", href: "#buy" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      <div className="container-main relative z-20 py-24 md:py-32">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-2">
            <h1 className="heading-xl text-background mb-6 animate-fade-up">
              SINIKON — производитель труб
              <br className="hidden md:block" /> и&nbsp;фитингов для систем канализации
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 max-w-2xl animate-fade-up delay-100">
              Внутренняя и наружная канализация, водостоки
              <br className="hidden md:block" /> и инженерные системы.
            </p>
            <a
              href="/catalog/"
              className="btn-primary inline-flex animate-fade-up delay-200"
            >
              Каталог продукции
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right - anchors (desktop only) */}
          <div className="hidden lg:flex flex-col gap-4 animate-fade-up delay-300">
            {anchors.map((anchor) => (
              <a
                key={anchor.num}
                href={anchor.href}
                className="group flex items-center gap-4 py-3 text-background/60 hover:text-background transition-colors"
              >
                <span className="text-sm font-medium text-background/40 group-hover:text-primary transition-colors">
                  {anchor.num}
                </span>
                <span className="text-lg font-medium">{anchor.label}</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile anchors - horizontal chips */}
        <div className="lg:hidden flex flex-wrap gap-2 mt-12 animate-fade-up delay-300">
          {anchors.map((anchor) => (
            <a
              key={anchor.num}
              href={anchor.href}
              className="px-4 py-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full text-sm font-medium text-background hover:bg-background/20 transition-colors"
            >
              {anchor.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
