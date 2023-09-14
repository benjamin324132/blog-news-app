"use client";

import { cn } from "@/lib/utils";
import {
  Hexagon,
  LayoutGrid,
  Newspaper,
  PodcastIcon,
  Settings,
  Tag,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutGrid className="mr-2 w-5 h-5" />,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: <User className="mr-2 w-5 h-5" />,
  },
  {
    title: "Posts",
    href: "/dashboard/posts",
    icon: <Newspaper className="mr-2 w-5 h-5" />,
  },
  {
    title: "Categories",
    href: "/dashboard/categories",
    icon: <Hexagon className="mr-2 w-5 h-5" />,
  },
  {
    title: "Tags",
    href: "/dashboard/tags",
    icon: <Tag className="mr-2 w-5 h-5" />,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="mr-2 w-5 h-5" />,
  },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside>
      <div className="py-6 flex flex-col gap-y-4">
        <Link href="/" className=" hidden md:block pl-2 text-xl font-bold">
          INDIE<span className="font-light text-indigo-500">BLOG</span>
        </Link>
        {links.map((link) => (
          <div
            key={link.title}
            className={cn(
              "relative py-2 pl-2 font-medium text-zinc-500",
              pathname === link.href &&
                " bg-indigo-100 text-indigo-700 font-semibold"
            )}
          >
            {pathname === link.href ? (
              <div className="absolute left-0 top-0 w-1 h-full bg-indigo-600 rounded-tr-sm rounded-br-sm" />
            ) : null}
            <Link
              className="flex items-center"
              key={link.title}
              href={link.href}
            >
              <>
                {link.icon}
                <span className="hidden md:block">{link.title}</span>
              </>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
