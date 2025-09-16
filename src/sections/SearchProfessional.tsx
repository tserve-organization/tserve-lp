import professional from "../assets/images/bg-professional.png";

export function SearchProfessional() {
  return (
    <section className="container mx-auto px-[64px]">
      <div className="grid grid-cols-2 h-[330px] bg-primary-10 rounded-[20px]">
        <div className="relative">
          <img src={professional} alt="professional" className="absolute bottom-[0px] left-[40px]" />
        </div>
        <div className="flex flex-col justify-center gap-[8px]">
          <h1 className="text-primary-100 text-[32px] font-semibold">Precisa de uma diarista?</h1>
          <p className="text-[14px] mb-[8px]">Encontre profissionais de confiança perto de você.</p>
          <div>
            <button className="flex items-center justify-center bg-primary-100 rounded-[30px] px-[16px] py-[13px]">
              <span className="text-white text-[16px] font-semibold">Buscar profissionais</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}