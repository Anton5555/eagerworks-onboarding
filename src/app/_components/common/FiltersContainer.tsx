"use client";
import React from "react";
import { Button } from "./Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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

  return (
    <div>
      {filters.map(({ id, name }) => (
        <Button
          key={id}
          type="button"
          variant={
            searchParams.get(filterType)?.split(",").includes(id.toString())
              ? "primary"
              : "outline"
          }
          onClick={() => setFilter(id)}
        >
          {name}
        </Button>
      ))}
    </div>
  );
};

export default FiltersContainer;
