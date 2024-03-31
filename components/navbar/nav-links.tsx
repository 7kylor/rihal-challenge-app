import { cn } from "@/lib/utils";
import { Package2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLinks({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const routes = [
    { href: "/", label: "Dashboard" },
    { href: "/orders", label: "Orders" },
    { href: "/products", label: "Products" },
    { href: "/analytics", label: "Analytics" },
  ];

  return (
    <nav className={cn("hidden flex-col gap-6 text-lg font-medium", className)}>
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2 className="h-6 w-6" />
        <span className="tracking-tight">Store Name</span>
      </Link>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`${
            pathname === route.href
              ? "text-foreground"
              : "text-muted-foreground"
          } transition-colors hover:text-foreground`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
