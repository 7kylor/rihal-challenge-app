"use client";

import { Copy, Edit, Settings2, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

import axios from "axios";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { toast } from "sonner";
import { Orders } from "../../../../../types";

interface CellActionProps {
  data: Orders;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Order ID copied to clipboard.");
  };
  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/orders/${data.id}`);
      router.refresh();
      router.push(`/orders`);

      setOpen(false);
    } catch (error) {
      toast.error("Unable to delete order.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  return (
    <>
      {/* TODO: Alert Modal
       */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 p-0">
            <span className="sr-only">Open Menu</span>
            <Settings2 className="w-4 h-4 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Copy className="w-4 h-4 mr-2" />
            Copy ID
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/orders/${data.id}`)}>
            <Edit className="w-4 h-4 mr-2" />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="w-4 h-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
