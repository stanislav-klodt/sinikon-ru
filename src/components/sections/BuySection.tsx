import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

const regions = [
  { name: "Москва", link: "/distributors/?city=moscow" },
  { name: "Санкт-Петербург", link: "/distributors/?city=spb" },
  { name: "Екатеринбург", link: "/distributors/?city=ekb" },
  { name: "Новосибирск", link: "/distributors/?city=nsk" },
];

export function BuySection() {
  return (
    <section id="buy" className="py-20 md:py-28 lg:py-32 bg-muted/30">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="section-number mb-4 block">05</span>
          <h2 className="heading-lg mb-4">Где купить</h2>
          <p className="text-body max-w-2xl">
            Поставки продукции SINIKON осуществляются через сеть дистрибьюторов.
          </p>
        </div>

        {/* Map and regions */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Map placeholder */}
          <div className="lg:col-span-2 aspect-[16/9] lg:aspect-[16/10] bg-secondary rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Карта дистрибьюторов</p>
              </div>
            </div>
            {/* Static map background */}
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
              alt="Карта"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>

          {/* Regions list */}
          <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-6">Быстрый выбор региона</h3>
            <ul className="space-y-3 mb-8">
              {regions.map((region) => (
                <li key={region.name}>
                  <Link
                    to={region.link}
                    className="flex items-center justify-between py-2 text-foreground hover:text-primary transition-colors group"
                  >
                    <span>{region.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/distributors/" className="btn-primary w-full">
              Список дистрибьюторов
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
