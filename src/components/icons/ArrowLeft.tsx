import type { IconProps } from "./type";

export function ArrowLeft({size, color}: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M13.5 8H2.5" stroke={color ?? "#33CC99"} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 3.5L2.5 8L7 12.5" stroke={color ?? "#33CC99"} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}