import { useNavigate } from '@tanstack/react-router';
import illustration from '../assets/icons/account-pana.svg';
import arrowRight from '../assets/icons/arrow-right.svg';

export function BePart() {
  const navigate = useNavigate();

  return (
    <section className="container">
      <div className="grid grid-cols-2 bg-secondary-15 gap-[32px] rounded-[20px] px-[64px] py-[32px]">
        <div className="flex flex-col justify-center">
          <h1 className="text-secondary-100 text-[32px] font-semibold">Faça parte da Tserve!</h1>
          <span className="text-[14px] max-w-[400px]">Publique seus serviços, informe seus dados para contato e ganhe visibilidade nos seus negócios.</span>
          <div className="flex items-center gap-[4px] mt-[16px]" onClick={() => navigate({to: '/coming-soon'})}>
            <span className="text-tertiary-100 text-[14px] font-semibold">Comece agora</span>
            <img src={arrowRight} alt="arrowRight" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={illustration} alt="account" />
        </div>
      </div>
    </section>
  );
}