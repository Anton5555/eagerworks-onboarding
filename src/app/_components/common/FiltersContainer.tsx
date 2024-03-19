"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterButton from "./FilterButton";

interface Filter {
  id: number;
  name: string;
}
interface FiltersContainerProps {
  filters: Filter[];
  filterType: string;
}

const FiltersContainer: React.FC<FiltersContainerProps> = ({
  filters,
  filterType,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setFilter = (id: number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    const currentFilters = newSearchParams.get(filterType)?.split(",");

    if (!currentFilters) newSearchParams.set(filterType, id.toString());
    else {
      const filterIndex = currentFilters?.indexOf(id.toString());

      if (filterIndex === -1) {
        currentFilters.push(id.toString());
        newSearchParams.set(filterType, currentFilters.join(","));
      } else if (currentFilters.length === 1)
        newSearchParams.delete(filterType);
      else {
        currentFilters.splice(filterIndex, 1);
        newSearchParams.set(filterType, currentFilters.join(","));
      }
    }

    router.replace(`${pathname}?${newSearchParams.toString()}`);
  };

  const filterActive = (id: number) =>
    searchParams.get(filterType)?.split(",").includes(id.toString());

  return (
    <div className="flex flex-row gap-6">
      {filters.map(({ id, name }) => (
        <FilterButton
          key={id}
          onClick={() => setFilter(id)}
          active={filterActive(id)}
        >
          {name}
        </FilterButton>
      ))}
    </div>
  );
};

export default FiltersContainer;
