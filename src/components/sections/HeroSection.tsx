import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-3204307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      <div className="container-main relative z-20 py-24 md:py-32">
        <div className="max-w-3xl">
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
      </div>
    </section>
  );
}