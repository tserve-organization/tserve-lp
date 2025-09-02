import { Pill } from "../components";
import { categories } from "../mocks/categories";

export function Categories() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col gap-[16px]">
        <div>
          <h3>Categorias mais procuradas</h3>
        </div>
        <div className="flex items-center gap-[8px]">
          {categories.map(c => <Pill key={c.label} label={c.label} icon={c.icon} />)}
        </div>
      </div>
    </section>
  );
}