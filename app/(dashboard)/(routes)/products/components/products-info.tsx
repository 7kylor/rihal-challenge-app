import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Products } from "@/types";
import { CreditCard, Package2, Users } from "lucide-react";
import { AddAction } from "./add-action";

interface ProductsInfoProps {
  products: Products[];
}
const ProductsInfo = (props: ProductsInfoProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 w-full">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Productss</CardTitle>
          <Package2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{props.products.length}</div>
          <p className="text-xs text-muted-foreground">
            {props.products.length} products in total
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Top Selling</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{props.products[3].name}</div>
          <p className="text-xs text-muted-foreground">+23% from all orders</p>
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
      <AddAction />
    </div>
  );
};

export default ProductsInfo;
