import type { Metadata } from "next";

export function PageHeading({
  title,
  description,
}: {
  title: string;
  description?: Metadata["description"];
}) {
  return (
    <>
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">{title}</h1>
      </div>
      {description && (
        <div className="p-4">
          <p className="font-mono text-sm text-balance text-muted-foreground">
            {description}
          </p>
        </div>
      )}
    </>
  );
}
