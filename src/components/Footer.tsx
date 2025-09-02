import { socialIcons } from '../assets/icons/social-networks'
import { menu, policy } from '../mocks/menu';

export function Footer() {
  return (
    <footer className="container mx-auto gap-[24px]">
      <div className="flex justify-between">
        <div>
          <h2>Já anotou o que você não quer fazer hoje?</h2>
          <span>Simples, mas seguro. Moderno, mas humano.</span>
        </div>

        <div className="gap-[8px]">
          <span>Nossas redes</span>
          <div className="flex items-center gap-[16px]">
            <img src={socialIcons.instagram} alt="instagram" />
            <img src={socialIcons.facebook} alt="facebook" />
            <img src={socialIcons.whatsapp} alt="whatsapp" />
            <img src={socialIcons.linkedin} alt="linkedin" />
          </div>
        </div>
      </div>

      <div className="flex justify-between border-b-[0.3px] border-b-amber-400">
        <div className="flex flex-col">
          <span>Menu</span>
          {menu.map(i => <span key={i}>{i}</span>)}
        </div>

        <div className="flex flex-col">
          <span>Políticas</span>
          {policy.map(i => <span key={i}>{i}</span>)}
        </div>
      </div>

      <div className="flex justify-end">
        <span>Ir para o topo</span>
      </div>
    </footer>
  );
}