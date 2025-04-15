import { CategoryOutput } from "./category.output";

export type ProductsOutput = {
  id: number;
  name: string;
  price: string;
  description: string;
  category: CategoryOutput;
};
