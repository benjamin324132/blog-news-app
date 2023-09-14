"use client";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import UserActions from "./UserActions";
import { User } from "@prisma/client";

export const UserColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <span>{row.original.email}</span>,
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
    cell: ({ row }) => <UserActions user={row.original} />,
  },
];
