import icon from '../assets/icons/inverted-commas-icon.svg';

interface ReviewCardProps {
  name: string
  info: string
  description: string
}

export function ReviewCard({name, info, description}: ReviewCardProps) {
  return (
    <div className="rounded-[20px] p-[20px] gap-[16px]">
      <div>
        <img src={icon} alt="icon" />
      </div>
      <div className="gap-[4px]">
        <span>{name}</span>
        <span>{info}</span>
      </div>
      <span>{description}</span>
    </div>
  );
}