import generate from "random-words";
import { type ProductType } from "./types";

export const categories: string[] = [
  "Electronics",
  "Clothing",
  "Home Goods",
  "Food",
  "Beauty",
];

export default function generateProduct(): ProductType {
  const name: string = generate(2).join(" ");
  const imageUrl: string = `https://picsum.photos/200/200?image=${Math.floor(
    Math.random() * 100
  )}`;
  const amount: number = Math.floor(Math.random() * (100 - 10) + 10);
  const currencies: ("EUR" | "USD" | "FCFA")[] = ["EUR", "USD", "FCFA"];
  const currency: "EUR" | "USD" | "FCFA" =
    currencies[Math.floor(Math.random() * currencies.length)];
  const description: string = generate(50).join(" ");
  const category: string =
    categories[Math.floor(Math.random() * categories.length)];
  const stock: number = Math.floor(Math.random() * 100);
  const user: string = "6563a9cdb9fde9fdffc83e38"; // Set user ID

  return {
    name,
    imageUrl,
    amount,
    currency,
    description,
    category,
    stock,
    user,
  };
}
