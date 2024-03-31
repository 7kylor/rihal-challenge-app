import { Orders } from "@/types";
import OrdersInfo from "./components/orders-info";
import OrdersTable from "./components/table";
import { orders } from "./_data/orders-data";

function OrdersPage() {
  return (
    <div className="flex flex-1 p-4 w-full flex-col gap-4 lg:gap-6 lg:p-6">
      <OrdersInfo orders={orders} />
      <OrdersTable orders={orders} />
    </div>
  );
}

export default OrdersPage;
