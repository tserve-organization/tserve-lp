import heroImg from '../assets/images/hero-img.png';
import searchIcon from '../assets/icons/search-icon.svg';

export function Hero() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-2 bg-neutral-10 rounded-[20px] p-[64px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[8px] max-w-[350px]">
            <div className="bg-primary-10 rounded-[30px] px-[8px] py-[4px] self-start">
              <span className="text-primary-100 text-[12px] font-semibold">Se te serve, tá aqui!</span>
            </div>
            <p className="text-tertiary-100 text-[48px] font-semibold">Profissionais confiáveis, prontos para <span className="text-primary-100 text-[48px] font-semibold">te servir</span></p>
            <p className="text-[16px]">Encontre ou ofereça serviços de forma rápida, simples e sem burocracia.</p>
          </div>
          <div className="flex items-center justify-between max-w-[350px] bg-white rounded-[30px] border-neutral-35 border-[0.5px] px-[16px] py-[14px]">
            <span className="text-[14px]">No que podemos te servir?</span>
            <img src={searchIcon} alt="Search Icon" />
          </div>
        </div>
        <div className="flex justify-center">
          <img src={heroImg} alt="Hero" className="rounded-[24px]" />
        </div>
      </div>
    </section>
  );
}