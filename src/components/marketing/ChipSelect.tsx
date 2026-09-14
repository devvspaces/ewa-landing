export function ChipSelect({
  options,
  selected,
  onToggle,
}: {
  options: readonly string[];
  selected: string[];
  onToggle: (option: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const on = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => onToggle(option)}
            className={
              on
                ? "rounded-full border-[1.5px] border-midnight bg-midnight px-[15px] py-2 text-[13.5px] font-medium text-creamy transition-all"
                : "rounded-full border-[1.5px] border-midnight/[.18] bg-transparent px-[15px] py-2 text-[13.5px] font-medium text-midnight/60 transition-all"
            }
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
