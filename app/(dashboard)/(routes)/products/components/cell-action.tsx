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

import { Products } from "@/types";
import { toast } from "sonner";

interface CellActionProps {
  data: Products;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Product ID copied to clipboard.");
  };
  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api//products/${data.id}`);
      router.refresh();
      router.push("/products");

      setOpen(false);
    } catch (error) {
      toast.error("Unable to delete product.");
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
          <DropdownMenuItem onClick={() => router.push(`/products/${data.id}`)}>
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
