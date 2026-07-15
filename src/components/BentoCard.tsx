import { cn } from "@/lib/utils";

type BentoCardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  id?: string;
};

export function BentoCard({
  children,
  className,
  as: Component = "div",
  id,
}: BentoCardProps) {
  return (
    <Component
      id={id}
      className={cn(
        "rounded-2xl border border-white/[0.06] bg-card p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-colors hover:border-white/10",
        className,
      )}
    >
      {children}
    </Component>
  );
}
