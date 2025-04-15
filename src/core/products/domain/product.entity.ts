import { Category } from "src/core/category/domain/category.entity";

type ProductProps = {
  id?: number;
  name: string;
  price: string;
  description: string;
  category: Category;
}

export class Product {
  id?: number;
  name: string;
  price: string;
  description: string;
  category: Category;

  constructor(props: ProductProps) {
    this.id = props.id;
    this.name = props.name;
    this.price = props.price;
    this.description = props.description;
    this.category = props.category;
  }

  static createProduct(props: ProductProps) {
    this.validate(props)

    return new Product({
      name: props.name,
      price: props.price,
      description: props.description,
      category: props.category,
    });
  }

  static validate(props: ProductProps) {
    const errors: string[] = [];

    if (!props.name || props.name.trim() === '') {
      errors.push('Nome do produto é obrigatório.');
    }

    if (!props.price || isNaN(Number(props.price))) {
      errors.push('Preço deve ser um número válido.');
    }

    if (!props.description || props.description.trim().length < 10) {
      errors.push('Descrição deve ter pelo menos 10 caracteres.');
    }

    if (!props.category) {
      errors.push('Categoria inválida.');
    }

    if (errors.length > 0) {
      throw new Error(errors.join(' | '));
    }
  }
}