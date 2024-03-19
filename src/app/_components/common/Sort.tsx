"use client";

import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ChevronIcon from "../icons/chevron";

interface SortItem {
  value: string;
  name: string;
}
interface SortProps {
  sortItems: SortItem[];
}

const Sort: React.FC<SortProps> = ({ sortItems }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleSortOption = (prop: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearchParams.get("sortProp") === prop) {
      const direction =
        newSearchParams.get("sortDirection") === "asc" ? "desc" : "asc";

      newSearchParams.set("sortDirection", direction);
    } else {
      newSearchParams.set("sortProp", prop);
      newSearchParams.set("sortDirection", "asc");
    }

    setIsOpen(false);

    router.replace(`${pathname}?${newSearchParams.toString()}`);
  };

  return (
    <Popover open={isOpen}>
      <PopoverTrigger asChild>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-row items-center"
        >
          Ordenar por <ChevronIcon direction={isOpen ? "up" : "down"} />
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-40">
        <div className="flex flex-col">
          {sortItems.map((sortItem, index) => (
            <div key={index} onClick={() => handleSortOption(sortItem.value)}>
              <div className="flex flex-row items-center">
                <p className="ml-2 text-sm font-light leading-tight text-black">
                  {sortItem.name}
                </p>
              </div>

              {index !== sortItems.length - 1 && (
                <hr className="my-2 border-b-[0.5px] border-black" />
              )}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Sort;
