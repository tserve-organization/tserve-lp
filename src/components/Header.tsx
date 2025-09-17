import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import logo from '../assets/images/logo-white.png';
import { menu } from '../mocks/menu';
import { Button } from './Button';
import { cn } from '../utils/cn';
import { useNavigate } from '@tanstack/react-router';

type MenuLabel = 'Início' | 'Serviços' | 'Blog' | 'Sobre Nós' | 'Contato';
type MenuLink = { path: string; label: MenuLabel };
type UnderlineItem = { left: number; width: number };

export function Header() {
  const navigate = useNavigate();

  // mantém só os itens previstos (evita algo estranho no mock)
  const items = useMemo<MenuLink[]>(() => {
    const allowed = new Set<MenuLabel>(['Início','Serviços','Blog','Sobre Nós','Contato']);
    return (menu as MenuLink[]).filter((i) => allowed.has(i.label));
  }, []);

  const [activeItem, setActiveItem] = useState<MenuLabel>('Início');
  const [underline, setUnderline] = useState<UnderlineItem>({ left: 0, width: 0 });

  const headerRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [plateW, setPlateW] = useState<number>(300);

  const navRef = useRef<HTMLDivElement | null>(null);
  const btnRefs = useRef<Record<MenuLabel, HTMLButtonElement | null>>({
    'Início': null, 'Serviços': null, 'Blog': null, 'Sobre Nós': null, 'Contato': null,
  });

  const setBtnRef = (label: MenuLabel) => (el: HTMLButtonElement | null) => {
    btnRefs.current[label] = el;
  };

  const recomputeUnderline = () => {
    const nav = navRef.current;
    const btn = btnRefs.current[activeItem];
    if (!nav || !btn) return;
    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setUnderline({ left: btnRect.left - navRect.left, width: btnRect.width });
  };

  const recomputePlate = () => {
    const cont = containerRef.current;
    const lg = logoRef.current;
    if (!cont || !lg) return;
    const contRect = cont.getBoundingClientRect();
    const logoRect = lg.getBoundingClientRect();
    const leftGap = contRect.left;
    const widthUntilLogo = logoRect.right - contRect.left;
    const extra = 16;
    setPlateW(leftGap + widthUntilLogo + extra);
  };

  useLayoutEffect(() => {
    const r1 = requestAnimationFrame(recomputeUnderline);
    const r2 = requestAnimationFrame(recomputePlate);
    const onResize = () => { recomputeUnderline(); recomputePlate(); };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(r1); cancelAnimationFrame(r2); window.removeEventListener('resize', onResize); };
  }, [activeItem]);

  useLayoutEffect(() => {
    const r1 = requestAnimationFrame(recomputeUnderline);
    const r2 = requestAnimationFrame(recomputePlate);
    return () => { cancelAnimationFrame(r1); cancelAnimationFrame(r2); };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-40 bg-white">
      {/* pintura esquerda */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 overflow-visible">
        <div style={{ width: plateW }} className="h-full bg-tertiary-100 rounded-br-full" />
        <div
          style={{ left: plateW - 28 }}
          className="absolute top-0 bottom-0 w-[80px] bg-asset-40 [clip-path:polygon(0%_0%,100%_0%,70%_100%,0%_100%)]"
        />
      </div>

      <div ref={containerRef} className="relative z-20">
        <div className="container mx-auto py-[10px] px-[64px]">
          <div className="flex items-center justify-between">
            <div className="self-stretch cursor-pointer" onClick={() => navigate({ to: '/', resetScroll: true })}>
              <img ref={logoRef} src={logo} alt="logo" className="w-[90px] h-[32px]" />
            </div>

            <div ref={navRef} className="relative flex items-center gap-[32px] pb-[6px]">
              {items.map(({ label, path }) => {
                const isActive = label === activeItem;
                return (
                  <button
                    key={label}
                    type="button"
                    ref={setBtnRef(label)}
                    className="relative px-1 flex items-center justify-center py-[4px] cursor-pointer select-none"
                    onClick={() => {
                      setActiveItem(label);
                      navigate({ to: path, resetScroll: true });
                    }}
                  >
                    <span
                      className={cn(
                        'text-[14px] font-semibold transition-colors duration-200',
                        isActive ? 'text-tertiary-100' : 'text-neutral-60 hover:text-tertiary-100',
                      )}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 h-[1.2px] bg-primary-100 transition-all duration-300 ease-out z-50"
                style={{ left: underline.left, width: underline.width }}
              />
            </div>

            <div>
              <Button label="Quero servir" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}