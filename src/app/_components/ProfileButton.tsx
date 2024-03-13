"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./common/Popover";
import { useUser } from "@clerk/nextjs";

const profileMenu = [
  { href: "/account", label: "Cuenta" },
  { href: "/favs", label: "Favoritos" },
  { href: "/orders", label: "Pedidos y Consultas" },
  { href: "/campaigns", label: "Campañas y métricas" },
];

const ProfileButton: React.FC = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { user, isLoaded } = useUser();

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const signOut = () => {
    // sign out logic
  };

  return (
    <>
      {isLoaded && user && (
        <Popover>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Image
                src={user.imageUrl}
                alt="Profile Picture"
                className="rounded-full"
                width={44}
                height={44}
              />
              <div>
                <span className="text-lg font-medium">{user.fullName}</span>
                <br />
                <PopoverTrigger asChild>
                  <Link
                    href={"#"}
                    onClick={togglePopover}
                    className="text-darkGray"
                  >
                    HR Manager{" "}
                    <span className="text-xs">{isPopoverOpen ? "▲" : "▼"}</span>
                  </Link>
                </PopoverTrigger>
              </div>
            </div>
            <div>
              <PopoverContent className="w-60">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between">
                    <div>
                      <span className="inline-block bg-gradient-to-tr from-blue to-lightBlue bg-clip-text text-lg font-medium leading-tight text-transparent">
                        1300
                      </span>
                      <br />
                      <span className="font-light leading-tight">Puntos</span>
                    </div>
                    <div className="flex items-end font-light leading-tight text-blue">
                      <Link href={""}>Ver más</Link>
                    </div>
                  </div>
                  <div className="my-2 border-b-[0.5px] border-black"></div>
                  {profileMenu.map((data, index) => (
                    <>
                      <Link
                        key={index}
                        href={data.href}
                        className="flex flex-row text-sm font-light leading-tight text-black transition-all duration-200 ease-in-out hover:text-blue"
                      >
                        {data.label}
                      </Link>
                      <div className="my-2 border-b-[0.5px] border-black"></div>
                    </>
                  ))}
                  <Link
                    key={"help"}
                    href={"/help"}
                    className="flex flex-row text-sm font-light leading-tight text-darkGray transition-all duration-200 ease-in-out hover:text-blue"
                  >
                    Ayuda
                  </Link>
                  <div className="my-2 border-b-[0.5px] border-black"></div>

                  <Link
                    key={"signout"}
                    href={""}
                    onClick={signOut}
                    className="flex flex-row text-sm font-light leading-tight text-darkGray transition-all duration-200 ease-in-out hover:text-blue"
                  >
                    Cerrar sesión
                  </Link>
                </div>
              </PopoverContent>
            </div>
          </div>
        </Popover>
      )}
    </>
  );
};

export default ProfileButton;
