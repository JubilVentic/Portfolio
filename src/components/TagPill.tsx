import { cn } from "@/lib/utils";
import { getTechIcon } from "@/lib/techIcons";

type TagPillProps = {
  label: string;
  className?: string;
};

export function TagPill({ label, className }: TagPillProps) {
  const icon = getTechIcon(label);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300",
        className,
      )}
    >
      {icon && (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 shrink-0 text-zinc-200"
          aria-hidden
        >
          <path fill="currentColor" d={icon.path} />
        </svg>
      )}
      {label}
    </span>
  );
}
