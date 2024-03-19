import React, { type CSSProperties } from "react";
import { cn } from "~/app/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}
export const H6: React.FC<Props> = ({ children, className, style }: Props) => {
  return (
    <>
      <h3 style={style} className={cn("text-xl uppercase", className)}>
        {children}
      </h3>
    </>
  );
};
