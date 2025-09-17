import { useEffect, useRef, useState } from "react";
import { ServiceCard } from "../components";
import { services } from "../mocks/services";
import { ArrowRight } from "../components/icons/ArrowRight";
import { ArrowLeft } from "../components/icons/ArrowLeft";
import { cn } from "../utils/cn";

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll);
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const scrollStep = 300;
    const scrollAmount = direction === 'right' ? scrollStep : -scrollStep;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const scrollMax = el.scrollWidth - el.clientWidth;
    const atStart = el.scrollLeft <= 10;
    const atEnd = el.scrollLeft >= scrollMax - 10;

    setCanScrollLeft(!atStart);
    setCanScrollRight(!atEnd);
  };

  return (
    <section className="container mx-auto px-[64px]">
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-tertiary-100 text-[32px] font-semibold">Do conserto da torneira ao buffet da sua festa</p>
          <p className="text-[16px]">Aqui você encontra profissionais de A a Z ou divulga seu talento pra quem precisa.</p>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="hide-scrollbar flex gap-4 overflow-x-auto scroll-smooth"
          >
            <div className="flex gap-[16px]">
              {services.map(item => (
                <div key={item.name} className="snap-start shrink-0 w-[280px]">
                  <ServiceCard service={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex items-center gap-[27px]">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={cn(
                'flex items-center justify-center w-8 h-8 rounded-full disabled:opacity-40 disabled:cursor-not-allowed',
                canScrollLeft ? 'bg-primary-10' : 'bg-neutral-35'
              )}
              aria-label="Anterior"
            >
              <ArrowLeft size={16} color={!canScrollLeft ? '#9CA3AF' : '#33CC99'} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={cn(
                'flex items-center justify-center w-8 h-8 rounded-full disabled:opacity-40 disabled:cursor-not-allowed',
                canScrollRight ? 'bg-primary-10' : 'bg-neutral-35'
              )}
              aria-label="Próximo"
            >
              <ArrowRight size={16} color={!canScrollRight ? '#9CA3AF' : '#33CC99'} />
            </button>
          </div>
        </div> 
      </div>
    </section>
  );
}