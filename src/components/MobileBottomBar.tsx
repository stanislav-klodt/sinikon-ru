import { useState, useEffect } from "react";
import { Grid3X3, MapPin } from "lucide-react";

export function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex">
        <a href="/catalog/" className="btn-mobile-fixed border-r border-border/50">
          <Grid3X3 className="w-5 h-5" />
          <span>Каталог</span>
        </a>
        <a href="#buy" className="btn-mobile-fixed bg-foreground text-background">
          <MapPin className="w-5 h-5" />
          <span>Где купить</span>
        </a>
      </div>
    </div>
  );
}
