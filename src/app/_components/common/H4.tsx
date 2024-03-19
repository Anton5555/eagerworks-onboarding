import React from "react";
import cn from "~/app/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const H4: React.FC<Props> = ({ children, className }: Props) => (
  <h3 className={cn("text-4xl font-medium", className)}>{children}</h3>
);

export default H4;
