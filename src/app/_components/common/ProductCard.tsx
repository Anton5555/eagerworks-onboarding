import React from "react";
import Image from "next/image";
import StarIcon from "../icons/star";

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  rating: number;
  providerName: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  productName,
  rating,
  providerName,
  price,
}) => {
  return (
    <div className="m-2 rounded-md bg-white">
      <Image
        src={imageUrl ?? "/default-food.png"}
        alt={productName}
        width={210}
        height={150}
      />
      <div className="flex flex-col p-2">
        <div className="flex flex-row justify-between">
          <h3 className="w-3/4 font-medium">{productName}</h3>
          <div className="flex w-1/4 justify-end">
            <span>{rating}</span>
            <StarIcon />
          </div>
        </div>
        <p className="provider-name">{providerName}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
