import React from "react";
import cn from "~/app/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const H6: React.FC<Props> = ({ children, className }: Props) => (
  <h3 className={cn("text-xl uppercase", className)}>{children}</h3>
);

export default H6;
