import { DataTable } from "@/components/ui/data-table";
import { Products } from "../../../../../types";
import { columns } from "./columns";

interface ProductsProps {
  products: Products[];
}

const ProductsTable: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div>
      <DataTable searchKey="name" data={products} columns={columns} />
    </div>
  );
};

export default ProductsTable;
