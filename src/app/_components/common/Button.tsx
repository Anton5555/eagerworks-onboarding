import React from "react";
import { Spinner } from "./Spiner";
import { cn } from "~/app/lib/utils";

const buttonClasses = {
  primary: "bg-gradient-to-tr from-blue to-lightBlue",
  outline: "outline-button",
};

const Button = React.forwardRef<
  HTMLButtonElement,
  {
    variant: "primary" | "outline";
    type: "submit" | "button";
    className: string;
    children: React.ReactNode;
    isLoading?: boolean;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    { variant = "primary", className, children, isLoading = false, ...rest },
    ref,
  ) => {
    return (
      <button
        {...rest}
        className={cn(
          [buttonClasses[variant]],
          className,
          " focus:ring-blue-500 w-full rounded-md border-none py-1 font-medium uppercase tracking-tight text-white transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50",
        )}
        ref={ref}
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
