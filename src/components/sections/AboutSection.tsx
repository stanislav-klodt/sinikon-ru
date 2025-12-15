import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import factoryImage from "@/assets/factory.jpg";
export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-32">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="section-number mb-4 block">07</span>
          <h2 className="heading-lg mb-4">Компания SINIKON</h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <p className="text-body mb-6">
              SINIKON — российский производитель трубной продукции европейского
              качества. Мы поставляем комплексные решения для систем канализации
              из современных полимерных материалов — собственного производства и
              наших европейских партнёров.
            </p>
            <Link to="/company/" className="btn-primary">
              Подробнее о компании
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Image */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src={factoryImage}
              alt="Завод SINIKON"
              className="w-full h-full object-cover -scale-x-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
