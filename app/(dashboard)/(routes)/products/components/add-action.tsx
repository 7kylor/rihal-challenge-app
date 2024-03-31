"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export const AddAction = () => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/products/new`);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Add Product</CardTitle>
        <PlusCircle className="h-3.5 w-3.5" />
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground mb-2">
          Add a new product to your store.
        </p>
        <div className="ml-auto flex items-center gap-2 flex-row">
          <Button size="sm" className="h-9 gap-1 w-full" onClick={onClick}>
            <PlusCircle className="h-3.5 w-3.5" />
            <span>Add Product</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
