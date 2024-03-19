import FiltersContainer from "~/app/_components/common/FiltersContainer";
import H4 from "~/app/_components/common/H4";
import H6 from "~/app/_components/common/H6";
import ProductCard from "~/app/_components/common/ProductCard";
import Sort from "~/app/_components/common/Sort";
import { api } from "~/trpc/server";
import { type RouterOutputs } from "~/trpc/shared";

type Review = RouterOutputs["gift"]["getFiltered"][number]["reviews"][number];

const sortProps = [
  { name: "Precio", value: "price" },
  { name: "Nombre", value: "name" },
];

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    attributes?: string;
    features?: string;
    query?: string;
    priceRange?: string;
    sortProp?: string;
    sortDirection?: string;
  };
}) => {
  const {
    attributes: attributesFilter,
    features: featuresFilter,
    query: textFilter,
    priceRange,
    sortProp,
    sortDirection,
  } = searchParams ?? {};

  const { attributes: attributesForCategory, features: featuresForCategory } =
    await api.gift.getAttributesAndFeaturesByCategoryId.query(1);

  const calculateRating = (reviews: Review[]) => {
    if (reviews.length === 0) return 0;

    const total: number = reviews.reduce(
      (acc, review) => acc + review.rating,
      0,
    );

    return total / reviews.length;
  };

  const gifts = await api.gift.getFiltered.query(
    {
      category: 1,
      attributes: attributesFilter
        ? attributesFilter.split(",").map(Number)
        : [],
      features: featuresFilter ? featuresFilter.split(",").map(Number) : [],
      text: textFilter,
      sortProp: sortProp ?? "name",
      sortDirection: sortDirection ?? "asc",
    },
    // {
    //   getNextPageParam: (lastPage) => lastPage.nextCursor,
    // },
  );

  return (
    <div className="mx-auto flex max-w-6xl flex-col justify-center md:pt-12">
      <div className="hidden flex-row md:flex">
        <H6>Regalos</H6>

        <H4>Food Box</H4>

        <p className="pt-3 text-lg leading-5 tracking-tight">
          Más de 30 opciones.
        </p>
      </div>
      <div className="flex flex-row justify-between pt-2">
        {!attributesForCategory ? (
          <p>Loading...</p>
        ) : (
          attributesForCategory?.length && (
            <FiltersContainer
              filters={attributesForCategory}
              filterType="attributes"
            />
          )
        )}

        {!featuresForCategory ? (
          <p>Loading...</p>
        ) : (
          <FiltersContainer
            filters={featuresForCategory}
            filterType="features"
          />
        )}

        <Sort sortItems={sortProps} />
      </div>

      <hr className="my-2 border-t-2 border-black" />

      <div className="flex flex-row flex-wrap pt-2">
        {!gifts ? (
          <p>Loading...</p>
        ) : (
          gifts.map((gift) => (
            <ProductCard
              key={gift.id}
              imageUrl={gift.images[0]!}
              productName={gift.name}
              rating={calculateRating(gift.reviews)}
              providerName={gift.provider.name}
              price={gift.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Page;
