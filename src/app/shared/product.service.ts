export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[]
  ) {}
}

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor() {}

  getProducts(): Product[] {
    return this.products.map(
      p =>
        new Product(
          p.id,
          p.title,
          p.price,
          p.rating,
          p.description,
          p.categories
        )
    );
  }

  getProductById(productId: number): Product {
    return this.products.find(p => p.id === productId);
  }

  products = [
    {
      id: 0,
      title: "First Product",
      price: 24.99,
      rating: 4.3,
      description:
        "This is a short description.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      categories: ["electronics", "hardware"]
    },
    {
      id: 1,
      title: "Second Product",
      price: 64.99,
      rating: 3.5,
      description:
        "This is a short description.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      categories: ["books"]
    },
    {
      id: 2,
      title: "Tercer Product",
      price: 74.99,
      rating: 3.5,
      description:
        "This is a short description.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      categories: ["books"]
    },
    {
      id: 3,
      title: "Cuarto Product",
      price: 84.99,
      rating: 4.2,
      description:
        "This is a short description.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      categories: ["books"]
    },
    {
      id: 4,
      title: "Quinto Product",
      price: 94.99,
      rating: 5,
      description:
        "This is a short description.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      categories: ["books"]
    },
    {
      id: 5,
      title: "Sexto Product",
      price: 54.99,
      rating: 4.6,
      description:
        "This is a short description.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      categories: ["books"]
    }
  ];
}
