import { ReactElement, cloneElement } from "react";

type Props = {
  icon?: ReactElement;
  contents?: string | number | null;
};

export default function ItemMetadata({ icon, contents }: Props) {
  return (
    <div className="flex gap-1 items-center h-1/2">
      {icon && cloneElement(icon, { size: "1rem" })}
      {contents && (
        <span className="text-muted-foreground text-md">{contents}</span>
      )}
    </div>
  );
}
