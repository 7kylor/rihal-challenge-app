import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Orders } from "@/types";
import { Activity, CreditCard, Package2 } from "lucide-react";
import { AddAction } from "./add-action";

interface OrdersInfoProps {
  orders: Orders[];
}

const OrdersInfo = (props: OrdersInfoProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 w-full">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total orderss</CardTitle>
          <Package2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{props.orders.length}</div>
          <p className="text-xs text-muted-foreground">
            {props.orders.length} orders in total
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground">+201 since last hour</p>
        </CardContent>
      </Card>
      <AddAction />
    </div>
  );
};

export default OrdersInfo;
