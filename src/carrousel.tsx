import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type MediaItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string };

const MEDIA: MediaItem[] = [
  { type: 'image', src: '/images/aulamo/au_01_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_02_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_03_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_04_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_05_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_06_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_07_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_08_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_09_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_10_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_11_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_12_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_13_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_14_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_15_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_16_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_17_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_18_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_19_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_20_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_21_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_22_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_23_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_24_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_25_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_26_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_27_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_28_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_29_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_30_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_31_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_32_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_33_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_34_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_35_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_36_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_37_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_38_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_39_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_40_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_41_ok.jpg', alt: '' },
  
  
  { type: 'image', src: '/images/aulamo/au_44_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_45_ok.jpg', alt: '' },
  
  { type: 'image', src: '/images/aulamo/au_47_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_48_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_49_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_50_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_51_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_52_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_53_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_54_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_55_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_56_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_57_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_58_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_59_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_60_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_61_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_62_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_63_ok.jpg', alt: '' },
  
  { type: 'image', src: '/images/aulamo/au_65_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_67_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_68_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_69_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_70_ok.jpg', alt: '' },
  { type: 'image', src: '/images/aulamo/au_71_ok.jpg', alt: '' },



  { type: 'video', src: '/videos/vau_01.mp4', alt: 'Vídeo de proyecto 1' },
  { type: 'video', src: '/videos/vau_02.mp4', alt: 'Vídeo de proyecto 2' },
  { type: 'video', src: '/videos/vau_03.mp4', alt: 'Vídeo de proyecto 3' },
  
  
];

type CarrouselProps = {
  open: boolean;
  onClose: () => void;
};

export default function Carrousel({ open, onClose }: CarrouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = MEDIA[activeIndex];

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open || !activeMedia) return null;

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + MEDIA.length) % MEDIA.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % MEDIA.length);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-3 sm:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="carrousel-title"
        className="flex h-[92dvh] max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-white/15 bg-zinc-950 shadow-2xl"
      >
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <h2 id="carrousel-title" className="truncate text-base font-bold text-white sm:text-lg">
              Proyectos de Aulamo S.L.
            </h2>
            <p className="text-xs text-white/50">
              {activeIndex + 1} de {MEDIA.length}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar galería"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
          >
            <X size={22} />
          </button>
        </header>

        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black px-12 py-3 sm:px-16 sm:py-5">
          {activeMedia.type === 'image' ? (
            <img
              key={activeMedia.src}
              src={activeMedia.src}
              alt={activeMedia.alt}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <video
              key={activeMedia.src}
              src={activeMedia.src}
              aria-label={activeMedia.alt}
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-contain"
            />
          )}

          {MEDIA.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Mostrar elemento anterior"
                className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:left-3"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Mostrar elemento siguiente"
                className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-3"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <footer className="shrink-0 border-t border-white/10 px-4 py-3 text-center sm:px-6">
          <p className="text-sm text-white/70">{activeMedia.alt}</p>
        </footer>
      </section>
    </div>
  );
}
