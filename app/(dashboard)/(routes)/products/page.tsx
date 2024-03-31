import { products } from "./_data/products-data";
import ProductsInfo from "./components/products-info";
import ProductsTable from "./components/table";

export default function ProductsPage() {
  return (
    <div className="flex flex-1 p-4 w-full flex-col gap-4 lg:gap-6 lg:p-6">
      <ProductsInfo products={products} />
      <ProductsTable products={products} />
    </div>
  );
}
