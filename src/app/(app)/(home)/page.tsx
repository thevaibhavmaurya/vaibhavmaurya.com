import ProfileHeader from "@/components/profile-header";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <ProfileHeader />
      <Separator />
    </div>
  );
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw] before:border-y before:border-border",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-border)]/56",
        className
      )}
    />
  );
}
