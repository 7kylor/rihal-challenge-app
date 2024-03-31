import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

export const AddAction = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium"> Create Order</CardTitle>
        <PlusCircle className="h-3.5 w-3.5" />
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground mb-2">
          Create a new order for your store. (Coming soon!)
        </p>
        <div className="ml-auto flex items-center gap-2 flex-row">
          <Button size="sm" className="h-9 gap-1 w-full" disabled>
            <PlusCircle className="h-3.5 w-3.5" />
            <span>Create Order</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
