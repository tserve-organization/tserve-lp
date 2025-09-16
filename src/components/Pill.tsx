interface PillProps {
  icon: string
  label: string
}

export function Pill({icon, label}: PillProps) {
  return (
    <div className="relative flex items-end h-[56px] bg-neutral-20 border-neutral-35 border-[0.5px] rounded-[10px] p-[10px]">
      <img src={icon} alt={`${label}-icon`} className="absolute top-[10px] right-[10px]" />
      <span className="text-tertiary-100 text-[12px] font-semibold">{label}</span>
    </div>
  );
}