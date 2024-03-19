import React from "react";
import cn from "~/app/lib/utils";

const FilterButton = React.forwardRef<
  HTMLButtonElement,
  {
    className?: string;
    children: React.ReactNode;
    active?: boolean;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, active = false, ...rest }, ref) => (
  <button
    {...rest}
    className={cn(
      className,
      "rounded-md border bg-transparent px-4 py-1 tracking-tight text-black outline-black transition-all duration-200 ease-in-out",
      active && "border-none bg-black text-white",
    )}
    type="button"
    ref={ref}
  >
    {children}
  </button>
));

FilterButton.displayName = "FilterButton";

export default FilterButton;
