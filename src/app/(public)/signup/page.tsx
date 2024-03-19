"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../_components/common/Input";
import H4 from "../../_components/common/H4";
import Button from "../../_components/common/Button";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const loginFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, { message: "Debe tener al menos 3 caracteres" }),

  lastName: z
    .string()
    .trim()
    .min(3, { message: "Debe tener al menos 3 caracteres" }),

  email: z.string().trim().email({ message: "Ingresa un email válido" }),

  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),

  companyName: z
    .string()
    .trim()
    .min(3, { message: "Debe tener al menos 3 caracteres" }),
});

const Page = () => {
  const { isLoaded, setActive, signUp } = useSignUp();
  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = React.useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async ({
    firstName,
    lastName,
    email,
    password,
    companyName,
  }: z.infer<typeof loginFormSchema>) => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: email,
        password,
        lastName,
        firstName,
        unsafeMetadata: {
          companyName,
        },
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerifying(true);
    } catch (err: any) {
      // TODO: Handle error with toast
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
      }
    } catch (err: any) {
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <div className="flex w-11/12 flex-col gap-8 pt-2 md:w-3/4 md:justify-center">
      <div>
        <H4>¡Bienvenido a Plan IT!</H4>

        <p className="pt-3 text-lg leading-5 tracking-tight">
          Por favor, complete su información personal para crear un usuario
          propio.
        </p>
      </div>

      {verifying ? (
        <form onSubmit={handleVerify}>
          <Input
            value={code}
            id="code"
            name="code"
            onChange={(e) => setCode(e.target.value)}
            placeholder="Ingrese el código envíado a su email"
          />

          <Button
            variant="primary"
            className="mt-16"
            type="submit"
            isLoading={isSubmitting}
          >
            Completar registro
          </Button>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("firstName")}
            placeholder="Nombre"
            errorText={errors.firstName?.message}
          />

          <Input
            {...register("lastName")}
            placeholder="Apellido"
            errorText={errors.lastName?.message}
          />

          <Input
            {...register("email")}
            placeholder="Email"
            errorText={errors.email?.message}
          />

          <Input
            {...register("password")}
            placeholder="Contraseña"
            type="password"
            errorText={errors.password?.message}
          />

          <Input
            {...register("companyName")}
            placeholder="Nombre de su empresa"
            errorText={errors.companyName?.message}
          />

          <Button
            variant="primary"
            className="mt-16"
            type="submit"
            isLoading={isSubmitting}
          >
            Registrarse
          </Button>
        </form>
      )}

      <button type="button">Register</button>
    </div>
  );
};

export default Page;
