
type IconProps = {
  size?: number
  color?: string
}

export function ChevronRight({size, color}: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M9 4.5L16.5 12L9 19.5" stroke={color ?? "#33CC99"} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}