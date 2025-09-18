import profileIcon from '../assets/icons/profile-icon.svg';
import storeIcon from '../assets/icons/store.icon.svg';

export function Benefits() {
  return (
    <section className="container">
      <div className="flex flex-col gap-[24px]">
        <h1 className="text-tertiary-100 text-[32px] font-semibold">
          Benefícios para <span className="text-primary-100">clientes</span> e para {''}
          <span className="text-secondary-100">profissionais</span>!
        </h1>
        <div className="flex flex-col gap-[16px]">
          <div className="grid grid-cols-4 gap-[16px]">
            <div className="flex items-center justify-center bg-primary-10 rounded-[20px]">
              <img src={profileIcon} alt="profile icon" />
            </div>
            <div className="col-span-3 gap-[8px] bg-neutral-10 rounded-[20px] p-[20px]">
              <p className="text-tertiary-100 text-[16px] font-semibold">Para clientes</p>
              <p className="text-[14px]">
                Encontre profissionais em poucos cliques, com acesso a centenas de categorias de serviços. 
                Tudo de forma simples e sem complicação. Negocie direto, combine do seu jeito e tenha a 
                segurança de falar com quem realmente entende.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-[16px]">
            <div className="col-span-3 gap-[8px] bg-neutral-10 rounded-[20px] p-[20px]">
              <p className="text-tertiary-100 text-[16px] font-semibold">Para profissionais</p>
              <p className="text-[14px]">
                Ganhe visibilidade para seus serviços e seja encontrado por novos clientes todos os dias. 
                Na Tserve você tem liberdade para negociar valores e prazos, sem taxas escondidas, e mostra 
                seu talento direto para quem procura.
              </p>
            </div>
            <div className="flex items-center justify-center bg-secondary-15 rounded-[20px]">
              <img src={storeIcon} alt="store icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}