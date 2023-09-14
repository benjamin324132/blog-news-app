"use client";

import { PostWithCategories } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import PostActions from "./PostActions";
import Image from "next/image";

export const PostColumns: ColumnDef<PostWithCategories>[] = [
  {
    accessorKey: "img",
    header: "Image",
    cell: ({ row }) => (
      <div className="relative w-20 h-20 bg-slate-500 overflow-hidden aspect-square">
        <Image
          src={row.original.img}
          fill
          alt={row.original.title}
          className=" object-cover"
        />
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "user",
    header: "Author",
    cell: ({ row }) => <span>{row.original.user.name}</span>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <span>{row.original.categoryRelation.title}</span>,
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => (
      <>{moment(row.original.createdAt).format("MMMM DD, yyyy")}</>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <PostActions post={row.original} />,
  },
];
