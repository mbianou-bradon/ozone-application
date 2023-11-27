import React, { useEffect, useState } from "react";
import { Button, ProductCard } from "../../components";
import { useNavigate } from "react-router-dom";
import { type ProductType } from "../../utils/types/productType";
import client from "../../utils/api/axios";

export default function Home() {
  /** State management */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<ProductType[]>([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await client.get(`/products?page=${page}`);
      const data = await response.data.products;

      setProducts((prevItems) => [...(prevItems as ProductType[]), ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
      alert(`Error:  , ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  /** fetching data */
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);
  return (
    <div className="w-4/5 mx-auto">
      <nav className="flex items-center justify-between  h-20 bg-slate-300">
        <h2 className="text-2xl font-bold">Ozone</h2>
        <ul>
          <li>Home</li>
          <li></li>
        </ul>
        <div className="flex gap-4">
          <Button
            type="bordered"
            text="Sign in"
            onClick={() => navigate("/auth/sign-in")}
          />
          <Button
            type="bordered"
            text="Sign Up"
            onClick={() => navigate("/auth/sign-up")}
          />
        </div>
      </nav>

      <div className="flex items-center gap-5 justify-between flex-wrap mt-10">
        {Number(products?.length) > 0 ? (
          products?.map((product, index) => {
            return (
              <ProductCard
                key={index}
                _id={product._id}
                name={product.name}
                imageUrl={product.imageUrl}
                amount={product.amount}
                currency={product.currency}
                description={product.description}
                category={product.category}
                user={{
                  brandName: product.user.brandName,
                  streetAddress: product.user.streetAddress,
                  city: product.user.city,
                  phoneNumber: product.user.phoneNumber,
                }}
                stock={product.stock}
              />
            );
          })
        ) : (
          <p>No Product to display</p>
        )}
      </div>
    </div>
  );
}
