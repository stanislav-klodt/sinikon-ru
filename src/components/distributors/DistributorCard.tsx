import { Phone, Mail, Globe, MapPin, Clock, Copy, Navigation, Check, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import type { Distributor } from '@/data/distributors';

interface DistributorCardProps {
  distributor: Distributor;
}

const typeLabels: Record<string, string> = {
  wholesale: 'Дистрибьютор',
  retail: 'Розница',
  warehouse: 'Склад'
};

export function DistributorCard({ distributor }: DistributorCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyContacts = () => {
    const contactInfo = `${distributor.companyName}\n${distributor.address}\nТел: ${distributor.phone}\nEmail: ${distributor.email}`;
    navigator.clipboard.writeText(contactInfo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenRoute = () => {
    const url = `https://yandex.ru/maps/?rtext=~${distributor.coords.lat},${distributor.coords.lng}&rtt=auto`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-background rounded-xl border border-border p-5 hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-lg">{distributor.companyName}</h3>
            {distributor.pickup && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                Самовывоз
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-primary font-medium">{distributor.city}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{distributor.region}</span>
          </div>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground whitespace-nowrap">
          {typeLabels[distributor.type]}
        </span>
      </div>

      <div className="space-y-2 mb-4 text-sm">
        {distributor.address && (
          <div className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{distributor.address}</span>
          </div>
        )}
        {distributor.workingHours && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4 shrink-0" />
            <span>{distributor.workingHours}</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-3 mb-4 text-sm">
        <a
          href={`tel:${distributor.phone.replace(/[^\d+]/g, '')}`}
          className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
        >
          <Phone className="w-4 h-4" />
          {distributor.phone}
        </a>
        <a
          href={`mailto:${distributor.email}`}
          className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-4 h-4" />
          {distributor.email}
        </a>
        <a
          href={distributor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
        >
          <Globe className="w-4 h-4" />
          Сайт
        </a>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <Button asChild className="flex-1">
          <a href={`tel:${distributor.phone.replace(/[^\d+]/g, '')}`}>
            <Phone className="w-4 h-4 mr-2" />
            Позвонить
          </a>
        </Button>
        <Button variant="outline" onClick={handleOpenRoute} className="flex-1">
          <Navigation className="w-4 h-4 mr-2" />
          Маршрут
        </Button>
        <Button variant="ghost" onClick={handleCopyContacts} size="icon" className="shrink-0">
          {copied ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
