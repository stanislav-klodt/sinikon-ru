import { MapPin } from 'lucide-react';
import type { Distributor } from '@/data/distributors';

interface DistributorsMapProps {
  distributors: Distributor[];
  onMarkerClick: (id: string) => void;
}

export function DistributorsMap({ distributors, onMarkerClick }: DistributorsMapProps) {
  return (
    <section className="py-8">
      <div className="container-main">
        <div className="relative bg-muted/50 rounded-xl border border-border overflow-hidden" style={{ height: '50vh', minHeight: '400px' }}>
          {/* Placeholder Map */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/60">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground mb-2">Интерактивная карта</p>
              <p className="text-sm text-muted-foreground/70">Яндекс.Карты / Google Maps</p>
            </div>
          </div>

          {/* Fake Map Markers for Visual */}
          <div className="absolute inset-0 pointer-events-none">
            {distributors.slice(0, 5).map((dist, index) => (
              <div
                key={dist.id}
                className="absolute pointer-events-auto cursor-pointer group"
                style={{
                  left: `${20 + index * 15}%`,
                  top: `${30 + (index % 3) * 15}%`
                }}
                onClick={() => onMarkerClick(dist.id)}
              >
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-background rounded shadow-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-border">
                    {dist.companyName}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border">
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span>Дистрибьютор</span>
              </div>
              <span className="text-muted-foreground">
                {distributors.length} точек на карте
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
