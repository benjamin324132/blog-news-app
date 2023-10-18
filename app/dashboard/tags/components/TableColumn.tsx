"use client";

import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import CategoryActions from "./CategoryActions";
import { Tag } from "@prisma/client";
import TagActions from "./CategoryActions";

export const TagColumns: ColumnDef<Tag>[] = [
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
    cell: ({ row }) => <TagActions tag={row.original} />,
  },
];
