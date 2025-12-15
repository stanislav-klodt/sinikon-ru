import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navigation = [
  { name: "Продукция", href: "/catalog/" },
  { name: "Проектировщикам", href: "/projectors/" },
  { name: "Документы", href: "/documents/" },
  { name: "Где купить", href: "/distributors/" },
  { name: "О компании", href: "/company/" },
  { name: "Новости", href: "/news/" },
  { name: "Контакты", href: "/contacts/" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border" 
          : "bg-background"
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              SINIKON
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side - phones and language */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm">
              <a
                href="tel:+74992706555"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                +7 (499) 270-65-55
              </a>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium">
              <button className="px-2 py-1 text-foreground">RU</button>
              <span className="text-border">/</span>
              <button className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors">
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <div className="container-main py-4">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-border">
              <a
                href="tel:+74992706555"
                className="flex items-center gap-2 px-3 py-2 text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                +7 (499) 270-65-55
              </a>
              <div className="flex items-center gap-2 px-3 py-2">
                <button className="text-sm font-medium text-foreground">RU</button>
                <span className="text-border">/</span>
                <button className="text-sm font-medium text-muted-foreground">EN</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
