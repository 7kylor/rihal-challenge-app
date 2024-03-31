import { DataTable } from "@/components/ui/data-table";
import { Orders } from "@/types";
import { columns } from "./columns";

interface OrdersProps {
  orders: Orders[];
}

const OrdersTable: React.FC<OrdersProps> = ({ orders }) => {
  return (
    <div>
      <DataTable searchKey="customerName" data={orders} columns={columns} />
    </div>
  );
};

export default OrdersTable;
