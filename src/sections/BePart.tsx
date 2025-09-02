import illustration from '../assets/icons/account-pana.svg';

export function BePart() {
  return (
    <section className="container mx-auto">
      <div className="flex items-center gap-[32px]">
        <div>
          <h1>Faça parte da Tserve!</h1>
          <span>Publique seus serviços, informe seus dados para contato e ganhe visibilidade nos seus negócios.</span>
        </div>
        <div className="flex self-center">
          <img src={illustration} alt="account" />
        </div>
      </div>
    </section>
  );
}