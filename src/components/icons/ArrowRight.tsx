import type { IconProps } from "./type";

export function ArrowRight({size, color}: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2.5 8H13.5" stroke={color ?? "#33CC99"} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 3.5L13.5 8L9 12.5" stroke={color ?? "#33CC99"} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}