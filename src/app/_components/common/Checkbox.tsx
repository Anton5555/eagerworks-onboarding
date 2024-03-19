import React from "react";

const Checkbox = React.forwardRef<
  HTMLInputElement,
  {
    label: string;
    autoFocus?: boolean;
  } & React.InputHTMLAttributes<HTMLInputElement>
>(({ autoFocus = true, label, ...rest }, ref) => (
  <div>
    <label className="text-sm font-normal">
      <input
        autoFocus={autoFocus}
        className="mr-2 p-2"
        ref={ref}
        type="checkbox"
        {...rest}
      />
      {label}
    </label>
  </div>
));

Checkbox.displayName = "Checkbox";

export default Checkbox;
