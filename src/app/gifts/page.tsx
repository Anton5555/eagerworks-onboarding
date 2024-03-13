import React from "react";
import { H4 } from "../_components/common/H4";

export default function Page() {
  return (
    <div className="flex w-11/12 flex-col gap-8 pt-2 md:w-3/4 md:justify-center">
      <div>
        <H4>¡Bienvenido a Plan IT!</H4>
        <p className="pt-3 text-lg leading-5 tracking-tight">
          Por favor, complete su información personal para crear un usuario
          propio.
        </p>
      </div>
    </div>
  );
}
