import { CategoryPresenter } from "./category.presenter";

export class ProductPresenter {
  id: number;
  name: string;
  price: string;
  description: string;
  category: CategoryPresenter;
}