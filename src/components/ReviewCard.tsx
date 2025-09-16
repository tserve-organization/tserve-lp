import icon from '../assets/icons/inverted-commas-icon.svg';

interface ReviewCardProps {
  name: string
  info: string
  description: string
}

export function ReviewCard({name, info, description}: ReviewCardProps) {
  return (
    <div className="flex flex-col bg-primary-10 rounded-[20px] p-[20px] gap-[16px]">
      <img src={icon} alt="icon" className="w-[32px] h-[32px]" />
      <div className="gap-[4px]">
        <p className="text-primary-100 text-[16px] font-semibold">{name}</p>
        <p className="text-neutral-60 text-[14px]">{info}</p>
      </div>
      <p className="text-tertiary-100 text-[16px] italic">{description}</p>
    </div>
  );
}