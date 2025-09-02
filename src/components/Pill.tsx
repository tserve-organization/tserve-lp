interface PillProps {
  icon: string
  label: string
}

export function Pill({icon, label}: PillProps) {
  return (
    <div className="rounded-[10px] p-[10px]">
      <div className="items-end">
        <img src={icon} alt={`${label}-icon`} />
      </div>
      <span>{label}</span>
    </div>
  );
}