export type ProductType = {
  name: string;
  imageUrl: string;
  amount: number;
  currency: "EUR" | "USD" | "FCFA";
  description: string;
  category: string;
  stock: number;
  user: string;
};
