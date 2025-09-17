type ButtonProps = {
  label: string
  onClick: () => void
}

export function Button({label, onClick}: ButtonProps) {
  return (
    <button
      className="flex items-center justify-center bg-primary-100 rounded-[30px] px-[16px] py-[13px] cursor-pointer"
      onClick={onClick}
    >
      <span className="text-white text-[16px] font-semibold">{label}</span>
    </button>
  );
}