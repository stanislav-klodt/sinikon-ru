import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";

const videos = [
  {
    id: "factory",
    title: "О заводе SINIKON",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    // Replace with actual YouTube video ID
    youtubeId: "dQw4w9WgXcQ",
    fallbackUrl: "https://youtube.com/",
  },
  {
    id: "installation",
    title: "Монтаж раструбных канализационных систем",
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    // Replace with actual YouTube video ID
    youtubeId: "dQw4w9WgXcQ",
    fallbackUrl: "https://youtube.com/",
  },
];

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<Record<string, boolean>>({});

  return (
    <section id="video-section" className="py-16 md:py-24">
      <div className="container-main">
        <h2 className="heading-lg mb-8 md:mb-12">Видео</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted">
                {activeVideo === video.id && !loadError[video.id] ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    onError={() => setLoadError({ ...loadError, [video.id]: true })}
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors" />
                    
                    {loadError[video.id] ? (
                      <a
                        href={video.fallbackUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-background"
                      >
                        <ExternalLink className="w-12 h-12" />
                        <span className="font-medium">Открыть видео</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => setActiveVideo(video.id)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                          <Play className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground ml-1" />
                        </div>
                      </button>
                    )}
                  </>
                )}
              </div>
              <h3 className="text-lg font-semibold mt-4">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
