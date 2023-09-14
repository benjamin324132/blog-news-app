"use client";

import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import CategoryActions from "./CategoryActions";
import { Category } from "@prisma/client";

export const CategoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "slug",
    header: "Slug",
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
    cell: ({ row }) => <CategoryActions category={row.original} />,
  },
];
