import { cn } from "@/lib/utils";

export function Divider({
  className,
  hideBeforeBorder = true,
}: {
  className?: string;
  hideBeforeBorder?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw] before:border-y before:border-edge",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-border)]/56",
        className,
        hideBeforeBorder && "before:border-t-0"
      )}
    />
  );
}
