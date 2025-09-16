import { useEffect, useRef, useState } from "react";
import { ServiceCard } from "../components";
import { services } from "../mocks/services";

export function Services() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      // el ainda pode ser null em hot-reload; proteja
      const node = trackRef.current;
      if (!node) return;
      setAtStart(node.scrollLeft <= 0);
      const max = node.scrollWidth - node.clientWidth - 1; // folga
      setAtEnd(node.scrollLeft >= max);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollByView = (dir: "next" | "prev") => {
    const el = trackRef.current;
    if (!el) return;
    const delta = dir === "next" ? el.clientWidth : -el.clientWidth;

    // usar scrollTo evita warning de typings em alguns setups
    el.scrollTo({
      left: el.scrollLeft + delta,
      behavior: "smooth",
    });
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
            ref={trackRef}
            className="
              overflow-x-auto scroll-smooth
              snap-x snap-mandatory
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              pr-2
            "
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
              onClick={() => scrollByView("prev")}
              disabled={atStart}
              className="
                flex items-center justify-center w-8 h-8 rounded-full
                bg-primary-10 disabled:opacity-40 disabled:cursor-not-allowed
              "
              aria-label="Anterior"
            >

            </button>
            <button
              onClick={() => scrollByView("next")}
              disabled={atEnd}
              className="
                flex items-center justify-center w-8 h-8 rounded-full
                bg-primary-10 disabled:opacity-40 disabled:cursor-not-allowed
              "
              aria-label="Próximo"
            >

            </button>
          </div>
        </div> 
      </div>
    </section>
  );
}