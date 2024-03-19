import React from "react";
import Logo from "./logos/logo";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Notifications from "./common/Notifications";
import ProfileButton from "./ProfileButton";

const links = [
  { href: "/gifts", label: "Regalos" },
  { href: "/catering", label: "Catering" },
  { href: "/merchandising", label: "Merchandising" },
  { href: "/events", label: "Eventos" },
];

const Header: React.FC = () => {
  const selected = 0;

  return (
    <header>
      <nav className="hidden justify-center gap-10 pt-6 md:flex">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            className={`inline-block bg-gradient-to-tr from-blue to-lightBlue bg-clip-text text-lg leading-tight text-transparent ${links[selected]?.label === label && "underline decoration-blue underline-offset-8"}`}
            href={href}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center justify-between px-16 py-4">
        <Logo width={96} height={34} />

        <div className="flex md:hidden">{/* Menu opening button */}Menu</div>

        <div className="hidden md:flex md:w-1/2">
          {/* TODO: Ubicar searchbar en mobile y modificar íconos e inputs */}
          <SearchBar />
        </div>

        <div className="hidden md:flex">
          <div className="flex gap-6">
            <Notifications />

            <ProfileButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
