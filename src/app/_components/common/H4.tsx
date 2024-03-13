import React, { type CSSProperties } from "react";
import { cn } from "~/app/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}
export const H4: React.FC<Props> = ({ children, className, style }: Props) => {
  return (
    <>
      <h3 style={style} className={cn("text-4xl font-medium", className)}>
        {children}
      </h3>
    </>
  );
};
