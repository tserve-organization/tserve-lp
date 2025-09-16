import { ReviewCard } from "../components";
import { reviews } from "../mocks/reviews";

export function Review() {
  return (
    <section className="container mx-auto gap-[8px]">
      <span className="text-primary-100 text-[10px] font-semibold">DEPOIMENTOS DOS NOSSOS CLIENTES</span>
      <div className="flex items-center gap-[32px]">
        <h1 className="text-tertiary-100 text-[32px] font-semibold">Porque escolher a Tserve?</h1>
        <span className="text-[16px]">Porque aqui você encontra ou oferece serviços de forma rápida, simples e sem burocracia. Do jeito que realmente te serve.</span>
      </div>

      <div className="flex items-center gap-[16px] mt-[28px]">
        {reviews.map(r => (
          <ReviewCard
            key={r.name}
            name={r.name}
            info={r.info}
            description={r.decription}
          />
        ))}
      </div>
    </section>
  );
}