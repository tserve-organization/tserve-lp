import logo from '../assets/images/logo-white.png';
import { socialIcons } from '../assets/icons/social-networks';
import { menu, policy } from '../mocks/menu';
import arrowTop from '../assets/icons/arrow-top.svg';
import { useNavigate } from '@tanstack/react-router';

export function Footer() {
  const navigate = useNavigate();

  function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="bg-tertiary-100">
      <div className="container-footer">
        <div className="flex flex-row md:flex-col justify-between mb-[24px]">
          <div className="flex flex-col gap-[8px]">
            <img src={logo} alt="logo" className="w-[112px] mb-[16px]" />
            <h2 className="text-white text-[24px] font-semibold">Já anotou o que você não quer fazer hoje?</h2>
            <span className="text-white text-[14px]">Simples, mas seguro. Moderno, mas humano.</span>
          </div>

          <div className="flex flex-col gap-[8px]">
            <span className="text-neutral-40 text-[14px] font-semibold">Nossas redes</span>
            <div className="flex items-center gap-[16px]">
              <a href="https://www.instagram.com/tserveapp" target="_blank" className="cursor-pointer">
                <img src={socialIcons.instagram} alt="instagram" />
              </a>
              <a href="" target="_blank" className="cursor-pointer">
                <img src={socialIcons.facebook} alt="facebook" />
              </a>
              <a href="" target="_blank" className="cursor-pointer">
                <img src={socialIcons.whatsapp} alt="whatsapp" />
              </a>
              <a href="https://www.linkedin.com/company/tserve-app" target="_blank" className="cursor-pointer">
                <img src={socialIcons.linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between pb-[20px] border-b-[0.3px] border-neutral-60">
          <div className="flex flex-col gap-[8px]">
            <span className="text-neutral-40 text-[14px] font-semibold">Menu</span>
            {menu.map(i => <span key={i.label} className="text-asset-100 text-[14px] cursor-pointer">{i.label}</span>)}
          </div>

          <div className="flex flex-col gap-[8px]">
            <span className="text-neutral-40 text-[14px] font-semibold">Políticas</span>
            {policy.map(i => (
              <span
                key={i.label}
                className="text-asset-100 text-[14px] cursor-pointer"
                onClick={() => navigate({ to: i.path })}
              >
                {i.label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-[24px] text-right">
          <button className="inline-flex gap-[4px] cursor-pointer" onClick={goTop}>
            <span className="text-white text-[16px] font-semibold">Ir para o topo</span>
            <img src={arrowTop} alt="arrowTop" />
          </button>
        </div>
      </div>
    </footer>
  );
}