import { getCategories } from "@/actions/categories";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { CategoryColumns } from "./components/TableColumn";

export const metadata: Metadata = {
  title: "Categories",
};

const Page = async () => {
   const categories = await getCategories();

  return (
    <div className="p-4">
    <div className="flex items-center justify-between">
      <h3 className="font-bold text-4xl">Categories</h3>
      <Button asChild variant="indigo">
        <Link href="/dashboard/categories/new">New</Link>
      </Button>
    </div>
    <DataTable searchKey="title" data={categories} columns={CategoryColumns} />
  </div>
  );
};

export default Page;
