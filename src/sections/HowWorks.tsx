import { ChevronRight } from "../components/icons";
import { cn } from "../utils/cn";

export function HowWorks() {

  const steps = [
    {
      id: '01',
      title: 'Efetue seu cadastro',
      description: 'Em menos de 1 minuto e você já pode usar o nosso app.'
    },
    {
      id: '02',
      title: 'Escolha sua categoria',
      description: 'Encontre o que precisa ou publique o que você faz.'
    },
    {
      id: '03',
      title: 'Negocie direto',
      description: 'Combine preço, prazo e condições sem burocracia.'
    },
  ];

  return (
    <section className="container mx-auto px-[64px]">
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          <h1 className="text-tertiary-100 text-[32px] font-semibold">Como a Tserve funciona?</h1>
          <p className="text-[16px]">Encontre ou ofereça serviços de forma rápida, simples e sem burocracia.</p>
        </div>
        <div className="flex flex-row">
          {steps.map(({title, id, description}, index) => (
            <div key={id} className={cn(
              `relative flex flex-1 flex-col items-center justify-center gap-4 rounded-[20px] 
              border-[0.5px] border-neutral-40 px-[30px] py-[20px]`
            )}>
              <div className="flex flex-col gap-[8px]">
                <h1 className="text-primary-10 text-[50px] font-bold">{id}</h1>
                <h3 className="text-primary-100 text-[16px] font-semibold">{title}</h3>
                <p className="text-[14px]">{description}</p>
              </div>
              {index < steps.length - 1 && (
                <>
                  <div className={cn(`
                    absolute right-[-16px] top-12 z-10 hidden h-8 w-8 -translate-y-1/2 items-center 
                    justify-center rounded-full border-[0.5px] border-neutral-40 md:flex bg-white
                  `)}>
                    <ChevronRight />
                  </div>
                  <div className={cn(`
                    absolute bottom-[-16px] left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center
                    justify-center rounded-full border-[0.5px] border-neutral-40 md:hidden bg-white
                  `)}>
                    <ChevronRight />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}