import arrowRightIcon from '../assets/icons/arrow-right.svg';
import type { Services } from "../mocks/services";

interface ServiceCardProps {
  service: Services
}

export function ServiceCard({service}: ServiceCardProps) {
  return (
    <div className="rounded-[10px] shadow-[0_4px_20px_0_rgba(0,0,0,0.06)] bg-white">
      <div className="relative w-full h-[110px] overflow-hidden">
        <div className="absolute top-[12px] right-[16px] flex items-center gap-[4px] bg-secondary-15 px-[10px] py-[4px] rounded-[8px]">
          <span className="text-secondary-100 text-[10px] font-semibold">Serviços gerais</span>
          <img src={service.icon} alt="service icon" />
        </div>
        <img src={service.img} alt="card image" />
      </div>
      <div className="flex flex-col justify-between px-[16px] py-[10px] gap-[8px]">
        <div className="flex flex-col gap-[4px]">           
          <span className="text-tertiary-100 text-[14px] font-semibold">{service.name}</span>
          <span className="text-[12px]">{service.describe}</span>
        </div>
        <div className="flex justify-end">
          <button className="flex items-center gap-[4px] border-b-secondary-100 border-b-[0.8px] cursor-pointer">
            <span className="text-secondary-100 text-[12px] font-semibold">Ver todos</span>
            <img src={arrowRightIcon} alt="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
}