export interface ProductType {
  _id: string;
  name: string;
  imageUrl: string;
  amount: number;
  currency: string;
  description: string;
  category: string;
  user: {
    brandName: string;
    streetAddress: string;
    city: string;
    phoneNumber: number;
  };

  stock: number;
}
