"use client";

import React from "react";
import FiltersIcon from "./icons/filters";
import SearchIcon from "./icons/search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchBar: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleTextSearch = (text: string) => {
    const params = new URLSearchParams(searchParams);

    if (text) params.set("query", text);
    else params.delete("query");

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex h-10 w-full items-center justify-between rounded-3xl border border-gray bg-lightGray">
      <div className="flex w-full justify-center placeholder:text-[#444343] ">
        {/* TODO: change placeholder according to category */}
        <input
          type="text"
          onChange={(e) => handleTextSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
          className="bg-lightGray text-right focus-visible:outline-none"
          placeholder="Food Box"
        />

        <span className="px-4 text-sm font-light text-[#444343]">|</span>

        <input
          type="text"
          className="bg-lightGray focus-visible:outline-none"
          placeholder="$1000 - $2000"
        />
      </div>

      <div className="relative">
        {/* <div className="filters-button absolute left-0">
          <FiltersIcon />
        </div> */}

        <div className="absolute -top-4 right-0.5">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
