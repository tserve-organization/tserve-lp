import { Pill } from "../components";
import { categories } from "../mocks/categories";

export function Categories() {
  return (
    <section className="container mx-auto px-[64px]">
      <div className="flex flex-col gap-[16px]">
        <div>
          <h3 className="text-tertiary-100 text-[16px] font-semibold">Categorias mais procuradas</h3>
        </div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(11rem,11rem))]">
          {categories.map(c => <Pill key={c.label} label={c.label} icon={c.icon} />)}
        </div>
      </div>
    </section>
  );
}