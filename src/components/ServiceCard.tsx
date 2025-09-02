
interface ServiceCardProps {
  icon: string
  title: string
  info: string
}

export function ServiceCard({icon, title, info}: ServiceCardProps) {
  return (
    <div className="rounded-[10px]">
      <div>

      </div>
      <div className="gap-[8px]">
        <div>
          <div className="flex items-center gap-[10px]">
            {icon}
            <span>{title}</span>
          </div>
          <span>{info}</span>
        </div>
        <div>
          <span>Ver todos</span>
        </div>
      </div>
    </div>
  );
}