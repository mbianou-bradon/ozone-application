import React from "react";
import { type ProductType } from "../../utils/types/productType";

export default function ProductCard({
  _id,
  name,
  stock,
  amount,
  currency,
  imageUrl,
  user,
  description,
}: ProductType) {
  return (
    <div className="max-w-[500px] border border-light_purplw hover:border-dark-purple h-fit p-6 rounded-md">
      <div className="w-full h-[250px]">
        <img src={imageUrl} alt={name} className="w-full h-full" />
      </div>
      <div>
        <h3 className="font-bold mt-1">{name}</h3>
        <p className="text-xs mt-4">{description}</p>
        <div className="flex items-center justify-between mt-3 text-xs">
          <p>
            Price:{" "}
            <span className="text-green-500">
              {amount} {currency}
            </span>
          </p>
          <p>
            Stock availability: <span className="text-green-500">{stock}</span>
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
