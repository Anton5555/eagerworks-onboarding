import FiltersContainer from "~/app/_components/common/FiltersContainer";
import { H4 } from "~/app/_components/common/H4";
import { H6 } from "~/app/_components/common/H6";
import ProductCard from "~/app/_components/common/ProductCard";
import { api } from "~/trpc/server";
import { type RouterOutputs } from "~/trpc/shared";

type Review = RouterOutputs["gift"]["getFiltered"][number]["reviews"][number];

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    attributes?: string;
    features?: string;
    query?: string;
    price?: string;
  };
}) {
  const {
    attributes: attributesFilter,
    features: featuresFilter,
    query: textFilter,
    price,
  } = searchParams ?? {};

  const { attributes: attributesForCategory, features: featuresForCategory } =
    await api.filter.getByCategoryId.query({
      categoryId: 1,
    });

  const calculateRating = (reviews: Review[]) => {
    if (reviews.length === 0) return 0;
    const total: number = reviews.reduce(
      (acc: number, review: Review) => acc + review.rating,
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
      sort: "name",
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
      <div className="flex flex-row justify-between">
        {attributesForCategory === undefined && <p>Loading...</p>}
        {attributesForCategory?.length && (
          <FiltersContainer
            filters={attributesForCategory}
            filterType="attributes"
          />
        )}
        {featuresForCategory === undefined && <p>Loading...</p>}
        {featuresForCategory?.length && (
          <FiltersContainer
            filters={featuresForCategory}
            filterType="features"
          />
        )}
        <div>sort</div>
      </div>
      <div className="border-t-2 border-black"></div>
      <div className="flex flex-row flex-wrap pt-2">
        {gifts === undefined && <p>Loading...</p>}
        {gifts?.length &&
          gifts.map((gift) => (
            <ProductCard
              key={gift.id}
              imageUrl={gift.images[0]!}
              productName={gift.name}
              rating={calculateRating(gift.reviews)}
              providerName={gift.provider.name}
              price={gift.price}
            />
          ))}
      </div>
    </div>
  );
}
