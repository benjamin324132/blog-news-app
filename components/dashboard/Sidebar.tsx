"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Posts",
    href: "/dashboard/posts",
  },
  {
    title: "Categories",
    href: "/dashboard/categories",
  },
  {
    title: "Tags",
    href: "/dashboard/tags",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
  },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside>
      <div className="py-6 flex flex-col gap-y-4">
        {links.map((link) => (
          <div
            key={link.title}
            className={cn(
              "relative py-2 pl-2 font-medium text-zinc-500",
              pathname === link.href &&
                " bg-indigo-100 text-indigo-700 font-semibold"
            )}
          > 
          {pathname === link.href ? <div className="absolute left-0 top-0 w-1.5 h-full bg-indigo-600 rounded-tr-sm rounded-br-sm" /> : null}
            <Link key={link.title} href={link.href}>
              {link.title}
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
