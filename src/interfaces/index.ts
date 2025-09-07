// types.ts

export interface Product {
  id: string;
  name: string;
  details: string;
  price: number;
  image: any;
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
  image: any;
}
