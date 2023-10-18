import { getTags } from "@/actions/tags";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { TagColumns } from "./components/TableColumn";
import { NewTagForm } from "@/components/forms/NewDialog";

export const metadata: Metadata = {
  title: "Categories",
};

const Page = async () => {
  const tags = await getTags();


  return <div className="p-4">
    <div className="flex items-center justify-between">
      <h3 className="font-bold text-4xl">Tags</h3>
      <NewTagForm />
    </div>
    <DataTable searchKey="title" data={tags} columns={TagColumns} />
  </div>;
};

export default Page;
