import { useNavigate } from "@tanstack/react-router";
import professional from "../assets/images/bg-professional.png";
import { Button } from "../components";

export function SearchProfessional() {
  const navigate = useNavigate();

  return (
    <section className="container">
      <div className="grid grid-cols-2 h-[330px] bg-primary-10 rounded-[20px]">
        <div className="relative">
          <img src={professional} alt="professional" className="absolute bottom-[0px] left-[40px]" />
        </div>
        <div className="flex flex-col justify-center gap-[8px]">
          <h1 className="text-primary-100 text-[32px] font-semibold">Precisa de uma diarista?</h1>
          <p className="text-[14px] mb-[8px]">Encontre profissionais de confiança perto de você.</p>
          <div>
            <Button label="Buscar profissionais" onClick={() => navigate({to: '/coming-soon'})} />
          </div>
        </div>
      </div>
    </section>
  );
}