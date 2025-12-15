import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const productLinks = [
  { name: "SINIKON Standart", href: "/catalog/sinikon-standart/" },
  { name: "Sinikon Comfort Plus", href: "/catalog/sinikon-comfort-plus/" },
  { name: "Rain Flow", href: "/catalog/rain-flow/" },
  { name: "SINIKON Universal", href: "/catalog/sinikon-universal/" },
  { name: "SINIKON НПВХ", href: "/catalog/sinikon-npvh/" },
  { name: "Трапы", href: "/catalog/trapy/" },
  { name: "Инструменты и монтаж", href: "/catalog/montazh/" },
  { name: "Отопление и водоснабжение", href: "/catalog/otoplenie-vodosnabzhenie/" },
];

const docsLinks = [
  { name: "Сертификаты", href: "/documents/#certificates" },
  { name: "Гарантия", href: "/documents/#warranty" },
  { name: "Материалы", href: "/documents/#promo" },
];

const companyLinks = [
  { name: "О компании", href: "/company/" },
  { name: "Наши объекты", href: "/objects/" },
  { name: "Вакансии", href: "/vacancies/" },
  { name: "Новости", href: "/news/" },
  { name: "Контакты", href: "/contacts/" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20 pb-24 lg:pb-20">
      <div className="container-main">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Logo and contacts */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-6 block">
              SINIKON
            </Link>
            <div className="space-y-4 text-background/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  108841, Россия, г. Москва,
                  <br />
                  г. Троицк, ул. Промышленная, 11
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <a href="tel:+74992706555" className="block hover:text-background transition-colors">
                    +7 (499) 270-65-55
                  </a>
                  <a href="tel:+74958406520" className="block hover:text-background transition-colors">
                    +7 (495) 840-65-20
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:office@sinikon.ru" className="hover:text-background transition-colors">
                  office@sinikon.ru
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Продукция</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Docs */}
          <div>
            <h4 className="font-semibold mb-4">Документы</h4>
            <ul className="space-y-2.5">
              {docsLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © 2009–2025 SINIKON. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy/"
              className="text-sm text-background/50 hover:text-background/80 transition-colors"
            >
              Политика обработки персональных данных
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
