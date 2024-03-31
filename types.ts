export enum ProductStatus {
  Draft,
  Active,
  Archived,
}
export type Products = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  status: ProductStatus;
  createdAt: string;
  updatedAt: string;
  description: string;
};

export type ProductColumn = Products;

export type Orders = {
  id: string;
  customerName: string;
  orderType: string;
  total: number;
  status: string;
  createdAt: string;
};

export type OrderColumn = Orders;

export type Customers = {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  totalSpent: number;
};

export type CustomerColumn = Customers;
