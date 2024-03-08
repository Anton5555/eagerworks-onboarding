import clsx from "clsx";
import React from "react";

const Input = React.forwardRef<
  HTMLInputElement,
  {
    label?: string;
    errorText?: string;
    onPaste?: React.ClipboardEventHandler<HTMLInputElement>;
    autoFocus?: boolean;
    type?: string;
  } & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    { autoFocus = true, type = "text", label, errorText, onPaste, ...rest },
    ref,
  ) => {
    return (
      <>
        <div className="mb-4">
          {label && <label className="text-sm font-medium">{label}</label>}
          <div className="relative">
            <input
              autoFocus={autoFocus}
              onPaste={onPaste}
              className={clsx(
                "mt-6 block w-full rounded-none border-b border-[#1C1C1C] p-2 text-lg font-normal placeholder:text-[#1C1C1C]",
                errorText && "border-red-500",
              )}
              ref={ref}
              type={type}
              {...rest}
            />
          </div>
          {
            <span className="color-red-500 mt-2 block text-sm">
              {errorText}
            </span>
          }
        </div>
      </>
    );
  },
);

Input.displayName = "Input";

export { Input };
