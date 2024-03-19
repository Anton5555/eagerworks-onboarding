"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../_components/common/Input";
import H4 from "../../_components/common/H4";
import Checkbox from "../../_components/common/Checkbox";
import Button from "../../_components/common/Button";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const loginFormSchema = z.object({
  email: z.string().trim().email({ message: "Ingresa un email válido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
  rememberLoginData: z.coerce.boolean(),
});

const Page = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async ({
    email,
    password,
    rememberLoginData,
  }: z.infer<typeof loginFormSchema>) => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: email,
        password,
      });

      if (completeSignIn.status !== "complete") {
        console.log(JSON.stringify(completeSignIn, null, 2));
      }

      if (
        completeSignIn.status === "complete" &&
        completeSignIn.createdSessionId
      ) {
        await setActive({ session: completeSignIn.createdSessionId });
        if (rememberLoginData) {
          localStorage.setItem(
            "clerkSessionId",
            completeSignIn.createdSessionId,
          );
        }
        router.push("/");
      }
    } catch (err: any) {
      // TODO: Handle error with toast
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <div className="flex w-11/12 flex-col gap-8 pt-2 md:w-3/4 md:justify-center">
      <div>
        <H4>¡Hola, otra vez!</H4>

        <p className="pt-3 text-lg leading-5 tracking-tight">
          Por favor, confirma tu información para ingresar a Plan IT
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          type="email"
          placeholder="Email"
          errorText={errors.email?.message}
        />

        <Input
          {...register("password")}
          type="password"
          placeholder="Contraseña"
          errorText={errors.password?.message}
        />

        <Checkbox
          {...register("rememberLoginData")}
          label="Recordar mi información"
        />

        <Button
          variant="primary"
          className="mt-16"
          type="submit"
          isLoading={isSubmitting}
        >
          Iniciar sesión
        </Button>
      </form>

      <button type="button">Register</button>
    </div>
  );
};

export default Page;
