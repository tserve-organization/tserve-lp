import { ReviewCard } from "../components";
import { reviews } from "../mocks/reviews";

export function Review() {
  return (
    <section className="container mx-auto gap-[8px]">
      <span>DEPOIMENTOS DOS NOSSOS CLIENTES</span>
      <div className="flex items-center gap-[32px]">
        <h1>Porque escolher a Tserve?</h1>
        <span>Porque aqui você encontra ou oferece serviços de forma rápida, simples e sem burocracia. Do jeito que realmente te serve.</span>
      </div>

      <div className="flex items-center gap-[16px]">
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