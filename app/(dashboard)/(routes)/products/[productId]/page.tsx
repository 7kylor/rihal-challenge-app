import { products } from "../_data/products-data";
import { ProductForm } from "./components/product-form";

export default function ProductPage() {
  return <ProductForm initialData={products} />;
}
